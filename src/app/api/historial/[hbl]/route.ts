import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ hbl: string }> }
) {
  const hbl = (await params).hbl;

  if (!hbl) {
    return NextResponse.json({ error: 'HBL is required' }, { status: 400 });
  }

  try {
    const HM_API_URL = 'http://72.60.114.241/api/historial/envio';
    const upstreamUrl = `${HM_API_URL}/${hbl}`;
    const response = await axios.get(upstreamUrl);

    return NextResponse.json(response.data);
  } catch {
    return NextResponse.json({ historial: [] });
  }
}
