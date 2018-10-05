<template>
  <div class="logo">
    <span class="logo-blue">Type</span>
    <span class="logo-white">N</span>
    <span class="logo-red">Speak</span>
  </div>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style scoped lang="scss">
// color palette
$color1: #d75c37;
$color2: #67727a;
$color3: #6991ac;
$color4: #c3d7df;
$color5: #f5f5f5;
$color6: darken($color2, 30);

// style
.logo {
  margin: 0 auto;
  font-size: 3rem;
  font-weight: 900;
  height: 120px;
  width: 150px;
  span {
    display: block;
    &.logo-blue {
      color: $color3;
    }
    &.logo-white {
      color: $color5;
      line-height: 0;
    }
    &.logo-red {
      color: $color1;
      line-height: 0.75;
    }
  }
}
</style>