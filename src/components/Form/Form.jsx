import { useState, useCallback, useMemo, memo } from "react";
import '../../css/styles.scss';

import Picker from './Picker';
import Input from './Input';
import Button from '../Button';
const pickerTitle = ['請選擇', '平台操作', '開發建議', '異業合作', '其他'];

const Form = (props) => {
  const [name, setName] = useState('');
  // check email
  const [email, setEmail] = useState('');
  const [classify, setClassify] = useState('');
  const [comment, setComment] = useState('');

  const atSetClassify = useCallback((data) => {
    setClassify(data);
  }, []);

  const atSetName = useCallback(data => setName(data), []);
  const atSetEmail = useCallback(data => setEmail(data), []);
  const atSetComment = data => setComment(data); 

  return (
    <div className="w-full px-10 ">
      <div className="lg:grid lg:grid-cols-2 lg:gap-2">
        <Input title="您的姓名" atOnChange={atSetName} />
        <Input title="您的電子信箱" atOnChange={atSetEmail} />
      </div>
      <Picker pickerTitle={pickerTitle} classify={classify} setClassify={atSetClassify} />
      <label className="text-base">您想對我們說的話：</label>
      <textarea
        className="border outline-none px-3 py-2 rounded w-full"
        maxLength={200}
        rows="5"
        cols="40"
        onChange={atSetComment}   
      />
      <div className="flex justify-center mb-2">
        <Button
          title="傳送"
          styles='w-1/2 py-3 bg-navBackground border rounded border-blue text-center'
        />
      </div>
    </div>
  );
};

export default memo(Form);