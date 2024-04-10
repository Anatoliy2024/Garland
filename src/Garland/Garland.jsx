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
      document.getElementById('gir').className = style.gir1
      setNums(2)
    } else if (nums === 2) {
      document.getElementById('gir').className = style.gir2
      setNums(3)
    } else if (nums === 3) {
      document.getElementById('gir').className = style.gir3
      setNums(1)
    }
  }
  //   useEffect(() => {
  //     function gir() {
  //       const nums = document.getElementById('nums1').innerHTML
  //       if (nums == 1) {
  //         document.getElementById('gir').className = 'style.gir1'
  //         document.getElementById('nums1').innerHTML = '2'
  //       }
  //       if (nums == 2) {
  //         document.getElementById('gir').className = 'style.gir2'
  //         document.getElementById('nums1').innerHTML = '3'
  //       }
  //       if (nums == 3) {
  //         document.getElementById('gir').className = 'style.gir3'
  //         document.getElementById('nums1').innerHTML = '1'
  //       }
  //     }

  //     const interval = setInterval(function () {
  //       gir()
  //     }, 500)

  //     return () => clearInterval(interval)
  //   }, [])

  return (
    <>
      {/* <button onClick={() => console.log('hi')}>123</button> */}
      <div
        id='gir'
        className={style.gir3}
        style={{
          backgroundImage: 'url("/Garland/elemGarland/gir.png")',
          //   "url('http://lh5.googleusercontent.com/-obNunPiVVd4/VJOuk2f29_I/AAAAAAAAE3Y/SOoFIrFTTkk/s800/gerljanda1.png')",
          height: '62px',
        }}
      >
        <div id='nums1' className={style.light}>
          {nums}
        </div>
      </div>
    </>
  )
}
