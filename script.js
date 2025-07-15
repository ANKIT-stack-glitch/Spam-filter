const messageInput = document.getElementById("message-input");
const checkMessageButton = document.getElementById("check-message-btn");
const result = document.getElementById("result");

const spamPatterns = [
  /free money/i,
  /buy now/i,
  /click here/i,
  /subscribe/i,
  /winner/i,
  /congratulations/i,
  /urgent/i,
  /act now/i,
  /limited time/i,
  /make money fast/i,
  /cheap/i,
  /get rich/i,
  /investment opportunity/i,
  /no credit check/i,
  /instant access/i,
  /guaranteed/i
];

function isSpam(message) {
  return spamPatterns.some(pattern => pattern.test(message));
}

function highlightSpam(message) {
  let highlighted = message;
  spamPatterns.forEach(pattern => {
    highlighted = highlighted.replace(pattern, match => `<mark>${match}</mark>`);
  });
  return highlighted;
}

checkMessageButton.addEventListener("click", () => {
  const message = messageInput.value.trim();

  if (message === "") {
    alert("Please enter a message.");
    return;
  }

  if (isSpam(message)) {
    result.innerHTML = "🚨 <strong>Spam detected:</strong><br>" + highlightSpam(message);
    result.style.color = "red";
  } else {
    result.textContent = "✅ This message seems safe.";
    result.style.color = "green";
  }
});

messageInput.addEventListener("input", () => {
  result.textContent = "";
  result.style.color = "black";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.ctrlKey) {
    checkMessageButton.click();
  }
});
