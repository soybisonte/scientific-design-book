<script>
// @ is an alias to /src
// import { TimelineMax } from 'gsap';
import HelloWorld from '@/components/HelloWorld.vue';
import BackgroundPattern from '@/components/BackgroundPattern.vue';
import { VueTyper } from 'vue-typer';

export default {
  name: 'home',
  components: {
    HelloWorld,
    BackgroundPattern,
    VueTyper,
  },
  data() {
    return {
      copys:
        `We are HH.218912 people, you don't know who we are, but you'll do. We implant a microproccessor in a human project called Bisonte when the process complete, we'll notify to all humans in the world. Stay connect... `,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<template>
  <div class="Home">
    <background-pattern></background-pattern>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="Home--content">
      <h3 class="console--title">
        <vue-typer
        text="Unknown Entity Detected"
        :repeat='0'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :erase-on-complete='false'
        >
        </vue-typer>
      </h3>

        <p class="console--mainmessage">
          <vue-typer
          :text="copys"
          :repeat='0'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='2000'
          :type-delay='70'
          :erase-on-complete='false'
          caret-animation='phase'
        ></vue-typer>
      </p>

      <div class="console--loader" ref="loadingBar">
      </div>
      <div class="console--links">
        <a href="https://www.instagram.com/soybisonte/" target="_blank"><vue-typer
        text="@soybisonte"
        :repeat='0'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='20000'
        :type-delay='70'
        :erase-on-complete='false'
      ></vue-typer></a>
      </div>
    </div>
  </div>
</template>
<style src="../styles/views/Home.styl" lang="stylus"></style>
