import {memo} from 'react';
import RenderTip from '../hooks/RenderTip';
const SubContent = ({title, children}) => {
  return (
    <div className="subTitleContainer">
      <div className="subTitle">{title}</div>
      <div className="content">{children}</div>
      {/* <RenderTip /> */}
    </div>
  );
};

export default memo(SubContent);