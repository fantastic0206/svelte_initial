<script>
  import Hero from '$components/Hero.svelte';
  import Search from '$components/Search.svelte';
  import TopAdvisors from '$components/TopAdvisors.svelte';
</script>

<svelte:head>
  <title>Find a Financial Advisor | Financials</title>
</svelte:head>

<Hero>
  <div slot="content" class="relative text-center z-40 px-4 sm:px-8">
    <Search />
    <TopAdvisors />
  </div>
</Hero>
