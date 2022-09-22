import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://classic.exame.com/wp-content/uploads/2022/08/one-piece.jpg?quality=50&strip=info&w=500" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/daniel-zanoni.png" />
                <strong>Daniel Zanoni</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>    
    );
}