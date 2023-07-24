import './App.css';

import Signup from './Components/Signup';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import New from './Components/New';
import StudentEntry from './Components/StudentEntry';
import CompanyEntry from './Components/CompanyEntry';
import Recruiters from './Components/Recruiters';
import PlacedStudents from './Components/PlacedStudents';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/new" element={<New />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/StudentEntry" element={<StudentEntry />} />
                    <Route path="/CompanyEntry" element={<CompanyEntry />} />
                    <Route path="/recruiters" element={<Recruiters />} />
                    <Route path="/placements" element={<PlacedStudents />} />
                    <Route path="/samle" element={<sample />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;