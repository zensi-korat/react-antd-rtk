import type { Meta, StoryObj } from "@storybook/react";
import { Steps } from ".";

const meta: Meta<typeof Steps> = {
  title: "Ant Design/Steps",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: { control: "radio", options: ["horizontal", "vertical"] },
    labelPlacement: { control: "radio", options: ["horizontal", "vertical"] },
    size: { control: "radio", options: ["default", "small"] },
    status: {
      control: "radio",
      options: ["wait", "process", "finish", "error"],
    },
    type: {
      control: "radio",
      options: ["default", "navigation", "inline"],
    },
    responsive: { control: "boolean" },
  },
  component: Steps,
};

export default meta;

type Story = StoryObj<typeof Steps>;

export const Demo: Story = {
  args: {
    current: 1,
    initial: 0,
    percent: 50,
    items: [
      {
        title: "Finished",
        description: "This is a description.",
      },
      {
        title: "In Progress",
        description: "This is a description.",
      },
      {
        title: "Waiting",
        description: "This is a description.",
      },
    ],
    responsive: false,
  },
};
