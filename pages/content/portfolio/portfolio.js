import { useEffect, useState } from 'react';
import { fetchPortfolio } from '../../../lib/api';

const PortfolioComponent = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadPortfolio() {
      try {
        setStatus('loading');
        const data = await fetchPortfolio();
        if (!cancelled) {
          setItems(Array.isArray(data) ? data : []);
          setStatus('ready');
        }
      } catch (error) {
        if (!cancelled) {
          setItems([]);
          setStatus('error');
          setErrorMessage(
            error?.message || '포트폴리오 데이터를 불러오지 못했습니다.'
          );
        }
      }
    }

    loadPortfolio();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="main-content portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-container-title">
          <h1>Portfolio</h1>
        </div>

        <div className="portfolio-container-content">
          <div className="portfolio-container-content-info">
            <div className="portfolio-container-content-info-header">
              {status === 'loading' && <p>포트폴리오를 불러오는 중...</p>}
              {status === 'error' && (
                <p role="alert">
                  서버 연결에 실패했습니다. API 서버가 실행 중인지 확인해 주세요.
                  {errorMessage ? ` (${errorMessage})` : ''}
                </p>
              )}
            </div>
            <div className="portfolio-list">
              <ul>
                {items.map((item) => (
                  <li key={item.id || item.slug}>
                    <div className="portfolio-list-img">
                      <img
                        src={item.imageSrc || '/assets/images/portfolio/dtk.png'}
                        alt={item.title || item.name}
                      />
                    </div>
                    <div className="portfolio-list-content">
                      <h4>{item.title}</h4>
                      {item.content ? <p>{item.content}</p> : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
