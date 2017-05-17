<script>
var render = function (h, context) {
  var props = context.props
  var children = []
  props.choices.forEach(function(_val){
    var value = _val[0]
    var label = _val[1]
    var data = {
      on: Object.assign({}, props.on), 
      attrs: Object.assign({}, props.attrs, {type: 'checkbox', name: props.name, value: value}),
    }
    if (props.value.indexOf(value) > -1 ) {
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
  props: {
    name: String,
    on: {type: Object, default: function(){return {}},},
    attrs: {type: Object, default: function(){return {}},},
    value: {type: Array, default: function () {return []},},
    choices: {type: Array, default: function () {return []},},
    inline: {type: Boolean, default: false},
  },
  functional: true,
  render: render,
}
</script>

