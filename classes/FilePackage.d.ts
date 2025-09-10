import { Archive, DownloadLink } from './index.js';

/**
 * Represents a download list package in JDownloader.
 */
export class FilePackage {
	getAddedDate(): number
	getArchives(): Archive[]
	getBytesLoaded(): number
	getBytesTotal(): number
	getComment(): string
	getDownloadFolder(): string
	getDownloadLinks(): DownloadLink[]
	getFinishedDate(): number
	getModifiedDate(): number
	getName(): string
	getPriority(): string
	getProperties(): object
	getProperty(key: string): object
	getUUID(): string
	indexOf(link: DownloadLink): number
	isExpanded(): boolean
	isFinished(): boolean
	remove(): boolean
	setComment(comment: string): void
	setDownloadFolder(folder: string): void
	setExpanded(expanded: boolean): void
	setName(name: string): void
	setPriority(priority: string): void
	setProperty(key: string, value: object): void
	toString(): string
}