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
      <sidebar-link to="/settings">
        <md-icon>settings</md-icon>
        <p>Settings</p>
      </sidebar-link>
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
      <sidebar-link to="/login" class="active-pro" style="margin-left:0px">
        <md-icon>exit_to_app</md-icon>
        <p>Exit</p>
      </sidebar-link>
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
  }
};
</script>
