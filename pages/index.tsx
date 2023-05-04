import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import {useState} from "react";
import {getAnimalDescription} from "../lib/animal";

export default function Home() {
  const [animalDesc, setAnimalDesc] = useState("None");

  function updateAnimal(animalName: string){
    setAnimalDesc(getAnimalDescription(animalName));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Animal Description Thingymajig</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to Animal Description Thingymajig, made by Andy.
        </h1>

        <div>
          <button onClick={() => updateAnimal("rabbit")}>Rabbit</button>
          <button onClick={() => updateAnimal("kiwi")}>Kiwi</button>
          <button onClick={() => updateAnimal("cat")}>Cat</button>
          <button onClick={() => updateAnimal("andy")}>Andy</button>
        </div>

        <p className={styles.description}>
          Get animal descriptions:
        </p>

        <p>{animalDesc}</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
