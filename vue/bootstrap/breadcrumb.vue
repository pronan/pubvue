<template>

<ol class="breadcrumb">
  <li>
    <router-link to="/">Root</router-link>
  </li>
  <li v-for="e in getMiddle">
    <router-link :to="e.path">{{e.name}}</router-link>
  </li>
  <li class="active">{{currentName}}</li>
</ol> 

</template>

<script>
export default {
  data: function () {
    return {
      models:null,
    }
  },
  computed : {
    getMiddle: function () {
      console.log(this.$route)
      return []
    },
    currentName: function () {
      return 'XX'
    },
  },
}
</script>