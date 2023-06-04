import { error, redirect } from "@sveltejs/kit";
import { getPhotoset } from "../../../api/getPhotoset";
import { buildFlickrUri } from "../../../utils/buildFlickrUri";
import { Size } from "../../../utils/Size";
import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch, params, setHeaders }) => {
  const { photosetId = "" } = params as { photosetId?: string };
  if (!photosetId) {
    throw redirect(303, "/");
  }

  try {
    const photoset = await getPhotoset(fetch, photosetId);
    const photos = photoset.photo.map((photo) => ({
      id: photo.id,
      x640: buildFlickrUri(photo, Size.x640),
      x800: buildFlickrUri(photo, Size.x800),
      x1024: buildFlickrUri(photo, Size.x1024),
    }));

    setHeaders({
      "Cache-Control": "max-age=600",
    });

    return {
      photos,
    };
  } catch (e) {
    throw error(404);
  }
}) satisfies PageServerLoad;
