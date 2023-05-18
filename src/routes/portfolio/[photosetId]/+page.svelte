<script lang="ts">
  import type { Image } from "../../../types";
  import PortfolioImageModal from "../../../components/PortfolioImageModal/PortfolioImageModal.svelte";
  let selectedPhoto: Image | null = null;
  export let data: { photos: Image[] };
  const onClose = () => (selectedPhoto = null);
</script>

<section>
  {#if selectedPhoto}
    <PortfolioImageModal image={selectedPhoto} images={data.photos} {onClose} />
  {/if}
  <div class="gallery-container">
    {#each data.photos as photo, index}
      <a href={`#${photo.id}`} on:click={() => (selectedPhoto = photo)} data-id={photo.id}>
        <picture>
          <source srcset={photo.x640} media="(min-width: 640px)" />
          <source srcset={photo.x800} media="(min-width: 800px)" />
          <img src={photo.x1024} alt={`Изображение ${index}`} data-url={photo.url} />
        </picture>
      </a>
    {/each}
  </div>
</section>

<style>
  .gallery-container {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    row-gap: 32px;
    column-gap: 32px;
  }

  section {
    max-width: 1440px;
    min-height: 100%;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  a {
    display: block;
    width: calc(50% - 16px);
    margin: 0;
  }

  a:hover {
    cursor: pointer;
  }

  a:focus img {
    outline: 2px solid #ddd;
  }

  img {
    display: block;
    margin: auto;
    height: 480px;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 950px) {
    .gallery-container a {
      width: 100%;
    }
  }
</style>
