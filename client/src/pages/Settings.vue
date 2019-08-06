<template>
<div class="content">
    <!-- <div class="arrow__back" @click="goBack()">
      <md-icon class="arrow__back--img">keyboard_arrow_left</md-icon>
    </div> -->
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
  <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">Settings</h4>
        <!-- <p class="category">Create your worker</p> -->
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field md-clearable>
              <label>Old password</label>
              <md-input v-model="oldPass"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>New password</label>
              <md-input v-model="newPass" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field >
              <label>Repeat new password</label>
              <md-input v-model="repeatPass" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Save changes</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      oldPass: '',
      newPass: '',
      repeatPass: ''
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>
<style></style>