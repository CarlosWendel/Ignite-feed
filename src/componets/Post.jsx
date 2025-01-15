import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(props) {
    console.log(props)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://github.com/CarlosWendel.png" />
                    <div className={styles.authorInfo}>
                        <strong>
                            Carlos Wendel
                        </strong>
                        <span>
                            Web Developer
                        </span>
                    </div>
                </div>
                <time title='09 de janeiro ás 09:36h' datetime="2025-01-09 09:36:00">published 1 hour ago </time>
            </header>
            <div className={styles.content}>
                
            </div>

                <form className={styles.commentForm}>
                    <strong>
                        Deixe seu feedback
                    </strong>
                    <textarea
                        placeholder='Deixe um comentário'
                    />
                    <footer>
                        <button type='submit'>Comentário</button>
                    </footer>

                </form>
                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
        </article>
    )
}