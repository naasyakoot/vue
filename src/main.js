var data = function data() {

			return {

				name: "SALAMOON ALAIKOOM",
				name2: "SALAMOON SALAMOON"
			}


		};


		var template = `
		<div> 
		{{name}}
		{{name2}}
		<h1>SALAM</h1> 

		</div>`;

/*
var app = Vue.createApp({ data, template });

	app.mount('#vue-h1');

	*/

	var sets = { data, template };

	Vue.createApp(sets).mount('#vue-h1');

	// console.log(Vue);