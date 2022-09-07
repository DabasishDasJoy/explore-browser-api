const getElementValueById = (id) =>{
    const field = document.getElementById(id);
    const value = field.innerText;

    return parseInt(value);
}
const setElementValueById = (id, value) =>{
    const field = document.getElementById(id);
    field.innerText = value;
} 
const increaseCounter = () =>{
    let prevValue = getElementValueById('count');
    prevValue++;
    setElementValueById('count', prevValue);

    setValueToLocalStorage(prevValue);
}

const setValueToLocalStorage = (value) =>{
    localStorage.setItem('value', value);
}

const displaySavedValueFromLocalStorage = () =>{
    let savedValue = localStorage.getItem('value');
    if(!savedValue){
        savedValue = 0;
    }
    setElementValueById('count', savedValue);
}

const resetCounter= () =>{
    localStorage.clear();
    setElementValueById('count', 0)
}

displaySavedValueFromLocalStorage();