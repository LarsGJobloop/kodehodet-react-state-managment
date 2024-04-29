import { Layout } from './components/layout/layout'
import { CounterBasic } from './components/counterBasic/counterBasic'
import style from './app.module.css'

function App() {
  return (
    <Layout>
      <section className={[style["section"], style["stateful-components"]].join(" ")}>
        <header>
          <h2>Simple State Example</h2>
          <p>This is the introduction to how to set up statefull components in React</p>

          <ul>
            <li>What a React Hook are</li>
            <li>How to setup stateful components</li>
          </ul>
        </header>

        <CounterBasic />

        <footer>
          <h3>Links:</h3>
          <ul>
            <li>
              <a href="https://react.dev/learn/managing-state">React Learn: Managing State</a>
            </li>
            <li>
              <a href="https://react.dev/reference/react/useState">React.useState</a>
            </li>
          </ul>
        </footer>
      </section>
    </Layout>
  )
}

export default App
