const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const portfolioItems = [
  {
    slug: 'water-resource-viz',
    name: '수자원 프로젝트',
    title: '수자원 시각화 솔루션',
    subtitle: '수자원 시각화 솔루션 구축',
    content: 'Angular CLI를 활용하여 수자원 시각화 솔루션 구축 참여',
    imageSrc: '/assets/images/portfolio/dtk.png',
    group: 'career',
    techStack: 'Angular,TypeScript,Chart',
    sortOrder: 1,
  },
  {
    slug: 'lotte-members-portal',
    name: '롯데맴버스 데이터 포탈 프로젝트',
    title: '롯데맴버스 데이터 포탈',
    subtitle: '롯데맴버스 데이터 포탈 구축',
    content: 'Angular CLI를 활용하여 롯데맴버스 데이터 포탈 구축 참여',
    imageSrc: '/assets/images/portfolio/lotte.png',
    group: 'career',
    techStack: 'Angular,TypeScript',
    sortOrder: 2,
  },
  {
    slug: 'lgchem-data-portal',
    name: 'LG화학 데이터 포탈',
    title: 'LG화학 데이터 포탈',
    subtitle: 'LG화학 데이터 포탈 구축',
    content: 'Angular CLI를 활용하여 LG화학 데이터 포탈 구축 참여',
    imageSrc: '/assets/images/portfolio/lgchem.png',
    group: 'career',
    techStack: 'Angular,TypeScript',
    sortOrder: 3,
  },
  {
    slug: 'fastfood',
    name: 'fastfood',
    title: '패스트 푸드점 검색 WEB',
    subtitle: '반응형 웹 패스트 푸드점 검색 페이지',
    content: '반응형 웹을 적용한 패스트 푸드점 검색 웹(Web)',
    imageSrc: '/assets/images/portfolio/fastfood.png',
    group: 'personal',
    techStack: 'HTML,CSS,JavaScript',
    sortOrder: 4,
  },
  {
    slug: 'blog',
    name: 'blog',
    title: '블로그 WEB',
    subtitle: 'ReactJs Framework를 활용한 블로그 WEB',
    content: 'React 프레임워크를 활용한 블로그 WEB',
    imageSrc: '/assets/images/portfolio/blog.png',
    group: 'personal',
    techStack: 'React,JavaScript',
    sortOrder: 5,
  },
  {
    slug: 'movie',
    name: 'movie',
    title: '영화 소개 WEB',
    subtitle: 'ReactJs Framework를 활용한 영화 소개&리스트 WEB',
    content: 'ReactJs Framework를 활용한 영화 소개&리스트 WEB',
    imageSrc: '/assets/images/portfolio/movie.png',
    group: 'personal',
    techStack: 'React,JavaScript',
    sortOrder: 6,
  },
  {
    slug: 'reservation',
    name: 'reservation',
    title: '예약시스템 WEB',
    subtitle: 'ReactJs Framework를 활용한 예약시스템 WEB',
    content: 'ReactJs Framework를 활용한 예약 시스템 WEB',
    imageSrc: '/assets/images/portfolio/reservation.png',
    group: 'personal',
    techStack: 'React,JavaScript',
    sortOrder: 7,
  },
  {
    slug: 'jeju',
    name: 'jeju',
    title: '제주도 소개 홈페이지',
    subtitle: '반응형 웹을 적용한 제주도 관광 소개 홈페이지',
    content: '반응형 웹을 적용한 제주도 관광 소개 홈페이지',
    imageSrc: '/assets/images/portfolio/jeju.png',
    group: 'personal',
    techStack: 'HTML,CSS,JavaScript',
    sortOrder: 8,
  },
];

const skills = [
  { name: 'React', category: 'frontend', level: 4, sortOrder: 1 },
  { name: 'Next.js', category: 'frontend', level: 4, sortOrder: 2 },
  { name: 'Angular', category: 'frontend', level: 4, sortOrder: 3 },
  { name: 'TypeScript', category: 'language', level: 4, sortOrder: 1 },
  { name: 'JavaScript', category: 'language', level: 5, sortOrder: 2 },
  { name: 'Sass', category: 'frontend', level: 4, sortOrder: 4 },
  { name: 'Node.js', category: 'backend', level: 3, sortOrder: 1 },
  { name: 'Express', category: 'backend', level: 3, sortOrder: 2 },
];

async function main() {
  await prisma.contactMessage.deleteMany();
  await prisma.portfolioItem.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: 'Portfolio Owner',
      title: 'Front-End Developer',
      summary:
        '프론트엔드 개발자로 데이터 포탈·시각화 솔루션 구축 경험을 보유하고 있습니다.',
      email: 'hello@example.com',
      location: 'Seoul, Korea',
    },
  });

  await prisma.skill.createMany({ data: skills });
  await prisma.portfolioItem.createMany({ data: portfolioItems });

  console.log(
    `Seed complete: profile=1, skills=${skills.length}, portfolio=${portfolioItems.length}`
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
