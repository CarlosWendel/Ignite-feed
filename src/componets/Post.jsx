import { format, formatDistanceToNow } from 'date-fns';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(props) {
    const publishedDateFormated = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'")
    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        addSuffix: true
    })
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={props.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>
                            {props.author.name}
                        </strong>
                        <span>
                            {props.author.role}
                        </span>
                    </div>
                </div>
                <time title={publishedDateFormated} datetime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {props.content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p><a href="">{line.content}</a></p>
                    }
                })}
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
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}