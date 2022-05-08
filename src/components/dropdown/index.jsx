import styles from './Dropdown.module.scss'
import { useRef, useState } from 'react'
import { ArrowDown } from '../../assets/svgs'
import classnames from 'classnames'
import useOnClickOutside from '../hooks/useOnClickOutSide'

const CONTENTS = [
  { id: 1, content: 'banana' },
  { id: 2, content: 'apple' },
  { id: 3, content: 'kiwi' },
  { id: 4, content: 'peach' },
  { id: 5, content: 'potato' },
  { id: 6, content: 'melon' },
  { id: 7, content: 'milk' },
]
// eslint-disable-next-line react/prop-types
export default function Dropdown() {
  const [selected, setSelected] = useState('선택')
  const [search, setSearch] = useState('')
  const [list, setList] = useState(CONTENTS)
  const [isShow, setIsShow] = useState(false)
  const dropdownBox = useRef()
  useOnClickOutside(dropdownBox, () => setIsShow(false))

  const handleIsShowClick = () => {
    setIsShow((prev) => !prev)
  }
  const handleListClick = (e) => {
    setSelected(e.currentTarget.dataset.value)
    setIsShow((prev) => !prev)
    setSearch('')
  }

  const handleSearchChange = (e) => {
    setSearch(e.currentTarget.value)
    const newList = CONTENTS.filter((item) => {
      return item.content.includes(e.currentTarget.value)
    })
    setList(newList)
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.showBox}>{selected}</div>
      <button type='button' className={styles.btn} onClick={handleIsShowClick}>
        <ArrowDown className={styles.arrowDown} />
      </button>
      <div className={classnames(styles.dropdownBox, { [styles.isShow]: isShow })} ref={dropdownBox}>
        <input
          type='text'
          className={styles.searchInput}
          placeholder='검색'
          value={search}
          onChange={handleSearchChange}
        />
        <ul className={styles.selectList}>
          {list.length === 0 ? (
            <div className={styles.noText}>없음</div>
          ) : (
            list.map((item) => (
              <button
                type='button'
                className={styles.selectBtn}
                key={`select-list-${item.id}`}
                data-value={item.content}
                onClick={handleListClick}
              >
                {item.content}
              </button>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
