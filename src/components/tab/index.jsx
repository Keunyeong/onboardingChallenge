import styles from './Tab.module.scss'
import { useState } from 'react'
import classnames from 'classnames'
// eslint-disable-next-line react/prop-types
export default function Tab() {
  return (
    <div className={styles.tab}>
      <div className={styles.menuBox}>
        <div className={styles.menuText}>HOME</div>
        <div className={styles.menuText}>SCHOOL</div>
        <div className={styles.menuText}>STORE</div>
      </div>
      <div className={styles.menuSliderBox}>
        <div className={styles.menuSlider} />
      </div>
    </div>
  )
}
