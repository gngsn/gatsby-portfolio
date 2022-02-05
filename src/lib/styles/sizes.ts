const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

export const sizes = {
    large: 1280,
    medium: 960,
    small: 600,
    xsmall: 414
};

export const getScreenSize = () => {
  if (typeof window === "undefined") return;
  if (window.innerWidth > sizes.large) return 'large';
  else if (window.innerWidth > sizes.medium) return 'medium';
  else return 'small';
};


export const device = {
    tablet: mediaQuery(sizes.medium),
    mobile: mediaQuery(sizes.small),
};
