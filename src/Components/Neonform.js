import React from "react";
import "./Neonform.scss";

export default function Neonform() {
  return (
    <div id="container">
      <header>
        <h1>Login form</h1>
      </header>
      <main id="content">
        <div className="content-form">
          <form id="form" action="#">
            <div className="container">
              <div className="input-container">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="username" />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="password" />
              </div>
            </div>
            <div id="btn-neon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
