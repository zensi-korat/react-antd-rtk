import type { Meta, StoryObj } from "@storybook/react";
import { Rate } from ".";

const meta: Meta<typeof Rate> = {
  title: "Ant Design/Rate",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    allowClear: { control: "boolean" },
    allowHalf: { control: "boolean" },
    autoFocus: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  component: Rate,
};

export default meta;

type Story = StoryObj<typeof Rate>;

export const Demo: Story = {
  args: {
    allowClear: false,
    allowHalf: false,
    autoFocus: false,
    disabled: false,
    count: 5,
    defaultValue: 0,
  },
};
