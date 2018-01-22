<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css';

export default {
  mounted() {
    this.$store.dispatch({ type: 'stream' });
  },
};
</script>

<style>
</style>
