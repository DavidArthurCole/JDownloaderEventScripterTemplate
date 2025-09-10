# JDownloaderEventScripterTemplate
Class definitions and default script definitions for JDownloader2's Event Scripter.
This is mainly meant to serve as a good basis for writing Event Scripter scripts, since JD's UI... leaves a lot to be desired.

### A few things to note:
- Items in `/classes` represent JDownloader object types, and do not have implementations in this code-base.
- `global.d.ts` is the representation of the Global set of properties/functions available. Again, no implementations.
- `const`s are defined in the `/scripts` dir to act as placeholders for the JD objects.
    - If you plan to move these scripts to JD, copy below the comment line, and down.
- In a few of the files, const names have had an `_` appended to the const, due to reserved words in JS (notably, `package`).
    - These will also need to be removed/replaced with un-underscored versions when moving to JD.
- Some of the JSdocs were written making assumptions about parameter names/uses, since JD's docs... also leave a lot to be desired.
