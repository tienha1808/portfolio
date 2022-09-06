import AnonimeThumbnail from '../apps/brands/Anonime.png'
import ChatBoxThumbnail from '../apps/brands/ChatBox.png'
import StreetStoreThumbnail from '../apps/brands/StreetStore.png'

interface Project {
    id: number,
    name: string,
    thumbnail: string,
    platform: 'ReactJS' | 'NextJS',
    descripte: string,
    source: string,
    page: string,
}

export const projects: Array<Project> = [
    {
        id: 0,
        name: 'Anonime',
        thumbnail: AnonimeThumbnail,
        platform: 'NextJS',
        descripte: `It's built based on Anime Movie Platform. It uses NextJS Framework.`,
        source: 'https://github.com/tienha1808/anonime',
        page: 'https://anonime-tienha1808.vercel.app/',
    },
    {
        id: 1,
        name: 'Street Store',
        thumbnail: StreetStoreThumbnail,
        platform: 'ReactJS',
        descripte: `It's built based on Ecommerce Store Platform. It uses ReactJS Framework and using Redux Toolkit for state management.`,
        source: 'https://github.com/tienha1808/StreetStore',
        page: 'https://tienha1808.github.io/StreetStore/',
    },
    {
        id: 2,
        name: 'Chat Box',
        thumbnail: ChatBoxThumbnail,
        platform: 'ReactJS',
        descripte: `It's built based on Commercial Connect Platform. It uses ReactJS Framework and using Redux Toolkit, Redux Saga for state management`,
        source: 'https://github.com/tienha1808/ChatBox',
        page: 'https://tienha1808.github.io/ChatBox/',
    },
]