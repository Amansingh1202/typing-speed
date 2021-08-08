import './TextPara.css'

function TextPara({paraText}) {
    return(<div className="para-text" id="para-values">{paraText?paraText:'Loading....'}</div>);
}

export default TextPara;