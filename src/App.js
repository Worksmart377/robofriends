import React from 'react';
import 'tachyons';
import CardList from './CardList';
import { robots } from './robots';

function App() {
    return (
        <div className="App">
        <header className="App-header">
                <div>
                    <CardList robots={robots} />
                </div>
        </header>
        </div>
    );
}

export default App;