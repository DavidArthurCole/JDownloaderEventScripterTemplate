/**
 * Represents an archive in JDownloader.
 *
 * @class
 * @typedef {Object} Archive
 *
 * @method getArchiveFiles
 *   @returns {ArchiveFile[]} The files in the archive.
 * @method getArchiveID
 *   @returns {string} The archive ID.
 * @method getArchiveType
 *   @returns {string} The archive type.
 * @method getDownloadLinks
 *   @returns {DownloadLink[]} The download links in the archive. (Deprecated: May be removed in future versions.)
 * @method getExtractToFolder
 *   @returns {string} The folder to extract to.
 * @method getExtractedFilePaths
 *   @returns {FilePath[]} The extracted file paths.
 * @method getExtractedFiles
 *   @returns {string[]} The extracted files.
 * @method getExtractionLog
 *   @returns {string} The extraction log. (Deprecated: May be removed in future versions.)
 * @method getExtractionStatus
 *   @returns {string} The extraction status.
 * @method getFolder
 *   @returns {string} The folder of the archive.
 * @method getInfo
 *   @returns {Object} The info object for the archive.
 * @method getLastArchiveFile
 *   @returns {ArchiveFile} The last archive file.
 * @method getName
 *   @returns {string} The name of the archive.
 * @method getParentArchive
 *   @returns {Archive} The parent archive.
 * @method getPasswords
 *   @returns {string[]} The passwords for the archive.
 * @method getRootArchive
 *   @returns {Archive} The root archive.
 * @method getSettingsID
 *   @returns {string} The settings ID of the archive.
 * @method getUsedPassword
 *   @returns {string} The used password for the archive.
 * @method isPasswordProtected
 *   @returns {boolean} True if the archive is password protected.
 * @method setPasswords
 *   @param {string[]} passwords The passwords to set for the archive.
 */
class Archive {
	/**
	 * @returns {ArchiveFile[]}
	 */
	getArchiveFiles() {}

	/**
	 * @returns {string}
	 */
	getArchiveID() {}

	/**
	 * @returns {string}
	 */
	getArchiveType() {}

	/**
	 * @deprecated May be removed in future versions.
	 * @returns {DownloadLink[]}
	 */
	getDownloadLinks() {}

	/**
	 * @returns {string}
	 */
	getExtractToFolder() {}

	/**
	 * @returns {FilePath[]}
	 */
	getExtractedFilePaths() {}

	/**
	 * @returns {string[]}
	 */
	getExtractedFiles() {}

	/**
	 * @deprecated May be removed in future versions.
	 * @returns {string}
	 */
	getExtractionLog() {}

	/**
	 * @returns {string}
	 */
	getExtractionStatus() {}

	/**
	 * @returns {string}
	 */
	getFolder() {}

	/**
	 * @returns {Object}
	 */
	getInfo() {}

	/**
	 * @returns {ArchiveFile}
	 */
	getLastArchiveFile() {}

	/**
	 * @returns {string}
	 */
	getName() {}

	/**
	 * @returns {Archive}
	 */
	getParentArchive() {}

	/**
	 * @returns {string[]}
	 */
	getPasswords() {}

	/**
	 * @returns {Archive}
	 */
	getRootArchive() {}

	/**
	 * @returns {string}
	 */
	getSettingsID() {}

	/**
	 * @returns {string}
	 */
	getUsedPassword() {}

	/**
	 * @returns {boolean}
	 */
	isPasswordProtected() {}

	/**
	 * @param {string[]} passwords
	 */
	setPasswords(passwords) {}
}