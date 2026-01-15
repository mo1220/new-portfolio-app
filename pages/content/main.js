import styles from '../../styles/Style.module.scss';
import About from './about/about';
import PortfolioComponent from './portfolio/portfolio';

export default function Main() {
  const text = 'Front-End Developer'
  return (
    <div className={styles.main_content}>
      <div className={styles.main_content_top}>
        <div className={styles.main_banner}></div>
        <div className={styles.main_content_top_title}>
          <h1>Hello, <br/>
          I'm 
          <span className="text-effect">
           <b>Front-End Developer</b>
          </span> 
        
          </h1>
        </div>
      </div>

      <About></About>
      <PortfolioComponent></PortfolioComponent>
    </div>
  )
}
