import React from 'react';

type Props = {
  author: string
};

const Footer = ({ author }: Props) => {
  return (
    <div className="footer">
      <span>Copyright &copy; {author}</span>
    </div>
  );
};

export default Footer;
