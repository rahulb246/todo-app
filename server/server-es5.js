module.exports =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app-config.js":
/*!******************************!*\
  !*** ./server/app-config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar config = {\n\n  siteTitle: \"OAuth App\",\n  dbLocation: \"mongodb://localhost/oauth-app\",\n\n  googleConfig: {\n    appID: \"256484107452-8gj6m3blt5p1imomu80kiaalc3pq5s4s.apps.googleusercontent.com\",\n    appSecret: \"WhOMQd83qQ1AtAPyHxVALE9t\",\n    callbackUrl: \"http://localhost:3000/auth/login/google/callback\"\n  },\n\n  jwtSecret: \"myLittlePony\"\n\n};\n\nmodule.exports = config;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwLWNvbmZpZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvYXBwLWNvbmZpZy5qcz8xNzBlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb25maWcgPSB7XG4gIFxuICAgIHNpdGVUaXRsZTogXCJPQXV0aCBBcHBcIixcbiAgICBkYkxvY2F0aW9uOiBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Qvb2F1dGgtYXBwXCIsXG4gIFxuICAgIGdvb2dsZUNvbmZpZzoge1xuICAgICAgYXBwSUQ6IFwiMjU2NDg0MTA3NDUyLThnajZtM2JsdDVwMWltb211ODBraWFhbGMzcHE1czRzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXG4gICAgICBhcHBTZWNyZXQ6IFwiV2hPTVFkODNxUTFBdEFQeUh4VkFMRTl0XCIsXG4gICAgICBjYWxsYmFja1VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9sb2dpbi9nb29nbGUvY2FsbGJhY2tcIlxuICAgIH0sXG5cbiAgICBqd3RTZWNyZXQ6IFwibXlMaXR0bGVQb255XCJcbiAgXG4gIH1cbiAgXG4gIG1vZHVsZS5leHBvcnRzID0gY29uZmlnOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQVpBO0FBQ0E7QUFjQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/app-config.js\n");

/***/ }),

/***/ "./server/models/Task.js":
/*!*******************************!*\
  !*** ./server/models/Task.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar TaskSchema = mongoose.Schema({\n\n  user_id: mongoose.Schema.Types.ObjectId,\n  date_created: Date,\n  title: String,\n  marked_done: Boolean,\n  tags: [mongoose.Schema.Types.ObjectId] //Each array element referes to a tag table\n\n});\n\n//We create a variable accesible outside of this file. Variable will be a mongoose schema with added functions\nvar Task = module.exports = mongoose.model('Task', TaskSchema);\n\nmodule.exports.createTask = function (newTask, callback) {\n  newTask.save(callback);\n};\nmodule.exports.deleteTask = function (taskId, callback) {\n  Task.findByIdAndRemove(taskId, callback);\n};\n\nmodule.exports.toggleDone = function (taskId, callback) {\n\n  Task.findById(taskId, function (err, doc) {\n    if (err) {\n      callback(err);\n    }\n    var markedValue = doc.marked_done;\n    Task.findByIdAndUpdate(taskId, { marked_done: !markedValue }, callback);\n  });\n};\n\nmodule.exports.getUserTasks = function (userId, callback) {\n  var query = { 'user_id': userId };\n  Task.find(query, callback);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvbW9kZWxzL1Rhc2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL21vZGVscy9UYXNrLmpzP2RiNDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxudmFyIFRhc2tTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuXG4gICAgdXNlcl9pZCAgICAgICAgOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgZGF0ZV9jcmVhdGVkICAgOiBEYXRlLFxuICAgIHRpdGxlICAgICAgICAgIDogU3RyaW5nLFxuICAgIG1hcmtlZF9kb25lICAgIDogQm9vbGVhbixcbiAgICB0YWdzICAgICAgICAgICA6IFttb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWRdIC8vRWFjaCBhcnJheSBlbGVtZW50IHJlZmVyZXMgdG8gYSB0YWcgdGFibGVcbiAgICBcbn0pO1xuXG4vL1dlIGNyZWF0ZSBhIHZhcmlhYmxlIGFjY2VzaWJsZSBvdXRzaWRlIG9mIHRoaXMgZmlsZS4gVmFyaWFibGUgd2lsbCBiZSBhIG1vbmdvb3NlIHNjaGVtYSB3aXRoIGFkZGVkIGZ1bmN0aW9uc1xudmFyIFRhc2sgPSBtb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdUYXNrJywgVGFza1NjaGVtYSk7XG5cblxubW9kdWxlLmV4cG9ydHMuY3JlYXRlVGFzayA9IGZ1bmN0aW9uKG5ld1Rhc2ssIGNhbGxiYWNrKXtcbiAgbmV3VGFzay5zYXZlKGNhbGxiYWNrKTtcbn1cbm1vZHVsZS5leHBvcnRzLmRlbGV0ZVRhc2sgPSBmdW5jdGlvbih0YXNrSWQsIGNhbGxiYWNrKXtcbiAgVGFzay5maW5kQnlJZEFuZFJlbW92ZSh0YXNrSWQsIGNhbGxiYWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMudG9nZ2xlRG9uZSA9IGZ1bmN0aW9uKHRhc2tJZCwgY2FsbGJhY2spe1xuXG4gIFRhc2suZmluZEJ5SWQodGFza0lkLCBmdW5jdGlvbihlcnIsIGRvYyl7XG4gICAgaWYoZXJyKXtcbiAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfVxuICAgIHZhciBtYXJrZWRWYWx1ZSA9IGRvYy5tYXJrZWRfZG9uZTtcbiAgICBUYXNrLmZpbmRCeUlkQW5kVXBkYXRlKHRhc2tJZCwge21hcmtlZF9kb25lOiAhbWFya2VkVmFsdWV9LCBjYWxsYmFjayk7XG4gIH0pO1xuIFxufVxuXG5tb2R1bGUuZXhwb3J0cy5nZXRVc2VyVGFza3MgPSBmdW5jdGlvbih1c2VySWQsIGNhbGxiYWNrKXtcbiAgdmFyIHF1ZXJ5ID0geyd1c2VyX2lkJzogdXNlcklkfTsgXG4gIFRhc2suZmluZChxdWVyeSwgY2FsbGJhY2spO1xufVxuXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/models/Task.js\n");

/***/ }),

/***/ "./server/models/Tasktag.js":
/*!**********************************!*\
  !*** ./server/models/Tasktag.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar TasktagSchema = mongoose.Schema({\n\n  name: String,\n  user_id: mongoose.Schema.Types.ObjectId //User that created this task\n\n});\n\n//We create a variable accesible outside of this file. Variable will be a mongoose schema with added functions\nvar Tasktag = module.exports = mongoose.model('Tasktag', TasktagSchema);\n\nmodule.exports.createTag = function (newTag, callback) {\n  newTag.save(callback);\n};\n\nmodule.exports.deleteTag = function (tagId, callback) {\n  Tasktag.findByIdAndRemove(tagId, callback);\n};\n\nmodule.exports.getUserTags = function (userId, callback) {\n  var query = { 'user_id': userId };\n  Tasktag.find(query, callback);\n};\n\nmodule.exports.tagExists = function (id) {\n  var query = { _id: mongoose.mongo.ObjectId(id) };\n  var promise = Tasktag.find(query);\n  promise.then(function (data) {\n    return true;\n  }, function (err) {\n    if (err) {\n      console.log(err);\n    };\n    return false;\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvbW9kZWxzL1Rhc2t0YWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL21vZGVscy9UYXNrdGFnLmpzP2ZiNmYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxudmFyIFRhc2t0YWdTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuXG4gICAgbmFtZSAgICAgICAgICAgOiBTdHJpbmcsXG4gICAgdXNlcl9pZCAgICAgICAgOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQgLy9Vc2VyIHRoYXQgY3JlYXRlZCB0aGlzIHRhc2tcbiAgICBcbn0pO1xuXG4vL1dlIGNyZWF0ZSBhIHZhcmlhYmxlIGFjY2VzaWJsZSBvdXRzaWRlIG9mIHRoaXMgZmlsZS4gVmFyaWFibGUgd2lsbCBiZSBhIG1vbmdvb3NlIHNjaGVtYSB3aXRoIGFkZGVkIGZ1bmN0aW9uc1xudmFyIFRhc2t0YWcgPSBtb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdUYXNrdGFnJywgVGFza3RhZ1NjaGVtYSk7XG5cblxubW9kdWxlLmV4cG9ydHMuY3JlYXRlVGFnID0gZnVuY3Rpb24obmV3VGFnLCBjYWxsYmFjayl7XG4gIG5ld1RhZy5zYXZlKGNhbGxiYWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZGVsZXRlVGFnID0gZnVuY3Rpb24odGFnSWQsIGNhbGxiYWNrKXtcbiAgVGFza3RhZy5maW5kQnlJZEFuZFJlbW92ZSh0YWdJZCwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5nZXRVc2VyVGFncyA9IGZ1bmN0aW9uKHVzZXJJZCwgY2FsbGJhY2spe1xuICB2YXIgcXVlcnkgPSB7J3VzZXJfaWQnOiB1c2VySWR9OyBcbiAgVGFza3RhZy5maW5kKHF1ZXJ5LCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzLnRhZ0V4aXN0cyA9IGZ1bmN0aW9uKGlkKXtcbiAgdmFyIHF1ZXJ5ID0ge19pZDogbW9uZ29vc2UubW9uZ28uT2JqZWN0SWQoaWQpfTtcbiAgdmFyIHByb21pc2UgPSBUYXNrdGFnLmZpbmQocXVlcnkpO1xuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgcmV0dXJuIHRydWU7IFxuICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICBpZihlcnIpe2NvbnNvbGUubG9nKGVycil9O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/models/Tasktag.js\n");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nvar UserSchema = mongoose.Schema({\n\n  email: String,\n  reg_source: String, //Source of registration\n\n  local: {\n    username: String,\n    password: String\n  },\n  google: {\n    id: String,\n    token: String\n  }\n\n});\n\n//We create a variable accesible outside of this file. Variable will be a mongoose schema with added functions\nvar User = module.exports = mongoose.model('User', UserSchema);\n\n//Functions for making last touches new user objects and then saves them in database\nmodule.exports.createLocalUser = function (newUser, callback) {\n  bcrypt.genSalt(10, function (err, salt) {\n    bcrypt.hash(newUser.local.password, salt, function (err, hash) {\n      newUser.local.password = hash;\n      newUser.save(callback);\n    });\n  });\n};\n\nmodule.exports.createGoogleUser = function (newUser, callback) {\n  newUser.save(callback);\n};\n\n//Getters for users\nmodule.exports.getUserByLocalUsername = function (username, callback) {\n  var query = { 'local.username': username };\n  User.findOne(query, callback);\n};\n\nmodule.exports.getUserByGoogleId = function (id, callback) {\n  var query = { 'google.id': id };\n  User.findOne(query, callback);\n};\n\nmodule.exports.getUserById = function (id, callback) {\n  var query = { _id: mongoose.mongo.ObjectId(id) };\n  User.findOne(query, callback);\n};\n\n// Password stuff\nmodule.exports.comparePassword = function (candidatePassword, hash, callback) {\n  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {\n    if (err) throw err;\n    callback(null, isMatch);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvbW9kZWxzL1VzZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL21vZGVscy9Vc2VyLmpzPzlkNzAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbnZhciBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQnKTtcblxudmFyIFVzZXJTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuXG4gICAgZW1haWwgICAgICAgICAgOiBTdHJpbmcsXG4gICAgcmVnX3NvdXJjZSAgICAgOiBTdHJpbmcsIC8vU291cmNlIG9mIHJlZ2lzdHJhdGlvblxuXG4gICAgbG9jYWwgICAgICAgICAgICA6IHtcbiAgICAgICAgdXNlcm5hbWUgICAgIDogU3RyaW5nLFxuICAgICAgICBwYXNzd29yZCAgICAgOiBTdHJpbmcsXG4gICAgfSxcbiAgICBnb29nbGUgICAgICAgICAgIDoge1xuICAgICAgICBpZCAgICAgICAgICAgOiBTdHJpbmcsXG4gICAgICAgIHRva2VuICAgICAgICA6IFN0cmluZ1xuICAgIH1cblxufSk7XG5cbi8vV2UgY3JlYXRlIGEgdmFyaWFibGUgYWNjZXNpYmxlIG91dHNpZGUgb2YgdGhpcyBmaWxlLiBWYXJpYWJsZSB3aWxsIGJlIGEgbW9uZ29vc2Ugc2NoZW1hIHdpdGggYWRkZWQgZnVuY3Rpb25zXG52YXIgVXNlciA9IG1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTtcblxuLy9GdW5jdGlvbnMgZm9yIG1ha2luZyBsYXN0IHRvdWNoZXMgbmV3IHVzZXIgb2JqZWN0cyBhbmQgdGhlbiBzYXZlcyB0aGVtIGluIGRhdGFiYXNlXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVMb2NhbFVzZXIgPSBmdW5jdGlvbihuZXdVc2VyLCBjYWxsYmFjayl7XG4gIGJjcnlwdC5nZW5TYWx0KDEwLCBmdW5jdGlvbihlcnIsIHNhbHQpIHtcbiAgICBiY3J5cHQuaGFzaChuZXdVc2VyLmxvY2FsLnBhc3N3b3JkLCBzYWx0LCBmdW5jdGlvbihlcnIsIGhhc2gpIHtcbiAgICAgICAgbmV3VXNlci5sb2NhbC5wYXNzd29yZCA9IGhhc2g7XG4gICAgICAgIG5ld1VzZXIuc2F2ZShjYWxsYmFjayk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVHb29nbGVVc2VyID0gZnVuY3Rpb24obmV3VXNlciwgY2FsbGJhY2spe1xuICBuZXdVc2VyLnNhdmUoY2FsbGJhY2spO1xufVxuXG5cbi8vR2V0dGVycyBmb3IgdXNlcnNcbm1vZHVsZS5leHBvcnRzLmdldFVzZXJCeUxvY2FsVXNlcm5hbWUgPSBmdW5jdGlvbih1c2VybmFtZSwgY2FsbGJhY2spe1xuICB2YXIgcXVlcnkgPSB7J2xvY2FsLnVzZXJuYW1lJzogdXNlcm5hbWV9OyBcbiAgVXNlci5maW5kT25lKHF1ZXJ5LCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmdldFVzZXJCeUdvb2dsZUlkID0gZnVuY3Rpb24oaWQsIGNhbGxiYWNrKXtcbiAgdmFyIHF1ZXJ5ID0geydnb29nbGUuaWQnOiBpZH07IFxuICBVc2VyLmZpbmRPbmUocXVlcnksIGNhbGxiYWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZ2V0VXNlckJ5SWQgPSBmdW5jdGlvbihpZCwgY2FsbGJhY2spe1xuICB2YXIgcXVlcnkgPSB7X2lkOiBtb25nb29zZS5tb25nby5PYmplY3RJZChpZCl9OyBcbiAgVXNlci5maW5kT25lKHF1ZXJ5LCBjYWxsYmFjayk7XG59XG5cbi8vIFBhc3N3b3JkIHN0dWZmXG5tb2R1bGUuZXhwb3J0cy5jb21wYXJlUGFzc3dvcmQgPSBmdW5jdGlvbihjYW5kaWRhdGVQYXNzd29yZCwgaGFzaCwgY2FsbGJhY2spe1xuICBiY3J5cHQuY29tcGFyZShjYW5kaWRhdGVQYXNzd29yZCwgaGFzaCwgZnVuY3Rpb24oZXJyLCBpc01hdGNoKXtcbiAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICBjYWxsYmFjayhudWxsLCBpc01hdGNoKTtcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFWQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/models/User.js\n");

/***/ }),

/***/ "./server/routes/api.js":
/*!******************************!*\
  !*** ./server/routes/api.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar APP_CONFIG = __webpack_require__(/*! ../app-config.js */ \"./server/app-config.js\");\nvar User = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\nvar Task = __webpack_require__(/*! ../models/Task */ \"./server/models/Task.js\");\nvar Tasktag = __webpack_require__(/*! ../models/Tasktag */ \"./server/models/Tasktag.js\");\nvar request = __webpack_require__(/*! superagent */ \"superagent\");\n\n//Middleware\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar JwtStrategy = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").Strategy;\nvar ExtractJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").ExtractJwt;\n\n//Routes\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\nrouter.post('/task_create', passport.authenticate('jwt', { session: false }), function (req, res) {\n\n  //Error checking\n  var errors = {};\n  /*req.checkBody('title','Task title is required').notEmpty();\n  req.checkBody('tags','List of task tags is required in request').exists();\n  if(req.validationErrors()){errors=req.validationErrors()};*/\n  if (req.body.tags) {\n    for (var i = 0; i < req.body.tags.length; i++) {\n      if (!Tasktag.tagExists(req.body.tags[i])) {\n        errors.tags = 'Tag with id ' + req.body.tags[i] + ' does not exist in DB';\n      };\n    }\n  }\n  if (Object.keys(errors).length !== 0) {\n    return res.status(400).json({ message: 'Unable to create task with this title and tags', errors: errors });\n  }\n  //Create task and insert into DB\n  var taskTitle = req.body.title;\n  var taskTags = req.body.tags; //Array of object IDs\n\n  var task = new Task();\n  task.user_id = req.user._id;\n  task.date_created = new Date();\n  task.title = taskTitle;\n  task.marked_done = false;\n  task.tags = taskTags;\n\n  Task.createTask(task, function (err, task) {\n    if (err) {\n      console.log(\"err = \" + err);\n      return res.status(400).json({ message: \"Unable to insert task in DB\", error: err.message });\n    }\n    if (!task) {\n      return res.status(400).json({ message: \"Unable to insert task in DB\" });\n    } else {\n      return res.status(200).json({ message: \"Task created succesfully\", task: task });\n    }\n  });\n});\n\nrouter.post('/task_toggledone', passport.authenticate('jwt', { session: false }), function (req, res) {\n\n  //Error checking\n  /*req.checkBody('id','Id must be a 24 byte hex string ID').isMongoId();\n  if(req.validationErrors()){\n    return res.status(400).json({ message: 'Unable to create task with this title and tags', errors: req.validationErrors() });        \n  };*/\n  //Toggle task in DB\n  var id = req.body.id;\n  Task.toggleDone(req.body.id, function (err, doc) {\n    if (err) {\n      console.log(\"Error on task toggle = \" + err);\n      return res.status(400).json({ message: \"Unable to toggle task in database\", error: err.message });\n    }\n    if (!doc) {\n      return res.status(400).json({ message: \"Unable to toggle task in database\" });\n    } else {\n      return res.status(200).json({ message: \"Task toggled succesfully\" });\n    }\n  });\n});\n\nrouter.post('/task_delete', passport.authenticate('jwt', { session: false }), function (req, res) {\n\n  //Error checking\n  /*req.checkBody('id','Id must be a 24 byte hex string ID').isMongoId();\n  if(req.validationErrors()){\n    return res.status(400).json({ message: 'Unable to delete task with this ID', errors: req.validationErrors() });        \n  };*/\n\n  //Toggle task in DB\n  Task.deleteTask(req.body.id, function (err, doc) {\n    if (err) {\n      console.log(\"Error on task delete = \" + err);\n      return res.status(400).json({ message: \"Unable to delete task in database\", error: err.message });\n    }\n    if (!doc) {\n      return res.status(400).json({ message: \"Unable to delete task in database\" });\n    } else {\n      return res.status(200).json({ message: \"Task deleted succesfully\" });\n    }\n  });\n});\n\nrouter.post('/task_getall', passport.authenticate('jwt', { session: false }), function (req, res) {\n\n  Task.getUserTasks(req.user._id, function (err, doc) {\n    if (err) {\n      console.log(\"Error on task getall = \" + err);\n      return res.status(400).json({ message: \"Unable to get tasks\", error: err.message });\n    }\n    if (!doc) {\n      return res.status(400).json({ message: \"Unable to get tasks\" });\n    } else {\n      return res.status(200).json({ message: \"Tasks retrieved succesfully\", tasks: doc });\n    }\n  });\n});\n\nrouter.post('/tasktag_getall', passport.authenticate('jwt', { session: false }), function (req, res) {\n  Tasktag.getUserTags(req.user._id, function (err, doc) {\n    if (err) {\n      console.log(\"Error on task getall = \" + err);\n      return res.status(400).json({ message: \"Unable to get tags\", error: err.message });\n    }\n    if (!doc) {\n      return res.status(400).json({ message: \"Unable to get tags\" });\n    } else {\n      return res.status(200).json({ message: \"Tags retrieved succesfully\", tags: doc });\n    }\n  });\n});\n\nrouter.post('/tasktag_create', passport.authenticate('jwt', { session: false }), function (req, res) {\n\n  //Error checking\n  var errors = {};\n  /*req.checkBody('name','Tag name is required').notEmpty();\n  if(req.validationErrors()){\n    return res.status(400).json({ message: 'Unable to insert tag in DB', errors: req.validationErrors() });\n  };*/\n\n  //Create tag and insert into DB\n  var tag = new Tasktag();\n  tag.user_id = req.user._id;\n  tag.name = req.body.name;\n\n  Tasktag.createTag(tag, function (err, tag) {\n    if (err) {\n      console.log(\"err = \" + err);\n      return res.status(400).json({ message: \"Unable to insert tag in DB\", error: err.message });\n    }\n    if (!tag) {\n      return res.status(400).json({ message: \"Unable to insert tag in DB\" });\n    } else {\n      return res.status(200).json({ message: \"Tag created succesfully\", tag: tag });\n    }\n  });\n});\n\nrouter.post('/tasktag_delete', passport.authenticate('jwt', { session: false }), function (req, res) {\n\n  //Error checking\n  /*req.checkBody('id','Tag ID was not provided').isEmpty();\n  if(req.validationErrors()){\n    return res.status(400).json({ message: 'Unable to delete tag with this name', errors: req.validationErrors() });        \n  };*/\n\n  //Toggle task in DB\n  Tasktag.deleteTask(req.body.id, function (err, doc) {\n    if (err) {\n      console.log(\"Error on tag delete = \" + err);\n      return res.status(400).json({ message: \"Unable to delete tag in database\", error: err.message });\n    }\n    if (!doc) {\n      return res.status(400).json({ message: \"Unable to delete tag in database\" });\n    } else {\n      return res.status(200).json({ message: \"Tag deleted succesfully\" });\n    }\n  });\n});\n\n//Example protected api. Make a POST request to this endpoint with JWT in the body as 'Authorization'\nrouter.post('/example', passport.authenticate('jwt', { session: false }), function (req, res) {\n  console.log(\"Example of a protected api called\");\n  //If user is not authorized, passport will send a 401 response\n  res.status(200).json({ message: 'You are authorized as ' + req.user.name });\n});\n\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvcm91dGVzL2FwaS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvcm91dGVzL2FwaS5qcz9iNGYyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBBUFBfQ09ORklHID0gcmVxdWlyZSgnLi4vYXBwLWNvbmZpZy5qcycpO1xudmFyIFVzZXIgPSByZXF1aXJlKCcuLi9tb2RlbHMvVXNlcicpO1xudmFyIFRhc2sgPSByZXF1aXJlKCcuLi9tb2RlbHMvVGFzaycpO1xudmFyIFRhc2t0YWcgPSByZXF1aXJlKCcuLi9tb2RlbHMvVGFza3RhZycpO1xudmFyIHJlcXVlc3QgPSByZXF1aXJlKCdzdXBlcmFnZW50Jyk7XG5cbi8vTWlkZGxld2FyZVxudmFyIGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xudmFyIHBhc3Nwb3J0ID0gcmVxdWlyZSgncGFzc3BvcnQnKTtcbnZhciBKd3RTdHJhdGVneSA9IHJlcXVpcmUoXCJwYXNzcG9ydC1qd3RcIikuU3RyYXRlZ3k7XG52YXIgRXh0cmFjdEp3dCA9IHJlcXVpcmUoXCJwYXNzcG9ydC1qd3RcIikuRXh0cmFjdEp3dDtcblxuLy9Sb3V0ZXNcbnZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KCcvdGFza19jcmVhdGUnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGZ1bmN0aW9uKHJlcSxyZXMpIHtcblxuICAvL0Vycm9yIGNoZWNraW5nXG4gIHZhciBlcnJvcnM9e307XG4gIC8qcmVxLmNoZWNrQm9keSgndGl0bGUnLCdUYXNrIHRpdGxlIGlzIHJlcXVpcmVkJykubm90RW1wdHkoKTtcbiAgcmVxLmNoZWNrQm9keSgndGFncycsJ0xpc3Qgb2YgdGFzayB0YWdzIGlzIHJlcXVpcmVkIGluIHJlcXVlc3QnKS5leGlzdHMoKTtcbiAgaWYocmVxLnZhbGlkYXRpb25FcnJvcnMoKSl7ZXJyb3JzPXJlcS52YWxpZGF0aW9uRXJyb3JzKCl9OyovXG4gIGlmKHJlcS5ib2R5LnRhZ3Mpe1xuICAgIGZvcih2YXIgaT0wOyBpPHJlcS5ib2R5LnRhZ3MubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoIVRhc2t0YWcudGFnRXhpc3RzKHJlcS5ib2R5LnRhZ3NbaV0pKXtcbiAgICAgICAgZXJyb3JzLnRhZ3M9KCdUYWcgd2l0aCBpZCAnICsgcmVxLmJvZHkudGFnc1tpXSArICcgZG9lcyBub3QgZXhpc3QgaW4gREInKVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggIT09IDApe1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdVbmFibGUgdG8gY3JlYXRlIHRhc2sgd2l0aCB0aGlzIHRpdGxlIGFuZCB0YWdzJywgZXJyb3JzOiBlcnJvcnMgfSk7XG4gIH1cbiAgLy9DcmVhdGUgdGFzayBhbmQgaW5zZXJ0IGludG8gREJcbiAgdmFyIHRhc2tUaXRsZSA9IHJlcS5ib2R5LnRpdGxlO1xuICB2YXIgdGFza1RhZ3MgPSByZXEuYm9keS50YWdzOyAvL0FycmF5IG9mIG9iamVjdCBJRHNcblxuICB2YXIgdGFzayA9IG5ldyBUYXNrKCk7XG4gIHRhc2sudXNlcl9pZCA9IHJlcS51c2VyLl9pZDtcbiAgdGFzay5kYXRlX2NyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xuICB0YXNrLnRpdGxlID0gdGFza1RpdGxlO1xuICB0YXNrLm1hcmtlZF9kb25lID0gZmFsc2U7XG4gIHRhc2sudGFncyA9IHRhc2tUYWdzO1xuXG4gIFRhc2suY3JlYXRlVGFzayh0YXNrLCBmdW5jdGlvbihlcnIsIHRhc2spe1xuICAgIGlmKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhcImVyciA9IFwiICsgZXJyKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogXCJVbmFibGUgdG8gaW5zZXJ0IHRhc2sgaW4gREJcIiwgZXJyb3I6IGVyci5tZXNzYWdlfSk7XG4gICAgfVxuICAgIGlmKCF0YXNrKXtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogXCJVbmFibGUgdG8gaW5zZXJ0IHRhc2sgaW4gREJcIn0pO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiBcIlRhc2sgY3JlYXRlZCBzdWNjZXNmdWxseVwiICwgdGFzazogdGFza30pO1xuICAgIH1cbiAgfSk7XG59KTtcblxuXG5yb3V0ZXIucG9zdCgnL3Rhc2tfdG9nZ2xlZG9uZScsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgZnVuY3Rpb24ocmVxLHJlcykge1xuICBcbiAgICAvL0Vycm9yIGNoZWNraW5nXG4gICAgLypyZXEuY2hlY2tCb2R5KCdpZCcsJ0lkIG11c3QgYmUgYSAyNCBieXRlIGhleCBzdHJpbmcgSUQnKS5pc01vbmdvSWQoKTtcbiAgICBpZihyZXEudmFsaWRhdGlvbkVycm9ycygpKXtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdVbmFibGUgdG8gY3JlYXRlIHRhc2sgd2l0aCB0aGlzIHRpdGxlIGFuZCB0YWdzJywgZXJyb3JzOiByZXEudmFsaWRhdGlvbkVycm9ycygpIH0pOyAgICAgICAgXG4gICAgfTsqL1xuICAvL1RvZ2dsZSB0YXNrIGluIERCXG4gICAgdmFyIGlkID0gcmVxLmJvZHkuaWQ7XG4gICAgVGFzay50b2dnbGVEb25lKHJlcS5ib2R5LmlkLGZ1bmN0aW9uKGVycixkb2Mpe1xuICAgICAgaWYoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBvbiB0YXNrIHRvZ2dsZSA9IFwiICsgZXJyKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOiBcIlVuYWJsZSB0byB0b2dnbGUgdGFzayBpbiBkYXRhYmFzZVwiLCBlcnJvcjogZXJyLm1lc3NhZ2V9KTtcbiAgICAgIH1cbiAgICAgIGlmKCFkb2Mpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IFwiVW5hYmxlIHRvIHRvZ2dsZSB0YXNrIGluIGRhdGFiYXNlXCJ9KTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTogXCJUYXNrIHRvZ2dsZWQgc3VjY2VzZnVsbHlcIn0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICB9KTtcblxuXG4gIHJvdXRlci5wb3N0KCcvdGFza19kZWxldGUnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGZ1bmN0aW9uKHJlcSxyZXMpIHtcbiAgICBcbiAgICAgIC8vRXJyb3IgY2hlY2tpbmdcbiAgICAgIC8qcmVxLmNoZWNrQm9keSgnaWQnLCdJZCBtdXN0IGJlIGEgMjQgYnl0ZSBoZXggc3RyaW5nIElEJykuaXNNb25nb0lkKCk7XG4gICAgICBpZihyZXEudmFsaWRhdGlvbkVycm9ycygpKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ1VuYWJsZSB0byBkZWxldGUgdGFzayB3aXRoIHRoaXMgSUQnLCBlcnJvcnM6IHJlcS52YWxpZGF0aW9uRXJyb3JzKCkgfSk7ICAgICAgICBcbiAgICAgIH07Ki9cbiAgICAgIFxuICAgICAgLy9Ub2dnbGUgdGFzayBpbiBEQlxuICAgICAgVGFzay5kZWxldGVUYXNrKHJlcS5ib2R5LmlkLGZ1bmN0aW9uKGVycixkb2Mpe1xuICAgICAgICBpZihlcnIpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb24gdGFzayBkZWxldGUgPSBcIiArIGVycik7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOiBcIlVuYWJsZSB0byBkZWxldGUgdGFzayBpbiBkYXRhYmFzZVwiLCBlcnJvcjogZXJyLm1lc3NhZ2V9KTtcbiAgICAgICAgfVxuICAgICAgICBpZighZG9jKXtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IFwiVW5hYmxlIHRvIGRlbGV0ZSB0YXNrIGluIGRhdGFiYXNlXCJ9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTogXCJUYXNrIGRlbGV0ZWQgc3VjY2VzZnVsbHlcIn0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgXG4gICAgcm91dGVyLnBvc3QoJy90YXNrX2dldGFsbCcsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgZnVuY3Rpb24ocmVxLHJlcykge1xuICAgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFRhc2suZ2V0VXNlclRhc2tzKHJlcS51c2VyLl9pZCxmdW5jdGlvbihlcnIsZG9jKXtcbiAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBvbiB0YXNrIGdldGFsbCA9IFwiICsgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogXCJVbmFibGUgdG8gZ2V0IHRhc2tzXCIsIGVycm9yOiBlcnIubWVzc2FnZX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZighZG9jKXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogXCJVbmFibGUgdG8gZ2V0IHRhc2tzXCJ9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTogXCJUYXNrcyByZXRyaWV2ZWQgc3VjY2VzZnVsbHlcIiwgdGFza3M6IGRvY30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuXG4gIFxucm91dGVyLnBvc3QoJy90YXNrdGFnX2dldGFsbCcsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgZnVuY3Rpb24ocmVxLHJlcykgeyAgICAgIFxuICBUYXNrdGFnLmdldFVzZXJUYWdzKHJlcS51c2VyLl9pZCwgZnVuY3Rpb24oZXJyLGRvYyl7XG4gICAgaWYoZXJyKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb24gdGFzayBnZXRhbGwgPSBcIiArIGVycik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IFwiVW5hYmxlIHRvIGdldCB0YWdzXCIsIGVycm9yOiBlcnIubWVzc2FnZX0pO1xuICAgIH1cbiAgICBpZighZG9jKXtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogXCJVbmFibGUgdG8gZ2V0IHRhZ3NcIn0pO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiBcIlRhZ3MgcmV0cmlldmVkIHN1Y2Nlc2Z1bGx5XCIsIHRhZ3M6IGRvY30pO1xuICAgIH1cbiAgfSk7XG59KTtcblxucm91dGVyLnBvc3QoJy90YXNrdGFnX2NyZWF0ZScsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgZnVuY3Rpb24ocmVxLHJlcykge1xuICBcbiAgICAvL0Vycm9yIGNoZWNraW5nXG4gICAgdmFyIGVycm9ycz17fTtcbiAgICAvKnJlcS5jaGVja0JvZHkoJ25hbWUnLCdUYWcgbmFtZSBpcyByZXF1aXJlZCcpLm5vdEVtcHR5KCk7XG4gICAgaWYocmVxLnZhbGlkYXRpb25FcnJvcnMoKSl7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnVW5hYmxlIHRvIGluc2VydCB0YWcgaW4gREInLCBlcnJvcnM6IHJlcS52YWxpZGF0aW9uRXJyb3JzKCkgfSk7XG4gICAgfTsqL1xuICAgIFxuICAgIC8vQ3JlYXRlIHRhZyBhbmQgaW5zZXJ0IGludG8gREJcbiAgICB2YXIgdGFnID0gbmV3IFRhc2t0YWcoKTtcbiAgICB0YWcudXNlcl9pZCA9IHJlcS51c2VyLl9pZDtcbiAgICB0YWcubmFtZSA9IHJlcS5ib2R5Lm5hbWU7XG4gIFxuICAgIFRhc2t0YWcuY3JlYXRlVGFnKHRhZywgZnVuY3Rpb24oZXJyLCB0YWcpe1xuICAgICAgaWYoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnIgPSBcIiArIGVycik7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogXCJVbmFibGUgdG8gaW5zZXJ0IHRhZyBpbiBEQlwiLCBlcnJvcjogZXJyLm1lc3NhZ2V9KTtcbiAgICAgIH1cbiAgICAgIGlmKCF0YWcpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IFwiVW5hYmxlIHRvIGluc2VydCB0YWcgaW4gREJcIn0pO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiBcIlRhZyBjcmVhdGVkIHN1Y2Nlc2Z1bGx5XCIsIHRhZzogdGFnfSk7XG4gICAgICB9XG4gICAgfSk7XG59KTtcblxucm91dGVyLnBvc3QoJy90YXNrdGFnX2RlbGV0ZScsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgZnVuY3Rpb24ocmVxLHJlcykge1xuICBcbiAgICAvL0Vycm9yIGNoZWNraW5nXG4gICAgLypyZXEuY2hlY2tCb2R5KCdpZCcsJ1RhZyBJRCB3YXMgbm90IHByb3ZpZGVkJykuaXNFbXB0eSgpO1xuICAgIGlmKHJlcS52YWxpZGF0aW9uRXJyb3JzKCkpe1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ1VuYWJsZSB0byBkZWxldGUgdGFnIHdpdGggdGhpcyBuYW1lJywgZXJyb3JzOiByZXEudmFsaWRhdGlvbkVycm9ycygpIH0pOyAgICAgICAgXG4gICAgfTsqL1xuICAgIFxuICAgIC8vVG9nZ2xlIHRhc2sgaW4gREJcbiAgICBUYXNrdGFnLmRlbGV0ZVRhc2socmVxLmJvZHkuaWQsZnVuY3Rpb24oZXJyLGRvYyl7XG4gICAgICBpZihlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9uIHRhZyBkZWxldGUgPSBcIiArIGVycik7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogXCJVbmFibGUgdG8gZGVsZXRlIHRhZyBpbiBkYXRhYmFzZVwiLCBlcnJvcjogZXJyLm1lc3NhZ2V9KTtcbiAgICAgIH1cbiAgICAgIGlmKCFkb2Mpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IFwiVW5hYmxlIHRvIGRlbGV0ZSB0YWcgaW4gZGF0YWJhc2VcIn0pO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiBcIlRhZyBkZWxldGVkIHN1Y2Nlc2Z1bGx5XCJ9KTtcbiAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cbi8vRXhhbXBsZSBwcm90ZWN0ZWQgYXBpLiBNYWtlIGEgUE9TVCByZXF1ZXN0IHRvIHRoaXMgZW5kcG9pbnQgd2l0aCBKV1QgaW4gdGhlIGJvZHkgYXMgJ0F1dGhvcml6YXRpb24nXG5yb3V0ZXIucG9zdCgnL2V4YW1wbGUnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGZ1bmN0aW9uKHJlcSxyZXMpIHtcbiAgY29uc29sZS5sb2coXCJFeGFtcGxlIG9mIGEgcHJvdGVjdGVkIGFwaSBjYWxsZWRcIik7XG4gIC8vSWYgdXNlciBpcyBub3QgYXV0aG9yaXplZCwgcGFzc3BvcnQgd2lsbCBzZW5kIGEgNDAxIHJlc3BvbnNlXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiAnWW91IGFyZSBhdXRob3JpemVkIGFzICcgKyByZXEudXNlci5uYW1lfSk7XG5cbn0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/routes/api.js\n");

/***/ }),

/***/ "./server/routes/auth.js":
/*!*******************************!*\
  !*** ./server/routes/auth.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar APP_CONFIG = __webpack_require__(/*! ../app-config.js */ \"./server/app-config.js\");\nvar User = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\nvar request = __webpack_require__(/*! superagent */ \"superagent\");\n\n//Middleware\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar JwtStrategy = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").Strategy;\nvar ExtractJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").ExtractJwt;\n\nvar LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy;\nvar FacebookStrategy = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy;\nvar GoogleStrategy = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy;\n\nvar google = __webpack_require__(/*! googleapis */ \"googleapis\");\nvar googlePlus = google.plus('v1');\nvar OAuth2 = google.auth.OAuth2;\nvar googleAuth = new OAuth2(APP_CONFIG.googleConfig.appID, APP_CONFIG.googleConfig.appSecret, APP_CONFIG.googleConfig.callbackUrl);\n\n//Serialize/deserialize\n//Seriale user takes in a user object and passes the id to the callback function 'done'\npassport.serializeUser(function (user, done) {\n\n  done(null, user.id);\n});\n\n//Given a user id, we search the database for the user and pass it to the callback function done\npassport.deserializeUser(function (id, done) {\n  User.getUserById(id, function (err, user) {\n    done(err, user);\n  });\n});\n\n//JWT Strategy is used to verify a client's JWT before accessing a 'secret' route\npassport.use('jwt', new JwtStrategy({\n  jwtFromRequest: ExtractJwt.fromBodyField('Authorization'),\n  secretOrKey: APP_CONFIG.jwtSecret\n}, function (jwt_payload, done) {\n\n  User.getUserById(jwt_payload.id, function (error, user) {\n\n    console.log(\"USER = \" + JSON.stringify(user));\n\n    if (error) {\n      console.log(\"Throwing error: \" + error);\n      return done(error, false);\n    }\n    if (user) {\n      return done(null, user);\n    } else {\n      return done(\"You are not authorized\", false);\n    }\n  });\n}));\n\n//THe following are strategies for logging in, all of which respond to the client with a JWT if succesful\npassport.use('local', new LocalStrategy(function (username, password, done) {\n\n  //Here, we create our own custom local strategy\n  //We use custom functions from our User mongoose object to talk to the database\n  //The process of our local strategy consists of\n  //1. Verifying user exists\n  //2. Check if password matches\n\n  User.getUserByLocalUsername(username, function (err, user) {\n\n    if (err) {\n      console.log(\"Throwing error\");\n      throw err;\n    }\n    if (!user) {\n      return done(null, false, { message: 'Unknown User' });\n    }\n\n    User.comparePassword(password, user.local.password, function (err, isMatch) {\n      //The callback function will be executed after the Mongo query\n      if (err) {\n        console.log(\"Throwing error\");\n        throw err;\n      }\n      if (isMatch) {\n        return done(null, user);\n      } else {\n        return done(null, false, { message: 'Invalid password' });\n      }\n    });\n  });\n}));\n\nvar googleAuth = function googleAuth(socialtoken, done) {\n\n  //Profile : https://www.googleapis.com/oauth2/v2/userinfo\n  //Email : https://www.googleapis.com/auth/userinfo.email\n\n  request.get(\"https://www.googleapis.com/plus/v1/people/me\").query({ \"access_token\": socialtoken }).set('Accept', 'application/json').end(function (err, res) {\n\n    if (err || !res.ok) {\n      done(err);\n    }\n\n    User.getUserByGoogleId(res.id, function (err, user) {\n\n      if (err) {\n        console.log(\"Throwing error\");\n        throw err;\n      }\n      debugger;\n      if (!user) {\n        var newUser = new User();\n\n        newUser.email = \"\";\n        newUser.name = res.displayName;\n        newUser.reg_source = 'google';\n        newUser.google.id = res.id;\n        newUser.google.token = socialtoken;\n\n        User.createGoogleUser(newUser, function (err, user) {\n          if (err) return done(err);\n          return done(null, newUser);\n        });\n      } else {\n        //User was found in DB\n        return done(null, user);\n      }\n    });\n  });\n};\n\n//Routes\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\nrouter.post('/login/google', function (req, res) {\n\n  googleAuth(req.body.socialtoken, function (err, user, info) {\n    if (err) {\n      console.log(err);\n      return res.status(403).json({ message: err });\n    }\n    if (!user) {\n      return res.status(401).json(info);\n    }\n    var payload = { id: user._id };\n    var token = jwt.sign(payload, APP_CONFIG.jwtSecret);\n    return res.status(200).json({ message: 'User has been authorized', token: token });\n  });\n});\n\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvcm91dGVzL2F1dGguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL3JvdXRlcy9hdXRoLmpzP2Q3ZWQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEFQUF9DT05GSUcgPSByZXF1aXJlKCcuLi9hcHAtY29uZmlnLmpzJyk7XG52YXIgVXNlciA9IHJlcXVpcmUoJy4uL21vZGVscy9Vc2VyJyk7XG52YXIgcmVxdWVzdCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcblxuLy9NaWRkbGV3YXJlXG52YXIgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG52YXIgcGFzc3BvcnQgPSByZXF1aXJlKCdwYXNzcG9ydCcpO1xudmFyIEp3dFN0cmF0ZWd5ID0gcmVxdWlyZShcInBhc3Nwb3J0LWp3dFwiKS5TdHJhdGVneTtcbnZhciBFeHRyYWN0Snd0ID0gcmVxdWlyZShcInBhc3Nwb3J0LWp3dFwiKS5FeHRyYWN0Snd0O1xuXG52YXIgTG9jYWxTdHJhdGVneSA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWxvY2FsJykuU3RyYXRlZ3k7XG52YXIgRmFjZWJvb2tTdHJhdGVneSA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWxvY2FsJykuU3RyYXRlZ3k7XG52YXIgR29vZ2xlU3RyYXRlZ3kgPSByZXF1aXJlKCdwYXNzcG9ydC1sb2NhbCcpLlN0cmF0ZWd5O1xuXG52YXIgZ29vZ2xlID0gcmVxdWlyZSgnZ29vZ2xlYXBpcycpO1xudmFyIGdvb2dsZVBsdXMgPSBnb29nbGUucGx1cygndjEnKTtcbnZhciBPQXV0aDIgPSBnb29nbGUuYXV0aC5PQXV0aDI7XG52YXIgZ29vZ2xlQXV0aCA9IG5ldyBPQXV0aDIoXG4gIEFQUF9DT05GSUcuZ29vZ2xlQ29uZmlnLmFwcElELFxuICBBUFBfQ09ORklHLmdvb2dsZUNvbmZpZy5hcHBTZWNyZXQsXG4gIEFQUF9DT05GSUcuZ29vZ2xlQ29uZmlnLmNhbGxiYWNrVXJsXG4pO1xuXG4vL1NlcmlhbGl6ZS9kZXNlcmlhbGl6ZVxuLy9TZXJpYWxlIHVzZXIgdGFrZXMgaW4gYSB1c2VyIG9iamVjdCBhbmQgcGFzc2VzIHRoZSBpZCB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gJ2RvbmUnXG5wYXNzcG9ydC5zZXJpYWxpemVVc2VyKGZ1bmN0aW9uKHVzZXIsZG9uZSl7XG5cbiAgZG9uZShudWxsLCB1c2VyLmlkKTtcbn0pO1xuXG4vL0dpdmVuIGEgdXNlciBpZCwgd2Ugc2VhcmNoIHRoZSBkYXRhYmFzZSBmb3IgdGhlIHVzZXIgYW5kIHBhc3MgaXQgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGRvbmVcbnBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcihmdW5jdGlvbihpZCwgZG9uZSl7XG4gIFVzZXIuZ2V0VXNlckJ5SWQoaWQsIGZ1bmN0aW9uKGVyciwgdXNlcil7XG4gICAgZG9uZShlcnIsIHVzZXIpO1xuICB9KTtcbn0pO1xuXG4vL0pXVCBTdHJhdGVneSBpcyB1c2VkIHRvIHZlcmlmeSBhIGNsaWVudCdzIEpXVCBiZWZvcmUgYWNjZXNzaW5nIGEgJ3NlY3JldCcgcm91dGVcbnBhc3Nwb3J0LnVzZSgnand0JywgbmV3IEp3dFN0cmF0ZWd5KFxuICB7XG4gIGp3dEZyb21SZXF1ZXN0ICA6IEV4dHJhY3RKd3QuZnJvbUJvZHlGaWVsZCgnQXV0aG9yaXphdGlvbicpLFxuICBzZWNyZXRPcktleSAgICAgOiBBUFBfQ09ORklHLmp3dFNlY3JldFxuICB9LFxuICBmdW5jdGlvbihqd3RfcGF5bG9hZCwgZG9uZSl7XG4gICAgICAgICAgXG4gICAgVXNlci5nZXRVc2VyQnlJZChqd3RfcGF5bG9hZC5pZCwgZnVuY3Rpb24oZXJyb3IsIHVzZXIpe1xuXG4gICAgICBjb25zb2xlLmxvZyhcIlVTRVIgPSBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgIFxuICAgICAgaWYoZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRocm93aW5nIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGRvbmUoZXJyb3IsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRvbmUoXCJZb3UgYXJlIG5vdCBhdXRob3JpemVkXCIsIGZhbHNlKTtcbiAgICAgIH0gIFxuICAgIH0pO1xuICAgIFxuICB9XG4pKTtcblxuLy9USGUgZm9sbG93aW5nIGFyZSBzdHJhdGVnaWVzIGZvciBsb2dnaW5nIGluLCBhbGwgb2Ygd2hpY2ggcmVzcG9uZCB0byB0aGUgY2xpZW50IHdpdGggYSBKV1QgaWYgc3VjY2VzZnVsXG5wYXNzcG9ydC51c2UoJ2xvY2FsJyxuZXcgTG9jYWxTdHJhdGVneShcbiAgZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCBkb25lKSB7XG4gICAgXG4gICAgLy9IZXJlLCB3ZSBjcmVhdGUgb3VyIG93biBjdXN0b20gbG9jYWwgc3RyYXRlZ3lcbiAgICAvL1dlIHVzZSBjdXN0b20gZnVuY3Rpb25zIGZyb20gb3VyIFVzZXIgbW9uZ29vc2Ugb2JqZWN0IHRvIHRhbGsgdG8gdGhlIGRhdGFiYXNlXG4gICAgLy9UaGUgcHJvY2VzcyBvZiBvdXIgbG9jYWwgc3RyYXRlZ3kgY29uc2lzdHMgb2ZcbiAgICAgIC8vMS4gVmVyaWZ5aW5nIHVzZXIgZXhpc3RzXG4gICAgICAvLzIuIENoZWNrIGlmIHBhc3N3b3JkIG1hdGNoZXNcbiAgICBcbiAgICBVc2VyLmdldFVzZXJCeUxvY2FsVXNlcm5hbWUodXNlcm5hbWUsIGZ1bmN0aW9uKGVyciwgdXNlcil7XG5cbiAgICAgIGlmKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhyb3dpbmcgZXJyb3JcIik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIGlmKCF1c2VyKXtcbiAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHttZXNzYWdlOiAnVW5rbm93biBVc2VyJ30pO1xuICAgICAgfVxuXG4gICAgICBVc2VyLmNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgdXNlci5sb2NhbC5wYXNzd29yZCwgZnVuY3Rpb24oZXJyLCBpc01hdGNoKXsgLy9UaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgTW9uZ28gcXVlcnlcbiAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlRocm93aW5nIGVycm9yXCIpO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZihpc01hdGNoKXtcbiAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwge21lc3NhZ2U6ICdJbnZhbGlkIHBhc3N3b3JkJ30pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xufSkpO1xuXG52YXIgZ29vZ2xlQXV0aCA9IGZ1bmN0aW9uKHNvY2lhbHRva2VuLCBkb25lKSB7ICAgIFxuXG4gICAgICAvL1Byb2ZpbGUgOiBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjIvdXNlcmluZm9cbiAgICAgIC8vRW1haWwgOiBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLmVtYWlsXG5cbiAgICAgIHJlcXVlc3RcbiAgICAgIC5nZXQoXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9wbHVzL3YxL3Blb3BsZS9tZVwiKVxuICAgICAgLnF1ZXJ5KHtcImFjY2Vzc190b2tlblwiOnNvY2lhbHRva2VufSlcbiAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJykgICAgICAgIFxuICAgICAgLmVuZChmdW5jdGlvbihlcnIsIHJlcyl7XG4gIFxuICAgICAgICBpZiAoZXJyIHx8ICFyZXMub2spIHsgZG9uZShlcnIpOyB9XG4gIFxuICAgICAgICBVc2VyLmdldFVzZXJCeUdvb2dsZUlkKHJlcy5pZCwgZnVuY3Rpb24oZXJyLCB1c2VyKXtcbiAgXG4gICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhyb3dpbmcgZXJyb3JcIik7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgIGlmKCF1c2VyKXtcbiAgICAgICAgICAgIHZhciBuZXdVc2VyID0gbmV3IFVzZXIoKTtcbiAgXG4gICAgICAgICAgICBuZXdVc2VyLmVtYWlsID0gXCJcIjtcbiAgICAgICAgICAgIG5ld1VzZXIubmFtZSA9IHJlcy5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIG5ld1VzZXIucmVnX3NvdXJjZSA9ICdnb29nbGUnO1xuICAgICAgICAgICAgbmV3VXNlci5nb29nbGUuaWQgPSByZXMuaWQ7XG4gICAgICAgICAgICBuZXdVc2VyLmdvb2dsZS50b2tlbiA9IHNvY2lhbHRva2VuO1xuICAgICAgXG4gICAgICAgICAgICBVc2VyLmNyZWF0ZUdvb2dsZVVzZXIobmV3VXNlciwgZnVuY3Rpb24oZXJyLCB1c2VyKXtcbiAgICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCBuZXdVc2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9Vc2VyIHdhcyBmb3VuZCBpbiBEQlxuICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7ICAgICAgICAgIFxuICAgICAgICAgIH0gICAgICBcbiAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG4gIFxuXG4vL1JvdXRlc1xudmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuXG5yb3V0ZXIucG9zdCgnL2xvZ2luL2dvb2dsZScsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gICAgXG4gICAgZ29vZ2xlQXV0aChyZXEuYm9keS5zb2NpYWx0b2tlbiwgZnVuY3Rpb24oZXJyLCB1c2VyLCBpbmZvKXtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZXNzYWdlOiBlcnJ9KTtcbiAgICAgIH1cbiAgICAgIGlmICghdXNlcikgeyBcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKGluZm8pO1xuICAgICAgfVxuICAgICAgICB2YXIgcGF5bG9hZCA9IHtpZDogdXNlci5faWR9O1xuICAgICAgICB2YXIgdG9rZW4gPSBqd3Quc2lnbihwYXlsb2FkLCBBUFBfQ09ORklHLmp3dFNlY3JldCk7ICBcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiAnVXNlciBoYXMgYmVlbiBhdXRob3JpemVkJywgdG9rZW46IHRva2VufSk7XG4gICAgICB9KTtcbn0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/routes/auth.js\n");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//Config file\nvar APP_CONFIG = __webpack_require__(/*! ./app-config.js */ \"./server/app-config.js\");\n\n//Middleware\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nvar Express = __webpack_require__(/*! express */ \"express\");\n//var expressValidator = require('express-validator');\nvar mongo = __webpack_require__(/*! mongodb */ \"mongodb\");\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\n\n//Setup database\nmongoose.connect(APP_CONFIG.dbLocation);\nvar db = mongoose.connection;\n\n//Set routes\nvar auth_route = __webpack_require__(/*! ./routes/auth */ \"./server/routes/auth.js\");\nvar api_route = __webpack_require__(/*! ./routes/api */ \"./server/routes/api.js\");\n\n//Init app\nvar app = new Express();\n\n// EJS view engine\napp.set('view engine', 'ejs');\napp.set('views', path.join(__dirname, 'views'));\n\n//BodyParser Middleware\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: true }));\napp.use(cookieParser());\n\n// Set the static folder\napp.use(Express.static(path.join(__dirname, 'static')));\n\n//Express Session\napp.use(session({\n  secret: 'supersecret',\n  saveUninitialized: true,\n  resave: true\n}));\n\n//Express Validator Middleware\n//A validator can detect validity of strings such as valid emails, passwords with certain restrictions, etc...\n/*app.use(expressValidator({\n  errorFormatter: function(param, msg, value) {\n      var namespace = param.split('.')\n      , root    = namespace.shift()\n      , formParam = root;\n\n    while(namespace.length) {\n      formParam += '[' + namespace.shift() + ']';\n    }\n    return {\n      param : formParam,\n      msg   : msg,\n      value : value\n    };\n  }\n}));*/\n\n// Passport config\napp.use(passport.initialize());\napp.use(passport.session());\n\n// Universal routing and rendering\napp.get('*', function (req, res) {\n  var markup = '';\n  var status = 200;\n\n  return res.status(status).render('index', { markup: markup });\n});\n\napp.post('/testpost', function (req, res) {\n  res.status(200).json({\n    message: 'test response.'\n  });\n});\n\n//Set routes\napp.use('/auth', auth_route);\napp.use('/api', api_route);\n\n// Start server\nvar port = process.env.PORT || 3000;\nvar env = \"development\" || false;\napp.listen(port, function (err) {\n  if (err) {\n    return console.error(err);\n  }\n  return console.info('\\n      Server running on http://localhost:' + port + ' [' + env + ']\\n      Universal rendering: ' + (process.env.UNIVERSAL ? 'enabled' : 'disabled') + '\\n    ');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NlcnZlci9zZXJ2ZXIuanM/Y2YyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbmZpZyBmaWxlXG52YXIgQVBQX0NPTkZJRyA9IHJlcXVpcmUoJy4vYXBwLWNvbmZpZy5qcycpO1xuXG4vL01pZGRsZXdhcmVcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbnZhciBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyk7XG52YXIgRXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbi8vdmFyIGV4cHJlc3NWYWxpZGF0b3IgPSByZXF1aXJlKCdleHByZXNzLXZhbGlkYXRvcicpO1xudmFyIG1vbmdvID0gcmVxdWlyZSgnbW9uZ29kYicpO1xudmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbnZhciBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBzZXNzaW9uID0gcmVxdWlyZSgnZXhwcmVzcy1zZXNzaW9uJyk7XG5cbi8vU2V0dXAgZGF0YWJhc2Vcbm1vbmdvb3NlLmNvbm5lY3QoQVBQX0NPTkZJRy5kYkxvY2F0aW9uKTtcbnZhciBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5cbi8vU2V0IHJvdXRlc1xudmFyIGF1dGhfcm91dGUgPSByZXF1aXJlKCcuL3JvdXRlcy9hdXRoJyk7XG52YXIgYXBpX3JvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBpJyk7XG5cblxuLy9Jbml0IGFwcFxuY29uc3QgYXBwID0gbmV3IEV4cHJlc3MoKTtcblxuLy8gRUpTIHZpZXcgZW5naW5lXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdlanMnKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ3ZpZXdzJykpO1xuXG4vL0JvZHlQYXJzZXIgTWlkZGxld2FyZVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcblxuLy8gU2V0IHRoZSBzdGF0aWMgZm9sZGVyXG5hcHAudXNlKEV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdzdGF0aWMnKSkpO1xuXG4vL0V4cHJlc3MgU2Vzc2lvblxuYXBwLnVzZShzZXNzaW9uKHtcbiAgc2VjcmV0OiAnc3VwZXJzZWNyZXQnLFxuICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcbiAgcmVzYXZlOiB0cnVlXG59KSlcblxuLy9FeHByZXNzIFZhbGlkYXRvciBNaWRkbGV3YXJlXG4vL0EgdmFsaWRhdG9yIGNhbiBkZXRlY3QgdmFsaWRpdHkgb2Ygc3RyaW5ncyBzdWNoIGFzIHZhbGlkIGVtYWlscywgcGFzc3dvcmRzIHdpdGggY2VydGFpbiByZXN0cmljdGlvbnMsIGV0Yy4uLlxuLyphcHAudXNlKGV4cHJlc3NWYWxpZGF0b3Ioe1xuICBlcnJvckZvcm1hdHRlcjogZnVuY3Rpb24ocGFyYW0sIG1zZywgdmFsdWUpIHtcbiAgICAgIHZhciBuYW1lc3BhY2UgPSBwYXJhbS5zcGxpdCgnLicpXG4gICAgICAsIHJvb3QgICAgPSBuYW1lc3BhY2Uuc2hpZnQoKVxuICAgICAgLCBmb3JtUGFyYW0gPSByb290O1xuXG4gICAgd2hpbGUobmFtZXNwYWNlLmxlbmd0aCkge1xuICAgICAgZm9ybVBhcmFtICs9ICdbJyArIG5hbWVzcGFjZS5zaGlmdCgpICsgJ10nO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW0gOiBmb3JtUGFyYW0sXG4gICAgICBtc2cgICA6IG1zZyxcbiAgICAgIHZhbHVlIDogdmFsdWVcbiAgICB9O1xuICB9XG59KSk7Ki9cblxuXG4vLyBQYXNzcG9ydCBjb25maWdcbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcblxuXG4vLyBVbml2ZXJzYWwgcm91dGluZyBhbmQgcmVuZGVyaW5nXG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24ocmVxLCByZXMpe1xuICB2YXIgbWFya3VwID0gJyc7XG4gIHZhciBzdGF0dXMgPSAyMDA7XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoc3RhdHVzKS5yZW5kZXIoJ2luZGV4JywgeyBtYXJrdXAgfSk7XG59KTtcblxuYXBwLnBvc3QoJy90ZXN0cG9zdCcsIGZ1bmN0aW9uKHJlcSxyZXMpe1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgbWVzc2FnZTogJ3Rlc3QgcmVzcG9uc2UuJ1xuICB9KVxufSk7XG5cbi8vU2V0IHJvdXRlc1xuYXBwLnVzZSgnL2F1dGgnLCBhdXRoX3JvdXRlKTtcbmFwcC51c2UoJy9hcGknLCBhcGlfcm91dGUpO1xuXG5cbi8vIFN0YXJ0IHNlcnZlclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdwcm9kdWN0aW9uJztcbmFwcC5saXN0ZW4ocG9ydCwgKGVycikgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxuICByZXR1cm4gY29uc29sZS5pbmZvKFxuICAgIGBcbiAgICAgIFNlcnZlciBydW5uaW5nIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fSBbJHtlbnZ9XVxuICAgICAgVW5pdmVyc2FsIHJlbmRlcmluZzogJHtwcm9jZXNzLmVudi5VTklWRVJTQUwgPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnfVxuICAgIGApO1xufSk7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/server.js\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNyeXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCI/Y2Y5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLXBhcnNlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIj8yMWRjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///cookie-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1zZXNzaW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCI/NjM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express-session\n");

/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"googleapis\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlYXBpcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImdvb2dsZWFwaXNcIj8zMTFiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZWFwaXNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///googleapis\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbndlYnRva2VuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCI/NjQ5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29kYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIj9kZWZmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydFwiPzFlN2IiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///passport\n");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQtand0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnQtand0XCI/YzYyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1qd3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///passport-jwt\n");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQtbG9jYWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydC1sb2NhbFwiPzVjY2YiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtbG9jYWxcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///passport-local\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"superagent\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJhZ2VudC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInN1cGVyYWdlbnRcIj9hMDI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN1cGVyYWdlbnRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///superagent\n");

/***/ })

/******/ });