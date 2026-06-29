import { NextRequest, NextResponse } from "next/server";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get("input");

  if (!input || !input.trim()) {
    return NextResponse.json({ predictions: [] });
  }

  if (!GOOGLE_MAPS_API_KEY) {
    return NextResponse.json(
      { error: "Google Maps API key not configured" },
      { status: 500 }
    );
  }

  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json"
    );
    url.searchParams.set("input", input);
    url.searchParams.set("components", "country:ng");
    url.searchParams.set("key", GOOGLE_MAPS_API_KEY);

    const response = await fetch(url.toString());
    const data = await response.json();
    

    if (data.status === "OK") {
      const predictions = data.predictions.map(
        (p: { description: string; place_id: string }) => ({
          description: p.description,
          place_id: p.place_id,
        })
      );
      return NextResponse.json({ predictions });
    }

    return NextResponse.json({ predictions: [] });
  } catch (error) {
    console.error("Places API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch places" },
      { status: 500 }
    );
  }
}
