export default {
  saveUser (context, user = {}) {
    context.commit('saveUser', user)
  },
  saveCartCount (context, count = 0) {
    context.commit('saveCartCount', count)
  }
}