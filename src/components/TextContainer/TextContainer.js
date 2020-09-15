import React from 'react';

import onlineIcon from '../../Icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Отдельный чат для РРПО <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Мальчишки и девчонки <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>КС сегодня будет? <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Активные люди в группе:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;