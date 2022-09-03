
import { useEffect, useRef } from "react";
const RenderTip = () => {
  const ref = useRef(0);
  useEffect(() => {
    ref.current += 1;
  });
  return (
    <div className="border bg-blue">
      <div>{ref.current}</div>
    </div>
  );
};

export default RenderTip;