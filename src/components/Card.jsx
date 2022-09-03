import {memo} from 'react';
import Img from './Img';

const Card = (props) => {
  const {src, width, height} = props;
  return (
    <div>
      <Img src={src} width={width} height={height} />
      <div>{props.children}</div>
    </div>
  );
}

export default memo(Card);