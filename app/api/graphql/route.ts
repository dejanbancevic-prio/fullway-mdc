// app/api/graphql/route.ts
import { NextRequest } from "next/server";
import { createBuiltMeshHTTPHandler } from "../../../.mesh";

/* --- Instrument global fetch early (server-side only) --- */
const _origFetch: typeof fetch | undefined = globalThis.fetch;

if (typeof _origFetch === "function") {
  globalThis.fetch = async (
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> => {
    const inputStr =
      typeof input === "string"
        ? input
        : input instanceof URL
        ? input.toString()
        : input instanceof Request
        ? input.url
        : Object.prototype.toString.call(input);

    console.log("[GLOBAL FETCH] input:", inputStr);

    return _origFetch(input, init);
  };
} else {
  console.log("[GLOBAL FETCH] no global fetch found");
}

/* --- rest of your route --- */
const handler = createBuiltMeshHTTPHandler();

function withCORS(response: Response) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  return response;
}

function getAbsoluteUrl(req: NextRequest) {
  const host = req.headers.get("host") ?? "localhost:3000";
  const protocol = req.headers.get("x-forwarded-proto") || "https";
  const abs = `${protocol}://${host}${req.url}`;
  console.log("[getAbsoluteUrl]", { host, protocol, reqUrl: req.url, abs });
  return abs;
}

export async function POST(req: NextRequest) {
  try {
    const meshRequest = new Request(getAbsoluteUrl(req), {
      method: req.method,
      headers: req.headers,
      body: req.body,
      duplex: "half",
    } as RequestInit & { duplex: "half" });

    console.log("[route.POST] meshRequest.url:", meshRequest.url);
    const res = await handler(meshRequest);
    return withCORS(res);
  } catch (err) {
    console.error("[route.POST] handler error:", err);
    throw err;
  }
}

export async function GET(req: NextRequest) {
  try {
    const meshRequest = new Request(getAbsoluteUrl(req), {
      method: req.method,
      headers: req.headers,
    });
    console.log("[route.GET] meshRequest.url:", meshRequest.url);
    const res = await handler(meshRequest);
    return withCORS(res);
  } catch (err) {
    console.error("[route.GET] handler error:", err);
    throw err;
  }
}
