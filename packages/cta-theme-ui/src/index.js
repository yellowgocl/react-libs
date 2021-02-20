import React from 'react'
import { test } from 'cta-theme-utils'
import { on, off } from '@cta-theme/tools'
// import { Button } from 'antd'
import styles from './styles.module.css'
// import './tailwind.css';
export const ExampleComponent = ({ text }) => {
  on()
  off()
  const text1 = test() + text
  const [inputValue, setInputValue] = React.useState('')
  const [nameValue, setNameValue] = React.useState('')
  const handleSubmit = () => {
    console.info(window.btoa(inputValue))
  }
  return (
    <div className={styles.test}>
      <div className='flex'>
        <div>a</div>
        <div>b</div>
      </div>
      Example Component: {text1}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='adf'
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value)
          }}
        />
        <input
          type='password'
          value={inputValue}
          onChange={(e) => {
            console.info(e.target.value)
            setInputValue(e.target.value)
          }}
        />
        <button type='submit'>提交</button>
      </form>
    </div>
  )
}
