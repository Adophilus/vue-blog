import Media from '@/models/Media'
import axios from '@/utils/axios'

export default function (file) {
  this.upload = () => {
    let reader = new FileReader()

    reader.onloadend = () => {
      let media = new Media(axios, {
        name: file.name,
        type: file.type
      })
      media.upload(btoa(reader.result), (progressEvent) => {
        this.uploaded = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        console.log(this.uploaded)
      })
    }

    reader.readAsBinaryString(file)
  }

  const __generateId = () => {
    return `${file.name}-${file.size}-${file.lastModified}-${file.type}`
  }

  this.uploaded = 0
  this.id = __generateId()
  this.file = file
}
