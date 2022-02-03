import React from "react";
import {
  BodyImage1,
  BodyImage2,
  BodyImage3,
  BodyImage4,
  BodyImage5,
  BodyImage6,
  BodyImage7,
  BodyImage8,
} from "../images/index";

export default function ArticlesBody() {
  const bodyImageArray = [
    BodyImage1,
    BodyImage2,
    BodyImage3,
    BodyImage4,
    BodyImage5,
    BodyImage6,
    BodyImage7,
    BodyImage8,
  ];

  const BodyElement = bodyImageArray.map((image, index) => (
    <div className="body" key={index}>
      {index % 2 === 0 && (
        <img className="body--image" src={image} alt="long haired man" />
      )}
      <p className="body--paragraph">
        Sed et elit neque. Phasellus volutpat tortor vel lacus porttitor tempus.
        Donec at mi fermentum, fringilla augue et, imperdiet ex. Aliquam erat
        volutpat. Vestibulum rutrum id metus a feugiat. Nunc viverra tempor
        lorem, et dignissim velit consequat sit amet. Vivamus non efficitur
        ante. In auctor augue et mi bibendum sodales. Sed id luctus dolor.
        Vestibulum feugiat orci dapibus nisi interdum, eu ultrices lorem
        pharetra. Cras purus dolor, feugiat non semper a, egestas nec sem.{" "}
      </p>
      {index % 2 !== 0 && (
        <img className="body--image" src={image} alt="long haired man" />
      )}
    </div>
  ));
  return <div>{BodyElement}</div>;
}
