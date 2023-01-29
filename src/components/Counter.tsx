import { useState } from "react";
import classnames from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <strong>{count}</strong>
      <button
        className={classnames.button}
        onClick={() => setCount((prev) => prev + 1)}
      >
        + 1
      </button>
    </div>
  );
}

export default Counter;
