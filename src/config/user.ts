import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_API)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

export const account = new Account(client);
