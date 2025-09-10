import { Archive, ConditionalSkipReason, FilePackage, HTTPProxy, LinkInfo } from './index.js';

/**
 * Represents a download list link in JDownloader.
 */
export class DownloadLink {
    abort(): void;
    getAddedDate(): number
    getAdvancedStatus(): object
    getArchive(): Archive
    getArchiveID(): string
    getAvailableState(): string
    getBytesLoaded(): number
    getBytesTotal(): number
    getBytesTotalVerified(): number
    getComment(): string
    getConditionalSkipReason(): ConditionalSkipReason
    getContainerURL(): string
    getContentURL(): string
    getDownloadDuration(): number
    getDownloadHost(): string
    getDownloadPath(): string
    getDownloadProxy(): HTTPProxy
    getDownloadSessionDuration(): number
    getDownloadTime(): number
    getEta(): number
    getExtractionStatus(): string
    getFinalLinkStatus(): string
    getFinalName(): string
    getFinishedDate(): number
    getForcedName(): string
    getHashInfo(): string
    getHost(): string
    getLinkID(): string
    getLinkInfo(): LinkInfo
    getName(): string
    getOriginURL(): string
    getPackage(): FilePackage
    getPluginURL(): string
    getPriority(): string
    getProperties(): Map<string, object>
    getProperty(key: string): object
    getReferrerURL(): string
    getSessionProperty(key: string): object
    getSkippedReason(): string
    getSpeed(): number
    getStatus(): string
    getTempProperties(): Map<string, object>
    getTempProperty(key: string): object
    getUUID(): string
    getUrl(): string
    isAborting(): boolean
    isActive(): boolean
    isEnabled(): boolean
    isFinished(): boolean
    isPartOfAnArchive(): boolean
    isResumeable(): boolean
    isRunning(): boolean
    isSkipped(): boolean
    remove(): boolean
    reset(): void
    resume(): void
    setComment(comment: string): void
    setEnabled(enabled: boolean): void
    setName(name: string): void
    setPriority(priority: string): void
    setProperty(key: string, value: object): void
    setSessionProperty(key: string, value: object): void
    setSkipped(skipped: boolean): void
    setTempProperty(key: string, value: object): void
    toString(): string
}
