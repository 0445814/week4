<template>
  <!-- banner -->
  <section class="banner bg-base">
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col">
          <h2 class="h3 text-end text-danger w-100">
            Promise-Desert 2020 早春系列
          </h2>
          <h2 class="h1 text-end text-danger fw-bold w-100">
            看得清，才能看得遠
          </h2>
        </div>
      </div>
    </div>
  </section>

  <!-- Intro -->
  <section class="section-container bg-danger-3">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2
            class="section-title h2 text-center text-danger fw-bold mb-4 mb-md-5"
          >
            用專業的心，做專業的事
          </h2>
        </div>
      </div>

      <div class="row justify-content-center gx-5">
        <div
          class="col-md-12 col-lg-5"
          v-for="item in introList"
          :key="item.id"
        >
          <div
            class="d-flex justify-content-center align-items-center mb-5"
            style="min-height: 100px"
          >
            <img class="img-fluid" :src="item.imgUrl" alt="" />
          </div>
          <h2 class="h4 text-center fw-bold text-danger">{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- classic products -->
  <section class="section-container">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2
            class="section-title h2 text-center text-danger fw-bold mb-4 mb-md-5"
          >
            經典系列鏡框
          </h2>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-md-14 col-lg-12">
          <div
            class="classic-bg bg-base d-flex justify-content-center align-items-center"
            style="
              background-image: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-1.png');
            "
          >
            <h3 class="m-0">
              <a
                href="#"
                class="classic-slogan d-md-none fw-bold fst-italic text-white"
              >
                <img
                  class="img-fluid"
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-diamond-white.svg"
                  alt=""
                />
                OPTICAL</a
              >
            </h3>
          </div>
        </div>
        <div class="col-md-10 col-lg-12 d-none d-md-block">
          <div class="d-flex align-items-center h-100">
            <img
              class="img-fluid"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-diamond.svg"
              alt=""
            />

            <h3 class="m-0"></h3>

            <a href="#" class="classic-slogan fw-bold fst-italic text-danger-2"
              >OPTICAL</a
            >
          </div>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-md-14 col-lg-12 order-lg-2">
          <div
            class="classic-bg bg-base d-flex justify-content-center align-items-center"
            style="
              background-image: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-2.png');
            "
          >
            <h3 class="m-0">
              <a
                href="#"
                class="classic-slogan d-md-none fw-bold fst-italic text-white"
              >
                <img
                  class="img-fluid"
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-sun-white.svg"
                  alt=""
                />
                sunglasses</a
              >
            </h3>
          </div>
        </div>
        <div class="col-md-10 col-lg-12 d-none d-md-block">
          <div class="d-flex justify-content-lg-end align-items-center h-100">
            <img
              class="img-fluid"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-sun.svg"
              alt=""
            />
            <h3 class="m-0">
              <a
                href="#"
                class="classic-slogan fw-bold fst-italic text-danger-2"
              >
                sunglasses</a
              >
            </h3>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-14 col-lg-12">
          <div
            class="classic-bg bg-base d-flex justify-content-center align-items-center"
            style="
              background-image: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-3.png');
            "
          >
            <h3 class="m-0">
              <a
                href="#"
                class="classic-slogan d-md-none fw-bold fst-italic text-white"
              >
                <img
                  class="img-fluid"
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-thunder-white.svg"
                  alt=""
                />
                FUNCTIONAL</a
              >
            </h3>
          </div>
        </div>
        <div class="col-md-10 col-lg-12 d-none d-md-block">
          <div class="d-flex align-items-center h-100">
            <img
              class="img-fluid"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-thunder.svg"
              alt=""
            />
            <h3 class="m-0">
              <a
                href="#"
                class="classic-slogan fw-bold fst-italic text-danger-2"
              >
                FUNCTIONAL</a
              >
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- co-design products -->
  <section class="co section-container bg-base">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2
            class="section-title h2 text-center text-white fw-bold mb-4 mb-md-5"
          >
            聯名設計鏡框
          </h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 mb-3 mb-md-0">
          <a
            href="#"
            class="co-bg bg-base"
            style="
              background-image: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-8.png');
            "
          >
            <h3 class="co-slogan text-danger-2">Double A+</h3>
          </a>
        </div>
        <div class="col-md-12">
          <a
            href="#"
            class="co-bg bg-base"
            style="
              background-image: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-9.png');
            "
          >
            <h3 class="co-slogan text-danger-2">YOUTH</h3>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- recommend -->
  <section class="section-container bg-base">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2
            class="section-title h2 text-center text-danger fw-bold mb-4 mb-md-5"
          >
            顧客推薦
          </h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-md-12 col-lg-5 mb-4"
          v-for="item in recommendList"
          :key="item.imgUrl"
        >
          <!-- recommend card -->
          <router-link to="/" class="card">
            <img :src="item.imgUrl" class="img-fluid" :alt="item.title" />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                {{ item.content }}
              </p>
              <p class="fs-sm text-secondary mb-0">{{ item.updated }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- contact -->
  <section class="section-container bg-danger-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-14">
          <div class="contact">
            <h2 class="section-title h2 text-center fw-bold mb-4 mb-md-5">
              聯絡我們
            </h2>
            <p>
              我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
            </p>
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">姓名</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="陳小明"
                />
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">聯絡電話</label>
                <input
                  type="tel"
                  class="form-control"
                  id="tel"
                  placeholder="0912345678"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">電子郵件</label>
                <input
                  type="email"
                  class="form-control"
                  id="tel"
                  placeholder="example@email.com"
                />
              </div>
              <div class="mb-3">
                <label for="suggest" class="form-label">意見反應</label>
                <textarea
                  class="form-control"
                  placeholder="請輸入您的意見"
                  id="suggest"
                ></textarea>
              </div>
              <div class="mb-5 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</label
                >
              </div>
              <div class="text-center">
                <button type="submit" class="contact-submit btn btn-danger-2">
                  確認送出
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
// intro
import { getIntroList } from '/@/hooks/useIntro'
// recommend
import { getRecommendList } from '/@/hooks/useRecommend'
export default {
  setup() {
    const introList = ref(getIntroList())
    const recommendList = ref(getRecommendList())

    return {
      introList,
      recommendList,
    }
  },
}
</script>

<style lang="scss" scoped>
// banner
.banner {
  height: 840px;
  background-image: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/banner.png');
  @include media-md {
    margin-top: 119px;
  }
  @include media-md-down {
    height: 394px;
    margin-top: 146px;
  }
}
// classic products
.classic-bg {
  height: 320px;
  @include media-md {
    height: 168px;
  }
}

.classic-slogan {
  font-size: 48px;
  @include media-md {
    font-size: 28px;
  }
}

// co-design product
.co {
  background-image: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/bg.png');
}

.co-bg {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 472px;

  &:hover {
    &::after {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
  @include media-md {
    height: 280px;
  }
}

.co-slogan {
  z-index: 2;
  font-size: 72px;
  font-weight: bold;
  @include media-md {
    font-size: 32px;
  }
}

.contact {
  margin: 0 auto;
  max-width: 730px;
  @include media-md {
    max-width: 450px;
  }
}

.contact-submit {
  border-radius: 0;
  width: 350px;
  padding: 15px 0px;
  @include media-md {
    width: 210px;
  }
  @include media-md-down {
    width: 165px;
  }
}

.card {
  transition: all 0.25s;
  &:hover {
    transition: all 0.25s;
    transform: translateY(-10px);
  }
}
</style>
