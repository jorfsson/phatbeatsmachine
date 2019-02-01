<template>
  <div class="goodbye">
    {{ sup }}
    <Results></Results>
  </div>
</template>

<script>
import Results from './Results.vue';

export default {
  components: { Results },
  data: () => ({
    sup: 'Obi Wan Genobi'
  })
};
</script>

<style lang="scss">
.hello
  color: red;
</style>
