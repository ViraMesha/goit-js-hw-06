const navEl = document.querySelector('#categories');
console.log("Number of categories:", navEl.children.length)

const headingsEl = document.querySelectorAll('.item');

for (const heading of headingsEl) {
    console.log("Category:", heading.firstElementChild.textContent);
    console.log("Elements:", heading.lastElementChild.children.length);
}
