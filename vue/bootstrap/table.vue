<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th @click="sortCloumn(index)" v-for="(name, index) in columns">{{name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows">
        <td v-for="val in row">{{val}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

var methods = {}
methods.sortCloumn = function (index) {
  var sf = this.sortedFlags;
  sf[index] = !sf[index];
  var cmp = sf[index] ? -1 : 1
  this.rows.sort(function(a, b){
    if (a[index] > b[index]) {
      return cmp;
    } else if (a[index] < b[index]) {
      return -cmp;
    } else {
      return 0
    }
  });
}

export default {
  data: function () {
    return {
      sortedFlags: {},
    }
  },
  props:{
    columns: Array,
    rows: Array,
  },
  methods: methods
}
</script>