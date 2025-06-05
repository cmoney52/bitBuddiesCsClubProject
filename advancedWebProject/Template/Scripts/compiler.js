var sourceCode;


//Listener for the run button
document.addEventListener("DOMContentLoaded", () => {
    //Creating the environement
    startCompiler();
    //Getting the run button and save button
    
    
    


    runButton();
    saveButton();
    themeButton();
    
});


//Calling api to run the python programs
function runButton() {
    var runBtn = document.getElementById("run-btn");
    //Break case if the runBTN doesn't exist
    if (!runBtn) return;
    runBtn.addEventListener("click", async () => {
        // Now correctly get the existing CodeMirror content
        var code = sourceCode.getValue();

        //Getting the output window
        var outputElement = document.getElementById("output");
        //informing user
        outputElement.textContent = "Running your code...";

        //Prepping for payload send. Setting language type and the source code
        var payload = {
            source_code: code,
            language_id: 71,
            stdin: ""
        };

        //Options for the API, Key location and information format
        var options = {
            method: "POST",
            headers: {
                "x-rapidapi-key": 'd8b5308c03msh81d773005d0b52ep1c7200jsn0d8ed7e79d6b',
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        };

        try {
            //Getting the results from running the program
            var response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true", options);
            var result = await response.json();


            //Formatting the output thanks copilot for the help
            let outputText = "";

            //Updating user and telling what happend or printing results
            if (result.compile_output) {
                outputText = "Compile Error:\n" + result.compile_output;
            } else if (result.stderr) {
                outputText = "Runtime Error:\n" + result.stderr;
            } else if (result.stdout !== undefined && result.stdout !== null) {
                outputText = "Success:\n" + result.stdout;
            } else {
                outputText = "Success, but no output was returned.";
            }

            //Updating the text
            outputElement.textContent = outputText;
        } catch (error) {
            //Catch incase of error
            outputElement.textContent = "An error occurred: " + error;
        }
    });
}


function themeButton() {
    var themeBtn = document.getElementById("theme-btn");
    themeBtn.addEventListener("click", function () {
        var currentTheme = sourceCode.getOption("theme");
        if (currentTheme === "solarized dark") {
            sourceCode.setOption("theme", "base16-light");
        } else {
            sourceCode.setOption("theme", "solarized dark");
        }
    });

}

//Save button. Write code to a doc:
function saveButton() {
    var saveBtn = document.getElementById("save-btn");
    saveBtn.addEventListener("click", function () {
        console.log("Event Listener working");
        navigator.clipboard.writeText(sourceCode.getValue()).then(() => {
            alert("Text copied to clipboard! Please paste onto your device."); // Optional feedback
        }).catch(err => {
            console.error("Failed to copy, Please try again");
        });
    });
}
//Starting the compiler 
function startCompiler() {
    // Initialize CodeMirror once, outside the event listener creates the IDE window
    sourceCode = CodeMirror.fromTextArea(document.getElementById("source-code"), {
        //Type of program
        mode: "python",
        //Theme choice
        theme: "base16-light",
        lineNumbers: true,
        indentUnit: 4,
        smartIndent: true
    });
}