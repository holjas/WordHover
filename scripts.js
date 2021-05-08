const partyApp = {};

partyApp.screenSize = () => {
  const screenSize = window.innerWidth;
  if (screenSize > 900) {
    partyApp.largeScreen();
    console.log("LARGE");
  } else {
    partyApp.smallScreen();
    console.log("smallscreen");
  }
};

partyApp.largeScreen = () => {
  const creativityHover = document.getElementById("creativityHover");
  const moreHover = document.getElementById("moreHover");

  party.resolvableShapes["heart"] = `<img src="heart.svg" class="heart"/>`;

  creativityHover.addEventListener("mouseenter", function (e) {
    party.confetti(e, {
      shapes: ["square", "circle"],
      count: party.variation.range(90, 100),
    });
  });
  moreHover.addEventListener("mouseover", function (e) {
    party.confetti(e, {
      shapes: ["heart"],
      count: party.variation.range(35, 40),
    });
  });
};

partyApp.smallScreen = () => {
  const creativityHover = document.getElementById("creativityHover");
  const moreHover = document.getElementById("moreHover");

  party.resolvableShapes["heart"] = `<img src="heart.svg" class="heart"/>`;

  creativityHover.addEventListener("click", function (e) {
    party.confetti(e, {
      shapes: ["square", "circle"],
      count: party.variation.range(90, 100),
    });
  });
  moreHover.addEventListener("click", function (e) {
    party.confetti(e, {
      shapes: ["heart"],
      count: party.variation.range(35, 40),
    });
  });
};

partyApp.init = () => {
  partyApp.screenSize();
};

partyApp.init();
