import React from 'react';

type Props = {
  iconURL: string
};

const About = ({ iconURL }: Props) => {
  return (
    <div className="about">
      <div className="profile">
        <img src={`${iconURL}`} width="105px" height="105px" alt="icon" />
        <aside>
          <p>
            @yo_waka<br />
            甘いものが好きなソフトウェアエンジニア。<br />
            RubyとJavaScriptも好き。
          </p>
          <ul>
            <li><a href="https://twitter.com/yo_waka">Twitter</a></li>
            <li><a href="https://bsky.app/profile/waka.dev">Bluesky</a></li>
            <li><a href="https://github.com/waka">GitHub</a></li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default About;
