import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from ".";

const meta: Meta<typeof Radio> = {
  title: "Ant Design/Radio",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    autoFocus: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Demo: Story = {
  args: {
    children: "radio",
    autoFocus: false,
    defaultChecked: false,
    disabled: false,
    value: 1,
  },
};
