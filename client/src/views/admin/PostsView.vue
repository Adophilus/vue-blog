<template>
  <base-page>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-show="!editor.displaying" class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <div class="py-6">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 class="text-2xl font-semibold text-gray-900">Posts</h1>
              </div>
            </div>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Link
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="post in posts" :key="post._id">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ post.title }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      v-if="post.status === 'published'"
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {{ post.status }}
                    </span>
                    <span
                      v-else
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-300 text-gray-800"
                    >
                      {{ post.status }}
                    </span>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary"
                  >
                    <router-link
                      :to="{ name: 'post', params: { id: post._id } }"
                      >View</router-link
                    >
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <a
                      href="#"
                      @click="editPost(post)"
                      class="text-primary hover:text-primary"
                      >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-show="editor.displaying" class="flex flex-col">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <div class="py-6">
          <div
            class="flex flex-row gap-3 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
          >
            <!-- Heroicon name: outline/chevron -->
            <svg
              class="w-6 h-6 inline-block align-middle"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <h1 v-if="editor.post" class="text-2xl font-semibold text-gray-900">
              Edit Post
            </h1>
            <h1 v-else class="text-2xl font-semibold text-gray-900">
              Create Post
            </h1>
          </div>
        </div>
        <form @submit.prevent="" class="mx-auto">
          <div>
            <label for="title" class="sr-only">Title</label>
            <input
              type="text"
              id="title"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Title"
            />
          </div>
        </form>
      </div>
    </div>
  </base-page>
</template>

<script>
import BasePage from '@/components/admin/BasePage'
import PostMixin from '@/mixins/post'

export default {
  name: 'PostsView',
  components: { BasePage },
  data() {
    return {
      editor: {
        displaying: false,
        post: false
      },
      posts: []
    }
  },
  mixins: [PostMixin],
  methods: {
    editPost(post) {
      this.editor.displaying = true
      this.editor.post = post
    }
  },
  async mounted() {
    this.posts = await this.fetchPosts()
    // console.log(this.post)
  }
}
</script>
