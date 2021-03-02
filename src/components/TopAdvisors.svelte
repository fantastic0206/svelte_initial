<script>
  import { fly } from 'svelte/transition';
</script>

<h2
  class="text-center sm:text-left font-normal pt-8 mb-2 px-8 text-1xl text-white uppercase"
  in:fly={{ x: -10, duration: 1000 }}>
  Top Advisors in Your Area
</h2>
<div class="bg-primary bg-opacity-60 p-4 sm:py-8 sm:px-8 mb-8 sm:mb-28 rounded-md" in:fly={{ x: 10, duration: 1000 }}>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li
      class="transition duration-500 ease-in-out col-span-1 bg-primary rounded-lg shadow divide-y divide-blueGray-500 divide-opacity-30 border-lightBlue-900 border-solid border">
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-white text-sm font-medium truncate">Jane Cooper,</h3>
            <span class="flex-shrink-0 inline-block py-0.5 text-lightBlue-500 text-xs font-medium">CFA, CFP </span>
          </div>
          <p class="text-left mt-1 text-blueGray-500 text-sm truncate">Regional Paradigm Technician</p>
          <p class="text-left mt-2 flex flex-row">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
          </p>
        </div>
        <img
          class="w-20 h-20 bg-lightBlue-500 rounded flex-shrink-0"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt="" />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-blueGray-500 divide-opacity-30">
          <div class="w-0 flex-1 flex">
            <a
              href="/"
              class="transition duration-500 ease-in-out relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white hover:text-lightBlue-500 font-medium border border-transparent rounded-bl-lg hover:bg-black hover:bg-opacity-10">
              <!-- Heroicon name: mail -->
              <svg
                class="w-4 h-4 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span class="ml-2 uppercase">Email</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a
              href="/"
              class="transition duration-500 ease-in-out relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white hover:text-lightBlue-500 font-medium border border-transparent rounded-bl-lg hover:bg-black hover:bg-opacity-10">
              <!-- Heroicon name: phone -->
              <svg
                class="w-4 h-4 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span class="ml-2 uppercase">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li
      class="transition duration-500 ease-in-out col-span-1 bg-primary rounded-lg shadow divide-y divide-blueGray-500 divide-opacity-30 border-lightBlue-900 border-solid border">
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-white text-sm font-medium truncate">Cody Fischer,</h3>
            <span class="flex-shrink-0 inline-block py-0.5 text-lightBlue-500 text-xs font-medium">AIF®, CFA, CLU</span>
          </div>
          <p class="text-left mt-1 text-blueGray-500 text-sm truncate">Regional Paradigm Technician</p>
          <p class="text-left mt-2 flex flex-row">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
          </p>
        </div>
        <img
          class="w-20 h-20 bg-lightBlue-500 rounded flex-shrink-0"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt="" />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-blueGray-500 divide-opacity-30">
          <div class="w-0 flex-1 flex">
            <a
              href="/"
              class="transition duration-500 ease-in-out relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white hover:text-lightBlue-500 font-medium border border-transparent rounded-bl-lg hover:bg-black hover:bg-opacity-10">
              <!-- Heroicon name: mail -->
              <svg
                class="w-4 h-4 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span class="ml-2 uppercase">Email</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a
              href="/"
              class="transition duration-500 ease-in-out relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white hover:text-lightBlue-500 font-medium border border-transparent rounded-bl-lg hover:bg-black hover:bg-opacity-10">
              <!-- Heroicon name: phone -->
              <svg
                class="w-4 h-4 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span class="ml-2 uppercase">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li
      class="transition duration-500 ease-in-out col-span-1 bg-primary rounded-lg shadow divide-y divide-blueGray-500 divide-opacity-30 border-lightBlue-900 border-solid border">
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-white text-sm font-medium truncate">Ester Howard,</h3>
            <span class="flex-shrink-0 inline-block py-0.5 text-lightBlue-500 text-xs font-medium">AIF®, ChFC</span>
          </div>
          <p class="text-left mt-1 text-blueGray-500 text-sm truncate">Regional Paradigm Technician</p>
          <p class="text-left mt-2 flex flex-row">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="h-5 w-5 stroke-current text-amber-500 mr-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"><path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
          </p>
        </div>
        <img
          class="w-20 h-20 bg-lightBlue-500 rounded flex-shrink-0"
          src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt="" />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-blueGray-500 divide-opacity-30">
          <div class="w-0 flex-1 flex">
            <a
              href="/"
              class="transition duration-500 ease-in-out relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white hover:text-lightBlue-500 font-medium border border-transparent rounded-bl-lg hover:bg-black hover:bg-opacity-10">
              <!-- Heroicon name: mail -->
              <svg
                class="w-4 h-4 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span class="ml-2 uppercase">Email</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a
              href="/"
              class="transition duration-500 ease-in-out relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white hover:text-lightBlue-500 font-medium border border-transparent rounded-bl-lg hover:bg-black hover:bg-opacity-10">
              <!-- Heroicon name: phone -->
              <svg
                class="w-4 h-4 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span class="ml-2 uppercase">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
