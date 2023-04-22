import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

import { type UserModule } from "~/types";

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ isClient, initialState, app }) => {
  app.component("Splide", Splide);
  app.component("SplideSlide", SplideSlide);
  app.component("SplideTrack", SplideTrack);
};
