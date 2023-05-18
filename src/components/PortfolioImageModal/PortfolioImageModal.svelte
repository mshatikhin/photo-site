<script lang="ts">
  import type { Image, PhotoSizes } from "../../types";
  import { onMount, onDestroy } from "svelte";
  import ImageModal from "../ImageModal/ImageModal.svelte";
  import { scrollToElement } from "../../utils/scrollToElement";

  export let image: Image | null = null;
  export let images: Image[] = [];
  export let onClose: () => void;
  let loading: boolean;
  let fullImageUrl: string | null = null;
  let fullImagesCache: Record<string, string> = {};

  function preloadSizes(fromIndex: number) {
    const windowCount = 5;
    for (let i = windowCount; i > 0; i--) {
      const id = images.at(fromIndex + i)?.id;
      id && getPhoto(id);
    }

    for (let i = 0; i <= windowCount; i++) {
      const id = images.at(fromIndex - i)?.id;
      id && getPhoto(id);
    }
  }

  onMount(async () => {
    if (!image) {
      return;
    }

    fullImageUrl = await getPhoto(image.id);
    const fromIndex = images.findIndex((i) => i.id === image?.id);

    preloadSizes(fromIndex);
  });

  onDestroy(() => {
    image && scrollToElement(`[data-id='${image.id}']`);
  });

  async function getPhoto(id: string) {
    if (fullImagesCache[id]) {
      return fullImagesCache[id];
    }

    try {
      loading = true;
      const response = await fetch(`/api/photos/${id}`);
      const json = (await response.json()) as PhotoSizes;
      return (fullImagesCache[id] = json.size.at(-1).source);
    } catch (e) {
      console.log(e);
    } finally {
      loading = false;
    }
  }

  async function handlePrev() {
    if (!image) {
      return;
    }

    const index = images.findIndex((i) => i.id === image?.id);
    const prevImage = images[index - 1];
    image = prevImage ? prevImage : image;

    fullImageUrl = await getPhoto(image.id);
    preloadSizes(index);
  }

  async function handleNext() {
    if (!image) {
      return;
    }

    const index = images.findIndex((i) => i.id === image?.id);
    const nextImage = images[index + 1];
    image = nextImage ? nextImage : image;

    fullImageUrl = await getPhoto(image.id);
    preloadSizes(index);
  }
</script>

<ImageModal {loading} previewImage={image.x1024} {fullImageUrl} prev={handlePrev} next={handleNext} {onClose} />
