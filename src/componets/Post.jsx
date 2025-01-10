import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/CarlosWendel.png" />
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
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <a href=''>👉 jane.design/doctorcare</a></p>
                <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
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