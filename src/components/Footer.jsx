import {memo} from 'react';

const dataArr = [
  '連絡電話: 0918-032-666',
  '電子信箱: asiansquat1996@gmail.com',
  '營業地址: (105)臺北市松山區南京東路三段287號8樓(電梯9樓)',
  'Copyright©2019-2020亞洲蹲資訊科技股份有限公司,保留一切權利。',
];

const RenderFooter = () => {
  return (
    <div className='px-10 py-2'>
      {dataArr.map((item) => {
        return <div key={item} className='text-orange-200 py-1'>{item}</div>
      })}
    </div>
  );
}

const Footer = () => {
  return (
    <div className='bg-navBackground flex-col flex items-center'>
      <RenderFooter />
    </div>
  );
}
// 只 render 1 次，之後完全不 render
export default memo(Footer, () => {return true});