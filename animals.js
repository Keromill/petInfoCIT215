const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

const showInfo = () => {
    let petNum = document.querySelector("#petNum");
    petNum = parseInt(petNum.value)-1;
    if(!(petNum >= 0 && petNum < petsData.length))
        alert(`Invalid input provided, please try again!`)
    let pet = petsData[petNum];
    let petString = `${pet.petName} is a ${pet.age} year old ${pet.breed}! They weigh ${pet.weightInKilos} kilos!`
    
    let petHTML = document.querySelector(".selectedPetInfo");
    petHTML.innerHTML = petString;
}