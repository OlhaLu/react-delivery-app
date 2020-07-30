import React from 'react';
import routes from '../../routes';

const HomePage = () => (
    <>
        <h1>Demo Version Food Web</h1>
        <h3>Glad to see you</h3>
        <span>Please click on open Catalog</span>
        <a href={routes.CATEGORY_PAGE}>catalog</a>
    </>
);


export default HomePage;