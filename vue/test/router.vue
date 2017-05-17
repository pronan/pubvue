<template>
  
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <router-view></router-view>
</div>

</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)


var Foo = { template: '<div>foo</div>' }
var Bar = { template: '<div>bar</div>' }
var routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
var router = new VueRouter({
  routes 
})

export default {
  router,
}
</script>