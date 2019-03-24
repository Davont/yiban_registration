# Eclass Registration system

[![Build Status](https://www.travis-ci.org/Davont/yiban_registration.svg?branch=master)](https://www.travis-ci.org/Davont/yiban_registration)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FDavont%2Fyiban_registration.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FDavont%2Fyiban_registration?ref=badge_shield)

![清晰版.jpg](https://i.loli.net/2019/03/24/5c96eeef44b59.jpg)

_The system provides online registration service for freshmen of yiban_

## Usage

This project is mainly divided into two parts: the front-end display page and the export document

    .
    ├── export_system           # Export student information
    ├── src                     # frontend files
    ├──.babelrc
    ├──.travis.yml
    ├──gulpfile.js
    ├──package.json
    ├──.coveralls.yml
    └── README.md

## Front-end sign-up page

    # Clone the repo
    git clone https://github.com/Davont/yiban_registration.git

    # Find your folder
    cd yiban_registration

    # Install http-server (install Node and NPM first)
    npm install

    #build
    gulp

    #clean
    gulp clean

    # Start
    cd src
    npm install http-server
    http-server

## Export_system

You have to learn Cloud storage services [LearnCloud][1] before using the system

_Thanks to [NemoAlex][2] for the export tool : [leanstorage-exporter][3]_

### Supported Formats

| fileType | file ext | Description                     |
| :------- | -------: | :------------------------------ |
| `xlsx`   |  `.xlsx` | Excel 2007+ XML Format          |
| `csv`    |   `.csv` | Comma Separated Values          |
| `html`   |  `.html` | HTML Document                   |
| `xlsm`   |  `.xlsm` | Excel 2007+ Macro XML Format    |
| `xlsb`   |  `.xlsb` | Excel 2007+ Binary Format       |
| `xlml`   |   `.xls` | Excel 2003-2004 (SpreadsheetML) |
| `biff2`  |   `.xls` | Excel 2.0 Worksheet format      |
| `ods`    |   `.ods` | OpenDocument Spreadsheet        |
| `fods`   |  `.fods` | Flat OpenDocument Spreadsheet   |
| `sylk`   |  `.sylk` | Symbolic Link (SYLK)            |
| `dif`    |   `.dif` | Data Interchange Format (DIF)   |
| `prn`    |   `.prn` | Lotus Formatted Text            |

### Development

    # build for production
    yarn build

    # development mode
    yarn dev

    # serve the bundled dist folder in production mode
    yarn serve

[1]: https://leancloud.cn/
[2]: https://github.com/NemoAlex
[3]: https://github.com/ROYL-Design/leanstorage-exporter
