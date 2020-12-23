<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-danger-2">
    <div class="container flex-wrap px-0">
      <nav
        class="d-flex justify-content-end justify-content-md-between w-100 mb-3"
      >
        <ul
          class="nav-list d-none d-md-flex align-items-center list-unstyled mb-0"
        >
          <li>
            <router-link class="nav-list-item hvr-grow" to="/">首頁</router-link>
          </li>
          <li>
            <router-link class="nav-list-item hvr-grow" to="/">系列鏡框</router-link>
          </li>
          <li>
            <router-link class="nav-list-item hvr-grow" to="/">門市據點</router-link>
          </li>
          <li>
            <router-link class="nav-list-item hvr-grow" to="/">部落格</router-link>
          </li>
          <li>
            <router-link class="nav-list-item hvr-grow" to="/">常見問題</router-link>
          </li>
        </ul>

        <div class="d-flex">
          <a href="#">
            <img
              class="navbar-bottom-img img-fluid"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/085a62fb22df4bf21c605a180648c6c6e35c2b32/week3/icon-fb.svg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              class="navbar-bottom-img img-fluid ms-3"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/085a62fb22df4bf21c605a180648c6c6e35c2b32/week3/icon-ig.svg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              class="navbar-bottom-img img-fluid ms-3"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/085a62fb22df4bf21c605a180648c6c6e35c2b32/week3/icon-line.svg"
              alt=""
            />
          </a>
        </div>
      </nav>

      <div class="d-flex align-items-center mb-3">
        <img
          class="navbar-bottom-img img-fluid me-3"
          src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/085a62fb22df4bf21c605a180648c6c6e35c2b32/week3/icon-phone.svg"
          alt=""
        />
        <a class="h3 text-white mb-0" href="tel:+0800-000-000">0800-000-000</a>
      </div>

      <div class="d-flex border-bottom pb-3 mb-3 w-100">
        <img
          class="navbar-bottom-img img-fluid me-1"
          src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/085a62fb22df4bf21c605a180648c6c6e35c2b32/week3/icon-mail.svg"
          alt=""
        />
        <a class="h3 text-white mb-0" href="mailto: glasses@business.com"
          >glasses@business.com</a
        >
      </div>

      <div
        class="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0"
      >
        <div>
          <a class="d-none d-lg-inline-block me-3" href="#">
            <img
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png"
              alt="logo"
            />
          </a>
          <span class="copyright text-white mb-3"
            >Copyright © 2020 Glasses.All rights reserved.</span
          >
        </div>

        <div class="d-none d-md-block text-end">
          <a class="text-white me-5 hvr-grow" href="#">隱私權政策</a>
          <a class="text-white hvr-grow" href="#">服務條款</a>
        </div>
      </div>

      <div class="d-md-none w-100">
        <a class="d-block text-white mb-3" href="#">隱私權政策</a>
        <div class="d-flex justify-content-between w-100">
          <a class="d-block text-white" href="#">服務條款</a>
          <a class="me-3" href="#">
            <img
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 40px;
  @include media-md-down {
    padding: 15px;
  }
}

.nav-list {
  &:last-child {
    margin-right: 0px;
  }
}
.nav-list-item {
  display: block;
  margin-right: 48px;
  color: #fff;
}

.social-list {
  &:last-child {
    margin-right: 0px;
  }
}

.navbar-bottom-img {
  @include media-md {
    width: 24px;
  }
}

.copyright {
  @include media-md-down {
    font-size: 14px;
  }
}
</style>
