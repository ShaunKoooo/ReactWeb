import '@/css/styles.scss';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Navbar = (props) => {
  const {onClicked, isOpen} = props;

  return (
    <nav className='sticky top-0 flex flex-row border-b border-black bg-navBackground'>
      <div className='flex-1'>
        <h2 className='py-5 px-5'>AsianSquat</h2>
      </div>
      <button
        className='space-y-1 grid lg:hidden py-5 px-5'
        onClick={() => {
          onClicked(!isOpen);
      }}>
        <FontAwesomeIcon icon={solid('bars')} size="2xl" fixedWidth />
      </button>
      <div className='hidden text-right py-5 px-5 lg:flex'>
        <Button title='關於我們' styles='py-3 px-3' />
        <Button title='產品列表' styles='py-3 px-3' />
        <Button title='線上聯繫' styles='py-3 px-3' />
      </div>
    </nav>
  );
}

export default Navbar;