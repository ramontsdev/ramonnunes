import styles from './styles.module.css'
import { TiltComponent } from '../Tilt'

type Props = {
  Icon: JSX.Element
  title: string
}

export const Technology = ({ Icon, title }: Props) => {

  return (
    <TiltComponent options={{ max: 77, scale: 1.3, perspective: 3000 }}>
      <div className={styles.techContainer}>
        <div style={{
          borderRadius: '50px',
          background: 'linear-gradient(225deg, #cacaca, #f0f0f0)',
          boxShadow: 'inset -20px 20px 60px #bebebe, inset 20px -20px 60px #ffffff'
        }}
          className={styles.techCircle}
        >
          {Icon}
        </div>
        <h2 className={styles.techHeading}>{title}</h2>
      </div>
    </TiltComponent>
  )
}