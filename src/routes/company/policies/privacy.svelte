<script>
  import Hero from '$components/Hero.svelte';

  // quick example of how to import and use npm packages in snowpack
  import confetti from 'canvas-confetti';

  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 200, spread: 200 });
  // safe to delete
</script>

<svelte:head>
  <title>Privacy Policy| Financials</title>
</svelte:head>

<Hero />
