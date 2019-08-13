<template>
  <form @submit.prevent="registrateUser">
    <md-card>
      <md-card-header data-background-color="green">
        <div class="md-title">Registration</div>
      </md-card-header>
      <md-card-content>
          <div class="md-layout-item">
            <md-field>
              <label>Login</label>
              <md-input v-model="login" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Repeat password</label>
              <md-input v-model="repeatPassword" type="password"></md-input>
            </md-field>
          </div>
      </md-card-content>

      <md-card-actions md-alignment="space-between">
        <md-button to="/login" class="register">Log In</md-button>
        <md-button type="submit" class=" md-success">Save</md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>

<script>

const serverAPI = `http://${window.location.hostname}:3000`

export default {
  data() {
    return {
      login: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    async registrateUser() {
      try{
        if(this.login == '' || this.password == '' ){
          alert('Input your data!!!')
          return false
        }
        if(this.password !== this.repeatPassword) {
          alert('Repeat password is not correct')
          return false
        }
        let userData = {
          login: this.login,
          password: this.password
        }
        const addUser = fetch(`${serverAPI}/add-user`, {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        }).then(res => {
          if(res.ok == true) {
            return res.json()
          } else {
            return false
          }
        }).then(body => {
          window.sessionStorage.setItem('token', body.token)
          this.$router.push('/request')
        })
      } catch (err) {
        console.log(err)
        throw new Error(err)
      }
      
    }
  }
}
</script>

<style scoped>
form{
  width: 100%;
  max-width: 500px;
}
</style>
