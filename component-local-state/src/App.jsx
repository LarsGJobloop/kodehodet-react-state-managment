import { Layout } from './components/layout/layout'
import style from './app.module.css'
import { CounterBasic } from './components/counterBasic/counterBasic'
import { CounterHook } from './components/counterHook/counterHook'
import { NoteWidget } from './components/noteWidgetIntro/noteWidgetIntro'
import { NoteWidgetHook } from './components/noteWidgetHook/noteWidgetHook'

function App() {
  return (
    <Layout>
      <div className={style["container"]}>
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

        <section className={[style["section"], style["custom-hooks"]].join(" ")}>
          <header>
            <h2>Setting up a custom hook</h2>
            <p>Here we have the same logic, but this time it's encapsulated inside a seperate hook</p>
            <p>From the outside world (the browser), there are no differences. In technical terms, the public interface of the component is unchanged.</p>

            <ul>
              <li>What a React Hooks are</li>
              <li>How to extract logic into hooks</li>
              <li>What are the arguments for extracting logic into hooks</li>
            </ul>
          </header>

          <section>
            <ul>
              <li>
                <p>Without passing an initial count</p>
                <CounterHook />
              </li>
              <li>
                <p>With a start count</p>
                <CounterHook initialCount={10} />
              </li>
            </ul>
          </section>

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

        <section className={[style["section"], style["widget-example"]].join(" ")}>
          <header>
            <h2>Widget Example</h2>
            <p>Here is a more complex example showcasing how to handle more complex state composed of <em>Arrays</em></p>

            <ul>
              <li>Reference types in state</li>
              <li>Immutable state</li>
              <li>Multiple states</li>
              <li>Controlled Components</li>
            </ul>
          </header>

          <section>
            <NoteWidget />
          </section>

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

        <section className={[style["section"], style["widget-example-hook"]].join(" ")}>
          <header>
            <h2>Widget Example Hook</h2>
            <p>Here we have extracted most of the logic from the note widget into a seperate hook. While this abstraction might be beneficial in some aspects there are tradeoffs that has to be made here.</p>

            <ul>
              <li>Handling structured data in state</li>
            </ul>
          </header>

          <section>
            <NoteWidgetHook />
            <NoteWidgetHook />
          </section>

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
      </div>
    </Layout>
  )
}

export default App
