if (!window.JSON) {
 	window.JSON = (function() {
 		"use strict";
 		var _transfer = {
 			'b': '\b',
 			'f': '\f',
 			'n': '\n',
 			'r': '\r',
 			't': '\t',
 			'\\': '\\',
 			'"': '"'
 		}, JSON = {
 			parse: function(v) {
 				if (/^[\],:{}\s]*$/.test(v.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
 						.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
 						.replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
 					return (new Function('return ' + v))();
 				}
 			},
 			stringify: function(v) {
 				var t = typeof v;
 				if (t === 'string') {
 					var r = '';
 					for (var i = 0; i < v.length; i++) {
 						if (v.charCodeAt(i) < 128) {
 							var a = v.charAt(i);
 							for (var j in _transfer) {
 								if (v.charAt(i) === _transfer[j]) {
 									a = '\\' + j;
 									break;
 								}
 							}
 							r += a;
 						} else {
 							var a = Number(v.charCodeAt(i)).toString(16);
 							r += '\\u0000'.substring(0, 6 - a.length) + a;
 						}
 					}
 					return '"' + r + '"';
 				} else if (t === 'number') {
 					return String(v);
 				} else if (t === 'boolean') {
 					return v ? 'true' : 'false';
 				} else if (t === 'object') {
 					if (v === null) {
 						return 'null';
 					} else if (Object.prototype.toString.call(v) == '[object Array]') {
 						var r = [];
 						for (var i = 0; i < v.length; i++) {
 							r.push(JSON.stringify(v[i]));
 						}
 						return '[' + r.join(',') + ']';
 					} else {
 						var r = [];
 						for (var i in v) {
 							r.push('"' + i + '":' + JSON.stringify(v[i]));
 						}
 						return '{' + r.join(',') + '}';
 					}
 				} else {
 					return 'undefined';
 				}
 			}
 		};
 		return JSON;
 	})();
 }
 var richStorage = richStorage || (function(Storage, JSON) {
 	"use strict";
 	if (!Storage) {
 		try {
 			var userData = document.documentElement,
 				name = location.hostname,
 				expires = new Date();
 			userData.addBehavior("#default#userData");
 			expires.setDate(365);
 			userData.expires = expires.toUTCString();
 			userData.save(name);
 			Storage = {
 				setItem: function(key, value) {
 					userData.load(name);
 					userData.setAttribute(key, value);
 					userData.save(name);
 				},
 				getItem: function(key) {
 					userData.load(name);
 					return userData.getAttribute(key);
 				},
 				removeItem: function(key) {
 					userData.load(name);
 					userData.removeAttribute(key);
 					userData.save(name);
 				},
 				clear: function() {
 					userData.load(name);
 					userData.expires = (new Date()).toUTCString();
 					userData.save(name);
 				}
 			};
 		} catch (e) {
 			Storage = {
 				setItem: function() {},
 				getItem: function() {
 					return null;
 				},
 				removeItem: function() {},
 				clear: function() {}
 			};
 		}
 	}
 	return {
 		set: function(k, v) {
 			return Storage.setItem(k, JSON.stringify(v));
 		},
 		get: function(k) {
 			var v = Storage.getItem(k);
 			if (typeof v != 'string' || v == '') {
 				v = 'null';
 			}
 			return JSON.parse(v);
 		},
 		remove: function(k) {
 			return Storage.removeItem(k);
 		},
 		clear: function() {
 			return Storage.clear();
 		}
 	};
 })(window.localStorage, window.JSON);