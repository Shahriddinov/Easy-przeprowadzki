import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./App";
import "./assets/style/global.scss";
import "./assets/style/header.scss";
import "./assets/style/footer.scss";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="">
        {/*<Provider store={store}>*/}
            <Routes/>
        {/*</Provider>*/}
    </Suspense>
);
