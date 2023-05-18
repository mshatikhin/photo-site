import { flickrUrlServer } from "./flickrUrl.server";
import type { Photoset } from "../types";

export const getPhotoset = async (fetcher: typeof fetch, photosetId: string): Promise<Photoset> => {
  try {
    const url = flickrUrlServer({
      method: "flickr.photosets.getPhotos",
      params: `&photoset_id=${photosetId}`,
    });
    const response = await fetcher(url);
    const resp = await response.json();
    if (resp.stat !== "ok") {
      throw Error("Ошибка при попытке загрузить getPhotos");
    }

    return resp.photoset;
  } catch (e) {
    return {} as Photoset;
  }
};
