import { getSizes } from "../../../../api/getSizes";
import { error, json } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit";

export async function GET({ fetch, params, setHeaders }: RequestEvent) {
  if (!params.photoId) {
    error(400);
  }

  const response = await getSizes(fetch, params.photoId);

  setHeaders({
    "Cache-Control": "max-age=600",
  });

  return json(response);
}
