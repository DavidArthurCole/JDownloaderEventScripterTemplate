
/**
 * Represents the environment information in JDownloader.
 *
 * @class
 * @typedef {Object} Environment
 *
 * @method getARCHFamily
 *   @returns {string} The architecture family (e.g., x86, x64).
 * @method getJavaVersion
 *   @returns {number} The Java version as a long.
 * @method getNewLine
 *   @returns {string} The system new line character(s).
 * @method getOS
 *   @returns {string} The operating system name.
 * @method getOSFamily
 *   @returns {string} The operating system family.
 * @method getPathSeparator
 *   @returns {string} The system path separator.
 * @method is64BitArch
 *   @returns {boolean} True if the architecture is 64-bit.
 * @method is64BitJava
 *   @returns {boolean} True if Java is 64-bit.
 * @method is64BitOS
 *   @returns {boolean} True if the OS is 64-bit.
 * @method isBSD
 *   @returns {boolean} True if the OS is BSD.
 * @method isHeadless
 *   @returns {boolean} True if running in headless mode.
 * @method isLinux
 *   @returns {boolean} True if the OS is Linux.
 * @method isMac
 *   @returns {boolean} True if the OS is macOS.
 * @method isWindows
 *   @returns {boolean} True if the OS is Windows.
 */
class Environment {
	/**
	 * @returns {string}
	 */
	getARCHFamily() {}

	/**
	 * @returns {number}
	 */
	getJavaVersion() {}

	/**
	 * @returns {string}
	 */
	getNewLine() {}

	/**
	 * @returns {string}
	 */
	getOS() {}

	/**
	 * @returns {string}
	 */
	getOSFamily() {}

	/**
	 * @returns {string}
	 */
	getPathSeparator() {}

	/**
	 * @returns {boolean}
	 */
	is64BitArch() {}

	/**
	 * @returns {boolean}
	 */
	is64BitJava() {}

	/**
	 * @returns {boolean}
	 */
	is64BitOS() {}

	/**
	 * @returns {boolean}
	 */
	isBSD() {}

	/**
	 * @returns {boolean}
	 */
	isHeadless() {}

	/**
	 * @returns {boolean}
	 */
	isLinux() {}

	/**
	 * @returns {boolean}
	 */
	isMac() {}

	/**
	 * @returns {boolean}
	 */
	isWindows() {}
}