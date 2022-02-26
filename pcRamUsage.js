const os = require('os');

// console.log('OS module - keys:');
// console.log(Object.keys(os));

const { arch, platform, totalmem, freemem } = os;
const getGBFromBytes = (v) => parseInt(v  / 1024 / 1024);
const tRam = getGBFromBytes(totalmem());
const fRam = getGBFromBytes(freemem());

const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: tRam,
    FreeRAM: fRam,
}

console.log(stats);