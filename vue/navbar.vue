<template>

<ol class="breadcrumb">
  <li v-for="e in navArray" :class="{active:e.active}">
    <router-link v-if="e.active" :to="e.path">{{e.name}}</router-link>
    <template v-else>{{e.name}}</template>
  </li>
</ol> 

</template>

<script>
export default {
  updated: function () {
    console.log('update in navbar.vue')
  },
  props: ['path'],
  computed : {
    navArray: function () {
      var cd = this.path
      var last = {path:'/', name:'root', active:true}
      var res = [last]
      if (cd !== '/') {
        var others = cd.slice(1).split('/')
        var p = '' 
        others.forEach(function(name){
          var path = p+'/'+name
          last = {path:path, name:name, active:true}
          res.push(last)
          p = path
        })       
      }
      last.active = false
      return res
    },
  },
}
</script>