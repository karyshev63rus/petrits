// Примитивы - это простые типы данных
// Литералы - это конкретные значения этих типов
// Примитивные литеральные типы -это типы на основании конкретных значений примитивов

const msg: 'Hello' = 'Hello';
const port: 5000 = 5000;
const truthy: true = true;

const port3000: number = 3000;
const port3001: number = 3001;

function startServer(
    protocol: 'http' | 'https',
    port: 3000 | 3001
): 'Server started' {
    if (port == port3000 || port == port3001) {
        console.log(`Server started on ${protocol}://server:${port}`);
    } else {
        console.error('Invalid port');
    }
    return 'Server started';
}
