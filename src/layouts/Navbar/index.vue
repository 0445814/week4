<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-danger-2 p-0">
    <div
      class="navbar-content d-flex justify-content-center justify-content-md-between align-items-center w-100"
    >
      <h1 class="h6 m-0">
        <router-link class="logo-link" to="/">
          <!-- <img
            class="logo"
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png"
            alt="logo"
          /> -->
          眼鏡電商
        </router-link>
      </h1>
      <ul class="d-none d-md-flex nav justify-content-end">
        <li class="nav-item">
          <router-link class="text-white hvr-grow px-md-4" to="/"
            >系列鏡框</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="text-white hvr-grow px-md-4" to="/"
            >門市據點</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="text-white hvr-grow px-md-4" to="/blog" exact
            >部落格</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="text-white hvr-grow px-md-4" to="/"
            >常見問題</router-link
          >
        </li>
      </ul>
    </div>

    <div class="d-flex d-md-none flex-wrap w-100 bg-danger-2">
      <router-link
        class="d-block text-center text-white border w-50 py-2"
        to="/"
        >系列鏡框</router-link
      >
      <router-link
        class="d-block text-center text-white border w-50 py-2"
        to="/"
        >門市據點</router-link
      >
      <router-link
        class="d-block text-center text-white border w-50 py-2"
        to="/blog"
        >部落格</router-link
      >
      <router-link
        class="d-block text-center text-white border w-50 py-2"
        to="/"
        >常見問題</router-link
      >
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-content {
  padding: 30px 88px;
  @include media-md {
    padding: 30px 39px;
  }
  @include media-md-down {
    padding: 10px;
  }
}

.logo-link {
  display: block;
  background: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png')
    no-repeat;
  width: 80px;
  height: 48px;
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}

.logo {
  @include media-md-down {
    width: 48px;
  }
}
</style>
