import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useCallback } from 'react'
import Editor from '../components/editor'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')
  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Markdown Editor</title>
        <meta name="description" content="Write notes in markdown syntax to level up your productivity." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} min-h-screen flex flex-col gap-2`}>
        <h4>Clojure Editor</h4>
        <div className='flex flex-1 w-full gap-4'>
          <Editor initialDoc={doc} onChange={handleDocChange} />
        </div>
      </main>
    </div>
  )
}

export default Home
