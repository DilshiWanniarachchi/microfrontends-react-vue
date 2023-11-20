import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Mount function to startup the app
const mount = (element) => {
    ReactDOM.render(
        <App />,
        element
    );
}

// If in development mode & in isolation,
// Call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// We are running through container - export mount function
export {mount};