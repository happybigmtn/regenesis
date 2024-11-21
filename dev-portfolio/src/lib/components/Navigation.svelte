<script lang="ts">
  const links = [
    { name: "Learning", href: "#focus-areas" },
    { name: "Projects", href: "#projects" },
    { name: "Progress", href: "#progress" },
  ];
</script>

<div class="nav-container default-margin">
  <nav class="navigation">
    <ul>
      {#each links as { name, href }}
        <li>
          <a {href}>{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    pointer-events: none;
  }

  .navigation {
    float: right;
    margin-top: 2rem;
  }

  ul {
    list-style: none;
    padding: 0.5rem 1rem;
    margin: 0;
    display: flex;
    gap: 2rem;
    pointer-events: auto;
    background: var(--color-background);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
  }

  a {
    color: var(--color-text);
    text-decoration: none;
    font-size: var(--font-size-small);
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.7;
  }
</style>
