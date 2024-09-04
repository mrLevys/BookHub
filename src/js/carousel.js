import $ from 'jquery';

const CustomCarouselComponent = () => {
  console.log('init customCarousel');
  let currentIndex = 0;
  const items = $('.customCarousel__item');
  const itemWidth = items.outerWidth(true);
  const container = $('.customCarousel__container');

  function updatecustomCarousel() {
    container.css('transform', `translateX(-${currentIndex * itemWidth}px)`);
  }

  $('.customCarousel__control--next').click(function () {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updatecustomCarousel();
    }
  });

  $('.customCarousel__control--prev').click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updatecustomCarousel();
    }
  });

  $('.customCarousel__item').click(function () {
    const bookId = $(this).data('id');
    window.location.href = `/book-details/${bookId}`;
  });
};

export default CustomCarouselComponent;
