import React from "react"
import {render} from "react-dom"
import App from "./components/App"
//scssのコンパイル
import "./scss/style.scss"
import "./scss/test.scss"

document.write("<div id='root'></div>");

render (
  <App />,
  document.getElementById("root")
)
