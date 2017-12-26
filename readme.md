# Instant Graftification

Instant Graftification is a Javascript-based implementation of the Starfinder (an pen-and-paper RPG from Paizo) graft rules found in Appendix 1 of _Alien Archive_. The goal of this project is to enable Game Masters to easily generate printable stat blocks in a consistent, easy-to-use format. To this end, it intends to automate many of the calculations and adjustments for each graft, and insert them into a statistics block template page with a print/view version easily produced afterward. 

This repository holds the code that enables IG to function. If you would like to _use_ IG, you can simply visit [https://hectate.github.io/instagraft/index.html] to do so.

## Getting Started

IG is intended to work in a browser as a static webpage (it does not require server-side processing). As a result, simply hosting the files from this repository is usually enough to generate a working instance of IG. It is also possible to run it locally in the filesystem (tested on Firefox, Chrome).

This does not work in Internet Explorer, it appears.

### Prerequisites

This repository is designed as the complete package of files required to run IG, locally or over the internet on a host. As a result, the only other thing required is a capable browser.

### Installing

Download the repository's files to a directory somewhere on your computer. Open ``index.html`` in your preferred browser. You may now use IG in that browser.

If hosting online, you should upload the repository's files to your host. Once they are served to authorized clients (e.g. publicly or internally, etc), the client's browser has IG loaded and ready for use.

## Built With

* [Vue.js](https://vuejs.org/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Versioning

Each release of IG will include a major and minor version number. Major versions will include any breaking changes to functionality or features. Minor versions will be bug-fixes and other non-breaking updates (such as graft/content rules) of the current major version.

## Authors

* **Nathaniel Mitchell** - *Initial work* - [Hectate](https://github.com/Hectate) or [u/Hectate](https://www.reddit.com/user/Hectate)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Paizo : for Starfinder and the graft rules
* [OmniscientStone](https://www.reddit.com/user/OmniscientScone) : for the Spells list in JSON format
* My co-GM group game for giving me a reason to work on this!
* [Starfinder RPG on Discord](https://discord.gg/7EKgfwK) : for bugtesting, opinions, and encouragement
* [Starfinder RPG on Reddit](https://www.reddit.com/r/starfinder_rpg) : for bugtesting, opinions, and encouragement

