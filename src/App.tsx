import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <Sidebar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  )
}

export default App