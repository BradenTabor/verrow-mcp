# Verrow TypeScript SDK

Dependency-free client for `https://api.verrow.ai`.

```ts
import { VerrowClient } from "./src/index.js";

const verrow = new VerrowClient({ apiKey: process.env.VERROW_API_KEY! });
const coverage = await verrow.checkCoverage("jackson-ar", "zoning");
const siting = await verrow.solarSitingCheck({ jurisdiction: "jackson-ar", parcel: "12-34" });
```

Every method returns the standard Verrow envelope. A 422 means `UNKNOWN`/not covered and is never charged. For x402, pass a `fetch` implementation wrapped with the x402 buyer client; this SDK intentionally does not hold wallet keys.
