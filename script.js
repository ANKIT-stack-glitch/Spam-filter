const messageInput = document.getElementById("message-input");
const checkMessageButton = document.getElementById("check-message-btn");
const result = document.getElementById("result");

checkMessageButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message === "") {
    alert("Please enter a message.");
    return;
  }
});

const spamPatterns = [
  /free money/i,
  /buy now/i,
  /click here/i,
  /subscribe/i,
  /winner/i
];

function isSpam(message) {
  return spamPatterns.some(pattern => pattern.test(message));
}

if (isSpam(message)) {
  result.textContent = "🚨 Oh no! This looks like a spam message.";
  result.style.color = "red";
} else {
  result.textContent = "✅ This message seems safe.";
  result.style.color = "green";
}
