import Dropdown from '../components/dropdown'
import Main from '../components/main'
import Part from '../components/part'
import Toggle from '../components/Toggle'
import H1 from '../elements/H1'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Main>
        <Part>
          <H1>Dropdown</H1>
          <Dropdown />
        </Part>
        <Part>
          <H1>Slider</H1>
        </Part>
        <Part>
          <H1>Toggle</H1>
          <Toggle />
        </Part>
      </Main>
    </div>
  )
}

export default App
