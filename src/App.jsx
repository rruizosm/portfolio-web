import './App.css'
import './pages/portada/Portada'
import Portada from './pages/portada/Portada'
import Biography from './pages/biography/Biography'
import Academic from './pages/academic/Academic.jsx'
import Servicenow from './pages/servicenow/Servicenow.jsx'
import Contact from './pages/contact/Contact.jsx'
import Hobbies from './pages/hobbies/Hobbies.jsx'
import Navbar from './element/navbar/Navbar.jsx'

function App() {

  return (
    <section className='app_container'>
      <Navbar />
      <section className='app_section'>
        <section id='portada'><Portada /></section>
        <section id='biography'><Biography /></section>
        <section id='academic'><Academic /></section>
        <section id='servicenow'><Servicenow /></section>
        <section id='hobbies'><Hobbies /></section>
        <section id='contact'><Contact /></section>
      </section>
    </section>
  )
}

export default App
