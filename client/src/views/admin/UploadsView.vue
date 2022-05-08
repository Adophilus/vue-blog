<template>
  <base-page>
    <!-- Alert messages -->
    <div>
      <!-- Posted alert message -->
      <div v-show="alerts.upload.successful" class="rounded-md bg-green-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <CheckCircleIcon
              class="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-green-800">
              Upload successful!
            </h3>
            <div class="mt-2 text-sm text-green-700">
              <p>Upload successful!</p>
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
                  @click="alerts.upload.successful = false"
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
    <div v-show="!uploader.displaying" class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-row">
        <h1 class="inline text-2xl font-semibold text-gray-900">Uploads</h1>
        <button
          type="button"
          @click="showUploader()"
          class="ml-auto inline-flex uppercase items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <UploadIcon class="h-6 w-6" /> Upload
        </button>
      </div>
    </div>
    <!-- Uploads list -->
    <div v-show="!uploader.displaying" class="flex flex-col">
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
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    URL
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="upload in uploads" :key="upload._id">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ upload.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ upload.type }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary"
                  >
                    <a :href="upload.url">
                      {{ upload.url }}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Uploader -->
    <div v-show="uploader.displaying" class="flex flex-col">
      <div class="overflow-hidden">
        <div class="py-6">
          <div
            class="flex flex-row gap-3 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
          >
            <ChevronLeftIcon
              @click="hideUploader()"
              class="w-6 h-6 inline-block align-middle"
            />
            <h1 class="text-2xl font-semibold text-gray-900">Upload File</h1>
          </div>
        </div>
        <form @submit.prevent="uploadFile()">
          <div class="flex flex-col mx-auto w-5/6 gap-y-4">
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <DropZone />
            </div>
            <div class="flex items-end">
              <button
                type="submit"
                class="inline-flex uppercase items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
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
import DropZone from '@/components/admin/DropZone'
import MediaMixin from '@/mixins/media'
import { UploadIcon } from '@heroicons/vue/outline'
import { CheckCircleIcon, ChevronLeftIcon } from '@heroicons/vue/solid'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  name: 'UploadsView',
  components: {
    BasePage,
    DropZone,
    CheckCircleIcon,
    ChevronLeftIcon,
    UploadIcon
  },
  data() {
    return {
      alerts: {
        upload: {
          successful: false
        }
      },
      uploads: [],
      uploader: {
        displaying: true
      },
      window
    }
  },
  mixins: [MediaMixin],
  methods: {
    hideUploader() {
      this.uploader.displaying = false
    },
    showUploader() {
      this.uploader.displaying = true
    },
    uploadFile() {
      console.log('uploading file')
    }
  },
  async mounted() {
    this.uploads = await this.fetchMedia()
  }
}
</script>
