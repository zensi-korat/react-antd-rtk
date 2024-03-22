import { Meta, StoryObj } from "@storybook/react";
import { TreeSelect } from ".";

const meta: Meta<typeof TreeSelect> = {
  title: "Ant Design/TreeSelect",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    allowClear: { control: "boolean" },
    autoClearSearchValue: { control: "boolean" },
    disabled: { control: "boolean" },
    labelInValue: { control: "boolean" },
    multiple: { control: "boolean" },
    showSearch: { control: "boolean" },
    placement: { control: "radio", options: ["bottomLeft", "bottomRight", "topLeft", "topRight"] },
    variant: { control: "radio", options: ["outlined", "borderless", "filled"] },
    size: { control: "radio", options: ["large", "middle", "small"] },
    status: { control: "radio", options: ["error", "warning"] },
    treeCheckable: { control: "boolean" },
    treeCheckStrictly: { control: "boolean" },
    treeDefaultExpandAll: { control: "boolean" },
    treeIcon: { control: "boolean" },
    virtual: { control: "boolean" },
    treeExpandAction: { control: "radio", options: ["click", "doubleClick", false] },
    treeLine: { control: "boolean" },
  },
  component: TreeSelect,
};

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "leaf1",
          },
          {
            value: "leaf2",
            title: "leaf2",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "leaf3",
            title: <b style={{ color: "#08c" }}>leaf3</b>, // Consistent string type for title
          },
        ],
      },
    ],
  },
];

export default meta;

type Story = StoryObj<typeof TreeSelect>;

export const Demo: Story = {
  args: {
    listHeight: 256,
    allowClear: false,
    autoClearSearchValue: false,
    disabled: false,
    defaultValue: "parent1",
    labelInValue: false,
    multiple: false,
    showSearch: false,
    treeCheckable: false,
    treeCheckStrictly: false,
    treeDefaultExpandAll: false,
    treeIcon: false,
    virtual: false,
    treeExpandAction: "doubleClick",
    treeLine: false,
    placement: "bottomRight",
    variant: "outlined",
  },
  render: (args) => <TreeSelect {...args} treeData={treeData} style={{ width: "200px" }} />,
};
