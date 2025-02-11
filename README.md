# GitHub-style .tmTheme files

I really like GitHub's code theme (light and dark). It's technically called "PrettyLights" and it's closed source, but I usually hobble together some theme for any software I use. I have been liking to use bat which has a GitHub theme but only light mode so at night I find myself questioning why I can't read anything.

This repo takes the excellent work [mauroreisvieira](https://github.com/mauroreisvieira) did with [github-sublime-theme](https://github.com/mauroreisvieira/github-sublime-theme) (which I daily drive) and simply converts to a `.tmTheme` using ChatGPT so it's probably not even totally accurate.

## Instructions ([bat](https://github.com/sharkdp/bat))
- Download `gh-light.tmTheme` and `gh-dark.tmTheme` and save to `~/.config/bat/themes`
- Tell `bat` to find the new themes: `bat cache --build`
- (optional) preview the themes: `bat --list-themes`
- Edit `~/.config/bat/config` like so:

```
--theme-dark="gh-dark"
--theme-light="gh-light"
```
