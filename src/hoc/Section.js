import React from "react";
import Backtop from "../components/ui/Backtop/Backtop";

const Section = props => (
  <section id={props.id}>
    <div>
      <h1>{props.title}</h1>
      {props.children ? props.children : null}
    </div>
    <Backtop />
  </section>
);

export default Section;
