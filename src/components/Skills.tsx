import React from 'react'
import { skills } from '../data'
import classNames from 'classnames/bind'
import styles from '../styles/Skills.module.scss'

const cx = classNames.bind(styles)

function Skills() {
  return (
    <>
        <div className={cx('container')}>
            <ul className={cx('skills', 'row')}>
                {skills.map(skill => (
                    <li key={skill.name} className={cx('skills--icon', 'c-2')}>
                        <img style={{width: '100%', height: '100%'}} src={skill.icon} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Skills