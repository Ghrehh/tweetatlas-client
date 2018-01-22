export default {
  changeCountryData(state, payload) {
    state.locationData = payload.data.location_data;
    state.searchPhrases = payload.data.search_phrases;
  },
};
