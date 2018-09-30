<template>
<div>
  <ul class='tweets'>
    <li class='tweet' v-for="(tweet, index) in sampleTweets" :key="index">
      <p>{{tweet.data.text}}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    sampleTweets() {
      return this.$store.state.sampleTweets;
    },
  },
};
</script>

<style scoped>
.tweets {
  list-style: none;
  padding: 10px 0;
}

.tweet {
  background-color: #f5f5f5;
  margin: 5px 0;
  padding: 5px;
}
</style>

