<script>
  import { fly } from 'svelte/transition';
  let class_name = '';
  export { class_name as class };
</script>

<div class={class_name} in:fly={{ x: 10, duration: 1000 }}>
  <slot name="content" />
</div>
