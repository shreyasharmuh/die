import AdidasPage from "./adidas";
import ArmaniExchangePage from "./armani-exchange";
// import NikePage from "./nike";
// import DiorPage from "./dior";
// import PumaPage from "./puma";

export const collaborationRegistry: Record<
  string,
  React.ComponentType
> = {
  "die-x-adidas-originals": AdidasPage,

  "die-x-armani-exchange": ArmaniExchangePage,

  // "die-x-nike": NikePage,
  // "die-x-dior": DiorPage,
  // "die-x-puma": PumaPage,
};