"use strict"

const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
    
        vertical.style.transform = `translateX(${x}px)`;
        horozontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        tag.style.transform = `translate(${x}px, ${y}px) translate(20px, 20px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    });    
});