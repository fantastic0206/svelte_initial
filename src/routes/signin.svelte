<script>
  import Hero from '$components/Hero.svelte';
</script>

<svelte:head>
  <title>Authenticate | Financials</title>
</svelte:head>

<Hero>
  <div slot="content" class="relative sm:mx-auto sm:w-full sm:max-w-4xl text-center z-40 h-screen">
    <div class="rounded-md pt-8 pb-16 px-12">
      <div class=" bg-primary bg-opacity-60 p-0 sm:py-8 sm:px-8 my-0 md:mb-16 lg:mt-36 rounded-md">
        <div class="bg-primary rounded-md py-8 sm:pt-8 sm:pb-10 px-4 sm:px-8 bg-opacity-90">
          <div class="flex-col">
            <div class="mb-8">
              <label class="block uppercase tracking-wide text-white text-xs font-medium mb-2 text-left" for="username">
                Username
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                name="username"
                type="text"
                placeholder="jack.black@jpmorgan.com" />
            </div>
            <div class="mb-8">
              <label class="block uppercase tracking-wide text-white text-xs font-medium mb-2 text-left" for="password">
                Password
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                name="password"
                type="password"
                placeholder="··························" />
              <p class="text-right">
                <a href="/reset" class="text-lightBlue-300 pt-2 inline-block text-sm">Reset Password?</a>
              </p>
            </div>
            <button
              type="submit"
              class="transition duration-500 ease-in-out mt-6 w-full bg-lightBlue-800 border border-transparent rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-lightBlue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-500">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</Hero>
