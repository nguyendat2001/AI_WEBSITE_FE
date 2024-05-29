<template>
<navigation></navigation>
<silder></silder>

<index></index>

</template>
<script>
import navigation from "./components/navigation.vue";
import silder from "./components/silder.vue";
import index from "./index.vue";
export default {
  components: {
    silder,
    navigation,
    index,
  },
  data() {
    return {};
  },

  watch: {},
  computed: {},
  methods: {},
  mounted() {
    const scripts = [
      
      "/assets/vendor/apexcharts/apexcharts.min.js",

      "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "/assets/vendor/chart.js/chart.umd.js",
      "/assets/vendor/echarts/echarts.min.js",
      "/assets/vendor/quill/quill.js",
      "/assets/vendor/simple-datatables/simple-datatables.js",
      "/assets/vendor/tinymce/tinymce.min.js",
      "/assets/vendor/php-email-form/validate.js",
      "/assets/js/main.js",      
    ];
    scripts.forEach((script) => {
      let tag = document.head.querySelector(`[src="${script}"`);
      if (!tag) {
        tag = document.createElement("script");
        tag.setAttribute("src", script);
        tag.setAttribute("type", "text/javascript");
        document.head.appendChild(tag);
      }
    });
  },
};
</script>
<style>
@import url(https://fonts.gstatic.com);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i);
@import "@/assets/vendor/bootstrap/css/bootstrap.min.css";
@import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css";
@import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css";
@import "@/assets/vendor/quill/quill.snow.css";
@import "@/assets/vendor/quill/quill.bubble.css";
@import "@/assets/vendor/remixicon/remixicon.css";
@import "@/assets/vendor/simple-datatables/style.css";
@import "@/assets/css/style.css";

</style>