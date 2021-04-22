const extensions = ['.ts'];
const path = require('path');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve;
const pkg = require('./package.json');
const resolve = (...args) => path.resolve(...args); // 适应不同环境，封装path.resolve，少写一点代码

module.exports = [
    {
        input: resolve('./src/main.ts'),
        output: {
            file: resolve('dist/main.js'),
            format: 'amd',
        },
        plugins: [
            nodeResolve({
                extensions,
            }),
            babel({
                exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },
    {
        input: resolve('./src/modules/math/multi.ts'),
        output: {
            file: resolve('dist/module.js'),
            format: 'amd',
        },
        plugins: [
            nodeResolve({
                extensions,
            }),
            babel({
                exclude: 'node_modules/**',
                extensions,
            }),
        ],
    }
]



// const config = [
//     {
//         // 编译typescript, 生成 js 文件
//         input: {
//             indexjs: resolve('./src/main.ts'),
//             albumjs: resolve('./src/modules/time/localtime.ts')
//         },
//         output: {
//             dir: 'dist',
//             // file: resolve('./', pkg.main), // 读取 package.json 中的main作为入口。
//             format: 'amd',
//             // name: 'ultralightCopy', // umd 包要求提供，不存在模块系统的情况下，使用这个名字暴露到全局变量中， global.ultralightCopy
//         },
//         plugins: [
//             nodeResolve({
//                 extensions,
//             }),
//             babel({
//                 exclude: 'node_modules/**',
//                 extensions,
//             }),
//         ],
//     }
// ];

// export default config;
