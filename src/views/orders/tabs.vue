<template>
  <div class="tabs">
    <ur-tabs v-model="activeName">
      <ur-tab-pane label="滑块" name="tabs">
        <slider />
      </ur-tab-pane>
      <ur-tab-pane label="进度条" name="progress">
        <progress-demo />
      </ur-tab-pane>
      <ur-tab-pane label="其他" name="other">
          <div class="switch">
        <ur-switch class="space" v-model="value1"></ur-switch>
        <ur-switch class="space" v-model="value2" active-text="激活" inactive-text="未激活"></ur-switch>
        <ur-switch class="space" v-model="value3" disabled></ur-switch>
        <ur-switch class="space" v-model="value4" disabled></ur-switch>
          </div>
        <tooltip/>
      </ur-tab-pane>
    </ur-tabs>
  </div>
</template>

<script>
import slider from '../../components/slider.vue';
import progressDemo from '../../components/progress.vue';
import tooltip from '../../components/tooltip.vue';

export default {
  components: {
    slider,
    progressDemo,
    tooltip,
  },
  data() {
    return {
      activeName: 'tabs',
      value1: true,
      value2: true,
      value3: true,
      value4: false,
    };
  },
};
</script>

<style lang="scss">
.tabs {
  position: relative;
  top: -2rem;

  .switch {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      .space {
          margin: .5rem;
      }
  }
}
</style>