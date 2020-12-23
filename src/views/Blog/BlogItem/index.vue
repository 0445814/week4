<template>
  <section class="blog-content container">
    <nav class="d-flex mb-4" style="margin-top: -25px">
      <a class="fw-bold mr-1" href="#">首頁</a> /
      <a class="fw-bold mx-1" href="#">部落格</a> /
      <a class="fw-bold mx-1" href="#">特別企劃</a> /
      <a class="text-danger-2 fw-bold mx-1" href="#">情人節特別企劃</a> /
    </nav>
    <div class="row">
      <div class="col-md-16">
        <div class="lh-base">
          <div class="blog-content-item">
            <div class="tag">
              <a class="d-inline-block h4 text-danger-2 fw-bold me-3" href="#"
                >#special</a
              >
              <a class="d-inline-block h4 text-danger-2 fw-bold" href="#"
                >#event</a
              >
            </div>
          </div>
          <img
            class="img-fluid w-100 mb-3"
            :src="`https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-${id}.png`"
            alt=""
          />

          <p class="text-secondary">
            一年一度西洋情人節即將到來， 我們推出最強「情人節企劃」，
            為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC
            聯名設計款，偶爾跟另一半來個低調情侶單品，
            結合彼此喜好、找出合適框型款式， 在這個春夏
            輕鬆搭出屬於你們的甜蜜默契！
          </p>

          <img
            class="img-fluid w-100 mb-3"
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-6.png"
            alt=""
          />
          <p class="text-secondary">
            一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
            本次拍攝的鏡框款式與 NEEDS CLASSIC
            聯名設計款，偶爾跟另一半來個低調情侶單品，
            結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
          </p>

          <img
            class="img-fluid w-100 mb-3"
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-7.png"
            alt=""
          />

          <p class="text-secondary">
            一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
            本次拍攝的鏡框款式與 NEEDS CLASSIC
            聯名設計款，偶爾跟另一半來個低調情侶單品，
            結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
          </p>

          <img
            class="img-fluid w-100 mb-3"
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-8.png"
            alt=""
          />

          <p class="text-secondary mb-5">
            2/14(五)-2/20(日) 至本店單筆消費滿2980元, 就送情人節限定眼鏡盒1個
            期間優惠還有~~持他牌鏡框更換鏡片 薄型非球面鏡片折300元
            濾藍光鏡片折500元 　 快快帶上另一半
            讓彼此每一次睜開眼，都被愛的視線包圍!
          </p>

          <div class="d-flex align-items-center border-bottom w-100 pb-3 mb-3">
            <span class="fw-bold me-3">Share</span>
            <img
              class="me-3"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/13f2e6e6b718b6abafb62ce7a672d42fc39eaeae/week4/logo-facebook.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/13f2e6e6b718b6abafb62ce7a672d42fc39eaeae/week4/logo-instagram.svg"
              alt=""
            />
          </div>

          <div class="row mb-5 mb-md-0">
            <div class="col-md-12 mb-2">
              <a href="#">
                <img
                  class="me-1"
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/13f2e6e6b718b6abafb62ce7a672d42fc39eaeae/week4/icon-undo.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                <span>上一篇：街頭潮人訪問 1</span>
              </a>
            </div>
            <div class="col-md-12">
              <div class="text-md-end">
                <a href="#">
                  <img
                    class="me-1"
                    src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/13f2e6e6b718b6abafb62ce7a672d42fc39eaeae/week4/icon-redo.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                  <span class="order-1 order-md-2">下一篇：街頭潮人訪問 2</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="d-flex align-items-center mb-2">
          <img
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/13f2e6e6b718b6abafb62ce7a672d42fc39eaeae/week4/icon-tag.svg"
            alt=""
          />
          <h3 class="text-danger-2 fw-bold mb-0">TAGS</h3>
        </div>
        <div class="d-flex flex-wrap">
          <a href="#" class="h4 text-danger-2 fw-bold me-3 me-lg-5">#special</a>
          <a href="#" class="h4 text-danger-2 fw-bold me-3 me-lg-5">#sale</a>
          <a href="#" class="h4 text-danger-2 fw-bold me-3 me-lg-5">#new_item</a>
          <a href="#" class="h4 text-danger-2 fw-bold me-3 me-lg-5">#interview</a>
          <a href="#" class="h4 text-danger-2 fw-bold me-3 me-lg-5">#trivia</a>
          <a href="#" class="h4 text-danger-2 fw-bold me-3 me-lg-5">#news</a>
          <a href="#" class="h4 text-danger-2 fw-bold me-3 me-lg-5">#event</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getBlogList, getBlogItemList } from '/@/hooks/useBlog'

export default {
  setup() {
    const route = useRoute()
    const { id } = route.params

    const blogItem = ref(getBlogList(id))
    const blogItemList = ref(getBlogItemList())

    return {
      id,
      blogItem,
      blogItemList,
    }
  },
}
</script>

<style lang="scss" scoped>
.blog-content {
  margin-top: 204px;
  margin-bottom: 300px;
  @include media-md {
    margin-bottom: 104px;
  }
}
</style>
