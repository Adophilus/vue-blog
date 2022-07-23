<template>
  <!-- HEADER -->
  <header>
    <nav
      class="container flex items-center py-4 px-4 mt-4 mx-auto sm:mt-12 mx-auto"
    >
      <div>
        <router-link
          :to="{ name: 'landing' }"
          class="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl">{{ $root.config.site.title }}</span>
        </router-link>
      </div>
      <div
        class="hidden sm:flex flex-1 justify-end items-center gap-3 text-xl font-medium md:text-lg uppercase text-xs"
      >
        <router-link
          :to="{ name: 'recent-posts' }"
          active-class="text-primary"
          class="mr-5 hover:text-primary font-bold"
          >Posts</router-link
        >
        <router-link
          :to="{ name: 'about' }"
          active-class="text-primary"
          class="mr-5 hover:text-primary font-bold"
          >About</router-link
        >
        <router-link
          :to="{ name: 'contact' }"
          active-class="text-primary"
          class="mr-5 hover:text-primary font-bold"
          >Contact</router-link
        >
        <router-link :to="{ name: 'login' }">
          <button
            class="inline-flex items-center bg-gray-100 border-0 py-3 px-3 border-2 font-bold border-primary hover:bg-white hover:border-2 hover:text-primary rounded md:mt-0 bg-primary text-white font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            &nbsp; Login
          </button>
        </router-link>
      </div>
      <div class="flex sm:hidden flex-1 justify-end">
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
            fill="black"
          />
        </svg>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
