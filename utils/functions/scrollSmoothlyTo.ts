const scrollSmoothlyTo = (idOfTarget: string): void => {
  const target = document.getElementById(idOfTarget);
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const offset = 50;
    const scrollToPosition = targetPosition - offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  }
};

export default scrollSmoothlyTo;
