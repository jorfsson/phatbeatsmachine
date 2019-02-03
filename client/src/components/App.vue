<template>
  <search></search>
</template>

<script>
import Search from './Search.vue';

export default {
  components: { Search },
};
</script>

<style lang="scss">
body *
  outline: dotted;
body
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto'
</style>
