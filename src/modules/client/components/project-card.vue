<template>
  <button class="project-card shadow-sm pointer">
    <div class="project-card__media position-relative">
      <img
        v-lazy-src="project.project_poster"
        alt="poster"
      />

      <div class="level subpixel-antialiased grid place-items-center">
        70%
      </div>
    </div>
    <div class="project-card__actions pex-20 d-grid place-items-center">
      <div class="w-full grid place-items-start">
        <h6 class="m-0 fw-bolder heading meb-5">{{ project.project_name }}</h6>
        <div class="d-flex align-items-between">
          <p class="m-0 subheading mer-5">{{ project.freelancer_name }}</p>
          <p class="m-0 subheading">{{ project.timestamp }}</p>
        </div>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { VueRoundSlider } from "@/packages";

  @Component({
    components: {
      VueRoundSlider,
    },

    props: {
      project: {
        type: Object,
        default: () => {},
      }
    },
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
    transition: all 0.2s ease-in-out;

    padding: 0;
    color: $color-text;
    grid-column: span 12 / span 12;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }

    &:focus {
      background: darken($color: $brand-dark-lighter, $amount: 5);
      transform: scale(1.05);
    }

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

  .level {
    height: toRem(40);
    width: toRem(40);
    border-radius: 50%;
    overflow: hidden;

    position: absolute;
    top: toRem(20);
    right: toRem(20);
    background: rgba(0, 0, 0,  0.3);

    color: $brand-yellow;
    font-weight: 900;
    font-size: toRem(14);
  }

  @include breakpoint-up(md) {
    .project-card {
      grid-column: span 4 / span 4;
    }
  }

   @include breakpoint-up(lg) {
    .project-card {
      grid-column: span 3 / span 3;
    }
  }
</style>