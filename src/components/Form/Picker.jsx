import { useEffect } from 'react';
import { useRef, memo, useCallback, useState } from 'react';
import RenderTip from '../../hooks/RenderTip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Picker = ({pickerTitle, classify, setClassify}) => {
  const ref = useRef(null);
  const [test, setTest] = useState(0);

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
        <div className='mb-2'>
          <select value={classify} onChange={onPickerChange} className="grid grid-cols-2 block appearance-none w-full border py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <RenderTitle />
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2">
            
          </div>
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