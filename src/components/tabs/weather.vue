<template>
  <div>
    <iframe
      id="weather"
      src="https://apip.weatherdt.com/h5.html?id=WA4qyG3njy"
      frameborder="0"
      width="100%"
    ></iframe>
  </div>
</template>

<script>
export default {
  mounted() {
    var weather = document.querySelector("#weather");
    var main = document.querySelector("main");
    weather.style.height = main.clientHeight + "px";
  }
};
</script>