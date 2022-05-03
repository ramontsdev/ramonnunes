
import styles from '../styles/home.module.css'
import { Technology } from '../components/Technology'
import { technologies } from '../data/technologies'

export default function Index() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h1 className={styles.heading}>
          Ramon Nunes
        </h1>
        <h3 className={styles.subtitle}>
          Desenvolvedor JavaScript
        </h3>
      </div>

      <main className={styles.main}>

        {
          technologies.map((tech, index) => (
            <Technology
              key={index}
              Icon={tech.logo}
              title={tech.name}
            />
          ))
        }

      </main>
    </div>
  )
}
