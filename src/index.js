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

const fetchDogBreed = () => {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        breeds.message.forEach(breed => {
           
        })
    })
}