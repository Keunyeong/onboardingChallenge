import Dropdown from '../components/dropdown'
import Input from '../components/input'
import Main from '../components/main'
import Part from '../components/part'
import Slider from '../components/slider'
import Tab from '../components/tab'
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
          <Slider />
        </Part>
        <Part>
          <H1>Toggle</H1>
          <Toggle />
        </Part>
        <Part>
          <H1>Tab</H1>
          <Tab />
        </Part>
        <Part>
          <H1>Input</H1>
          <Input />
        </Part>
      </Main>
    </div>
  )
}

export default App
