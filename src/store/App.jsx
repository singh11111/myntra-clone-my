import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Fetchitems from '../components/Fetchitems';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';

function App() {
    const fetchStatus = useSelector((store) => store.fetchStatus);

    return (
        <>
            <Header />
            <Fetchitems />
            {fetchStatus.currentlyFetching ? <Loading /> : <Outlet />}
            <Footer />
        </>
    );
}

export default App;

