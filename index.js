function rollDice(){

    const numofDice = document.getElementsById("numOfDice").value;
    const diceResult = document.getElementsById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1; 
        console.log(value);
    }
}