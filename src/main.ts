import { ViteSSG } from "vite-ssg";
import { setupLayouts } from "virtual:generated-layouts";
import Previewer from "virtual:vue-component-preview";
import App from "./App.vue";
import type { UserModule } from "./types";
import generatedRoutes from "~pages";

import "@unocss/reset/tailwind.css";
import "./styles/main.scss";
import "uno.css";

//theme
import "primevue/resources/themes/lara-light-blue/theme.css";

//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";

import "@splidejs/vue-splide/css";

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(
      import.meta.glob<{ install: UserModule }>("./modules/*.ts", {
        eager: true,
      })
    ).forEach((i) => i.install?.(ctx));
    ctx.app.use(Previewer);
  }
);
