import { useEffect, useState } from 'react'
import style from './Garland.module.scss'
export function Garland() {
  const [nums, setNums] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      gir()
    }, 1000)

    return () => clearInterval(interval)
  }, [nums])
  function gir() {
    if (nums === 1) {
      setNums(2)
    } else if (nums === 2) {
      setNums(3)
    } else if (nums === 3) {
      setNums(1)
    }
  }

  return (
    <>
      <div
        className={`${
          nums === 1
            ? style.gir1
            : nums === 2
            ? style.gir2
            : nums === 3
            ? style.gir3
            : ''
        }`}
        style={{
          backgroundImage: 'url("/Garland/elemGarland/gir.png")',
          //   "url('http://lh5.googleusercontent.com/-obNunPiVVd4/VJOuk2f29_I/AAAAAAAAE3Y/SOoFIrFTTkk/s800/gerljanda1.png')",
        }}
      >
        <div className={style.light}></div>
      </div>
    </>
  )
}
