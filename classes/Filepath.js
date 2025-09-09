
/**
 * Represents a file or directory path in JDownloader.
 *
 * @class
 * @typedef {Object} FilePath
 *
 * @method copyTo
 *   @param {string} dest The destination path.
 *   @returns {boolean} True if the copy was successful.
 * @method copyTo
 *   @param {string} dest The destination path.
 *   @param {string} newName The new name for the file.
 *   @param {boolean} overwrite Whether to overwrite existing files.
 *   @returns {boolean} True if the copy was successful.
 * @method delete
 *   @returns {boolean} True if the file or directory was deleted.
 * @method deleteRecursive
 *   @returns {boolean} True if the directory and its contents were deleted.
 * @method exists
 *   @returns {boolean} True if the file or directory exists.
 * @method getAbsolutePath
 *   @returns {string} The absolute path.
 * @method getChildren
 *   @returns {FilePath[]} The child files/directories.
 * @method getCreatedDate
 *   @returns {number} The creation date as a long.
 * @method getExtension
 *   @returns {string} The file extension.
 * @method getFreeDiskSpace
 *   @returns {number} The free disk space in bytes.
 * @method getLinkInfo
 *   @returns {LinkInfo} The LinkInfo object for the file.
 * @method getModifiedDate
 *   @returns {number} The last modified date as a long.
 * @method getName
 *   @returns {string} The file or directory name.
 * @method getParent
 *   @returns {FilePath} The parent directory.
 * @method getPath
 *   @returns {string} The path.
 * @method getPathSeparator
 *   @returns {string} The system path separator.
 * @method getReservedDiskSpace
 *   @returns {number} The reserved disk space in bytes.
 * @method getSize
 *   @returns {number} The size in bytes.
 * @method isDirectory
 *   @returns {boolean} True if this is a directory.
 * @method isFile
 *   @returns {boolean} True if this is a file.
 * @method mkdirs
 *   @returns {boolean} True if the directories were created.
 * @method moveTo
 *   @param {string} dest The destination path.
 *   @returns {boolean} True if the move was successful.
 * @method rename
 *   @param {string} newName The new name for the file or directory.
 *   @returns {FilePath} The renamed FilePath object.
 * @method renameName
 *   @param {string} newName The new name for the file or directory.
 *   @returns {FilePath} The renamed FilePath object.
 * @method renamePath
 *   @param {string} newPath The new path for the file or directory.
 *   @returns {FilePath} The renamed FilePath object.
 * @method renameTo
 *   @param {string} dest The destination path.
 *   @returns {boolean} True if the rename was successful.
 * @method toString
 *   @returns {string} String representation of the file path.
 */
class FilePath {
	/**
	 * @param {string} dest
	 * @returns {boolean}
	 */
	copyTo(dest) {}

	/**
	 * @param {string} dest
	 * @param {string} newName
	 * @param {boolean} overwrite
	 * @returns {boolean}
	 */
	copyTo(dest, newName, overwrite) {}

	/**
	 * @returns {boolean}
	 */
	delete() {}

	/**
	 * @returns {boolean}
	 */
	deleteRecursive() {}

	/**
	 * @returns {boolean}
	 */
	exists() {}

	/**
	 * @returns {string}
	 */
	getAbsolutePath() {}

	/**
	 * @returns {FilePath[]}
	 */
	getChildren() {}

	/**
	 * @returns {number}
	 */
	getCreatedDate() {}

	/**
	 * @returns {string}
	 */
	getExtension() {}

	/**
	 * @returns {number}
	 */
	getFreeDiskSpace() {}

	/**
	 * @returns {LinkInfo}
	 */
	getLinkInfo() {}

	/**
	 * @returns {number}
	 */
	getModifiedDate() {}

	/**
	 * @returns {string}
	 */
	getName() {}

	/**
	 * @returns {FilePath}
	 */
	getParent() {}

	/**
	 * @returns {string}
	 */
	getPath() {}

	/**
	 * @returns {string}
	 */
	getPathSeparator() {}

	/**
	 * @returns {number}
	 */
	getReservedDiskSpace() {}

	/**
	 * @returns {number}
	 */
	getSize() {}

	/**
	 * @returns {boolean}
	 */
	isDirectory() {}

	/**
	 * @returns {boolean}
	 */
	isFile() {}

	/**
	 * @returns {boolean}
	 */
	mkdirs() {}

	/**
	 * @param {string} dest
	 * @returns {boolean}
	 */
	moveTo(dest) {}

	/**
	 * @param {string} newName
	 * @returns {FilePath}
	 */
	rename(newName) {}

	/**
	 * @param {string} newName
	 * @returns {FilePath}
	 */
	renameName(newName) {}

	/**
	 * @param {string} newPath
	 * @returns {FilePath}
	 */
	renamePath(newPath) {}

	/**
	 * @param {string} dest
	 * @returns {boolean}
	 */
	renameTo(dest) {}

	/**
	 * @returns {string}
	 */
	toString() {}
}
