import type { Meta, StoryObj } from "@storybook/react";
import { QRCode } from ".";

const meta: Meta<typeof QRCode> = {
  title: "Ant Design/QRCode",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["canvas", "svg"] },
    bordered: { control: "boolean" },
    errorLevel: { control: "radio", options: ["L", "M", "Q", "H"] },
    status: {
      control: "radio",
      options: ["active", "expired", "loading", "scanned"],
    },
  },
  component: QRCode,
};

export default meta;

type Story = StoryObj<typeof QRCode>;

export const Demo: Story = {
  args: {
    value: "https://ant.design/",
    bgColor: "blue",
    color: "blue",
    size: 150,
    iconSize: 32,
    bordered: true,
  },
};
