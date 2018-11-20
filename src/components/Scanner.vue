<script>
import { TweenMax, Power3 } from 'gsap';

export default {
  name: 'Scanner',
  props: {
  },
  mounted() {
    this.addMouseEvent();
  },
  methods: {
    addMouseEvent() {
      const { wrapper } = this.$refs;
      wrapper.addEventListener('mousemove', this.onMouseMove);
    },
    removeMouseEvent() {
      const { wrapper } = this.$refs;
      wrapper.removeEventListener('mousemove', this.onMouseMove);
    },
    onMouseMove(event) {
      const {
        wrapper, point, hor, ver,
      } = this.$refs;

      const position = {
        x: event.clientX - (wrapper.offsetWidth / 2),
        y: event.clientY - (wrapper.offsetHeight),
      };
      TweenMax.to(point, 0.3, {
        x: position.x - (point.offsetWidth / 2),
        y: position.y - (point.offsetWidth / 2),
        ease: Power3.easeout,
      });
      TweenMax.to(hor, 0.3, {
        y: position.y,
        ease: Power3.easeout,
      });
      TweenMax.to(ver, 0.3, {
        x: position.x,
        ease: Power3.easeout,
      });
    },
  },
  beforeDestroy() {
    this.removeMouseEvent();
  },
};
</script>
<template>
  <div class="Scanner" ref="wrapper">
    <div class="Scanner--figure">
      <img class="Scanner--image" src="https://www.fillmurray.com/300/300" alt="">
      <div class="Scanner--overlay">
      </div>
    </div>

    <div class="Scanner--hline" ref="hor">
    </div>
    <div class="Scanner--vline" ref="ver">
    </div>
    <div class="Scanner--point" ref="point">
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/components/Scanner.styl" scoped lang="stylus"></style>
