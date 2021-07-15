import React from 'react';
 
import SimpleTestPage from './pages/test/SimpleTestPage';

function App() {

    let router_map = {
         "/test/simpletest":SimpleTestPage
          
    };
     
    for (const urlkey in router_map) {
        if (window.location.pathname===urlkey) {
            const Page = router_map[urlkey];
            return <Page />;
        }
    }

    return <SimpleTestPage />;
}

export default App;
