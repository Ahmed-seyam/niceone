<!-- <template>
  <Carousel
    class="splide-carousel__container"
    :options="{
      autoWidth: true,
      pagination: false,
    }"
    :has-track="false"
  >
    <SplideTrack class="splide-carousel__track">
      <Slide
        v-for="category in categories"
        :key="category.title"
        class="splide-carousel__slide"
        @mousedown="drag = false"
        @mousemove="drag = true"
        @mouseup="drag ? (drag = false) : navigate($event, category.title)"
      >
        <CategoryCard :category="category" />
      </Slide>
    </SplideTrack>

    <div i="material-symbols:add-home" />
    <div class="splide__arrows splide-carousel__arrows">
      <button
        class="splide__arrow splide-carousel__arrow splide__arrow--prev splide-carousel__arrow--prev"
      >
        <svg>
          <use xlink:href="/images/sprite.svg#icon-chevron-left" />
        </svg>
      </button>
      <button
        class="splide__arrow splide-carousel__arrow splide__arrow--next splide-carousel__arrow--next"
      >
        <svg>
          <use xlink:href="/images/sprite.svg#icon-chevron-right" />
        </svg>
      </button>
    </div>
  </Carousel>
</template> -->

<template></template>
