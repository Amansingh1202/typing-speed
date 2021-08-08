import {useEffect,useState} from "react"
import TextPara from "./components/TextPara"
import TypeText from "./components/TypeText"
import Timer from "./components/Timer"

function App() {

  const [paraText,setParaText] = useState("");

  useEffect(() => { 
    fetch('https://random-word-api.herokuapp.com/word?number=30')
    .then(response => response.json())
    .then(data => {
      const textData = data.join(' ')
      setParaText(textData)
    });
  },[]);


  return (
    <div className="App">
      <TextPara paraText={paraText} />
      <TypeText paraText={paraText} />
      <Timer />
    </div>
  );
}

export default App;
