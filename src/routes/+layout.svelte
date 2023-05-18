<script lang="ts">
  import "../app.css";
  import NavMenu from "../components/NavMenu/NavMenu.svelte";
  import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher.svelte";
</script>

<ThemeSwitcher />
<NavMenu />

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    height: 100%;
    min-height: 100vh;
  }
</style>
