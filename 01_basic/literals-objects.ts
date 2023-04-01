// Применение объектного литерала
const serverConfig: { protocol: 'http' | 'https'; port: 3000 | 3001 } = {
    protocol: 'http',
    port: 3000,
};

// Главное здесь - отличить аннотацию от объявления самой функции
const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string = (
    protocol: 'http' | 'https',
    port: 3000 | 3001
): 'Server started' => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
};

startServer(serverConfig.protocol, serverConfig.port);
