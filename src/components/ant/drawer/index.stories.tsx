// Import necessary dependencies
import type { Meta } from "@storybook/react";
import { Button, DrawerProps } from "antd";
import { useState } from "react";
import { Drawer } from ".";

// Define the meta information for Storybook
const meta: Meta<DrawerProps> = {
  title: "Ant Design/Drawer",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    autoFocus: { control: "boolean" },
    closeIcon: { control: "boolean" },
    destroyOnClose: { control: "boolean" },
    forceRender: { control: "boolean" },
    keyboard: { control: "boolean" },
    mask: { control: "boolean" },
    maskClosable: { control: "boolean" },
    placement: {
      control: "radio",
      options: ["top", "right", "bottom", "left"],
    },
    size: {
      control: "radio",
      options: ["default", "large"],
    },
  },
  args: {
    height: 400,
    width: 400,
    size: "default",
    autoFocus: false,
    closeIcon: false,
    destroyOnClose: false,
    forceRender: false,
    keyboard: false,
    mask: false,
    maskClosable: false,
  },
  component: Drawer,
};

export default meta;

// Define the Demo component
export function Demo(args: DrawerProps) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} visible={open} {...args}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
