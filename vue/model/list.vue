<template>
  <div>
    <div v-if="error" class="alert alert-danger" role="alert">{{error}}</div>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th @click="sortCloumn(index)" v-for="(name, index) in columns">{{name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows">
          <td>
            <router-link :to="updateUrlPrefix + records[index].id">{{row[0]}}</router-link>
          </td>
          <td v-for="val in row.slice(1)">
            {{val}}
          </td>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-default" :to="createUrl">create</router-link>
  </div>
</template>

<script>
var methods = {}
methods.fetchData =  function () {
  this.$http.get(this.resourceUrl).then(
    function(response){
      console.log('fetching data')
      this.records = response.body
    },
    function(response){
      this.error = 'Server error when fetching data'
    }
  )
}
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
  updated: function () {console.log('updated..')},
  created: function () {
    console.log('list.vue created')
    this.fetchData()
  },  
  methods: methods,
  props: {
    columns: {type: Array, default: function(){return []},},
    list_field_names: {type: Array, default: function(){return []},},
    resourceUrl: String,
    updateUrlPrefix: String,
    createUrl: String,
  },
  computed: {
    rows: function () {
      console.log('computed rows')
      var self = this
      return self.records.map(function(record){
        return self.list_field_names.map(function(name){
          return record[name]
        })
      })
    },
  },
  data: function () {
    return {
      records: [],
      error: null,
      sortedFlags: {},
    }
  },    
}
</script>