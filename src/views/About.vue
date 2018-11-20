<script>
// @ is an alias to /src
// import { TimelineMax } from 'gsap';
import BackgroundPattern from '@/components/BackgroundPattern.vue';
import AppButton from '@/components/AppButton.vue';
import Scanner from '@/components/Scanner.vue';

export default {
  name: 'About',
  components: {
    BackgroundPattern,
    AppButton,
    Scanner,
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  },
};
</script>
<template>
  <div class="about">
    <!-- <background-pattern>
    </background-pattern> -->
    <h1>This is an about page</h1>
    <app-button>boton 1</app-button>
    <app-button>boton 1</app-button>
    <app-button>boton 1</app-button>
    <app-button>boton 1</app-button>
    <scanner></scanner>
  </div>
</template>
