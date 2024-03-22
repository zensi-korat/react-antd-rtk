import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
  title: "Ant Design/Calendar",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fullscreen: { control: "boolean" },
    mode: { control: "radio", options: ["month", "year"] },
  },
  component: Calendar,
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Demo: Story = {
  args: {
    fullscreen: true,
  },
};
