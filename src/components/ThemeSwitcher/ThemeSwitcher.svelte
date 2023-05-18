<script lang="ts">
  let themeName = `dark`;

  function toggleTheme() {
    themeName = themeName === "dark" ? "light" : "dark";
  }
</script>

<svelte:head>
  {#if themeName === "light"}
    <link rel="stylesheet" href="/assets/light-mode.css" />
  {/if}
</svelte:head>

<div class="container">
  <input type="checkbox" id="themeSwitch" name="theme-switch" class="theme-switch__input" on:click={toggleTheme} />
  <label for="themeSwitch" class="theme-switch__label">
    <span>{themeName === "light" ? "🌜 Dark" : "🌞 Light"}{" "}mode</span>
  </label>
</div>

<style>
  .container {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
  }

  .theme-switch__input {
    width: 0;
    height: 0;
  }

  .theme-switch__label {
    padding: 4px 16px 4px 12px;
    border-radius: 4px;
    background: #666;
    color: var(--text-inverse);
    width: 120px;
    height: 40px;
  }

  .theme-switch__label:hover {
    cursor: pointer;
  }
</style>
