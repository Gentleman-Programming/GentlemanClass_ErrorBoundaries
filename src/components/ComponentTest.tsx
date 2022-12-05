import { useState } from "react";

function ComponentTest({ name }: { name: string }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {name.toUpperCase()}
      {count}
      <button onClick={handleClick}>Click me !</button>
    </div>
  );
}
export default ComponentTest;
