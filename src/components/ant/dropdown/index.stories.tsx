import type { Meta, StoryObj } from "@storybook/react";
// import { DownOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { Button } from "..";
import { Dropdown } from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Ant Design/Dropdown",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    arrow: { control: "boolean" },
    autoAdjustOverflow: { control: "boolean" },
    autoFocus: { control: "boolean" },
    disabled: { control: "boolean" },
    destroyPopupOnHide: { control: "boolean" },
    placement: { control: "radio", options: ["bottom", "bottomLeft", "bottomRight", "top", "topLeft", "topRight"] },
    trigger: { control: "radio", options: ["click", "hover", "contextMenu"] },
    // open: { control: "boolean" },
  },
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

export const Demo: Story = {
  args: {
    menu: { items },
    children: <Button>Dropdown</Button>,
    arrow: false,
    autoAdjustOverflow: false,
    autoFocus: false,
    disabled: false,
    destroyPopupOnHide: false,
    placement: "top",
    // trigger: "hover",
  },
};
