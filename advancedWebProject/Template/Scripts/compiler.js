document.addEventListener("DOMContentLoaded", () => {
    const runBtn = document.getElementById("run-btn");
    if (!runBtn) return;

    runBtn.addEventListener("click", async () => {
        const code = document.getElementById("source-code").value;
        const outputElement = document.getElementById("output");
        outputElement.textContent = "Running your code...";

        const payload = {
            source_code: code,
            language_id: 71,
            stdin: ""
        };

        const options = {
            method: "POST",
            headers: {
                "x-rapidapi-key": 'd8b5308c03msh81d773005d0b52ep1c7200jsn0d8ed7e79d6b',
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                "content-type": "application/json"
            },

            body: JSON.stringify(payload)
        };

        try {
            const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true", options);
            const result = await response.json();

            let outputText = "";

            if (result.compile_output) {
                outputText = "Compile Error:\n" + result.compile_output;
            } else if (result.stderr) {
                outputText = "Runtime Error:\n" + result.stderr;
            } else if (result.stdout !== undefined && result.stdout !== null) {
                outputText = "Success:\n" + result.stdout;
            } else {
                outputText = "Success, but no output was returned.";
            }

            outputElement.textContent = outputText;
        } catch (error) {
            outputElement.textContent = "An error occurred: " + error;
        }
    });
});