import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import beastsJson from './Beast/beasts.json'
import DropDownFilter from './components/DropDownFilter/DropDownFilter.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  // const [beasts, setBeasts] = useState(beastsJson);
  const [visibleBeasts, setVisibleBeasts] = useState(beastsJson);
  return (
    <main>
      <Header title='Horned Beast'/>
      <DropDownFilter beasts={beastsJson} setVisibleBeasts={setVisibleBeasts} /> 
      <Gallery beasts={visibleBeasts} />
      <Footer content='&copy; Anthony Blanton' />
    </main>
  )

}

export default App;