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
              <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-row">
                <h1 class="inline text-2xl font-semibold text-gray-900">
                  Posts
                </h1>
                <button
                  type="button"
                  @click="showEditor()"
                  class="ml-auto inline-flex uppercase items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusSmIcon class="h-6 w-6" /> Create
                </button>
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
                      :to="{ name: 'post', params: { slug: post.slug } }"
                      >View</router-link
                    >
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <a
                      href="javascript:void(true)"
                      @click="showEditor(post)"
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
      <div class="overflow-hidden">
        <div class="py-6">
          <div
            class="flex flex-row gap-3 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
          >
            <!-- Heroicon name: outline/chevron -->
            <svg
              @click="hideEditor()"
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
            <h1
              v-if="editor.status === 'editing'"
              class="text-2xl font-semibold text-gray-900"
            >
              Edit Post
            </h1>
            <h1 v-else class="text-2xl font-semibold text-gray-900">
              Create Post
            </h1>
          </div>
        </div>
        <form @submit.prevent="">
          <div class="flex flex-col mx-auto w-5/6 gap-y-4">
            <div>
              <label for="title" class="sr-only">Title</label>
              <input
                type="text"
                id="title"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Title"
                v-model="editor.post.title"
              />
            </div>
            <div>
              <QuillEditor
                theme="snow"
                toolbar="full"
                v-model:content="editor.post.content"
                contentType="html"
              />
            </div>
            <div class="flex items-end">
              <button
                type="button"
                @click="postPost()"
                class="inline-flex uppercase items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </base-page>
</template>

<script>
import BasePage from '@/components/admin/BasePage'
import PostMixin from '@/mixins/post'
import { QuillEditor } from '@vueup/vue-quill'
import { PlusSmIcon } from '@heroicons/vue/outline'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  name: 'PostsView',
  components: { BasePage, QuillEditor, PlusSmIcon },
  data() {
    return {
      editorContent: 'this is the content',
      editor: {
        displaying: false,
        status: 'creating',
        post: {
          title: '',
          content: ''
        }
      },
      posts: []
    }
  },
  mixins: [PostMixin],
  methods: {
    showEditor(post = { title: '', content: '' }) {
      this.editor.displaying = true
      this.editor.status = post.title ? 'editing' : 'creating'
      this.editor.post = post
    },
    hideEditor() {
      this.editor.displaying = false
      this.editor = { title: '', content: '' }
    },
    async postPost() {
      if (this.editor.status === 'creating') {
        try {
          await this.createPost(this.editor.post)
        } catch (err) {
          console.log(err)
        }
      } else {
        // (this.editor.status === 'editing')
        try {
          await this.updatePost(this.editor.post)
        } catch (err) {
          console.log(err)
        }
      }
    }
  },
  async mounted() {
    this.posts = await this.fetchPosts()
  }
}
</script>
