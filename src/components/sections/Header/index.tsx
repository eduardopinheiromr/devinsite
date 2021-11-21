import Link from "next/link";
import { Box, Flex } from "@chakra-ui/layout";
import { Container } from "@components/layouts";
import { Button } from "@components/ui";
import MobileMenu from "./MobileMenu";

import { navigation } from "./constants";
import Brand from "@components/ui/Brand";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <Box as="header" w="full" zIndex="10" bg="white">
      <Container
        as="nav"
        d="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
      >
        <Flex
          w={["full", "full", "auto"]}
          mr={[0, 0, "42px", "93px"]}
          align="center"
          justify="center"
        >
          <Brand />
          <MobileMenu />
        </Flex>

        <Flex
          d={["none", "none", "flex"]}
          w="full"
          align="center"
          justify="space-between"
        >
          <Flex align="center" style={{ gap: "16px" }}>
            {navigation.map((nav, key) => (
              <Link key={key} href={nav.link} passHref>
                <Box
                  as="a"
                  fontWeight="bold"
                  fontSize={["18px", "18px", "18px", "22px"]}
                  transition=".3s"
                  textDecoration={
                    router.pathname === nav.link ? "underline" : "none"
                  }
                  color={router.pathname === nav.link ? "#630060" : "dark"}
                  _hover={{
                    textDecoration: "underline",
                    color: "#630060",
                  }}
                >
                  {nav.label}
                </Box>
              </Link>
            ))}
          </Flex>

          <Button h="59px" href="#">
            Call To Action
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
