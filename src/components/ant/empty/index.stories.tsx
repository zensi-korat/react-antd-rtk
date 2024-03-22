import type { Meta, StoryObj } from "@storybook/react";
import { Empty } from ".";

const meta: Meta<typeof Empty> = {
  title: "Ant Design/Empty",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  component: Empty,
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const Demo: Story = {
  args: {},
};
