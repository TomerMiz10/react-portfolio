import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import { applicationRoutes } from '../utils/constants';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path={applicationRoutes.HOME} index element={<Home />} />
            <Route path={applicationRoutes.ABOUT} element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
);

export default AppRoutes;