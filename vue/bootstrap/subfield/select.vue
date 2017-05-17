<script>

var BLANCK_LABEL = '------------------'
var makeOptionData = function (value) {
  return {domProps: {value: value}}
}
var render = function (h) {
  var data = {
    'class': 'form-control', 
    attrs: this.attrs, 
    on: this.on,
    domProps: {
      value: this.value,
      rowNumber: this.rowNumber,
      parentName: this.parentName,
    },
  }
  var options = []
  if (this.include_blank) {
    options.push(h('option', makeOptionData(''), [BLANCK_LABEL]))
  }
  for (var index = 0; index < this.choices.length; index++) {
    var value = this.choices[index][0]
    var label = this.choices[index][1]
    var odata = makeOptionData(value)
    if (value == this.value ) {
      odata.domProps.selected = true
    }
    options.push( h('option', odata, [label]) )
  }
  return h('select', data, options) 
}

export default {
  props: {
    name: String, rowNumber: Number, parentName: String,
    on: {type: Object, default: function () {return {}},},
    attrs: {type: Object, default: function () {return {}},},
    value: [String, Number],
    choices: {type: Array, default: function () {return []},},
    include_blank: Boolean,
  },
  functional: false,
  render: render,
}
</script>