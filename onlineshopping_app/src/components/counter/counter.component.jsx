import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  return (
    <>
      <p>Count : {count} </p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        ++
      </button>
      <hr />
      <p>Age : {age}</p>
      <button className="btn btn-primary" onClick={() => setAge(age + 1)}>
        ++
      </button>
    </>
  );
}
