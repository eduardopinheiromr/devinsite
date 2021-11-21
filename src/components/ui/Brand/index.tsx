import Link from "next/link";

import { Box, Link as ChakraLink, LinkProps } from "@chakra-ui/react";

type Props = {
  variant?: "default" | "white";
} & LinkProps;

export default function Brand({ variant = "default", ...props }: Props) {
  const enterpriseName = "Enterprise Name";
  return (
    <Link href="/" passHref>
      <ChakraLink
        {...props}
        title={"Logo " + enterpriseName}
        alt={"Logo " + enterpriseName}
        display="flex"
        justifyContent={["center", "flex-start"]}
        draggable={false}
      >
        {variant === "default" ? (
          <Box
            as="svg"
            width={["80px", "80px", "139px"]}
            height={["50px", "50px", "75px"]}
            viewBox="0 0 139 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            Default SVG Here
          </Box>
        ) : (
          <Box
            as="svg"
            width={207}
            height={111}
            viewBox="0 0 207 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            White SVG Here
          </Box>
        )}
      </ChakraLink>
    </Link>
  );
}
