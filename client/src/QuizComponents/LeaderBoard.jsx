import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RecentActivity from './RecentActivity';

const LeaderStyling = styled.div`
  // border: thin solid #1d2066;
  // border-radius: 5px;
  padding: .25em;
  height: min-content;
  font-weight: 600;
  font-size: 1vw;

  .table-title {
    color: #71798e;
    font-size: 1.5em;
  }
  .table-columns {
    color: #71798e;
    font-size: 1.25em;
    text-shadow: 0 -1px #1d2066;
  }
  .user-head {
    width: 25%;
  }
  .quiz-head {
    width: 50%;
  }
  .score-head {
    width: 25%;
  }

  .recent-scores {
    text-align: center;
  }

  td {
    border-top: thin solid black;
  }

  tr {
    height: 2em;
  }
`;

function LeaderBoard({ quizID }) {
  const [leaders, setLeaders] = useState([]);

  const getLeaders = () => {
    axios({
      method: 'GET',
      url: '/herohub/leaders',
      params: { quizID },
    })
      .then((res) => {
        setLeaders(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getLeaders(), []);

  return (
    <div>
      {quizID
        ? (
          <LeaderStyling>
            <table>
              <thead>
                <tr className="table-title">
                  <th colSpan="4">Leaderboard</th>
                </tr>
                <tr className="table-columns">
                  <th className="user-head">User</th>
                  <th className="score-head">Score</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((act, index) => (
                  <tr value={index} className={act.difficulty}>
                    <td>{act.username}</td>
                    <td className="recent-scores">{act.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </LeaderStyling>
        )
        : <RecentActivity />}
    </div>
  );
}

export default LeaderBoard;
