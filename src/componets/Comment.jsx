import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://github.com/CarlosWendel.png" />

            <div className={styles.commentoBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Wendel</strong>
                            <time title='09 de janeiro ás 09:36h' datetime="2025-01-09 09:36:00">
                                About 1h ago
                            </time>
                        </div>
                        <button title='delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        Muito bom Devon, parabéns!! 👏👏
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Applaud <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}