import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Ant Design/Card",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    hoverable: { control: "boolean" },
    loading: { control: "boolean" },
    bordered: { control: "boolean" },
    size: { control: "radio", options: ["default", "small"] },
  },
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Demo: Story = {
  args: {
    hoverable: false,
    loading: false,
    bordered: false,
  },
  render: (args) => (
    <Card {...args} title="Default size card" style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  ),
};
