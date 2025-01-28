import { format, formatDistanceToNow } from 'date-fns';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Post(props) {
    const [comments,setComments] = useState([
       'Very cool post, huh? '
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'")
    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        addSuffix: true
    })

    function handleCreateNewComment(){
        event.preventDefault()

        
        setComments([...comments, newCommentText ]);
        setNewCommentText('');
       
    }

    function handleNewCommentChanger(){
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        //imutabilidade -> as variavéis não sofrem mutações, nós criamos um novo espaço na memória.

        const  commentsWithoutDeletedOne = comments.filter( comment=>{
            return comment != commentToDelete;
        })
        
        setComments(commentsWithoutDeletedOne);
    }
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
                <time title={publishedDateFormated} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {props.content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit = {handleCreateNewComment} className={styles.commentForm}>
                <strong>
                    Deixe seu feedback
                </strong>
                <textarea
                name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChanger}
                />
                <footer>
                    <button type='submit'>Comentário</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment=>{
                    return <Comment  key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}