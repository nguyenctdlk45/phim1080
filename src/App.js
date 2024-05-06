import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import DefaultLayout from './layout/default-layout';
import { PublicRoutes } from './components/routes';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout === null) {
                        Layout = Fragment;
                    } else if (route.layout) {
                        Layout = route.layout;
                    }
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
