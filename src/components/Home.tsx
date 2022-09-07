import classNames from 'classnames/bind'
import styles from '../styles/Home.module.scss'
import { profile } from '../data'
import mail from '../apps/icons/mail.png'
import download from '../apps/icons/download.png'

const cx = classNames.bind(styles)

function Home() {
    return (
        <>
            <div className={cx('container', 'row')}>
                <div className={cx('bg' ,'c-12 l-6')} />
                <div className={cx('profile--title', 'text-120 ff-pfd')}>
                    <div>
                        Hello!
                    </div>
                    <div>
                        I'm {profile.name}
                    </div>
                </div>
                <div className={cx('profile--objective', 'c-12 fs-3 text-180')}>
                    <div className='c-12 l-6'>
                        {profile.objective}
                    </div>
                </div>
                <div className={cx('profile--contact', 'c-12 l-4 fs-3 text-120')}>
                    <button className='c-6'>
                        <a className={cx('profile--mail')} href={`mailto:${profile.email}`}>
                            <div className={cx('profile--mail__icon')}>
                                <img style={{width: '100%', height: '100%'}} src={mail} alt="" />
                            </div>
                            <div>
                                Email me
                            </div>
                        </a>
                    </button>
                    <a
                        className={cx('profile--download', 'c-6')}
                        href='../apps/files/CVE.pdf'
                        download='CVE.pdf'
                    >
                        <div className={cx('profile--download__icon')}>
                            <img style={{width: '100%', height: '100%'}} src={download} alt="" />
                        </div>
                        <div className={cx('profile--download__text')}>
                            Download CV
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home;