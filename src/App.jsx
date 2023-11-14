import { TwitterCard } from "./TwitterCard";
import "./app.css";


function App() {

  return (
    <>
      <div className="app">
        <TwitterCard initialIsFollowing={true} name="ross" user="mr.unagi"/>
        <TwitterCard name="chandler" user="chan.muriel"/>
        <TwitterCard name="joey" user="joes"/>
        <TwitterCard name="monica" user="mona"/>
        <TwitterCard name="phoebe" user="regina.phalange"/>
        <TwitterCard initialIsFollowing={true} name="rachel" user="we.were.NOT.on.a.break"/>
      </div>
    </>
  )
}

export default App
