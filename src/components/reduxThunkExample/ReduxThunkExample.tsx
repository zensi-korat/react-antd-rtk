import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/store";
import { getPostApi } from "src/store/features/postSlice";
import { ReduxThunkExampleStyle } from "./ReduxThunkExample.style";
import { Spin } from "antd";

const QueryExample = () => {
  const dispatch = useAppDispatch();

  const { posts, loading } = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostApi());
  }, []);

  return (
    <ReduxThunkExampleStyle>
      <h1>Contact US</h1>
      {loading && (
        <div>
          <Spin />
        </div>
      )}
      <div className="post">
        {posts &&
          posts?.map((post) => {
            return (
              <div className="post__item" key={post.id}>
                {post.title}
              </div>
            );
          })}
      </div>
    </ReduxThunkExampleStyle>
  );
};

export default QueryExample;
