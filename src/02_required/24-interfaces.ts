interface Config {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
    log: (msg: string) => void;
}

interface IStyles {
    [key: string]: string;
}

const Styles: IStyles = {
    position: 'absolute',
    top: '20px',
};

export {};
