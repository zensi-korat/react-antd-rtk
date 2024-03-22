import type { Meta, StoryObj } from "@storybook/react";
import { Mentions } from ".";

const meta: Meta<typeof Mentions> = {
  title: "Ant Design/Mentions",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "radio",
      options: ["error", "warning", "success", "validating"],
    },
    variant: {
      control: "radio",
      options: ["outlined", "borderless", "filled"],
    },
    placement: { control: "radio", options: ["top", "bottom"] },
    allowClear: { control: "boolean" },
    autoFocus: { control: "boolean" },
    autoSize: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
  },
  component: Mentions,
};

export default meta;

type Story = StoryObj<typeof Mentions>;

export const Demo: Story = {
  args: {
    autoFocus: false,
    autoSize: false,
    allowClear: false,
    disabled: false,
    readOnly: false,
    placement: "bottom",
    defaultValue: "@afc163",
    options: [
      {
        value: "afc163",
        label: "afc163",
      },
      {
        value: "zombieJ",
        label: "zombieJ",
      },
      {
        value: "yesmeck",
        label: "yesmeck",
      },
    ],
  },
};
