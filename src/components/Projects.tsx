import React from 'react'
import { projects } from '../data'
import classNames from 'classnames/bind'
import styles from '../styles/Projects.module.scss'

const cx = classNames.bind(styles)

function Projects() {
  return (
    <>
      <div id='projects' className={cx('container')}>
        <div className={cx('wrapper')}>
          <div className={cx('title', 'c-12 fs-1 fw-bold text-180')}>
            <div>
              Front-end ReactJS Developer
            </div>
            <div>
              My Projects:
            </div>
          </div>
          <ul data-aos='zoom-in-up' className={cx('projects', 'row')}>
            {projects.map(project => (
              <li key={project.name} className={cx('projects--item', 'c-12 m-4')}>
                <a href={project.page} target='_blank'>
                  <div className={cx('projects--item__wrapper')}>
                    <img className={cx('projects--item__thumbnail')} src={project.thumbnail} alt="" />
                  </div>
                  <div className={cx('projects--item__title', 'c-6 fs-3 fw-bold')}>
                    {project.name}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Projects