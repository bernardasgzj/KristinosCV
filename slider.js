
        <script>
        removeExistingSlidingEffects()
        // Get the element by its ID
        const buttonLeft = document.getElementById('left');
        const buttonRight = document.getElementById('right');
        const allImageCount = document.getElementsByClassName('image').length;

        var oldActiveImage = document.getElementsByClassName('active')[0];
        var oldImagePosition = oldActiveImage.getAttribute('data-carousel-position');
        var newActiveImage = ''
        var newImgPosition = 0

        // Add a click event listener to the button
        buttonLeft.addEventListener('click', function() {
            removeExistingSlidingEffects()
            newImgPosition = allImageCount

            if (oldImagePosition != 1) {
                newImgPosition = parseInt(oldImagePosition) - 1
            }
            console.log(newImgPosition)

            newActiveImage = document.querySelector('[data-carousel-position="' + newImgPosition + '"]')

            oldActiveImage.classList.add('slide-out-right');
            newActiveImage.classList.add('slide-in-left');
            newActiveImage.classList.add('active');
            oldActiveImage.classList.add('out-going');
            oldActiveImage.classList.remove('active');

            oldActiveImage = newActiveImage;
            oldImagePosition = oldActiveImage.getAttribute('data-carousel-position');
        });

        buttonRight.addEventListener('click', function() {
            removeExistingSlidingEffects()
            newImgPosition = 1


            if (oldImagePosition != allImageCount) {
                newImgPosition = parseInt(oldImagePosition) + 1
            }
            console.log(newImgPosition)

            newActiveImage = document.querySelector('[data-carousel-position="' + newImgPosition + '"]')

            oldActiveImage.classList.add('slide-out-left');
            newActiveImage.classList.add('slide-in-right');
            newActiveImage.classList.add('active');
            oldActiveImage.classList.add('out-going');
            oldActiveImage.classList.remove('active');

            oldActiveImage = newActiveImage;
            oldImagePosition = oldActiveImage.getAttribute('data-carousel-position');
        });
        

        function removeExistingSlidingEffects()
        {
            document.querySelector('div.slide-in-left')?.classList?.remove('slide-in-left')
            document.querySelector('div.slide-in-right')?.classList?.remove('slide-in-right')
            document.querySelector('div.slide-out-left')?.classList?.remove('slide-out-left')
            document.querySelector('div.slide-out-right')?.classList?.remove('slide-out-right')
            document.querySelector('div.out-going')?.classList?.remove('out-going')
        }
      </script>
    