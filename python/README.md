# Verrow Python SDK

Dependency-free client using `urllib`.

```python
from verrow.client import VerrowClient

verrow = VerrowClient(api_key="rk_replace_me")
print(verrow.solar_siting_check({"jurisdiction": "jackson-ar", "parcel": "12-34"}))
```

A 422 means `UNKNOWN`/not covered and is never charged. For x402, provide a `fetch` that signs x402 payments; this SDK intentionally does not hold wallet keys.
