<template>
  <form
    @submit.stop.prevent="submitSearch()"
    role="search"
  >
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
        @click.prevent="resetSearch()"
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
    <ul class="search-results">
      <li
        v-for="ship in ships"
        :key="ship.id"
        class="search-results__item"
      >
        {{ ship.name }}
      </li>
    </ul>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchComponent',

  data() {
    return {
      query: '',
      ships: [],
    };
  },

  computed: {
    inputEntered() {
      return this.query.length !== 0;
    },
  },

  methods: {
    resetSearch() {
      this.query = '';
      this.ships = [];
    },

    submitSearch() {
      if (this.query.length === 0) {
        this.ships = [];
      } else {
        axios
          .get(`/api/ships/${this.query}`)
          .then((response) => {
            this.ships = response.data;
          })
          .catch((error) => {
            console.warn(error);
          });
      }
    },
  },
};
</script>
