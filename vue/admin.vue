<template>
<div id='app' class="row">
  <div v-if="error" class="col-xs-12 col-md-12">
     <div class="alert alert-danger" role="alert">{{error}}</div>
  </div>
  <div class="col-xs-12 col-md-12">
    <router-view name="navbar"></router-view>
  </div>
  <div class="col-xs-12 col-md-12">
    <router-view name="main"></router-view>
  </div>
</div>
</template>

<script>
var Vue =  require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
var listView = require('model/list.vue')
var updateView = require('model/update.vue')
var formView = require('bootstrap/form.vue')
var navbarView = require('navbar.vue')
var folderView = require('model/folder.vue')

Vue.use(VueResource)
Vue.use(VueRouter)

var AdminUrlPrefix = '/tmd'
var MetaUrl = AdminUrlPrefix + '/models'
var labelColumns = 1

var resolveFolder = function (folder, routes, pathPrefix) {

  folder.files.forEach(function(file) {
    var model = file.data
    var path = pathPrefix + '/' + file.name // /models/history
    var form_fields = model.form_field_names.map(function(name){return model.fields[name]})

    routes.push({
      path: path, // /models/history
      props: {
        navbar: {path: path},
        main: {
          list_field_names: model.list_field_names,
          columns: model.columns,
          resourceUrl: AdminUrlPrefix + path,
          updateUrlPrefix: path + '/update/',
          createUrl: path + '/create',
        },
      },
      components: {
        navbar: navbarView, 
        main: listView,
      },
    }) 
    
    routes.push({
      path: path + '/create', // /models/history/create
      props: {
        navbar: {path: path + '/create'},
        main: {
          initials: model.initials,
          successUrl: path,
          fields: form_fields,
          action: AdminUrlPrefix + path, // /api/models/history
          labelColumns: labelColumns,
          method: 'POST',
        }
      },
      components: {
        navbar: navbarView, 
        main: formView,
      },
    })    
  
    routes.push({
      path: path + '/update/:id', // /models/history/update/:id
      props: {
        navbar: {path: path + '/update'},
        main: {
          fields: form_fields,
          path: path, 
          AdminUrlPrefix: AdminUrlPrefix,
          labelColumns: labelColumns,
        }
      },
      components: {
        navbar: navbarView, 
        main: updateView,
      },
    }) 
  })  

  folder.folders.forEach(function(subFolder) {
    var path = pathPrefix + '/' + subFolder.name
    routes.push({
      path: path, // /models/account
      props: {
        navbar: {path: path},
        main: {folder: subFolder, path: path}
      },
      components: {
        navbar: navbarView, 
        main: folderView,
      },
    })
    resolveFolder(subFolder, routes, path)
  })
}

var router = new VueRouter()
var dataF = {
  "files": [
    {
      "name": "profile",
      "data": {
        "form_field_names": [
          "family"
        ],
        "fields": {
          "family": {
            "columns": [
              "姓名",
              "年龄"
            ],
            "label": "家庭成员",
            "subfields": [
              {
                "parentName": "family",
                "label": "姓名",
                "attrs": {
                  "max_length": 4,
                  "name": "name",
                  "type": "text"
                },
                "tag_name": "input",
                "name": "name",
                "type": "varchar"
              },
              {
                "parentName": "family",
                "label": "年龄",
                "attrs": {
                  "max": 100,
                  "name": "age",
                  "type": "number"
                },
                "tag_name": "input",
                "name": "age",
                "type": "integer"
              }
            ],
            "attrs": {
              "max_length": 300,
              "required": true,
              "name": "family",
              "type": "text"
            },
            "tag_name": "row",
            "name": "family",
            "type": "row"
          },
          "id": {
            "label": "id",
            "attrs": {
              "name": "id",
              "type": "number"
            },
            "tag_name": "input",
            "name": "id",
            "type": "integer"
          }
        },
        "list_field_names": [
          "id",
          "family"
        ],
        "initials":         {},
        "columns": [
          "id",
          "家庭成员"
        ],
        "table_name": "homestats"
      }
    }
  ],
  "name": "models",
  "folders":  []
}


export default { 
  router: router, 
  // created: created,
    mounted: function () {
    this.modelFolder = dataF
    var routes = []
    var root = {name:'root', files:[], folders:[this.modelFolder]}
    resolveFolder(root, routes, '')
    routes.push({path:'/', redirect:'/models'})
    this.$router.addRoutes(routes)
  },
  data: function () {
    return {
      modelFolder: null,
      error: null,
    }
  },
}

</script>