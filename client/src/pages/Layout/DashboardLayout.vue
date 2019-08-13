<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar v-if="!$route.meta.loginPage">
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/request">
        <md-icon>assignment_turned_in</md-icon>
        <p>Requests</p>
      </sidebar-link>
      <sidebar-link to="/team">
        <md-icon>sentiment_satisfied_alt</md-icon>
        <p>Team</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Profile</p>
      </sidebar-link>
      <sidebar-link to="/images">
        <md-icon>add_to_photos</md-icon>
        <p>Images</p>
      </sidebar-link>
      <!-- <sidebar-link to="/settings">
        <md-icon>settings</md-icon>
        <p>Settings</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link> -->
      <form @submit.prevent="logOutUser" class="active-pro" style="width:100px; margin:10px 25px; position:absolute; bottom: 0; left: 0;">
        <!-- <form action="" style="width: 100%"> -->
          <button style="width: 100%; background: transparent; border: 0px; color: #fff; cursor: pointer" type="submit">
            <md-icon>exit_to_app</md-icon>
            <p>Exit</p>
          </button>
        <!-- </form> -->
      </form>
    </side-bar>

    <div class="main-panel" :class="{'loginPage':$route.meta.loginPage}">
      <top-navbar v-if="!$route.meta.loginPage"></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.loginPage"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  methods: {
    logOutUser() {
      window.sessionStorage.removeItem('token')
      // this.$router.push('/login')
      window.location.reload()
    }
  }
};
</script>
