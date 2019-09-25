import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function NavAnchorLink(props) {
  return (
    <AnchorLink href={props.href}>
      <FontAwesomeIcon icon={faAngleRight} />
      <span>{props.children}</span>
    </AnchorLink>
  );
}
