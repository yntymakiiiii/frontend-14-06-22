import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Popular from "./components/pages/Popular";
import Home from "./components/pages/Home";




function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/popular'} element={<Popular/>}/>
            </Routes>

        </div>
    );
}

export default App;
