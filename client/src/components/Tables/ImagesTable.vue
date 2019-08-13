<template>
  <div>
    <md-table v-model="imagesData" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <!-- <md-table-cell md-label="#">{{ item.id }}</md-table-cell> -->
        <md-table-cell md-label="Image"><img :src="serverSrc + '/' + item.image" alt=""></md-table-cell>
        <md-table-cell v-if="navButtons" md-label="">
          <!-- <md-button class="md-just-icon md-simple" @click="toggleHide(item)" :class="{'md-primary': item.isShow}">
            <md-icon>remove_red_eye</md-icon>
            <md-tooltip v-if="item.isShow" md-direction="top">Hide</md-tooltip>
            <md-tooltip v-else md-direction="top">Show</md-tooltip>
          </md-button> -->
          <!-- <md-button v-if="editItem" :to="item.editLink" class="md-just-icon md-simple md-primary"> -->
          <md-button v-if="editItem" :to="item.editLink + '/' + item.id" class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button @click="deleteImage(item.image)" class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Delete</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

const serverAPI = `http://${window.location.hostname}:3000`

export default {
  name: "images-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    },
    imagesData: {
      type: Array,
      default: []
    },
    navButtons: {
      type: Boolean,
      default: false
    },
    editItem: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      serverSrc: serverAPI,
      selected: []
    };
  },
  methods: {
    toggleHide(item) {
      item.isShow = !item.isShow
      let itemId = item.id
      let data = {
        id: itemId,
        isShow: item.isShow
      }
      this.$store.dispatch('toggleShowWorker', data)
    },
    deleteImage(imageSrc) {
      this.$store.dispatch('deleteImage', imageSrc)
    }
  }
};
</script>

<style scoped>
  img{
    max-width: 100px;
  }
</style>