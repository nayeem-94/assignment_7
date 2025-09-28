import './App.css'
import Navber from '../components/navber'
import Footer from '../components/footer'
import Main from '../components/main'
import Ticket from '../components/ticket'
import { Suspense, useState } from 'react'

function App() {

  const ticketPromise = async () => {
    const res = await fetch("/data.json");
    return res.json();
  }

  const tickets = ticketPromise();


  const [progress, setProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  const handelProgress = () => {
    const cnt = progress + 1;
    setProgress(cnt);
  }

  return (

    <>
      <Navber > </Navber>


      <Main progress={progress} setProgress={setProgress}  resolved={resolved} setResolved={setResolved} ></Main>
      <Suspense fallback={<div>Loading...</div>}>
        <Ticket tickets={tickets} progress={progress} setProgress={setProgress}  resolved={resolved} setResolved={setResolved}  ></Ticket>
      </Suspense>


      <Footer></Footer>





    </>
  )
}

export default App

