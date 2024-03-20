import { aside_list } from "../../app/shared/menu/menu";
import styles from '../../styles/Style.module.scss';

export default function Header(){
    return (
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src="../vercel.svg"></img>
          </div>
          <nav className={styles.header_nav}>
            <ul>
              {aside_list.map((item, i) => (
              <li key={i}>
                <span className="menu_item" dangerouslySetInnerHTML={{ __html: item.icon + item.name}}></span>
              </li>
                
              )
            )}
            </ul>
          </nav>
          <div className={styles.header_profile}>
              <span>김미옥</span>
        </div>
        </header>

    )
}