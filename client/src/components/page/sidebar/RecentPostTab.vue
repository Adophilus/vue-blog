<template>
  <router-link
    :to="{ name: 'post', params: { slug: post.slug } }"
    class="inline-flex items-center mb-2"
  >
    <div class="container">
      <div class="h-full rounded-lg">
        <div class="py-6">
          <!-- <h2
              class="
                tracking-widest
                text-xs
                title-font
                font-medium
                text-gray-400
                mb-1
              "
            >
              CATEGORY
            </h2> -->

          <h1 class="title-font text-sm font-medium hover:text-primary mb-3">
            {{ post.title }}
          </h1>
          <div class="flex items-center flex-wrap">
            <span
              class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle></svg
              >1.2K
            </span>
            <span
              class="text-gray-400 inline-flex items-center leading-none text-sm"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                ></path></svg
              >6
            </span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'RecentPostTab',
  props: {
    post: {
      type: Object
    }
  }
}
</script>
