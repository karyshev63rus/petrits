// Особенностью работы с DOM-структурой в TS является существование множества подходящих интерфейсов.
// Существует интерфейс документа (Document), различных событий (Event, MouseEvent и т.п.) и элементов на странице.
// Последние подчиняются строгой иерархии в зависимости от специфичности:
// Node - любой узел на странице: текстовый, содержимое изображения, любые элементы
// Element - любые элементы на странице,в т.ч. и невидимые на странице. Содержит базовые свойства и методы, присущие всем элементам
//HTMLElement - любые html-элементы на странице. Содержит более специфичные свойства и методы, присущие элементам
// HTMLInputElemet
// HTMLParagraphElement
// HTMLAnchorElement
// и другие - определенные html-элементы на странице. Содержат специфичные для них свойствя и методы в дополнение к общим

const box = document.querySelector('.box') as HTMLElement;
const p = document.querySelector('.paragraph') as HTMLParagraphElement;
const input = document.querySelector('a'); // автоматические определение

export {};
