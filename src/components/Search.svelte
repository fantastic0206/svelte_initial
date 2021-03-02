<script>
  import { fly } from 'svelte/transition';
</script>

<div class="bg-primary bg-opacity-60 p-4 my-8 rounded-md" in:fly={{ x: -10, duration: 1000 }}>
  <div class="-mx-3 lg:flex">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-medium mb-4 text-left" for="specialty">
        Specialty
      </label>
      <div class="relative mb-4">
        <select
          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-blueGray-600 py-4 px-4 pr-8 rounded focus:outline-none focus:ring-lightBlue-500 focus:border-lightBlue-500"
          id="specialty">
          <option selected>Investment Advisors</option>
          <option>Financial Planners</option>
          <option>Debt Counselors</option>
          <option>Accountants</option>
          <option>Insurance Agents</option>
          <option>Attorneys</option>
        </select>
      </div>
    </div>
    <div class="w-full px-3 mb-12 lg:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-medium mb-4 text-left" for="location">
        Location
      </label>
      <input
        class="appearance-none block w-full bg-grey-lighter text-grey-darker bg-white border border-blueGray-600 rounded py-4 px-4 mb-8 xl:mb-0 focus:outline-none focus:ring-lightblue-500 focus:border-lightBlue-500"
        name="location"
        type="text"
        placeholder="New York, NY" />
    </div>
    <div class="w-full px-3">
      <button
        type="submit"
        class="transition duration-500 ease-in-out mt-8 w-full hover:bg-lightBlue-500 bg-lightBlue-800 border border-transparent rounded-md py-4 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-500">
        Search
      </button>
    </div>
  </div>
</div>
