import React from 'react'
import classNames from 'classnames/bind'
import styles from '../styles/Contact.module.scss'
import { profile } from '../data'

const cx = classNames.bind(styles)

const contact = {
    phone: profile.phone,
    email: profile.email,
    address: profile.address,
}

function Contact() {
    return (
        <>
            <div id='contact' className={cx('container')}>
                <div className={cx('wrapper', 'row')}>
                    <div className={cx('messenger', 'c-12 l-5 text-120')}>
                        Let's Contact Me
                    </div>
                    <div className='c-12 l-4'>
                        <ul className='text-120'>
                            {Object.entries(contact).map(item => (
                                <li className={cx('contact')}>
                                    <div className='fs-1'>
                                        My {item[0]}:
                                    </div>
                                    <div className={cx('contact--content' , 'fs-2')}>
                                        {
                                            item[0] === 'phone'
                                            ?
                                            <a
                                                className={cx('contact--content__link')}
                                                href={`tel:+84${item[1]?.slice(1)}`}
                                            >
                                                {item[1]}
                                            </a>
                                            :
                                            item[0] === 'email'
                                            ?
                                            <a
                                                className={cx('contact--content__link')}
                                                href={`mailto:${item[1]}`}
                                            >
                                                {item[1]}
                                            </a>
                                            :
                                            item[1]
                                        }
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={cx('footer', 'fs-3 text-180')}>
                    I'm glad to work with you | <span style={{color: 'var(--text-color)'}}>Thank you!</span>
                </div>
            </div>
        </>
    )
}
export default Contact