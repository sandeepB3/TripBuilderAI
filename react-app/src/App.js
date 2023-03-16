import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';
import Landing from './components/Landing'
import Generate from './components/Generate';
import Signup from "./components/Signup";
import Signin from "./components/Signin"


const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Routes>
                            <Route path="/auth/signin" element={<Signin isSignedIn/>} />
                            <Route path="/auth/signup" element={<Signup isSignedIn />} />
                            <Route path="/itinerary" element={<Generate />} />
                            <Route path="/" element={<Landing />} />
                        </Routes>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App;