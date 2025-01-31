
//import { useState } from 'react'

import { Header } from './componets/Header.js';
import { Post } from './componets/Post.js';
import { Sidebar } from './componets/Sidebar.js';
import { PostProps } from "./componets/Post"; 



import './global.css';
import styles from './App.module.css';



const posts: PostProps[] = [
  {
    key: 1,
    author: {
      avatarUrl: 'https://github.com/CarlosWendel.png',
      name: 'Carlos Wendel',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: '👉 jane.design / doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')

  },
  {
    key: 2,
    author: {
      avatarUrl: 'https://github.com/Torres-TI.png',
      name: 'Pedro Bastos',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: '👉 jane.design / doctorcare' },
    ],
    publishedAt: new Date('2025-01-14  20:00:00')

  }
];

export function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=> {
            return (
            <Post 
              key={post.key}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  )
}


