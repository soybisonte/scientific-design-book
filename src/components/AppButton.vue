<script>
import { TweenMax, Power3 } from 'gsap';

export default {
  name: 'AppButton',
  props: {
  },
  methods: {
    mouseOver() {
      const { border, flash } = this.$refs;
      const parent = border.parentElement;
      TweenMax.to(border, 0.3, {
        y: parent.offsetHeight,
        height: '20px',
        ease: Power3.easeout,
        overwrite: 'all',
      });
      TweenMax.to(flash, 0.05, {
        autoAlpha: 0.6,
        ease: Power3.easeout,
        onComplete: () => {
          TweenMax.to(flash, 0.05, {
            autoAlpha: 0,
            ease: Power3.easeout,
          });
        },
      });
    },
    mouseLeave() {
      const { border } = this.$refs;
      TweenMax.to(border, 0.3, {
        y: 0,
        height: '3px',
        ease: Power3.easeout,
        overwrite: 'all',
      });
    },
  },
};
</script>
<template>
  <button
    type="button"
    class="AppButton"
    @mouseenter="mouseOver"
    @mouseleave="mouseLeave">
    <div
      class="AppButton--flash"
      ref="flash"/>
    <div
      class="AppButton--border"
      ref="border"/>
    <slot/>
  </button>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/components/AppButton.styl" scoped lang="stylus"></style>
