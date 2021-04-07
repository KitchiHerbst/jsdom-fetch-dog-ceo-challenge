console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
   fetchDogImage()
    fetchDogBreed()
})

const fetchDogImage = () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => {
        dogs.message.forEach(dog => {
            renderDogImage(dog)
        })
    })
}

const renderDogImage = (image_url) => {
    const imageContainer = document.querySelector('#dog-image-container')
    const img = document.createElement('img')
    img.src = image_url 
    imageContainer.append(img)
}

const dogBreeds = (message) => {
    // console.log(message[1][0])
    for (let i = 0; i < message.length; i++){
        const ul = document.getElementById('dog-breeds')
        const li = document.createElement('li')
        li.innerText = message[i][0]
        ul.append(li)
    }
    // for(let object in message){
    //     let breed = message[key]
    //     console.log(breed)
    // }

}

const fetchDogBreed = () => {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        const dogs = Object.entries(breeds.message)
        dogBreeds(dogs)
    })
}