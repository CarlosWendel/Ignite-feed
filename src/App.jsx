
import { useState } from 'react'
import './global.css';
import { Header } from './componets/Header';
import { Post } from './Post.jsx';
import styles from './App.module.css';
import { Sidebar } from './componets/Sidebar.jsx';




export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Carlos Wendel"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Post
            author="Pedro Bastos"
            content="Accusamus, recusandae. Dolore dicta quibusdam repellendus.."
          />
        </main>
      </div>
    </div>
  )
}


