import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";

export const theme = defineConfig({
  cssVarsPrefix: "portfolio",
  globalCss: {
    "& svg ": {
      width: "unset !important",
      height: "unset !important",
      flexShrink: "unset !important",
    },
  },

  theme: {
    tokens: {
      colors: {
        white: {
          10: { value: "#fff" },
        },
        gray: {
          10: { value: "#bab8be" },
        },
        dark: {
          100: { value: "#2c243b" },
          130: { value: "#000000" },
        },
      },
    },
  },
});

const config = mergeConfigs(defaultConfig, theme);
export const system = createSystem(config);
