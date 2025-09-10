/**
 * Represents a modify lock in JDownloader.
 */
export class ModifyLock { 
    readLock(): boolean
    readUnlock(myBoolean: boolean): void
    writeLock(): void
    writeUnlock(): void
}