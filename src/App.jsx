import style from './App.module.scss'
import { Garland } from './Garland/Garland'
import { Garland2 } from './Garland2/Garland2'
import { Garland3 } from './Garland3/Garland3'
import { Garland4 } from './Garland4/Garland4'
function App() {
  return (
    <div className={style.container}>
      <Garland />
      <Garland2 />
      <Garland3 />
      <Garland4 />
    </div>
  )
}

export default App
