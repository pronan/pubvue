<template>
  <table class="table table-hover">
  <thead><tr>
    <th v-for="col in columns">{{col}}</th>
  </tr></thead> 
  <tbody>
  <tr v-for="[obj, index] in value"> 
    <td v-for="field in subfields">
      <fieldView :pname="pname" :rowNumber="index" :colName="field.name" :field="field" :initial="obj[field.name]" :form="form"></fieldView>
    </td> 
  </tr>

  <tr v-for="i in 3"> 
    <td v-for="field in subfields">
      <fieldView :pname="pname" :rowNumber="i+(value.length||0)" :colName="field.name" :field="field" :initial="field.initial" :form="form"></fieldView>
    </td> 
  </tr>

  </tbody>
  </table>
</template>

<script>
var render = function (h, context) {
  var fieldView = require('model/field.vue')
  var props = context.props
  
  var children = []
  props.choices.forEach(function(_val){
    var value = _val[0]
    var label = _val[1]
    var data = {
      on: Object.assign({}, props.on), 
      attrs: Object.assign({}, props.attrs, {type: 'checkbox', name: props.name, value: value}),
    }
    if (props.value[value] ) {
      data.attrs.checked = true
    }
    var cc = [h('input', data), label]
    if (props.inline) {
      children.push(h('label', {class:"checkbox-inline"}, cc))
    } else {
      children.push(h('div', {class:"checkbox"}, [h('label', {}, cc)]))
    }
  })
  return h('div', {}, children) 
}


export default {
  created: function () {
    this.$options.components['fieldView'] = require('model/field.vue')
  },
  props: {
    name: String,
    on: {type: Object, default: function(){return {}},},
    attrs: {type: Object, default: function(){return {}},},
    value: {type: Object, default: function () {return {}},},
    subfields: {type: Array, default: function () {return []},},
    columns: {type: Array, default: function () {return []},},
    number: {type: Number, default: 3},
    form: Object,
  },
  // functional: true,
  // render: render,
}
</script>

