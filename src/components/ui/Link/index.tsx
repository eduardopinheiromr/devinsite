import { Box, BoxProps } from "@chakra-ui/react";
import NextLink from "./NextLink";

type Props = {
  href: string;
  shallow?: boolean;
  isExternal?: boolean;
} & BoxProps;

export default function Link({
  href,
  shallow,
  isExternal,
  children,
  ...props
}: Props) {
  return (
    <NextLink href={href} shallow={shallow} passHref>
      <Box as="a" {...props} target={isExternal ? "_blank" : "_self"}>
        {children}
      </Box>
    </NextLink>
  );
}
