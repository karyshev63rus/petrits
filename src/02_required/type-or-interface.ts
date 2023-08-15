import { Config, Role } from './intersections';

// Если нужен примитивный тип для псевдонима - типы

// Если нужно расширить готовый интерфейс - интерфейсы

// При работе с объектами конкретной разницы не будет

// Вывод - использовать интерфейсы, пока нет необходимости использовать типы

type ConfigWithRole = Config & Role;

const adminConfigFromType: ConfigWithRole = {
    protocol: 'https',
    port: 3000,
    role: 'admin',
};

console.log('from type', adminConfigFromType);

interface IConfig {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
}
interface IRole {
    role: 'admin';
}
interface IConfigWithRole extends IConfig, IRole {}

interface IConfigWithRole {
    date: Date;
}

const adminConfig: IConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    date: new Date(),
};

console.log('from interface', adminConfig);
