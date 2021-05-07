// import { party } from "./node_modules/party-js";

const creativityHover = document.getElementById("creativityHover");
const moreHover = document.getElementById("moreHover");

creativityHover.addEventListener("click", function (e) {
  e.preventDefault();
  party.confetti(e);
});
moreHover.addEventListener("click", function (e) {
  e.preventDefault();
  party.sparkles(e);
});
document.querySelector(".button").addEventListener("click", function (e) {
  party.confetti(this, {
    count: party.variation.range(20, 40),
  });
});
