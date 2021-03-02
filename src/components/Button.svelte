<script>
  export let href = false;
</script>

{#if href}
  <a {href} on:click>
    <slot />
  </a>
{:else}
  <button on:click>
    <slot />
  </button>
{/if}
