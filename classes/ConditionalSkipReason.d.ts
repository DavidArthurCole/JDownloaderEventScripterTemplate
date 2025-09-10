import { DownloadLink } from './index.js';

/**
 * Represents a conditional skip reason in JDownloader.
 */
export class ConditionalSkipReason {
	getClassName(): string
	getDownloadLinkCondition(): DownloadLink
	getMessage(): string
	getTimeOutLeft(): number
	getTimeOutTimeStamp(): number
	getWaitingSkipReason(): string
	isConditionReached(): boolean
	isDownloadLinkCondition(): boolean
	isTimeOutCondition(): boolean
}