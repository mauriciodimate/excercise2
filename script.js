let gallery = document.getElementById ("gallery");
console.log(gallery);

let images = []

for (let i = 1; i < 12; i++) {
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

$gallery.innerHTML = images.join('')

const $imagelist = document.querySelectorAll('.picture')
console.log($imagelist)




/*let pictures = images.join(",");
console.log(pictures);

gallery.textContent = images;

to link the image
image.setAttribute("src", "images/" + i * ".JPG"

//** insert the images like the emoji  create a div with image tag inside  delegar event listner para los botones*/

