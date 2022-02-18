/*jshint esversion: 6 */

const tagsElement = document.querySelector("#tags");

const textarea = document.querySelector("#textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
});


function createTags(input) {

    // 
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsElement.innerHTML = '';

    tags.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("tag");
        tagElement.innerText = tag;
        tagsElement.appendChild(tagElement);

    });
    
}
