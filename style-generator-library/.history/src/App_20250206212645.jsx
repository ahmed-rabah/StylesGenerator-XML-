
//import './App.css'
import Header from "./Header";
import Main from "./main";

export default function App() {
  return (
    <>
      <Header />
      <input type="text" value="x" onchange={(e) => { e.taget.value = value }} />
      <Main />
    </>
  )
}
