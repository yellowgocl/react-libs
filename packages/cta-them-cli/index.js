var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts)

        this.option('babel')
    }

    prompting() {
        return this.prompt([
            { 
                type: 'input ', 
                name: 'name', 
                message: 'input your project name.', 
                default: this.appname, 
                store: true 
            },
            { 
                type: 'input', 
                name: 'port', 
                message: 'input port, default 3000.', 
                default: this.appname, 
                store: true
            },
            { 
                type: 'radio', 
                name: 'jslint', 
                message: 'use eslint-config-cta-theme.', 
                default: true, 
                store: true
            },
            { 
                type: 'checkbox', 
                name: 'ui', 
                message: 'select ui library for project.', 
                default: 'cta-theme',
                choices: [
                    {
                        name: "cta-theme",
                        value: 'cta-theme'
                    },
                    {
                        name: 'myworkspace',
                        value: 'myworkspace'
                    }
                ], 
                store: true 
            },
        ])
    }

    configuring() {}

    writing() {
        const promptValues = this.config.get('promptValues')

        this.fs.copyTpl(
            this.templatePath(''),
            this.destinationPath(''),
            {
                name: promptValues.name,
                port: promptValues.port,
                ui: promptValues.ui,
                jslint: promptValues.jslint
            }
        )
    }

    install() {
        const pkgs = ['lodash', 'cta-theme-ui']
        const promptValues = this.config.get('promptValues')
        if (promptValues.jslint) {
            pkgs.push('eslint-config-cta-theme')
        }
        this.npmInstall(pkgs)
    }

    end() {
        const promptValues = this.config.get('promptValues');
        console.log(promptValues.name + ' is ready. welcome to the hell ლ(′◉❥◉｀ლ)');
    }
}