import axios from '@/utils/axios'
import config from '@/utils/config'

export default {
  data() {
    return {
      axios,
      config
    }
  },
  methods: {
    truncate(text, stop = 60, clamp = '...') {
      return text.slice(0, stop) + (stop < text.length ? clamp : '')
    }
  }
}
