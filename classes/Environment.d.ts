/**
 * Represents the environment information in JDownloader.
 */
export class Environment {
	getARCHFamily(): string
	getJavaVersion(): number
	getNewLine(): string
	getOS(): string
	getOSFamily(): string
	getPathSeparator(): string
	is64BitArch(): boolean
	is64BitJava(): boolean
	is64BitOS(): boolean
	isBSD(): boolean
	isHeadless(): boolean
	isLinux(): boolean
	isMac(): boolean
	isWindows(): boolean
}