// Import necessary dependencies
import type { Meta } from "@storybook/react";
import { TransferProps } from "antd";
import { useState } from "react";
import { Transfer } from ".";

// Define the meta information for Storybook
const meta: Meta<TransferProps> = {
  title: "Ant Design/Transfer",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    oneWay: { control: "boolean" },
    showSearch: { control: "boolean" },
    showSelectAll: { control: "boolean" },
    status: {
      control: "radio",
      options: ["error", "warning"],
    },
  },
  args: {
    disabled: true,
    oneWay: false,
    showSearch: false,
    showSelectAll: false,
    status: "error",
  },
  component: Transfer,
};

export default meta;

export function Demo() {
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const mockData = [
    { key: "1", title: "Title 1" },
    { key: "2", title: "Title 2" },
    { key: "3", title: "Title 3" },
  ];

  const onChange: TransferProps["onChange"] = (nextTargetKeys, direction, moveKeys) => {
    console.log("targetKeys:", nextTargetKeys);
    console.log("direction:", direction);
    console.log("moveKeys:", moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
    console.log("sourceSelectedKeys:", sourceSelectedKeys);
    console.log("targetSelectedKeys:", targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll: TransferProps["onScroll"] = (direction, e) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  return (
    <>
      <Transfer
        dataSource={mockData}
        titles={["Source", "Target"]}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={(item) => <span>{item.title}</span>}
      />
    </>
  );
}
