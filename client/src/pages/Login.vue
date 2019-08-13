<template>
  <form @submit.prevent="loginUser">
    <md-card>
      <md-card-header data-background-color="green">
        <div class="md-title">Login</div>
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
      </md-card-content>

      <md-card-actions md-alignment="space-between">
        <md-button to="/registration" class="register">Resitration</md-button>
        <md-button type="submit" class=" md-success">Log In</md-button>
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
      password: ''
    }
  },
  methods: {
    async loginUser() {
      try{
        if(this.login == '' || this.password == '' ){
          alert('Input your data!!!')
          return false
        }
        let userData = {
          login: this.login,
          password: this.password
        }
        const loginUser = fetch(`${serverAPI}/login-user`, {
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
      } catch(err) {
        console.log(err)
        throw new Error(err)
      }
    }
  }
}
</script>

<style scoped>
.loginPage form{
  max-width: 500px;
  width: 100%;
}
</style>
