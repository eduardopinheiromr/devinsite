import { Text, Box, BoxProps } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export type ButtonProps = {
  children: string;
  fit?: boolean;
  onClick?: () => void;
  withIcon?: boolean | JSX.Element;
  href?: string;
  type?: "button" | "submit" | "reset";
} & BoxProps;

export default function Button(props: ButtonProps) {
  if (props.href) {
    const { href, ...propsWithoutHref } = props;
    return (
      <Link href={href} passHref>
        <a title={props.title}>
          <ButtonBase {...propsWithoutHref} />
        </a>
      </Link>
    );
  }
  return <ButtonBase {...props} />;
}

function ButtonBase(props: ButtonProps) {
  return (
    <Box
      {...props}
      w={props.w ?? props.fit ? "fit-content" : "auto"}
      as={props.as ?? "button"}
      p={["10px 20px", "10px 20px", "10px 40px", "10px 40px"]}
      bg="coral"
      borderRadius={20}
      color="white"
      fontWeight="bold"
      fontSize={["18px", "18px", "18px", "26px"]}
      transition=".5s"
      shadow="5px 5px 15px rgba(232, 82, 74, 0.15)"
      _hover={{
        bg: "#b63d3d",
      }}
      style={{ gap: "8px" }}
      d="flex"
      alignItems="center"
      justifyContent="center"
      // w={["300px", "300px", "300px", "340px"]}
    >
      <Text as="span" whiteSpace="nowrap">
        {props.children}
      </Text>
      {props.withIcon && props.withIcon === true ? (
        <Icon as={BsArrowRight} />
      ) : (
        props.withIcon
      )}
    </Box>
  );
}
