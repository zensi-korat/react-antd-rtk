import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";

const meta: Meta<typeof Pagination> = {
  title: "Ant Design/Pagination",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "radio", options: ["default", "small"] },
    disabled: { control: "boolean" },
    hideOnSinglePage: { control: "boolean" },
    responsive: { control: "boolean" },
    showLessItems: { control: "boolean" },
    showQuickJumper: { control: "boolean" },
    showSizeChanger: { control: "boolean" },
    showTitle: { control: "boolean" },
    simple: { control: "boolean" },
  },
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Demo: Story = {
  args: {
    defaultCurrent: 1,
    total: 50,
    defaultPageSize: 10,
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    disabled: false,
    hideOnSinglePage: false,
    responsive: false,
    showLessItems: false,
    showQuickJumper: true,
    showSizeChanger: true,
    showTitle: false,
    simple: false,
  },
};
