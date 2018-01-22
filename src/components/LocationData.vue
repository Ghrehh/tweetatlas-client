<template>
<ul>
  <li  v-for="(value, key) in locationData" :key='key'>
    {{ key }}: {{ value }}
  </li>
</ul>
</template>

<script>
export default {
  components: {
  },
  computed: {
    locationData() {
      return this.$store.state.locationData;
    },
  },
};
</script>

<style scoped>
</style>

