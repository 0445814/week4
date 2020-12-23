<template>
  <section class="blog container">
    <div class="row mb-3 mb-md-5" v-for="item in blogList" :key="item.id">
      <div class="col-md-12 col-lg-13 mb-3 mb-md-0">
        <img class="w-100" :src="item.imgUrl" alt="" />
      </div>
      <div class="col-md-12 col-lg-11">
        <div class="d-flex flex-column justify-content-between h-100">
          <div>
            <router-link :to="'/blog/' + item.id">
              <h2 class="blog-item-title text-danger fw-bold mb-0">
                {{ item.title }}
              </h2>
            </router-link>

            <div
              class="blog-item-subtitle d-flex justify-content-between mb-2 mb-lg-4"
            >
              <span class="mb-0">2020 Valentine’s Special</span>
              <span class="text-secondary">2020/02/14</span>
            </div>
            <p
              class="blog-item-content d-none d-md-block text-secondary lh-base mb-0"
            >
              {{ item.content }}
              <router-link
                class="d-lg-none text-secondary"
                :to="'/blog/' + item.id"
                >more</router-link
              >
            </p>
          </div>
          <router-link
            class="d-none d-lg-block h3 text-end text-danger fw-bold mb-0"
            :to="'/blog/' + item.id"
            >MORE</router-link
          >
        </div>
      </div>
    </div>

    <nav class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item"><a class="page-link text-dark" href="#">上一頁</a></li>
        <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
        <li class="page-item"><a class="page-link text-white bg-dark" href="#">2</a></li>
        <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
        <li class="page-item"><a class="page-link text-dark" href="#">下一頁</a></li>
      </ul>
    </nav>
  </section>
</template>

<script>
import { ref } from 'vue'
import { getBlogList } from '/@/hooks/useBlog'
export default {
  name: 'BlogList',

  setup() {
    const blogList = ref(getBlogList())

    return {
      blogList,
    }
  },
}
</script>

<style lang="scss" scoped>
.blog {
  margin-top: 244px;
  margin-bottom: 156px;
  @include media-md {
    margin-top: 204px;
  }
  @include media-md-down {
    margin-top: 174px;
  }
}

.blog-img {
  width: 635px;
  @include media-md {
    width: 330px;
  }
}

.blog-item-title {
  font-size: 32px;
  @include media-md {
    font-size: 20px;
  }
}

.blog-item-subtitle {
  font-size: 20px;
  @include media-md {
    font-size: 1rem;
  }
}

.blog-item-content {
  font-size: 20px;
  @include media-md {
    font-size: 14px;
  }
}
</style>
