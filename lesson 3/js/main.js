/* Взаимодействия с элементами по атрибутам */

// $('a[download]').css('border', '1px solid red'); // Простой атрибут
// $('a[href="http://ya.ru"]').css('border', '1px solid red'); // Полное соответствие
// $('a[href!="http://ya.ru"]').css('border', '1px solid red'); // Полное несоответствие
// $('a[href^="http"]').css('border', '1px solid red'); // Все, чей атрибут href начинается с ...
// $('a[href$=".com"]').css('border', '1px solid red'); // Заканчивается на ... 
// $('a[href*="google"]').css('border', '1px solid red'); // Содержит ... 
// $('a[data-target|="main"]').css('border', '1px solid red'); // Имеет префикс - ... 
// $('a[href][download]').css('border', '1px solid red'); // Имеет одновременно несколько атрибутов 
// $('a[href], [download]').css('border', '1px solid red'); // Имеет один из атрибутов 

/* 
Написать на jQuery обращение к элементам по: 

-> Атрибуту href 
-> Атрибуту href, который полностью соответствует "http://mail.ru"
-> Атрибуту src, который начинается на "img/"
-> Атрибуту src, который заканчивается на ".js" 
-> Атрибутам src и title  
*/
$('[href]');
$('[href="http://mail.ru"]');
$('[src^="img/"]');
$('[src$=".js"]');
$('[src], [title]');