/**
 * Represents a crawler job in JDownloader.
 */
export class CrawlerJob {
	getArchivPasswords(): string[]
	getOrigin(): string
	getPassword(): string
	getSourceUrl(): string
	getText(): string
	getUUID(): string
	isAssignJobID(): boolean
	isDeepAnalysisEnabled(): boolean
	isOverwritesPackagizerRulesEnabled(): boolean
	setAssignJobID(assign: boolean): void
	setDeepAnalysisEnabled(enabled: boolean): void
	setPassword(password: string): void
	setText(text: string): void
}
