import React from 'react'
import { test } from 'cta-theme-utils'
// import { Button } from 'antd'
import styles from './styles.module.css'
// import './tailwind.css';
export const ExampleComponent = ({ text }) => {
  const text1 = test() + text
  return (
    <div className={styles.test}>
        <div className='flex'>
            <div>a</div>
            <div>b</div>
        </div>
      Example Component: {text1}
    </div>
  )
}
