<template>
  <div class="search-container">
    <div class="search">
      <form v-on:submit="search($event)">
        <input v-on:change="handleChange($event)" type="text">
        <input type="submit">
      </form>
      <Results></Results>
    </div>
  </div>
</template>

<script>
import Results from './Results.vue';

export default {
  components: { Results },
  data: function() {
    return {
      searchTerm: ""
    }
  },
  methods: {
    handleChange: function (e) {
      this.searchTerm = e.target.value;
    },
    search: function (e) {
      e.preventDefault();
      fetch('http://localhost:3000/search', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search: {
            term: this.searchTerm,
            type: 'Artist'
          }
        })
      })
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err))
    }
  }
};
</script>

<style lang="scss">
.search-container
  display: flex;
</style>
