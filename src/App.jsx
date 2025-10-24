// ex 1
// import React from 'react';
// import Time from './Time'; // importer le composant Time

/*
function App() {
  return (
    <div>
      <h1>Mon horloge React</h1>
      <Time />  // afficher le composant Time
    </div>
  );
}

export default App;
*/
//ex2
/*import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;*/

// ex4
/*import React from 'react';
import UserList from './UserList';

function App() {
  return (
    <div>
      <h1>TP - Appel API avec useEffect</h1>
      <UserList />
    </div>
  );
}

export default App;*/
// src/App.jsx
import React from 'react';
import { UserProvider } from './context/UserContext';
import UserProfile from './components/UserProfile';
import Notifications from './components/Notifications';
import NotificationCounter from './components/NotificationCounter';

function App() {
  return (
    <UserProvider>
      <div style={{ fontFamily: 'Arial', padding: 20 }}>
        <h1>Mon Application React - TP Hooks</h1>
        <UserProfile />
        <Notifications />
        <NotificationCounter />
      </div>
    </UserProvider>
  );
}

export default App;


