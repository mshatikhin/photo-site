<script lang="ts">
  import { shortcut } from "../../utils/shortcut";
  import Loader from "../Loader/Loader.svelte";
  import { onDestroy, onMount } from "svelte";

  export let previewImage: string | null = null;
  export let fullImageUrl: string | null = null;
  export let loading: boolean;
  export let next: () => void;
  export let prev: () => void;
  export let onClose: () => void;

  onMount(() => {
    document.body.classList.add("modal-opened");
  });

  onDestroy(() => {
    document.body.classList.remove("modal-opened");
  });
</script>

<div>
  <div class="modal" class:loading>
    {#if loading}
      <div class="modal-loader">
        <Loader />
      </div>
    {/if}
    <div class="modal-guts">
      <button class="modal-close" on:click={onClose} use:shortcut={{ code: "Escape" }} title="Закрыть">×</button>
      <div class="modal-photo">
        <button use:shortcut={{ code: "ArrowLeft" }} on:click={prev} class="control prev">&nbsp;</button>
        <picture>
          {#if fullImageUrl}
            <source srcset={fullImageUrl} media="(min-width: 1024px)" />
          {/if}
          <img src={previewImage} alt="Изображение" />
        </picture>
        <button use:shortcut={{ code: "ArrowRight" }} on:click={next} class="control next">&nbsp;</button>
      </div>
    </div>
  </div>
  <div class="modal-overlay">&nbsp;</div>
</div>

<style>
  .control {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30%;
    z-index: 1;
  }

  .control:hover {
    cursor: pointer;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1010;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
  }

  .modal-loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1020;
  }

  .modal-close {
    position: absolute;
    right: 20px;
    top: -20px;
    font-size: 60px;
    z-index: 1000000;
    padding: 20px;
  }

  .modal-close:hover {
    cursor: pointer;
  }

  .modal-guts {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
  }

  .modal-overlay {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-overlay);
    backdrop-filter: blur(16px);
  }

  .modal-photo {
    position: relative;
  }

  .modal-photo img {
    user-select: none;
    pointer-events: none;
    display: block;
    margin: auto;
    border: 0;
    vertical-align: top;
    max-height: 100vh;
    max-width: 100vw;
    width: 100vw;
    object-fit: contain;
  }
</style>
