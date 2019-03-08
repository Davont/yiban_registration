# Eclass Registration system

_The system provides online registration service for freshmen of yiban_

## Usage

This project is mainly divided into two parts: the front-end display page and the export document

    .
    ├── export_system           # Export student information
    ├── sign-up_pages
    └── README.md

## Front-end sign-up page

    # Clone the repo
    git clone https://github.com/Davont/yiban_registration.git

    # Install http-server (install Node and NPM first)
    npm install http-server -g

    # Find your folder
    cd yiban_registration

    # Start
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
