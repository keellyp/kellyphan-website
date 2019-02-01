<template>
  <footer class="footer">
    <div class="footer__container">
      <template v-for="(text, index) in datas" >
        <span class="footer__text" :key='index'>{{ text }}</span>
      </template>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['datas']
};
</script>


<style lang="scss">
.footer {
  overflow: hidden;
  background-color: #0554ff;
  color: #fff;
  margin-top: 2em;
}

.footer__container {
  min-width: 200em;

  animation: translatingAnimation 30s linear 0s infinite forwards;
  will-change: transform;
}

.footer__text {
  font-size: 2em;
  font-weight: 600;

  margin-right: 10rem;
}

@keyframes translatingAnimation {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-260vw);
  }
}
</style>
