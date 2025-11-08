import { CrawledLink, DownloadLink, FilePath } from './index.js';

/**
 * Represents an archive file in JDownloader.
 */
export class ArchiveFile {
	exists(check: boolean): boolean
	getArchiveID(): string
	getCrawledLinks(): CrawledLink[]
	getDownloadLinks(): DownloadLink[]
	getExtractionStatus(): string
	getFilePath(): string
	getFileSize(): number
	getName(): string
	getPath(): FilePath
	invalidateExists(): void
	isComplete(): boolean
	isMissingArchiveFile(): boolean
	isPartOfAnArchive(): boolean
}
