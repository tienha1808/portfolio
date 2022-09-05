import React, { ReactElement } from "react";
import Header from "./Header";
import classNames from "classnames/bind";
import styles from "../styles/Layout.module.scss"

const cx = classNames.bind(styles)

function Layout({children}: {children: ReactElement}) {
    return (
        <div className={cx('container', 'shadow')}>
            <div className={cx('wrapper', 'shadow')}>
                <Header />
                <div className={cx('wrapper--content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;