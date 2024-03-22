import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Ant Design/Skeleton",
  tags: ["autodocs"],
  argTypes: {
    active: { control: "boolean" },
    avatar: { control: "boolean" },
    loading: { control: "boolean" },
    paragraph: { control: "boolean" },
    round: { control: "boolean" },
    title: { control: "boolean" },
  },

  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Demo: Story = {
  args: {
    active: true,
    avatar: true,
    loading: true,
    paragraph: true,
    round: true,
    title: true,
  },
  render: (args) => <Skeleton {...args} />,
};
