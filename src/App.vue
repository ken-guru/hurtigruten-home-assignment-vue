<template>
  <div class="content">
    <form role="search">
      <div class="search-component">
        <input
          type="search"
          placeholder="Search"
          aria-label="Hurtigruten ship search"
          class="search-component__input"
        >
        <button
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
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
