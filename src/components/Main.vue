<template>
<div class='main'>
  <div class='left'>
    <h1>Searching For: {{ searchPhrase }}</h1>
    <h2>Next Search for {{ nextSearch }} beginning in {{ secondsToNextSearch }} seconds</h2>
    <div class='data-container'>
      <location-data class='location-data'/>
      <world-map class='world-map' :countryData='locationData' />
    </div>
  </div>
  <sample-tweets class='right' />
</div>
</template>

<script>
import WorldMap from 'vue-world-map';
import LocationData from './LocationData';
import SampleTweets from './SampleTweets';

export default {
  components: {
    WorldMap,
    LocationData,
    SampleTweets,
  },
  computed: {
    locationData() {
      return this.$store.state.locationData;
    },
    searchPhrase() {
      const searchPhraseIndex = this.$store.state.searchPhraseIndex;
      return this.$store.state.searchPhrases[searchPhraseIndex];
    },
    nextSearch() {
      let nextSearchPhraseIndex = this.$store.state.searchPhraseIndex + 1;
      if (nextSearchPhraseIndex === this.$store.state.searchPhrases.length) {
        nextSearchPhraseIndex = 0;
      }

      return this.$store.state.searchPhrases[nextSearchPhraseIndex];
    },
    secondsToNextSearch() {
      return this.$store.state.secondsToNextSearch;
    },
  },
};
</script>

<style scoped>
.main {
  box-sizing: border-box;
  display: flex;
}

.left {
  flex: 3;
}

.data-container {
  display: flex;
}

.location-data {
}

.world-map {
  flex: 3;
}

.right {
  flex: 1;
  overflow: scroll;
  max-height: 100vh;
}
</style>

