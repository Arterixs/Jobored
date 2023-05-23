export const changeClassBody = (flag: boolean) =>
  flag ? document.body.classList.add('body-open') : document.body.classList.remove('body-open');
