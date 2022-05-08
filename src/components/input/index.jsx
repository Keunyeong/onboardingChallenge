import styles from './Input.module.scss'
import { useState } from 'react'
import { FalseIcon, OffEye, OnEye, TrueIcon } from '../../assets/svgs'
import cn from 'classnames'
// eslint-disable-next-line react/prop-types
export default function Input() {
  const [email, setEmail] = useState('')
  const [PW, setPW] = useState('')
  const [isEmail, setIsEmail] = useState(false)
  const [pwType, setPwType] = useState('password')
  const handleEmailInputChange = (e) => {
    const inputEmail = e.currentTarget.value
    setEmail(inputEmail)
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmail)) {
      setIsEmail(true)
    } else {
      setIsEmail(false)
    }
  }

  const handlePWInputChange = (e) => {
    const inputPW = e.currentTarget.value
    setPW(inputPW)
  }

  const handleOnEyeClick = () => {
    if (pwType === 'password') {
      setPwType('text')
    } else {
      setPwType('password')
    }
  }
  return (
    <>
      <div className={styles.inputBox}>
        <input
          type='text'
          className={styles.inputText}
          value={email}
          placeholder='E-mail'
          onChange={handleEmailInputChange}
        />
        <div className={styles.isForm}>{email !== '' && (isEmail ? <TrueIcon /> : <FalseIcon />)}</div>
      </div>
      <div className={styles.inputBox}>
        <input
          type={pwType}
          className={styles.inputText}
          value={PW}
          placeholder='Password'
          onChange={handlePWInputChange}
          autoComplete='off'
        />
        <div className={cn(styles.isForm, styles.pw)} onClick={handleOnEyeClick} aria-hidden>
          {pwType === 'password' ? <OffEye /> : <OnEye />}
        </div>
      </div>
    </>
  )
}
