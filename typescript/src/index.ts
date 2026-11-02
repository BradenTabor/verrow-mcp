export interface VerrowEnvelope<T = Record<string, unknown>> {
  request_id: string;
  tool: string;
  verdict: "ALLOWED" | "RESTRICTED" | "PROHIBITED" | "UNKNOWN" | null;
  answer: string;
  reasons: string[];
  sources: { title: string; url: string; page?: number | null; quote?: string | null; retrieved_at: string; document_sha256: string }[];
  coverage: { jurisdiction: string; covered: boolean; data_as_of: string | null };
  data_version: string;
  disclaimer: string;
  data?: T;
}

export interface VerrowClientOptions {
  apiKey?: string;
  baseUrl?: string;
  fetchImpl?: typeof fetch;
  /** Optional x402-wrapped fetch for pay-per-call without an API key. */
  fetchWithPayment?: typeof fetch;
}

export class VerrowError extends Error {
  constructor(readonly status: number, readonly body: unknown) {
    super(`Verrow HTTP ${status}`);
    this.name = "VerrowError";
  }
}

export class VerrowClient {
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;
  private readonly apiKey?: string;

  constructor(options: VerrowClientOptions = {}) {
    this.baseUrl = (options.baseUrl ?? "https://api.verrow.ai").replace(/\/+$/, "");
    this.fetchImpl = options.fetchWithPayment ?? options.fetchImpl ?? fetch;
    this.apiKey = options.apiKey;
  }

  private async request<T>(method: "GET" | "POST", path: string, body?: unknown, query?: Record<string, string>): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);
    for (const [key, value] of Object.entries(query ?? {})) url.searchParams.set(key, value);
    const headers: Record<string, string> = { accept: "application/json" };
    if (body !== undefined) headers["content-type"] = "application/json";
    if (this.apiKey) headers.authorization = `Bearer ${this.apiKey}`;
    const response = await this.fetchImpl(url.toString(), {
      method,
      headers,
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });
    const parsed = await response.json().catch(() => null);
    if (!response.ok) throw new VerrowError(response.status, parsed);
    return parsed as T;
  }

  listCoverage(): Promise<VerrowEnvelope<{ jurisdictions: unknown[] }>> {
    return this.request("GET", "/v1/coverage");
  }

  checkCoverage(jurisdiction: string, data_kind?: string): Promise<VerrowEnvelope> {
    return this.request("GET", "/v1/coverage/check", undefined, { jurisdiction, ...(data_kind ? { data_kind } : {}) });
  }

  getZoning(input: { jurisdiction: string; district?: string }): Promise<VerrowEnvelope> {
    return this.request("POST", "/v1/tools/get_zoning", input);
  }

  getSiteReport(input: { address: string; jurisdiction: string; latitude?: number; longitude?: number; parcel?: string }): Promise<VerrowEnvelope> {
    return this.request("POST", "/v1/tools/get_site_report", input);
  }

  solarSitingCheck(input: { jurisdiction: string; parcel?: string; address?: string; latitude?: number; longitude?: number; district?: string }): Promise<VerrowEnvelope> {
    return this.request("POST", "/v1/tools/solar_siting_check", input);
  }

  countyPack(input: { jurisdiction: string; label?: string }): Promise<VerrowEnvelope<{ api_key: string; credit_cents: number; expires_at: string }>> {
    return this.request("POST", "/v1/tools/county_pack", input);
  }
}
