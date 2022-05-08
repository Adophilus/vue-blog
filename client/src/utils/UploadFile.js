import Media from '@/models/Media'
import axios from '@/utils/axios'

export default function (file) {
  this.upload = (callback = () => {}) => {
    let reader = new FileReader()

    reader.onloadend = async () => {
      let media = new Media(axios, {
        name: file.name,
        type: file.type
      })
      callback({ upload: await media.upload(btoa(reader.result)), file })
    }

    reader.readAsBinaryString(file)
  }

  const __generateId = () => {
    return `${file.name}-${file.size}-${file.lastModified}-${file.type}`
  }

  this.uploaded = false
  this.id = __generateId()
}
