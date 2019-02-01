<template>
    <section class="about">
      <h3 class="about__title section__title">{{ datas.mainTitle }}</h3>
      <div class="about__content">
        <div>
          <div class="content__me">
            <h4 class="content__title">{{ datas.infos.title }}</h4>
            <div class="content__text" v-html="datas.infos.content"></div>
          </div>
          <div class="content__socials">
            <h4 class="content__title">{{ datas.contact.title }}</h4>
            <ul class="content__list">
              <li>
                <a target="_blank" class="link" :href="socials.tw.src" :alt="socials.tw.alt">Twitter</a> is my favorite social media.
              </li>
              <li>
                I use <a target="_blank" class="link" :href="socials.git.src" :alt="socials.git.alt">Github</a> for their green squares.
              </li>
              <li>
                I'd be happy to connect on <a target="_blank" class="link" :href="socials.lkn.src" :alt="socials.lkn.alt">Linkedin</a>.
              </li>
              <li>
                My email is : <input class="link" v-on:click='copyText($event)' type="text" readonly v-model="socials.mail.src" /><span v-if="!copied">(click to copy)</span><span v-else>(copied!)</span>
              </li>
              <li>
                Download my <a target="_blank" class="link" :href="socials.res.src" :alt="socials.res.alt">resume</a> here.
              </li>
              <li>
                Some nice code available on <a target="_blank" class="link" :href="socials.pen.src" :alt="socials.pen.alt">Codepen</a> & <a target="_blank" class="link" :href="socials.glitch.src" :alt="socials.glitch.alt">Glitch</a>.
              </li>
            </ul>
          </div>
        </div>
        <div class="about__pic">
          <img src="img/kellyphan.jpeg" alt="Kelly Phan profile picture" />
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: ['datas'],
  data() {
    return {
      socials: this.datas.contact.socials,
      copied: false,
    };
  },
  methods: {
    copyText(event) {
      let element = event.target;

      if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        const editable = element.contentEditable;
        const { readOnly } = element.readOnly;
        element.contentEditable = true;
        element.readOnly = true;
        const range = document.createRange();
        range.selectNodeContents(element);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        element.setSelectionRange(0, 999999);
        element.contentEditable = editable;
        element.readOnly = readOnly;
      } else {
        element.select();
      }
      document.execCommand('Copy');
      this.copied = !this.copied;
      setTimeout(() => {
        this.copied = !this.copied;
      }, 1000);
    },
  }
};
</script>

<style lang="scss">
@import '@/assets/_breakpoints.scss';

.about {
  display: flex;
  flex-direction: row;

  margin-top: 27vh;
  margin-bottom: 19vh;

  @media only screen and (max-width: $s) {
    flex-direction: column;
  }
}

.about__title {
  flex: 1;

  margin-right: 2rem;
}

.about__content {
  flex: 4;
  display: grid;
  grid-template-columns: auto 40%;
  grid-gap: 14%;

  margin-top: 5.34em;

  @media only screen and (max-width: $s) {
    grid-template-columns: 1fr;
    margin-top: 3em;
  }
}

.about__pic {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: $s) {
    display: none;
  }
}

.content__me,
.content__socials {
  border-top: 1px solid black;
}

.content__title {
  font-size: 2em;
  font-weight: 200;

  margin: 0.4em 0;
}

.content__text {
  font-size: 1em;
  font-weight: 400;
  line-height: 1.618;

  margin-top: 1em;

  p {
    margin-bottom: 1em;
  }
}

.content__socials {
  margin-top: 8rem;
}

.content__list {
  li {
    margin-bottom: 0.4em;

    input {
      width: 11.5em;
      cursor: context-menu;
      font-size: 0.9em;

      border: none;

      &:active,
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
