import { t } from "i18next";
import { HomeStyle } from "./HomeSec.style";
import Images from "src/config/images";
import { Button } from "../ant";
import { useAppDispatch, useAppSelector } from "src/store";
import { decrement, increment } from "src/store/features/counterSlice";

const HomeSec = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <HomeStyle>
      <h1>{t("welcome_to_simform")}</h1>
      <div style={{ display: "flex" }}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img style={{ width: 100, height: 100 }} src={Images.viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img style={{ width: 100, height: 100 }} src={Images.reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Vite + Ant Design + Styled Components + Redux Toolkit (RTK)</p>

      <div className="card">
        <Button type="primary" htmlType="button" onClick={() => dispatch(increment())}>
          Increment count
        </Button>
      </div>
      <div className="card">
        <Button type="primary" htmlType="button" onClick={() => dispatch(decrement())}>
          Decrement count
        </Button>
      </div>
      <div className="card">
        <Button type="primary" htmlType="button">
          {count}
        </Button>
      </div>
    </HomeStyle>
  );
};

export default HomeSec;
