import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Private from './components/Private';
import TouristsSportDetails from './components/TouristsSportDetails';
import Login from './components/Login';
import Home from './components/Home';
import { AuthProvider } from './components/AuthProvider/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/sportDetails/:id" 
                        element={
                            <Private>
                                <TouristsSportDetails />
                            </Private>
                        } 
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
