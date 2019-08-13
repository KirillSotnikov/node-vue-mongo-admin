<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <form @submit.prevent="addImage" enctype="multipart/form-data">
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">Add Image</h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <!-- <label>Single</label> -->
                    <input id="img" name="inputFile" type="file">
                    <!-- <md-file name="inputFile" v-model="image" /> -->
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button type="submit" class="md-raised md-success">Update Profile</md-button>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
        <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
          <span>Image was successfull upload!</span>
          <md-button class="md-success" @click="showSnackbar = false">Close</md-button>
        </md-snackbar>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard } from "@/pages";
import store from '../store/index'

const serverAPI = `http://${window.location.hostname}:3000`

export default {
  components: {
    EditProfileForm,
    UserCard
  },
  data() {
    return {
      image: '',
      serverApi: serverAPI,
      showSnackbar: false,
      position: 'center',
      duration: 4000,
      isInfinity: false
    }
  },
  mounted() {
    // if(store.getters.userData.length == 0) {
      store.dispatch('fetchUser')
    // }
  },
  computed: {
    addImage() {
      const file = document.getElementById('img')

      const formData = new FormData

      formData.append('img', file.files[0])

      // console.log(formData)
      
      fetch(`${serverAPI}/add-image`, {
        method: 'POST',
        body: formData,
        headers: {
         // 'Accept' : 'application/json',
         // 'Content-Type' : 'multipart/form-data'
        }
      }).then(res => {
        return res.json()
      }).then(body => {
        console.log(body)
        if(body.success) {
          this.showSnackbar = true
          file.value = '',
          this.$store.dispatch('addImage', body.imagePath)
          this.$router.push('/images')
        }
      })
    }
  }
};
</script>
