export default function createApi(fetch) {
  return {
    getList(url) {
      return fetch(url).then(res => res.json())
    },
  }
}
