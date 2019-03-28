module.exports = {
    prompts: {
        lineName: {
            message: `Name:`,
            default: ':folderName:'
        },
        proDesc: {
            message: `Description:`,
            default: 'rollup pro'
        },
        hubBase: {
            message: `github base url:`,
            default: ''
        },
        author: {
            message: `author name:`,
            default: ''
        }
    },
    move: {
        gitignore: '.gitignore'
    },
    gitInit: true,
    installDependencies: true
};