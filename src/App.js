import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layout';
import { PublicRoutes } from './components/routes';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
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
