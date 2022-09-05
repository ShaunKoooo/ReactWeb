import { memo } from 'react';
import RenderTip from '@/optimizeTest/RenderTip';

const Input = ({title, atOnChange}) => {
  return (
    <div className='flex-col'>
      <div className='text-base'>{title}：</div>
      <input
        type='text'
        className='appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight outline-none'
        onChange={(e) => atOnChange(e.target.value)}
      />
      {/* <RenderTip /> */}
    </div>
  );
}

export default memo(Input);