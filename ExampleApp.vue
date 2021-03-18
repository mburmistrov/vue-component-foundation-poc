<template>
  <div>
    <VLightsaber :disabled="isDisabled" />
  </div>
</template>

<script>
import VLightsaber from './components/weapons/VLightsaber.vue';

export default {
  components: {
    VLightsaber,
  },
  data() {
    return {
      lightsaberDisabled: false,
    };
  },
  mounted() {
    setInterval(() => {
      this.lightsaberDisabled = !this.lightsaberDisabled;
    }, 1500);
  },
};
</script>
