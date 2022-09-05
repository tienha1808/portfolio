import classNames from "classnames/bind";
import { Dispatch, SetStateAction } from "react";
import styles from '../styles/Project.module.scss'
import compIcon from '../apps/icons/comp.png'
import fileIcon from '../apps/icons/file.png'

const cx = classNames.bind(styles)

function Project({ project, setProject }:
    {
        project: any | undefined,
        setProject: Dispatch<SetStateAction< any | undefined >>
    }) {

    return (
        <>
        {
            project
            &&
            <div className={cx('shadow', 'project')}            >
                <nav className={cx('project--navbar', 'navbar fs-3')}>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={compIcon} alt="" />
                    </div>
                    PROJECT.JS
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={fileIcon} alt="" />
                    </div>
                </nav>
                <div className={cx('project--content', 'row ff-inter')}>
                    <div className='col c-4'>
                        <a style={{width: '100%', height: '100%'}} href={project.page} target='_blank'>
                            <img className={cx('project--content__icon')} src={project.icon} alt="" />
                        </a>
                    </div>
                    <div className='col c-8'>
                        <div className='fs-2 fw-bold'>
                            {project.name}
                        </div>
                        <div className={cx('project--content__text', 'fs-4 fw-semibold')}>
                            Platform: {project.platform}
                        </div>
                        <div className={cx('project--content__text', 'fs-4')}>
                            {project.descripte}
                        </div>
                        <div className='fs-5 fw-semibold'>
                            Source: <a style={{color: '#000'}} href={project.source}>{project.source}</a>
                        </div>
                        <div className='fs-5 fw-semibold'>
                            Link Page: <a style={{color: '#000'}} href={project.page}>{project.page}</a>
                        </div>
                    </div>
                </div>
                <div className={cx('project--button')}>
                    <button
                        className={cx('project--button__close', 'l-3 fs-3 fw-bold')}
                        onClick={() => setProject(undefined)}
                    >
                        Close
                    </button>
                </div>
            </div>
        }
        </>
    );
}

export default Project;