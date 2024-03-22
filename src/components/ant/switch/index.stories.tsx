import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  title: "Ant Design/Switch",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    autoFocus: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    defaultValue: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    size: { control: "radio", options: ["default", "small"] },
  },
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Demo: Story = {
  args: {
    autoFocus: false,
    defaultChecked: false,
    defaultValue: false,
    disabled: false,
    loading: false,
    size: "default",
  },
};
