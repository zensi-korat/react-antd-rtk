import type { Meta, StoryObj } from "@storybook/react";
import { InputNumber } from ".";

const meta: Meta<typeof InputNumber> = {
  title: "Ant Design/InputNumber",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    autoFocus: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    keyboard: { control: "boolean" },
    changeOnWheel: { control: "boolean" },
    stringMode: { control: "boolean" },
    status: {
      control: "radio",
      options: ["error", "warning"],
    },
    size: { control: "radio", options: ["large", "small", "medium"] },
    variant: { control: "radio", options: ["outlined", "borderless", "filled"] },
  },
  component: InputNumber,
};

export default meta;

type Story = StoryObj<typeof InputNumber>;

export const Demo: Story = {
  args: {
    type: "primary",
    size: "large",
    disabled: false,
    min: 1,
    max: 10,
    defaultValue: 1,
    autoFocus: false,
    readOnly: false,
    keyboard: false,
    changeOnWheel: true,
    stringMode: false,
    status: "",
  },
};
