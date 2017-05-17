<template>
  <form @submit.prevent="onSubmit" class="form-horizontal">
    <div v-if="errors.__all" class="alert alert-danger" role="alert">{{errors.__all}}</div>
    <div v-for="field in fields" :class="{'form-group': true, 'has-error': errors[field.name]}">
      <label :for="field.attrs.id" :class="labelClass">{{field.label}}</label>
      <div :class="fieldClass">
        <fieldView 
          :field="field" 
          :initial="formData[field.name]" 
          :reportValue="collectValue"
          :reportSubValue="collectSubValue"></fieldView>
      </div>
      <div v-if="errors[field.name]" :class="alignWithFieldClass">
        <span class="help-block">{{errors[field.name]}}</span>
      </div>   
      <div v-if="field.help" :class="alignWithFieldClass">
        <span class="help-block">{{field.help}}</span>
      </div>        
    </div>
    <div class="form-group">
      <div  :class="alignWithFieldClass">
        <button type="submit" class="btn btn-default" :disabled="disableSubmit">submit</button>
      </div>
    </div>
  </form>
</template>

<script>
var fieldView = require('model/field.vue')

var methods = {}
methods.onSubmit = function () {
  this.disableSubmit = true
  var options = {   
    emulateJSON: true, 
  }
  var data = {}
  for (var index = 0; index < this.fields.length; index++) {
    var field = this.fields[index]
    var name = field.name
    var value = this.formData[name]
    if (value !== undefined) {
      if (field.type == 'array') {
        var val = []
        // reserve order in choices
        field.choices.forEach(function(e){
          if (value.indexOf(e[0]) > -1) {
            val.push(e[0])
          }
        })
        value = JSON.stringify(val)
      } else if (field.type == 'set') {
        value = JSON.stringify(value)
      } else if (field.type == 'json') {
        value = JSON.stringify(value)
      } else if (field.type == 'row') {
        value = JSON.stringify(value)
      } else {

      }
      data[name] = value
    }
  }
  // console.log('send data', data, JSON.stringify(data))
  this.$http[this.method.toLowerCase()](this.action, data, options).then(
    function(response){ // success
      this.disableSubmit = false // in case this component keep-alived
      this.$router.push(this.successUrl)
    },
    function(response){ // fail
      // ** define a global error display logic
      this.disableSubmit = false
      this.errors = response.body
    }); 
}

methods.collectSubValue = function (field, event) {
  var key = field.parentName
  var t = event.target
  var value = t.value
  var rowNumber = t.rowNumber
  var colName = field.name
  console.log('collectSubValue:',key, colName, value, rowNumber)
  if (!this.formData[key]) {
    this.formData[key] = []
  }
  if (!this.formData[key][rowNumber]) {
    this.formData[key][rowNumber] = {}
  }
  this.formData[key][rowNumber][colName] = value
  console.log('row',this.formData[key])
}

methods.collectValue = function (field, event) {
  var key = field.name
  var value = event.target.value
  console.log('collectValue:', key, '(', typeof key, ')', value, '(', typeof value, ')')
  if (field.type == 'array') {
    var checked = event.target.checked
    if (!this.formData[key]) {
      this.formData[key] = []
    }
    var i = this.formData[key].indexOf(value)
    if (checked) {
      i < 0 && this.formData[key].push(value)
    } else {
      i > -1 && this.formData[key].splice(i, 1)
    }
  } else if (field.type == 'set') {
    var checked = event.target.checked
    if (!this.formData[key]) {
      this.formData[key] = {}
    }
    if (checked) {
      this.$set(this.formData[key], value, true)
    } else {
      this.$delete(this.formData[key], value)
    }
  } else if (field.type == 'json') {
    value = JSON.stringify(value)
  } else if (field.type == 'row') {
    console.log('collectValue row')
    var key = field.parentName
    var t = event.target
    var value = t.value
    var rowNumber = t.rowNumber
    var colName = field.name
    console.log(key, colName, value, rowNumber)
    if (!this.formData[key]) {
      this.formData[key] = []
    }
    if (!this.formData[key][rowNumber]) {
      this.formData[key][rowNumber] = {}
    }
    this.formData[key][rowNumber][colName] = value
    console.log('row',this.formData[key])
  } else {
    this.formData[key] = value
  }
}

var created = function () {
  console.log('created in form.vue')
  var self = this
  this.labelClass = {'control-label':true}
  this.labelClass['col-sm-'+this.labelColumns] = true
  this.fieldClass = {}
  this.fieldClass['col-sm-'+(12 - this.labelColumns)] = true
  this.alignWithFieldClass = {}
  this.alignWithFieldClass['col-sm-'+(12 - this.labelColumns)] = true
  this.alignWithFieldClass['col-sm-offset-'+this.labelColumns] = true
  if (this.initials == undefined) {
    this.$http.get(this.initialUrl).then(
      function(response){
        var obj = response.body
        for (var key in obj) {
          self.formData[key] = obj[key]
        }
      },
      function(response){
        this.errors = {__all: 'failed when fetching data'}
      }
    );     
  } else {
    for (var key in this.initials) {
      self.formData[key] = this.initials[key]
    }
  }
}
  
export default {
  updated: function () {
    console.log('update in form.vue')
  },
  created: created,
  data: function () {
    var formData = {}
    var errors = {}
    for (var i=0; i < this.fields.length; i++) {   
      var f = this.fields[i]
      formData[f.name] = undefined
      errors[f.name] = undefined
    }    
    return {
      formData: formData, 
      errors: errors,
      disableSubmit:false,
      labelClass: undefined,
      fieldClass: undefined,
      alignWithFieldClass: undefined,
      self: this,
    }
  },    
  props: {
    initialUrl: String,
    initials: Object,
    successUrl: String,
    fields: Array,
    action: String,
    labelColumns: {
      type: Number,
      default: 1,
    },
    method: {
      type: String,
      default: 'POST',
    },
  },
  methods: methods,
  components:{fieldView: fieldView},
}
</script>