export default function (file) {
  this.upload = async () => {
    console.log('uploading')
  }

  const __generateId = () => {
    return `${this.file.name}-${this.file.size}-${this.file.lastModified}-${this.file.type}`
  }

  this.file = file
  this.uploaded = false
  this.id = __generateId()
  console.log(this.id)
}
