import styles from './Slider.module.scss'
import { useState } from 'react'
import classnames from 'classnames'

const RATEARRAY = [1, 25, 50, 75, 100]
// eslint-disable-next-line react/prop-types
export default function Slider() {
  const [range, setRange] = useState(1)
  const hanldeRangeChange = (e) => {
    const rate = e.currentTarget.value
    if (Number(rate) === 0) {
      setRange(1)
    } else {
      setRange(rate)
    }
  }
  const handleRangeClick = (e) => {
    const { ratenum } = e.currentTarget.dataset
    setRange(ratenum)
  }
  return (
    <>
      <div>{range}%</div>
      <input type='range' className={styles.sliderBox} value={range} onChange={hanldeRangeChange} />
      <div className={styles.sliderPoint}>
        <button type='button' className={styles.point1} data-ratenum={1} onClick={handleRangeClick}>
          1%
        </button>
        <button type='button' className={styles.point25} data-ratenum={25} onClick={handleRangeClick}>
          25%
        </button>
        <button type='button' className={styles.point50} data-ratenum={50} onClick={handleRangeClick}>
          50%
        </button>
        <button type='button' className={styles.point75} data-ratenum={75} onClick={handleRangeClick}>
          75%
        </button>
        <button type='button' className={styles.point100} data-ratenum={100} onClick={handleRangeClick}>
          100%
        </button>
      </div>
    </>
  )
}
