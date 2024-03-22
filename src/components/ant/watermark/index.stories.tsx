import type { Meta, StoryObj } from "@storybook/react";
import { Watermark } from ".";

const meta: Meta<typeof Watermark> = {
  title: "Ant Design/Watermark",
  tags: ["autodocs"],
  argTypes: {
    inherit: { control: "boolean" },
  },

  component: Watermark,
};

export default meta;

type Story = StoryObj<typeof Watermark>;

export const Demo: Story = {
  args: {
    width: 120,
    height: 64,
    rotate: 12,
    content: "Ant Design",
  },
  render: (args) => (
    <Watermark {...args}>
      <div style={{ height: "100vh" }} />
    </Watermark>
  ),
};
