# Verrow listing kit

One file with every field the directory forms ask for. No secrets. Publisher is always
**Verrow, LLC**. If a form asks for something not listed here, stop and ask the owner.

## Shared fields (use everywhere)

- **API / connector name:** `Verrow (ruralgraph)`
- **Publisher / legal name:** `Verrow, LLC`
- **Base URL:** `https://api.verrow.ai`
- **MCP URL (Streamable HTTP):** `https://api.verrow.ai/mcp`
- **OpenAPI:** `https://api.verrow.ai/openapi.json`
- **llms.txt:** `https://api.verrow.ai/llms.txt`
- **Logo:** `https://api.verrow.ai/logo.png` (512x512 PNG)
- **Support / contact:** `verrow-records@agentmail.to`
- **Terms:** `https://api.verrow.ai/terms`
- **Privacy:** `https://api.verrow.ai/privacy`
- **Repository:** `https://github.com/BradenTabor/verrow-mcp`
- **Registry name:** `io.github.BradenTabor/verrow`
- **Categories / tags:** `public data, zoning, government, agriculture, rural, real estate, AI agents, MCP, x402, pay-per-call`
- **One-liner (78 chars):** Sourced rural public data for AI agents, paid per call.
- **Short description (299 chars):** Rural public data for AI agents, priced per call. Covers Harrison AR and Boone County AR. Free tools list coverage, check coverage and show pricing. Paid tools return sourced answers. If a source cannot answer, the result is UNKNOWN and is not charged.
- **Long description (921 chars):** Verrow sells sourced rural public data to AI agents. Tools cover zoning and permitted uses, recent council and planning decisions, FAA airspace, NWS wind, EPA pesticide labels and endangered-species limits, USDA soil and site reports. Every answer cites its source URL, retrieval time and a sha256 of the stored document. Free tools show coverage and current prices before you pay. Paid calls use x402 with USDC on Base mainnet, or prepaid API credit. A not-covered request or a fully UNKNOWN answer is never charged. Data is compiled from public government sources, may be out of date, and is not legal advice. Coverage starts with Harrison, Arkansas and Boone County, Arkansas.

### Pricing copy

Free: `list_coverage`, `check_coverage`, `get_pricing`, `create_api_key`, `list_watches`,
`cancel_watch`. Paid tools are priced per call in USDC on Base mainnet; current prices are at
`https://api.verrow.ai/v1/pricing` and `get_pricing`. Payment uses x402 (no wallet integration for
the platform: the buyer agent pays per call) or prepaid API credit. `NOT_COVERED` and fully
`UNKNOWN` answers are not charged. Do not copy a price table into a listing; link to pricing.

### Payment / auth note

x402 with USDC on Base mainnet (`eip155:8453`), or `Authorization: Bearer rk_...` prepaid API
keys. Free discovery tools need no key. Paid tools settle only after a successful answer.

### Data / compliance note

Public government records, compiled and cited. Not legal, engineering, financial or compliance
advice. Verify important decisions with the responsible agency. Requests are logged for abuse
prevention; raw caller IPs are retained about 30 days, then hashed or dropped (see Privacy).

## Per-directory fields

### Claude connectors directory

- Login: owner's Anthropic/Claude account.
- Name: `Verrow (ruralgraph)`
- Connector URL: `https://api.verrow.ai/mcp`
- Transport: Streamable HTTP
- Short description: use the shared short description.
- Long description: use the shared long description.
- Logo: `https://api.verrow.ai/logo.png`
- Categories: `public data, government, agriculture, real estate`
- Support: `verrow-records@agentmail.to`
- Legal: `/terms`, `/privacy`
- Auth/payment: x402 USDC on Base; optional prepaid API key.
- Notes for review: free tools are safe to call without payment; paid tools return HTTP 402 with x402 requirements.

### Cursor MCP directory

- Login: owner's Cursor account.
- Name: `Verrow (ruralgraph)`
- MCP URL: `https://api.verrow.ai/mcp`
- Repository: `https://github.com/BradenTabor/verrow-mcp`
- Short/long description: shared versions.
- Logo: `https://api.verrow.ai/logo.png`
- Tags: `public-data, zoning, government, agriculture, rural, x402`
- Support: `verrow-records@agentmail.to`
- Legal: `/terms`, `/privacy`
- Permissions: network access to `api.verrow.ai`; no local filesystem or shell access.
- Payment: x402 USDC on Base; API keys optional.

### Circle Agent Marketplace

- Intake form: `https://forms.gle/7YFzvdmMcn1JH5tF6` (no login needed).
- Service endpoint: `https://api.verrow.ai`
- MCP: `https://api.verrow.ai/mcp`
- Payout wallet: `0xC3c8aC9879093e7D235C8b75EF41b105577BC342` (`verrow-payout`)
- Name/publisher: `Verrow (ruralgraph)` / `Verrow, LLC`
- Short/long description: shared versions.
- Logo: `https://api.verrow.ai/logo.png`
- Category/tags: shared categories.
- Settlement: x402 USDC on Base mainnet.
- Support/legal: shared support email and legal URLs.
- Review note: payout wallet is public and sanctions-screened by the facilitator.

### RapidAPI

- Login: owner's RapidAPI account.
- Import: `https://api.verrow.ai/openapi.json`
- Base URL: `https://api.verrow.ai`
- Name: `Verrow Rural Public Data`
- Short/long description: shared versions.
- Logo: `https://api.verrow.ai/logo.png`
- Category: `Data` / `Government` (closest available)
- Tags: shared tags.
- Support: `verrow-records@agentmail.to`
- Legal: `/terms`, `/privacy`
- Pricing: RapidAPI billing wraps the API. Do not promise a per-call price in the listing; link to `https://api.verrow.ai/v1/pricing`. Free discovery tools remain free.
- Note: if RapidAPI cannot express x402, list only the free discovery tools as free and mark paid tools as external x402 endpoints.

### APIs.guru

- Form: `https://apis.guru/add-api/` (no login).
- API name: `Verrow rural public data`
- Base URL: `https://api.verrow.ai`
- OpenAPI URL: `https://api.verrow.ai/openapi.json`
- Description: shared short description.
- Logo: `https://api.verrow.ai/logo.png`
- Contact: `verrow-records@agentmail.to`
- Tags: shared tags.
- Notes: spec is OpenAPI 3.1; public, persistent and self-serve.

### Glama

- Login: owner's Glama account.
- Repository: `https://github.com/BradenTabor/verrow-mcp`
- MCP URL: `https://api.verrow.ai/mcp`
- Name: `Verrow (ruralgraph)`
- Short/long description: shared versions.
- Logo: `https://api.verrow.ai/logo.png`
- Tags: shared tags.
- Support/legal: shared support email and legal URLs.
- Connector badge: request after the listing is live; punkpeye remote submission is blocked on this badge.

### PulseMCP

- Form: `https://www.pulsemcp.com/submit`
- Name: `Verrow (ruralgraph)`
- MCP URL: `https://api.verrow.ai/mcp`
- Repository: `https://github.com/BradenTabor/verrow-mcp`
- Short/long description: shared versions.
- Logo: `https://api.verrow.ai/logo.png`
- Tags: shared tags.
- Support/legal: shared support email and legal URLs.

### mcp.so

- Form: `https://mcp.so` -> Submit (browser only).
- Name: `Verrow (ruralgraph)`
- MCP URL: `https://api.verrow.ai/mcp` (streamable-http)
- Repository: `https://github.com/BradenTabor/verrow-mcp`
- Short/long description: shared versions.
- Logo: `https://api.verrow.ai/logo.png`
- Tags: shared tags.
- Support/legal: shared support email and legal URLs.

### Smithery

- Login: owner's GitHub account.
- Remote MCP URL: `https://api.verrow.ai/mcp`
- Name: `Verrow (ruralgraph)`
- Publisher: `Verrow, LLC`
- Short/long description: shared versions.
- Logo: `https://api.verrow.ai/logo.png`
- Tags: shared tags.
- Support/legal: shared support email and legal URLs.

### Apify Store

- Login: owner's Apify account; token required for publishing.
- Actor name: `Verrow Rural Data (ruralgraph)`
- URL: `https://api.verrow.ai`
- MCP: `https://api.verrow.ai/mcp`
- Short/long description: shared versions.
- Logo: `https://api.verrow.ai/logo.png`
- Categories: `public data, government, agriculture, rural`
- Monetization: pay per event, one event per paid tool; set event prices from `https://api.verrow.ai/v1/pricing`.
- Support/legal: shared support email and legal URLs.

### Postman public network

- Workspace owner: owner's Postman account.
- Import: `https://api.verrow.ai/openapi.json`
- Name: `Verrow Rural Public Data`
- Description: shared long description.
- Logo: `https://api.verrow.ai/logo.png`
- Auth: none for free tools; x402 for paid REST calls; Bearer `rk_...` for prepaid keys.
- Support/legal: shared support email and legal URLs.

### public-apis (GitHub)

- Repository: `https://github.com/public-apis/public-apis`
- Entry name: `Verrow Rural Public Data`
- Description: shared short description.
- Auth: `apiKey` for prepaid keys (free discovery tools need none).
- HTTPS: yes.
- CORS: unknown; verify before claiming. Do not claim CORS support in the PR.
- Link: `https://api.verrow.ai`
- Category: `Government` (closest existing category).
- Note: one honest PR; no marketing claims beyond the source of truth.

### ChatGPT apps directory

- Login: owner's OpenAI account.
- MCP URL: `https://api.verrow.ai/mcp`
- Name: `Verrow (ruralgraph)`
- Short/long description: shared versions.
- Logo: `https://api.verrow.ai/logo.png`
- Categories/tags: shared tags.
- Support/legal: shared support email and legal URLs.
- Note: review needs the published legal pages (now live) and a payment fit check.

## Things never to put in a listing

- API keys, wallet secrets, `.env` values or internal hostnames.
- Accuracy, uptime, row-count or coverage numbers that are not on `https://api.verrow.ai/stats`.
- A promise that a paid answer is always available; `NOT_COVERED` and `UNKNOWN` are valid outcomes.
