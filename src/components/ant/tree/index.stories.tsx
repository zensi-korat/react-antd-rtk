import type { Meta, StoryObj } from "@storybook/react";
import { TreeDataNode } from "antd";
import { Tree } from ".";

const meta: Meta<typeof Tree> = {
  title: "Ant Design/Tree",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    autoExpandParent: { control: "boolean" },
    blockNode: { control: "boolean" },
    checkable: { control: "boolean" },
    checkStrictly: { control: "boolean" },
    defaultExpandAll: { control: "boolean" },
    defaultExpandParent: { control: "boolean" },
    disabled: { control: "boolean" },
    multiple: { control: "boolean" },
    selectable: { control: "boolean" },
    showIcon: { control: "boolean" },
    virtual: { control: "boolean" },
    draggable: { control: "boolean" },
    showLine: { control: "boolean" },
  },
  component: Tree,
};

export default meta;

type Story = StoryObj<typeof Tree>;

const treeData: TreeDataNode[] = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            disableCheckbox: true,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: <span style={{ color: "#1677ff" }}>sss</span>,
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];

export const Demo: Story = {
  args: {
    autoExpandParent: false,
    blockNode: false,
    checkable: false,
    checkStrictly: false,
    defaultExpandAll: false,
    defaultExpandParent: false,
    disabled: false,
    multiple: false,
    selectable: false,
    showIcon: false,
    virtual: false,
    draggable: true,
    showLine: true,
  },
  render: (args) => (
    <Tree
      {...args}
      checkable
      defaultExpandedKeys={["0-0-0", "0-0-1"]}
      defaultSelectedKeys={["0-0-0", "0-0-1"]}
      defaultCheckedKeys={["0-0-0", "0-0-1"]}
      treeData={treeData}
    />
  ),
};
