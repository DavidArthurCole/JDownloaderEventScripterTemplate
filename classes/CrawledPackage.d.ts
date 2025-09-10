import { CrawledLink } from './index.js';

/**
 * Represents a crawled package in JDownloader.
 */
export class CrawledPackage {
	getAddedDate(): number
	getArchives(): Archive[]
	getBytesTotal(): number
	getComment(): string
	getDownloadFolder(): string
	getDownloadLinks(): CrawledLink[]
	getModifiedDate(): number
	getName(): string
	getPriority(): string
	getUUID(): string
	indexOf(link: CrawledLink): number
	isExpanded(): boolean
	remove(): boolean
	setComment(comment: string): void
	setDownloadFolder(folder: string): void
	setExpanded(expanded: boolean): void
	setName(name: string): void
	setPriority(priority: string): void
	toString(): string
}