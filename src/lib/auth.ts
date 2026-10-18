import { db } from "@/lib/db";

// Admin password - in production this would be hashed & in env
const ADMIN_PASSWORD = "900021";
const SESSION_COOKIE = "dharma_admin_session";
const SESSION_TOKEN = "dharma-admin-" + Buffer.from(ADMIN_PASSWORD).toString("base64");

export function getAdminPassword() {
  return ADMIN_PASSWORD;
}

export function getSessionToken() {
  return SESSION_TOKEN;
}

export function getSessionCookieName() {
  return SESSION_COOKIE;
}

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function isValidSession(token: string | undefined | null): boolean {
  if (!token) return false;
  return token === SESSION_TOKEN;
}

// Simple in-memory session store (with cookie)
export async function createSession() {
  return SESSION_TOKEN;
}
