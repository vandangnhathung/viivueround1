// Function to create a circle with dynamic values
function createCircle(text, dynamicValues) {
  // Create the circle element
  const circleElement = document.createElement("div");
  circleElement.className = "circle";

  // destructure the dynamic values
  const {
    circleWidth,
    circleHeight,
    circleLeft,
    circleTop,
    textTop,
    textLeft,
    borderValue,
  } = dynamicValues;

  // Apply the dynamic values to the circle element
  circleElement.style.width = circleWidth;
  circleElement.style.height = circleHeight;
  circleElement.style.left = circleLeft;
  circleElement.style.top = circleTop;

  // Create the circle border element
  const circleBorderElement = document.createElement("div");
  circleBorderElement.className = "circle__border";
  // Apply the dynamic values to the circle border element
  circleBorderElement.style.position = "absolute";
  circleBorderElement.style.width = `calc(${circleWidth} + ${borderValue})`;
  circleBorderElement.style.height = `calc(${circleHeight} + ${borderValue})`;
  circleBorderElement.style.transform = "translate(-50%, -50%)";
  circleBorderElement.style.left = "50%";
  circleBorderElement.style.top = "50%";
  circleBorderElement.style.borderRadius = "100rem";
  circleBorderElement.style.border = "2px dashed #004eab";
  circleBorderElement.style.opacity = "0.15";

  // Append the circle border element to the circle element
  circleElement.appendChild(circleBorderElement);

  // Create the text element
  const textElement = document.createElement("p");
  textElement.className = "circle__text heading";
  textElement.innerText = text;

  // Apply the dynamic values to the text element
  textElement.style.position = "absolute";
  textElement.style.top = textTop;
  textElement.style.left = textLeft;
  textElement.style.transform = "translate(-50%, -50%)";
  textElement.style.color = "#fff";

  // Append the text element to the circle element
  circleElement.appendChild(textElement);

  // Append the circle element to the document body or any desired parent element
  document.body.appendChild(circleElement);
}

// Create circles
const dynamicValues1 = {
  circleWidth: "222px",
  circleHeight: "222px",
  circleLeft: "210px",
  circleTop: "500px",
  textTop: "50%",
  textLeft: "50%",
  borderValue: "12px",
};

createCircle("20", dynamicValues1);

const dynamicValues2 = {
  circleWidth: "218px",
  circleHeight: "218px",
  circleLeft: "420px",
  circleTop: "690px",
  textTop: "46%",
  textLeft: "50%",
  borderValue: "14px",
};

createCircle("400+", dynamicValues2);

const dynamicValues3 = {
  circleWidth: "280px",
  circleHeight: "280px",
  circleLeft: "488px",
  circleTop: "380px",
  textTop: "50%",
  textLeft: "54%",
  borderValue: "13px",
};

createCircle("35+", dynamicValues3);

const dynamicValues4 = {
  circleWidth: "258px",
  circleHeight: "258px",
  circleLeft: "700px",
  circleTop: "90px",
  textTop: "46%",
  textLeft: "50%",
  borderValue: "13px",
};

createCircle("1000m²", dynamicValues4);

const dynamicValues5 = {
  circleWidth: "222px",
  circleHeight: "222px",
  circleLeft: "970px",
  circleTop: "200px",
  textTop: "37%",
  textLeft: "50%",
  borderValue: "12px",
};

createCircle("10K+", dynamicValues5);
