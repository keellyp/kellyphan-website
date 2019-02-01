<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import '@/assets/_breakpoints.scss';
@font-face {
  font-family: 'Anderson-Grotesk';
  font-weight: 400;
  src: url('/fonts/AndersonGrotesk.otf');
}

@font-face {
  font-family: 'Anderson-Grotesk';
  font-weight: 200;
  src: url('/fonts/AndersonGrotesk-Light.otf');
}

@font-face {
  font-family: 'Anderson-Grotesk';
  font-weight: 600;
  src: url('/fonts/AndersonGrotesk-Bold.otf');
}

@font-face {
  font-family: 'Anderson-Grotesk';
  font-weight: 800;
  src: url('/fonts/AndersonGrotesk-Ultrabold.otf');
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  font-size: 1em;
  color: inherit;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

html {
  font-family: 'Anderson-Grotesk', sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-size: 1.8rem;

  @media only screen and (min-width: $l) {
    font-size: 2rem;
  }

  @media only screen and (min-width: $xl) {
    font-size: 2.4rem;
  }

  @media only screen and (max-width: $s) {
    font-size: 1.4rem;
  }

  ::selection {
    background: #0554ff;
    color: #fff;
  }
}

.wrapper {
  width: 93vw;
  margin: 0 auto;
}

.section__title {
  font-size: 2.67em;
  font-weight: 400;
  line-height: 0.83;
}

.link {
  position: relative;
  display: inline-block;

  font-weight: 800;

  &::before {
    content: '';
    position: absolute;
    bottom: 10%;
    left: 3%;
    width: 100%;
    height: 39%;

    z-index: -1;

    background-color: #0554ff;
    opacity: 0.3;

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease-in-out;
    will-change: transform;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
