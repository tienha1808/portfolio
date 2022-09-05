import html5 from '../apps/skills/html5.png'
import css3 from '../apps/skills/css3.png'
import js from '../apps/skills/js.png'
import ts from '../apps/skills/ts.png'
import reactjs from '../apps/skills/react.png'
import nextjs from '../apps/skills/nextjs.png'
import redux from '../apps/skills/redux.png'
import sass from '../apps/skills/sass.png'

interface Skill {
    name: string,
    icon: string,
}

export const skills: Array<Skill> = [
    {
        name: 'HTML5',
        icon: html5,
    },
    {
        name: 'CSS3',
        icon: css3,
    },
    {
        name: 'JavaScript',
        icon: js,
    },
    {
        name: 'TypeScript',
        icon: ts,
    },
    {
        name: 'ReactJS',
        icon: reactjs,
    },
    {
        name: 'NextJS',
        icon: nextjs,
    },
    {
        name: 'Redux',
        icon: redux,
    },
    {
        name: 'Sass',
        icon: sass,
    }
]