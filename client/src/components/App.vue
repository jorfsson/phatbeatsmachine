<template>
  <div class="hello">
    <h1>Hello World!</h1>
    {{ message }}
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'Hello There'
  })
};
</script>

<style lang="scss">
h1
  color: blue;
</style>
