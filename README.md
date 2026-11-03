# Verrow MCP

![Verrow logo](logo.png)


Verrow, LLC sells sourced rural public data to AI agents. This public repository is the listing and SDK example surface for the Verrow remote MCP server.

- **Remote MCP server:** https://api.verrow.ai/mcp (Streamable HTTP)
- **Logo:** https://api.verrow.ai/logo.png
- **Publisher:** Verrow, LLC
- **Support:** verrow-records@agentmail.to
- **Registry:** `io.github.BradenTabor/verrow`

## What Verrow is

Verrow answers questions about rural land, zoning, permits, public decisions, and related government data. Coverage starts with Harrison, Arkansas, Boone County, Arkansas, and nearby towns. Every answer is tied to its published source. When the data does not answer the question, Verrow returns `UNKNOWN` or `NOT_COVERED` instead of guessing.

## Tools

### Free

| Tool | What it does |
| --- | --- |
| `list_coverage` | List covered jurisdictions and data kinds. |
| `check_coverage` | Check coverage for a jurisdiction and data kind. |
| `get_pricing` | Return current per-call prices. |
| `create_api_key` | Create a prepaid API key, shown once. |
| `list_watches` | List watches for an owner token. |
| `cancel_watch` | Cancel a watch with its owner token. |

### Paid

| Tool | Price (USDC) |
| --- | --- |
| `get_wind` | 0.01 |
| `check_airspace` | 0.02 |
| `get_soil` | 0.02 |
| `check_state_registration` | 0.02 |
| `check_license` | 0.03 |
| `get_label_rate` | 0.05 |
| `get_zoning` | 0.10 |
| `get_recent_decisions` | 0.10 |
| `get_esa_limits` | 0.10 |
| `check_use_allowed` | 0.15 |
| `spray_check` | 0.50 |
| `solar_siting_check` | 0.75 |
| `get_site_report` | 4.00 |
| `watch_parcel` | 4.00 |
| `watch_town` | 9.00 |
| `request_coverage` | 5.00 |
| `topup_credits` | 5.00 |
| `county_pack` | 49.00 |

Prices are per call and can change. `get_pricing` is authoritative.

## Connect

Add the remote server to an MCP client that supports Streamable HTTP:

```json
{
  "mcpServers": {
    "verrow": {
      "url": "https://api.verrow.ai/mcp"
    }
  }
}
```

Free tools work without credentials. Paid tools either use x402 on Base mainnet or a prepaid Verrow API key.

### Prepaid API key

Create a key with `create_api_key` or `POST https://api.verrow.ai/v1/keys`, then send:

```http
Authorization: Bearer rk_...
```

Check the balance with `GET https://api.verrow.ai/v1/credits/balance`.

### x402

Paid endpoints return HTTP 402 with x402 payment requirements. Pay in **USDC on Base mainnet** using an x402 client. The buyer signs an EIP-3009 authorization; the facilitator submits settlement and pays gas. A successful call settles once. A 4xx `UNKNOWN` or `NOT_COVERED` response is not settled and is not charged.

## SDK examples

- [TypeScript](typescript/README.md)
- [Python](python/README.md)

The examples are thin HTTP clients. They do not hold wallet keys; bring your own x402-wrapped fetch or prepaid API key.

## Data and disclaimer

Data is compiled from public government sources and may be out of date or incomplete. Verrow cites the source used for each answer. This is not legal, engineering, financial, or compliance advice. Verify important decisions with the responsible agency. `UNKNOWN` means Verrow could not answer from its published data; it is not evidence that something is allowed or prohibited.

## License

MIT. See [LICENSE](LICENSE).
