import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Backtop() {
  return (
    <div className="backtop">
      <AnchorLink href="#top" title="Back to top">
        <FontAwesomeIcon icon={faAngleUp} size="3x" />
      </AnchorLink>
    </div>
  );
}
