import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    status: InquiryStatus;
    emailOrPhone: string;
    name: string;
    createdAt: bigint;
    seenByAdmin: boolean;
    company?: string;
    message: string;
    inquiryTopic: string;
}
export interface UserProfile {
    name: string;
}
export enum InquiryStatus {
    closed = "closed",
    pending = "pending",
    open = "open"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createInquiry(name: string, company: string | null, emailOrPhone: string, inquiryTopic: string, message: string): Promise<bigint | null>;
    deleteInquiry(id: bigint): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getInquiry(id: bigint): Promise<Inquiry | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    listInquiries(offset: bigint, limit: bigint): Promise<Array<Inquiry>>;
    markInquiryAsSeen(id: bigint): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    updateInquiryStatus(id: bigint, status: InquiryStatus): Promise<void>;
}
