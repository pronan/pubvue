<script>
var render = function (h) {
  return h('input', {
    'class': 'form-control', 
    attrs: this.attrs, 
    on: this.on,
    domProps: {value: this.value},
  }) 
}

export default {
  props:['attrs','on','value'],
  functional: false,
  render: render,
}
</script>