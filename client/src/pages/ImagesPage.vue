<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Images</h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout-item md-size-100 text-right"><button type="button" @click="CreateImage" class="md-button md-raised md-success md-theme-default"><div class="md-ripple"><div class="md-button-content">Create image</div> </div></button></div>
            <images-table table-header-color="green" :editItem="false" :navButtons="true" :imagesData="imagesData"></images-table>
            <!-- <md-button class="md-raised md-success" @click="prevPage" :disabled="isHiddenPrev">Prev</md-button>
            <md-button class="md-raised md-success" @click="nextPage" :disabled="isHiddenNext">Next</md-button> -->
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ImagesTable, OrderedTable } from "@/components";
import store from '../store/index'

export default {
  components: {
    OrderedTable,
    ImagesTable
  },
  data() {
    return {
      page: 1,
      rowsPerPage: 5,
      isHiddenPrev: true,
      isHiddenNext: false,
    }
  },
  methods: {
    prevPage (){
      this.isHiddenNext = false
      if(this.page !== 1) {
        this.page = this.page - 1 ;
      }

      if(this.page == 1) {
        this.isHiddenPrev = true
      }
    },
    nextPage () {
      this.isHiddenPrev = false

      if(this.page < this.requestData.length / this.rowsPerPage){
        this.page = this.page + 1 ;
      }

      if(this.page < Math.ceil(this.requestData.length / this.rowsPerPage)) {
        this.isHiddenNext = false
      } else {
        this.isHiddenNext = true
      }
    },
    CreateImage() {
      this.$router.push('/add-image')
    }
  },
  mounted() {
    if(store.getters.imagesData.length == 0) {
      store.dispatch('fetchImages')
    }
  },
  computed: {
    imagesData() {
      return this.$store.getters.imagesData
    }
  }
};
</script>