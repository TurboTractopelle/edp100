import React from "react";
import logo_edpsciences from "../assets/images/logo_edpsciences_fff.png";
import NavAnchorLink from "../components/ui/NavAnchorLink/NavAnchorLink";

export default function Intro() {
  return (
    <section id="top">
      <div>
        <header>
          <figure className="c">
            <img src={logo_edpsciences} alt="EDP Sciences" />
          </figure>
          <h1>
            100<sup>th</sup> anniversary
          </h1>
        </header>
        <div className="column-2">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto
              enim necessitatibus, ipsa fuga vitae consequatur, sit eveniet
              officia molestiae soluta et voluptas voluptates esse unde
              veritatis accusantium a minus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repudiandae velit alias minima,
              exercitationem, odit laudantium voluptatem ullam architecto totam
              voluptas, quos perspiciatis maxime? Dolorum nam ut beatae natus
              quae optio?
            </p>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <NavAnchorLink href="#timeline">Timeline</NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#history">
                    Very brief history of EDP Sciences and its founders
                  </NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#event-details">
                    Anniversary event details
                  </NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#advisory">
                    Advisory committee members
                  </NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#4open">
                    4open special issue
                  </NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#video">Anniversary video</NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#archive">
                    Archive content made free for the occasion
                  </NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#ppt">
                    Revised version of PPT from 90 year celebrations
                  </NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#photos">
                    Online exhibition of beautiful photos (x100)
                  </NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#quiz">
                    Quizzes and competitions (one prize per week throughout
                    2020) and other special offers
                  </NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#memories">
                    Book of memories
                  </NavAnchorLink>
                </li>
                <li>
                  <NavAnchorLink href="#series">
                    Video lecture series
                  </NavAnchorLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
