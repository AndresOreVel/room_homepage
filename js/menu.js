export const slider = () => {
    const slides = Array.from(document.querySelectorAll(".slide"));
    const nextSlideBtn = document.querySelector(".navigation__right");
    const prevSlideBtn = document.querySelector(".navigation__left");
    const ctaHeader = document.querySelector(".cta__header");
    const ctaText = document.querySelector(".cta__text");

    const descriptions = {
        header: ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"],
        text: [`We provide unmatched quality, comfort, and style for property owners across the country.
            Our experts combine form and function in bringing your vision to life. Create a room in your
            own style with our collection and make your property a reflection of you and what you love.`,
            `With stores all over the world, it's easy for you to find furniture for your home or place of business.
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.`,
            `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
            to ensure that every product is made as perfect and as consistent as possible. With three decades of
            experience in this industry, we understand what customers want for their home and office.`
        ]
    };
    let count = 0;
    let maxCount = slides.length;
    const gotoSilde = (slide) => {
		slides.forEach((el,i) => {
			el.style.transform = `translateX(${200 * (slide - i)}%)`;
		});
	};
    const changeCta = (count) => {
        ctaHeader.textContent = descriptions.header[count];
        ctaText.textContent = descriptions.text[count];
    };
    const nextSlide = () => {
        if(count === (maxCount - 1)){
            count = 0;
        }else {
            count++;
        }
        gotoSilde(count);
        changeCta(count);
    };
    const prevSlide = (e) => {
        e.preventDefault();
        if(count == 0){
            count = maxCount - 1;
        }else {
            count--;
        }
        gotoSilde(count);
        changeCta(count);
    };
    const checkKeys = (event) => {
        if(event.code === "ArrowRight"){
            nextSlide();
        }else if (event.code === "ArrowLeft"){
            prevSlide();
        }
    };
    const init = () => {
        gotoSilde(0);
        changeCta(0);
    };
    init();
    nextSlideBtn.addEventListener("click", nextSlide);
    prevSlideBtn.addEventListener("click", prevSlide);
    document.addEventListener("keyup", checkKeys);
}