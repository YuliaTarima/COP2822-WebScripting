const uploadImage = document.querySelector('.select-img-btn');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
let galleryImages = document.querySelectorAll('.image-imgContainer img');
const imageArr = [
    {
        "URL": "images/img-1.jpg",
        "title": "images/img-1.jpg",
        "description": "images/img-1.jpg"
    },
    {
        "URL": "images/img-2.svg",
        "title": "images/img-2.svg",
        "description": "images/img-2.svg"
    },
    {
        "URL": "images/img-3.png",
        "title": "images/img-3.png",
        "description": "images/img-3.png"
    },
    {
        "URL": "images/img-4.jpg",
        "title": "images/img-4.jpg",
        "description": "images/img-4.jpg"
    },
    {
        "URL": "images/img-5.jpg",
        "title": "images/img-5.jpg",
        "description": "images/img-5.jpg"
    },
    {
        "URL": "images/img-6.png",
        "title": "images/img-6.png",
        "description": "images/img-6.png"
    },
    {
        "URL": "images/img-7.svg",
        "title": "images/img-7.svg",
        "description": "images/img-7.svg"
    },
    {
        "URL": "images/img-8.jpg",
        "title": "images/img-8.jpg",
        "description": "images/img-8.jpg"
    },
    {
        "URL": "images/img-9.png",
        "title": "images/img-9.png",
        "description": "images/img-9.png"
    },
    {
        "URL": "images/img-10.svg",
        "title": "images/img-10.svg",
        "description": "images/img-10.svg"
    },
    {
        "URL": "images/img-11.jpg",
        "title": "images/img-11.jpg",
        "description": "images/img-11.jpg"
    },
    {
        "URL": "images/img-12.svg",
        "title": "images/img-12.svg",
        "description": "images/img-12.svg"
    },
    {
        "URL": "images/img-13.png",
        "title": "images/img-13.png",
        "description": "images/img-13.png"
    },
    {
        "URL": "images/img-14.jpg",
        "title": "images/img-14.jpg",
        "description": "images/img-14.jpg"
    },
    {
        "URL": "images/img-15.png",
        "title": "images/img-15.png",
        "description": "images/img-15.png"
    },
    {
        "URL": "images/img-16.svg",
        "title": "images/img-16.svg",
        "description": "images/img-16.svg"
    },
    {
        "URL": "images/img-17.jpg",
        "title": "images/img-17.jpg",
        "description": "images/img-17.jpg"
    },
    {
        "URL": "images/img-18.svg",
        "title": "images/img-18.svg",
        "description": "images/img-18.svg"
    },
    {
        "URL": "images/img-19.png",
        "title": "images/img-19.png",
        "description": "images/img-19.png"
    },
    {
        "URL": "images/img-20.jpg",
        "title": "images/img-20.jpg",
        "description": "images/img-20.jpg"
    }
];
// Reset the Gallery
document.querySelector('.reset-btn .btn').onclick = () =>{
    window.location.reload();
};
// Render image gallery function
const imgGalleryContainer = document.querySelector('.image-container');
function renderGallery(images) {
    imgGalleryContainer.innerHTML = ''; // Clear existing content
    images.forEach(img => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.innerHTML = `
      <img src="${img.URL}" alt="${img.title}" />
      <h3 class="galleryCardHeading">Title: ${img.title}</h3>
      <p class="imgDescription">Description: ${img.description}</p>
    `;
        imgGalleryContainer.appendChild(card);
    });
}
// Reset the gallery
document.querySelector('.reset-btn .btn').onclick = () =>{
    window.location.reload();
};
// Upload image
uploadImage.addEventListener('click', function () {
    inputFile.click();
})
// Uploaded Image Preview
inputFile.addEventListener('change', function () {
    const image = this.files[0]
    if(image.size < 2000000) {
        const reader = new FileReader();
        // reader.onload = ()=> {
        //     // const allImg = imgArea.querySelectorAll('img');
        //     // allImg.forEach(item=> item.remove());
        //     const imgUrl = reader.result;
        //     const img = document.createElement('img');
        //     img.src = imgUrl;
        //     imgArea.appendChild(img);
        //     imgArea.classList.add('active');
        //     imgArea.dataset.img = image.name;
        // }
        reader.onload = () => {
            const imgUrl = reader.result;

            const title = document.getElementById('imageTitle').value || 'Untitled';
            const description = document.getElementById('imageDesc').value || '';

            imageArr.unshift({
                URL: imgUrl,
                title: title,
                description: description
            });

            renderGallery(imageArr);
            setupImagePop();

            // Clear input fields
            document.getElementById('imageTitle').value = '';
            document.getElementById('imageDesc').value = '';
        };



        reader.readAsDataURL(image);
    } else {
        alert("Image size more than 2MB");
    }
})

// // Elarged Image Pop-Up
// function setupImagePop() {
//     const imagePop = document.querySelector('.image-popup');
//     const galleryImages = document.querySelectorAll('.image-container');
//
//     galleryImages.forEach(img => {
//         img.onclick = () => {
//             const imageSrc = img.getAttribute('src');
//             imagePop.style.display = 'flex';
//             imagePop.querySelector('img').src = imageSrc;
//         };
//     });
//
//     imagePop.onclick = () => {
//         imagePop.style.display = 'none';
//     };
// }

function setupImagePop() {
    const imagePop = document.querySelector('.image-popup');
    const galleryCards = document.querySelectorAll('.image-container .image-card');

    galleryCards.forEach(card => {
        card.onclick = () => {
            const clonedCard = card.cloneNode(true); // Deep clone the card
            imagePop.innerHTML = ''; // Clear previous content
            imagePop.appendChild(clonedCard);
            imagePop.style.display = 'flex';
        };
    });

    imagePop.onclick = () => {
        imagePop.style.display = 'none';
        imagePop.innerHTML = ''; // Optional: clear on close
    };
}

// any reference needs to happen after the elements are added to the DOM.
renderGallery(imageArr);
setupImagePop();
