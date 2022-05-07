import styles from './Toggle.module.scss'
import { useState } from 'react'
import classnames from 'classnames'

// eslint-disable-next-line react/prop-types
export default function Toggle() {
  const [selected, setSelected] = useState(false)
  const handleToggleClick = () => {
    setSelected((prev) => !prev)
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.toggle} onClick={handleToggleClick}>
      <div className={classnames(styles.text, { [styles.selected]: !selected })}>LEFT</div>
      <div className={classnames(styles.text, { [styles.selected]: selected })}>RIGHT</div>
      <div className={classnames(styles.selectBar, { [styles.selected]: selected })} />
    </div>
  )
}
