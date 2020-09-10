<template>
  <form role="search">
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
  },
};
</script>
