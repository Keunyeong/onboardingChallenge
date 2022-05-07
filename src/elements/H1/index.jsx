import styles from './H1.module.scss'

// eslint-disable-next-line react/prop-types
export default function H1({ children }) {
  return <h1 className={styles.h1}>{children}</h1>
}
