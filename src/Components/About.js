import React from 'react';
import "./About.css";

function About() {
  return (
    <>
      <div className="about-head">About</div>
      <div className="about">
        This is an AI Resume Builder made by <strong>Aman Singh</strong>, customized from an open-source project. I modified and deployed this for personal and public use.

        <ul style={{ marginTop: '10px' }}>
          <li>react-redux</li>
          <li>redux-persist</li>
          <li>react-hook-form</li>
          <li>react-router-dom</li>
          <li>react-icons</li>
        </ul>

        <div className="mt-3">
          Special thanks to the open-source community and contributors.
        </div>

        <a
          className="mt-2 anchor-link"
          href="https://github.com/amansingh2426"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⭐ Star my GitHub Repo
        </a>

        <br />

        <a
          className="mt-2 anchor-link"
          href="https://vercel.com/amansingh2426"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Visit my Vercel Projects
        </a>
      </div>
    </>
  );
}

export default About;
