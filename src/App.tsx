import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
    {
        id: 1,
        author: {
            name: 'Daniel Zanoni',
            role: 'Web Developer',
            avatarUrl: 'https://github.com/daniel-zanoni.png',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-09-21 11:32:12'),
    },
    {
        id: 2,
        author: {
            name: 'Leonardo Zanoni',
            role: 'Engenheiro Elétrico',
            avatarUrl: 'https://github.com/LeonardoZanoni.png',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-09-21 11:34:03'),
    },
];

export function App() {
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
                        />
                    );
                   })}
                </main>
            </div>
        </div>
    );
}