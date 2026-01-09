export const aside_list = [
    {
        name: 'Home',
        link: '/home',
        icon: '<span class="material-symbols-outlined md-18 me-1">home</span>',
        children: [],
    },
    {
        name: 'About Me',
        link: '/about',
        icon: '<span class="material-symbols-outlined md-16 me-1">face_3</span>',
        children: [],
    },
    {
        name: 'Career&Portfolio',
        link: '/career',
        icon: '<span class="material-symbols-outlined md-16 me-1">work</span>',
        children: [
            {
                name: 'Career',
                html: <span>Career</span>,
                link: '/career',
            },
            {
                name: 'Portfolio',
                link: '/portfolio',
                html: <span>Portfolio</span>,
            },
        ],
    },
    {
        name: 'My story',
        link: '/story',
        icon: '<span class="material-symbols-outlined md-18 me-1">forum</span>',
        children: [
            {
                name: 'Front-end',
                html: <span>Front-end</span>,
                link: '/front-end',
            },
            {
                name: 'Back-end',
                link: '/back-end',
                html: <span>Back-end</span>,
            },
            {
                name: 'CS Study',
                link: '/cs-study',
                html: <span>CS Study</span>,
            },{
                name: 'Story',
                link: '/story',
                html: <span>Story</span>,
            }
        ]
    }
]