<template>
  <div class="home" :style="`background-image:url(${$withBase('/img/home/1.jpg')});`">
    <div class="content">
      <!-- <div class="avatar">
        <img :src="$withBase('/img/avatar/avatar.png')" />
      </div>-->
      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <img class="front" :src="$withBase('/img/avatar/avatar_front.jpg')" />
          <img class="back" :src="$withBase('/img/avatar/avatar_back.jpg')" />
        </div>
      </div>
      <h1 class="title">小冰啦</h1>
      <div class="hr"></div>
      <div class="navigation-wrapper">
        <div class="navigation">
          <div>
            <a class="blog-button" href="/">首页</a>
          </div>
          <div>
            <a class="blog-button" href="/links">友链</a>
          </div>
          <div>
            <a class="blog-button" href="/about">关于</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  max-width: none;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0);
  background-blend-mode: multiply;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(37, 104, 163, 0.2);
  }
}

.content {
  position: relative;
  width: 620px;
  z-index: 999;
  // * {
  //   outline: 1px solid red;
  // }

  .flip-container {
    margin: 0 auto;
    perspective: 1000;
  }
  .flip-container:hover .flipper,
  .flip-container.hover .flipper {
    transform: rotateY(180deg);
  }

  .flip-container,
  .front,
  .back {
    width: 120px;
    height: 120px;
  }

  .flipper {
    position: relative;
    transition: 0.6s;
    transform-style: preserve-3d;
  }
  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    z-index: 2;
    border: 2px solid #fff;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
  .back {
    z-index: 2;
    border: 2px solid #fff;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    transform: rotateY(180deg);
  }

  .avatar {
    margin: 0 auto;
    text-align: center;
    img {
      position: relative;
      z-index: 2;
      transition: 0.6s;
      transform-style: preserve-3d;

      &:hover {
        transform: rotateY(180deg);
      }
    }
  }
  .title {
    margin: 8px 0 0;
    text-align: center;
    font-size: 40px;
    font-weight: 300;
    color: #fff;
  }
  .hr {
    margin: 20px auto;
    border-top: 1px solid hsla(0, 0%, 100%, 0.14);
    width: 50%;
  }
  .navigation-wrapper {
    .navigation {
      display: flex;
      align-items: center;
      justify-content: center;
      .blog-button {
        display: inline-block;
        margin: 0 10px;
        padding: 8px 21px;
        border: 1px solid #fff;
        border-radius: 20px;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>