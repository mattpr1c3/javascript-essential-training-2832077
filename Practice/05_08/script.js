/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
document.querySelector("main").classList.add("new-class", "newer-class")

document.querySelector("main").classList.remove("newer-class")

document.querySelector("main").setAttribute("title", "this shouldn't be here")

document.querySelector("main").getAttribute("title")

document.querySelector("main").setAttribute("title", "we don't need a title here")