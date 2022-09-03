import Button from './Button';

const HamburgerBar = () => {
  return (
    <div className='fixed top-18 flex flex-col w-full items-center bg-blue lg:hidden' >
      <Button title='關於我們' styles='py-3 px-3' />
      <Button title='產品列表' styles='py-3 px-3'/>
      <Button title='線上聯繫' styles='py-3 px-3'/>
    </div>
  );
};

export default HamburgerBar;