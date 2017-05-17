<script>
var render = function (h) {
  var children = []
  for (var index = 0; index < this.choices.length; index++) {
    var value = this.choices[index][0]
    var label = this.choices[index][1]
    var checked = value == this.value
    var data = {
      on: this.on, 
      attrs: {type:'radio'},
      domProps: {value: value, checked: checked}, 
    }
    var radioInput = [h('input', data), label]
    if (this.inline) {
      children.push(h('label', {class: "radio-inline"}, radioInput))
    } else {
      children.push(h('div', {class: "radio"}, [h('label', {}, radioInput)]))
    }
  }
  return h('div', {}, children) 
}

export default {
  props: {
    name: String,
    on: {type: Object, default: function () {return {}},},
    attrs: {type: Object, default: function () {return {}},},
    value: [String, Number],
    choices: {type: Array, default: function () {return []},},
    inline: {type: Boolean, default: false},
  },
  functional: false,
  render: render,
}
</script>