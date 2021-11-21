import { ReactNode } from "react";
import {
  // Footer,
  Header,
} from "@components/sections";
import { Box } from "@chakra-ui/react";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Box minH="100vh" as="main" bg="black" py={4}>
        {children}
      </Box>
    </>
  );
}
