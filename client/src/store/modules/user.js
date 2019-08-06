const serverAPI = `http://${window.location.hostname}:3000`

export default {
  state: {
    
  },
  mutations: {

  },
  actions: {
    async registrateUser({commit}, payload) {
      fetch(`${serverAPI}/add-user`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        }
      })
    }
  },
  getters: {

  }
}