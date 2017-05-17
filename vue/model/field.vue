<script>
// var acceptValue = makeMap('input,textarea,option,select');
// var mustUseProp = function (tag, type, attr) {
//   return (
//     (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
//     (attr === 'selected' && tag === 'option') ||
//     (attr === 'checked' && tag === 'input') ||
//     (attr === 'muted' && tag === 'video')
//   )
// };
var input = require('bootstrap/field/input.vue')
var textarea = require('bootstrap/field/textarea.vue')
var select = require('bootstrap/field/select.vue')
var radio = require('bootstrap/field/radio.vue')
var checkbox = require('bootstrap/field/checkbox.vue')
var array = require('bootstrap/field/array.vue')
var set = require('bootstrap/field/set.vue')
var row = require('bootstrap/field/row.vue')

var fieldView = {
  functional: true,
}
fieldView.render = function (h, context) {
  var field = context.props.field
  var data = {props:{}}
  var props = data.props
  // props.on will be ignored in case 'row'
  props.on = {
    change: function (e) {
      context.props.reportValue(field, e)
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
    case 'row':
      props.reportSubValue = context.props.reportSubValue 
      props.subfields = field.subfields
      props.columns = field.columns
      return h(row, data)  
    default:
      return h('div', {style:'color:red'}, ['Unknow field type!'])
  }
}

export default fieldView
</script>