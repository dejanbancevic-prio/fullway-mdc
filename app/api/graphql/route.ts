// app/api/graphql/route.ts (or wherever your route.ts is)
import { NextRequest } from "next/server";
import { createBuiltMeshHTTPHandler } from "../../../.mesh";

/* --- Instrument global fetch early (server-side only) --- */
const _origFetch = (globalThis as any).fetch;
if (typeof _origFetch === "function") {
  (globalThis as any).fetch = async (input: any, init?: any) => {
    try {
      console.log("[GLOBAL FETCH] input:", String(input));
    } catch (err) {
      console.log("[GLOBAL FETCH] input stringify error", err);
    }
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
  console.log("[getAbsoluteUrl] host:", host, "proto:", protocol, "req.url:", req.url, "=>", abs);
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
  } catch (err: any) {
    console.error("[route.POST] handler error:", err?.stack ?? err);
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
  } catch (err: any) {
    console.error("[route.GET] handler error:", err?.stack ?? err);
    throw err;
  }
}
