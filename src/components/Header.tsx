import classNames from 'classnames/bind'
import styles from '../styles/Header.module.scss'
import reactIcon from '../apps/skills/react.png'
import globalIcon from '../apps/icons/global.png'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function Header() {

    const [ date, setDate ]: [ Date | undefined, Dispatch<SetStateAction< Date | undefined >>] = useState()

    useEffect(() => {
        const timeInterval = setInterval(() => {
            const time = new Date()
            setDate(time)
        }, 1000)
        return () => clearInterval(timeInterval)
    }, [date])

    return (
        <>
            <header className={cx('container', 'navbar fs-3')}>
                <div className={cx('navbar--start', 'c-12 m-6 l-2')}>
                    <div className={cx('navbar--icon')}>
                        <img style={{width: '100%', height: '100%'}} src={reactIcon} alt="" />
                    </div>
                    ReactJS.OS
                </div>
                <div className={cx('navbar--center', 'c-0 m-0 l-6 fs-3')}>
                    CONFIG {date?.getFullYear()} *** {date?.getMonth()} {date?.getDay()} *** LIVE FROM VN
                </div>
                <div className={cx('navbar--end', 'c-12 m-6 l-3')}>
                    <div className='c-9 m-8 l-8'>
                        {date?.getHours()}:{date?.getMinutes()}:{date?.getSeconds()} (GMT + 7)
                    </div>
                    <div className={cx('navbar--local', 'c-3 m-4 l-4')}>
                        <div className={cx('navbar--icon')}>
                            <img style={{width: '100%', height: '100%'}} src={globalIcon} alt="" />
                        </div>
                        VN
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;