import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "./redux/store.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PersistGate loading={null} persistor={persistor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PersistGate>
)
