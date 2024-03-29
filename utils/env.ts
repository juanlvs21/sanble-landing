const ENV: NodeJS.ProcessEnv = process.env;

export const FIREBASE_PROJECT_ID = ENV.FIREBASE_PROJECT_ID || "";
export const FIREBASE_PRIVATE_KEY = ENV.FIREBASE_PRIVATE_KEY || "";
export const FIREBASE_CLIENT_EMAIL = ENV.FIREBASE_CLIENT_EMAIL || "";
export const FIREBASE_STORAGE_BUCKET = ENV.FIREBASE_STORAGE_BUCKET || "";
