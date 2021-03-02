<script>
  import { fly } from 'svelte/transition';
</script>

<style>
  blockquote {
    @apply border-l-4 inline-block w-full sm:w-2/3 ml-4 px-4 mb-8 border-lightBlue-500;
  }
  p {
    @apply mb-8;
  }
  p:last-child {
    margin-bottom: 0 !important;
    margin-right: 0 !important;
  }
  a {
    text-decoration: none !important;
    background-size: 100% 238%;
    background-image: linear-gradient(
      transparent 0%,
      transparent calc(50% - 9px),
      rgba(14, 165, 233, 0.5) calc(50% - 9px),
      rgba(14, 165, 233, 0.5) 100%
    );
    padding-top: 6px;
    padding-bottom: 1px;
  }
</style>

<div class=" px-4 sm:px-8 py-8" in:fly={{ y: 5, duration: 1000 }}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget neque lacinia, rutrum velit eget, aliquam
    sapien.
    <a href="/">Duis arcu massa</a>, pulvinar eget risus nec, blandit blandit augue. In ut velit ligula. Praesent
    iaculis ullamcorper lobortis. Nunc porttitor sit amet magna vel hendrerit.
    <strong>In id sodales justo</strong>, eu blandit nisi. Aenean varius felis in interdum tempus. Vestibulum accumsan,
    nunc ut imperdiet scelerisque, nisl tellus aliquam sem, ut rutrum elit libero eu eros.
  </p>

  <p>
    Phasellus molestie nisi eget metus vehicula, ac hendrerit enim feugiat. Aenean auctor lorem nec felis imperdiet
    mollis. Donec tristique massa id tortor suscipit commodo ac eu elit. Phasellus faucibus et tortor a tempus.
    Pellentesque congue hendrerit diam ut molestie. Mauris non justo in nibh convallis dictum sed dictum enim. Aenean et
    erat aliquam, efficitur libero id, tincidunt eros. Cras vel lacus fermentum eros laoreet sodales.
  </p>

  <blockquote>
    "Pellentesque congue hendrerit diam ut molestie. Mauris non justo in nibh convallis dictum sed dictum enim. Aenean
    et erat aliquam, efficitur libero id, tincidunt eros."
  </blockquote>

  <p>
    Donec mollis commodo turpis in efficitur. In hac habitasse platea dictumst. Suspendisse vel dui ante.
    <a href="https://svelte.dev/">Svelte</a>
    efficitur tortor, vitae dignissim enim vehicula vel. Aliquam dui nisl, suscipit a arcu sed, tincidunt ultricies
    nunc. Nulla dolor augue, aliquam elementum metus vel, euismod ullamcorper leo. Vestibulum in aliquam dui. Nulla
    lobortis faucibus quam, sodales blandit quam volutpat id. Donec aliquam nisl nisi, eu tincidunt ligula malesuada
    eget.
  </p>

  <ul class="list-disc mb-8 ml-12 mt-8">
    <li>Phasellus faucibus et tortor a tempus</li>
    <li>Nulla dolor augue, aliquam elementum metus vel</li>
    <li>Vestibulum in aliquam dui</li>
    <li>Duis accumsan dolor eu ligula hendrerit</li>
  </ul>

  <p>
    Phasellus molestie nisi eget metus vehicula, ac hendrerit enim feugiat. Aenean auctor lorem nec felis imperdiet
    mollis. Donec tristique massa id tortor suscipit commodo ac eu elit. Phasellus faucibus et tortor a tempus.
    Pellentesque congue hendrerit diam ut molestie. Mauris non justo in nibh convallis dictum sed dictum enim. Aenean et
    erat aliquam, efficitur libero id, tincidunt eros. Cras vel lacus fermentum eros laoreet sodales.
  </p>

  <p>
    Duis accumsan dolor eu ligula hendrerit, vitae fermentum lacus aliquam. Fusce ut velit et odio fermentum posuere non
    sit amet nulla. Maecenas sit amet accumsan lorem. Nulla dolor augue, aliquam elementum metus vel, euismod
    ullamcorper leo. Vestibulum in aliquam dui. Nulla lobortis faucibus quam, sodales blandit quam volutpat id. Donec
    aliquam nisl nisi, eu tincidunt ligula malesuada eget. Nam dignissim lacus quis vulputate fringilla. Curabitur
    lobortis enim eget hendrerit dictum. Suspendisse dolor dolor, eleifend ut lectus sit amet, finibus suscipit sapien.
  </p>

  <p>
    Duis accumsan dolor eu ligula hendrerit, vitae fermentum lacus aliquam. Fusce ut velit et odio fermentum posuere non
    sit amet nulla. Maecenas sit amet accumsan lorem. Nulla dolor augue, aliquam elementum metus vel, euismod
    ullamcorper leo. Vestibulum in aliquam dui. Nulla lobortis faucibus quam, sodales blandit quam volutpat id. Donec
    aliquam nisl nisi, eu tincidunt ligula malesuada eget. Nam dignissim lacus quis vulputate fringilla. Curabitur
    lobortis enim eget hendrerit dictum. Suspendisse dolor dolor, eleifend ut lectus sit amet, finibus suscipit sapien.
  </p>
</div>
