import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    "theme": "auto",
    "type": "default",
    "autoClose": 1000,
    "hideProgressBar": true,
    "transition": "slide",
    "dangerouslyHTMLString": true,
    "multiple":false,
  });

  return {
    provide: {
      toast
    }
  };
});
