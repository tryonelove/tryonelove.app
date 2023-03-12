declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_GITHUB_PROFILE_URL: string;
            NEXT_PUBLIC_LINKEDIN_PROFILE_URL: string;
            NEXT_PUBLIC_TELEGRAM_PROFILE_URL: string;
        }
    }
}

export {};
