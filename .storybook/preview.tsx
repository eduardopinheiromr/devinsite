import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StoryContext } from "@storybook/react";
import * as React from "react";
import { withPerformance } from "storybook-addon-performance";
import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
};

// locale: {
//   name: "Locale",
//   description: "Internationalization locale",
//   defaultValue: "en",
//   toolbar: {
//     icon: "globe",
//     items: [
//       { value: "en", right: "🇺🇸", title: "English" },
//       { value: "fr", right: "🇫🇷", title: "Français" },
//       { value: "es", right: "🇪🇸", title: "Español" },
//     ],
//   },
// },

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();

  return (
    <ChakraProvider theme={extendTheme({ direction: dir })}>
      <div dir={dir} id="story-wrapper" style={{ minHeight: "100vh" }}>
        <StoryFn />
      </div>
    </ChakraProvider>
  );
};

export const decorators = [withChakra, withPerformance];
