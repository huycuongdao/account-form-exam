import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      default: "#f65e4e",
      dark: "#ee5140",
      hover: "#fc7365",
    },
    disabled: {
      bg: "#eeeeee",
      border: "#e5e5e5",
      color: "#d0d0d0",
    },
  },

  components: {
    Button: {
      variants: {
        solid: () => ({
          bg: "primary.default",
          color: "white",
          _hover: {
            bg: "primary.hover",
          },
          _active: {
            bg: "primary.dark",
          },
          _disabled: {
            bg: "disabled.bg",
            color: "disabled.color",
          },
          _focus: {
            boxShadow: "none",
          },
        }),
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: "disabled.border",
            boxShadow: "none",
            _hover: {
              borderColor: "#C4C4C4",
              boxShadow: "none",
            },
            _active: {
              borderColor: "primary.default",
              boxShadow: "none",
            },
            _focus: {
              borderColor: "disabled.border",
              boxShadow: "none",
            },
            _invalid: {
              borderColor: "primary.default",
              bg: "rgba(255, 62, 62, 0.1)",
              boxShadow: "none",
            },
            _disabled: {
              bg: "disabled.bg",
              cursor: "not-allowed",
              opacity: 1,
              borderColor: "disabled.border",
              color: "disabled.color",
            },
          },
        },
      },
    },
    FormLabel: {
      baseStyle: {
        color: "#585858",
        fontSize: "12px",
      },
    },
  },
});

export default theme;
