<script lang="ts">
  import { page } from "$app/stores";
  
  $: error = $page.error;
  $: isSanityError = error && 'code' in error && error.code === 'SANITY_FETCH_ERROR';
</script>

<div class="error-container">
  <h1>{$page.status}: {error?.message || "Something went wrong"}</h1>

  {#if isSanityError}
    <p>Unable to load content from our database. This might be temporary.</p>
  {:else}
    <p>We hit a snag. Don't worry, it happens to the best of us.</p>
  {/if}

  <button on:click={() => window.location.reload()}> Try Again </button>
</div>

<style>
  .error-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    color: #666;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #2563eb;
  }
</style>
