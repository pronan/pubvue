/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(30),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
if (typeof Object.assign != 'function') {
  Object.assign = function(target, varArgs) { // .length of function is 2
    'use strict';
    if (target == null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (true);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(29),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(31),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(28),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Vue =  __webpack_require__(1)
var VueRouter = __webpack_require__(34)
var VueResource = __webpack_require__(33)
var listView = __webpack_require__(12)
var updateView = __webpack_require__(13)
var formView = __webpack_require__(2)
var navbarView = __webpack_require__(14)
var folderView = __webpack_require__(11)

Vue.use(VueResource)
Vue.use(VueRouter)

var AdminUrlPrefix = '/tmd'
var MetaUrl = AdminUrlPrefix + '/models'

var resolveFolder = function (folder, routes, pathPrefix) {
  folder.files.forEach(function(file) {
    var model = file.data
    var path = pathPrefix + '/' + file.name // /models/history
    
    routes.push({
      path: path, // /models/history
      props: {
        navbar: {path: path},
        main: {
          model: model,
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
          initialDict: model.initial_dict,
          successUrl: path,
          fields: model.fields,
          action: AdminUrlPrefix + path, // /api/models/history
          labelColumns: 1,
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
        main: {model: model, path: path, AdminUrlPrefix: AdminUrlPrefix}
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
var created = function () {
  console.log('admin.vue created')
  var self = this
  self.$http.get(MetaUrl).then(
    function(response){
      self.modelFolder = response.body
      var routes = []
      var root = {name:'root', files:[], folders:[self.modelFolder]}
      resolveFolder(root, routes, '')
      routes.push({path:'/', redirect:'/models'})
      this.$router.addRoutes(routes)
    },
    function(response){
      this.error = 'Server error when fetching data' 
    }
  );      
}

/* harmony default export */ __webpack_exports__["default"] = ({ 
  router: router, 
  created: created,
  mounted: function () {console.log('admin.vue mounted')},
  data: function () {
    return {
      modelFolder: null,
      error: null,
    }
  },
});



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

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
    if (value === props.value ) {
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String,
    on: {type: Object, default: function(){return {}},},
    attrs: {type: Object, default: function(){return {}},},
    value: String,
    choices: {type: Array, default: function () {return []},},
    inline: {type: Boolean, default: true},
  },
  functional: true,
  render: render,
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var render = function (h, context) {
  var props = context.props
  var data = {}
  data.class = {"form-control":true}
  data.attrs = Object.assign({}, props.attrs)
  if (!data.attrs.name) {
    data.attrs.name = props.name
  } 
  data.on = Object.assign({}, props.on)
  data.domProps = {
    value: props.value,
  }
  return h('input', data) 
}

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String,
    on: {type: Object, default: function () {return {}},},
    attrs: {type: Object, default: function () {return {}},},
    value: [String, Number],
  },
  functional: true,
  render: render,
});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var render = function (h, context) {
  var props = context.props
  var children = []
  props.choices.forEach(function(_val){
    var value = _val[0]
    var label = _val[1]
    var data = {
      on: Object.assign({}, props.on), 
      attrs: Object.assign({}, props.attrs, {type: 'radio', name: props.name, value: value}),
    }
    if (value === props.value ) {
      data.attrs.checked = true
    }
    var cc = [h('input', data), label]
    if (props.inline) {
      children.push(h('label', {class:"radio-inline"}, cc))
    } else {
      children.push(h('div', {class:"radio"}, [h('label', {}, cc)]))
    }
  })
  return h('div', {}, children) 
}


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String,
    on: {type: Object, default: function () {return {}},},
    attrs: {type: Object, default: function () {return {}},},
    value: String,
    choices: {type: Array, default: function () {return []},},
    inline: {type: Boolean, default: true},
  },
  functional: true,
  render: render,
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var BLANCK_LABEL = '------------------'

var render = function (h, context) {
  var props = context.props
  var data = {}
  data.class = {"form-control": true}
  data.attrs = Object.assign({}, props.attrs)
  if (!data.attrs.name) {
    data.attrs.name = props.name
  } 
  data.on = Object.assign({}, props.on)
  var children = []
  if (props.include_blank) {
    children.push(h('option', {attrs:{value:''}}, [BLANCK_LABEL]))
  }
  props.choices.forEach(function(_val){
    var value = _val[0]
    var label = _val[1]
    var cdata = { attrs:{value: value} }
    if (value === props.value ) {
      cdata.attrs.selected = true
    }
    children.push(h('option', cdata, [label]))
  })
  return h('select', data, children) 
}

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String,
    on: {type: Object, default: function () {return {}},},
    attrs: {type: Object, default: function () {return {}},},
    value: String,
    choices: {type: Array, default: function () {return []},},
    include_blank: Boolean,
  },
  functional: true,
  render: render,
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var render = function (h, context) {
  var props = context.props
  var data = {}
  data.class = {"form-control":true}
  data.attrs = Object.assign({}, props.attrs)
  if (!data.attrs.name) {
    data.attrs.name = props.name
  } 
  data.on = Object.assign({}, props.on)
  data.domProps = {
    value: props.value,
  }
  return h('textarea', data) 
}

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String,
    on: {type: Object, default: function () {return {}},},
    attrs: {type: Object, default: function () {return {}},},
    value: String,
  },
  functional: true,
  render: render,
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var fieldView = __webpack_require__(10)

var onSubmit = function () {
  this.disableSubmit = true
  var options = {   
    emulateJSON: true, 
    headers: {
      'Content-Type': 'x-www-form-urlencoded',  // 'multipart/form-data',
    },
  }
  this.$http[this.method.toLowerCase()](this.action, this.formData, options).then(
    function(response){ // success
      this.disableSubmit = false // in case this component keep-alived
      this.$router.push(this.successUrl)
    },
    function(response){ // fail
      this.disableSubmit = false
      this.errors = response.body
    }); 
}
var collectEnteredValue = function (key, value) {
  // console.log('collectEnteredValue in form.vue:', key, value)
  this.formData[key] = value
}
var created = function () {
  this.labelClass = {'control-label':true}
  this.labelClass['col-sm-'+this.labelColumns] = true
  this.fieldClass = {}
  this.fieldClass['col-sm-'+(12 - this.labelColumns)] = true
  this.alignWithFieldClass = {}
  this.alignWithFieldClass['col-sm-'+(12 - this.labelColumns)] = true
  this.alignWithFieldClass['col-sm-offset-'+this.labelColumns] = true
  if (this.initialDict == null) {
    this.$http.get(this.initialUrl).then(
      function(response){
        this.formData = response.body
      },
      function(response){
        this.errors = {__all: 'failed when fetching data'}
      }
    );     
  } else {
    for (var key in this.initialDict) {
      this.formData[key] = this.initialDict[key]
    }
  }
}
  
/* harmony default export */ __webpack_exports__["default"] = ({
  updated: function () {
    console.log('update in form.vue')
  },
  created: created,
  data: function () {
    var formData = {}
    var errors = {}
    // for (var i=0; i < this.fields.length; i++) {   
    //   var f = this.fields[i]
    //   formData[f.name] = null
    //   errors[f.name] = null
    // }    
    return {
      formData: formData, 
      errors: errors,
      disableSubmit:false,
      labelClass: null,
      fieldClass: null,
      alignWithFieldClass: null,
    }
  },    
  props: {
    initialUrl: String,
    initialDict: Object,
    successUrl: String,
    fields: Array,
    action: String,
    labelColumns: {
      type: Number,
      default: 1,
    },
    method: {
      type: String,
      default: 'POST',
    },
  },
  methods: {
    onSubmit: onSubmit,
    collectEnteredValue: collectEnteredValue,
  },
  components:{fieldView: fieldView},
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var input = __webpack_require__(6)
var textarea = __webpack_require__(9)
var select = __webpack_require__(8)
var radio = __webpack_require__(7)
var checkbox = __webpack_require__(5)


var render = function (h, context) {
  var field = context.props.field
  var form = context.parent
  var value = context.props.initialValue
  var data = {attrs: {on: {}},}
  var attrs = data.attrs
  attrs.name = field.name
  attrs.value = value
  switch (field.tag_name) {
    case 'input':
      attrs.attrs = field.attrs
      attrs.on.input = function (e) {
        form.collectEnteredValue(field.name, e.target.value)
      }
      return h(input, data)    
    case 'textarea':
      attrs.attrs = field.attrs
      attrs.on.input = function (e) {
        form.collectEnteredValue(field.name, e.target.value)
      }
      return h(textarea, data)
    case 'radio':
      attrs.choices = field.choices
      attrs.inline = field.inline
      // attrs.attrs = field.attrs
      attrs.on.change = function (e) {
        form.collectEnteredValue(field.name, e.target.value)
      }
      return h(radio, data)    
    case 'select':
      attrs.choices = field.choices
      attrs.include_blank = field.include_blank
      attrs.on.change = function (e) {
        form.collectEnteredValue(field.name, e.target.value)
      }
      return h(select, data)          
    default:
      console.log('非法字段:',field.tag_name)
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    field: {type: Object, default: function(){return {}},},    
    initialValue: [String, Number],
  },
  functional: true,
  render: render,
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
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
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var methods = {}
methods.fetchData =  function () {
  this.$http.get(this.resourceUrl).then(
    function(response){
      console.log('fetching data')
      this.records = response.body
    },
    function(response){
      this.error = 'Server error when fetching data'
    }
  )
}
methods.sortCloumn = function (index) {
  var sf = this.sortedFlags;
  sf[index] = !sf[index];
  var cmp = sf[index] ? -1 : 1
  this.rows.sort(function(a, b){
    if (a[index] > b[index]) {
      return cmp;
    } else if (a[index] < b[index]) {
      return -cmp;
    } else {
      return 0
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  updated: function () {console.log('updated..')},
  created: function () {
    console.log('list.vue created')
    this.fetchData()
  },  
  methods: methods,
  props: {
    model: {type: Object, default: function(){return {}},},
    resourceUrl: String,
    updateUrlPrefix: String,
    createUrl: String,
  },
  computed: {
    rows: function () {
      console.log('computed rows')
      var self = this
      return self.records.map(function(record){
        return self.model.list_fields.map(function(name){
          return record[name]
        })
      })
    },
  },
  data: function () {
    return {
      records: [],
      error: null,
      sortedFlags: {},
    }
  },    
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var formView = __webpack_require__(2)

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    model: {type: Object, default: function(){return {}},},
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
      fields: props.model.fields,
      action: objectUrl,
      labelColumns: 1,
      method: 'PATCH',
    }
    return h(formView, {attrs:attrs})
  },
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  updated: function () {
    console.log('update in navbar.vue')
  },
  props: ['path'],
  computed : {
    navArray: function () {
      var cd = this.path
      var last = {path:'/', name:'root', active:true}
      var res = [last]
      if (cd !== '/') {
        var others = cd.slice(1).split('/')
        var p = '' 
        others.forEach(function(name){
          var path = p+'/'+name
          last = {path:path, name:name, active:true}
          res.push(last)
          p = path
        })       
      }
      last.active = false
      return res
    },
  },
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ol', {
    staticClass: "breadcrumb"
  }, _vm._l((_vm.navArray), function(e) {
    return _c('li', {
      class: {
        active: e.active
      }
    }, [(e.active) ? _c('router-link', {
      attrs: {
        "to": e.path
      }
    }, [_vm._v(_vm._s(e.name))]) : [_vm._v(_vm._s(e.name))]], 2)
  }))
},staticRenderFns: []}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.error) ? _c('div', {
    staticClass: "alert alert-danger",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c('table', {
    staticClass: "table table-hover table-striped"
  }, [_c('thead', [_c('tr', _vm._l((_vm.model.columns), function(name, index) {
    return _c('th', {
      on: {
        "click": function($event) {
          _vm.sortCloumn(index)
        }
      }
    }, [_vm._v(_vm._s(name))])
  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.rows), function(row, index) {
    return _c('tr', [_c('td', [_c('router-link', {
      attrs: {
        "to": _vm.updateUrlPrefix + _vm.records[index].id
      }
    }, [_vm._v(_vm._s(row[0]))])], 1), _vm._v(" "), _vm._l((row.slice(1)), function(val) {
      return _c('td', [_vm._v("\n          " + _vm._s(val) + "\n        ")])
    })], 2)
  }))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-default",
    attrs: {
      "to": _vm.createUrl
    }
  }, [_vm._v("create")])], 1)
},staticRenderFns: []}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row",
    attrs: {
      "id": "app"
    }
  }, [(_vm.error) ? _c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('div', {
    staticClass: "alert alert-danger",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v(_vm._s(_vm.error))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('router-view', {
    attrs: {
      "name": "navbar"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-12"
  }, [_c('router-view', {
    attrs: {
      "name": "main"
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "form-horizontal",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.onSubmit($event)
      }
    }
  }, [(_vm.errors.__all) ? _c('div', {
    staticClass: "alert alert-danger",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v(_vm._s(_vm.errors.__all))]) : _vm._e(), _vm._v(" "), _vm._l((_vm.fields), function(field) {
    return _c('div', {
      class: {
        'form-group': true, 'has-error': _vm.errors[field.name]
      }
    }, [_c('label', {
      class: _vm.labelClass,
      attrs: {
        "for": field.attrs.id
      }
    }, [_vm._v(_vm._s(field.label))]), _vm._v(" "), _c('div', {
      class: _vm.fieldClass
    }, [_c('fieldView', {
      attrs: {
        "field": field,
        "initialValue": _vm.formData[field.name]
      }
    })], 1), _vm._v(" "), (_vm.errors[field.name]) ? _c('div', {
      class: _vm.alignWithFieldClass
    }, [_c('span', {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.errors[field.name]))])]) : _vm._e(), _vm._v(" "), (field.help) ? _c('div', {
      class: _vm.alignWithFieldClass
    }, [_c('span', {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(field.help))])]) : _vm._e()])
  }), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    class: _vm.alignWithFieldClass
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit",
      "disabled": _vm.disableSubmit
    }
  }, [_vm._v("submit")])])])], 2)
},staticRenderFns: []}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "panel panel-default"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_c('tbody', _vm._l((_vm.files), function(file) {
    return _c('tr', [_c('td', [_c('router-link', {
      staticClass: "btn btn-primary",
      attrs: {
        "to": file.path,
        "role": "button"
      }
    }, [_vm._v(_vm._s(file.tableName))])], 1), _vm._v(" "), _c('td', [_c('router-link', {
      staticClass: "btn btn-default",
      attrs: {
        "to": file.path + '/create'
      }
    }, [_vm._v("create")]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-default",
      attrs: {
        "to": file.path
      }
    }, [_vm._v("list")])], 1)])
  }))])])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-default"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, _vm._l((_vm.folders), function(folder) {
    return _c('ul', {
      staticClass: "nav nav-pills nav-stacked"
    }, [_c('li', {
      attrs: {
        "role": "presentation"
      }
    }, [_c('router-link', {
      attrs: {
        "to": folder.path
      }
    }, [_vm._v(_vm._s(folder.name))])], 1)])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("\r\n      MODELS\r\n    ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("\r\n      MODEL CONTAINER\r\n    ")])])
}]}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// import 'custom-bootstrap.less';
var ok = __webpack_require__(3)
var Vue =  __webpack_require__(1)
var app = __webpack_require__(4)

new Vue(app).$mount('#app')

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = VueResource;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ })
/******/ ]);