export default {
  saveUser (state, user = {}) {
    const {username} = user
    state.userName = username
  },
  saveCartCount (state, count = 0) {
    state.cartCount = count
  }
}