<script>
  import { fly } from 'svelte/transition';
  import Hero from '$components/Hero.svelte';

  const advisors = [{ name: 'John Doe', bio: 'I am a bio.' }];
  const error = null;
</script>

<svelte:head>
  <title>Financial Advisors | Financials</title>
</svelte:head>

<Hero />

<div>
  <div class=" md:max-w-screen-lg px-8" in:fly={{ y: 15, duration: 1000 }}>
    {#if error !== null}
      {error}
    {:else}
      <ul>
        {#each advisors as a}
          <li class="py-4">
            <span class="font-medium">{a.name}</span>
            <div class="bio">{a.bio}</div>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
