let gallery = document.getElementById ("gallery");
console.log(gallery);

let images = []

for (let i = 1; i < 19; i++) {
    images.push(`
    <div class="picture"id="pic">
    <p>
    <img src="images/img${i}.JPG" class="">
    </p>
    <p>
    ${i}

    </p>
    </div>
    `)
}

gallery.innerHTML = images.join('')

const $imagelist = document.querySelectorAll('.picture')

for(let item of $imagelist) {
    if(item.children[1].textContent.trim() === '2') {
        console.log('found it')
        item.style.backgroundColor= 'grey'
    }
}

gallery.addEventListener('click', function(event) {
    const value = event.target.closest('div').children[1].textContent.trim()
     let name = ''
  switch (value) {

        case '1':
        name = 'aboriginal-orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
        break
        case '2':
        name = 'cars on the street -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
        break
        case '3':
         name = 'rat cat-orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
         break
        case '4':
         name = 'skull- -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
         break
        case '5':
         name = 'grand ma -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
         break
        case '6':
         name = 'jazz -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
         break
         case '7':
          name = 'tunnel -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
          break
        case '8':
           name = 'grafitis -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
        break
        case '9':
        name = 'sinatra -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
        break
        case '10':
           name = 'sunset -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
        break
        case '11':
         name = 'dog -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
         break
         case '12':
          name = 'cartoons -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
          break
          case '13':
           name = 'dodgers -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
         break
           case '14':
            name = 'bycicle -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
         break
            case '15':
             name = 'couple -orginal size:3712 × 5568 pixels from Mauricio Dimate-Montreal-2020'
     }

      document.getElementById('preview').innerHTML = `
      
      <p>
       ${name} 
      </p>
      <p>
     ${value} 
      </p>
      ` }
  
)






/*let pictures = images.join(",");
console.log(pictures);

gallery.textContent = images;

to link the image
image.setAttribute("src", "images/" + i * ".JPG"

//** insert the images like the emoji  create a div with image tag inside  delegar event listner para los botones*/

