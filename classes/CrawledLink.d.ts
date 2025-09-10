import { Archive, CrawledPackage, DownloadLink, LinkInfo } from './index.js';

/**
 * Represents a crawled link in JDownloader.
 */
export class CrawledLink {
    getAddedDate(): number
    getAdvancedStatus(): Map<string, object>
    getArchive(): Archive
    getArchiveID(): string
    getAvailableState(): string
    getBytesTotal(): number
    getBytesTotalVerified(): number
    getComment(): string
    getContainerURL(): string
    getContentURL(): string
    getDownloadHost(): string
    getDownloadLink(): DownloadLink
    getDownloadPath(): string
    getFinalName(): string
    getForcedName(): string
    getHashInfo(): string
    getHost(): string
    getLinkID(): string
    getLinkInfo(): LinkInfo
    getName(): string
    getOriginURL(): string
    getPackage(): CrawledPackage
    getPluginURL(): string
    getPriority(): string
    getProperties(): Map<string, object>
    getProperty(key: string): object
    getReferrerURL(): string
    getSessionProperty(key: string): object
    getSourceJob(): CrawlerJob
    getUUID(): string
    getUrl(): string
    isEnabled(): boolean
    isNameSet(): boolean
    isPartOfAnArchive(): boolean
    remove(): boolean
    setComment(comment: string): void
    setEnabled(enabled: boolean): void
    setName(name: string): void
    setPriority(priority: string): void
    setProperty(key: string, value: object): void
    setSessionProperty(key: string, value: object): void
    toString(): string
}