// import { party } from "./node_modules/party-js";

const creativityHover = document.getElementById("creativityHover");
const moreHover = document.getElementById("moreHover");

party.resolvableShapes["heart"] = `<img src="heart.svg" class="heart"/>`;

creativityHover.addEventListener("mouseenter", function (e) {
  //   e.preventDefault();
  party.confetti(e, {
    shapes: ["square", "circle"],
    count: party.variation.range(90, 100),
  });
});
moreHover.addEventListener("mouseover", function (e) {
  e.preventDefault();
  party.confetti(e, {
    shapes: ["heart"],
    count: party.variation.range(35, 40),
  });
});
