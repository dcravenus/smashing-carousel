import React from 'react';
import logo from './logo.svg';
import './App.css';

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css';

function App() {
    return (
        <div className="App">
            <AwesomeSlider>
                <div>
                    <iframe src="https://giphy.com/embed/y5GI8at3OFxnO" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div>
                    <iframe src="https://giphy.com/embed/zSSwv96d4pb8c" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div>
                    <iframe src="https://giphy.com/embed/uHBmHeA1IM4V2" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
            </AwesomeSlider>
        </div>
    );
}

export default App;
