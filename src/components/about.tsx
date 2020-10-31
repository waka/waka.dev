import React from 'react';

type Props = {
  iconURL: string
};

const About = ({ iconURL }) => {
  return (
    <div className="about">
      <div className="profile">
        <img src={`${iconURL}`} />
        <aside>
          <p>
            甘いものが好きなソフトウェアエンジニア 時々 本部長。<br />
            RubyとJavaScriptが好き。
          </p>
        </aside>
      </div>
    </div>
  );
};

export default About;
