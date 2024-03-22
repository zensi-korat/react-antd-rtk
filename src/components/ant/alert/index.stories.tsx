import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";

const meta: Meta<typeof Alert> = {
  title: "Ant Design/Alert",
  tags: ["autodocs"],
  argTypes: {
    banner: { control: "boolean" },
    closeIcon: { control: "boolean" },
    showIcon: { control: "boolean" },
    type: { control: "radio", options: ["success", "info", "warning", "error"] },
  },
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Demo: Story = {
  args: {
    banner: false,
    closeIcon: false,
    showIcon: false,
  },
  render: (args) => <Alert {...args} message="Success Text" />,
};
