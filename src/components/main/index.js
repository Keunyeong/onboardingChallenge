import styles from './Main.module.scss'

// eslint-disable-next-line react/prop-types
export default function Main({ children }) {
  return <div className={styles.main}>{children}</div>
}
