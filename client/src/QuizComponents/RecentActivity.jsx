import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const RecentStyling = styled.div`
  border: thin solid #1d2066;
  border-radius: 5px;
  padding: .25em;
  height: 65vh;
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

  .legend {
    background-color: #71798e;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
      .medium {
        border-left: thin solid white;
        border-right: thin solid white;
        padding: 0 1.5vw;
      }
      .hard {
        padding-right: 0.5vw;
      }
      .easy {
        padding-left: 0.5vw;
      }
  }

  .easy {
    color: #1d2066;
  }
  .medium {
    color: #e7ba53;
  }
  .hard {
    color: #c12835;
  }
`;

function RecentActivity() {
  const [recentActivity, setRecentActivity] = useState([]);

  const getRecentActivity = () => {
    axios({
      method: 'GET',
      url: '/herohub/quiz/scores',
    })
      .then((res) => {
        setRecentActivity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getRecentActivity());

  return (
    <RecentStyling>
      <div className="legend">
        <p className="easy">Easy</p>
        <p className="medium">Medium</p>
        <p className="hard">Hard</p>
      </div>
      <table>
        <thead>
          <tr className="table-title">
            <th colSpan="4">Recent Activity</th>
          </tr>
          <tr className="table-columns">
            <th className="user-head">User</th>
            <th className="quiz-head">Quiz</th>
            <th className="score-head">Score</th>
          </tr>
        </thead>
        <tbody>
          {recentActivity.map((act, index) => (
            <tr value={index} className={act.difficulty}>
              <td>{act.username}</td>
              <td className="recent-quiz">{act.quizname}</td>
              <td className="recent-scores">{act.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </RecentStyling>
  );
}

export default RecentActivity;
