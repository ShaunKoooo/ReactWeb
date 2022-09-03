import '../css/styles.scss';

const Button = ({title, styles}) => {
  return (
    <button className={styles} onClick={() => {console.log('111')}}>{title}</button>
  );
};

export default Button;