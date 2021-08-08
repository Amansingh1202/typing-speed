import './TypeText.css'

function TypeText({paraText}) {
    function checkCorrect(e){
        let paraValues = paraText.split(" ")
        let val = e.target.value;
        let values = val.split(" ");
        let currentTypingValue = values[values.length-1]
        let currentParaValue = paraValues[values.length-1]
        if(currentParaValue === currentTypingValue){
            paraValues[values.length-1] = "<span style='color:green'>"+paraValues[values.length-1]+"</span>";
            document.getElementById("para-values").innerHTML = paraValues.join(" ");
        }else{
            paraValues[values.length-1] = "<span style='color:red'>"+paraValues[values.length-1]+"</span>";
            document.getElementById("para-values").innerHTML = paraValues.join(" ");
        }
    }
    return(<div className="type-text">
        <textarea id="typing-box" className="text-box" onChange={checkCorrect}></textarea>
    </div>);
}

export default TypeText;