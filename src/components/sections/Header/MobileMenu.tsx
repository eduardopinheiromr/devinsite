import Link from "next/link";
import { Grid, Box, Flex, Collapse } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@components/ui";
import MenuToggle from "./MenuToggle";
import { navigation } from "./constants";

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  typeof window !== "undefined" && window.addEventListener("scroll", onClose);
  typeof window !== "undefined" && window.addEventListener("resize", onClose);

  return (
    <>
      <MenuToggle toggle={isOpen ? onClose : onOpen} isOpen={isOpen} />
      <Flex
        position="absolute"
        bg="white"
        shadow={isOpen ? "0 0px 30px rgba(29, 29, 29, 0.5)" : "none"}
        h={[isOpen ? "400px" : "70px", isOpen ? "400px" : "70px", 0]}
        w={[isOpen ? "80%" : "70px", isOpen ? "80%" : "70px", 0]}
        transition=".3s"
        top="1"
        right="1"
        justify="center"
        align="center"
        zIndex="20"
        rounded="xl"
      >
        <Collapse in={isOpen} animateOpacity>
          <Grid
            gap={6}
            height={isOpen ? "300px" : "80px"}
            display={isOpen ? "grid" : "none"}
          >
            {navigation.map((nav, key) => (
              <Link key={key} href={nav.link} passHref shallow>
                <Box as="a" onClick={() => setTimeout(onClose, 50)}>
                  {nav.label}
                </Box>
              </Link>
            ))}

            <Button href="/cotacao">Fazer cotação</Button>
          </Grid>
        </Collapse>
      </Flex>
      <Box
        display={isOpen ? "block" : "none"}
        left={0}
        top={"0"}
        w="full"
        h="full"
        position="absolute"
        zIndex="5"
        bg="black"
        opacity=".3"
        onClick={onClose}
      />
    </>
  );
}
