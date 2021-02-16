const webpack = require('webpack');
const config = require('./webpack.config');

webpack(config, (err, stats) => {
    if (err) {
        console.error(err);
        return void process.exit(1);
    }

    const {compilation} = stats;

    const modules = [...compilation.modules];

    const cssModules = modules.filter(i => /\.css/.test(i.identifier()));

    function loop(module, ident) {
        console.log(`${'-'.repeat(ident)} :: ${module.identifier()}`);

        if (module.issuer)
            loop(module.issuer, ident+1);
    }

    cssModules.forEach(m => loop(m, 0));
});
