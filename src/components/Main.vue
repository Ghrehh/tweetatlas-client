<template>
<div>
  <h1>Search Phrases: {{ searchPhrases }}</h1>
  <world-map :countryData='locationData' />
  <location-data />
</div>
</template>

<script>
import WorldMap from 'vue-world-map';
import LocationData from './LocationData';

export default {
  components: {
    WorldMap,
    LocationData,
  },
  computed: {
    locationData() {
      return this.$store.state.locationData;
    },
    searchPhrases() {
      return this.$store.state.searchPhrases.join(', ');
    },
  },
};
</script>

<style scoped>
</style>

