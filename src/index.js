document.addEventListener('DOMContentLoaded', function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  let dogList = document.getElementById('dog-breeds')
  let dogContainer = document.getElementById('dog-image-container')

  function displayDogs() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => {
      let dogPics = Object.entries(dogs.message)
  
      dogPics.forEach(dog => {
        let img = document.createElement('img')
        img.src = dog[1]
  
        dogContainer.appendChild(img)
      })
    })
  }

function displayBreedList() {
  fetch(breedUrl)
  .then(res => res.json())
  .then(dogBreed => {
    let dogObj = dogBreed.message
    for(const dogBreed in dogObj){
      let li = document.createElement('li')

      li.innerText = dogBreed
      dogList.appendChild(li)

      li.addEventListener('click', () => {
        li.style.color = 'green'
      })

        function sortBreeds() {
          let select = document.getElementById('breed-dropdown')
          select.addEventListener('change', () => {
            dogList.innerText = ''
            let letter = select.value

            for(const dogBreed in dogObj) {
              if(dogBreed[0] === letter) {
                let li = document.createElement('li')
                li.innerText = dogBreed
                dogList.appendChild(li)
                li.addEventListener('click', () => {
                  li.style.color = 'green'
              })
            }
          } 
        })
      }
    } sortBreeds()
  })
}

  displayBreedList()
  displayDogs()
})

