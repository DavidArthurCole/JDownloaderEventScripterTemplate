import { ArchiveFile, DownloadLink, FilePath } from './index.js';

/**
 * Represents an archive in JDownloader.
 */
export class Archive {
	getArchiveFiles(): ArchiveFile[];
	getArchiveID(): string;
	getArchiveType(): string;
	/**
	 * @deprecated May be removed in future versions.
	 */
	getDownloadLinks(): DownloadLink[];
	getExtractToFolder(): string;
	getExtractedFilePaths(): FilePath[];
	getExtractedFiles(): string[];
	/**
	 * @deprecated May be removed in future versions.
	 */
	getExtractionLog(): string;
	getExtractionStatus(): string;
	getFolder(): string;
	getInfo(): object;
	getLastArchiveFile(): ArchiveFile;
	getName(): string;
	getParentArchive(): Archive;
	getPasswords(): string[];
	getRootArchive(): Archive;
	getSettingsID(): string;
	getUsedPassword(): string;
	isPasswordProtected(): boolean;
	setPasswords(passwords: string[]): void;
}
