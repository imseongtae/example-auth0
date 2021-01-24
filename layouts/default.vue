<template>
  <div class="app">
    <!-- <fork-this /> -->
    <!-- <navbar /> -->
    <main class="main" role="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue';
// import ForkThis from '@/components/ForkThis.vue';

export default {
  components: {
    // Navbar,
    // ForkThis,
  },
};
</script>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
}

.main {
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
}
</style>
