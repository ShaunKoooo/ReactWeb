import React, {memo} from "react";
const Img = (props) => {
  const {height, width, src} = props;
  return (
    <div>
      <img height={height} width={width} src={src} alt='yyy' />
    </div>
  );
};

export default memo(Img);
