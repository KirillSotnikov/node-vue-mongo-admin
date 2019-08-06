<template>
<div class="content">
    <div class="arrow__back" @click="goBack()">
      <md-icon class="arrow__back--img">keyboard_arrow_left</md-icon>
    </div>
    <!-- <div>{{worker}}</div> -->
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
  <form @submit.prevent="updateWorker">
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">Edit Team</h4>
        <p class="category">Edit your worker</p>
      </md-card-header>

      <md-card-content>
          <p class="h4 text-warning">RU</p>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Name</label>
              <md-input v-model="worker.ru.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Salary</label>
              <md-input v-model="worker.ru.salary" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Country</label>
              <md-input v-model="worker.ru.country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>City</label>
              <md-input v-model="worker.ru.city" type="text"></md-input>
            </md-field>
          </div>
        </div>
          <p class="h4 text-warning">UA</p>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Name</label>
              <md-input v-model="worker.ua.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Salary</label>
              <md-input v-model="worker.ua.salary" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Country</label>
              <md-input v-model="worker.ua.country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>City</label>
              <md-input v-model="worker.ua.city" type="text"></md-input>
            </md-field>
          </div>
        </div>
          <p class="h4 text-warning">EN</p>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Name</label>
              <md-input v-model="worker.en.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Salary</label>
              <md-input v-model="worker.en.salary" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Country</label>
              <md-input v-model="worker.en.country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>City</label>
              <md-input v-model="worker.en.city" type="text"></md-input>
            </md-field>
          </div>
        </div>
        <!-- <md-field>
          <label>Only images</label>
          <md-file v-model="single" accept="image/*" />
        </md-field> -->
        <div class="md-layout-item md-size-100 text-right">
          <md-button class="md-raised md-success" type="submit">Edit Team</md-button>
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
    },
    id: {
      type: String || Number,
      default: ""
    }
  },
  data() {
    return {
      // single: '',
      // ru: {
      //   name: '',
      //   email: '',
      //   firstName: '',
      //   lastName: ''
      // },
      // ua: {
      //   name: '',
      //   email: '',
      //   firstName: '',
      //   lastName: ''
      // },
      // en: {
      //   name: '',
      //   email: '',
      //   firstName: '',
      //   lastName: ''
      // }
    };
  },
  computed: {
    worker () {
      const id = this.id
      return this.$store.getters.teamById(id)
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    updateWorker() {
      const updatedWorker = {
        id: this.worker.id,
        isShow : this.worker.isShow,
        editLink : '/editTeam',
        ru : {
          name: this.worker.ru.name,
          salary: this.worker.ru.salary,
          country: this.worker.ru.country,
          city: this.worker.ru.city
        },
        ua : {
          name: this.worker.ua.name,
          salary: this.worker.ua.salary,
          country: this.worker.ua.country,
          city: this.worker.ua.city
        },
        en : {
          name: this.worker.en.name,
          salary: this.worker.en.salary,
          country: this.worker.en.country,
          city: this.worker.en.city
        }
      }
      this.$store.dispatch('updateWorker', updatedWorker)
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
  }
// };
</script>
<style></style>