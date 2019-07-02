import React, { Component } from 'react';
import { A, BioStyleWrapper } from './style';

class Bio extends Component {
  render() {
    return (
      <BioStyleWrapper>
        <div>
          My name is Phillip Troutman. I'm a Senior Full Stack Engineer and Lead
          Instructor at <A href="https://www.codesmith.io">Codesmith</A> NY.
          Codesmith is a 12 week software engineering residency focused on
          building autonomous problem solving engineers.
        </div>
        <div>
          My day to day is spent building scalable React/Node applications and
          managing a team of engineers. I’m especially passionate about advanced
          React features, declarative programming, and arguing the merits of
          vanilla Javascript over jQuery. At Codesmith I give technical lectures
          on classic computer science theory and all things modern web
          development, including data structures, time complexity, front-end
          fundamentals, React, Node, Dev-Ops, AJAX, Asynchronous Javascript,
          etc.
        </div>
        <div>
          Additionally, I have an affinity for public speaking and hosting
          technology-based workshops. Currently, I run a weekly Build a Web App
          (BAWA) workshop on fundamental programming topics (Intro to React, Web
          Browser APIs, DOM Manipulation, and Node)
        </div>
      </BioStyleWrapper>
    );
  }
}

export default Bio;
