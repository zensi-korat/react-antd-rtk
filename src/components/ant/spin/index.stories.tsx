import type { Meta, StoryObj } from "@storybook/react";
import { Spin } from ".";

const meta: Meta<typeof Spin> = {
  title: "Ant Design/Spin",
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["small", "default", "large"] },
    spinning: { control: "boolean" },
    fullscreen: { control: "boolean" },
  },

  component: Spin,
};

export default meta;

type Story = StoryObj<typeof Spin>;

export const Demo: Story = {
  args: {
    delay: 1000,
    spinning: true,
    fullscreen: false,
  },
  render: (args) => <Spin {...args} />,
};
