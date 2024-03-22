import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Ant Design/Checkbox",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    autoFocus: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Demo: Story = {
  args: {
    children: "Checkbox",
    autoFocus: false,
    defaultChecked: false,
    disabled: false,
    indeterminate: false,
  },
};
