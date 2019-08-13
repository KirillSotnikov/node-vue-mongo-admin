

class Team {
  constructor(id, isShow = false, editLink, ru, ua, en) {
    this.id = id
    this.isShow = isShow
    this.editLink = editLink
    this.ru = ru
    this.ua = ua
    this.en = en
  }
}
const serverAPI = `http://${window.location.hostname}:3000`

export default {
  state: {
    teamData: [
      // {
      //   isShow: true,
      //   id: 1,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "ONE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "ONE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "ONE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: false,
      //   id: 2,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "TWO",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout",
      //   }, 
      //   ua: {
      //     name: "TWO",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "TWO",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: true,
      //   id: 3,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "THREE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "THREE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "THREE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: true,
      //   id: 4,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "FOUR",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "FOUR",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "FOUR",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: false,
      //   id: 5,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "FIVE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "FIVE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "FIVE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: false,
      //   id: 6,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "SIX",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "SIX",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "SIX",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: true,
      //   id: 7,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "SEVEN",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "SEVEN",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "SEVEN",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: true,
      //   id: 8,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "EIGHT",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "EIGHT",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "EIGHT",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: false,
      //   id: 9,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "NINE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "NINE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "NINE",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: true,
      //   id: 10,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "TEN ",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "TEN",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "TEN",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // },
      // {
      //   isShow: false,
      //   id: 11,
      //   editLink: '/editTeam',
      //   ru: {
      //     name: "ELEVEN",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   }, 
      //   ua: {
      //     name: "ELEVEN",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   en: {
      //     name: "ELEVEN",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      // }
    ]
  },
  mutations: {
    loadTeam (state, payload) {
      state.teamData = payload
    },
    deleteWorker (state, payload) {
      const worker = state.teamData.find(a => {
        return a.id == payload.id
      })
      let workerIndex = state.teamData.indexOf(worker)
      state.teamData.splice(workerIndex, 1)
    },
    createWorker(state, payload) {
      state.teamData.push(payload)
    }
  },
  actions: {
    async fetchTeam ({commit}) {
      const resultTeam = []

      try {

        const apiCall = await fetch(`${serverAPI}/get-team`, {
          method: 'GET',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        })
        const apiData = await apiCall.json()

        commit('loadTeam', apiData.data)
        // })
      } catch (error) {
        // alert(error.message)
        throw error
      }
    },
    async createWorker ({commit, getters}, payload) {
      try{
        let unicId = '_' + Math.random().toString(36).substr(2, 9)
        const newWorker = new Team(
          unicId,
          payload.isShow,
          payload.editLink,
          payload.ru,
          payload.ua,
          payload.en
        )

        const addRequest = fetch(`${serverAPI}/add-team`, {
          method: 'POST',
          body: JSON.stringify(newWorker),
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        })
        commit('createWorker', newWorker)
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async deleteWorker({commit}, payload) {
      try{
        let itemId = {
          id: payload
        }
        const deleteWorker = await fetch(`${serverAPI}/delete-team`, {
          method: 'POST',
          body: JSON.stringify(itemId),
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        }).then(() => {
          commit('deleteWorker', {
            id: itemId.id
          })
        })
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async updateWorker({commit}, payload) {
      try{
        let unicId = '_' + Math.random().toString(36).substr(2, 9)
        const updatedWorker = new Team(
          payload.id,
          payload.isShow,
          payload.editLink,
          payload.ru,
          payload.ua,
          payload.en
        )

        const updateWorkerRequest = await fetch(`${serverAPI}/edit-team`, {
          method: 'POST',
          body: JSON.stringify(updatedWorker),
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        })
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async toggleShowWorker({commit}, payload) {
      try {
        fetch(`${serverAPI}/toggle-show-team`,{
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        })
      } catch (err) {
        console.log(err)
        throw err
      }
    }
  },
  getters: {
    teamData(state) {
      return state.teamData
    },
    teamById(state) {
      return teamId => {
        return state.teamData.find(worker => {
          return worker.id == teamId
        });
      };
    }
  }
}