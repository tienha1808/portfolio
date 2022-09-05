import userIcon from '../apps/icons/user.png'
import compIcon from '../apps/icons/comp.png'
import replayIcon from '../apps/icons/replay.png'
import pawcatIcon from '../apps/icons/pawcat.png'
import avatarIMG from '../apps/profile/AnhThe.jpg'
import classNames from 'classnames/bind';
import styles from '../styles/Home.module.scss'
import { tienha } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import Project from './Project'
import { Dispatch, SetStateAction, useState } from 'react'

const cx = classNames.bind(styles)

function Home() {

    const [ project, setProject ]:
    [ any | undefined, Dispatch<SetStateAction< any | undefined >>]
    = useState()

    const handleOpen = (id: number) => {
        setProject(projects[id])
    }

    console.log(project)

    return (
        <>
            <div className={cx('container')}>
                <div className={cx('profile', 'shadow c-12 m-12 l-6')}>
                    <nav className={cx('profile--navbar', 'navbar fs-3')}>
                        <div>
                            <img style={{width: '100%', height: '100%'}} src={compIcon} alt="" />
                        </div>
                        PRO.FILE
                        <div>
                            <img style={{width: '100%', height: '100%'}} src={userIcon} alt="" />
                        </div>
                    </nav>
                    <div className={cx('profile--content', 'row')}>
                        <div className='col c-12 m-4 l-4'>
                            <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={avatarIMG} alt="" />
                        </div>
                        <div className='col c-12 m-8 l-8'>
                            <div className={cx('profile--content__text')}>
                                <div className='fs-2 fw-bold ff-inter'>
                                    {tienha.name.toUpperCase()}&nbsp;
                                </div>
                                <div className='fs-3'>
                                    {tienha.birth}
                                </div>
                            </div>
                            <div className='fs-3 fw-semibold ff-inter'>
                                {tienha.job} {tienha.tag}
                            </div>
                            <div className={cx('profile--content__text', 'fs-3 ff-inter')}>
                                {tienha.objective}
                            </div>
                        </div>
                    </div>
                    <div className={cx('contact')}>
                        <ul className='c-12 m-6 l-6 fs-4 fw-semibold'>
                            <li className='row'>
                                <div className='col c-12 m-4 l-4'>
                                    Email:
                                </div>
                                <div className='col c-12 m-8 l-8'>
                                    {tienha.email}
                                </div>
                            </li>
                            <li className='row'>
                                <div className='col c-12 m-4 l-4'>
                                    Phone:
                                </div>
                                <div className='col c-12 m-8 l-8'>
                                    {tienha.phone}
                                </div>
                            </li>
                        </ul>
                        <div className='fs-3 fw-semibold ff-inter'>
                            {tienha.address}
                        </div>
                    </div>
                </div>
                <div className={cx('projects', 'c-12 m-12 l-4')}>
                    <ul className='row'>
                        {projects.map(project => (
                            <li key={project.id} className={cx('project', 'col c-6 m-3 l-4')}>
                                <button
                                    className={cx('project--button', 'l-12')}
                                    title='Double Click to Open File'
                                    onDoubleClick={() => handleOpen(project.id)}
                                >
                                    <div className={cx('project--icon')}>
                                        <img style={{width: '100%', height: '100%'}} src={pawcatIcon} alt="" />
                                    </div>
                                    <div className='fs-4 fw-semibold'>
                                        {project.name}
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className='fs-4 fw-semibold'>
                        Note: Please Double Click to Open File!
                    </div>
                </div>
            </div>
            <div className={cx('container', 'col2')}>
                <div className={cx('skills', 'shadow m-12 l-3')}>
                    <nav className={cx('skills--navbar', 'navbar fs-3')}>
                        <div>
                            <img style={{width: '100%', height: '100%'}} src={compIcon} alt="" />
                        </div>
                        SKILL.JS
                        <div>
                            <img style={{width: '100%', height: '100%'}} src={replayIcon} alt="" />
                        </div>
                    </nav>
                    <div className={cx('skills--content')}>
                        <ul className={cx('row', 'skills--icons')}>
                            {skills.map(skill => (
                                <li className={cx('col c-3 m-1 l-3', 'skills--icon')}>
                                    <img style={{width: '100%', height: '100%'}} src={skill.icon} alt="" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='m-12 l-5'>
                    <Project project={project} setProject={setProject} />
                </div>
            </div>
        </>
    );
}

export default Home;