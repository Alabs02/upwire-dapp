<template>
  <div class="project-card shadow-sm col-span-3">
    <div class="project-card__media position-relative">
      <img
        v-lazy-src="'https://images.unsplash.com/photo-1524096274206-cb088c99dbcd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=david-clode-zE99_-6MdYM-unsplash.jpg&w=1920'"
        alt="poster"
      />

      <div class="slider">
        <vue-round-slider
          v-model="sliderValue"
          :min="0"
          :max="100"
          :animation="true"
          :showTooltip="true"
          circleShaep="full"
          pathColor="#eee"
          rangeColor="#ccc"
        />
      </div>
    </div>
    <div class="project-card__actions pex-20 d-grid place-items-center">
      <div class="w-full">
        <h6 class="m-0 fw-bolder heading meb-5">Dewdrop - Final Shot.mov</h6>
        <div class="d-flex align-items-between">
          <p class="m-0 subheading mer-5">John Snow</p>
          <p class="m-0 subheading">Nov 25, 3:30pm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { VueRoundSluder } from "@/packages";

  @Component({
    components: {
      VueRoundSluder
    }
  })
  export default class  extends Vue {
    sliderValue = 60;
  }
</script>

<style scoped lang="scss">
  .project-card {
    width: 100%;
    height: toRem(280);
    background: $brand-dark-lighter;
    border-radius: toRem(15);
    overflow: hidden;

    &__media {
      width: 100%;
      height: 70%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__actions {
      width: 100%;
      height: 30%;

      .heading {
        font-size: toRem(17);
        text-justify: justify;
      }

      .subheading {
        font-size: toRem(15);
        font-weight: 400;
        text-justify: justify;
      }
    }
  }

  .slider {
    border : 2px solid purple;
    width: toRem(30);
    height: toRem(30);

    position: absolute;
  }
</style>