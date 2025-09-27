import './App.css'
import Navber from '../components/navber'
import Footer from '../components/footer'
import Main from '../components/main'
import Ticket from '../components/ticket'
import { Suspense } from 'react'

function App() {

  const ticketPromise = async () => {
    const res = await fetch("/data.json");
    return res.json();
  }

  const tickets = ticketPromise();

  return (

    <>
      <Navber > </Navber>


      <Main></Main>
    <Suspense fallback={<div>Loading...</div>}>
      <Ticket tickets={tickets} ></Ticket>
    </Suspense>


      <Footer></Footer>





    </>
  )
}

export default App

