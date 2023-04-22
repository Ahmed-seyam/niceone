import { type UserModule } from "~/types";
import PrimeVue from "primevue/config";

import FocusTrap from "primevue/focustrap";

import ToastService from "primevue/toastservice";

import Button from "primevue/button";
import Menu from "primevue/Menu";
import Avatar from "primevue/Avatar";
import Toast from "primevue/Toast";
import Image from "primevue/Image";
import SplitButton from "primevue/SplitButton";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional
import Sidebar from "primevue/Sidebar"; // optional
import Ripple from "primevue/ripple";
import InputText from "primevue/InputText";
import Rating from "primevue/Rating";
import SelectButton from "primevue/SelectButton";
import TabPanel from "primevue/TabPanel";
import TabView from "primevue/TabView";
import Message from "primevue/Message";
import Tag from "primevue/Tag";
import Password from "primevue/Password";
import Checkbox from "primevue/Checkbox";
import Divider from "primevue/Divider";
import Inplace from "primevue/Inplace";
import InputMask from "primevue/InputMask";

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ isClient, router, app }) => {
  app.use(PrimeVue, { ripple: true });

  app.use(ToastService);

  app
    .component("Button", Button)
    .component("Menu", Menu)
    .component("Avatar", Avatar)
    .component("Image", Image)
    .component("SplitButton", SplitButton)
    .component("DataTable", DataTable)
    .component("Column", Column)
    .component("ColumnGroup", ColumnGroup)
    .component("Row", Row)
    .component("Sidebar", Sidebar)
    .component("InputText", InputText)
    .component("Toast", Toast)
    .component("SelectButton", SelectButton)
    .component("TabPanel", TabPanel)
    .component("TabView", TabView)
    .component("Message", Message)
    .component("Tag", Tag)
    .component("Password", Password)
    .component("Checkbox", Checkbox)
    .component("Divider", Divider)
    .component("Inplace", Inplace)
    .component("InputMask", InputMask)
    .component("Rating", Rating);

  app.directive("ripple", Ripple);
  app.directive("focustrap", FocusTrap);
};
