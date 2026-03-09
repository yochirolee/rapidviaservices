import { NextResponse } from "next/server";
import axios from "axios";

export const revalidate = 3600;

const HM_TIMEOUT_MS = 2000;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ hbl: string }> }
): Promise<NextResponse> {
  const hbl = (await params).hbl;

  if (!hbl) {
    return NextResponse.json({ historial: [] }, { status: 400 });
  }

  try {
    const HM_API_URL = "http://72.60.114.241/api/historial/envio";
    const upstreamUrl = `${HM_API_URL}/${hbl}/`;
    const response = await axios.get(upstreamUrl, {
      timeout: HM_TIMEOUT_MS,
    });

    return NextResponse.json(response.data);
  } catch (err) {
    const isTimeout =
      axios.isAxiosError(err) && err.code === "ECONNABORTED";
    return NextResponse.json(
      { historial: [] },
      { status: isTimeout ? 504 : 400 }
    );
  }
}
