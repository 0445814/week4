<template>
  <header>
    <Navbar />
  </header>

  <main class="main" role="main">
    <router-view :key="key" />
  </main>

  <footer>
    <NavbarBottom />
  </footer>
</template>

<script>
import Navbar from '/@/layouts/Navbar/index.vue'
import NavbarBottom from '/@/layouts/NavbarBottom/index.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    Navbar,
    NavbarBottom,
  },
  setup() {
    const route = useRoute()

    const key = route.name

    return {
      key,
    }
  },
}
</script>

<style lang="scss">
.main {
  margin-top: 108px;
}
</style>
