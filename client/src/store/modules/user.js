const serverAPI = `http://${window.location.hostname}:3000`

export default {
  state: {
    userData: {}
  },
  mutations: {
    fetchUser(state, payload) {
      state.userData = payload
    }
  },
  actions: {
    async fetchUser({commit}, payload) {
      try{
        let userData = {
          token: window.sessionStorage.getItem('token')
        }
        fetch(`${serverAPI}/get-user-info`, {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        }).then(res => {
          return res.json()
        }).then(body => {
          commit('fetchUser', body)
        })
      } catch(err) {
        console.log(err)
        throw new Error(err)
      }
    },
    async updateProfile({commit}, payload) {
      try{
        let {login, password, newPassword, userToken} = payload
        let newData = {
          login,
          password: newPassword,
          token: userToken
        }
        fetch(`${serverAPI}/update-user-info`, {
          method: 'POST',
          body: JSON.stringify(newData),
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        })
      } catch(err) {
        console.log(err)
        throw new Error(err)
      }
    }
  },
  getters: {
    userData(state) {
      return state.userData
    }
  }
}