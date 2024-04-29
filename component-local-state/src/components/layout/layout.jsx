import style from './layout.module.css'

export function Layout({children}) {
  return (
    <div className={style["layout"]}>
      <header className={style["header"]}>
        <p>{import.meta.env.VITE_APP_TITLE}</p>
      </header>

      <div className={style["main"]}>
        {children}
      </div>

      <footer className={style["footer"]}>
        <p>Kodehodet</p>
        <div className={style["company-link"]}>
          <a target='_blank' referrerPolicy='no-referrer' href="https://jobloop.no">Jobloop</a>
        </div>
      </footer>
    </div>
  )
}