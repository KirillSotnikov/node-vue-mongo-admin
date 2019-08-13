<template>
  <form @submit.prevent="updateProfile">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Login</label>
              <md-input v-model="userData.login" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Old Password</label>
              <md-input v-model="userData.password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>New Password</label>
              <md-input v-model="newPassword" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button type="submit" class="md-raised md-success">Update Profile</md-button>
          </div>
        </div>
      </md-card-content>
      <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
        <span>Your profile was edited successfully!</span>
        <md-button class="md-success" @click="showSnackbar = false">Close</md-button>
      </md-snackbar>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    },
    userData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      newPassword: '',
      showSnackbar: false,
      position: 'center',
      duration: 4000,
      isInfinity: false
    };
  },
  methods: {
    updateProfile() {
      let login = this.userData.login
      let password = this.userData.password
      let newPassword = this.newPassword
      let userToken = window.sessionStorage.getItem('token')
      if(newPassword == ''){
        return false
      }
      let newData = {
        login,
        password,
        newPassword,
        userToken
      }
      this.$store.dispatch('updateProfile', newData)
        .then(() => {
          this.showSnackbar = true,
          this.userData.password = this.newPassword
          this.newPassword = ''
        })
    }
  }
};
</script>
<style></style>
