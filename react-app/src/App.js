import React, { Suspense, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import FlashMessage from 'react-flash-message'

import Header from './components/Header';
import Progress from './components/Progress';
import Landing from './components/Landing'
import Generate from './components/Generate';
import Signup from "./components/Signup";
import Signin from "./components/Signin"

import AuthState from './contexts/AuthState';
import { AuthContext } from './contexts/AuthContext';
const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

function App() {
    const auth=useContext(AuthContext)
    const isLoggedIn=true
    return (
        <AuthState>
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header/>
                    <Suspense fallback={<Progress />}>
                        <Routes>
                            <Route path="/auth/signin" element={<Signin />}/>
                            <Route path="/auth/signup" element={<Signup/>} />
                            <Route path="/itinerary" element={<Generate />} />
                            <Route path="/" element={<Landing />} /> 
                        </Routes>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
        </AuthState>
    )
}

export default App;