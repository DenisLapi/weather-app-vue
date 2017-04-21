<template>
	<div>
		<input type="text" v-model="city_name" placeholder="Enter city name">
		<button @click="searchCity" class="btn">Submit</button>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				city_name: "",
				data: {},
				name: "Denis"
			}
		},
		methods: {
			searchCity: function() {
				this.$http.get("http://api.openweathermap.org/data/2.5/weather?q="+this.city_name+"&units=metric&appid=760b3c85f98b0a077dbb3b5e2ba51b6f").then(function(response) {
					this.data = response.body;
					console.log(this.data);
					this.$emit("forwardData", this.data);
				});
			}
		}
	}
</script>

<style scoped> 
	input {
		border: 1px solid #ddd;
		border-radius: 5px;
		padding: 10px;
		font-size: 15px;
		outline: none;
	}
	.btn {
		border: none;
		border-radius: 5px;
		padding: 11px;
		font-size: 15px;
		outline: none;
		background: #4271b9;
		color: #fff;
	}
</style>