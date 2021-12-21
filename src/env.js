const packageJson = require('../package.json');

function requireFromEnv(key, defaultValue) {
    value = process.env[key] || defaultValue || null;
    if (value == null) {
        console.error('Must specify ', key);
        process.exit(1);
    }
    return value;
}

module.exports = {
    appName: requireFromEnv('APP_NAME', 'app_name_here'),
    env: requireFromEnv('NODE_ENV', 'dev'),
    port: parseInt(requireFromEnv('PORT', 3001), 10),
    version: packageJson.version
}