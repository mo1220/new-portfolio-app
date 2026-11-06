import styles from '../../styles/Style.module.scss';
import About from './about/about';
import PortfolioComponent from './portfolio/portfolio';

export default function Main() {
  return (
    <div className={styles.main_content}>
      <About />
      <PortfolioComponent />
    </div>
  );
}
