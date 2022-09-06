import classNames from "classnames/bind";
import styles from '../styles/Header.module.scss';

const cx = classNames.bind(styles)

const navbar = [
    {
        id: 0,
        name: 'Home',
        path: '/'
    },
    {
        id: 1,
        name: 'About',
        path: '#about'
    },
    {
        id: 2,
        name: 'Projects',
        path: '#projects'
    }
]

function Header() {
    return (
        <>
            <header className={cx('container', 'row')}>
                <div className={cx('header--brand', 'c-5 m-3 l-4')}>
                    <a className='fs-1 fw-bold' href='/'>
                        #tienha
                    </a>
                </div>
                <ul className={cx('header--navbar', 'c-12 m-5 l-4 row')}>
                    {navbar.map(item => (
                        <li className='l-4'>
                            <a className='fs-3' href={item.path}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={cx('header--contact', 'c-5 m-3 l-4')}>
                    <button className={cx('header--contact__btn')}>
                        <a className='fs-3' href='#contact'>
                            Contact Me
                        </a>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;