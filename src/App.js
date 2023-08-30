import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {publicRoutes.map((item, index) => {
                        let Layout = DefaultLayout;
                        if (item.layout === null) {
                            Layout = Fragment;
                        } else if (item.layout) {
                            Layout = item.layout;
                        }
                        const Comp = item.comp;
                        return (
                            <Route
                                path={item.path}
                                element={
                                    <Layout>
                                        <Comp />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
