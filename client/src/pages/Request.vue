<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Request</h4>
            <p class="category">Here is a subtitle for this request table</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green" :editItem="false" :navButtons="true" :tableData="tableData"></simple-table>
            <md-button class="md-raised md-success" @click="prevPage" :disabled="isHiddenPrev">Prev</md-button>
            <md-button class="md-raised md-success" @click="nextPage" :disabled="isHiddenNext">Next</md-button>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    SimpleTable
  },
  data() {
    return {
      page: 1,
      rowsPerPage: 5,
      isHiddenPrev: true,
      isHiddenNext: false,
      requestData: [
        {
          isShow: false,
          id: 1,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: true,
          id: 2,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: true,
          id: 3,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: false,
          id: 4,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: false,
          id: 5,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: false,
          id: 6,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: true,
          id: 7,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: false,
          id: 8,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: true,
          id: 9,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: true,
          id: 10,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        }
      ]
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
    }
  },
  computed: {
    tableData() {
      return this.requestData.slice((this.page - 1) * this.rowsPerPage, this.page * this.rowsPerPage)
    }
  }
};
</script>