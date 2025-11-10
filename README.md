# Steve's Offline Flash Games
Offline Flash Games that can work offline and never be blocked, for use during those boring times at school or work but also useful for times where there is no internet.
View the [Online Demo](https://steve-tech.github.io/Offline-Flash-Games/index.html).

**Note:** This repository now uses [Ruffle](https://ruffle.rs/), a Flash Player emulator written in Rust, which allows these games to run in modern browsers without requiring the deprecated Adobe Flash Player plugin.
## Games
 - 2048
 - Chess 3
 - Doom
 - Duck Life 1, 2, 3 & 4
 - Earn to Die 1, 2, 2012 & 2012 Part 2
 - Minicraft
 - Nyan Cat - Lost in Space
 - PAC-MAN
 - Run 1, 2 & 3
 - Tetris
 - Fireboy and Watergirl in The Crystal Temple, Forest Temple, Ice Temple & Light Temple (These haven't been tested properly yet)

## Running the Games

### Web Browser (Recommended)
Simply visit any of the HTML files in a modern web browser (Chrome, Firefox, Edge, Safari, etc.). The games will automatically load using Ruffle.

To host with a web server:
```bash
python -m http.server 8000
```

### Standalone Electron App
Download the portable zip from the releases page, or build it yourself:
```bash
npm install
npm run package
```

The application will be created in the `out/` directory.

## Download
View the [releases here](https://github.com/Steve-Tech/Offline-Flash-Games/releases).