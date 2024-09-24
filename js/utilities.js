function showSectionById(id){

    document.getElementById('donation-list').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}

function buttonChange(id1, id2){
    document.getElementById('show-donation-list').classList.add('bg-lightgreen', 'bg-transparent', 'border-gray30');
    document.getElementById('show-donation-history').classList.add('bg-lightgreen', 'bg-transparent', 'border-gray30');

    document.getElementById(id2).classList.remove('bg-lightgreen');
    document.getElementById(id1).classList.remove('bg-transparent', 'border-gray30');
}

function showPopup(id){
    document.getElementById(id).classList.remove('hidden');
}

function hidePopup(id){
    document.getElementById(id).classList.add('hidden');
}


function getInputFieldValueById(id){
    const textValue = document.getElementById(id).value;
    const textNumber = parseFloat(textValue);

    return textNumber;
    
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
