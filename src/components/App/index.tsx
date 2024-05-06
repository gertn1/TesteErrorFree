import { useState } from 'react';

import ContentContainer from './Container';
import { Sidebar } from './Sidebar';
import { Topo } from './Topo';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Topo onHamburguerClick={toggleSidebar} />
      <div style={{ display: 'flex' }}>
        <Sidebar isOpen={sidebarOpen} onHamburgerClick={toggleSidebar} />
        <ContentContainer isOpen={sidebarOpen} />
      </div>
    </>
  );
}

export default App;
