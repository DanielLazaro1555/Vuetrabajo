// App.vue.d.ts

// Declara que App.vue es un módulo de Vue
declare module '*.vue' {
    import { ComponentOptions } from 'vue';
    const componentOptions: ComponentOptions;
    export default componentOptions;
  }
