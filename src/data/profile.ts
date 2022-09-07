interface Profile {
    name: string,
    tag?: string,
    birth: string,
    job: string,
    objective: string,
    descripte?: string,
    email?: string,
    phone?: string,
    address?: string,
    potential: number,
    intelligent: number,
    knowledged: number,
}

export const profile: Profile = {
    name: 'Hà Việt Tiến',
    tag: '@tienha1808',
    birth: '18/08/1998',
    job: 'Frond-end ReactJS Developer',
    objective: 'I believe I will bring innovative ideas and new experiences to users and customers.',
    descripte: `
    I am a newbie Front-end ReactJS Developer, but I studied and practiced
    hard with my small projects. At the moment, I ultimately believe that my
    skills are enough to work in a professional environment. I also desire to
    learn much knowledge from a clever and kind team leader.
    
    `,
    email: 'viettien1808@gmail.com',
    phone: '0905905246',
    address: 'Da Nang City, Viet Nam',
    potential: 5,
    intelligent: 5,
    knowledged: 5,
}