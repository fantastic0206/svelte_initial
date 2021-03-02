<script>
  import Banner from '$components/Banner.svelte';
  import Modal from '$components/Modal.svelte';
</script>

<footer class="bg-primary border-t border-blueGray-600 border-opacity-20" aria-labelledby="footerHeading">
  <h2 id="footerHeading" class="sr-only">Footer</h2>
  <div class=" px-4 sm:px-8 py-12 lg:py-16">
    <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
      <div class="grid grid-cols-2 gap-8 xl:col-span-4">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold text-blueGray-400 tracking-wider uppercase">For the Public</h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a
                  href="/advisors"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Find an Advisor
                </a>
              </li>

              <li>
                <a
                  href="/answers"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Ask a Question
                </a>
              </li>

              <li>
                <a
                  href="/review"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Review an Advisor
                </a>
              </li>

              <li>
                <a
                  href="/calculators"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Calculators
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-sm font-semibold text-blueGray-400 tracking-wider uppercase">For Advisors</h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a
                  href="/advisors/claim"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Claim a Profile
                </a>
              </li>

              <li>
                <a
                  href="/advisors/advertise"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Advertise
                </a>
              </li>

              <li>
                <a
                  href="/advisors/websites"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Websites
                </a>
              </li>

              <li>
                <a
                  href="/advisors/pricing"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold text-blueGray-400 tracking-wider uppercase">Company</h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a
                  href="/company/about"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  About
                </a>
              </li>

              <li>
                <a
                  href="/company/careers"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="/company/press"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-sm font-semibold text-blueGray-400 tracking-wider uppercase">Legal</h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a
                  href="/company/policies/privacy"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/company/policies/terms"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/company/policies/cookie"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/company/security"
                  class="text-base text-blueGray-200 transition duration-500 ease-in-out hover:text-lightBlue-500">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-12 xl:mt-0">
        <h3 class="text-sm font-semibold text-blueGray-400 tracking-wider uppercase">Language &amp; Currency</h3>
        <form class="mt-4 sm:max-w-xs">
          <fieldset class="w-full">
            <label for="language" class="sr-only">Language</label>
            <div class="relative">
              <select
                id="language"
                class="appearance-none block w-full bg-none bg-white border border-blueGray-600 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-lightBlue-500 focus:border-lightBlue-500 sm:text-sm">
                <option selected>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
                <option>Français</option>
                <option>Italiano</option>
                <option>日本語</option>
                <option>Bahasa Indonesia</option>
                <option>Português</option>
                <option>हिन्दी</option>
                <option>Nederlands</option>
                <option>Dansk</option>
                <option>Suomi</option>
                <option>Norsk</option>
                <option>Svenska</option>
                <option>Pусский</option>
                <option>मराठी</option>
                <option>বাংলা</option>
                <option>தமிழ்</option>
                <option>العربية</option>
                <option>עברית</option>
                <option>ગુજરાતી</option>
                <option>ಕನ್ನಡ</option>
                <option>മലയാളം</option>
                <option>తెలుగు</option>
                <option>繁體中文 (台灣)</option>
                <option>繁體中文 (香港特區)</option>
                <option>Polski</option>
              </select>

              <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                <!-- Heroicon name: chevron-down -->
                <svg
                  class="h-4 w-4 text-blueGray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </fieldset>
          <fieldset class="mt-4 w-full">
            <label for="currency" class="sr-only">Currency</label>
            <div class="relative">
              <select
                id="currency"
                class="appearance-none block w-full bg-none bg-white border border-blueGray-600 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-lightBlue-500 focus:border-lightBlue-500 sm:text-sm">
                <option selected>USD</option>
                <option>CNY</option>
                <option>ARS</option>
                <option>AUD</option>
                <option>CAD</option>
                <option>CHF</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>JPY</option>
                <option>BTC</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                <!-- Heroicon name: chevron-down -->
                <svg
                  class="h-4 w-4 text-blueGray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div
      class="sm:mt-8 border-t border-dashed border-blueGray-600 border-opacity-20 pt-8 md:flex md:items-center md:justify-between">
      <div>
        <h3 class="text-sm font-semibold text-blueGray-400 tracking-wider uppercase">Subscribe to our newsletter</h3>
        <p class="mt-2 text-base text-blueGray-400">The latest news, articles, and resources, sent to your inbox.</p>
      </div>
      <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
        <label for="emailAddress" class="sr-only">Email address</label>
        <input
          type="email"
          id="emailAddress"
          required
          class="appearance-none min-w-0 w-full bg-white border border-blueGray-600 py-2 px-4 text-base rounded-md text-gray-900 placeholder-blueGray-400 focus:outline-none focus:ring-lightBlue-500 focus:border-lightBlue-500 focus:placeholder-gray-400 sm:max-w-xs"
          placeholder="Enter your email" />
        <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            class="transition duration-500 ease-in-out w-full bg-lightBlue-800 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-lightBlue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-500">
            Subscribe
          </button>
        </div>
      </form>
    </div>
    <div
      class="mt-8 border-t border-dashed border-blueGray-600 border-opacity-20 pt-8 md:flex md:items-center md:justify-between">
      <div class="flex space-x-6 md:order-2">
        <a
          rel="external"
          href="https://facebook.com"
          class="text-blueGray-600 transition duration-500 ease-in-out hover:text-lightBlue-500">
          <span class="sr-only">Facebook</span>
          <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
        </a>

        <a
          rel="external"
          href="https://twitter.com"
          class="text-blueGray-600 transition duration-500 ease-in-out hover:text-lightBlue-500">
          <span class="sr-only">Twitter</span>
          <svg class="h-7 w-7 fill-current" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>

        <a
          rel="external"
          href="https://linkedin.com"
          class="text-blueGray-600 transition duration-500 ease-in-out hover:text-lightBlue-500">
          <span class="sr-only">LinkedIn</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 448 512">
            <path
              d="M407.4 32H40.6C18.2 32 0 50.2 0 72.6v366.8C0 461.8 18.2 480 40.6 480h366.8c22.4 0 40.6-18.2 40.6-40.6V72.6c0-22.4-18.2-40.6-40.6-40.6zM176.1 145.6c.4 23.4-22.4 27.3-26.6 27.4-14.9 0-27.1-12-27.1-27 .1-35.2 53.1-35.5 53.7-.4zM332.8 377c-65.6 0-34.1-74-25-106.6 14.1-46.4-45.2-59-59.9.7l-25.8 103.3H177l8.1-32.5c-31.5 51.8-94.6 44.4-94.6-4.3.1-14.3.9-14 23-104.1H81.7l9.7-35.6h76.4c-33.6 133.7-32.6 126.9-32.9 138.2 0 20.9 40.9 13.5 57.4-23.2l19.8-79.4h-32.3l9.7-35.6h68.8l-8.9 40.5c40.5-75.5 127.9-47.8 101.8 38-14.2 51.1-14.6 50.7-14.9 58.8 0 15.5 17.5 22.6 31.8-16.9L386 325c-10.5 36.7-29.4 52-53.2 52z" />
          </svg>
        </a>
        <a
          rel="external"
          href="https://youtube.com"
          class="text-blueGray-600 transition duration-500 ease-in-out hover:text-lightBlue-500">
          <span class="sr-only">YouTube</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 576 512">
            <path
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
        </a>
        <a
          rel="external"
          href="https://weibo.com"
          class="text-blueGray-600 transition duration-500 ease-in-out hover:text-lightBlue-500">
          <span class="sr-only">Weibo</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 512 512">
            <path
              d="M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z" />
          </svg>
        </a>
        <a
          rel="external"
          href="https://vk.com"
          class="text-blueGray-600 transition duration-500 ease-in-out hover:text-lightBlue-500">
          <span class="sr-only">VK</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 576 512">
            <path
              d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z" />
          </svg>
        </a>
        <a
          rel="external"
          href="https://github.com"
          class="text-blueGray-600 transition duration-500 ease-in-out hover:text-lightBlue-500">
          <span class="sr-only">Github</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 448 512">
            <path
              d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z" />
          </svg>
        </a>
      </div>
      <p class="mt-8 text-base text-blueGray-600 md:mt-0 md:order-1">
        &copy; 2020 -
        {new Date().getFullYear()}
        <a
          href="https://scribes.io"
          rel="external noopener"
          target="_blank"
          class="text-white transition duration-500 ease-in-out hover:text-lightBlue-500">Scribes<span
            class="font-medium">Medium</span></a>. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<Banner />

<Modal />
