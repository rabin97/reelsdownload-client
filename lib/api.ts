/**
 * API Client - Complete API service for Instagram downloader
 */

import axios, { AxiosError } from "axios";

// Type definitions for Instagram API responses
export interface InstagramApiError {
    code: string;
    message: string;
    details?: string;
}

export interface InstagramPost {
    type: "reel" | "post" | "carousel";
    code: string;
    author: string;
    caption: string;
    timestamp: number;
    thumbnail: string;
    items: Array<{
        type: "video" | "image";
        url: string;
        width: number;
        height: number;
        quality?: string;
        thumbnail: string;
    }>;
    videoVersions?: Array<{
        url: string;
        width: number;
        height: number;
        type: string | null;
        bitrate: number | null;
    }> | null;
    videoUrl?: string;
    allUrls?: string[];
    like_count: number;
    view_count?: number;
    comment_count: number;
    video_duration?: number | null;
    original_width: number | null;
    original_height: number | null;
    user_full_name: string;
    user_profile_pic: string;
    is_verified: boolean;
    carousel_media_count: number | null;
}

export interface InstagramAudioResult {
    success: boolean;
    file_name: string;
    file_size: number;
    duration: number;
    title: string;
    uploader: string;
    download_url: string;
    expires_at: string;
    error: InstagramApiError | null;
}

export interface InstagramApiResponse {
    success: boolean;
    results: InstagramPost[] | null;
    timestamp: string;
    request_id: string;
    error: InstagramApiError | null;
    partial_success: boolean;
    failed_count: number;
    success_count: number;
}

export interface InstagramProfile {
    username: string;
    full_name: string;
    biography: string;
    profile_pic_url: string;
    profile_pic_url_hd: string;
    is_verified: boolean;
    is_private: boolean;
    is_business_account: boolean;
    follower_count: number;
    following_count: number;
    post_count: number;
    external_url: string | null;
}

export interface InstagramProfileResponse {
    success: boolean;
    profile: InstagramProfile | null;
    timestamp: string;
    request_id: string;
    error: InstagramApiError | null;
}

// Configure axios instance
const apiClient = axios.create({
    baseURL:
        typeof window === "undefined"
            ? process.env.NEXT_PUBLIC_API_URL || ""
            : "",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Warn if API URL is not configured
if (typeof window !== "undefined" && !process.env.NEXT_PUBLIC_API_URL) {
    console.warn(
        "⚠️ NEXT_PUBLIC_API_URL is not configured. API requests may fail."
    );
}

/**
 * Fetch Instagram post data
 */
export async function getInstagramPostData(
    url: string,
    token: string
): Promise<InstagramApiResponse> {
    try {
        const response = await apiClient.post<InstagramApiResponse>(
            "/api/v1/instagram/get-post-data",
            { url: url },
            {
                headers: {
                    "CF-Turnstile-Response": token,
                },
            }
        );

        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError<{
            error?: InstagramApiError;
        }>;

        const errorMessage =
            axiosError.response?.data?.error?.message ||
            axiosError.message ||
            "Failed to fetch Instagram data. Please try again.";

        throw new Error(errorMessage);
    }
}

/**
 * Fetch Instagram audio data
 */
export async function getInstagramAudioData(
    url: string,
    token: string
): Promise<InstagramAudioResult> {
    try {
        const response = await apiClient.post<InstagramAudioResult>(
            "/api/v1/instagram/download-audio",
            { url: url },
            {
                headers: {
                    "CF-Turnstile-Response": token,
                },
            }
        );

        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError<{
            error?: InstagramApiError;
        }>;

        const errorMessage =
            axiosError.response?.data?.error?.message ||
            axiosError.message ||
            "Failed to fetch Instagram audio. Please try again.";

        throw new Error(errorMessage);
    }
}

/**
 * Fetch Instagram profile data
 */
export async function getInstagramProfileData(
    url: string,
    token: string
): Promise<InstagramProfileResponse> {
    try {
        const response = await apiClient.post<InstagramProfileResponse>(
            `/api/v1/instagram/profile`,
            { url: url },
            {
                headers: {
                    "CF-Turnstile-Response": token,
                },
            }
        );

        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError<{
            error?: InstagramApiError;
        }>;

        const errorMessage =
            axiosError.response?.data?.error?.message ||
            axiosError.message ||
            "Failed to fetch Instagram profile data. Please try again.";

        throw new Error(errorMessage);
    }
}

/**
 * Fetch Instagram post insights
 */
export async function getPostInsights(
    url: string,
    token: string
): Promise<InstagramApiResponse> {
    try {
        const response = await apiClient.post<InstagramApiResponse>(
            "/api/v1/instagram/get-posts-data",
            {
                urls: [url],
                quality: "highest",
            },
            {
                headers: {
                    "CF-Turnstile-Response": token,
                },
            }
        );

        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError<{
            error?: InstagramApiError;
        }>;

        const errorMessage =
            axiosError.response?.data?.error?.message ||
            axiosError.message ||
            "Failed to fetch Instagram insights. Please try again.";

        throw new Error(errorMessage);
    }
}
