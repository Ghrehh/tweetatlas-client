export default {
  changeCountryData(state, payload) {
    state.locationData = payload.data.location_data;
    state.searchPhrases = payload.data.search_phrases;
    state.searchPhraseIndex = payload.data.search_phrase_index;
  },
  addSampleTweet(state, payload) {
    state.sampleTweets.push(payload.data.sample_tweet);

    if (state.sampleTweets.length > 200) {
      state.sampleTweets.splice(0, 1);
    }
  },
  nextSearch(state, payload) {
    if (state.nextSearch !== payload.data.next_search) {
      state.secondsToNextSearch = Math.round((
        Date.parse(payload.data.next_search) - Date.now()
      ) / 1000);
    }

    state.nextSearch = payload.data.next_search;
  },
  decrementTimer(state) {
    state.secondsToNextSearch -= 1;
  },
};
