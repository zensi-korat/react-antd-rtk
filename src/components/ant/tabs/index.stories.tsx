import type { Meta, StoryObj } from "@storybook/react";
import { TabsProps } from "antd";
import { Tabs } from ".";

const meta: Meta<typeof Tabs> = {
  title: "Ant Design/Tabs",

  tags: ["autodocs"],
  argTypes: {
    centered: { control: "boolean" },
    hideAdd: { control: "boolean" },
    size: { control: "radio", options: ["large", "middle", "small"] },
    indicator: { control: "radio", options: ["start", "center", "end"] },
    tabPosition: {
      control: "radio",
      options: ["top", "right", "bottom", "left"],
    },
    type: {
      control: "radio",
      options: ["line", "card", "editable-card"],
    },
  },
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabItems: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

export const Demo: Story = {
  args: {
    items: tabItems,
    centered: false,
    hideAdd: false,
  },
  render: (args) => <Tabs {...args} />,
};
