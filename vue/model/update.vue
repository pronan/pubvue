<script>
var formView = require('bootstrap/form.vue')

export default {
  props: {
    fields: {type: Array, default: function(){return []},},
    path: String, 
    AdminUrlPrefix: String,
  },
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props
    var objectUrl = props.AdminUrlPrefix + props.path + '/' + ctx.parent.$route.params.id
    var attrs = {
      initialUrl: objectUrl,
      successUrl: props.path,
      fields: props.fields,
      action: objectUrl,
      labelColumns: props.labelColumns,
      method: 'PATCH',
    }
    return h(formView, {attrs:attrs})
  },
}
</script>