<template>
  <div id="app">
  <h3>{{appTitle}}</h3>
	<search-city @forwardData="weatherData = $event"></search-city>
	<search-result v-bind:citydata="weatherData"></search-result>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      appTitle: "Weather app",
      weatherData: JSON.parse('{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":14.23,"pressure":1031,"humidity":54,"temp_min":13,"temp_max":16},"visibility":10000,"wind":{"speed":5.1,"deg":300},"clouds":{"all":90},"dt":1492777200,"sys":{"type":1,"id":5091,"message":0.0053,"country":"GB","sunrise":1492750251,"sunset":1492801704},"id":2643743,"name":"London","cod":200}')
    }
  }
}
</script>
