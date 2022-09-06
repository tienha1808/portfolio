import Header from './Header';
import { ReactElement } from 'react';

function Layout({children}: {children: Array<ReactElement>}) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default Layout;