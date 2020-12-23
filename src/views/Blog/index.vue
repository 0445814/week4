<template>
  <nav class="d-none d-md-block navbar-blog navbar navbar-light bg-danger">
    <div class="container">
      <div class="row g-0 w-100">
        <div class="col-16">
          <ul class="d-flex list-unstyled mb-0">
            <li>
              <router-link class="text-white me-5" to="/">最新消息</router-link>
            </li>
            <li>
              <router-link class="text-white me-5" to="/">特別企劃</router-link>
            </li>
            <li>
              <router-link class="text-white me-5" to="/">新品上市</router-link>
            </li>
            <li>
              <router-link class="text-white" to="/">鏡框小知識</router-link>
            </li>
          </ul>
        </div>

        <div class="col">
          <div class="text-end overflow-hidden">
            <a
              class="position-relative d-inline-block"
              href="#"
              @focus="isSearchActive = true"
              @blur="isSearchActive = false"
            >
              <img
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/13f2e6e6b718b6abafb62ce7a672d42fc39eaeae/week3/icon-search.svg"
                alt=""
              />
              <input
                type="text"
                class="search-input form-control"
                :class="isSearchActive ? 'search-input--active' : null"
                @focus="isSearchActive = true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>


  <router-view />
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      isSearchActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-blog {
  position: fixed;
  top: 119px;
  left: 0;
  right: 0;
}
.search-input {
  position: absolute;
  width: 200px;
  right: 0;
  top: 55%;
  transition: all 0.5s;
  transform: translate(100%, -50%);
  opacity: 0;

  &--active {
    transition: all 0.5s;
    transform: translate(-20%, -50%);
    opacity: 1;
  }
}
</style>
