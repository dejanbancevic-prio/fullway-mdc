export const runtime = "nodejs";


import { NextRequest } from "next/server";
import { createBuiltMeshHTTPHandler } from "../../../.mesh";

const handler = createBuiltMeshHTTPHandler();

export async function POST(req: NextRequest) {
  return handler(req);
}

export async function GET(req: NextRequest) {
  return handler(req);
}