<template>
  <div>
    <md-table v-model="tableData" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }" :class="{hidden:!item.isShow}">
        <!-- <md-table-cell md-label="#">{{ item.id }}</md-table-cell> -->
        <md-table-cell md-label="Name">{{ item.ru.name }}</md-table-cell>
        <md-table-cell md-label="Country">{{ item.ru.country }}</md-table-cell>
        <md-table-cell md-label="City">{{ item.ru.city }}</md-table-cell>
        <md-table-cell md-label="Salary">{{ item.ru.salary }}</md-table-cell>
        <md-table-cell v-if="navButtons" md-label="">
          <md-button class="md-just-icon md-simple" @click="toggleHide(item)" :class="{'md-primary': item.isShow}">
            <md-icon>remove_red_eye</md-icon>
            <md-tooltip v-if="item.isShow" md-direction="top">Hide</md-tooltip>
            <md-tooltip v-else md-direction="top">Show</md-tooltip>
          </md-button>
          <!-- <md-button v-if="editItem" :to="item.editLink" class="md-just-icon md-simple md-primary"> -->
          <md-button v-if="editItem" :to="item.editLink + '/' + item.id" class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button @click="deleteWorker(item.id)" class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Delete</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    },
    tableData: {
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
      selected: [],
      // users: [
      //   {
      //     name: "Dakota Rice",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   {
      //     name: "Minerva Hooper",
      //     salary: "$23,738",
      //     country: "Curaçao",
      //     city: "Sinaai-Waas"
      //   },
      //   {
      //     name: "Sage Rodriguez",
      //     salary: "$56,142",
      //     country: "Netherlands",
      //     city: "Overland Park"
      //   },
      //   {
      //     name: "Philip Chaney",
      //     salary: "$38,735",
      //     country: "Korea, South",
      //     city: "Gloucester"
      //   },
      //   {
      //     name: "Doris Greene",
      //     salary: "$63,542",
      //     country: "Malawi",
      //     city: "Feldkirchen in Kārnten"
      //   },
      //   {
      //     name: "Mason Porter",
      //     salary: "$78,615",
      //     country: "Chile",
      //     city: "Gloucester"
      //   }
      // ]
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
    deleteWorker(itemId) {
      this.$store.dispatch('deleteWorker', itemId)
    }
  }
};
</script>
