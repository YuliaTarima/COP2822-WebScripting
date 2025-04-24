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

// function renderGallery(images) {
//     imgGalleryContainer.innerHTML = ''; // Clear existing content
//
//     images.forEach((img, index) => {
//         const card = document.createElement('div');
//         card.className = 'image-card';
//         card.innerHTML = `
//             <img src="${img.URL}" alt="${img.title}" />
//             <h3 class="galleryCardHeading">${img.title}</h3>
//             <p class="imgDescription">${img.description}</p>
//             <button class="remove-btn" data-index="${index}">Remove Image</button>
//         `;
//
//         // Add event listener to remove button
//         card.querySelector('.remove-btn').addEventListener('click', (e) => {
//             e.stopPropagation(); // Prevent triggering other events like image popup
//             images.splice(index, 1); // Remove from array
//             renderGallery(images);   // Re-render gallery
//         });
//
//         imgGalleryContainer.appendChild(card);
//     });
// }

function renderGallery(images) {
    imgGalleryContainer.innerHTML = '';

    images.forEach((img, index) => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.innerHTML = `
            <img src="${img.URL}" alt="${img.title}" />
            <h3 class="galleryCardHeading">${img.title}</h3>
            <p class="imgDescription">${img.description}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
            <button class="update-btn" data-index="${index}">Update Image</button>
        `;

        // Remove button
        card.querySelector('.remove-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            images.splice(index, 1);
            renderGallery(images);
        });

        // // Update button
        // card.querySelector('.update-btn').addEventListener('click', (e) => {
        //     e.stopPropagation();
        //     const newTitle = prompt("Enter new title:", img.title);
        //     const newDesc = prompt("Enter new description:", img.description);
        //
        //     if (newTitle && newDesc) {
        //         // Update only title and description, not URL
        //         images[index] = {
        //             ...images[index],
        //             title: newTitle,
        //             description: newDesc
        //         };
        //         renderGallery(images);
        //     }
        // });
        // Event listener for the "Update" button
        card.querySelector('.update-btn').addEventListener('click', (e) => {
            e.stopPropagation();

            // Prompt for new title and description
            const newTitle = prompt("Enter new title:", img.title);
            const newDesc = prompt("Enter new description:", img.description);

            // if (newTitle && newDesc) {
                // Update only title and description, not the URL
                images[index].title = newTitle || 'Untitled';
                images[index].description = newDesc || '';

                renderGallery(images); // Re-render the gallery after update
            // }
            renderGallery(images); // Re-render the gallery after update
        })

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

function setupImagePop() {
    const imagePop = document.querySelector('.image-popup');
    const galleryImages = document.querySelectorAll('.image-container .image-card img');

    galleryImages.forEach(img => {
        img.onclick = (e) => {
            e.stopPropagation(); // Prevent bubbling up to card
            const card = img.closest('.image-card');
            const clonedCard = card.cloneNode(true);
            imagePop.innerHTML = '';
            imagePop.appendChild(clonedCard);
            imagePop.style.display = 'flex';
        };
    });

    imagePop.onclick = () => {
        imagePop.style.display = 'none';
        imagePop.innerHTML = '';
    };
}

// any reference needs to happen after the elements are added to the DOM.
renderGallery(imageArr);
setupImagePop();
