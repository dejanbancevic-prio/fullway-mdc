import { NextRequest } from "next/server";
import { createBuiltMeshHTTPHandler } from "../../../.mesh";

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

export async function POST(req: NextRequest) {
  const meshRequest = new Request(req.url, {
    method: req.method,
    headers: req.headers,
    body: req.body,
    duplex: "half", 
  } as RequestInit & { duplex: "half" });

  const res = await handler(meshRequest);
  return withCORS(res);
}

export async function GET(req: NextRequest) {
  const meshRequest = new Request(req.url, {
    method: req.method,
    headers: req.headers,
  });

  const res = await handler(meshRequest);
  return withCORS(res);
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    },
  });
}
