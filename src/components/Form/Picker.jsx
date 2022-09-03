import { useEffect } from 'react';
import { useRef, memo, useCallback, useState } from 'react';
import RenderTip from '../../optimizeTest/RenderTip';

const Picker = ({pickerTitle, classify, setClassify}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (classify === '其他') ref.current.focus(); 
  }, [classify]);

  const RenderTitle = () => {
    return (
      pickerTitle.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        );
      })
    );
  };

  const onPickerChange = (e) => {
    // setValue(e.target.value);
    setClassify(e.target.value);
  };
  
  return (
    <div className='w-full'>
      <label className="text-base">
        詢問類別：
      </label>
      <div className='lg:grid lg:grid-cols-2 lg:gap-2'>
        <div className='w-full mb-2 flex border py-3 px-4 pr-8 rounded'>
          <select value={classify} onChange={onPickerChange} className="w-full focus:outline-none" >
            <RenderTitle />
          </select>
        </div>
        {classify === '其他' && <div>
          <input
            ref={ref}
            type='text'
            className='mt-2 mb-2 lg:mt-0 appearance-none py-3 px-4 block border rounded w-full leading-tight focus:outline-none mt-5.1'
            onChange={(e) => {
              console.log(e.target.value);
          }}/>
        </div>}
        {/* <RenderTip /> */}
      </div>
    </div>
  );
};

export default memo(Picker);