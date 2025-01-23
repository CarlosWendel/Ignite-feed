
import { useState } from 'react'

import { Header } from './componets/Header';
import { Post } from './componets/Post.jsx';
import { Sidebar } from './componets/Sidebar.jsx';

import './global.css';
import styles from './App.module.css';



const posts = [
  {
    id: 1,
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
    id: 2,
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
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
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


