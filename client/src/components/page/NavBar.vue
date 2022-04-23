<template>
  <header class="text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <router-link
        :to="{ name: 'landing' }"
        class="
          flex
          title-font
          font-medium
          items-center
          text-gray-900
          mb-4
          md:mb-0
        "
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
        <span class="ml-3 text-xl">Title</span>
      </router-link>
      <nav
        class="
          md:ml-auto
          flex flex-wrap
          items-center
          text-base
          justify-center
          text-black
          uppercase
          font-medium
        "
      >
        <router-link
          :to="{ name: 'landing' }"
          active-class="text-primary"
          class="mr-5 hover:text-primary"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'landing' }"
          active-class="text-primary"
          class="mr-5 hover:text-primary"
          >Posts</router-link
        >
        <router-link
          :to="{ name: 'landing' }"
          active-class="text-primary"
          class="mr-5 hover:text-primary"
          >About</router-link
        >
        <router-link
          :to="{ name: 'landing' }"
          active-class="text-primary"
          class="mr-5 hover:text-primary"
          >Contact</router-link
        >
      </nav>
      <button
        class="
          inline-flex
          items-center
          bg-gray-100
          border-0
          py-3
          px-3
          border-2 border-primary
          hover:bg-white hover:border-2 hover:text-primary
          rounded
          mt-4
          md:mt-0
          bg-primary
          text-white
          font-medium
        "
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
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
