import hello from './components/hello.vue';

const $sayHello = function(length = 8) {
	return hello.methods.sayHello();
}

const install = function(Vue,options = {}) {
	/* istanbul ignore if */
	if (install.installed) return;
	
	Vue.component('hello',hello);
	
	Vue.prototype.$sayHello = $sayHello;
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};

export default {
	version:	'1.0.0',
	install,
}