---
title: 'Propelling developer experience through configuration'
---

The number of config files per repo is slowly but surely overtaking the number of code files.    

<figure>
  <img src="/images/angular-github.png" alt="Angular">
  <figcaption>
    <a href="https://cloudup.com/c8BGrAQmmgd">Hi-res source</a>
    <strong>Warning</strong>: large image <em>1.6 MB</em></figcaption>
</figure>


A brief, but not in any way exhaustive list of just the ones I've dealt with:

### Code meta (dependencies, instructions, declarations)
- .eslintrc(.json)*
- .gitconfig
- .editorconfig
- package.json
- bower.json
- gulpfile.js
- gruntfile.js
- project.xml
- .vscode
- .flowconfig
- .tsconfig.json
- .jsconfig.json
- Gemfile
- Gemfile.lock
- Rakefile
- .ruby-version
- config.ru
- Makefile
- Dockerfile
- Vagrantfile
- _config.yml
- config/
- CNAME
- travis.yml
- docker-compose.yml
- requirements.txt
- manifest.yml
- sass-lint.yml
- .stylelint* 
- Procfile
- .babelrc*
- Cargo.toml

_* Can also be embedded into package.json_

#### Ignore files
- .cfignore
- .eslintignore
- .npmignore
- .gitignore

### Docs
- README
- CONTRIBUTING
- DOCS
- CODE OF CONDUCT
- HISTORY/CHANGELOG
- LICENSE
- .github
- .github/ISSUE_TEMPLATE.md
- .github/PULL_REQUEST.md


## The Problems
- Far too many [package managers](http://blog.ezyang.com/2015/12/the-convergence-of-compilers-build-systems-and-package-managers/).
- No one seems to notice that JSON has an alarming number of flavors, official and unofficial.
  · [JSON5](http://json5.org/): main draw is comment support
    - For reference, package.json is [_not_ JSON5](https://github.com/npm/npm/issues/4482), which is odd, and I'll explain why-later.
  · [JSON-LD](http://json-ld.org/): A.K.A. "JSON Linked Data". Used by nearly universally by every search engine. This one is more important than people realize. 

## Proposed Solutions
1. Put globals in: `~/config/` (notice [no preceding dot](https://twitter.com/rauchg/status/698689087620804608)), which is the only deviance from [`XDG_CONFIG`](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html).

2. Adhere to a convention and version across platforms and runtimes. 
Almost all of these are JSON or Markdown. 
config.json and README.md

Here is why I mentioned that JSON-LD is important. Search engines use JSON-LD as a standard for representing almost everything, which is documented on [Schema.org](https://schema.org/).
This also includes 2 specific schemas, [`SoftwareSourceCode`](https://schema.org/SoftwareSourceCode), and [`SoftwareApplication`](https://schema.org/SoftwareApplication).

Let's pretend that magically, Node, Java, Swift, Rust, Go, Python, C, and others had their config.json(ld?) files all set and ready to go.
What would happen to: 
- GitHub search? 
- App Store searches?
- Package registry searches?
- Google, Disconnect, DuckDuckGo, Bing, etc searches? 
- [BigQuery results](https://medium.com/google-cloud/github-on-bigquery-analyze-all-the-code-b3576fd2b150)?

They'd all be consistent, and easily parsed, everywhere.

### Side bonus: HTML already supports JSON-LD

That's right, you can embed JSON-LD, today.
```
<script type="application/ld+json">
{...}
</script>
```

In fact, npm uses JSON-LD schemas in their registry website, which again, is very strange considering that package.json is not JSON-LD. 
Go to any package page [like this one](https://www.npmjs.com/package/isomorphic-fetch), and inside the HTML, you'll find a few examples of [HTML5 Microdata](https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata) (a markup counterpart of JSON-LD), including the following:
```html
<script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "isomorphic-fetch",
      "description": "Isomorphic WHATWG Fetch API, for Node &amp;amp; Browserify",
      "url": "https://www.npmjs.com/package/isomorphic-fetch",
      "keywords": "",
      "applicationCategory": "DeveloperApplication",
      "offers": {
         "@type": "Offer",
         "price": "0.00"
      }
    }
  </script>
```

Now, this also means that [Web Components can leverage this same data](https://developers.google.com/web/updates/2015/03/creating-semantic-sites-with-web-components-and-jsonld), 
on top of already supporting the aforementioned HTML5 Microdata, and [RDFa](https://rdfa.info/). 

Why does it matter that HTML likes this kind of structured data? UX. Therer are multiple tools that have emerged in recent years that help people navigate dependencies and understand code at a better level. 

Two such that come to mind, recalling that the "LD" stands for "Linked Data". 
 - http://octolinker.github.io/
 - https://sourcegraph.com/
 
Now, think of the projects that span runtimes, leveraging web languages.
 - http://electron.atom.io/
 - https://facebook.github.io/react-native/
 - http://ionicframework.com/
 - tons more
 
There's no way I could even speculate the possibilties. 

### Other potential benefits
1. Reduce the amount of global config. 

Here's my home directory right now:
```shell
⩘ ls -H
.CFUserTextEncoding                   .oracle_jre_usage/
.DS_Store                             .ports.json
.Trash/                               .python_history
.anyconnect                           .rbenv/
.atom/                                .rnd
.babel.json                           .ssh/
.bash_history                         .subversion/
.bash_sessions/                       .travis/
.bundle/                              .v8flags.4.6.85.31.kevinSuttle.json
.cabal/                               .v8flags.5.0.71.35.kevinSuttle.json
.cache/                               .v8flags.5.0.71.52.kevinSuttle.json
.cargo/                               .v8flags.5.1.281.83.kevinSuttle.json
.cf/                                  .vim/
.cheat/                               .viminfo
.cisco/                               .vimrc
.config/                              .vscode/
.cups/                                .vscode-react-native/
.electron/                            .yarn/
.elm/                                 .yarn-cache/
.gem/                                 .zcompdump
.gitconfig                            .zprofile
.gitkraken/                           .zshrc
.gnupg/                               Applications/
.gvimrc                               Box Sync/
.histfile                             Code/
.hushlogin                            Creative Cloud Files/
.hyper.js                             Desktop/
.hyper_plugins/                       Documents/
.hyperterm_plugins/                   Downloads/
.ipfs/                                GitBook/
.iterm2/                              Hy:qp/
.iterm2_shell_integration.zsh*        IBMERS/
.jspm/                                Library/
.local/                               Movies/
.node-gyp/                            Music/
.node_repl_history                    Pictures/
.now.json                             Public/
.npm/                                 SpiderOak Hive/
.npmrc                                lib/
.nvm/                                 node_modules/
.ocamlinit                            
.opam/
```

And inside ~/.config/? More, based on `XD_CONFIG`. 
```shell
⩘ ls -FH 
.DS_Store          aliases            bashrc             configstore/       fish/              prompt
PowerShell/        asciinema/         browser-launcher2/ env                git/               zsh/
README.md          bash/              colors             extras             local              zshrc
```

Do we really need all this? I'm not saying we should put all global config into one file, but something's gotta give at some point. 

Is this lofty and unrealistically ambitious? Maybe. Maybe not. My goal here is to document the state of things, and offer a potential solution that could work for a majority of use cases.
Let's stop reinventing the wheel and start managing our software intelligently. 
