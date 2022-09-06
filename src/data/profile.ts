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
    objective: 'I believe that I will bring to innovative ideas and new experiences to users and customers.',
    descripte: `With my knowledge, I believe that I will bring to innovative ideas
    and new experiences to users and customers.
    At the same time, want to change careers to increase income, find
    joy in working. From there, the motivation for me to continue to
    study and develop myself in this field.
    `,
    email: 'viettien1808@gmail.com',
    phone: '0905905246',
    address: 'Da Nang City, Viet Nam',
    potential: 5,
    intelligent: 5,
    knowledged: 5,
}