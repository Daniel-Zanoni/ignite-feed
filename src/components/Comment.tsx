import { useState } from 'react';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
        /*  Sempre que for atualizar uma informação 
            E essa informação depende do valor que ela estava
            No momento anterior ou seja o valor dela mesmo
            É preciso chamar uma arrow funcion passando o
            parâmetro que vai guardar o valor dela anterior
        */
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                src="https://github.com/daniel-zanoni.png" 
                hasBorder={false} 
                alt="" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Zanoni</strong>
                            <time 
                                title="20 de Setembro às 08:43 minutos e 52 segundos" 
                                dateTime="2022-09-21 11:24:31">Cerca de 2h atrás.
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}