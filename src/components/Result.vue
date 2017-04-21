<template>
	<div class="container">
		<p>Country: <b>{{cityCountry}}</b></p>
		<p>Name: <b>{{cityName}}</b></p>
		<p>Temperature: {{cityTemperature}} &#8451;</p>
		<p class="flex-align">{{cityDesc}}
		   <img v-bind:src="'http://openweathermap.org/img/w/'+cityIcon+'.png'">
		</p>
	</div>
</template>

<script>
	export default {
		props: ["citydata"],
		data: function() { 
			return {
						
			}
		},
		computed: {
			cityCountry: function() {
				return this.citydata.sys.country;
			},
			cityName: function() {
				return this.citydata.name;
			},
			cityTemperature: function() {
				return this.citydata.main.temp;
			},
			cityDesc: function() {
				return this.citydata.weather[0].main;
			},
			cityIcon: function() {
				return this.citydata.weather[0].icon;
			}
		}
	}
</script>

<style scoped>
	.container {
		text-align: left;
		padding: 20px;
		margin: 20px auto;
		border-right: 5px;
		border: 1px solid #e4e4e4;
		height: 250px;
		width: 250px;
		background: #efefef;
	}
	.container p {
		margin-top: 0;
	}
	.flex-align {
		display: flex;
		align-items: center;
	}
</style>
