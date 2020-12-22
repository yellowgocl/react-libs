import React from 'react'
import { test } from 'cta-theme-utils'
import { Button } from 'antd'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  const text1 = test() + text
  return (
    <div className={styles.test}>
      <Button type='primary'>antd button</Button>
      Example Component: {text1}
    </div>
  )
}
