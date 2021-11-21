import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "UI/Button",
  component: Button,
} as Meta;

export const button: Story<ButtonProps> = (args) => <Button {...args} />;

button.args = {
  children: "Click me",
};
