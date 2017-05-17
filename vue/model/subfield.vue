<script>
var input = require('bootstrap/subfield/input.vue')
var textarea = require('bootstrap/subfield/textarea.vue')
var select = require('bootstrap/subfield/select.vue')
var radio = require('bootstrap/subfield/radio.vue')
var checkbox = require('bootstrap/subfield/checkbox.vue')
var array = require('bootstrap/subfield/array.vue')
var set = require('bootstrap/subfield/set.vue')


var subFieldView = {
  functional: true,
}
subFieldView.render = function (h, context) {
  var field = context.props.field
  var data = {props:{}, domProps:{}}
  var domProps = data.domProps
  var props = data.props
  domProps.rowNumber = context.props.rowNumber
  // domProps.value = context.props.value
  props.on = {
    change: function (e) {
      context.props.reportSubValue(field, e)
    },
  }
  props.value = context.props.initial
  props.attrs = field.attrs
  switch (field.tag_name) {
    case 'input':
      return h(input, data)    
    case 'textarea':
      return h(textarea, data)
    case 'radio':
      props.choices = field.choices
      props.inline = field.inline
      return h(radio, data)    
    case 'select':
      props.choices = field.choices
      props.include_blank = field.include_blank
      return h(select, data)          
    case 'checkbox':
      props.choices = field.choices
      props.inline = field.inline
      return h(checkbox, data)   
    case 'array':
      props.choices = field.choices
      props.inline = field.inline
      return h(array, data)  
    case 'set':
      props.choices = field.choices
      props.inline = field.inline
      return h(set, data)    
    default:
      return h('div', {style:'color:red'}, ['Unknow field type!'])
  }
}

export default subFieldView
</script>