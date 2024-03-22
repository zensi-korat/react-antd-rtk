import type { Meta, StoryObj } from "@storybook/react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Badge } from ".";
import { Avatar } from "..";
import { Space } from "antd";

const meta: Meta<typeof Badge> = {
  title: "Ant Design/Badge",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    dot: { control: "boolean" },
    showZero: { control: "boolean" },
    size: { control: "radio", options: ["small", "default"] },
    status: {
      control: "radio",
      options: ["success", "processing", "default", "warning", "error"],
    },
  },

  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Demo: Story = {
  args: {
    dot: true,
    status: "success",
    overflowCount: 50,
    showZero: true,
  },
  render: (args) => (
    <Space size={[10, 8]} wrap>
      <Badge {...args} count={<ClockCircleOutlined />}>
        <Avatar shape="square" />
      </Badge>
      <Badge {...args} count={6}>
        <Avatar shape="square" />
      </Badge>
    </Space>
  ),
};
