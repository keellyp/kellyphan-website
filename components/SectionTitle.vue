<template>
  <header class="sectionTitle">
    <div class="sectionTitle__title">
      <h1 class="sectionTitle__titleText">{{datas.mainTitle}}</h1>
    </div>
    <div class="sectionTitle__baseline">
      <h2 class="sectionTitle__baselineText">{{datas.title}}</h2>
    </div>
  </header>
</template>

<script>
export default {
  props:['datas']
}
</script>


<style lang='scss'>
@import '@/assets/_breakpoints.scss';

.sectionTitle {
  user-select: none;
}

.sectionTitle__title {
  margin-top: 6.8vh;
}

.sectionTitle__titleText {
  font-size: 1em;
  font-weight: 600;
}

.sectionTitle__baseline {
  margin-top: calc(100vw * 0.25);

  @media only screen and (max-width: $s) {
    margin-top: calc(100vh * 0.25);
  }
}

.sectionTitle__baselineText {
  font-size: 6.28em;
  font-weight: 600;
  line-height: 0.9;

  @media only screen and (max-width: $s) {
    font-size: 6em;
  }
}
</style>
