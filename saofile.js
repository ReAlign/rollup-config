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
    actions: [
        {
          type: 'add',
          // Copy and transform all files in `template` folder into output directory
          files: '**'
        },
        {
          type: 'move',
          patterns: {
            gitignore: '.gitignore'
          }
        }
    ],
    async completed() {
        this.gitInit()
        await this.npmInstall()
        this.showProjectTips()
    }
};
