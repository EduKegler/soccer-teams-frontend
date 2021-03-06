import React from 'react';
import { teams } from '../mockItems';
import './teamList.css';

const TeamList = React.memo(() => {
  return (
    <table className='team-list'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={index} className='team-list__row'>
            <td className='team-list__column'><b>{team.name}</b></td>
            <td className='team-list__column team-list__description'><b>{team.description}</b><span>E|S|D</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default TeamList;
