import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import style from './Loading.module.css'
const Loading = () => {
  return (
    <div className={style.wrapper}>
      <CircularProgress color="success" />
    </div>
  )
}

export default Loading
