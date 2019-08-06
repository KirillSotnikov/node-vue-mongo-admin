<template>
<div class="content">
    <div class="arrow__back" @click="goBack()">
      <md-icon class="arrow__back--img">keyboard_arrow_left</md-icon>
    </div>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
  <form @submit.prevent="createWorker">
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">Create Team</h4>
        <p class="category">Create your worker</p>
      </md-card-header>

      <md-card-content>
          <p class="h4 text-warning">RU</p>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Name</label>
              <md-input v-model="ru.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Salary</label>
              <md-input v-model="ru.salary" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Country</label>
              <md-input v-model="ru.country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>City</label>
              <md-input v-model="ru.city" type="text"></md-input>
            </md-field>
          </div>
        </div>
          <p class="h4 text-warning">UA</p>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Name</label>
              <md-input v-model="ua.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Salary</label>
              <md-input v-model="ua.salary" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Country</label>
              <md-input v-model="ua.country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>City</label>
              <md-input v-model="ua.city" type="text"></md-input>
            </md-field>
          </div>
        </div>
          <p class="h4 text-warning">EN</p>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Name</label>
              <md-input v-model="en.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Salary</label>
              <md-input v-model="en.salary" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Country</label>
              <md-input v-model="en.country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>City</label>
              <md-input v-model="en.city" type="text"></md-input>
            </md-field>
          </div>
          <md-checkbox v-model="isShow">Show?</md-checkbox>
        </div>
        <!-- <md-field>
          <label>Only images</label>
          <md-file v-model="single" accept="image/*" />
        </md-field> -->
        <div class="md-layout-item md-size-100 text-right">
          <md-button type="submit" class="md-raised md-success">Create Team</md-button>
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
      single: '',
      isShow: false,
      ru: {
        name: '',
        email: '',
        firstName: '',
        lastName: ''
      },
      ua: {
        name: '',
        email: '',
        firstName: '',
        lastName: ''
      },
      en: {
        name: '',
        email: '',
        firstName: '',
        lastName: ''
      }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    createWorker() {
      const newWorker = {
        isShow : this.isShow,
        editLink : '/editTeam',
        ru : {
          name: this.ru.name,
          salary: this.ru.salary,
          country: this.ru.country,
          city: this.ru.city
        },
        ua : {
          name: this.ua.name,
          salary: this.ua.salary,
          country: this.ua.country,
          city: this.ua.city
        },
        en : {
          name: this.en.name,
          salary: this.en.salary,
          country: this.en.country,
          city: this.en.city
        }
      }
      this.$store.dispatch('createWorker', newWorker)
        .then(() => {
          this.$router.push('/team')
        })
        .catch(err => {
          // alert(err.message)
          this.saveText = 'Save'
          this.submitStatus = err.message
        })
    }
  }
};
</script>
<style></style>