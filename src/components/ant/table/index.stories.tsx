import type { Meta, StoryObj } from "@storybook/react";
import { AnyObject } from "antd/es/_util/type";
import { ColumnGroupType, ColumnType } from "antd/es/table";
import { Table } from ".";

const meta: Meta<typeof Table> = {
  title: "Ant Design/Table",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    bordered: { control: "boolean" },
    pagination: { control: "boolean" },
    sticky: { control: "boolean" },
    size: { control: "radio", options: ["large", "middle", "small"] },
    tableLayout: { control: "radio", options: ["auto", "fixed"] },
  },
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columnData: (ColumnGroupType<AnyObject> | ColumnType<AnyObject>)[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export const Demo: Story = {
  args: {
    columns: columnData,
    dataSource: data,
    loading: false,
    bordered: true,
    pagination: false,
    sticky: false,
    size: "middle",
    tableLayout: "fixed",
  },
  render: (args) => <Table {...args} />,
};
