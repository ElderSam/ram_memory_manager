const os = require("os");

// console.log('OS module - keys:');
// console.log(Object.keys(os));

setInterval(() => {
	getMemoryInfo();
}, 1000);

const getMemoryInfo = () => {
	const { arch, platform, totalmem, freemem } = os;
	const getMBFromBytes = (v) => parseInt(v / 1024 / 1024);

    const tRam = getMBFromBytes(totalmem());
	const fRam = getMBFromBytes(freemem());
    const usage = 100 - (fRam / tRam) * 100;

	const stats = {
		OS: platform(),
		Arch: arch(),
		TotalRAM: `${tRam} MB`,
		FreeRAM: `${fRam} MB`,
        Usage: `${usage.toFixed(2)} %`
	};

    console.clear();
	console.table(stats);
};
