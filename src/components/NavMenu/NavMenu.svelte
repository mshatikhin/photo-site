<script lang="ts">
  import { page } from "$app/stores";

  const portfolioRoutes: Array<{ id: string; caption: string }> = [
    { id: "72177720308444334", caption: "Outdoor" },
    { id: "72177720308433055", caption: "Indoor" },
  ];
</script>

<header>
  <div class="headerWrapper">
    <a href="/" class="logoLink">
      <span class="logoText">
        photography <span class="love">♥</span>
      </span>
      <span class="logoMainText">MIKHAIL SHATIKHIN</span>
    </a>
  </div>
  <nav>
    <ul>
      <li><a href="/" class:active={$page.url.pathname === "/"}>Home</a></li>
      {#each portfolioRoutes as portfolioRoute}
        <li>
          <a
            href={`/portfolio/${portfolioRoute.id}`}
            class:active={$page.url.pathname.includes(`/portfolio/${portfolioRoute.id}`)}>{portfolioRoute.caption}</a
          >
        </li>
      {/each}
      <li><a href="/contacts" class:active={$page.url.pathname.includes("/contacts")}>Contacts</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: block;
    height: auto;
    max-width: 100%;
    padding: 64px 0 40px 0;
    width: 100%;
  }

  nav {
    margin: 0 auto;
    max-width: 100%;
    text-align: center;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }

  nav ul li {
    display: inline-block;
  }

  nav ul li:not(:last-child) {
    margin-right: 20px;
  }

  .headerWrapper {
    margin: 0 auto;
    max-width: 100%;
    text-align: center;
    width: 960px;
  }

  .logoLink {
    font-weight: 300;
    font-family: "Source Code Pro", monospace;
  }

  .logoText {
    font-size: 18px;
    display: block;
    color: var(--text);
  }

  .logoMainText {
    display: block;
    font-size: 30px;
    color: var(--text);
    letter-spacing: 1.2px;
  }

  .love {
    color: red;
    transition: 0.2s font ease;
    animation: love infinite;
    animation-play-state: running;
  }

  @keyframes love {
    0% {
      font-size: 14px;
    }
    100% {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 950px) {
    nav {
      position: static;
    }
  }

  a {
    font-weight: 300;
    font-family: "Source Code Pro", monospace;
    padding-bottom: 4px;
    color: var(--text);
  }

  a.active {
    font-weight: 700;
    box-shadow: 0 1px 0 0 red;
  }
</style>
