import React from 'react';
import 'tachyons';
import CardList from './CardList';
import { robots } from './robots';
import SearchBar from './SearchBar';

function App() {
    return (
        <div className="App tc">
        <header className="App-header">
        <h1>RoboFriends</h1>   
        <SearchBar />    
        <CardList robots={robots} />

        </header>
        </div>
    );
}

export default App;