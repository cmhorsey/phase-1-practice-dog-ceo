document.addEventListener('DOMContentLoaded', function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  let dogList = document.getElementById('dog-breeds')
  let dogContainer = document.getElementById('dog-image-container')




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

  fetch(breedUrl)
  .then(res => res.json())
  .then(dogBreed => {
    let dogObj = dogBreed.message
    for(const dog in dogObj){
      let li = document.createElement('li')

      li.innerText = dog
      dogList.appendChild(li)

      li.addEventListener('click', (e) => {
        li.style.color = 'green'
      })

      // console.log(dog[0])

      let select = document.getElementById('breed-dropdown')

      select.addEventListener('change', (e) => {
        dogList.innerText = ''
        let letter = select.value

        for(const dog in dogObj) {
          if(dog[0] === letter) {
            let li = document.createElement('li')
            li.innerText = dog
            dogList.appendChild(li)
          }
        } 
      })

      //Grab select ID
      //Target value / letter
      //If selection letter === dog[0]
      //clear UL innerHTML
      //Re-add for breeds whos dog[0] === selection letter
    }
  })
})

