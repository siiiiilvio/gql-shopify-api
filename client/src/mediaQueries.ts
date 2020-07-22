const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

const device = (minMax?: String) => {
    return {
        mobileS: `(${minMax}-width: ${size.mobileS})`,
        mobileM: `(${minMax}-width: ${size.mobileM})`,
        mobileL: `(${minMax}-width: ${size.mobileL})`,
        handHeldOnly: `(min-width: ${size.mobileS}) and (max-width: ${size.tablet})`,
        tablet: `(${minMax}-width: ${size.tablet})`,
        laptop: `(${minMax}-width: ${size.laptop})`,
        laptopL: `(${minMax}-width: ${size.laptopL})`,
        desktop: `(${minMax}-width: ${size.desktop})`,
        desktopL: `(${minMax}-width: ${size.desktop})`,
    };
};

export { size, device };
