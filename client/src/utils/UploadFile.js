import Media from '@/models/Media'
import axios from '@/utils/axios'

export default function (file) {
  this.upload = async () => {
    let reader = new FileReader()
    reader.onloadend = (progressEvent) => {
      // console.log(progressEvent)
    }
    reader.readAsBinaryString(file)

    let media = new Media(axios, {
      name: file.name,
      type: file.type
    })
    await media.upload(btoa(reader.result))
  }

  const __generateId = () => {
    return `${file.name}-${file.size}-${file.lastModified}-${file.type}`
  }

  this.uploaded = false
  this.id = __generateId()
}
