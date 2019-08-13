const serverAPI = `http://${window.location.hostname}:3000`

export default {
  state: {
    imagesData: []
  },
  mutations: {
    loadImages (state, payload) {
      state.imagesData = payload
    },
    addImage (state, payload) {
      state.imagesData.push(payload)
    },
    deleteImage(state, payload) {
      const image = state.imagesData.find(a => {
        return a.image == payload
      })
      let imageIndex = state.imagesData.indexOf(image)
      state.imagesData.splice(imageIndex, 1)
    }
  },
  actions: {
    async fetchImages({commit}) {
      const resultImages = []

      try{
        const apiCall = await fetch(`${serverAPI}/get-images`, {
          method: 'GET',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        })
        const apiData = await apiCall.json()
        commit('loadImages', apiData.data)
      } catch (err) {
        console.log(err)
        throw new Error(err)
      }
    },
    async addImage({commit}, payload) {
      let data = {
        image: payload
      }
      commit('addImage', data)
    },
    async deleteImage({commit}, payload) {
      try{
        let imageData = {
          image: payload
        }
        fetch(`${serverAPI}/delete-image`, {
          method: 'POST',
          body: JSON.stringify(imageData),
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        }).then(res => {
          return res.json()
        }).then(body => {
          if(body.success){
            commit('deleteImage', payload)
          }
        })
      } catch(err) {
        console.log(err)
        throw new Error(err)
      }
    }
  },
  getters: {
    imagesData(state) {
      return state.imagesData
    }
  }
}