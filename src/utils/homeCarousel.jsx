export const homeCarousel = {
        type: "loop",
        perPage: 5,
        perMove: 1,
        autoplay: true,
        interval: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true,
        pagination: false,
        drag: true,
        breakpoints: {
            340: {
                perPage: 1,
                perMove: 1,
                },
            640: {
            perPage: 2,
            perMove: 1,
            },
            720: {
            perPage: 3,
            perMove: 1,
            },
            1024: {
            perPage: 3,
            perMove: 3,
            },
        },
    }

