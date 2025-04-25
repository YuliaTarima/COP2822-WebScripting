const uploadImage = document.querySelector('.select-img-btn');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
let galleryImages = document.querySelectorAll('.image-imgContainer img');
const imageArr = [
    {
        "URL": "images/img-1.jpg",
        "title": "Yellow",
        "description": "Fluffy, yellow, and cute"
    },
    {
        "URL": "images/img-2.svg",
        "title": "Yum",
        "description": "It's the most wonderful time of the year"
    },
    {
        "URL": "images/img-3.png",
        "title": "Corn",
        "description": "Grown worldwide"
    },
    {
        "URL": "images/img-4.jpg",
        "title": "Marine Mammal",
        "description": "Intelligent, playful, friendly"
    },
    {
        "URL": "images/img-5.jpg",
        "title": "Bushy tails",
        "description": "With a hint of nut-hoarding habits"
    },
    {
        "URL": "images/img-6.png",
        "title": "Noodles",
        "description": "Wanna some?"
    },
    {
        "URL": "images/img-7.svg",
        "title": "Penguin Love",
        "description": "Mate for life"
    },
    {
        "URL": "images/img-8.jpg",
        "title": "Bold",
        "description": "Built for any storm"
    },
    {
        "URL": "images/img-9.png",
        "title": "BFF",
        "description": "A timeless chase"
    },
    {
        "URL": "images/img-10.svg",
        "title": "Baby Shark",
        "description": "To-do, to-do, do-do"
    },
    {
        "URL": "images/img-11.jpg",
        "title": "Orange",
        "description": "Philosophy"
    },
    {
        "URL": "images/img-12.svg",
        "title": "Vacation",
        "description": "Paradise"
    },
    {
        "URL": "images/img-13.png",
        "title": "Grilled",
        "description": "Eggs-tremely flavorful"
    },
    {
        "URL": "images/img-14.jpg",
        "title": "Coffee",
        "description": "The world can wait"
    },
    {
        "URL": "images/img-15.png",
        "title": "Hamburger",
        "description": "How is it connected to Hamburg?"
    },
    {
        "URL": "images/img-16.svg",
        "title": "Party",
        "description": "Ready to pop some fun?"
    },
    {
        "URL": "images/img-17.jpg",
        "title": "Topped with syrup",
        "description": "Warm stacks of happiness"
    },
    {
        "URL": "images/img-18.svg",
        "title": "Nature’s smile",
        "description": "Bright and colorful beauty"
    },
    {
        "URL": "images/img-19.png",
        "title": "Pink",
        "description": "Touch of sweetness"
    },
    {
        "URL": "images/img-20.jpg",
        "title": "Timeless",
        "description": "Speak what words cannot"
    }
];
// Reset the Gallery
document.querySelector('.reset-btn .btn').onclick = () =>{
    window.location.reload();
};
// Render image gallery function
const imgGalleryContainer = document.querySelector('.image-container');

function renderGallery(images) {
    imgGalleryContainer.innerHTML = '';

    // Update counter
    document.getElementById('galleryCounter').textContent = `Images: ${images.length}`;

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

        // Event listener for the "Update" button
        card.querySelector('.update-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            // Prompt for new title and description
            const newTitle = prompt("Enter new title:", img.title);
            const newDesc = prompt("Enter new description:", img.description);
            images[index].title = newTitle || 'Untitled';
            images[index].description = newDesc || '';
            renderGallery(images); // Re-render the gallery after update
        })

        imgGalleryContainer.appendChild(card);
    });
    setupImagePop(); // 💡 Re-bind click listeners after rendering
}
// Reset the gallery
document.querySelector('.reset-btn .btn').onclick = () =>{
    window.location.reload();
};
// Get a reference to the Select/Upload button
const selectOrUploadBtn = document.querySelector('.select-img-btn');

// Variable to temporarily store the selected image and its preview URL
let previewedImage = null;

// When the Select/Upload button is clicked
selectOrUploadBtn.addEventListener('click', () => {
    // Only trigger the file selection dialog if the button is in "select" mode
    if (selectOrUploadBtn.classList.contains('select-img-btn')) {
        inputFile.click(); // Opens file picker dialog
    }
});

// Listen for when the user selects an image file
inputFile.addEventListener('change', function () {
    const image = this.files[0]; // Get the selected image file

    // Check if the file is under 2MB
    if (image.size < 2000000) {
        const reader = new FileReader(); // Create FileReader to read image content

        // Once the file is read as a data URL
        reader.onload = () => {
            const imgUrl = reader.result; // Data URL of the image
            const imgArea = document.querySelector('.img-area'); // Container for image or upload icon
            // Clear any existing content inside the imgArea
            imgArea.innerHTML = '';
            imgArea.innerHTML = `<img src="${imgUrl}">`;

            // Create a new image element for preview
            // const img = document.createElement('img');
            // img.src = imgUrl;
            // img.classList.add('preview-img');
            // imgArea.appendChild(img);
            // // Insert the new preview image
            // imgArea.classList.add('active'); // Add styling class to indicate active preview
            // imgArea.dataset.img = image.name; // Store the image name as a data attribute

            // Store the preview image data for later upload
            // previewedImage = {
            //     URL: imgUrl,
            //     file: image
            // };

            // Change the button appearance and behavior to "Upload Image"
            selectOrUploadBtn.textContent = "Upload Image";
            selectOrUploadBtn.classList.remove('select-img-btn');
            selectOrUploadBtn.classList.add('upload-img-btn');

            // Change the button behavior to handle the actual upload
            selectOrUploadBtn.onclick = () => {
                // Get values from title and description input fields
                const title = document.getElementById('imageTitle').value || 'Untitled';
                const description = document.getElementById('imageDesc').value || '';

                // Add the new image to the beginning of the image array
                imageArr.unshift({
                    // URL: previewedImage.URL,
                    URL: imgUrl,
                    title: title,
                    description: description
                });

                // Render the gallery with updated images
                renderGallery(imageArr);
                setupImagePop(); // Rebind image popup handler

                // Reset the image area to its default "cloud upload" icon and message
                imgArea.innerHTML = `
                    <i class='bx bxs-cloud-upload icon'></i>
                    <p>Image size must be less than <span>2MB</span></p>
                `;
                imgArea.classList.remove('active'); // Remove active styling

                // Clear input fields and file selection
                document.getElementById('imageTitle').value = '';
                document.getElementById('imageDesc').value = '';
                inputFile.value = '';
                previewedImage = null;

                // Revert button back to "Select Image"
                selectOrUploadBtn.textContent = "Select Image";
                selectOrUploadBtn.classList.remove('upload-img-btn');
                selectOrUploadBtn.classList.add('select-img-btn');

                // Restore the button click behavior to open file selector
                selectOrUploadBtn.onclick = () => inputFile.click();
            };
        };

        // Read the image file as a data URL (base64-encoded string)
        reader.readAsDataURL(image);
    } else {
        // Alert if image is too large
        alert("Image size more than 2MB");
    }
});


function setupImagePop() {
    const imagePop = document.querySelector('.image-popup');
    const galleryImages = document.querySelectorAll('.image-container .image-card img');

    galleryImages.forEach(img => {
        img.onclick = () => {
            const card = img.closest('.image-card');
            const clonedCard = card.cloneNode(true);
            imagePop.innerHTML = '';
            imagePop.appendChild(clonedCard);
            imagePop.style.display = 'flex';

            const index = [...imgGalleryContainer.children].indexOf(card);

            // Remove button inside popup
            clonedCard.querySelector('.remove-btn').onclick = () => {
                imageArr.splice(index, 1);
                renderGallery(imageArr);
                imagePop.style.display = 'none';
            };

            // Update button inside popup
            clonedCard.querySelector('.update-btn').onclick = () => {
                const newTitle = prompt("New Title:", imageArr[index].title);
                const newDesc = prompt("New Description:", imageArr[index].description);
                imageArr[index].title = newTitle || "Untitled";
                imageArr[index].description = newDesc || '';
                renderGallery(imageArr);
                imagePop.style.display = 'none';
            };
        };
    });

    imagePop.onclick = (e) => {
        if (e.target === imagePop) {
            imagePop.style.display = 'none';
            imagePop.innerHTML = '';
        }
    };
}

renderGallery(imageArr);
