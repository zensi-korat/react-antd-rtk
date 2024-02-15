import { useState } from "react";
import { Radio, Slider, Space } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { AntDExampleStyle } from "./AntDExample.style";
import { Button } from "../ant";

const AntDExample = () => {
  const [size, setSize] = useState<SizeType | [SizeType, SizeType] | "customize">("small");

  const [customSize, setCustomSize] = useState<number>(20);

  return (
    <AntDExampleStyle>
      <h1>About Us Page</h1>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        {["small", "middle", "large", "customize"].map((item) => (
          <Radio key={item} value={item}>
            {item}
          </Radio>
        ))}
      </Radio.Group>
      {size === "customize" && (
        <>
          <Slider style={{ width: "300px" }} value={customSize} onChange={setCustomSize} />
        </>
      )}
      <Space size={size !== "customize" ? size : customSize}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </AntDExampleStyle>
  );
};

export default AntDExample;
