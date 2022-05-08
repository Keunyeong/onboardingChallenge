import styles from './Tab.module.scss'
import { useState } from 'react'
import classnames from 'classnames'
// eslint-disable-next-line react/prop-types
export default function Tab() {
  const [slider, setSlider] = useState(0)
  const handleMenuClick = (e) => {
    const { num } = e.currentTarget.dataset
    setSlider(Number(num))
  }
  return (
    <div className={styles.tab}>
      <div className={styles.menuBox}>
        <div
          data-num='0'
          className={classnames(styles.menuText, { [styles.selected]: slider === 0 })}
          onClick={handleMenuClick}
          aria-hidden
        >
          HOME
        </div>
        <div
          data-num='1'
          className={classnames(styles.menuText, { [styles.selected]: slider === 1 })}
          onClick={handleMenuClick}
          aria-hidden
        >
          SCHOOL
        </div>
        <div
          data-num='2'
          className={classnames(styles.menuText, { [styles.selected]: slider === 2 })}
          onClick={handleMenuClick}
          aria-hidden
        >
          STORE
        </div>
        <div
          className={classnames(
            styles.menuSlider,
            { [styles.slider2]: slider === 2 },
            { [styles.slider1]: slider === 1 },
            { [styles.slider0]: slider === 0 }
          )}
        />
      </div>
    </div>
  )
}
