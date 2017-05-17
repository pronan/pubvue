<template>
<div>
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">
      MODELS
    </h3>
  </div>
  <div class="panel-body">
    <table class="table table-hover">
      <tbody>
        <tr v-for="file in files">
          <td>
            <router-link :to="file.path" class="btn btn-primary" role="button">{{file.tableName}}</router-link>
          </td>
          <td>
            <router-link :to="file.path + '/create'" class="btn btn-default">create</router-link>
            <router-link :to="file.path" class="btn btn-default">list</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">
      MODEL CONTAINER
    </h3>
  </div>
  <div class="panel-body">
    <ul v-for="folder in folders" class="nav nav-pills nav-stacked">
      <li role="presentation"><router-link :to="folder.path">{{folder.name}}</router-link></li>
    </ul>
  </div>
</div>
</div>
</template>

<script>

export default {
  props: {
    folder: {type: Object, default: function(){return {}}, },
    path: String,
  },
  computed: {
    files: function () {
      var path = this.path
      return this.folder.files.map(function(file){
        return {
          path: path + '/' + file.name, 
          tableName: file.data.table_name,
        }
      })
    },
    folders: function () {
      var path = this.path
      return this.folder.folders.map(function(folder){
        return {
          path: path + '/' + folder.name, 
          name: folder.name,
        }
      })
    },    
  },
}
</script>