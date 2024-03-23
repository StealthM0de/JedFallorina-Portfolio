import { RotateLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <RotateLoader color="#fca311" />
    </div>
  );
};
