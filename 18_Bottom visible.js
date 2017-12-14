// Use scrollY, scrollHeight and clientHeight to determine 
//if the bottom of the page is visible.

//判断页面是否到底

const bottomVisible = _ =>
document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight;
// bottomVisible() -> true

