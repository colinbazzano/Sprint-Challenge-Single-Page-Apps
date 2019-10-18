import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';

import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <SearchForm />
      <Route path='/characterlist' component={CharacterList}/>
      {/* <CharacterList /> */}
    </main>
  );
}
