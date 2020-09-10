<template>
  <div class="content">
    <search-component></search-component>
  </div>
</template>

<script>
import SearchComponent from './components/Search.vue';

export default {
  name: 'App',

  components: {
    'search-component': SearchComponent,
  },
};
</script>
