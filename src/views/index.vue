<template>
  <div class="index">
    <ur-carousel class="carousel" direction="horizontal">
      <ur-carousel-item v-for="item in items" :key="item.id">
        <img :src="item.imgSrc" />
      </ur-carousel-item>
    </ur-carousel>

    <div class="data_visual">
      <div class="visit">
        <span class="title">周访问量</span>
        <ur-bar-chart :data="data" :xAxis="xAxis" />
      </div>

      <div class="task">
        <span class="title">周任务进度</span>
        <ur-progress class="progress" width="200" :stroke-width="10" type="circle" color="#18634b" :percentage="percentage"></ur-progress>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';

export default {
  data() {
    return {
      xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [10, 30, 60, 80, 60, 30, 0],
      percentage: 40,
      items: [
        {
          id: 1,
          imgSrc: image1,
        },
        {
          id: 2,
          imgSrc: image2,
        },
        {
          id: 3,
          imgSrc: image3,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.index {
  .carousel {
    float: left;
    width: 55rem;
    height: 40rem;
  }
  .data_visual {
    position: relative;
    width: 30rem;
    float: right;
    .visit {
      flex: 1;
      margin-top: 3rem;
      position: relative;
      text-align: center;

      .title {
        position: absolute;
        top: -3rem;
        left: 0;
        right: 0;
        font-size: 1.5rem;
      }
    }
    .task {
      margin: 7rem auto 0;
      position: relative;
      width: 200px;

      .title {
        position: absolute;
        top: -3rem;
        left: 0;
        right: 0;
        font-size: 1.5rem;
        text-align: center;
      }
    }
  }
}
</style>
