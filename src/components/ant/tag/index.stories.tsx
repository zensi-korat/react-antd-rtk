import type { Meta, StoryObj } from "@storybook/react";
import { Space } from "antd";
import { Tag } from ".";

const meta: Meta<typeof Tag> = {
  title: "Ant Design/Tag",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bordered: { control: "boolean" },
    closeIcon: { control: "boolean" },
  },
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Demo: Story = {
  args: {
    bordered: true,
    closeIcon: false,
  },
  render: (args) => (
    <Space size={[0, 8]} wrap>
      <Tag closeIcon {...args} color="magenta">
        magenta
      </Tag>
      <Tag closeIcon {...args} color="red">
        red
      </Tag>
      <Tag closeIcon {...args} color="volcano">
        volcano
      </Tag>
      <Tag closeIcon {...args} color="orange">
        orange
      </Tag>
      <Tag closeIcon {...args} color="gold">
        gold
      </Tag>
      <Tag closeIcon {...args} color="lime">
        lime
      </Tag>
      <Tag closeIcon {...args} color="green">
        green
      </Tag>
      <Tag closeIcon {...args} color="cyan">
        cyan
      </Tag>
      <Tag closeIcon {...args} color="blue">
        blue
      </Tag>
      <Tag closeIcon {...args} color="geekblue">
        geekblue
      </Tag>
      <Tag closeIcon {...args} color="purple">
        purple
      </Tag>
    </Space>
  ),
};
