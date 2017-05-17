<template>
  <table class="table table-hover">
  <thead><tr>
    <th v-for="col in columns">{{col}}</th>
  </tr></thead> 
  <tbody>
  <tr v-for="(row, index) in value"> 
    <td v-for="field in subfields">
      <subFieldView 
        :reportSubValue="reportSubValue"
        :rowNumber="index"
        :field="field" 
        :initial="row[field.name]">
      </subFieldView>
    </td> 
  </tr>

  <tr v-for="index in blankRows"> 
    <td v-for="field in subfields">
      <subFieldView 
        :reportSubValue="reportSubValue"
        :rowNumber="index+value.length-1"
        :field="field" 
        :initial="field.initial">
      </subFieldView>
    </td> 
  </tr>

  </tbody>
  </table>
</template>

<script>
var subFieldView = require('model/subfield.vue')

export default {
  components:{subFieldView: subFieldView},
  props: {
    name: String,
    reportSubValue: Function,
    attrs: {type: Object, default: function(){return {}},},
    value: {type: Array, default: function () {return []},},
    subfields: {type: Array, default: function () {return []},},
    columns: {type: Array, default: function () {return []},},
    maxNumber: {type: Number, default: 3},
  },
  computed: {
    blankRows: function () {
      var n = this.maxNumber - this.value.length 
      if ( n > 0 ) {
        return n
      } else {
        return 0
      }
    },
  },
  // functional: true,
  // render: render,
}
</script>

