import styles from './Part.module.scss'

// eslint-disable-next-line react/prop-types
export default function Part({ children }) {
  return <div className={styles.part}>{children}</div>
}
