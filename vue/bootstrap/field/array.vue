<script>

var render = function (h) {
  var children = []
  for (var index = 0; index < this.choices.length; index++) {
    var value = this.choices[index][0]
    var label = this.choices[index][1]
    var checked = this.value.indexOf(value) > -1
    var data = {
      on: this.on, 
      attrs: {type:'checkbox'},
      domProps: {value: value, checked: checked}, 
    }
    var checkboxInput = [h('input', data), label]
    if (this.inline) {
      children.push(h('label', {class:"checkbox-inline"}, checkboxInput))
    } else {
      children.push(h('div', {class:"checkbox"}, [h('label', {}, checkboxInput)]))
    }
  }
  return h('div', {attrs:this.attrs}, children) 
}


export default {
  props: {
    name: String,
    on: {type: Object, default: function(){return {}},},
    attrs: {type: Object, default: function(){return {}},},
    value: {type: Array, default: function () {return []},},
    choices: {type: Array, default: function () {return []},},
    inline: {type: Boolean, default: false},
  },
  functional: false,
  render: render,
}
</script>

