from __future__ import annotations

import json
import urllib.error
import urllib.parse
import urllib.request
from typing import Any, Callable, Mapping


class VerrowError(Exception):
    def __init__(self, status: int, body: Any):
        super().__init__(f"Verrow HTTP {status}")
        self.status = status
        self.body = body


class VerrowClient:
    def __init__(
        self,
        api_key: str | None = None,
        base_url: str = "https://api.verrow.ai",
        opener: Callable[[urllib.request.Request], Any] | None = None,
    ) -> None:
        self.api_key = api_key
        self.base_url = base_url.rstrip("/")
        self.opener = opener or urllib.request.urlopen

    def _request(self, method: str, path: str, body: Mapping[str, Any] | None = None, query: Mapping[str, str] | None = None) -> dict[str, Any]:
        url = self.base_url + path
        if query:
            url += "?" + urllib.parse.urlencode(query)
        data = json.dumps(body).encode("utf-8") if body is not None else None
        headers = {"accept": "application/json"}
        if data is not None:
            headers["content-type"] = "application/json"
        if self.api_key:
            headers["authorization"] = f"Bearer {self.api_key}"
        request = urllib.request.Request(url, data=data, headers=headers, method=method)
        try:
            with self.opener(request, timeout=60) as response:
                return json.loads(response.read().decode("utf-8"))
        except urllib.error.HTTPError as error:
            payload = error.read().decode("utf-8")
            try:
                parsed = json.loads(payload)
            except json.JSONDecodeError:
                parsed = payload
            raise VerrowError(error.code, parsed) from error

    def list_coverage(self) -> dict[str, Any]:
        return self._request("GET", "/v1/coverage")

    def check_coverage(self, jurisdiction: str, data_kind: str | None = None) -> dict[str, Any]:
        query = {"jurisdiction": jurisdiction}
        if data_kind:
            query["data_kind"] = data_kind
        return self._request("GET", "/v1/coverage/check", query=query)

    def get_zoning(self, payload: Mapping[str, Any]) -> dict[str, Any]:
        return self._request("POST", "/v1/tools/get_zoning", payload)

    def get_site_report(self, payload: Mapping[str, Any]) -> dict[str, Any]:
        return self._request("POST", "/v1/tools/get_site_report", payload)

    def solar_siting_check(self, payload: Mapping[str, Any]) -> dict[str, Any]:
        return self._request("POST", "/v1/tools/solar_siting_check", payload)

    def county_pack(self, payload: Mapping[str, Any]) -> dict[str, Any]:
        return self._request("POST", "/v1/tools/county_pack", payload)
