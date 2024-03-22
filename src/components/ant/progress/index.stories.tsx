import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from ".";

const meta: Meta<typeof Progress> = {
  title: "Ant Design/Progress",
  tags: ["autodocs"],
  argTypes: {
    showInfo: { control: "boolean" },
    status: {
      control: "radio",
      options: ["success", "exception", "normal", "active"],
    },
    strokeLinecap: {
      control: "radio",
      options: ["round", "butt", "square"],
    },
    size: {
      control: "radio",
      options: ["small", "default"],
    },
    type: {
      control: "radio",
      options: ["line", "circle", "dashboard"],
    },
  },

  component: Progress,
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Demo: Story = {
  args: {
    percent: 40,
    showInfo: true,
  },
  render: (args) => <Progress percent={30} {...args} />,
};
