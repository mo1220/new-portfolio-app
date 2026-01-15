import portfolioStyle from './portfolioStyle.module.scss';

const list = [
    {
        name: '수자원 프로젝트',
        src: '/assets/images/portfolio/dtk.png',
        title: '수자원 시각화 솔루션',
        subtitle: '<b className="highlight">수자원</b> 시각화 솔루션 구축',
        content: 'Angular CLI를 활용하여 수자원 시각화 솔루션 구축 참여',
        group: 'career'
    },
    {
        name: '롯데맴버스 데이터 포탈 프로젝트',
        src: '/assets/images/portfolio/lotte.png',
        title: '롯데맴버스 데이터 포탈',
        subtitle: '<b className="highlight">롯데맴버스</b> 데이터 포탈 구축',
        content: 'Angular CLI를 활용하여 롯데맴버스 데이터 포탈 구축 참여',
        group: 'career'
    },
    {
        name: 'LG화학 데이터 포탈',
        src: '/assets/images/portfolio/lgchem.png',
        title: 'LG화학 데이터 포탈',
        subtitle: '<b className="highlight">LG화학</b> 데이터 포탈 구축',
        content: 'Angular CLI를 활용하여 LG화학 데이터 포탈 구축 참여',
        group: 'career'
    },
    {
        name: 'fastfood',
        src: '/assets/images/portfolio/fastfood.png',
        title: '패스트 푸드점 검색 WEB',
        subtitle: '<b className="highlight">반응형 웹</b> 패스트 푸드점 검색 페이지',
        content: '반응형 웹을 적용한 패스트 푸드점 검색 웹(Web)',
    },
    
    {
        name: 'blog',
        src: '/assets/images/portfolio/blog.png',
        title: '블로그 WEB',
        subtitle: '<b className="highlight">ReactJs Framework</b>를 활용한 블로그 WEB',
        content: 'React 프레임워크를 활용한 블로그 WEB'
    },
     
    {
        name: 'movie',
        src: '/assets/images/portfolio/movie.png',
        title: '영화 소개 WEB',
        subtitle: '<b className="highlight">ReactJs Framework</b>를 활용한 영화 소개&리스트 WEB',
        content: 'ReactJs Framework를 활용한 영화 소개&리스트 WEB'
    },
     
    {
        name: 'reservation',
        src: '/assets/images/portfolio/reservation.png',
        title: '예약시스템 WEB',
        subtitle: '<b className="highlight">ReactJs Framework</b>를 활용한 예약시스템 WEB',
        content: 'ReactJs Framework를 활용한 예약 시스템 WEB'
    },
     
    {
        name: 'jeju',
        src: '/assets/images/portfolio/jeju.png',
        title: '제주도 소개 홈페이지',
        subtitle: '<b className="highlight">반응형 웹</b>을 적용한 제주도 관광 소개 홈페이지',
        content: '반응형 웹을 적용한 제주도 관광 소개 홈페이지'
    },
     
   
]
const PortfolioComponent = () => {
    return (
        <div className='main-content portfolio' id='portfolio'>
            <div className="portfolio-container">
                <div className="portfolio-container-title">
                    <h1>Portfolio</h1>
                </div>

                <div className="portfolio-container-content">
                        <div className='portfolio-container-content-info'>
                            <div className='portfolio-container-content-info-header'>
                               <p></p>
                            </div>
                            <div className='portfolio-list'>
                                <ul>
                                    {
                                        list.map((d, i) => {
                                            return(
                                                <li key={i}>
                                                    <div className='portfolio-list-img'>
                                                        <img src={d.src} alt={d.alt}/>
                                                    </div>
                                                    <div className='portfolio-list-content'>
                                                        <h4>{d.title}</h4>
                                                    </div>
                                                </li>
                                            ) 
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default PortfolioComponent;