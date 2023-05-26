import React, { memo, useEffect, useState } from 'react'
import KRequest from '@/services'


const Home = memo(() => {

  const [highScore, setHighScore] = useState({})
  
  useEffect(() => {
    KRequest.get({ url: "/home/highscore" }).then((res) => {
      setHighScore(res)
    });
  }, [])

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h2>{highScore.subtitle}</h2>
      <ul>
        {
          highScore?.list && highScore.list.map( item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  )
})

export default Home