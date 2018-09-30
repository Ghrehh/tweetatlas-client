import newTweetStream from '@/api';

export default {
  stream(context) {
    const tweetStream = newTweetStream();

    tweetStream.onmessage = (listener) => {
      const jsonData = JSON.parse(listener.data);

      context.commit('changeCountryData', { data: jsonData });
      context.commit('addSampleTweet', { data: jsonData });
      context.commit('nextSearch', { data: jsonData });
    };
  },
  timer(context) {
    if (context.state.secondsToNextSearch > 0) {
      context.commit('decrementTimer');
    }

    setTimeout(() => this.dispatch({ type: 'timer' }), 1000);
  },
};
