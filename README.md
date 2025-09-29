# Nuno's archive redirector

This is a Chrome extension that redirects pages to their saved version on archive.org / archive.ph. It is based on [this extension](https://chromewebstore.google.com/detail/archivetoday-automator/mmhadhnchpgicjlmlcdfaapkekknnkha?hl=en-US), which redirects to an older domain, but has been expanded to also query archive.org. It is useful to view past versions of pages, but also to view pages accessible to crawlers but not to normal users.

## Built with

- [Hello world extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world)
- Archive.org
- Archive.is 
- [Flat Icon]("https://www.flaticon.com/free-icons/redirect")

## How to install

Download this repository as a folder with:

```sh
git clone git@github.com:NunoSempere/archive-redirector.git
```

Go to chrome://extensions and click "load unpacked". By design, chrome://extensions is not linkable. In brave, go to brave://extensions. Load this extension. In brave, you can assign a shortcut to this extension on brave://extensions/shortcuts. For instance, I assigned Ctrl+P.

If you want to get an updated version, navigate to your previous folder 

```sh
git pull origin master
```

Then go to chrome://extensions (respectively brave://extensions) and reload the extension.

## Roadmap

- [ ] Consider publishing it on the [Chrome store](https://developer.chrome.com/docs/webstore/publish)
  - [x] Register developer account
  - [ ] Change icons
  - [ ] Create and upload item
- [ ] Advertise on Twitter
- [ ] Consider how to update this extension once published
- [ ] Consider <https://github.com/wasi-master/13ft>

## Contributing.

Contributions are welcome. For instance, it might be a good idea to make the archive url generic. 

## See also

- [longnow-for-markdown](https://github.com/NunoSempere/longnow-for-markdown)
- [Nuño's Stupid Node Version Manager](https://github.com/NunoSempere/nsnvm)
- [Distribution calculator](https://github.com/NunoSempere/distribution-calculator-android)
