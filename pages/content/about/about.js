import { useEffect, useState } from 'react';
import { fetchProfile, fetchSkills } from '../../../lib/api';
import styles from '../../../styles/Style.module.scss';

export default function About() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;

    async function loadAbout() {
      try {
        setStatus('loading');
        const [profileData, skillData] = await Promise.all([
          fetchProfile(),
          fetchSkills(),
        ]);
        if (!cancelled) {
          setProfile(profileData);
          setSkills(Array.isArray(skillData) ? skillData : []);
          setStatus('ready');
        }
      } catch (_error) {
        if (!cancelled) {
          setStatus('error');
        }
      }
    }

    loadAbout();

    return () => {
      cancelled = true;
    };
  }, []);

  const title = profile?.title || 'Front-End Developer';

  return (
    <div className={styles.main_content} id="about">
      <div className={styles.main_content_top}>
        <div className={styles.main_banner}></div>
        <div className={styles.main_content_top_title}>
          <h1>
            Hello, <br />
            I&apos;m
            <span className="text-effect">
              <b>{title}</b>
            </span>
          </h1>
          {status === 'ready' && profile?.summary ? (
            <p>{profile.summary}</p>
          ) : null}
          {status === 'error' ? (
            <p role="alert">프로필 정보를 불러오지 못했습니다.</p>
          ) : null}
          {status === 'ready' && skills.length > 0 ? (
            <ul>
              {skills.map((skill) => (
                <li key={skill.id}>
                  {skill.name}
                  {skill.category ? ` · ${skill.category}` : ''}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
