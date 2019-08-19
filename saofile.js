module.exports = {
    prompts() {
        return [
            {
                name: 'lineName',
                message: `Name:`,
                default: this.outFolder
            },
            {
                name: 'proDesc',
                message: `Description:`,
                default: 'rollup pro'
            },
            {
                name: 'hubBase',
                message: `github base url:`,
                default: ''
            },
            {
                name: 'author',
                message: `author name:`,
                default: 'ReAlign'
            }
        ];
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
