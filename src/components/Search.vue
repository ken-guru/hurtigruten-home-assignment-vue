<template>
  <form role="search" @submit.stop.prevent="submitSearch()">
    <div class="search-component">
      <input
        v-model="query"
        type="search"
        placeholder="Search"
        aria-label="Hurtigruten ship search"
        class="search-component__input"
      >
      <button
        v-if="inputEntered"
        @click.prevent="resetQuery()"
        type="reset"
        class="search-component__button"
      >
        <img
          src="assets/cross.svg"
          alt="Search icon"
        >
      </button>
      <button
        v-else
        type="submit"
        class="search-component__button"
      >
        <img
          src="assets/magnifying-glass.svg"
          alt="Search icon"
        >
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchComponent',

  data() {
    return {
      query: '',
    };
  },

  computed: {
    inputEntered() {
      return this.query !== '';
    },
  },

  methods: {
    resetQuery() {
      this.query = '';
    },

    submitSearch() {
      axios
        .get(`/api/ships/${this.query}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
};
</script>
