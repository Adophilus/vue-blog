import Media from '@/models/Media'

export default {
  methods: {
    fetchMedia() {
      return Media.get(this.$root.axios)
    }
  }
}
