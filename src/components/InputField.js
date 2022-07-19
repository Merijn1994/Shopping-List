import {useState} from "react"

function InputField({ onSubmit }) {
    const [inputValue, setinputValue] = useState("")
    
    const onButtonPress = () => {
        if (inputValue.length > 0) {
            onSubmit(inputValue)
            setinputValue("")
        }
    }

    return (
    <div className="input-field">
        <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
        />
        <button onClick={onButtonPress} placeholder="Add a grocery item">
            Add
        </button>
    </div>
    )
}

export default InputField