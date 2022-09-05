import anonime from '../apps/brands/anime.png'
import chat from '../apps/brands/chat.png'
import store from '../apps/brands/store.png'
import cv from '../apps/brands/cv.png'

interface Project {
    id: number,
    name: string,
    icon: string,
    platform: 'ReactJS' | 'NextJS',
    descripte: string,
    source: string,
    page: string,
}

export const projects: Array<Project> = [
    {
        id: 0,
        name: 'Anonime',
        icon: anonime,
        platform: 'NextJS',
        descripte: `It's built based on Anime Movie Platform. It uses NextJS Framework.`,
        source: 'https://github.com/tienha1808/anonime',
        page: 'https://anonime-tienha1808.vercel.app/',
    },
    {
        id: 1,
        name: 'Street Store',
        icon: store,
        platform: 'ReactJS',
        descripte: `It's built based on Ecommerce Store Platform. It uses ReactJS Framework and using Redux Toolkit for state management.`,
        source: 'https://github.com/tienha1808/StreetStore',
        page: 'https://tienha1808.github.io/StreetStore/',
    },
    {
        id: 2,
        name: 'Chat Box',
        icon: chat,
        platform: 'ReactJS',
        descripte: `It's built based on Commercial Connect Platform. It uses ReactJS Framework and using Redux Toolkit, Redux Saga for state management`,
        source: 'https://github.com/tienha1808/ChatBox',
        page: 'https://tienha1808.github.io/ChatBox/',
    },
    {
        id: 3,
        name: 'Portfolio',
        icon: cv,
        platform: 'ReactJS',
        descripte: '',
        source: 'https://github.com/tienha1808/portfolio',
        page: 'https://portfolio-tienha1808.vercel.app/',
    },
]