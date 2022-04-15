<template>
  <div class="home" :style="`background-image:url(${$withBase('/img/home/1.jpg')});`">
    <h1>首页啦首页，周末有空写一下</h1>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
  padding: 0;
  margin: 0;
  max-width: none;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
</style>