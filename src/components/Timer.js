import './Timer.css'

function Timer() {
    let i = 60;
    function startTimer(){
        document.getElementById('mycounter').innerHTML = i;
        console.log(i)
        i--;
        if (i < 0) {
            document.getElementById('mycounter').innerHTML = "Done";
            i = 60;
            let typingBox = document.getElementById("typing-box");
            let typedText = typingBox.value;
            typingBox.value = '';
            let typedWordsLength = typedText.split(" ").length;
            document.getElementById("result").innerHTML = typedWordsLength;
        }
        else {
            setTimeout(startTimer, 1000);
         }
        }

    return(
    <div className="timer">
        <button className="timer-btn" onClick={startTimer}>START TIMER</button>
        <div id="mycounter"></div>
        <div className="result-section">
            <label>Result(word per minute):</label>
            <div id="result"></div>
        </div>
    </div>);
}

export default Timer;