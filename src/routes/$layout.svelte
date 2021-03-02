<script context="module">
  import './global.pcss';
  export const preload = () => {};
</script>

<script>
  import Footer from '$components/Footer.svelte';
</script>

<main class="flex-1">
  <slot />
</main>

<Footer />
