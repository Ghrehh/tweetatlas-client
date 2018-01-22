import newTweetStream from '@/api';

export default {
  stream(context) {
    const tweetStream = newTweetStream();

    tweetStream.onmessage = (listener) => {
      context.commit('changeCountryData', {
        data: JSON.parse(listener.data),
      });
    };
  },
};
