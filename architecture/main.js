/**
 * Core of game. Includes only methods to work with plugins.
 * @author Ramil_Karimov@epam.com
 */
var eventCore = (new function() {
	var plugins = {};
	var createMethodHandler = function (methodName) {
		return function () {
			for (i in plugins) {
				if (plugins[i].methods && typeof plugins[i].methods[methodName] == 'function') {
					plugins[i].methods[methodName].apply(this, arguments);
				}
			}
		}
	}
	var registerMethods = function (plugin) {
		if (plugin.methods) {
			for (var methodName in plugin.methods) {
				if (!this[methodName]) {
					this[methodName] = createMethodHandler(methodName);
				}
			}
		}
	};
	this.registerPlugins = function(plugin) {
		plugins[plugin.name] = plugin;
		registerMethods(plugin);
		//TODO do something with methods
		//TODO do something with listeners
	};
	return this;
});