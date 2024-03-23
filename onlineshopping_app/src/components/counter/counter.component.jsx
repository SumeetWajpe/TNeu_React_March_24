import { useState } from "react";

export function Counter() {
  const [data, setData] = useState({ count: 0, age: 18 });
  return (
    <>
      <p>Count : {data.count} </p>
      <button
        className="btn btn-primary"
        onClick={() => setData({ ...data, count: data.count + 1 })}
      >
        ++
      </button>
      <hr />
      <p>Age : {data.age}</p>
      <button
        className="btn btn-primary"
        onClick={() => setData({ ...data, age: data.age + 10 })}
      >
        ++
      </button>
    </>
  );
}
