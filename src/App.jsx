import React from 'react';

import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import Beast from './Beast/Beast.json'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <main>
      <Header title='Horned Beast'/>
      <Gallery list={Beast} />
      <Footer content='&copy; Anthony Blanton' />
    </main>
  )

}

export default App;