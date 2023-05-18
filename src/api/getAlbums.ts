import type { Photosets } from "../types";
import { flickrUrlServer } from "./flickrUrl.server";

export const getAlbums = async (fetcher: typeof fetch): Promise<Photosets> => {
  try {
    const url = flickrUrlServer({ method: "flickr.photosets.getList", params: "&primary_photo_extras=url_z" });
    const response = await fetcher(url);
    const resp = await response.json();
    if (resp.stat !== "ok") {
      throw Error("Ошибка при попытке загрузить getList");
    }

    return resp.photosets;
  } catch (e) {
    return {} as Photosets;
  }
};
