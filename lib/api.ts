type ApiOptions = RequestInit & {
    timeout?: number;
};

class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get<T>(endpoint: string, options?: ApiOptions): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: "GET" });
    }

    async post<T>(
        endpoint: string,
        body: any,
        options?: ApiOptions
    ): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                ...options?.headers,
                "Content-Type": "application/json",
            },
        });
    }

    private async request<T>(
        endpoint: string,
        options: ApiOptions = {}
    ): Promise<T> {
        const { timeout = 10000, ...fetchOptions } = options;
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                ...fetchOptions,
                signal: controller.signal,
            });

            clearTimeout(id);

            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            clearTimeout(id);
            throw error;
        }
    }
}

// Export a singleton instance.
// Replace '' with your actual API base URL.
export const api = new ApiClient(process.env.NEXT_PUBLIC_API_URL || "/api");
