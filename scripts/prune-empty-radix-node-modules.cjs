/**
 * Yarn (node-modules linker) can leave empty `node_modules/@radix-ui` dirs under
 * nested Radix packages. Node then resolves to those paths and ENOENTs on `react-slot`/etc.
 * Remove those broken nests so hoisted packages are used.
 */
const fs = require("fs");
const path = require("path");

const radixRoot = path.join(process.cwd(), "node_modules", "@radix-ui");
if (!fs.existsSync(radixRoot)) {
	process.exit(0);
}

for (const name of fs.readdirSync(radixRoot)) {
	const pkgDir = path.join(radixRoot, name);
	if (!fs.statSync(pkgDir).isDirectory()) {
		continue;
	}
	const nestedRadix = path.join(pkgDir, "node_modules", "@radix-ui");
	if (!fs.existsSync(nestedRadix)) {
		continue;
	}
	const entries = fs.readdirSync(nestedRadix);
	if (entries.length === 0) {
		fs.rmSync(path.join(pkgDir, "node_modules"), { recursive: true, force: true });
		console.warn(
			`[prune-empty-radix-node-modules] Removed empty nested node_modules in @radix-ui/${name}`,
		);
	}
}
