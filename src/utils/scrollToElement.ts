export function scrollToElement(selector: string) {
  const lastViewedImage = document.querySelector(selector) as HTMLElement;
  if (lastViewedImage) {
    try {
      lastViewedImage.focus?.();
      lastViewedImage.scrollIntoView();
    } catch (e) {
      console.log(e);
    }
  }
}
