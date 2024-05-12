import React, { useState } from "react";



const customDictionary ={

    teh: 'the',
    wrok: 'work',
    fot: 'for',
    exampl: 'example',
}


const SpellChecking = () => {



const [inputText , setInputChange] = useState("");
const[suggestionText , setSuggestion] = useState("")


  const handleInputChange = (e) => {

       const text = e.target.value

       setInputChange(text)


       const words = text.split(" ");

       const correctWords = words.map((word)=>{

         const correctWord = customDictionary[word.toLowerCase()];

         return correctWord || word
       })
           
        correctWords.join(" ");


       const firstCorrection =  correctWords.find((word , index)=> word !== words[index]);

       setSuggestion(firstCorrection);


  };
 
 
 
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        row={5}
        col={40}
      />

{suggestionText && (
        <p>
          Did you mean: <strong>{suggestionText}</strong>
        </p>
      )}
    </div>
  );
}

export default SpellChecking;
