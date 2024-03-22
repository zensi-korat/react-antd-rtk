import type { Meta } from "@storybook/react";
import { Button, notification, Space, type NotificationArgsProps } from "antd";
import React, { useMemo } from "react";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { Notification } from ".";

const meta: Meta<typeof Notification> = {
  title: "Ant Design/Notification",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  component: Notification,
};

export default meta;

type NotificationPlacement = NotificationArgsProps["placement"];

const Context = React.createContext({ name: "Default" });

export function Demo() {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification("topLeft")} icon={<RadiusUpleftOutlined />}>
          topLeft
        </Button>
        <Button type="primary" onClick={() => openNotification("topRight")} icon={<RadiusUprightOutlined />}>
          topRight
        </Button>
        <Button type="primary" onClick={() => openNotification("bottomLeft")} icon={<RadiusBottomleftOutlined />}>
          bottomLeft
        </Button>
        <Button type="primary" onClick={() => openNotification("bottomRight")} icon={<RadiusBottomrightOutlined />}>
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  );
}
