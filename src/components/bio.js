import React, { Component } from 'react';

class Bio extends Component{
  render(){
    return(
      <div className='bio'>
        <div>
        My name is Phillip Troutman.  I'm a Senior Full Stack Engineer and Lead Instructor at <a href='https://www.codesmith.io'>Codesmith</a> NY. Codesmith is a 12 week software engineering residency focused on building autonomies problem solving engineers.
        </div>
        <div>
          My day to day is spent building scaleable React/Node applications and managing a team of 5+ engineers. I’m especially passionate about advanced React features, declarative programming, and arguing the merits of vanilla Javascript over jQuery. At Codesmith I give technical lectures on classic computer science theory and all things modern web development, including data structures, time complexity, front-end fundamentals, React, Node, Dev-Ops, AJAX, Asynchronous Javascript, etc.
        </div>
        <div>
          Additionally, I have an affinity for public speaking and hosting technology based workshops. Currently, I run a weekly Build a Web App (BAWA) workshop on fundamental programming topics (Intro to React, Web Browser APIs, DOM Manipulation, and Node)
        </div>
      </div>
    );
  }
}

export default Bio;
