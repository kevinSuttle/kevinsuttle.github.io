---
layout: post
title: Zero to Productive
---

Point symlinks to your `Dropbox/Apps/$DEV_TOOL`

## Dropbox

Use Dropbox for:
* Alfred 
* 1Password db
* Transmit favorites
* TextExpander backups
* Mail attachments from various 3rd party mail clients
* Dash snippets 
* iTerm profiles
* [Sublime Text packages]([https://sublime.wbond.net/docs/syncing#dropbox-osx](https://sublime.wbond.net/docs/syncing#dropbox-osx)
) (themes, prefs, plugins, command line, etc.) 


##Sublime Text 


### [Command line](http://www.sublimetext.com/docs/3/osx_command_line.html)
```
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" ~/bin/subl 
```
First machine:
```
cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/
mkdir ~/Dropbox/Sublime
mv User ~/Dropbox/Sublime/
ln -s ~/Dropbox/Sublime/User
```

Each additional machine:
```
cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/
rm -r User
ln -s ~/Dropbox/Sublime/User
```


### Package control (Sublime Text 3)

```
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```	

## [Homebrew Cask](https://github.com/phinze/homebrew-cask)

Use Homebrew Cask for:  
* Apps that can or do live outside the Mac App Store  
* Quicklook plugins  
* Color palettes  
* Color pickers  
* Fonts*  




## iCloud
Use iCloud for:  
* Photo Steam  
* Mail/Internet accounts (Keychain)  
* Calendars  
* Contacts  
* Docs (iWork, Preview, TextEdit, whichever apps you choose, really)  
* Reminders  
* Notes  
* Messages  
* Safari bookmarks, history, cross-device sessions


## Chrome
Use Chrome for:  
* bookmarks, history, cross-device sessions, extensions, preferences, and [more](https://www.google.com/intl/en/chrome/browser/signin.html)
