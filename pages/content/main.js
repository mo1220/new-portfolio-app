import styles from '../../styles/Style.module.scss';


export default function Content() {
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
    </div>
  )
}
