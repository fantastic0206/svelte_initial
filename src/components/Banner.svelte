<script>
  let visible = true;

  const handleClick = () => (visible = !visible);
</script>

{#if visible}
  <div class="fixed inset-x-0 bottom-0 bg-amber-500 bg-opacity-20 pt-2 z-50">
    <div class="bg-amber-500 text-white ">
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <p class="ml-3 truncate">By using this site, you agree with our use of cookies.</p>
          </div>
          <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              on:click={handleClick}
              href="/company/policies/cookie"
              class="flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-sm font-medium text-amber-900 bg-white hover:bg-indigo-50">
              Learn more
            </a>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button on:click={handleClick} type="button" class="-mr-1 flex p-2 rounded-md sm:-mr-2">
              <span class="sr-only">Dismiss</span>
              <svg
                class="h-8 w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
