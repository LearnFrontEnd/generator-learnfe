'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Learn Front End Base Project') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is this project called?',
      default: this.appname // Default to current folder name
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      mkdirp.sync('./assets/img/');

      var context = {
        site_name: this.props.name
      };

      console.log(context.site_name);

      this.template('_index.html', 'index.html', context);

      this.fs.copy(
        this.templatePath('_style.css'),
        this.destinationPath('assets/css/style.css')
      );
      this.fs.copy(
        this.templatePath('_main.js'),
        this.destinationPath('assets/js/main.js')
      );
    }

  }
});
