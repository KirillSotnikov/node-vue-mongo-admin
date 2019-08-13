<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <edit-profile-form :userData="userData" data-background-color="green"> </edit-profile-form>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard } from "@/pages";
import store from '../store/index'

export default {
  components: {
    EditProfileForm,
    UserCard
  },
  mounted() {
    // if(store.getters.userData.length == 0) {
      store.dispatch('fetchUser')
    // }
  },
  computed: {
    userData() {
      return this.$store.getters.userData
    }
  }
};
</script>
