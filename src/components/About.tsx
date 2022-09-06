import React from 'react'
import IMG from '../apps/images/IMG.jpg'
import star from '../apps/icons/star.svg'
import classNames from 'classnames/bind'
import styles from '../styles/About.module.scss'
import { profile } from '../data'

const cx = classNames.bind(styles)

const value = {
    Potential: profile.potential,
    Intelligent: profile.intelligent,
    Knowledge: profile.knowledged,
}

function About() {

    console.log()

  return (
    <>
        <div id='about' className={cx('container')}>
            <div className={cx('wrapper', 'row')}>
                <div className={cx('profile', 'row c-12 l-9')}>
                    <div className='text-180'>
                        <div className='row'>
                            <div className={cx('profile--quotes', 'c-3 m-2 ff-pfd')}>
                                ,,
                            </div>
                            <div className='c-9 m-10 ff-pfd'>
                                <div className='fs-1 fw-bold'>
                                    {profile.name}
                                </div>
                                <div className='fs-2'>
                                    {profile.job}
                                </div>
                                <div className='fs-2 fw-bold'>
                                    {profile.birth}
                                </div>
                            </div>
                        </div>
                        <div className={cx('profile--descripte', 'row')}>
                            <div className='c-12 m-6 l-4'>
                                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={IMG} alt="" />
                            </div>  
                            <div className={cx('profile--content', 'fs-3 fw-bold c-12 m-6 l-8')}>
                                {profile.descripte}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='c-12 l-2'>
                    <ul className='ff-pfd text-120'>
                        {Object.entries(value).map(item => (
                            <li className={cx('level')} key={item[0]}>
                                <div className='fs-1 fw-bold'>
                                    {item[0]}
                                </div>
                                <div className={cx('level--content')}>
                                    <div className={cx('level--mark', 'row c-8')}>
                                        {Array.from(Array(item[1]).keys()).map(() => (
                                            <div className={cx('level--mark__icon', 'c-2')}>
                                                <img style={{width: '100%', height: '100%'}} src={star} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='c-4 fs-1 fw-bold'>
                                        /5.0
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default About