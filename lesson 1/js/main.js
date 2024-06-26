/* Базовые селекторы */

// ? Когда мы хотим обратиться к какому-то элементу в jQuery, то ставим в начале "$""

$('#id') // Обращение по идентификатору (id) Элемент 1.
$('.class') // Обращение по классу .class Элементов может быть несколько
$('div') // Обращение по тегу
$('*') // Обращение ко всем элементам

// * ================================================================= * \\
// * Задания *
/* 
Написать на jQuery обращение к элементам по: 

-> Селектору тега
-> По идентификатору #advantage
-> По классу .active-item
-> По селектору ко всем элементам на странице 
*/

console.log($('a'));
console.log($('#advantage'));
console.log($('.active-item'));
console.log($('*'));
$('a')
$('#advantage')
$('.active-item')
$('*')

// * ------------------------------>>
// * Links:
// * [Справочник по jQuery] https://jquery.page2page.ru/