/**
 * 封装 SessionStorage 常用 API 以及支持细化处理
 * @return {}
 * @author goozyshi@gmail.com
 */
const STORAGE_KEY = 'vue2mi'
export default {
  setItem (key, value, itemName) {
    if (itemName) {
      let item = this.getItem(itemName)
      item[key] = value
      this.setItem(itemName, item)
    } else {
      let storage = this.getStorage()
      storage[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
    }
  },
  getItem (key, itemName) {
    if (itemName) {
      let item = this.getItem(itemName)
      if (item) return item[key]
    }
    return this.getStorage()[key]
  },
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear(key, itemName) {
    if (!key) {
      window.sessionStorage.removeItem(STORAGE_KEY)
    }
    let storage = this.getStorage()
    if (itemName) {
      if (storage[itemName]) {
        delete storage[itemName][key]
      }
    } else {
      delete storage[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
  }
}