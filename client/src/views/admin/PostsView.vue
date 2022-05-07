<template>
  <base-page>
    <!-- Alert messages -->
    <div>
      <!-- Posted alert message -->
      <div v-show="alerts.post.successful" class="rounded-md bg-green-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <CheckCircleIcon
              class="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-green-800">Post successful</h3>
            <div class="mt-2 text-sm text-green-700">
              <p>
                <a :href="editorPostViewUrl">
                  http://{{ window.location.host }}/posts/{{
                    this.editor.post.slug
                  }}
                </a>
              </p>
            </div>
            <div class="mt-4">
              <div class="-mx-2 -my-1.5 flex">
                <button
                  @click="changeEditorPostSlug()"
                  type="button"
                  class="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                >
                  Change
                </button>
                <button
                  @click="alerts.post.successful = false"
                  type="button"
                  class="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Banner -->
    <div v-show="!editor.displaying" class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-row">
        <h1 class="inline text-2xl font-semibold text-gray-900">Posts</h1>
        <button
          type="button"
          @click="showEditor()"
          class="ml-auto inline-flex uppercase items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusSmIcon class="h-6 w-6" /> Create
        </button>
      </div>
    </div>
    <!-- Posts list -->
    <div v-show="!editor.displaying" class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
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
    <!-- Editor -->
    <div v-show="editor.displaying" class="flex flex-col">
      <div class="overflow-hidden">
        <div class="py-6">
          <div
            class="flex flex-row gap-3 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
          >
            <ChevronLeftIcon
              @click="hideEditor()"
              class="w-6 h-6 inline-block align-middle"
            />
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
                ref="editor"
                v-model:content="this.editor.post.content"
                theme="snow"
                toolbar="full"
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
import { ChevronLeftIcon, CheckCircleIcon } from '@heroicons/vue/solid'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  name: 'PostsView',
  components: {
    BasePage,
    ChevronLeftIcon,
    CheckCircleIcon,
    QuillEditor,
    PlusSmIcon
  },
  computed: {
    editorPostViewUrl() {
      if (this.editor.post.slug) {
        return this.$router.resolve({
          name: 'post',
          params: { slug: this.editor.post.slug }
        }).href
      } else {
        return this.$router.resolve({
          name: 'recent-posts'
        }).href
      }
    }
  },
  data() {
    return {
      alerts: {
        post: {
          successful: false,
          editing: false
        }
      },
      editor: {
        displaying: false,
        status: 'creating',
        post: {
          title: '',
          content: ''
        }
      },
      posts: [],
      window
    }
  },
  mixins: [PostMixin],
  methods: {
    async changeEditorPostSlug() {
      let slug = prompt('Enter a slug')
      if (!slug) {
        return
      }
      this.editor.post.slug = slug
      await this.updatePost(this.editor.post)
    },
    showEditor(post) {
      if (post) {
        this.editor.status = 'editing'
        this.editor.post = post
        this.$refs.editor.setHTML(this.editor.post.content)
      } else {
        this.editor.status = 'creating'
        this.editor.post = { title: '', content: '' }
      }
      this.editor.displaying = true
    },
    hideEditor() {
      this.editor.displaying = false
      this.editor.post = { title: '', content: '' }
    },
    // saving post
    async postPost() {
      // saving new post
      if (this.editor.status === 'creating') {
        try {
          let res = await this.createPost({
            title: this.editor.post.title,
            content: this.editor.post.content
          })
          let post = await this.fetchPostById(res.id)
          this.editor.post = post
          this.alerts.post.successful = true
        } catch (err) {
          console.log(err.response.data)
        }
      } else {
        // updating post
        // (this.editor.status === 'editing')
        try {
          let res = await this.updatePost(this.editor.post)
          this.editor.post._rev = res.rev
          this.alerts.post.successful = true
        } catch (err) {
          console.log(err.response.data)
        }
      }
    }
  },
  async mounted() {
    this.posts = await this.fetchPosts()

    setTimeout(() => {
      this.editorContent = 'Hello world'
    }, 5000)
  }
}
</script>
