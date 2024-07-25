import './style.css'
import { setupCounter } from './counter.ts'
import { namesList } from './topics/01-basic-types.ts'
// import './topics/03-functions.ts'
// import './topics/04-homework-types.ts'
// import './topics/05-basic-destructuring.ts'
// import './topics/06-function-destructuring.ts'
import './topics/07-import-export.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div>
      ${namesList().map(element => `<span>${element}</span><br>`).join(' ')}
    </div>
    <p class="read-the-docs">
      Hecho por <a>rodrigo</a>
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
