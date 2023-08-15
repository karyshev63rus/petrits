type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };

type Role = { role: 'admin' };

type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
    protocol: 'http',
    port: 3000,
    role: 'admin',
};

const backupConfig: Config = { protocol: 'https', port: 3001 };

export { Config, Role, ConfigWithRole };

console.log(serverConfig, backupConfig);

export {};
