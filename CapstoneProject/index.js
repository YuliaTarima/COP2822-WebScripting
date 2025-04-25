// Get the Select/Upload button
const selectOrUploadBtn = document.querySelector('.select-img-btn');
// Get the file input element
const inputFile = document.querySelector('#file');
// Get the area where image preview is shown
const imgArea = document.querySelector('.img-area');
// Get the container where the gallery images will be rendered
const imgGalleryContainer = document.querySelector('.image-container');
// Get all images already present in the gallery (if any)
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
// Add click listener on reset button to reload the page and reset everything
document.querySelector('.reset-btn .btn').onclick = () => {
    window.location.reload();
};

// Function to render the image gallery dynamically from an array
function renderGallery(images) {
    // Clear the gallery container before re-rendering
    imgGalleryContainer.innerHTML = '';

    // Update the image count
    document.getElementById('galleryCounter').textContent = `Images: ${images.length}`;

    // Loop through each image and create a card
    images.forEach((img, index) => {
        const card = document.createElement('div');
        card.className = 'image-card';

        // Create card HTML structure with image, title, description, and buttons
        card.innerHTML = `
            <img src="${img.URL}" alt="${img.title}" />
            <h3 class="galleryCardHeading">${img.title}</h3>
            <p class="imgDescription">${img.description}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
            <button class="update-btn" data-index="${index}">Update Image</button>
        `;

        // Handle remove button click: remove image from array and re-render gallery
        card.querySelector('.remove-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            images.splice(index, 1);
            renderGallery(images);
        });

        // Handle update button click: prompt for new title/description and update
        card.querySelector('.update-btn').addEventListener('click', (e) => {
            e.stopPropagation();

            // Prompt user to enter new title
            let newTitle = prompt("Enter new title:", img.title)?.trim();
            // Keep asking if title is empty
            while (!newTitle) {
                // User pressed Cancel
                if(newTitle === null || newTitle === undefined) {return;}
                newTitle = prompt("Enter new title (required):")?.trim();
            }

            // Prompt user to enter new description
            let newDesc = prompt("Enter new description:", img.description)?.trim();
            // Keep asking if description is empty
            while (!newDesc) {
                if(newDesc === null || newDesc === undefined) {return;}
                newDesc = prompt("Enter new description (required):")?.trim();
            }

            // Update the image details
            images[index].title = newTitle;
            images[index].description = newDesc;

            // Re-render updated gallery
            renderGallery(images);
        });

        // Add the card to the gallery container
        imgGalleryContainer.appendChild(card);
    });

    // Bind click-to-expand image popup after rendering
    setupImagePop();
}

// Add event listener to Select/Upload button
selectOrUploadBtn.addEventListener('click', () => {
    // Trigger file selection dialog only if in "select" mode
    if (selectOrUploadBtn.classList.contains('select-img-btn')) {
        inputFile.click();
    }
});

// When the file input changes (user selects an image)
inputFile.addEventListener('change', function () {
    const image = this.files[0];

    // Only proceed if file is under 2MB
    if (image.size < 2000000) {
        const reader = new FileReader();

        // Once image is read successfully
        reader.onload = () => {
            const imgUrl = reader.result;

            // Clear the preview area
            imgArea.innerHTML = '';

            // Show image preview
            imgArea.innerHTML = `<img src="${imgUrl}">`;

            // Switch button to "Upload" mode
            selectOrUploadBtn.textContent = "Upload Image";
            selectOrUploadBtn.classList.remove('select-img-btn');
            selectOrUploadBtn.classList.add('upload-img-btn');

            // Redefine click handler to perform image upload
            selectOrUploadBtn.onclick = () => {
                // Get user-provided title and description
                const titleInput = document.getElementById('imageTitle');
                const descInput = document.getElementById('imageDesc');

                // Clean the input values
                const title = titleInput.value.trim();
                const description = descInput.value.trim();

                // Validate title
                if (!title) {
                    alert("Please enter an image title.");
                    titleInput.focus();
                    return;
                }

                // Validate description
                if (!description) {
                    alert("Please enter an image description.");
                    descInput.focus();
                    return;
                }

                // Add new image to the beginning of the array
                imageArr.unshift({
                    URL: imgUrl,
                    title: title,
                    description: description
                });

                // Re-render updated gallery
                renderGallery(imageArr);
                setupImagePop();

                // Reset preview area to default upload icon
                imgArea.innerHTML = `
                    <i class='bx bxs-cloud-upload icon'></i>
                    <p>Image size must be less than <span>2MB</span></p>
                `;
                imgArea.classList.remove('active');

                // Clear inputs and reset file input
                document.getElementById('imageTitle').value = '';
                document.getElementById('imageDesc').value = '';
                inputFile.value = '';

                // Restore button to select mode
                selectOrUploadBtn.textContent = "Select Image";
                selectOrUploadBtn.classList.remove('upload-img-btn');
                selectOrUploadBtn.classList.add('select-img-btn');

                // Re-bind click to open file dialog
                selectOrUploadBtn.onclick = () => inputFile.click();
            };
        };

        // Start reading the image file
        reader.readAsDataURL(image);
    } else {
        // File is too large; show warning
        alert("Image size more than 2MB");
    }
});

// Function to handle image popup when clicked in gallery
function setupImagePop() {
    const imagePop = document.querySelector('.image-popup');
    const galleryImages = document.querySelectorAll('.image-container .image-card img');

    galleryImages.forEach(img => {
        img.onclick = () => {
            // Clone image card for popup display
            const card = img.closest('.image-card');
            const clonedCard = card.cloneNode(true);
            imagePop.innerHTML = '';
            imagePop.appendChild(clonedCard);
            imagePop.style.display = 'flex';

            // Get index of the clicked image
            const index = [...imgGalleryContainer.children].indexOf(card);

            // Remove image via popup
            clonedCard.querySelector('.remove-btn').onclick = () => {
                imageArr.splice(index, 1);
                renderGallery(imageArr);
                imagePop.style.display = 'none';
            };

            // Update image via popup
            clonedCard.querySelector('.update-btn').onclick = () => {
                const newTitleInput = prompt("New Title:", imageArr[index].title).trim();
                const newDescInput = prompt("New Description:", imageArr[index].description).trim();
                // Show alert if title or description is empty
                const newTitle = newTitleInput.length > 0 ? newTitleInput : alert('Image Title is required!');
                const newDesc = newDescInput.length > 0 ? newDescInput : alert('Image Description is required!');

                renderGallery(imageArr);
                imagePop.style.display = 'none';
            };
        };
    });

    // Hide popup if background is clicked
    imagePop.onclick = (e) => {
        if (e.target === imagePop) {
            imagePop.style.display = 'none';
            imagePop.innerHTML = '';
        }
    };
}

// Initial render of the gallery when page loads
renderGallery(imageArr);