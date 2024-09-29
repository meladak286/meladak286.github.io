let imageKey = "";
let images = [];
let imageIndex = 0;
var image;

document.addEventListener('DOMContentLoaded', function () {
    const pageId = document.body.getAttribute('data-page-id');
    switch (pageId) {
        case 'tic-tac-toe':
            imageKey = "tic-tac-toe";
            break;
        case 'acc-app':
            imageKey = "acc-app";
            break;
        default:
            console.error('Unknown page ID');
            break;
    }

    fetch('imagesPaths.json')
        .then(response => response.json())
        .then(data => {
            images = data[imageKey] || [];  // Use an empty array as fallback if key is not found
        })
        .catch(error => console.error('Error fetching the JSON file:', error));
});

function nextImage() {
    if(imageIndex == images.length - 1){
        imageIndex = 0;
    }
    else {
        imageIndex++;
    }
    image.src = images[imageIndex];
    console.log(imageIndex);
};

function prevImage(){
    if(imageIndex == 0){
        imageIndex = images.length - 1;
    }
    else {
        imageIndex--;
    }
    image.src = images[imageIndex];
    console.log(imageIndex);
};

document.addEventListener("DOMContentLoaded", function() {
    image = document.getElementById('app-image');
    const prevButton = document.getElementById('prev');
    if (prevButton) {
        prevButton.addEventListener('click', prevImage);
    }
    const nextButton = document.getElementById('next');
    if(nextButton) {
        nextButton.addEventListener('click', nextImage);
    }
});

