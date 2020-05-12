<template>
  <div class="work">
    <div>
      <h4 class="work__title">
        <a :href="where" :alt="what" class="link" target="_blank">
          {{ what }}
        </a>
      </h4>
      <span class="work__info">{{ how }}</span>
    </div>
    <p class="work__date">
      <span class="time">{{ time }}</span>
      {{ when }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["what", "how", "when", "where", "time"]
};
</script>

<style lang="scss">
@import "@/assets/_breakpoints.scss";

.work {
  display: grid;
  grid-template-columns: auto 200px;

  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid black;

  @media only screen and (max-width: $s) {
    grid-template-columns: auto 20%;
    padding-top: initial;
  }
}

.work__title {
  font-size: 2.78em;

  margin-top: 2rem;

  a {
    font-weight: 200;
  }
}

.work__info {
  font-size: 1.39em;
  font-weight: 200;
}

.work__date {
  position: relative;
  justify-self: right;
  align-self: end;

  font-size: 2.78em;
  font-weight: 200;

  .time {
    position: absolute;
    bottom: 100%;
    right: 0;
    font-size: 0.5em;
  }
}
</style>
