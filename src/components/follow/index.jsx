import React from 'react';

function FollowLink() {
  const data = [
    {
      icon: 'twitter-plain',
      url: 'https://twitter.com/Ronald_Marcel_git'
    },
    {
      icon: 'github-plain',
      url: 'https://github.com/dlanorlecram/'
    },
    {
      icon: 'linkedin-plain',
      url: 'https://www.linkedin.com/in/ronaldmarcel/'
    }
  ];

  const link = data.map((obj, key) =>
    <li key={key}>
      <a href={obj.url} target='_blank' rel="noopener noreferrer">
        <i className={`devicon-${obj.icon}`}></i>
      </a>
    </li>
  )
  return (
    <ul>
      {link}
    </ul>
  )
}

export default FollowLink;
