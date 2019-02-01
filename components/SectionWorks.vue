<template>
  <section class="works">
    <h3 class="section__title works__title">Selected works.</h3>
    <div class="works__work">
      <Work v-for="(data, index) in datas.works" :key="index" :what="data.title" :how="data.techno" :when="data.date" :where="data.link"/>
    </div>
  </section>
</template>

<script>
import Work from '~/components/Work.vue';

export default {
  components: {
    Work,
  },
  props: ['datas']
};
</script>


<style lang='scss'>
@import '@/assets/_breakpoints.scss';

.works {
  display: flex;
  flex-direction: row;

  margin-top: 27vh;

  @media only screen and (max-width: $s) {
    flex-direction: column;
  }
}

.works__title {
  flex: 1;
  margin-right: 2rem;
}

.works__work {
  flex: 4;
  margin-top: 5.34em;

  @media only screen and (max-width: $s) {
    margin-top: 3em;
  }
}
</style>
