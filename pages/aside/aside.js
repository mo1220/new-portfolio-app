import { aside_list } from "../../app/shared/menu/menu";
import styles from '../../styles/Style.module.scss';

export default function Aside(){
    return (
      <div className={styles.main_container}>
      <aside>
        <div>
          <ul>
        
            {aside_list.map((item, i) => 
              <li key={i} 
                  dangerouslySetInnerHTML={{ __html: item.icon+item.name}}>
              </li>)
            }
          </ul>
        </div>
      </aside>
      <div className={styles.main_content}></div>
    </div>
    )
}