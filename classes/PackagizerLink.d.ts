import { CrawledLink } from './index.js';

/**
 * Represents a link managed by the Packagizer in JDownloader.
 */
export class PackagizerLink {
    getBytesTotal(): number
    getChunks(): number
    getComment(): string
    getCrawledLink(): CrawledLink
    getDownloadFolder(): string
    getHost(): string
    getLinkState(): string
    getName(): string
    getPackageName(): string
    /**
     * (HIGHEST|HIGHER|HIGH|DEFAULT|LOWER)
     */
    getPriority(): string
    getProperties(): Map<string, object>
    getProperty(myString: string): object
    getSourceUrls(): string[]
    getURL(): string
    /**
     * If true, the link will automove to the downloadlist
     */
    isAutoConfirmEnabled(): boolean
    /**
     * If true, the link will autostart download after beeing confirmed
     */
    isAutoStartEnabled(): boolean
    isEnabled(): boolean
    /**
     * @param myBoolean If true, the link will automove to the downloadlist
     */
    setAutoConfirmEnabled(myBoolean): void
    /**
     * @param myBoolean If true, the link will autostart download after being confirmed
     */
    setAutoStartEnabled(myBoolean: boolean): void
    setChunks(myInt: number): void
    setComment(myString: string): void
    setDownloadFolder(myString: string): void
    setEnabled(myBoolean: boolean): void
    setName(myString: string): void
    setPackageName(myString: string): void
    /**
     * @param myString HIGHEST|HIGHER|HIGH|DEFAULT|LOWER
     */
    setPriority(myString: string): void
    setProperty(myString: string, myObject: object): void
}
