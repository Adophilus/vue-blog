<template>
  <base-page>
    <!-- Alert messages -->
    <div></div>
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
                <tr v-for="media in media" :key="media._id">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ media.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ media.type }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary"
                  >
                    <a :href="media.url">
                      {{ media.url }}
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
        <div class="flex flex-col mx-auto w-5/6 gap-y-4">
          <div>
            <ul role="list" class="space-y-3">
              <li
                v-for="upload in uploader.files"
                :key="upload.id"
                class="bg-white relative shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md"
              >
                <span>{{ upload.file.name }}</span>
                <div
                  class="h-full top-0 left-0 absolute opacity-30 bg-indigo-600"
                  :style="{ width: upload.uploaded + '%' }"
                ></div>
              </li>
            </ul>
          </div>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <DropZone @file-upload="displayUploadingFile" />
          </div>
        </div>
      </div>
    </div>
  </base-page>
</template>

<script>
import BasePage from '@/components/admin/BasePage'
import DropZone from '@/components/admin/DropZone'
import MediaMixin from '@/mixins/media'
import { UploadIcon } from '@heroicons/vue/outline'
import { ChevronLeftIcon } from '@heroicons/vue/solid'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  name: 'UploadsView',
  components: {
    BasePage,
    DropZone,
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
      media: [],
      uploader: {
        displaying: true,
        files: []
      },
      window
    }
  },
  mixins: [MediaMixin],
  methods: {
    displayUploadingFile(file) {
      this.uploader.files.push(file)
    },
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
    this.media = await this.fetchMedia()
  }
}
</script>
