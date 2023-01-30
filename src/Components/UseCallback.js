import { useCallback,useState } from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const handleClick = ()=>{
    console.log("hello")
  }

  return (
    <div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;