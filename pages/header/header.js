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
            <img src="/assets/images/logo/logo2.png"></img>
          </div>
          <nav className={styles.header_nav}>
            <ul className="nav_lv_1" onMouseEnter={() => setHoverState(!hoverState)}>
              {aside_list.map((item, i) => (
              <li className="nav_item" key={i}>
                <div className="menu_item_lv1">{item.name}</div>
                   {
                  item.children.length > 0 && <ul className="column">
                      {
                        item.children.map((lv1, i) => (<li className="menu_item_lv2" key={i}>{lv1.name}</li>))
                      }
                  </ul>
                }

                
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