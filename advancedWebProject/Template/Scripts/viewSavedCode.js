document.addEventListener("DOMContentLoaded", () => {
    const outputContainer = document.getElementById("outputContainer");

    if (!outputContainer) {
        console.error("outputContainer not found.");
        return;
    }

    const savedEntries = JSON.parse(localStorage.getItem("savedCodeEntries")) || [];

    if (savedEntries.length === 0) {
        const msg = document.createElement("p");
        msg.textContent = "No saved code entries found.";
        outputContainer.appendChild(msg);
        return;
    }

    savedEntries.forEach((entry, index) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("outputEntry");

        const title = document.createElement("h3");
        title.textContent = `Entry #${index + 1} — ${entry.timestamp}`;
        wrapper.appendChild(title);

        const codeBlock = document.createElement("pre");
        codeBlock.textContent = entry.code;
        wrapper.appendChild(codeBlock);

        outputContainer.appendChild(wrapper);
    });
});