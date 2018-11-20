<script>
// @ is an alias to /src
// import { TimelineMax } from 'gsap';
import HelloWorld from '@/components/HelloWorld.vue';
import BackgroundPattern from '@/components/BackgroundPattern.vue';
import AppButton from '@/components/AppButton.vue';
import { VueTyper } from 'vue-typer';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BackgroundPattern,
    AppButton,
    VueTyper,
  },
  data() {
    return {
      copys: `We are HH.218912 people. We implant a microproccessor in a human project called Bisonte when the process complete,
      we'll notify to all humans in the world. Stay connect... `,
      ipData: {},
    };
  },
  created() {
    this.getIp();
  },
  methods: {
    async getIp() {
      this.ipData = await axios.get('https://jsonip.com/').then(response => response.data);
    },
  },
};
</script>
<template>
  <div class="Home">
    <background-pattern/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="Home--content">
      <h4>
        <vue-typer
          text="10.0.0.1"
          :repeat='0'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :erase-on-complete='false'
        />
      </h4>
      <h3 class="console--title">
        <vue-typer
          text="Unknown Entity Detected"
          :repeat='0'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :erase-on-complete='false'
        />
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
        />
      </p>

      <div
        class="console--loader"
        ref="loadingBar"/>
      <div class="console--links">
        <a
          href="https://www.instagram.com/soybisonte/"
          target="_blank"><vue-typer
            text="@soybisonte"
            :repeat='0'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='20000'
            :type-delay='70'
            :erase-on-complete='false'
        /></a>
      </div>
      <app-button>
        boton 2
      </app-button>
    </div>
  </div>
</template>
<style src="../styles/views/Home.styl" lang="stylus"></style>
