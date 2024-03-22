import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from ".";

const meta: Meta<typeof Timeline> = {
  title: "Ant Design/Timeline",
  tags: ["autodocs"],
  argTypes: {
    mode: { control: "radio", options: ["left", "alternate", "right"] },
    pending: { control: "boolean" },
    reverse: { control: "boolean" },
  },
  component: Timeline,
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Demo: Story = {
  args: {
    items: [
      {
        children: "Create a services site 2023-09-01",
      },
      {
        children: "Solve initial network problems 2023-09-01",
      },
      {
        children: "Technical testing 2023-09-01",
      },
      {
        children: "Network problems being solved 2023-09-01",
      },
    ],
    pending: false,
    reverse: false,
  },
};
