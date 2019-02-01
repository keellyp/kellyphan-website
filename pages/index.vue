<template>
  <div>
    <div class="wrapper">
      <SectionTitle :datas="title" />
      <SectionWorks :datas="works" />
      <SectionAbout :datas="about" />
    </div>
    <SectionFooter :datas="footer" />
  </div>
</template>

<script>
import * as datas from '~/assets/datas.json';

import SectionTitle from '~/components/SectionTitle.vue';
import SectionWorks from '~/components/SectionWorks.vue';
import SectionAbout from '~/components/SectionAbout.vue';
import SectionFooter from '~/components/SectionFooter.vue';

export default {
  components: {
    SectionTitle,
    SectionWorks,
    SectionAbout,
    SectionFooter,
  },
  data: function() {
    return {
      title: datas.sectionTitle,
      works: datas.sectionWorks,
      about: datas.sectionAbout,
      footer: datas.sectionFooter,
    };
  },
};
</script>
