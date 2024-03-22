import type { Meta, StoryObj } from "@storybook/react";
import { Segmented } from ".";

const meta: Meta<typeof Segmented> = {
  title: "Ant Design/Segmented",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    block: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: "radio", options: ["large", "middle", "small"] },
  },
  component: Segmented,
};

export default meta;

type Story = StoryObj<typeof Segmented>;

export const Demo: Story = {
  args: {
    options: ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
  },
};
