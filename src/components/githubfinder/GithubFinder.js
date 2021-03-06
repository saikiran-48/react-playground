import React from "react";
import "./GithubFinder.css";

export default function GithubFinder() {
  const [userName, setUserName] = React.useState();
  const [data, setData] = React.useState();
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setData(value);
      });
  };
  console.log(data);
  return (
    <>
      <div className="main-container">
        <form style={{ marginTop: "36px" }} onSubmit={submitHandler}>
          <input
            type="search"
            placeholder="search username"
            value={userName}
            className="input-field"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="submit-btn">search</button>
        </form>
      </div>

      {data ? (
        <div className="card">
          <div className="user-info">
            <h2 style={{ margin: "16px 0 0 0 " }}>{data?.name}</h2>
          </div>
          <div className="wrapper-card">
            <ul className="list-main">
              <li>
                {data?.followers} <strong>Followers</strong>
              </li>
              <li>
                {data?.following} <strong>Following</strong>
              </li>
              <li>
                {data?.public_repos} <strong>Repos</strong>
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={data?.avatar_url} alt={data?.name} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
