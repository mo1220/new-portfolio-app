import { useState } from "react";
import { aside_list } from "../../app/shared/menu/menu";
import styles from '../../styles/Style.module.scss';

export default function Header(){
  const [hoverState, setHoverState] = useState(false);
  
  const renderChildNav = (nav) => {
    return nav.map((d) =>`<li>${d.name}</li>`).join('');
  }

    return (
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src="../vercel.svg"></img>
          </div>
          <nav className={styles.header_nav}>
            <ul className="nav_lv_1" onMouseEnter={() => setHoverState(!hoverState)}>
              {aside_list.map((item, i) => (
              <li key={i}>
                <span className="menu_item" dangerouslySetInnerHTML={{ __html: item.icon + item.name}}></span>


                {/* <ul>
                {
                  item.children.length > 0 && <frameElement dangerouslySetInnerHTML={{ __html: renderChildNav(item.children)}}></frameElement>
                }

                </ul>                               */}
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