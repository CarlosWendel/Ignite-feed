import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content,onDeleteComment}) {
    const[likeCount, setLikeCount] = useState(0);

    function handleDeletComment(){

        onDeleteComment(content)
    }
    function handleLikeComment(){
        setLikeCount((state)=>{
            return state + 1

        });
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/CarlosWendel.png" />

            <div className={styles.commentoBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Wendel</strong>
                            <time title='09 de janeiro ás 09:36h' dateTime="2025-01-09 09:36:00">
                                About 1h ago
                            </time>
                        </div>
                        <button onClick={handleDeletComment} title='delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                       {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Applaud <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}