import { i as __toESM } from "../_runtime.mjs";
import { I as require_react_dom, L as require_jsx_runtime, R as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as Program, i as Renderer, n as Color, r as Mesh, t as Triangle } from "../_libs/ogl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GatewayApp-D-Aexi-D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/**
* Gateway API client extracted from the original Chatery dashboard.
* Talks to /api/whatsapp, which the backend serves directly (or the app's
* proxy routes forward to it in standalone dev).
*/
var API_BASE = "/api/whatsapp";
var API_ENDPOINTS = [
	{
		group: "Sessions",
		value: "GET|/api/whatsapp/qr",
		label: "GET /qr?username=&phone_number="
	},
	{
		group: "Sessions",
		value: "GET|/api/whatsapp/sessions",
		label: "GET /sessions - List all sessions"
	},
	{
		group: "Sessions",
		value: "GET|/api/whatsapp/sessions/{sessionId}/status",
		label: "GET /sessions/:id/status"
	},
	{
		group: "Sessions",
		value: "GET|/api/whatsapp/sessions/{sessionId}/qr",
		label: "GET /sessions/:id/qr"
	},
	{
		group: "Sessions",
		value: "GET|/api/whatsapp/sessions/{sessionId}/qr/image",
		label: "GET /sessions/:id/qr/image"
	},
	{
		group: "Sessions",
		value: "POST|/api/whatsapp/sessions/{sessionId}/connect",
		label: "POST /sessions/:id/connect"
	},
	{
		group: "Sessions",
		value: "PATCH|/api/whatsapp/sessions/{sessionId}/config",
		label: "PATCH /sessions/:id/config"
	},
	{
		group: "Sessions",
		value: "POST|/api/whatsapp/sessions/{sessionId}/webhooks",
		label: "POST /sessions/:id/webhooks"
	},
	{
		group: "Sessions",
		value: "DELETE|/api/whatsapp/sessions/{sessionId}/webhooks",
		label: "DELETE /sessions/:id/webhooks"
	},
	{
		group: "Sessions",
		value: "DELETE|/api/whatsapp/sessions/{sessionId}",
		label: "DELETE /sessions/:id"
	},
	{
		group: "Sessions",
		value: "POST|/api/whatsapp/proxy/test",
		label: "POST /proxy/test - Check a proxy"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/send-text",
		label: "POST /chats/send-text"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/send-image",
		label: "POST /chats/send-image"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/send-document",
		label: "POST /chats/send-document"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/send-video",
		label: "POST /chats/send-video"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/send-audio",
		label: "POST /chats/send-audio"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/send-location",
		label: "POST /chats/send-location"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/send-contact",
		label: "POST /chats/send-contact"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/send-poll",
		label: "POST /chats/send-poll"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/presence",
		label: "POST /chats/presence"
	},
	{
		group: "Messaging",
		value: "POST|/api/whatsapp/chats/check-number",
		label: "POST /chats/check-number"
	},
	{
		group: "Bulk",
		value: "POST|/api/whatsapp/chats/send-bulk",
		label: "POST /chats/send-bulk"
	},
	{
		group: "Bulk",
		value: "POST|/api/whatsapp/chats/send-bulk-image",
		label: "POST /chats/send-bulk-image"
	},
	{
		group: "Bulk",
		value: "POST|/api/whatsapp/chats/send-bulk-document",
		label: "POST /chats/send-bulk-document"
	},
	{
		group: "Bulk",
		value: "GET|/api/whatsapp/chats/bulk-status/{jobId}",
		label: "GET /chats/bulk-status/:jobId"
	},
	{
		group: "Bulk",
		value: "POST|/api/whatsapp/chats/bulk-jobs",
		label: "POST /chats/bulk-jobs - List jobs"
	},
	{
		group: "Bulk",
		value: "POST|/api/whatsapp/chats/bulk-jobs/{jobId}/cancel",
		label: "POST /chats/bulk-jobs/:jobId/cancel"
	},
	{
		group: "Bulk",
		value: "POST|/api/whatsapp/chats/bulk-jobs/{jobId}/retry",
		label: "POST /chats/bulk-jobs/:jobId/retry"
	},
	{
		group: "History",
		value: "POST|/api/whatsapp/chats/overview",
		label: "POST /chats/overview"
	},
	{
		group: "History",
		value: "POST|/api/whatsapp/contacts",
		label: "POST /contacts"
	},
	{
		group: "History",
		value: "POST|/api/whatsapp/chats/messages",
		label: "POST /chats/messages"
	},
	{
		group: "History",
		value: "POST|/api/whatsapp/chats/media",
		label: "POST /chats/media - Fetch a message's media"
	},
	{
		group: "Groups",
		value: "POST|/api/whatsapp/groups",
		label: "POST /groups"
	},
	{
		group: "Groups",
		value: "POST|/api/whatsapp/groups/create",
		label: "POST /groups/create"
	},
	{
		group: "System",
		value: "GET|/api/websocket/stats",
		label: "GET /websocket/stats"
	},
	{
		group: "System",
		value: "GET|/api/health",
		label: "GET /health"
	}
];
function sampleBodyFor(path, method) {
	if (method === "GET" || path.includes("/health") || path.includes("/websocket/stats")) return {
		body: null,
		help: "GET request — no body required."
	};
	if (path.includes("/send-text")) return {
		body: {
			sessionId: "",
			chatId: "628123456789",
			message: "Hello from WA Gateway!",
			typingTime: 0,
			replyTo: null
		},
		help: "chatId: phone or group ID. typingTime in ms. replyTo is optional."
	};
	if (path.includes("/send-video")) return {
		body: {
			sessionId: "",
			chatId: "628123456789",
			videoUrl: "https://example.com/clip.mp4",
			caption: "Caption"
		},
		help: "videoUrl: direct URL, or a /media/... URL returned by POST /media/upload."
	};
	if (path.includes("/chats/media")) return {
		body: {
			sessionId: "",
			chatId: "628123456789@c.us",
			messageId: ""
		},
		help: "Returns the /media/... URL of a message's attachment, downloading it from WhatsApp on first request."
	};
	if (path.includes("/chats/messages")) return {
		body: {
			sessionId: "",
			chatId: "628123456789@c.us",
			limit: 50,
			cursor: null
		},
		help: "Newest first. Pass the returned `cursor` (oldest message id) to page further back."
	};
	if (path.includes("/send-image")) return {
		body: {
			sessionId: "",
			chatId: "628123456789",
			imageUrl: "https://example.com/image.jpg",
			caption: "Caption"
		},
		help: "imageUrl must be a direct URL."
	};
	if (path.includes("/send-bulk-image")) return {
		body: {
			sessionId: "",
			recipients: ["628123456789", "628987654321"],
			imageUrl: "https://example.com/image.jpg",
			caption: "Caption",
			delayBetweenMessages: 3e3,
			delayJitter: 2e3
		},
		help: "Max 100 recipients. Returns a jobId — poll /chats/bulk-status/:jobId."
	};
	if (path.includes("/send-bulk-document")) return {
		body: {
			sessionId: "",
			recipients: ["628123456789", "628987654321"],
			documentUrl: "https://example.com/document.pdf",
			filename: "document.pdf",
			mimetype: "application/pdf",
			caption: "",
			delayBetweenMessages: 3e3,
			delayJitter: 2e3
		},
		help: "Max 100 recipients. Returns a jobId — poll /chats/bulk-status/:jobId."
	};
	if (path.includes("/send-bulk")) return {
		body: {
			sessionId: "",
			recipients: ["628123456789", "628987654321"],
			message: "Hello from bulk API",
			delayBetweenMessages: 3e3,
			delayJitter: 2e3,
			typingTime: 0
		},
		help: "Max 100 recipients. delayBetweenMessages + random 0..delayJitter ms between sends."
	};
	if (path.includes("/bulk-jobs/") && (path.includes("/cancel") || path.includes("/retry"))) return {
		body: path.includes("/retry") ? { sessionId: "" } : {},
		help: path.includes("/retry") ? "Starts a new job for the recipients marked failed/skipped in the source job." : "Stops the job after the message currently in flight."
	};
	if (path.includes("/webhooks") && method === "POST") return {
		body: {
			url: "https://your-server.com/webhook",
			events: ["message", "message_ack"]
		},
		help: "Leave events empty to receive all events."
	};
	if (path.includes("/connect")) return {
		body: { proxy: "" },
		help: "After connecting, scan the QR code to link WhatsApp. Optional proxy: socks5://user:pass@host:1080 or http://host:8080."
	};
	if (path.includes("/config")) return {
		body: {
			proxy: "socks5://user:pass@host:1080",
			reconnect: true
		},
		help: "Any of metadata / webhooks / proxy. proxy: URL, or null to remove. A live session reconnects through the new proxy unless reconnect is false."
	};
	if (path.includes("/proxy/test")) return {
		body: { proxy: "socks5://user:pass@host:1080" },
		help: "Fetches the egress IP through the proxy. Or pass { sessionId } to test that session's configured proxy."
	};
	return {
		body: { sessionId: "" },
		help: "Fill in the required fields for this endpoint."
	};
}
function storedApiKey() {
	if (typeof window === "undefined") return "";
	return sessionStorage.getItem("api_key") || "";
}
function getApiHeaders(includeContentType = true) {
	const headers = {};
	if (includeContentType) headers["Content-Type"] = "application/json";
	const key = storedApiKey();
	if (key) headers["X-Api-Key"] = key;
	return headers;
}
async function apiFetch(url, options = {}) {
	const headers = {
		...getApiHeaders((options.method || "GET").toUpperCase() !== "GET"),
		...options.headers
	};
	return fetch(url, {
		...options,
		headers
	});
}
async function loginDashboard(username, password) {
	return (await fetch("/api/dashboard/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			username,
			password
		})
	})).json();
}
async function listSessions() {
	return (await apiFetch(`${API_BASE}/sessions`)).json();
}
async function connectSession(sessionId, body = {}) {
	return (await apiFetch(`${API_BASE}/sessions/${sessionId}/connect`, {
		method: "POST",
		body: JSON.stringify(body)
	})).json();
}
async function deleteSession(sessionId) {
	return (await apiFetch(`${API_BASE}/sessions/${sessionId}`, { method: "DELETE" })).json();
}
async function getQr(sessionId) {
	return (await apiFetch(`${API_BASE}/sessions/${sessionId}/qr`)).json();
}
async function sendText(payload) {
	return (await apiFetch(`${API_BASE}/chats/send-text`, {
		method: "POST",
		body: JSON.stringify(payload)
	})).json();
}
var BULK_ENDPOINT = {
	text: "/chats/send-bulk",
	image: "/chats/send-bulk-image",
	document: "/chats/send-bulk-document"
};
async function startBulkJob(input) {
	return (await apiFetch(`${API_BASE}${BULK_ENDPOINT[input.type]}`, {
		method: "POST",
		body: JSON.stringify({
			sessionIds: input.sessionIds,
			recipients: input.recipients,
			name: input.name,
			...input.payload,
			...input.options
		})
	})).json();
}
async function getBulkJob(jobId) {
	return (await apiFetch(`${API_BASE}/chats/bulk-status/${encodeURIComponent(jobId)}`)).json();
}
async function listBulkJobs(sessionId) {
	return (await apiFetch(`${API_BASE}/chats/bulk-jobs`, {
		method: "POST",
		body: JSON.stringify({ sessionId })
	})).json();
}
async function cancelBulkJob(jobId) {
	return (await apiFetch(`${API_BASE}/chats/bulk-jobs/${encodeURIComponent(jobId)}/cancel`, {
		method: "POST",
		body: "{}"
	})).json();
}
async function retryBulkJob(sessionId, jobId) {
	return (await apiFetch(`${API_BASE}/chats/bulk-jobs/${encodeURIComponent(jobId)}/retry`, {
		method: "POST",
		body: JSON.stringify({ sessionId })
	})).json();
}
async function updateSessionConfig(sessionId, patch) {
	return (await apiFetch(`${API_BASE}/sessions/${sessionId}/config`, {
		method: "PATCH",
		body: JSON.stringify(patch)
	})).json();
}
async function testProxy(body) {
	return (await apiFetch(`${API_BASE}/proxy/test`, {
		method: "POST",
		body: JSON.stringify(body)
	})).json();
}
async function addWebhook(sessionId, url, events) {
	return (await apiFetch(`${API_BASE}/sessions/${sessionId}/webhooks`, {
		method: "POST",
		body: JSON.stringify({
			url,
			events
		})
	})).json();
}
async function removeWebhook(sessionId, url) {
	return (await apiFetch(`${API_BASE}/sessions/${sessionId}/webhooks?url=${encodeURIComponent(url)}`, { method: "DELETE" })).json();
}
async function loadWsStats() {
	return (await fetch("/api/websocket/stats")).json();
}
async function sendRawApi(method, path, bodyText) {
	const options = {
		method,
		headers: getApiHeaders(true)
	};
	if (method === "DELETE" && path.includes("/webhooks") && bodyText) try {
		const obj = JSON.parse(bodyText);
		if (obj.url) path = `${path}?url=${encodeURIComponent(obj.url)}`;
	} catch {}
	else if (method !== "GET" && method !== "DELETE" && bodyText) options.body = bodyText;
	return (await fetch(path, options)).json();
}
async function scrapeContacts(sessionIds, opts = {}) {
	return (await apiFetch(`${API_BASE}/contacts/scrape`, {
		method: "POST",
		body: JSON.stringify({
			sessionIds,
			dedupe: opts.dedupe ?? true
		})
	})).json();
}
async function listGroups(sessionId) {
	return (await apiFetch(`${API_BASE}/groups/list`, {
		method: "POST",
		body: JSON.stringify({ sessionId })
	})).json();
}
/** `groupIds` omitted = every group on each account. */
async function scrapeGroups(sessionIds, groupIds, opts = {}) {
	return (await apiFetch(`${API_BASE}/groups/scrape`, {
		method: "POST",
		body: JSON.stringify({
			sessionIds,
			groupIds,
			dedupe: opts.dedupe ?? true
		})
	})).json();
}
/** Saves each number as a contact, then adds it to the group. */
async function addContactsToGroup(input) {
	return (await apiFetch(`${API_BASE}/contacts/add-to-group`, {
		method: "POST",
		body: JSON.stringify(input)
	})).json();
}
/** Trigger a client-side CSV download of scraped rows (works in the artifact/browser). */
function downloadContactsCsv(rows, filename) {
	const header = [
		"phone",
		"name",
		"jid",
		"groups",
		"sources"
	];
	const escape = (v) => /[",\n]/.test(v) ? `"${v.replace(/"/g, "\"\"")}"` : v;
	const lines = [header.join(",")];
	for (const r of rows) lines.push([
		r.phone ?? "",
		r.name ?? "",
		r.jid ?? "",
		(r.groups ?? (r.groupName ? [r.groupName] : [])).join(" | "),
		(r.sources ?? (r.sessionId ? [r.sessionId] : [])).join(" | ")
	].map((v) => escape(String(v))).join(","));
	const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(url);
}
async function listChats(sessionId, limit = 50, offset = 0) {
	return (await apiFetch(`${API_BASE}/chats/overview`, {
		method: "POST",
		body: JSON.stringify({
			sessionId,
			limit,
			offset,
			type: "all"
		})
	})).json();
}
/** Newest first; pass the previous page's `cursor` to go further back. */
async function listMessages(sessionId, chatId, limit = 40, cursor = null) {
	return (await apiFetch(`${API_BASE}/chats/messages`, {
		method: "POST",
		body: JSON.stringify({
			sessionId,
			chatId,
			limit,
			cursor
		})
	})).json();
}
/** Multipart requests must not carry a JSON content-type — the browser sets the boundary. */
function multipartHeaders() {
	return getApiHeaders(false);
}
/** Upload a file for a session; the returned `/media/...` URL can be sent later or used in bulk sends. */
async function uploadMedia(sessionId, file) {
	const form = new FormData();
	form.append("sessionId", sessionId);
	form.append("file", file, file.name);
	return (await fetch(`${API_BASE}/media/upload`, {
		method: "POST",
		headers: multipartHeaders(),
		body: form
	})).json();
}
/** Upload + send in one request. The message kind follows the file's mimetype. */
async function sendMediaFile(input) {
	const form = new FormData();
	form.append("sessionId", input.sessionId);
	form.append("chatId", input.chatId);
	if (input.caption) form.append("caption", input.caption);
	if (input.asDocument) form.append("asDocument", "true");
	form.append("file", input.file, input.file.name);
	return (await fetch(`${API_BASE}/chats/send-media`, {
		method: "POST",
		headers: multipartHeaders(),
		body: form
	})).json();
}
/** Make sure a history message's attachment is on the server and get its URL. */
async function fetchMessageMedia(sessionId, chatId, messageId) {
	return (await apiFetch(`${API_BASE}/chats/media`, {
		method: "POST",
		body: JSON.stringify({
			sessionId,
			chatId,
			messageId
		})
	})).json();
}
/** Page sizes for the chat list and a conversation. */
var CHATS_PAGE = 30;
var MESSAGES_PAGE = 40;
/** How often the dashboard re-reads session status (there is no push channel). */
var SESSION_REFRESH_MS = 1e4;
/** Faster poll while a history sync is in progress, so the progress bar moves. */
var SYNC_REFRESH_MS = 2e3;
/** How often the open conversation / chat list are refreshed while the inbox is on screen. */
var INBOX_REFRESH_MS = 8e3;
/** WhatsApp timestamps are seconds; the UI wants a short local clock. */
function clockFrom(ts) {
	const n = typeof ts === "number" ? ts : Number(ts);
	if (!Number.isFinite(n) || n <= 0) return "";
	const ms = n > 0xe8d4a51000 ? n : n * 1e3;
	const d = new Date(ms);
	if (Number.isNaN(d.getTime())) return "";
	return d.toLocaleTimeString([], {
		hour: "numeric",
		minute: "2-digit"
	});
}
function initialsFrom(name) {
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return "?";
	return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}
/** Backend /chats/overview row -> the ChatPreview the UI already renders. */
function toChatPreview(c) {
	const name = c.name || c.phone || c.id.split("@")[0];
	return {
		id: c.id,
		name,
		preview: c.lastMessage ?? "",
		time: clockFrom(c.lastMessageTimestamp),
		lastAt: c.lastMessageTimestamp,
		unread: c.unreadCount ?? 0,
		kind: c.isGroup ? "group" : "dm",
		avatar: c.profilePicture ? "photo" : "initials",
		photo: c.profilePicture ?? void 0,
		initials: initialsFrom(name),
		phone: c.phone ?? void 0
	};
}
var MEDIA_TYPES = /* @__PURE__ */ new Set([
	"image",
	"video",
	"audio",
	"ptt",
	"document",
	"sticker"
]);
/**
* Backend message -> chat bubble. Media keeps its type/url so the conversation
* can render it (or offer to fetch it); structured content (location, contact,
* poll, reaction) is summarised — never rendered raw.
*/
function toBubble(m) {
	const content = m.content;
	const isMedia = MEDIA_TYPES.has(m.type);
	let text;
	if (typeof content === "string" && content) text = content;
	else if (content && typeof content === "object") {
		const c = content;
		if (m.type === "reaction") text = `${c.emoji ?? "👍"} reacted to a message`;
		else if (m.type === "location") text = `📍 ${c.name || c.address || `${c.latitude}, ${c.longitude}`}`;
		else if (m.type === "contact") text = `👤 ${c.displayName || "Contact"}`;
		else if (m.type === "poll") text = `📊 ${c.question || "Poll"}`;
		else text = `[${m.type}]`;
	} else if (isMedia) text = m.caption ?? "";
	else text = m.caption ?? `[${m.type}]`;
	const media = isMedia ? {
		type: m.type,
		url: m.mediaUrl ?? null,
		mimetype: m.mimetype ?? null,
		filename: m.filename ?? null
	} : void 0;
	return {
		id: m.id,
		kind: "text",
		from: m.fromMe ? "me" : "them",
		text,
		time: clockFrom(m.timestamp),
		sender: m.isGroup && !m.fromMe ? m.senderName || m.senderPhone || null : null,
		media
	};
}
/** Which WhatsApp message kind a local file becomes (mirrors the backend's mimetype rule). */
function mediaTypeForFile(file, asDocument = false) {
	const mime = file.type.toLowerCase();
	if (asDocument) return "document";
	if (mime.startsWith("image/") && mime !== "image/webp") return "image";
	if (mime.startsWith("video/")) return "video";
	if (mime.startsWith("audio/")) return "audio";
	return "document";
}
function nid() {
	return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
/** Poll interval that watches a pairing session while the QR modal is open. */
var qrWatchTimer = null;
/** Poll interval that refreshes campaign progress while any job is still sending. */
var bulkWatchTimer = null;
/** Background timers: session status, and the open inbox. Started once by init(). */
var sessionRefreshTimer = null;
var inboxRefreshTimer = null;
/**
* Which session a campaign should go out from: the account picked in the rail
* if it can send, else the first connected one, else whatever exists.
*/
function pickBulkSession(sessions, preferred) {
	const chosen = sessions.find((s) => s.sessionId === preferred);
	if (chosen?.status === "connected") return chosen;
	return sessions.find((s) => s.status === "connected") ?? chosen ?? sessions[0];
}
/** The account the inbox is showing — the one picked in the rail, else the first connected one. */
function activeSession(s) {
	return s.sessions.find((x) => x.sessionId === s.activeAccountId) ?? s.sessions.find((x) => x.status === "connected");
}
/** Replace an optimistic bubble (or apply a patch) inside one thread. */
function patchBubble(threads, chatId, id, patch) {
	const thread = threads[chatId] ?? [];
	const next = [];
	for (const b of thread) {
		if (b.id !== id) {
			next.push(b);
			continue;
		}
		const replaced = patch(b);
		if (replaced) next.push(replaced);
	}
	return {
		...threads,
		[chatId]: next
	};
}
/** Human line for the explicit lifecycle events the gateway emits. */
function describeStatusChange(before, after) {
	if (!before || before.status === after.status) return null;
	const who = after.name || after.phoneNumber || after.sessionId;
	if (after.status === "connected") return `${who} connected`;
	if (before.status === "connected") return after.status === "logged_out" ? `${who} logged out` : `${who} disconnected (${after.status})`;
	return `${after.sessionId}: ${before.status} → ${after.status}`;
}
var useGateway = create((set, get) => ({
	live: false,
	user: typeof sessionStorage !== "undefined" ? sessionStorage.getItem("dashboard_user") ?? "" : "",
	apiKey: typeof window !== "undefined" ? sessionStorage.getItem("api_key") || "" : "",
	wsConnected: false,
	wsClients: 0,
	sessions: [],
	events: [],
	chats: [],
	chatsHasMore: false,
	chatsLoading: false,
	threads: {},
	threadMeta: {},
	activeChatId: "",
	activeAccountId: "",
	nav: "chats",
	filter: "all",
	query: "",
	overlay: null,
	qrSession: "",
	qrSrc: "",
	qrExpiresAt: null,
	webhookSessionId: "",
	proxySessionId: "",
	composer: "",
	bulkSessionId: "",
	bulkJobs: [],
	bulkLoading: false,
	toasts: [],
	contactTab: "info",
	mobilePane: "list",
	init: async () => {
		try {
			const result = await listSessions();
			if (result.success && Array.isArray(result.data)) {
				const sessions = result.data;
				const current = get().activeAccountId;
				set({
					live: true,
					sessions,
					wsConnected: true,
					activeAccountId: (sessions.find((s) => s.sessionId === current && s.status === "connected") ?? sessions.find((s) => s.status === "connected") ?? sessions.find((s) => s.sessionId === current) ?? sessions[0])?.sessionId ?? ""
				});
				get().pushEvent("connection", "Connected to live gateway");
				await get().loadChats();
			} else {
				set({
					live: false,
					wsConnected: false
				});
				get().pushEvent("error", result.message ?? "Gateway returned no sessions");
			}
		} catch {
			set({
				live: false,
				wsConnected: false
			});
			get().pushEvent("error", "Gateway not reachable");
		}
		try {
			const stats = await loadWsStats();
			if (stats.success) set({ wsClients: stats.data?.totalConnections ?? 0 });
		} catch {
			set({ wsClients: 1 });
		}
		if (!sessionRefreshTimer) {
			const tick = async () => {
				await get().refreshSessions();
				const syncing = get().sessions.some((s) => s.sync?.active);
				sessionRefreshTimer = setTimeout(tick, syncing ? SYNC_REFRESH_MS : SESSION_REFRESH_MS);
			};
			sessionRefreshTimer = setTimeout(tick, SESSION_REFRESH_MS);
		}
		if (!inboxRefreshTimer) inboxRefreshTimer = setInterval(() => {
			const { nav, live, activeChatId, overlay } = get();
			if (!live || nav !== "chats" || overlay) return;
			get().loadChats();
			if (activeChatId) get().loadMessages(activeChatId, { force: true });
		}, INBOX_REFRESH_MS);
	},
	/**
	* Re-read the session list. Status changes are announced in the event log
	* (that is where "X disconnected" shows up), and an account that just came
	* online while selected gets its chats loaded without a page refresh.
	*/
	refreshSessions: async () => {
		if (!get().live) return;
		let result;
		try {
			result = await listSessions();
		} catch {
			return;
		}
		if (!result.success || !Array.isArray(result.data)) return;
		const before = get().sessions;
		const sessions = result.data;
		for (const s of sessions) {
			const line = describeStatusChange(before.find((b) => b.sessionId === s.sessionId), s);
			if (line) get().pushEvent("connection", line);
			if (before.find((x) => x.sessionId === s.sessionId)?.sync?.active && s.sync && !s.sync.active) {
				get().pushEvent("connection", `${s.name || s.sessionId}: history synced (${s.sync.chats} chats, ${s.sync.messages} messages)`);
				if (s.sessionId === get().activeAccountId) get().loadChats();
			}
		}
		const activeId = get().activeAccountId;
		const activeBefore = before.find((s) => s.sessionId === activeId);
		const activeAfter = sessions.find((s) => s.sessionId === activeId);
		const fallback = sessions.find((s) => s.status === "connected") ?? sessions[0];
		const nextActive = activeAfter ? activeId : fallback?.sessionId ?? "";
		set({
			sessions,
			activeAccountId: nextActive
		});
		if (nextActive !== activeId) await get().loadChats();
		else if (activeAfter?.status === "connected" && activeBefore?.status !== "connected") await get().loadChats();
	},
	/**
	* Load the active account's conversations (first page). Only a *connected*
	* session has history, so anything else leaves the list empty and states
	* the reason — the panes render an explicit empty state rather than
	* pretending to hold data.
	*/
	loadChats: async () => {
		const session = activeSession(get());
		if (!session || session.status !== "connected") {
			set({
				chats: [],
				chatsHasMore: false,
				threads: {},
				threadMeta: {},
				activeChatId: ""
			});
			if (session) get().pushEvent("connection", `${session.name || session.sessionId} is ${session.status} — no chats to show.`);
			else get().pushEvent("connection", "No connected session — scan the QR to load chats.");
			return;
		}
		set({ chatsLoading: true });
		try {
			const result = await listChats(session.sessionId, CHATS_PAGE, 0);
			if (get().activeAccountId !== session.sessionId) return;
			if (!result.success || !result.data) {
				get().pushEvent("error", result.message ?? "Could not load chats");
				return;
			}
			const fresh = result.data.chats.map(toChatPreview);
			set((s) => {
				const firstIds = new Set(fresh.map((c) => c.id));
				const tail = s.chats.slice(CHATS_PAGE).filter((c) => !firstIds.has(c.id));
				const chats = [...fresh, ...tail];
				const activeChatId = chats.some((c) => c.id === s.activeChatId) ? s.activeChatId : chats[0]?.id ?? "";
				return {
					chats,
					chatsHasMore: result.data.hasMore,
					activeChatId
				};
			});
			if (fresh.length === 0) {
				get().pushEvent("connection", `Connected — no chat history on ${session.name || session.sessionId} yet.`);
				return;
			}
			const { activeChatId, threads } = get();
			if (activeChatId && !threads[activeChatId]) await get().loadMessages(activeChatId);
		} catch {
			get().pushEvent("error", "Could not load chats");
		} finally {
			set({ chatsLoading: false });
		}
	},
	loadMoreChats: async () => {
		const session = activeSession(get());
		const { chats, chatsHasMore, chatsLoading } = get();
		if (!session || session.status !== "connected" || !chatsHasMore || chatsLoading) return;
		set({ chatsLoading: true });
		try {
			const result = await listChats(session.sessionId, CHATS_PAGE, chats.length);
			if (get().activeAccountId !== session.sessionId) return;
			if (!result.success || !result.data) return;
			const more = result.data.chats.map(toChatPreview);
			set((s) => {
				const known = new Set(s.chats.map((c) => c.id));
				return {
					chats: [...s.chats, ...more.filter((c) => !known.has(c.id))],
					chatsHasMore: result.data.hasMore
				};
			});
		} catch {
			get().pushToast("error", "Could not load more chats");
		} finally {
			set({ chatsLoading: false });
		}
	},
	/**
	* Load the newest page of one conversation. Already-loaded threads are left
	* alone unless `force` (the inbox poll) — then the newest page is merged in
	* without losing older pages the user scrolled to.
	*/
	loadMessages: async (chatId, opts = {}) => {
		const session = activeSession(get());
		if (!chatId || !session || session.status !== "connected") return;
		const existing = get().threadMeta[chatId];
		if (existing && !opts.force) return;
		if (existing?.loading) return;
		set((s) => ({ threadMeta: {
			...s.threadMeta,
			[chatId]: {
				...existing ?? {
					cursor: null,
					hasMore: false
				},
				loading: true
			}
		} }));
		try {
			const result = await listMessages(session.sessionId, chatId, MESSAGES_PAGE, null);
			if (get().activeAccountId !== session.sessionId) return;
			if (!result.success || !result.data) return;
			const page = result.data.messages.map(toBubble).reverse();
			set((s) => {
				const current = s.threads[chatId] ?? [];
				const pageIds = new Set(page.map((b) => b.id));
				const older = current.filter((b) => !pageIds.has(b.id) && !(b.kind === "text" && b.pending));
				const pending = current.filter((b) => b.kind === "text" && b.pending && !pageIds.has(b.id));
				const merged = existing ? [
					...older.filter((b) => !isNewerThanPage(b, current, page)),
					...page,
					...pending
				] : page;
				const meta = existing ? {
					cursor: existing.cursor ?? result.data.cursor,
					hasMore: existing.cursor ? existing.hasMore : result.data.hasMore,
					loading: false
				} : {
					cursor: result.data.cursor,
					hasMore: result.data.hasMore,
					loading: false
				};
				return {
					threads: {
						...s.threads,
						[chatId]: merged
					},
					threadMeta: {
						...s.threadMeta,
						[chatId]: meta
					}
				};
			});
		} catch {
			set((s) => ({ threadMeta: {
				...s.threadMeta,
				[chatId]: {
					...s.threadMeta[chatId] ?? {
						cursor: null,
						hasMore: false
					},
					loading: false
				}
			} }));
		}
	},
	/** Prepend the page before the oldest loaded message. */
	loadOlderMessages: async (chatId) => {
		const session = activeSession(get());
		const meta = get().threadMeta[chatId];
		if (!session || session.status !== "connected" || !meta || !meta.hasMore || meta.loading || !meta.cursor) return;
		set((s) => ({ threadMeta: {
			...s.threadMeta,
			[chatId]: {
				...meta,
				loading: true
			}
		} }));
		try {
			const result = await listMessages(session.sessionId, chatId, MESSAGES_PAGE, meta.cursor);
			if (!result.success || !result.data) throw new Error(result.message);
			const older = result.data.messages.map(toBubble).reverse();
			set((s) => {
				const known = new Set((s.threads[chatId] ?? []).map((b) => b.id));
				return {
					threads: {
						...s.threads,
						[chatId]: [...older.filter((b) => !known.has(b.id)), ...s.threads[chatId] ?? []]
					},
					threadMeta: {
						...s.threadMeta,
						[chatId]: {
							cursor: result.data.cursor ?? meta.cursor,
							hasMore: result.data.hasMore && older.length > 0,
							loading: false
						}
					}
				};
			});
		} catch {
			set((s) => ({ threadMeta: {
				...s.threadMeta,
				[chatId]: {
					...meta,
					loading: false
				}
			} }));
			get().pushToast("error", "Could not load older messages");
		}
	},
	loadMedia: async (chatId, messageId) => {
		const session = activeSession(get());
		if (!session) return null;
		const mark = (patch) => set((s) => ({ threads: patchBubble(s.threads, chatId, messageId, (b) => b.kind === "text" && b.media ? {
			...b,
			media: {
				...b.media,
				...patch
			}
		} : b) }));
		mark({ loading: true });
		try {
			const result = await fetchMessageMedia(session.sessionId, chatId, messageId);
			if (!result.success || !result.data) {
				mark({ loading: false });
				get().pushToast("error", result.message || "Media unavailable");
				return null;
			}
			mark({
				loading: false,
				url: result.data.url,
				mimetype: result.data.mimetype,
				filename: result.data.filename
			});
			return result.data.url;
		} catch {
			mark({ loading: false });
			get().pushToast("error", "Gateway unreachable — media not loaded");
			return null;
		}
	},
	setNav: (nav) => set({ nav }),
	setFilter: (filter) => set({ filter }),
	setQuery: (query) => set({ query }),
	selectChat: (id) => {
		set((s) => ({
			activeChatId: id,
			mobilePane: "chat",
			chats: s.chats.map((c) => c.id === id ? {
				...c,
				unread: 0
			} : c)
		}));
		get().loadMessages(id);
	},
	/** Switch the inbox (and the Broadcast panel) to another account. */
	selectAccount: (id) => {
		if (id === get().activeAccountId) return;
		set({
			activeAccountId: id,
			bulkSessionId: id,
			bulkJobs: [],
			chats: [],
			chatsHasMore: false,
			threads: {},
			threadMeta: {},
			activeChatId: "",
			composer: ""
		});
		get().loadChats();
	},
	setComposer: (composer) => set({ composer }),
	setContactTab: (contactTab) => set({ contactTab }),
	setMobilePane: (mobilePane) => set({ mobilePane }),
	sendComposer: async () => {
		const { composer, activeChatId, live, pushToast, pushEvent } = get();
		const session = activeSession(get());
		const text = composer.trim();
		if (!text || !activeChatId) return;
		if (!live || !session || session.status !== "connected") {
			pushToast("error", live ? "This account is not connected" : "Not connected to the gateway");
			return;
		}
		const time = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "numeric",
			minute: "2-digit"
		});
		const tempId = nid();
		const bubble = {
			id: tempId,
			kind: "text",
			from: "me",
			text,
			time,
			pending: true
		};
		set((s) => ({
			composer: "",
			threads: {
				...s.threads,
				[activeChatId]: [...s.threads[activeChatId] ?? [], bubble]
			},
			chats: s.chats.map((c) => c.id === activeChatId ? {
				...c,
				preview: text,
				time
			} : c)
		}));
		try {
			const result = await sendText({
				sessionId: session.sessionId,
				chatId: activeChatId,
				message: text
			});
			if (!result.success) throw new Error(result.message || "Send failed");
			const realId = result.data?.messageId ?? tempId;
			set((s) => ({ threads: patchBubble(s.threads, activeChatId, tempId, (b) => ({
				...b,
				id: realId,
				pending: false
			})) }));
			pushEvent("message", `Sent: ${text.slice(0, 60)}`);
		} catch (err) {
			set((s) => ({ threads: patchBubble(s.threads, activeChatId, tempId, () => null) }));
			pushToast("error", `Send failed — ${err instanceof Error ? err.message : "message not delivered"}`);
			pushEvent("error", `Send failed: ${text.slice(0, 60)}`);
		}
	},
	/** Upload + send a file to the open chat. Resolves true when WhatsApp accepted it. */
	sendAttachment: async (file, caption, asDocument = false) => {
		const { activeChatId, live, pushToast, pushEvent } = get();
		const session = activeSession(get());
		if (!activeChatId) return false;
		if (!live || !session || session.status !== "connected") {
			pushToast("error", live ? "This account is not connected" : "Not connected to the gateway");
			return false;
		}
		const time = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "numeric",
			minute: "2-digit"
		});
		const tempId = nid();
		const localUrl = URL.createObjectURL(file);
		const bubble = {
			id: tempId,
			kind: "text",
			from: "me",
			text: caption,
			time,
			pending: true,
			media: {
				type: mediaTypeForFile(file, asDocument),
				url: localUrl,
				mimetype: file.type || null,
				filename: file.name
			}
		};
		set((s) => ({
			composer: "",
			threads: {
				...s.threads,
				[activeChatId]: [...s.threads[activeChatId] ?? [], bubble]
			},
			chats: s.chats.map((c) => c.id === activeChatId ? {
				...c,
				preview: caption || `📎 ${file.name}`,
				time
			} : c)
		}));
		try {
			const result = await sendMediaFile({
				sessionId: session.sessionId,
				chatId: activeChatId,
				file,
				caption,
				asDocument
			});
			if (!result.success || !result.data) throw new Error(result.message || "Send failed");
			const data = result.data;
			set((s) => ({ threads: patchBubble(s.threads, activeChatId, tempId, (b) => b.kind === "text" ? {
				...b,
				id: data.messageId,
				pending: false,
				media: {
					type: data.type,
					url: data.mediaUrl,
					mimetype: data.mimetype,
					filename: data.filename
				}
			} : b) }));
			URL.revokeObjectURL(localUrl);
			pushEvent("message", `Sent ${data.type}: ${file.name}`);
			return true;
		} catch (err) {
			set((s) => ({ threads: patchBubble(s.threads, activeChatId, tempId, () => null) }));
			URL.revokeObjectURL(localUrl);
			pushToast("error", `Send failed — ${err instanceof Error ? err.message : "file not delivered"}`);
			pushEvent("error", `Send failed: ${file.name}`);
			return false;
		}
	},
	openOverlay: (overlay, extra) => {
		if (overlay === "qr") {
			set({
				overlay,
				qrSession: extra ?? ""
			});
			if (extra) get().watchQrSession(extra);
		} else if (overlay === "webhooks") set({
			overlay,
			webhookSessionId: extra ?? ""
		});
		else if (overlay === "proxy") set({
			overlay,
			proxySessionId: extra ?? ""
		});
		else set({ overlay });
	},
	closeOverlay: () => {
		if (qrWatchTimer) {
			clearInterval(qrWatchTimer);
			qrWatchTimer = null;
		}
		set({
			overlay: null,
			qrSrc: "",
			qrExpiresAt: null
		});
	},
	createSession: async (id, webhook, proxy) => {
		if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
			get().pushToast("error", "Invalid session ID");
			return;
		}
		if (!get().live) {
			get().pushToast("error", "Not connected to the gateway");
			return;
		}
		const body = {};
		if (webhook) body.webhooks = [{ url: webhook }];
		if (proxy) body.proxy = proxy;
		let result;
		try {
			result = await connectSession(id, body);
		} catch {
			get().pushToast("error", "Gateway unreachable — session not created");
			return;
		}
		if (!result.success) {
			get().pushToast("error", result.message || "Failed to create session");
			return;
		}
		set((s) => ({
			sessions: [...s.sessions.filter((x) => x.sessionId !== id), {
				sessionId: id,
				name: id,
				status: "qr_ready",
				webhooks: webhook ? [{ url: webhook }] : [],
				proxy: proxy ? proxy.replace(/:([^:@/]+)@/, ":***@") : null
			}],
			overlay: "qr",
			qrSession: id,
			qrSrc: ""
		}));
		get().pushEvent("connection", `Session ${id} created`);
		get().pushToast("success", "Scan QR to connect");
		await get().refreshQr(id);
		get().watchQrSession(id);
	},
	setProxy: async (sessionId, proxy) => {
		if (!get().live) {
			get().pushToast("error", "Not connected to the gateway");
			return false;
		}
		try {
			const result = await updateSessionConfig(sessionId, { proxy });
			if (!result.success || !result.data) {
				get().pushToast("error", result.message || "Could not save proxy");
				return false;
			}
			const saved = result.data.proxy;
			set((s) => ({ sessions: s.sessions.map((sess) => sess.sessionId === sessionId ? {
				...sess,
				proxy: saved
			} : sess) }));
			get().pushToast(result.data.proxyApplied ? "success" : "info", result.message || "Proxy saved");
			get().pushEvent("connection", `Session ${sessionId} proxy ${saved ? `set to ${saved}` : "removed"}`);
			if (result.data.proxyApplied) setTimeout(() => void get().refreshSessions(), 6e3);
			return true;
		} catch {
			get().pushToast("error", "Gateway unreachable — proxy not saved");
			return false;
		}
	},
	testProxy: async (proxy) => {
		if (!get().live) return {
			ok: false,
			message: "Not connected to the gateway"
		};
		try {
			const result = await testProxy({ proxy });
			const data = result.data;
			return {
				ok: Boolean(result.success && data?.ok),
				message: result.message || (data?.ok ? `Egress IP ${data.ip}` : data?.error || "Proxy check failed"),
				ip: data?.ip,
				latencyMs: data?.latencyMs
			};
		} catch {
			return {
				ok: false,
				message: "Gateway unreachable"
			};
		}
	},
	reconnect: async (id) => {
		try {
			if (get().live) await connectSession(id, {});
			get().pushToast("success", "Reconnecting…");
			get().openOverlay("qr", id);
			await get().refreshQr(id);
		} catch {
			get().pushToast("error", "Failed to reconnect");
		}
	},
	removeSession: async (id) => {
		try {
			if (get().live) await deleteSession(id);
		} catch {}
		set((s) => ({ sessions: s.sessions.filter((x) => x.sessionId !== id) }));
		get().pushToast("success", "Session deleted");
		get().pushEvent("connection", `Session ${id} deleted`);
		if (get().activeAccountId === id) {
			const next = get().sessions.find((s) => s.status === "connected") ?? get().sessions[0];
			set({
				activeAccountId: next?.sessionId ?? "",
				chats: [],
				threads: {},
				threadMeta: {},
				activeChatId: ""
			});
			if (next) await get().loadChats();
		}
	},
	refreshQr: async (id) => {
		set({
			qrSession: id,
			qrSrc: ""
		});
		for (let attempt = 0; attempt < 30; attempt += 1) {
			try {
				const result = await getQr(id);
				if (result.success && result.data?.qrCode) {
					set({
						qrSrc: result.data.qrCode,
						qrSession: id,
						qrExpiresAt: result.data.qrExpiresAt ?? null
					});
					return;
				}
			} catch {}
			await new Promise((resolve) => setTimeout(resolve, 500));
		}
	},
	/**
	* While the QR modal is open, poll the gateway: keep the QR image fresh as
	* the backend rotates it, and close the modal the moment pairing finishes
	* (connected) or is revoked (qr_expired). The newly linked account becomes
	* the active one and its chats load — no page refresh needed.
	*/
	watchQrSession: (id) => {
		if (qrWatchTimer) clearInterval(qrWatchTimer);
		qrWatchTimer = setInterval(async () => {
			const { overlay, qrSession } = get();
			if (overlay !== "qr" || !qrSession || qrSession !== id) return;
			try {
				const [qr, list] = await Promise.all([getQr(qrSession), listSessions()]);
				if (qr.success && qr.data?.qrCode && qr.data.qrCode !== get().qrSrc) set({ qrSrc: qr.data.qrCode });
				if (qr.success && qr.data?.qrExpiresAt && qr.data.qrExpiresAt !== get().qrExpiresAt) set({ qrExpiresAt: qr.data.qrExpiresAt });
				const sessions = list.success && Array.isArray(list.data) ? list.data : void 0;
				const status = sessions?.find((s) => s.sessionId === qrSession)?.status;
				if (status === "connected") {
					set((s) => ({ sessions: sessions ?? s.sessions }));
					get().closeOverlay();
					get().pushToast("success", "WhatsApp linked successfully");
					get().pushEvent("connection", `Session ${qrSession} connected`);
					if (get().activeAccountId !== qrSession) get().selectAccount(qrSession);
					else await get().loadChats();
				} else if (status === "qr_expired") {
					set((s) => ({ sessions: sessions ?? s.sessions }));
					get().closeOverlay();
					get().pushToast("error", "QR expired — session revoked. Reconnect for a new QR.");
					get().pushEvent("error", `Session ${qrSession} QR expired`);
				} else if (sessions) set({ sessions });
			} catch {}
		}, 2e3);
	},
	addHook: async (url, events) => {
		const sid = get().webhookSessionId;
		try {
			if (get().live) await addWebhook(sid, url, events);
		} catch {}
		set((s) => ({ sessions: s.sessions.map((sess) => sess.sessionId === sid ? {
			...sess,
			webhooks: [...sess.webhooks ?? [], {
				url,
				events
			}]
		} : sess) }));
		get().pushToast("success", "Webhook added");
	},
	removeHook: async (url) => {
		const sid = get().webhookSessionId;
		try {
			if (get().live) await removeWebhook(sid, url);
		} catch {}
		set((s) => ({ sessions: s.sessions.map((sess) => sess.sessionId === sid ? {
			...sess,
			webhooks: (sess.webhooks ?? []).filter((w) => w.url !== url)
		} : sess) }));
		get().pushToast("success", "Webhook removed");
	},
	setBulkSession: (id) => {
		if (id === get().bulkSessionId) return;
		set({
			bulkSessionId: id,
			bulkJobs: []
		});
		get().loadBulkJobs();
	},
	/**
	* Refresh the campaign list for `bulkSessionId` (falling back to the best
	* available session) and keep polling every 2s while any job is sending.
	*/
	loadBulkJobs: async () => {
		const { live, sessions, bulkSessionId, activeAccountId } = get();
		if (!live) return;
		const session = sessions.find((s) => s.sessionId === bulkSessionId) ?? pickBulkSession(sessions, activeAccountId);
		if (!session) {
			set({
				bulkJobs: [],
				bulkSessionId: ""
			});
			return;
		}
		if (session.sessionId !== bulkSessionId) set({ bulkSessionId: session.sessionId });
		set({ bulkLoading: true });
		try {
			const result = await listBulkJobs(session.sessionId);
			if (result.success && Array.isArray(result.data)) {
				const previous = get().bulkJobs;
				set({ bulkJobs: result.data });
				for (const job of result.data) {
					const before = previous.find((j) => j.jobId === job.jobId);
					if (before && before.status === "processing" && job.status !== "processing") {
						const label = job.name || `${job.type} campaign`;
						if (job.status === "completed") get().pushToast(job.failed ? "info" : "success", `${label}: ${job.sent} sent, ${job.failed} failed`);
						else get().pushToast("error", `${label} ${job.status} — ${job.sent}/${job.total} sent`);
						get().pushEvent("message", `Campaign ${job.jobId} ${job.status}: ${job.sent} sent, ${job.failed} failed`);
					}
				}
			} else if (!result.success) get().pushEvent("error", result.message ?? "Could not load campaigns");
		} catch {
			get().pushEvent("error", "Could not load campaigns");
		} finally {
			set({ bulkLoading: false });
		}
		const running = get().bulkJobs.some((j) => j.status === "processing");
		if (running && !bulkWatchTimer) bulkWatchTimer = setInterval(() => void get().loadBulkJobs(), 2e3);
		else if (!running && bulkWatchTimer) {
			clearInterval(bulkWatchTimer);
			bulkWatchTimer = null;
		}
	},
	/** Start a campaign. Resolves with the jobId, or null when nothing was queued. */
	startBulk: async (input) => {
		const { live, sessions, activeAccountId, pushToast, pushEvent } = get();
		if (!live) {
			pushToast("error", "Not connected to the gateway");
			return null;
		}
		const requested = input.sessionIds && input.sessionIds.length ? input.sessionIds : void 0;
		const connectedLanes = (requested ? requested.filter((id) => sessions.find((s) => s.sessionId === id)?.status === "connected") : [pickBulkSession(sessions, activeAccountId)?.sessionId].filter((x) => Boolean(x))).filter((id) => sessions.find((s) => s.sessionId === id)?.status === "connected");
		if (connectedLanes.length === 0) {
			pushToast("error", "Pick at least one connected account to send from");
			return null;
		}
		try {
			const result = await startBulkJob({
				...input,
				sessionIds: connectedLanes
			});
			if (!result.success || !result.data) {
				pushToast("error", result.message || "Could not start campaign");
				return null;
			}
			const owner = result.data.sessionIds?.[0] ?? connectedLanes[0];
			const laneCount = result.data.sessionIds?.length ?? connectedLanes.length;
			pushEvent("message", `Campaign ${result.data.jobId} started: ${result.data.total} recipients across ${laneCount} account(s)`);
			pushToast("success", `Sending to ${result.data.total} recipients from ${laneCount} account(s)`);
			if (result.data.skippedSessions?.length) pushToast("info", `Skipped (not connected): ${result.data.skippedSessions.join(", ")}`);
			set({
				overlay: null,
				nav: "broadcast",
				bulkSessionId: owner
			});
			await get().loadBulkJobs();
			return result.data.jobId;
		} catch {
			pushToast("error", "Gateway unreachable — campaign not started");
			return null;
		}
	},
	cancelBulk: async (jobId) => {
		try {
			const result = await cancelBulkJob(jobId);
			if (!result.success) get().pushToast("error", result.message || "Could not cancel");
			else {
				get().pushToast("info", "Stopping after the current message…");
				get().pushEvent("message", `Campaign ${jobId} cancel requested`);
			}
		} catch {
			get().pushToast("error", "Gateway unreachable — could not cancel");
		}
		await get().loadBulkJobs();
	},
	retryBulk: async (jobId) => {
		const sid = get().bulkSessionId;
		const session = get().sessions.find((s) => s.sessionId === sid);
		if (!session || session.status !== "connected") {
			get().pushToast("error", "Session must be connected to retry");
			return;
		}
		try {
			const result = await retryBulkJob(sid, jobId);
			if (!result.success || !result.data) {
				get().pushToast("error", result.message || "Could not retry");
				return;
			}
			get().pushToast("success", `Retrying ${result.data.total} recipient(s)`);
			get().pushEvent("message", `Campaign ${result.data.jobId} retries ${jobId}`);
		} catch {
			get().pushToast("error", "Gateway unreachable — could not retry");
		}
		await get().loadBulkJobs();
	},
	applyTemplate: (body) => set({
		composer: body,
		overlay: null
	}),
	pushToast: (type, message) => {
		const id = nid();
		set((s) => ({ toasts: [...s.toasts, {
			id,
			type,
			message
		}] }));
		setTimeout(() => get().dismissToast(id), 3800);
	},
	dismissToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
	pushEvent: (type, content) => set((s) => ({ events: [{
		id: nid(),
		time: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
		type,
		content
	}, ...s.events].slice(0, 100) })),
	clearEvents: () => set({ events: [] }),
	runApi: async (method, path, body) => {
		try {
			const result = await sendRawApi(method, path, body);
			get().pushEvent("connection", `${method} ${path}`);
			return result;
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			get().pushEvent("error", `${method} ${path} failed: ${message}`);
			return {
				success: false,
				method,
				path,
				message
			};
		}
	},
	login: async (user, pass, key) => {
		try {
			const data = await loginDashboard(user, pass);
			if (data.success) {
				sessionStorage.setItem("dashboard_auth", "authenticated");
				sessionStorage.setItem("dashboard_user", user);
				set({ user });
				if (key) {
					sessionStorage.setItem("api_key", key);
					set({
						apiKey: key,
						live: true
					});
				}
				get().pushToast("success", "Logged in");
				await get().init();
				return true;
			}
			get().pushToast("error", data.message || "Login failed");
			return false;
		} catch {
			get().pushToast("error", "Gateway unreachable — could not sign in");
			return false;
		}
	},
	logout: () => {
		sessionStorage.removeItem("dashboard_auth");
		sessionStorage.removeItem("api_key");
		sessionStorage.removeItem("dashboard_user");
		set({
			apiKey: "",
			user: "",
			live: false
		});
		get().pushToast("success", "Logged out");
	},
	setApiKey: (k) => {
		sessionStorage.setItem("api_key", k);
		set({ apiKey: k });
	}
}));
/**
* During a forced refresh the newest page replaces whatever was at the tail of
* the thread. A bubble that is not in the page but sits *after* the oldest
* page message (e.g. a message deleted meanwhile) must not be kept at the end.
*/
function isNewerThanPage(b, current, page) {
	if (page.length === 0) return false;
	const firstPageIdx = current.findIndex((x) => x.id === page[0].id);
	if (firstPageIdx === -1) return false;
	return current.indexOf(b) > firstPageIdx;
}
/** Starter message templates offered by the Templates overlay. Editable. */
var TEMPLATES = [
	{
		id: "t1",
		title: "Campaign launch",
		body: "Hey! The campaign is ready for launch. Please review and confirm."
	},
	{
		id: "t2",
		title: "Follow up",
		body: "Just checking in — did you get a chance to review the last update?"
	},
	{
		id: "t3",
		title: "Support reply",
		body: "Thanks for reaching out. Withdrawals are processed instantly during business hours."
	}
];
/** Mirrors BULK_MAX_RECIPIENTS on the backend. */
var MAX_RECIPIENTS = 100;
var TYPE_LABEL = {
	text: "Text",
	image: "Image",
	document: "Document"
};
var STATUS_STYLE = {
	processing: "bg-indigo/20 text-indigo",
	completed: "bg-wa/15 text-wa",
	cancelled: "bg-white/10 text-muted",
	interrupted: "bg-danger/15 text-danger"
};
var field$1 = "w-full rounded-xl border border-line bg-night/40 px-3 py-2 text-left text-sm text-ink outline-none placeholder:text-dim";
var label$1 = "block text-left text-[11px] font-medium uppercase tracking-wide text-muted";
function fmtWhen(iso) {
	if (!iso) return "";
	const d = new Date(iso);
	return (/* @__PURE__ */ new Date()).toDateString() === d.toDateString() ? d.toLocaleTimeString([], {
		hour: "numeric",
		minute: "2-digit"
	}) : d.toLocaleString([], {
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit"
	});
}
function fmtDuration(ms) {
	if (ms < 6e4) return `${Math.max(1, Math.round(ms / 1e3))}s`;
	const min = Math.round(ms / 6e4);
	return min < 60 ? `~${min} min` : `~${Math.round(min / 6) / 10} h`;
}
/** One line of what a job is sending, for cards and the composer summary. */
function payloadPreview(job) {
	const p = job.payload;
	if (job.type === "text") return p.message ?? "";
	if (job.type === "image") return p.caption ? `${p.imageUrl} — ${p.caption}` : p.imageUrl ?? "";
	return p.filename ? `${p.filename} (${p.mimetype ?? "file"})` : p.documentUrl ?? "";
}
/**
* Turn a pasted blob into recipients: one per line/comma/semicolon. Anything
* with an "@" is taken as a JID verbatim; otherwise it must have 7+ digits.
*/
function parseRecipients(text) {
	const valid = [];
	const invalid = [];
	const seen = /* @__PURE__ */ new Set();
	for (const raw of text.split(/[\n,;]+/)) {
		const token = raw.trim();
		if (!token) continue;
		let value;
		if (token.includes("@")) value = token;
		else {
			const digits = token.replace(/\D/g, "");
			if (digits.length < 7 || digits.length > 15) {
				invalid.push(token);
				continue;
			}
			value = digits;
		}
		if (!seen.has(value)) {
			seen.add(value);
			valid.push(value);
		}
	}
	return {
		valid,
		invalid
	};
}
function BulkComposer() {
	const sessions = useGateway((s) => s.sessions);
	const activeAccountId = useGateway((s) => s.activeAccountId);
	const bulkSessionId = useGateway((s) => s.bulkSessionId);
	const startBulk = useGateway((s) => s.startBulk);
	const closeOverlay = useGateway((s) => s.closeOverlay);
	const live = useGateway((s) => s.live);
	const connected = (0, import_react.useMemo)(() => sessions.filter((s) => s.status === "connected"), [sessions]);
	const [laneIds, setLaneIds] = (0, import_react.useState)(() => {
		const preferred = pickBulkSession(sessions, bulkSessionId || activeAccountId);
		return preferred && preferred.status === "connected" ? [preferred.sessionId] : connected.map((s) => s.sessionId);
	});
	const primaryId = laneIds[0] ?? pickBulkSession(sessions, bulkSessionId || activeAccountId)?.sessionId ?? "";
	const session = sessions.find((s) => s.sessionId === primaryId);
	const toggleLane = (id) => setLaneIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
	const allSelected = connected.length > 0 && connected.every((s) => laneIds.includes(s.sessionId));
	const [source, setSource] = (0, import_react.useState)("chats");
	const [chats, setChats] = (0, import_react.useState)([]);
	const [chatsLoading, setChatsLoading] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	const [search, setSearch] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)("all");
	const [pasted, setPasted] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("text");
	const [name, setName] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [imageUrl, setImageUrl] = (0, import_react.useState)("");
	const [documentUrl, setDocumentUrl] = (0, import_react.useState)("");
	const [filename, setFilename] = (0, import_react.useState)("");
	const [mimetype, setMimetype] = (0, import_react.useState)("application/pdf");
	const [caption, setCaption] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [uploadedName, setUploadedName] = (0, import_react.useState)({});
	const uploadInput = (0, import_react.useRef)(null);
	const pushToast = useGateway((s) => s.pushToast);
	const pickFile = async (file) => {
		if (!session) return;
		setUploading(true);
		try {
			const r = await uploadMedia(session.sessionId, file);
			if (!r.success || !r.data) {
				pushToast("error", r.message || "Upload failed");
				return;
			}
			if (type === "image") {
				setImageUrl(r.data.url);
				setUploadedName((u) => ({
					...u,
					image: r.data.filename
				}));
			} else {
				setDocumentUrl(r.data.url);
				setFilename(r.data.filename);
				setMimetype(r.data.mimetype || "application/octet-stream");
				setUploadedName((u) => ({
					...u,
					document: r.data.filename
				}));
			}
			pushToast("success", `Uploaded ${r.data.filename}`);
		} catch {
			pushToast("error", "Gateway unreachable — upload failed");
		} finally {
			setUploading(false);
		}
	};
	const [delay, setDelay] = (0, import_react.useState)(3e3);
	const [jitter, setJitter] = (0, import_react.useState)(2e3);
	const [typing, setTyping] = (0, import_react.useState)(0);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!live || !session || session.status !== "connected") {
			setChats([]);
			return;
		}
		let cancelled = false;
		setChatsLoading(true);
		listChats(session.sessionId, 500).then((r) => {
			if (!cancelled) setChats(r.success && r.data ? r.data.chats : []);
		}).catch(() => {
			if (!cancelled) setChats([]);
		}).finally(() => {
			if (!cancelled) setChatsLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [
		live,
		session?.sessionId,
		session?.status
	]);
	(0, import_react.useEffect)(() => {
		setSelected(/* @__PURE__ */ new Set());
	}, [primaryId]);
	const visibleChats = (0, import_react.useMemo)(() => {
		const q = search.trim().toLowerCase();
		return chats.filter((c) => {
			if (kind === "dm" && c.isGroup) return false;
			if (kind === "group" && !c.isGroup) return false;
			if (!q) return true;
			return (c.name ?? "").toLowerCase().includes(q) || (c.phone ?? "").includes(q) || c.id.includes(q);
		});
	}, [
		chats,
		search,
		kind
	]);
	const parsed = (0, import_react.useMemo)(() => parseRecipients(pasted), [pasted]);
	const recipients = (0, import_react.useMemo)(() => {
		const out = new Set(selected);
		for (const r of parsed.valid) out.add(r);
		return [...out];
	}, [selected, parsed.valid]);
	const toggle = (id) => setSelected((prev) => {
		const next = new Set(prev);
		if (next.has(id)) next.delete(id);
		else next.add(id);
		return next;
	});
	const selectVisible = (on) => setSelected((prev) => {
		const next = new Set(prev);
		for (const c of visibleChats) if (on) next.add(c.id);
		else next.delete(c.id);
		return next;
	});
	const activeLanes = laneIds.filter((id) => sessions.find((s) => s.sessionId === id)?.status === "connected");
	const problem = (() => {
		if (!live) return "Gateway offline";
		if (activeLanes.length === 0) return "Pick at least one connected account";
		if (recipients.length === 0) return "Add at least one recipient";
		if (recipients.length > MAX_RECIPIENTS) return `Max ${MAX_RECIPIENTS} recipients per campaign`;
		if (type === "text" && !message.trim()) return "Write a message";
		if (type === "image" && !imageUrl.trim()) return "Image URL is required";
		if (type === "document" && (!documentUrl.trim() || !filename.trim())) return "Document URL and filename are required";
		return null;
	})();
	const estimate = recipients.length > 1 ? (recipients.length - 1) * (delay + jitter / 2) + recipients.length * typing : 0;
	const submit = async () => {
		if (problem || submitting) return;
		setSubmitting(true);
		const payload = type === "text" ? { message: message.trim() } : type === "image" ? {
			imageUrl: imageUrl.trim(),
			caption: caption.trim()
		} : {
			documentUrl: documentUrl.trim(),
			filename: filename.trim(),
			mimetype: mimetype.trim() || void 0,
			caption: caption.trim()
		};
		await startBulk({
			sessionIds: activeLanes,
			type,
			recipients,
			payload,
			name: name.trim() || void 0,
			options: {
				delayBetweenMessages: delay,
				delayJitter: jitter,
				typingTime: typing
			}
		});
		setSubmitting(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: label$1,
							children: ["Send from ", activeLanes.length > 1 ? `· ${activeLanes.length} accounts (rotating)` : ""]
						}), connected.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-[11px] text-indigo hover:underline",
							onClick: () => setLaneIds(allSelected ? [] : connected.map((s) => s.sessionId)),
							children: allSelected ? "Clear all" : "Select all"
						}) : null]
					}),
					connected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 rounded-xl border border-line bg-night/30 px-3 py-2 text-[11px] text-danger",
						children: "No connected account — link a phone first."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scroll-thin mt-1 max-h-36 space-y-0.5 overflow-auto rounded-xl border border-line bg-night/30 p-1",
						children: connected.map((s) => {
							const order = laneIds.indexOf(s.sessionId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-white/5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: order > -1,
										onChange: () => toggleLane(s.sessionId),
										className: "accent-wa"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1 truncate",
										children: [s.name || s.sessionId, s.phoneNumber ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-dim",
											children: [" · ", s.phoneNumber]
										}) : null]
									}),
									s.proxy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 rounded-full border border-indigo/40 px-1.5 text-[9px] text-indigo",
										title: s.proxy,
										children: "proxy"
									}) : null,
									order > -1 && activeLanes.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 text-[10px] text-dim",
										children: ["#", order + 1]
									}) : null
								]
							}, s.sessionId);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] text-muted",
						children: activeLanes.length > 1 ? "Recipients are split round-robin across these accounts — each sends through its own proxy/IP." : "Pick more than one account to spread the campaign across numbers."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: label$1,
							children: "Recipients"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 rounded-lg border border-line bg-night/30 p-0.5 text-[11px]",
							children: ["chats", "paste"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSource(s),
								className: cn("rounded-md px-2 py-1", source === s ? "bg-indigo/30 text-indigo" : "text-muted"),
								children: s === "chats" ? "From chats" : "Paste numbers"
							}, s))
						})]
					}),
					source === "chats" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 rounded-xl border border-line bg-night/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 border-b border-line p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: search,
									onChange: (e) => setSearch(e.target.value),
									placeholder: "Filter chats…",
									className: "min-w-0 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-dim"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: kind,
									onChange: (e) => setKind(e.target.value),
									className: "rounded-md border border-line bg-night/40 px-1.5 py-1 text-[11px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "dm",
											children: "Contacts"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "group",
											children: "Groups"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "scroll-thin max-h-48 overflow-auto p-1",
								children: chatsLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "p-4 text-center text-xs text-muted",
									children: "Loading chats…"
								}) : visibleChats.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "p-4 text-center text-xs text-muted",
									children: chats.length === 0 ? "No chats on this session yet." : "No chats match."
								}) : visibleChats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-white/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: selected.has(c.id),
											onChange: () => toggle(c.id),
											className: "accent-wa"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 flex-1 truncate",
											children: c.name || c.phone || c.id.split("@")[0]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-[10px] text-dim",
											children: c.isGroup ? "group" : c.phone ?? ""
										})
									]
								}, c.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-t border-line px-2 py-1.5 text-[11px] text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [selected.size, " selected"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "hover:text-ink",
										onClick: () => selectVisible(true),
										children: "Select shown"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "hover:text-ink",
										onClick: () => selectVisible(false),
										children: "Clear shown"
									})]
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: pasted,
							onChange: (e) => setPasted(e.target.value),
							rows: 7,
							placeholder: "One number per line (or comma-separated)\n628123456789\n628987654321\n120363...@g.us",
							className: cn(field$1, "font-mono text-xs")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-[11px] text-muted",
							children: [
								parsed.valid.length,
								" valid",
								parsed.invalid.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-danger",
									children: [
										" · ",
										parsed.invalid.length,
										" ignored: ",
										parsed.invalid.slice(0, 3).join(", "),
										parsed.invalid.length > 3 ? "…" : ""
									]
								}) : null
							]
						})]
					}),
					selected.size > 0 && parsed.valid.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] text-muted",
						children: "Chats and pasted numbers are combined."
					}) : null
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: label$1,
						children: [
							"Campaign name ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "normal-case tracking-normal text-dim",
								children: "(optional)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "September promo",
								className: cn(field$1, "mt-1")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: label$1,
						children: "Message type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 flex gap-1 rounded-xl border border-line bg-night/30 p-1",
						children: [
							"text",
							"image",
							"document"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setType(t),
							className: cn("flex-1 rounded-lg py-1.5 text-xs font-medium", type === t ? "bg-indigo/30 text-indigo" : "text-muted hover:text-ink"),
							children: TYPE_LABEL[t]
						}, t))
					})] }),
					type === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: label$1,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-between",
							children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: "",
								onChange: (e) => {
									const t = TEMPLATES.find((x) => x.id === e.target.value);
									if (t) setMessage(t.body);
								},
								className: "rounded-md border border-line bg-night/40 px-1.5 py-0.5 text-[11px] normal-case tracking-normal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Insert template…"
								}), TEMPLATES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: t.id,
									children: t.title
								}, t.id))]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: message,
							onChange: (e) => setMessage(e.target.value),
							rows: 5,
							placeholder: "Hello from WA Gateway!",
							className: cn(field$1, "mt-1")
						})]
					}) : null,
					type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: label$1,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center justify-between",
								children: ["Image", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadButton, {
									uploading,
									disabled: !session || session.status !== "connected",
									onPick: pickFile,
									inputRef: uploadInput,
									accept: "image/*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: imageUrl,
								onChange: (e) => setImageUrl(e.target.value),
								placeholder: "https://example.com/image.jpg — or upload a file",
								className: cn(field$1, "mt-1")
							}),
							uploadedName.image && imageUrl.startsWith("/media/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-[11px] normal-case tracking-normal text-wa",
								children: ["Attached: ", uploadedName.image]
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: label$1,
						children: [
							"Caption ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "normal-case tracking-normal text-dim",
								children: "(optional)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: caption,
								onChange: (e) => setCaption(e.target.value),
								rows: 3,
								className: cn(field$1, "mt-1")
							})
						]
					})] }) : null,
					type === "document" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: label$1,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center justify-between",
									children: ["Document", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadButton, {
										uploading,
										disabled: !session || session.status !== "connected",
										onPick: pickFile,
										inputRef: uploadInput,
										accept: ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.zip,image/*,video/*,audio/*"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: documentUrl,
									onChange: (e) => setDocumentUrl(e.target.value),
									placeholder: "https://example.com/brochure.pdf — or upload a file",
									className: cn(field$1, "mt-1")
								}),
								uploadedName.document && documentUrl.startsWith("/media/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-[11px] normal-case tracking-normal text-wa",
									children: ["Attached: ", uploadedName.document]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: label$1,
								children: ["Filename", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: filename,
									onChange: (e) => setFilename(e.target.value),
									placeholder: "brochure.pdf",
									className: cn(field$1, "mt-1")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: label$1,
								children: ["MIME type", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: mimetype,
									onChange: (e) => setMimetype(e.target.value),
									placeholder: "application/pdf",
									className: cn(field$1, "mt-1")
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: label$1,
							children: [
								"Caption ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "normal-case tracking-normal text-dim",
									children: "(optional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: caption,
									onChange: (e) => setCaption(e.target.value),
									className: cn(field$1, "mt-1")
								})
							]
						})
					] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: label$1,
							children: "Pacing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 grid grid-cols-3 gap-2",
							children: [
								[
									"Delay (ms)",
									delay,
									setDelay,
									0
								],
								[
									"Jitter (ms)",
									jitter,
									setJitter,
									0
								],
								[
									"Typing (ms)",
									typing,
									setTyping,
									0
								]
							].map(([lbl, val, setter, min]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-[10px] text-muted",
								children: [lbl, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min,
									step: 500,
									value: val,
									onChange: (e) => setter(Math.max(min, Number(e.target.value) || 0)),
									className: cn(field$1, "mt-0.5 px-2 py-1.5 text-xs")
								})]
							}, lbl))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-muted",
							children: "Waits delay + random 0–jitter between messages. Steady, varied pacing is what keeps a number from being flagged."
						})
					] })
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-col items-center justify-between gap-3 border-t border-line pt-4 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[12px] text-muted",
				children: recipients.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-semibold", recipients.length > MAX_RECIPIENTS ? "text-danger" : "text-ink"),
						children: recipients.length
					}),
					" ",
					"recipient",
					recipients.length === 1 ? "" : "s",
					estimate > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" · about ", fmtDuration(estimate)] }) : null
				] }) : "No recipients yet"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-xl border border-line px-4 py-2 text-sm",
					onClick: closeOverlay,
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: Boolean(problem) || submitting,
					title: problem ?? void 0,
					onClick: () => void submit(),
					className: "rounded-xl bg-wa px-4 py-2 text-sm font-semibold text-night disabled:cursor-not-allowed disabled:opacity-50",
					children: submitting ? "Starting…" : problem ?? `Start campaign`
				})]
			})]
		})]
	});
}
function UploadButton({ uploading, disabled, onPick, inputRef, accept }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		ref: inputRef,
		type: "file",
		hidden: true,
		accept,
		onChange: (e) => {
			const f = e.target.files?.[0];
			if (f) onPick(f);
			e.target.value = "";
		}
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		disabled: disabled || uploading,
		title: disabled ? "Pick a connected session first" : "Upload from your computer",
		onClick: () => inputRef.current?.click(),
		className: "rounded-md border border-line bg-night/40 px-2 py-0.5 text-[11px] normal-case tracking-normal text-ink hover:border-indigo/50 disabled:opacity-50",
		children: uploading ? "Uploading…" : "📎 Upload file"
	})] });
}
function BroadcastPanel() {
	const sessions = useGateway((s) => s.sessions);
	const live = useGateway((s) => s.live);
	const bulkSessionId = useGateway((s) => s.bulkSessionId);
	const bulkJobs = useGateway((s) => s.bulkJobs);
	const bulkLoading = useGateway((s) => s.bulkLoading);
	const loadBulkJobs = useGateway((s) => s.loadBulkJobs);
	const setBulkSession = useGateway((s) => s.setBulkSession);
	const openOverlay = useGateway((s) => s.openOverlay);
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadBulkJobs();
	}, [
		loadBulkJobs,
		live,
		sessions.length
	]);
	const session = sessions.find((s) => s.sessionId === bulkSessionId);
	const running = bulkJobs.filter((j) => j.status === "processing").length;
	const totals = bulkJobs.reduce((acc, j) => ({
		sent: acc.sent + j.sent,
		failed: acc.failed + j.failed
	}), {
		sent: 0,
		failed: 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass scroll-thin flex min-w-0 flex-1 flex-col overflow-auto rounded-2xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "Broadcast"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] text-muted",
							children: "Campaigns go out one message at a time with a randomised gap, and keep running after you close this page."
						})]
					}),
					sessions.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: bulkSessionId,
						onChange: (e) => setBulkSession(e.target.value),
						className: "rounded-xl border border-line bg-night/40 px-3 py-2 text-sm",
						children: sessions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: s.sessionId,
							children: [s.name || s.sessionId, s.status !== "connected" ? ` (${s.status})` : ""]
						}, s.sessionId))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => openOverlay("bulk"),
						className: "rounded-xl bg-wa px-4 py-2 text-sm font-semibold text-night",
						children: "+ New campaign"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-3 gap-2 sm:max-w-md",
				children: [
					[
						"Running",
						running,
						running ? "text-indigo" : ""
					],
					[
						"Delivered",
						totals.sent,
						"text-wa"
					],
					[
						"Failed",
						totals.failed,
						totals.failed ? "text-danger" : ""
					]
				].map(([lbl, val, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-night/30 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-wide text-muted",
						children: lbl
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("text-lg font-semibold", color),
						children: val
					})]
				}, lbl))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-2",
				children: !live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-10 text-center text-[12.5px] text-muted",
					children: "Gateway offline — campaigns need the backend."
				}) : !session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-10 text-center text-[12.5px] text-muted",
					children: "Create a session and link a phone to start a campaign."
				}) : bulkJobs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-10 text-center text-[12.5px] text-muted",
					children: bulkLoading ? "Loading campaigns…" : `No campaigns on ${session.name || session.sessionId} yet.`
				}) : bulkJobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobCard, {
					job,
					canRetry: session.status === "connected",
					expanded: expanded === job.jobId,
					onToggle: () => setExpanded((cur) => cur === job.jobId ? null : job.jobId)
				}, job.jobId))
			})
		]
	});
}
function JobCard({ job, canRetry, expanded, onToggle }) {
	const cancelBulk = useGateway((s) => s.cancelBulk);
	const retryBulk = useGateway((s) => s.retryBulk);
	const running = job.status === "processing";
	const unsent = job.failed + job.skipped;
	const done = job.sent + job.failed + job.skipped;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-night/30 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-full px-2 py-0.5 text-[11px] font-medium", STATUS_STYLE[job.status]),
						children: job.cancelRequested && running ? "stopping" : job.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-line px-2 py-0.5 text-[11px] text-muted",
						children: TYPE_LABEL[job.type]
					}),
					job.sessionIds && job.sessionIds.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full border border-indigo/40 px-2 py-0.5 text-[11px] text-indigo",
						title: job.sessionIds.join(", "),
						children: [
							"🔁 ",
							job.sessionIds.length,
							" accounts"
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate text-sm font-medium",
						children: job.name || payloadPreview(job) || job.jobId
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-dim",
						children: fmtWhen(job.createdAt)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 h-1.5 overflow-hidden rounded-full bg-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("h-full rounded-full transition-[width]", job.status === "interrupted" ? "bg-danger" : "bg-wa"),
					style: { width: `${job.total ? Math.round(done / job.total * 100) : 0}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: done
						}),
						"/",
						job.total
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-wa",
						children: [job.sent, " sent"]
					}),
					job.failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-danger",
						children: [job.failed, " failed"]
					}) : null,
					job.skipped ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [job.skipped, " skipped"] }) : null,
					job.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-danger",
						children: ["· ", job.error]
					}) : null,
					job.perSession && Object.keys(job.perSession).length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-full basis-full pt-1 text-[10.5px] text-dim",
						children: Object.values(job.perSession).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-3 inline-block",
							children: [
								p.name || p.phoneNumber || "account",
								": ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-wa",
									children: p.sent
								}),
								p.failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-danger",
									children: [
										"/",
										p.failed,
										"✗"
									]
								}) : null
							]
						}, i))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "hover:text-ink",
							onClick: onToggle,
							children: expanded ? "Hide details" : "Details"
						}), running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: job.cancelRequested,
							className: "text-danger hover:underline disabled:opacity-50",
							onClick: () => void cancelBulk(job.jobId),
							children: "Cancel"
						}) : unsent > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: !canRetry,
							title: canRetry ? void 0 : "Session must be connected",
							className: "text-indigo hover:underline disabled:opacity-50",
							onClick: () => void retryBulk(job.jobId),
							children: [
								"Retry ",
								unsent,
								" unsent"
							]
						}) : null]
					})
				]
			}),
			expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobDetails, {
				jobId: job.jobId,
				running
			}) : null
		]
	});
}
/** Per-recipient outcomes; re-fetched every 2s while the job is still sending. */
function JobDetails({ jobId, running }) {
	const [job, setJob] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		const load = async () => {
			try {
				const r = await getBulkJob(jobId);
				if (cancelled) return;
				if (r.success && r.data) setJob(r.data);
				else setError(r.message || "Could not load details");
			} catch {
				if (!cancelled) setError("Could not load details");
			}
		};
		load();
		const timer = running ? setInterval(() => void load(), 2e3) : null;
		return () => {
			cancelled = true;
			if (timer) clearInterval(timer);
		};
	}, [jobId, running]);
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-[11px] text-danger",
		children: error
	});
	if (!job) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-[11px] text-muted",
		children: "Loading…"
	});
	const pending = job.recipients.slice(job.details.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 border-t border-line pt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-2 truncate text-[11px] text-muted",
			title: payloadPreview(job),
			children: [
				payloadPreview(job),
				" · delay ",
				job.options.delayBetweenMessages,
				"ms + jitter ",
				job.options.delayJitter,
				"ms",
				job.options.typingTime ? ` · typing ${job.options.typingTime}ms` : ""
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scroll-thin max-h-56 overflow-auto rounded-lg border border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
				className: "w-full text-[11px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [job.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-line last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-2 py-1 font-mono",
							children: d.recipient
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: cn("px-2 py-1", d.status === "sent" ? "text-wa" : d.status === "failed" ? "text-danger" : "text-muted"),
							children: d.status
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "max-w-[260px] truncate px-2 py-1 text-muted",
							title: d.error,
							children: d.error ?? (d.messageId ? `id ${d.messageId}` : "")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-2 py-1 text-right text-dim",
							children: fmtWhen(d.timestamp)
						})
					]
				}, `${d.recipient}-${d.timestamp}`)), pending.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-line last:border-0 opacity-60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-2 py-1 font-mono",
							children: r
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-2 py-1 text-dim",
							children: "queued"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "px-2 py-1" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "px-2 py-1" })
					]
				}, `pending-${r}`))] })
			})
		})]
	});
}
function Overlays() {
	const overlay = useGateway((s) => s.overlay);
	const close = useGateway((s) => s.closeOverlay);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") close();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [close]);
	if (!overlay) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-night/70 p-4 backdrop-blur-sm",
		onClick: (e) => {
			if (e.target === e.currentTarget) close();
		},
		children: [
			overlay === "qr" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrModal, {}),
			overlay === "create-session" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateSessionModal, {}),
			overlay === "webhooks" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebhooksModal, {}),
			overlay === "proxy" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProxyModal, {}),
			overlay === "bulk" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulkModal, {}),
			overlay === "templates" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplatesModal, {}),
			overlay === "search" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchModal, {})
		]
	});
}
function Card({ title, sub, children, wide, size }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("glass max-h-[90vh] overflow-y-auto rounded-3xl p-7 text-center", size === "xl" ? "w-full max-w-4xl" : wide ? "w-full max-w-xl" : "w-full max-w-md"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold",
				children: title
			}),
			sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: sub
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children
			})
		]
	});
}
function QrModal() {
	const { qrSession, qrSrc, qrExpiresAt, refreshQr, closeOverlay } = useGateway();
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		if (qrSession) refreshQr(qrSession);
	}, [qrSession, refreshQr]);
	const secondsLeft = qrExpiresAt !== null ? Math.max(0, Math.ceil((qrExpiresAt - now) / 1e3)) : null;
	const countdown = secondsLeft !== null ? `${Math.floor(secondsLeft / 60)}:${String(secondsLeft % 60).padStart(2, "0")}` : null;
	const timerLabel = secondsLeft === null ? "Waiting for QR…" : secondsLeft > 0 ? `QR expires in ${countdown}` : "QR expired — revoking session…";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Scan QR Code",
		sub: `Session: ${qrSession || "—"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto inline-block rounded-xl bg-white p-3",
				children: qrSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: qrSrc,
					alt: "QR",
					width: 220,
					height: 220,
					className: "block size-[220px]"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-[220px] animate-pulse bg-zinc-200" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 text-center text-xs font-semibold tabular-nums", secondsLeft !== null && secondsLeft <= 20 ? "text-danger" : "text-muted"),
				children: timerLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: "Open WhatsApp → Linked Devices → Link a Device"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "mt-5 rounded-xl border border-line px-4 py-2 text-sm",
				onClick: closeOverlay,
				children: "Close"
			})
		]
	});
}
function CreateSessionModal() {
	const { createSession, closeOverlay } = useGateway();
	const [id, setId] = (0, import_react.useState)("");
	const [hook, setHook] = (0, import_react.useState)("");
	const [proxy, setProxy] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Create New Session",
		sub: "Connect another WhatsApp number",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mb-3 block text-left text-xs text-muted",
				children: ["Session ID", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: id,
					onChange: (e) => setId(e.target.value),
					placeholder: "my-session-1",
					className: "mt-1 w-full rounded-xl border border-line bg-night/40 px-3 py-2.5 text-sm text-ink outline-none"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mb-3 block text-left text-xs text-muted",
				children: ["Webhook URL (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: hook,
					onChange: (e) => setHook(e.target.value),
					placeholder: "https://your-server.com/webhook",
					className: "mt-1 w-full rounded-xl border border-line bg-night/40 px-3 py-2.5 text-sm text-ink outline-none"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProxyField, {
					value: proxy,
					onChange: setProxy
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-xl border border-line px-4 py-2 text-sm",
					onClick: closeOverlay,
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-xl bg-wa px-4 py-2 text-sm font-semibold text-night",
					onClick: () => void createSession(id.trim(), hook.trim() || void 0, proxy.trim() || void 0),
					children: "Create & Connect"
				})]
			})
		]
	});
}
/**
* Proxy URL input with a "Test" button that fetches the egress IP through it.
* Shared by the create-session and proxy modals.
*/
function ProxyField({ value, onChange }) {
	const testProxy = useGateway((s) => s.testProxy);
	const [checking, setChecking] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const run = async () => {
		if (!value.trim()) return;
		setChecking(true);
		setResult(await testProxy(value.trim()));
		setChecking(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-left text-xs text-muted",
		children: [
			"Proxy (optional)",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-1 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value,
					onChange: (e) => {
						onChange(e.target.value);
						setResult(null);
					},
					placeholder: "socks5://user:pass@host:1080",
					spellCheck: false,
					className: "min-w-0 flex-1 rounded-xl border border-line bg-night/40 px-3 py-2.5 font-mono text-[12px] text-ink outline-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !value.trim() || checking,
					onClick: () => void run(),
					className: "shrink-0 rounded-xl border border-line px-3 py-2 text-xs disabled:opacity-50",
					children: checking ? "Testing…" : "Test"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-[11px]",
				children: result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: result.ok ? "text-wa" : "text-danger",
					children: [result.message, result.ok && result.latencyMs ? ` · ${result.latencyMs} ms` : ""]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-dim",
					children: "socks5:// or http(s)://. Every connection of this session — socket and media — goes through it."
				})
			})
		]
	});
}
function ProxyModal() {
	const { proxySessionId, sessions, setProxy, closeOverlay } = useGateway();
	const session = sessions.find((s) => s.sessionId === proxySessionId);
	const current = session?.proxy ?? null;
	const [value, setValue] = (0, import_react.useState)("");
	const [saving, setSaving] = (0, import_react.useState)(false);
	const live = session ? [
		"connecting",
		"qr_ready",
		"connected"
	].includes(session.status) : false;
	const save = async (proxy) => {
		setSaving(true);
		const ok = await setProxy(proxySessionId, proxy);
		setSaving(false);
		if (ok) closeOverlay();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Session Proxy",
		sub: `Session: ${proxySessionId}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 rounded-xl border border-line bg-night/30 px-3 py-2 text-left text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-wide text-muted",
					children: "Current"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("mt-0.5 font-mono text-[12px] break-all", current ? "text-ink" : "text-dim"),
					children: current ?? "Direct connection (no proxy)"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProxyField, {
				value,
				onChange: setValue
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-left text-[11px] text-muted",
				children: live ? "Saving restarts the session through the new proxy (a few seconds offline; no new QR needed once paired)." : "The proxy is used the next time this session connects."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap justify-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-xl border border-line px-4 py-2 text-sm",
						onClick: closeOverlay,
						children: "Cancel"
					}),
					current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-xl border border-danger/30 px-4 py-2 text-sm text-danger disabled:opacity-50",
						disabled: saving,
						onClick: () => void save(null),
						children: "Remove proxy"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-xl bg-wa px-4 py-2 text-sm font-semibold text-night disabled:opacity-50",
						disabled: saving || !value.trim(),
						onClick: () => void save(value.trim()),
						children: saving ? "Saving…" : live ? "Save & reconnect" : "Save"
					})
				]
			})
		]
	});
}
function WebhooksModal() {
	const { webhookSessionId, sessions, addHook, removeHook, closeOverlay } = useGateway();
	const session = sessions.find((s) => s.sessionId === webhookSessionId);
	const [url, setUrl] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Manage Webhooks",
		sub: `Session: ${webhookSessionId}`,
		wide: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: url,
				onChange: (e) => setUrl(e.target.value),
				placeholder: "https://your-server.com/webhook",
				className: "mb-3 w-full rounded-xl border border-line bg-night/40 px-3 py-2.5 text-left text-sm text-ink outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "mb-4 w-full rounded-xl bg-wa py-2.5 text-sm font-semibold text-night",
				onClick: () => {
					if (url) addHook(url, ["message"]);
					setUrl("");
				},
				children: "Add webhook"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2 text-left",
				children: (session?.webhooks ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No webhooks configured"
				}) : (session?.webhooks ?? []).map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-xl border border-line bg-night/30 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "break-all text-sm",
						children: w.url
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-muted",
						children: w.events?.join(", ") || "All events"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-danger text-xs",
						onClick: () => void removeHook(w.url),
						children: "Remove"
					})]
				}, w.url))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "mt-4 rounded-xl border border-line px-4 py-2 text-sm",
				onClick: closeOverlay,
				children: "Close"
			})
		]
	});
}
function BulkModal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		title: "New campaign",
		sub: "Send one message to many chats — runs in the background with progress tracking",
		size: "xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulkComposer, {})
	});
}
function TemplatesModal() {
	const applyTemplate = useGateway((s) => s.applyTemplate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		title: "Message Templates",
		sub: "Insert a saved reply",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2 text-left",
			children: TEMPLATES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "w-full rounded-xl border border-line bg-night/30 px-3 py-3 text-left hover:border-indigo/50",
				onClick: () => applyTemplate(t.body),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium",
					children: t.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted",
					children: t.body
				})]
			}, t.id))
		})
	});
}
function SearchModal() {
	const { chats, query, setQuery, selectChat, closeOverlay } = useGateway();
	const hits = chats.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()) || c.preview.toLowerCase().includes(query.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Search",
		sub: "Messages, contacts, groups",
		wide: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			autoFocus: true,
			value: query,
			onChange: (e) => setQuery(e.target.value),
			placeholder: "Type to search…",
			className: "mb-3 w-full rounded-xl border border-line bg-night/40 px-3 py-2.5 text-left text-sm text-ink outline-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-h-64 space-y-1 overflow-auto text-left",
			children: hits.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-glass",
				onClick: () => {
					selectChat(c.id);
					closeOverlay();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: c.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-xs text-muted",
					children: c.preview
				})]
			}, c.id))
		})]
	});
}
function ToolsPanel() {
	const { sessions, events, clearEvents, openOverlay, reconnect, removeSession, live, wsConnected, wsClients, runApi, apiKey, setApiKey, logout, login, setNav } = useGateway();
	const [endpoint, setEndpoint] = (0, import_react.useState)(API_ENDPOINTS[0].value);
	const [sessionId, setSessionId] = (0, import_react.useState)("");
	const [jobId, setJobId] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("{}");
	const [help, setHelp] = (0, import_react.useState)("");
	const [response, setResponse] = (0, import_react.useState)("Response will appear here…");
	const [user, setUser] = (0, import_react.useState)("");
	const [pass, setPass] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const [method, path] = endpoint.split("|");
		const sample = sampleBodyFor(path, method);
		setBody(sample.body ? JSON.stringify(sample.body, null, 2) : "");
		setHelp(sample.help);
	}, [endpoint]);
	const groups = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const e of API_ENDPOINTS) {
			const list = map.get(e.group) ?? [];
			list.push(e);
			map.set(e.group, list);
		}
		return [...map.entries()];
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-sm font-semibold",
						children: "Sections"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							{
								id: "chats",
								label: "Chats"
							},
							{
								id: "contacts",
								label: "Contacts"
							},
							{
								id: "groups",
								label: "Groups"
							},
							{
								id: "broadcast",
								label: "Broadcast"
							},
							{
								id: "scrapers",
								label: "Scrapers"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setNav(s.id),
							className: "rounded-xl border border-line bg-night/30 px-3 py-1.5 text-xs font-medium hover:border-indigo/40 hover:text-indigo",
							children: s.label
						}, s.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold",
								children: "Sessions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-lg bg-wa px-3 py-1.5 text-xs font-semibold text-night",
								onClick: () => openOverlay("create-session"),
								children: "+ New Session"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-3 text-[11px] text-muted",
							children: [
								live ? "Live gateway" : "Gateway offline",
								" · WS ",
								wsConnected ? "connected" : "offline",
								" · ",
								wsClients,
								" clients"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: sessions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-xl border border-line bg-night/30 p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-10 place-items-center rounded-full bg-gradient-to-br from-wa to-wa-deep text-sm font-bold text-night",
										children: (s.name || s.sessionId)[0].toUpperCase()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-sm font-medium",
												children: s.name || s.sessionId
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-xs text-muted",
												children: s.phoneNumber || s.sessionId
											}),
											s.proxyInfo?.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1 flex flex-wrap items-center gap-1.5 text-[10px]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 shrink-0 rounded-full", s.proxyInfo.connected ? "bg-indigo-300 shadow-[0_0_6px_#818cf8]" : "bg-white/30") }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: cn("font-medium", s.proxyInfo.connected ? "text-indigo-200" : "text-muted"),
														children: s.proxyInfo.connected ? "via" : "idle"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "truncate font-mono text-indigo-100",
														title: s.proxyInfo.active,
														children: s.proxyInfo.active
													}),
													s.proxyInfo.source === "pool" && s.proxyInfo.poolSize > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "rounded-full border border-indigo/40 px-1.5 py-px text-indigo",
														children: [
															"pool ",
															(s.proxyInfo.index ?? 0) + 1,
															"/",
															s.proxyInfo.poolSize
														]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full border border-indigo/40 px-1.5 py-px text-indigo",
														children: s.proxyInfo.source === "session" ? "session" : "single"
													}),
													s.proxyInfo.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-emerald-500/15 px-1.5 py-px text-emerald-300",
														children: "no direct"
													}) : null,
													s.proxyInfo.rotations > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-muted",
														children: [
															"· ",
															s.proxyInfo.rotations,
															"× rotated"
														]
													}) : null
												]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-[10px] text-white/40",
												children: "Direct connection (no proxy)"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("rounded-full px-2 py-0.5 text-[11px]", s.status === "connected" ? "bg-wa/15 text-wa" : "bg-danger/15 text-danger"),
										children: s.status
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "text-xs text-muted",
										onClick: () => openOverlay("qr", s.sessionId),
										children: "QR"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "text-xs text-muted",
										onClick: () => void reconnect(s.sessionId),
										children: "Reconnect"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "text-xs text-muted",
										onClick: () => openOverlay("webhooks", s.sessionId),
										children: "Hooks"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: cn("text-xs", s.proxy ? "text-indigo" : "text-muted"),
										onClick: () => openOverlay("proxy", s.sessionId),
										children: "Proxy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "text-xs text-danger",
										onClick: () => void removeSession(s.sessionId),
										children: "Delete"
									})
								]
							}, s.sessionId))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-sm font-semibold",
							children: "API Tester"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: endpoint,
							onChange: (e) => setEndpoint(e.target.value),
							className: "mb-3 w-full rounded-xl border border-line bg-night/40 px-3 py-2 text-sm",
							children: groups.map(([g, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
								label: g,
								children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: i.value,
									children: i.label
								}, i.value))
							}, g))
						}),
						endpoint.includes("{sessionId}") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: sessionId,
							onChange: (e) => setSessionId(e.target.value),
							placeholder: "Session ID",
							className: "mb-2 w-full rounded-xl border border-line bg-night/40 px-3 py-2 text-sm"
						}),
						endpoint.includes("{jobId}") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: jobId,
							onChange: (e) => setJobId(e.target.value),
							placeholder: "Job ID",
							className: "mb-2 w-full rounded-xl border border-line bg-night/40 px-3 py-2 text-sm"
						}),
						body !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: body,
							onChange: (e) => setBody(e.target.value),
							rows: 6,
							className: "mb-2 w-full rounded-xl border border-line bg-night/40 px-3 py-2 font-mono text-xs"
						}),
						help ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[11px] text-muted",
							children: help
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-xl bg-indigo px-4 py-2 text-sm font-medium",
							onClick: async () => {
								const [method, rawPath] = endpoint.split("|");
								let path = rawPath;
								if (path.includes("{sessionId}")) path = path.replace("{sessionId}", sessionId);
								if (path.includes("{jobId}")) path = path.replace("{jobId}", jobId);
								const res = await runApi(method, path, body);
								setResponse(JSON.stringify(res, null, 2));
							},
							children: "Send Request"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-3 max-h-48 overflow-auto rounded-xl border border-line bg-night/40 p-3 text-left font-mono text-[11px] text-muted",
							children: response
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Live Events"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs text-muted",
						onClick: clearEvents,
						children: "Clear"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scroll-thin h-72 overflow-auto font-mono text-[11px]",
					children: [events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "p-6 text-center text-muted",
						children: "No events yet"
					}) : null, events.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 border-b border-line px-2 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-dim",
								children: ev.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-wa",
								children: ev.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: ev.content
							})
						]
					}, ev.id))]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass rounded-2xl p-4 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-sm font-semibold",
						children: "Gateway credentials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: user,
						onChange: (e) => setUser(e.target.value),
						placeholder: "Username",
						className: "mb-2 w-full rounded-xl border border-line bg-night/40 px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value: pass,
						onChange: (e) => setPass(e.target.value),
						placeholder: "Password",
						className: "mb-2 w-full rounded-xl border border-line bg-night/40 px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: apiKey,
						onChange: (e) => setApiKey(e.target.value),
						placeholder: "API key (optional)",
						className: "mb-3 w-full rounded-xl border border-line bg-night/40 px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-xl bg-wa px-3 py-2 text-xs font-semibold text-night",
							onClick: () => void login(user, pass, apiKey),
							children: "Connect backend"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-xl border border-line px-3 py-2 text-xs",
							onClick: logout,
							children: "Logout"
						})]
					})
				]
			})]
		})]
	});
}
function Toasts() {
	const toasts = useGateway((s) => s.toasts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed right-5 bottom-5 z-50 flex flex-col gap-2",
		children: toasts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-auto glass rounded-xl px-4 py-3 text-sm shadow-lg",
			children: t.message
		}, t.id))
	});
}
var field = "w-full rounded-xl border border-line bg-night/40 px-3 py-2 text-left text-sm text-ink outline-none placeholder:text-dim";
var label = "block text-left text-[11px] font-medium uppercase tracking-wide text-muted";
function Section({ title, sub, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "glass rounded-2xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-[11.5px] text-muted",
				children: sub
			}),
			children
		]
	});
}
/** Checkbox list of connected accounts, with select-all. */
function AccountPicker({ selected, onToggle, onAll }) {
	const connected = useGateway((s) => s.sessions).filter((s) => s.status === "connected");
	const allOn = connected.length > 0 && connected.every((s) => selected.includes(s.sessionId));
	if (connected.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl border border-line bg-night/30 px-3 py-2 text-[11px] text-danger",
		children: "No connected account."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: label,
			children: "Accounts"
		}), connected.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "text-[11px] text-indigo hover:underline",
			onClick: () => onAll(!allOn),
			children: allOn ? "Clear all" : "Select all"
		}) : null]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scroll-thin mt-1 max-h-32 space-y-0.5 overflow-auto rounded-xl border border-line bg-night/30 p-1",
		children: connected.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-white/5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: selected.includes(s.sessionId),
					onChange: () => onToggle(s.sessionId),
					className: "accent-wa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1 truncate",
					children: [s.name || s.sessionId, s.phoneNumber ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-dim",
						children: [" · ", s.phoneNumber]
					}) : null]
				}),
				s.proxy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 rounded-full border border-indigo/40 px-1.5 text-[9px] text-indigo",
					children: "proxy"
				}) : null
			]
		}, s.sessionId))
	})] });
}
/** A scraped-contacts result table with a CSV download. */
function ResultTable({ contacts, filename }) {
	const [q, setQ] = (0, import_react.useState)("");
	const shown = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		if (!s) return contacts;
		return contacts.filter((c) => c.phone.includes(s) || (c.name ?? "").toLowerCase().includes(s));
	}, [contacts, q]);
	if (contacts.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: `Filter ${contacts.length}…`,
					className: cn(field, "h-8 py-1")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => downloadContactsCsv(shown, filename),
					className: "shrink-0 rounded-xl bg-wa px-3 py-1.5 text-xs font-semibold text-night",
					children: [
						"⬇ CSV (",
						shown.length,
						")"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-thin max-h-72 overflow-auto rounded-xl border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-[11.5px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "sticky top-0 bg-night/80 text-left text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-1 font-medium",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-1 font-medium",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-1 font-medium",
								children: "Groups / Accounts"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: shown.slice(0, 500).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-1 font-mono",
								children: c.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "max-w-[160px] truncate px-2 py-1",
								children: c.name || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-dim",
									children: "—"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "max-w-[220px] truncate px-2 py-1 text-muted",
								children: (c.groups ?? (c.groupName ? [c.groupName] : [])).join(", ") || (c.sources ?? (c.sessionId ? [c.sessionId] : [])).join(", ")
							})
						]
					}, c.jid + (c.groupName ?? ""))) })]
				})
			}),
			shown.length > 500 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-[11px] text-muted",
				children: [
					"Showing first 500 — the CSV holds all ",
					shown.length,
					"."
				]
			}) : null
		]
	});
}
function ContactScraper() {
	const pushToast = useGateway((s) => s.pushToast);
	const activeAccountId = useGateway((s) => s.activeAccountId);
	const [selected, setSelected] = (0, import_react.useState)(activeAccountId ? [activeAccountId] : []);
	const [dedupe, setDedupe] = (0, import_react.useState)(true);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const run = async () => {
		if (selected.length === 0) return pushToast("error", "Pick at least one account");
		setLoading(true);
		setResult(null);
		try {
			const r = await scrapeContacts(selected, { dedupe });
			if (!r.success || !r.data) return pushToast("error", r.message || "Scrape failed");
			setResult(r.data.contacts);
			pushToast("success", `Scraped ${r.data.total} contacts from ${r.data.accounts.length} account(s)`);
		} catch {
			pushToast("error", "Gateway unreachable");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		title: "Contact Scraper",
		sub: "Pull the saved contacts from one or more connected accounts.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPicker, {
				selected,
				onToggle: (id) => setSelected((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]),
				onAll: (on) => {
					const conn = useGateway.getState().sessions.filter((s) => s.status === "connected").map((s) => s.sessionId);
					setSelected(on ? conn : []);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-2 flex items-center gap-2 text-[12px] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: dedupe,
					onChange: (e) => setDedupe(e.target.checked),
					className: "accent-wa"
				}), "Merge duplicates across accounts"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: loading || selected.length === 0,
				onClick: () => void run(),
				className: "mt-3 rounded-xl bg-indigo px-4 py-2 text-sm font-medium disabled:opacity-50",
				children: loading ? "Scraping…" : "Scrape contacts"
			}),
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultTable, {
				contacts: result,
				filename: "contacts.csv"
			}) : null
		]
	});
}
function GroupScraper() {
	const pushToast = useGateway((s) => s.pushToast);
	const sessions = useGateway((s) => s.sessions);
	const activeAccountId = useGateway((s) => s.activeAccountId);
	const connected = sessions.filter((s) => s.status === "connected");
	const [sessionId, setSessionId] = (0, import_react.useState)(() => (connected.find((s) => s.sessionId === activeAccountId) ?? connected[0])?.sessionId ?? "");
	const [scope, setScope] = (0, import_react.useState)("all");
	const [groups, setGroups] = (0, import_react.useState)([]);
	const [groupsLoading, setGroupsLoading] = (0, import_react.useState)(false);
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (scope !== "pick" || !sessionId) return;
		let cancelled = false;
		setGroupsLoading(true);
		listGroups(sessionId).then((r) => {
			if (!cancelled) setGroups(r.success && r.data ? r.data.groups : []);
		}).catch(() => !cancelled && setGroups([])).finally(() => !cancelled && setGroupsLoading(false));
		return () => {
			cancelled = true;
		};
	}, [scope, sessionId]);
	(0, import_react.useEffect)(() => {
		setPicked([]);
		setResult(null);
	}, [sessionId]);
	const run = async () => {
		if (!sessionId) return pushToast("error", "Pick a connected account");
		if (scope === "pick" && picked.length === 0) return pushToast("error", "Pick at least one group");
		setLoading(true);
		setResult(null);
		try {
			const r = await scrapeGroups([sessionId], scope === "all" ? null : picked, { dedupe: true });
			if (!r.success || !r.data) return pushToast("error", r.message || "Scrape failed");
			setResult(r.data.contacts);
			pushToast("success", `Scraped ${r.data.total} members from ${r.data.groups.length} group(s)`);
		} catch {
			pushToast("error", "Gateway unreachable");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		title: "Group Scraper",
		sub: "Pull members from all groups on an account, or just the groups you choose.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: label,
				children: ["Account", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: sessionId,
					onChange: (e) => setSessionId(e.target.value),
					className: cn(field, "mt-1"),
					children: [connected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "No connected account"
					}) : null, connected.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: s.sessionId,
						children: [s.name || s.sessionId, s.phoneNumber ? ` · ${s.phoneNumber}` : ""]
					}, s.sessionId))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex gap-1 rounded-xl border border-line bg-night/30 p-1 text-[12px]",
				children: ["all", "pick"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setScope(v),
					className: cn("flex-1 rounded-lg py-1.5", scope === v ? "bg-indigo/30 text-indigo" : "text-muted"),
					children: v === "all" ? "All groups" : "Choose groups"
				}, v))
			}),
			scope === "pick" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-thin mt-2 max-h-40 space-y-0.5 overflow-auto rounded-xl border border-line bg-night/30 p-1",
				children: groupsLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-3 text-center text-xs text-muted",
					children: "Loading groups…"
				}) : groups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-3 text-center text-xs text-muted",
					children: "No groups on this account."
				}) : groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-white/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: picked.includes(g.id),
							onChange: () => setPicked((p) => p.includes(g.id) ? p.filter((x) => x !== g.id) : [...p, g.id]),
							className: "accent-wa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate",
							children: g.name || g.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-[10px] text-dim",
							children: g.participantsCount ?? "?"
						})
					]
				}, g.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: loading || !sessionId,
				onClick: () => void run(),
				className: "mt-3 rounded-xl bg-indigo px-4 py-2 text-sm font-medium disabled:opacity-50",
				children: loading ? "Scraping…" : scope === "all" ? "Scrape all groups" : `Scrape ${picked.length || ""} group(s)`
			}),
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultTable, {
				contacts: result,
				filename: "group-members.csv"
			}) : null
		]
	});
}
function AddToGroup() {
	const pushToast = useGateway((s) => s.pushToast);
	const sessions = useGateway((s) => s.sessions);
	const activeAccountId = useGateway((s) => s.activeAccountId);
	const connected = sessions.filter((s) => s.status === "connected");
	const [sessionId, setSessionId] = (0, import_react.useState)(() => (connected.find((s) => s.sessionId === activeAccountId) ?? connected[0])?.sessionId ?? "");
	const [groups, setGroups] = (0, import_react.useState)([]);
	const [groupId, setGroupId] = (0, import_react.useState)("");
	const [numbers, setNumbers] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [log, setLog] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!sessionId) return;
		let cancelled = false;
		listGroups(sessionId).then((r) => {
			if (cancelled) return;
			const gs = r.success && r.data ? r.data.groups : [];
			setGroups(gs);
			setGroupId((cur) => gs.some((g) => g.id === cur) ? cur : gs[0]?.id ?? "");
		}).catch(() => !cancelled && setGroups([]));
		return () => {
			cancelled = true;
		};
	}, [sessionId]);
	const parsed = (0, import_react.useMemo)(() => parseRecipients(numbers), [numbers]);
	const run = async () => {
		if (!sessionId || !groupId) return pushToast("error", "Pick an account and a group");
		if (parsed.valid.length === 0) return pushToast("error", "Add at least one valid number");
		setBusy(true);
		setLog(null);
		try {
			const r = await addContactsToGroup({
				sessionId,
				groupId,
				phones: parsed.valid,
				name: name.trim() || void 0
			});
			if (!r.data) return pushToast("error", r.message || "Failed");
			setLog(r.data.results.map((x) => ({
				phone: x.phone,
				ok: x.success,
				msg: x.message || (x.success ? "added" : "failed")
			})));
			pushToast(r.data.added > 0 ? "success" : "error", `Added ${r.data.added}/${r.data.results.length}. Each number is saved as a contact first.`);
		} catch {
			pushToast("error", "Gateway unreachable");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		title: "Add Contacts to a Group",
		sub: "Each number is saved to the account's address book first, then added to the group.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: label,
					children: ["Account", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sessionId,
						onChange: (e) => setSessionId(e.target.value),
						className: cn(field, "mt-1"),
						children: [connected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "No connected account"
						}) : null, connected.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s.sessionId,
							children: s.name || s.sessionId
						}, s.sessionId))]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: label,
					children: ["Group", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: groupId,
						onChange: (e) => setGroupId(e.target.value),
						className: cn(field, "mt-1"),
						children: [groups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "No groups"
						}) : null, groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: g.id,
							children: g.name || g.id
						}, g.id))]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: cn(label, "mt-2"),
				children: [
					"Contact name ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "normal-case tracking-normal text-dim",
						children: "(optional — used for all)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "e.g. Lead",
						className: cn(field, "mt-1")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: cn(label, "mt-2"),
				children: ["Phone numbers", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: numbers,
					onChange: (e) => setNumbers(e.target.value),
					rows: 5,
					placeholder: "One per line\n628123456789\n628987654321",
					className: cn(field, "mt-1 font-mono text-xs")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-[11px] text-muted",
				children: [
					parsed.valid.length,
					" valid",
					parsed.invalid.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-danger",
						children: [
							" · ",
							parsed.invalid.length,
							" ignored"
						]
					}) : null,
					" · only the group's admins can add members, and some numbers reject being added by strangers."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: busy || !groupId || parsed.valid.length === 0,
				onClick: () => void run(),
				className: "mt-3 rounded-xl bg-wa px-4 py-2 text-sm font-semibold text-night disabled:opacity-50",
				children: busy ? "Adding…" : `Save & add ${parsed.valid.length || ""} to group`
			}),
			log ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-thin mt-3 max-h-56 space-y-1 overflow-auto rounded-xl border border-line p-1 text-[11.5px]",
				children: log.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-2 py-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 shrink-0 rounded-full", l.ok ? "bg-wa" : "bg-danger") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: l.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("truncate", l.ok ? "text-muted" : "text-danger"),
							children: l.msg
						})
					]
				}, l.phone))
			}) : null
		]
	});
}
function ScrapersPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass scroll-thin min-w-0 flex-1 overflow-auto rounded-2xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-1 text-base font-semibold",
				children: "Scrapers & Contacts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-[12px] text-muted",
				children: "Export contacts, pull group members, and add saved contacts into groups."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 xl:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactScraper, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupScraper, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "xl:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddToGroup, {})
					})
				]
			})
		]
	});
}
var VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;
var FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m * m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec3 rampColor = mix(mix(uColorStops[0], uColorStops[1], uv.x * 2.0), uColorStops[2], max(uv.x * 2.0 - 1.0, 0.0));
  float height = exp(snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude);
  float intensity = 0.6 * (uv.y * 2.0 - height + 0.2);
  float alpha = smoothstep(0.20 - uBlend * 0.5, 0.20 + uBlend * 0.5, intensity);
  fragColor = vec4(intensity * rampColor * alpha, alpha);
}`;
function Aurora({ colorStops = [
	"#3A29FF",
	"#FF94B4",
	"#FF3232"
], speed = 1, blend = .5, amplitude = 1 }) {
	const containerRef = (0, import_react.useRef)(null);
	const propsRef = (0, import_react.useRef)({
		colorStops,
		speed,
		blend,
		amplitude
	});
	propsRef.current = {
		colorStops,
		speed,
		blend,
		amplitude
	};
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		const renderer = new Renderer({
			alpha: true,
			premultipliedAlpha: true,
			antialias: true
		});
		const gl = renderer.gl;
		gl.clearColor(0, 0, 0, 0);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
		gl.canvas.style.backgroundColor = "transparent";
		const geometry = new Triangle(gl);
		if (geometry.attributes.uv) delete geometry.attributes.uv;
		const toRgb = (stops) => stops.map((hex) => {
			const color = new Color(hex);
			return [
				color.r,
				color.g,
				color.b
			];
		});
		const program = new Program(gl, {
			vertex: VERT,
			fragment: FRAG,
			uniforms: {
				uTime: { value: 0 },
				uAmplitude: { value: amplitude },
				uColorStops: { value: toRgb(colorStops) },
				uResolution: { value: [container.offsetWidth, container.offsetHeight] },
				uBlend: { value: blend }
			}
		});
		const mesh = new Mesh(gl, {
			geometry,
			program
		});
		container.appendChild(gl.canvas);
		const resize = () => {
			renderer.setSize(container.offsetWidth, container.offsetHeight);
			program.uniforms.uResolution.value = [container.offsetWidth, container.offsetHeight];
		};
		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(container);
		resize();
		let animationId = 0;
		const update = (time) => {
			const current = propsRef.current;
			program.uniforms.uTime.value = time * .001 * current.speed;
			program.uniforms.uAmplitude.value = current.amplitude;
			program.uniforms.uBlend.value = current.blend;
			program.uniforms.uColorStops.value = toRgb(current.colorStops);
			renderer.render({ scene: mesh });
			animationId = requestAnimationFrame(update);
		};
		animationId = requestAnimationFrame(update);
		return () => {
			cancelAnimationFrame(animationId);
			resizeObserver.disconnect();
			gl.canvas.remove();
			gl.getExtension("WEBGL_lose_context")?.loseContext();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: "aurora-container",
		"aria-hidden": "true"
	});
}
var s = {
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
function IconSearch(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		...s,
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "11",
			r: "7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m20 20-3.5-3.5" })]
	});
}
function IconBell(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		...s,
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" })]
	});
}
function IconSun(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		...s,
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" })]
	});
}
function IconPhone(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		...s,
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.2 1.9.5 2.8.7A2 2 0 0 1 22 16.9z" })
	});
}
function IconVideo(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		...s,
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1",
			y: "5",
			width: "15",
			height: "14",
			rx: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m23 7-7 5 7 5V7z" })]
	});
}
function IconDots(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		...s,
		...p,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "5",
				cy: "12",
				r: "1.2",
				fill: "currentColor",
				stroke: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "1.2",
				fill: "currentColor",
				stroke: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "19",
				cy: "12",
				r: "1.2",
				fill: "currentColor",
				stroke: "none"
			})
		]
	});
}
function IconChat(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "20",
		height: "20",
		...s,
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
	});
}
function IconUsers(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "20",
		height: "20",
		...s,
		...p,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "9",
				cy: "7",
				r: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" })
		]
	});
}
function IconSend(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		...s,
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 2 11 13" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 2 15 22 11 13 2 9z" })]
	});
}
function IconGear(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "20",
		height: "20",
		...s,
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "3"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" })]
	});
}
function IconTools(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "20",
		height: "20",
		...s,
		...p,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "3",
				width: "7",
				height: "7",
				rx: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "3",
				width: "7",
				height: "7",
				rx: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "14",
				width: "7",
				height: "7",
				rx: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "14",
				width: "7",
				height: "7",
				rx: "1.4"
			})
		]
	});
}
function IconWA(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		width: "22",
		height: "22",
		fill: "currentColor",
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65A11.88 11.88 0 0 0 12.05 23.8h.01c6.55 0 11.89-5.34 11.89-11.89A11.82 11.82 0 0 0 12.05 0zm0 21.78h0a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.17 6.44 6.6 2.01 12.05 2.01a9.82 9.82 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88z" })]
	});
}
function GatewayApp() {
	const init = useGateway((s) => s.init);
	const openOverlay = useGateway((s) => s.openOverlay);
	(0, import_react.useEffect)(() => {
		init();
	}, [init]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				openOverlay("search");
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [openOverlay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh overflow-hidden text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "app-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Aurora, {
					colorStops: [
						"#f8a66d",
						"#B497CF",
						"#5227FF"
					],
					blend: .5,
					amplitude: 1,
					speed: .5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex h-full flex-col p-3 sm:p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex min-h-0 flex-1 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountsRail, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainStage, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDock, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlays, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toasts, {})
		]
	});
}
function IconBtn({ children, className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("relative grid size-9 place-items-center rounded-[10px] border border-line bg-white/5 text-ink/80 hover:bg-white/10", className),
		...rest,
		children
	});
}
function Header() {
	const user = useGateway((s) => s.user);
	const live = useGateway((s) => s.live);
	const wsConnected = useGateway((s) => s.wsConnected);
	const openOverlay = useGateway((s) => s.openOverlay);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "glass flex h-16 shrink-0 items-center gap-3 overflow-hidden rounded-2xl px-3 sm:px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 shrink-0 items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-9 overflow-hidden rounded-[10px] bg-white shadow-[0_4px_12px_rgba(37,211,102,0.35)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/__grok/logo.png",
						alt: "WA Gateway",
						className: "size-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[15px] font-semibold tracking-tight",
						children: "WA Gateway"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden text-[11px] text-muted sm:block",
						children: "Multi-account Control Center"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => openOverlay("search"),
				className: "mx-2 hidden h-10 min-w-0 flex-1 items-center gap-2 rounded-xl border border-line bg-white/5 px-3 text-sm text-dim lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSearch, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate text-left",
						children: "Search messages, contacts, groups..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
						className: "shrink-0 rounded-md border border-line bg-white/5 px-1.5 py-0.5 text-[10px] text-muted",
						children: "Ctrl K"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex shrink-0 items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden items-center gap-2 rounded-full border border-line bg-night/40 px-3 py-1.5 text-[11px] text-muted xl:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", wsConnected || live ? "bg-wa shadow-[0_0_8px_#25d366]" : "bg-danger") }), live ? "Live API" : "Offline"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "lg:hidden",
						onClick: () => openOverlay("search"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSearch, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IconBtn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBell, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 right-1.5 size-1.5 rounded-full bg-danger" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "hidden sm:grid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSun, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-full border border-line bg-white/5 py-1 pr-2 pl-1 sm:pr-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-7 place-items-center rounded-full bg-gradient-to-br from-indigo to-violet text-[11px] font-semibold",
							children: (user || "?").slice(0, 1).toUpperCase()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden leading-tight md:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] font-medium",
								children: user || "Not signed in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] text-muted",
								children: user ? "Dashboard user" : "Sign in to manage"
							})]
						})]
					})
				]
			})
		]
	});
}
function MobileDock() {
	const nav = useGateway((s) => s.nav);
	const setNav = useGateway((s) => s.setNav);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "glass mt-3 flex shrink-0 items-center justify-around rounded-2xl py-2 md:hidden",
		children: [
			{
				id: "chats",
				label: "Chats",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChat, {})
			},
			{
				id: "tools",
				label: "Tools",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTools, {})
			},
			{
				id: "settings",
				label: "Settings",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconGear, {})
			}
		].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setNav(item.id),
			className: cn("flex min-h-11 min-w-11 flex-col items-center gap-0.5 text-[10px]", nav === item.id ? "text-indigo" : "text-muted"),
			children: [item.icon, item.label]
		}, item.id))
	});
}
/** host:port from a redacted proxy URL, for the account hover card. */
function proxyHostPort(url) {
	if (!url) return null;
	try {
		const parsed = new URL(url);
		return parsed.port ? `${parsed.hostname}:${parsed.port}` : parsed.hostname;
	} catch {
		return url;
	}
}
function AccountsRail() {
	const nav = useGateway((s) => s.nav);
	const setNav = useGateway((s) => s.setNav);
	const sessions = useGateway((s) => s.sessions);
	const activeAccountId = useGateway((s) => s.activeAccountId);
	const selectAccount = useGateway((s) => s.selectAccount);
	const openOverlay = useGateway((s) => s.openOverlay);
	const online = sessions.filter((s) => s.status === "connected").length;
	const [peek, setPeek] = (0, import_react.useState)(null);
	const showPeek = (target, a) => {
		const r = target.getBoundingClientRect();
		setPeek({
			label: a.name || a.sessionId,
			phone: a.phoneNumber,
			proxy: a.proxyInfo?.active ?? a.proxy,
			proxyInfo: a.proxyInfo,
			status: a.status,
			connected: a.status === "connected",
			x: r.right,
			y: r.top + r.height / 2
		});
	};
	const items = [
		{
			id: "scrapers",
			label: "Scrapers",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconUsers, {})
		},
		{
			id: "tools",
			label: "Tools",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTools, {})
		},
		{
			id: "settings",
			label: "Settings",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconGear, {})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "glass relative z-40 hidden min-h-0 w-[76px] shrink-0 flex-col items-center overflow-hidden rounded-2xl py-4 md:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[9px] font-semibold tracking-[0.12em] text-muted",
				children: "ACCOUNTS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-lg font-bold leading-none",
				children: sessions.length
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 text-[10px] text-wa",
				children: [online, " online"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-thin flex min-h-0 w-full flex-1 flex-col items-center gap-2 overflow-y-auto overscroll-contain pr-0.5",
				children: sessions.map((a) => {
					const label = a.name || a.sessionId;
					const connected = a.status === "connected";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								selectAccount(a.sessionId);
								setNav("chats");
							},
							"aria-label": `${label}, ${a.phoneNumber ?? "not linked"}`,
							onMouseEnter: (e) => showPeek(e.currentTarget, a),
							onMouseLeave: () => setPeek(null),
							onFocus: (e) => showPeek(e.currentTarget, a),
							onBlur: () => setPeek(null),
							className: cn("relative size-11 overflow-hidden rounded-2xl border-2", activeAccountId === a.sessionId ? "border-indigo shadow-[0_0_0_2px_rgba(99,102,241,0.25)]" : "border-transparent"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-full place-items-center bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-semibold",
									children: label.slice(0, 2).toUpperCase()
								}),
								connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 border-night bg-wa" }) : null,
								a.proxyInfo?.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									title: `Proxy: ${a.proxyInfo.active}`,
									className: cn("absolute left-0.5 top-0.5 grid size-3.5 place-items-center rounded-full border border-night text-[7px] font-bold leading-none", a.proxyInfo.connected ? "bg-indigo-400 text-night" : "bg-white/40 text-night"),
									children: "P"
								}) : null
							]
						})
					}, a.sessionId);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => openOverlay("create-session"),
				title: "Add account",
				className: "mt-2 grid size-11 shrink-0 place-items-center rounded-2xl border border-dashed border-white/20 text-xl text-muted",
				children: "+"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-auto flex shrink-0 flex-col gap-1",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setNav(item.id),
					title: item.label,
					className: cn("grid size-11 shrink-0 place-items-center rounded-xl text-muted", nav === item.id && "bg-indigo/25 text-indigo"),
					children: item.icon
				}, item.id))
			}),
			peek ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					left: peek.x + 12,
					top: peek.y
				},
				className: "pointer-events-none fixed z-[80] w-56 -translate-y-1/2 rounded-xl border border-white/15 bg-[rgba(24,20,58,0.94)] p-3 text-left shadow-[0_12px_30px_rgba(8,4,28,0.45)] backdrop-blur-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-sm font-semibold text-white",
						children: peek.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 truncate text-xs text-cyan-200",
						children: peek.phone ?? "Not linked"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 rounded-lg border border-indigo-400/25 bg-indigo-500/15 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] font-semibold uppercase tracking-[0.14em] text-indigo-200",
							children: "Proxy"
						}), peek.proxy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 break-all font-mono text-[12px] leading-snug text-white",
								children: proxyHostPort(peek.proxy)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 break-all font-mono text-[9px] leading-snug text-indigo-100/80",
								children: peek.proxy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-[9px] text-indigo-100/90",
								children: [peek.proxyInfo?.connected ? "Connected through this proxy" : "Assigned · not on this socket yet", peek.proxyInfo?.source === "pool" && peek.proxyInfo.poolSize > 0 ? ` · pool ${(peek.proxyInfo.index ?? 0) + 1}/${peek.proxyInfo.poolSize}` : peek.proxyInfo?.source === "session" ? " · session proxy" : ""]
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[11px] text-amber-200",
							children: "Direct connection · no proxy assigned"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-wa",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", peek.connected ? "bg-wa shadow-[0_0_8px_#25d366]" : "bg-white/30") }), peek.status]
					})
				]
			}), document.body) : null
		]
	});
}
function MainStage() {
	const nav = useGateway((s) => s.nav);
	const mobilePane = useGateway((s) => s.mobilePane);
	if (nav === "tools" || nav === "settings") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass scroll-thin min-w-0 flex-1 overflow-auto rounded-2xl p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-4 text-base font-semibold",
			children: nav === "tools" ? "Gateway Tools" : "Settings"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsPanel, {})]
	});
	if (nav === "contacts") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Directory, {
		title: "Contacts",
		kind: "dm"
	});
	if (nav === "groups") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Directory, {
		title: "Groups",
		kind: "group"
	});
	if (nav === "broadcast") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BroadcastPanel, {});
	if (nav === "scrapers") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrapersPanel, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 min-w-0 flex-1 gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full w-full max-w-[320px] shrink-0", mobilePane !== "list" && "hidden lg:block"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatList, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("flex h-full min-h-0 min-w-0 flex-1", mobilePane === "list" && "hidden lg:flex"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Conversation, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full w-[280px] shrink-0", mobilePane !== "profile" && "hidden xl:block"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactPanel, {})
			})
		]
	});
}
function Directory({ title, kind }) {
	const chats = useGateway((s) => s.chats);
	const select = useGateway((s) => s.selectChat);
	const setNav = useGateway((s) => s.setNav);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass scroll-thin min-w-0 flex-1 overflow-auto rounded-2xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-base font-semibold",
				children: title
			}),
			chats.filter((c) => c.kind === kind).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptyState, { children: [kind === "group" ? "No groups yet." : "No contacts yet.", " Connect a session to load them."] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
				children: chats.filter((c) => c.kind === kind).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "flex items-center gap-3 rounded-2xl border border-line bg-night/30 p-3 text-left",
					onClick: () => {
						select(c.id);
						setNav("chats");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAvatar, { chat: c }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted",
						children: c.phone || c.preview
					})] })]
				}, c.id))
			})
		]
	});
}
/** Neutral placeholder for a pane with nothing to show. */
function EmptyState({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10 text-center text-[12.5px] text-muted",
		children
	});
}
/** Why the chat list is empty: no search hit, or no data at all. */
function emptyChatsMessage(total, query) {
	if (total > 0) return query ? `No chats match "${query}".` : "No chats match this filter.";
	return "No chats yet. Connect a session and scan the QR to load your conversations.";
}
/** Tiny inline spinner. */
function Spinner({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("inline-block size-3.5 animate-spin rounded-full border-2 border-white/25 border-t-indigo", className) });
}
/** Indeterminate sliding loading bar for paginated fetches. */
function LoadBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "wa-loadbar my-1 w-full",
		"aria-label": "Loading"
	});
}
/** Thin progress bar shown while WhatsApp is still pushing this account's history. */
function SyncBanner({ sync }) {
	const pct = Math.min(100, Math.max(3, sync.progress || 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-4 mb-2 rounded-xl border border-indigo/30 bg-indigo/10 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between text-[11px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-indigo",
				children: "Syncing history…"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-muted",
				children: [
					sync.chats,
					" chats · ",
					sync.messages,
					" msgs",
					sync.progress ? ` · ${sync.progress}%` : ""
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-gradient-to-r from-indigo to-violet transition-[width] duration-500",
				style: { width: `${pct}%` }
			})
		})]
	});
}
function ChatList() {
	const chats = useGateway((s) => s.chats);
	const chatsHasMore = useGateway((s) => s.chatsHasMore);
	const chatsLoading = useGateway((s) => s.chatsLoading);
	const loadMoreChats = useGateway((s) => s.loadMoreChats);
	const filter = useGateway((s) => s.filter);
	const setFilter = useGateway((s) => s.setFilter);
	const active = useGateway((s) => s.activeChatId);
	const select = useGateway((s) => s.selectChat);
	const query = useGateway((s) => s.query);
	const account = useGateway((s) => s.sessions.find((x) => x.sessionId === s.activeAccountId));
	const filtered = (0, import_react.useMemo)(() => {
		return chats.filter((c) => {
			if (filter === "unread" && c.unread === 0) return false;
			if (filter === "groups" && c.kind !== "group") return false;
			if (query && !`${c.name} ${c.preview}`.toLowerCase().includes(query.toLowerCase())) return false;
			return true;
		});
	}, [
		chats,
		filter,
		query
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "glass flex h-full flex-col rounded-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 pt-4 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 text-[16px] font-semibold",
						children: "All Chats"
					}), account ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "truncate text-[11px] text-muted",
						children: [
							account.name || account.sessionId,
							account.phoneNumber ? ` · ${account.phoneNumber}` : "",
							account.status !== "connected" ? ` · ${account.status}` : ""
						]
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					className: "size-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "14",
						height: "14",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 20h9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" })]
					})
				})]
			}),
			account?.sync?.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SyncBanner, { sync: account.sync }) : null,
			chatsLoading && chats.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pb-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadBar, {})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 px-4 pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: filter === "all",
						onClick: () => setFilter("all"),
						count: chats.length,
						children: "All"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: filter === "unread",
						onClick: () => setFilter("unread"),
						count: chats.filter((c) => c.unread > 0).length,
						children: "Unread"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: filter === "groups",
						onClick: () => setFilter("groups"),
						count: chats.filter((c) => c.kind === "group").length,
						children: "Groups"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scroll-thin min-h-0 flex-1 overflow-y-auto px-2 pb-3",
				children: [
					filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { children: emptyChatsMessage(chats.length, query) }) : null,
					filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => select(c.id),
						className: cn("mb-0.5 flex w-full items-center gap-3 rounded-2xl px-2.5 py-2.5 text-left", active === c.id ? "bg-indigo/20" : "hover:bg-white/5"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAvatar, { chat: c }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-[13.5px] font-medium",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-[11px] text-dim",
									children: c.time
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-[12.5px] text-muted",
									children: c.preview
								}), c.unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid min-w-[18px] place-items-center rounded-full bg-indigo px-1.5 text-[11px] font-semibold",
									children: c.unread
								}) : null]
							})]
						})]
					}, c.id)),
					chatsHasMore && !query && filter === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: chatsLoading,
						onClick: () => void loadMoreChats(),
						className: "mt-1 flex w-full items-center justify-center gap-2 rounded-xl border border-line py-2 text-xs text-muted hover:text-ink disabled:opacity-70",
						children: chatsLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {}), " Loading more…"] }) : "Load more chats"
					}) : null
				]
			})
		]
	});
}
function FilterChip({ active, count, children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: cn("flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium", active ? "bg-gradient-to-r from-indigo to-violet text-white shadow-[0_2px_8px_rgba(99,102,241,0.35)]" : "bg-white/5 text-muted"),
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("rounded-full px-1.5 text-[10px]", active ? "bg-white/20" : "bg-white/10"),
			children: count
		})]
	});
}
function ChatAvatar({ chat, size = 44 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative shrink-0 overflow-hidden rounded-full bg-white/10",
		style: {
			width: size,
			height: size
		},
		children: [chat.avatar === "photo" && chat.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: chat.photo,
			alt: "",
			className: "size-full object-cover"
		}) : chat.avatar === "initials" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-full place-items-center bg-gradient-to-br from-blue-500 to-indigo-700 text-[13px] font-bold",
			children: chat.initials
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-full place-items-center bg-gradient-to-br from-indigo to-violet text-sm",
			children: {
				users: "👥",
				code: "</>",
				chart: "📊",
				headset: "🎧",
				palette: "🎨",
				support: "BC"
			}[chat.icon ?? "users"]
		}), chat.online ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-[#12102a] bg-wa" }) : null]
	});
}
function Conversation() {
	const chats = useGateway((s) => s.chats);
	const threads = useGateway((s) => s.threads);
	const id = useGateway((s) => s.activeChatId);
	const meta = useGateway((s) => s.threadMeta[s.activeChatId]);
	const loadOlder = useGateway((s) => s.loadOlderMessages);
	const composer = useGateway((s) => s.composer);
	const setComposer = useGateway((s) => s.setComposer);
	const send = useGateway((s) => s.sendComposer);
	const sendAttachment = useGateway((s) => s.sendAttachment);
	const setMobilePane = useGateway((s) => s.setMobilePane);
	const openOverlay = useGateway((s) => s.openOverlay);
	const chat = chats.find((c) => c.id === id);
	const messages = threads[id] ?? [];
	const [attachment, setAttachment] = (0, import_react.useState)(null);
	const [sending, setSending] = (0, import_react.useState)(false);
	const fileInput = (0, import_react.useRef)(null);
	const scroller = (0, import_react.useRef)(null);
	const lastId = messages.length ? messages[messages.length - 1].id : "";
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		el.scrollTop = el.scrollHeight;
	}, [id, lastId]);
	const submit = async () => {
		if (attachment) {
			setSending(true);
			const ok = await sendAttachment(attachment, composer.trim());
			setSending(false);
			if (ok) setAttachment(null);
			return;
		}
		await send();
	};
	if (!chat) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "glass flex h-full min-w-0 flex-1 items-center justify-center rounded-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { children: "Select a chat to open the conversation." })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "glass flex h-full min-w-0 flex-1 flex-col rounded-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-[68px] items-center gap-3 border-b border-line px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-muted lg:hidden",
						onClick: () => setMobilePane("list"),
						children: "←"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex min-w-0 flex-1 items-center gap-3 text-left",
						onClick: () => setMobilePane("profile"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAvatar, { chat }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-[15px] font-semibold",
								children: chat.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-wa",
								children: chat.online ? "online" : chat.lastSeen || "offline"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						onClick: () => openOverlay("search"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSearch, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPhone, {}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconVideo, {}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconDots, {}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scroller,
				className: "chat-wallpaper scroll-thin flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-6 py-5",
				children: [meta?.hasMore ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: meta.loading,
					onClick: () => void loadOlder(id),
					className: "flex items-center gap-2 self-center rounded-full border border-line bg-white/8 px-3.5 py-1 text-[11.5px] text-muted hover:text-ink disabled:opacity-70",
					children: meta.loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {}), " Loading older…"] }) : "Load older messages"
				}) : messages.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "self-center rounded-full bg-white/8 px-3.5 py-1 text-[11.5px] text-muted",
					children: meta?.loading ? "Loading…" : "Beginning of history"
				}) : meta?.loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 px-4 py-10 text-[12.5px] text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, { className: "size-5" }), "Loading messages…"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { children: "No messages in this chat yet." }), messages.map((m) => m.kind === "promo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoCard, { time: m.time }, m.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, {
					chatId: id,
					m
				}, m.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "border-t border-line px-4 py-3",
				onSubmit: (e) => {
					e.preventDefault();
					submit();
				},
				children: [attachment ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-3 rounded-xl border border-line bg-white/5 px-3 py-2 text-[12.5px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg",
							children: attachment.type.startsWith("image/") ? "🖼️" : attachment.type.startsWith("video/") ? "🎬" : attachment.type.startsWith("audio/") ? "🎵" : "📄"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-medium",
								children: attachment.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[11px] text-muted",
								children: [
									fmtBytes(attachment.size),
									" · ",
									attachment.type || "file",
									" — add a caption below, then send"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-xs text-danger",
							onClick: () => setAttachment(null),
							children: "Remove"
						})
					]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileInput,
							type: "file",
							hidden: true,
							accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.zip",
							onChange: (e) => {
								const f = e.target.files?.[0];
								if (f) setAttachment(f);
								e.target.value = "";
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
							type: "button",
							title: "Attach image, video, audio or document",
							onClick: () => fileInput.current?.click(),
							children: "📎"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: composer,
							onChange: (e) => setComposer(e.target.value),
							placeholder: attachment ? "Caption (optional)…" : "Type a message...",
							className: "h-10 min-w-0 flex-1 rounded-xl border border-line bg-white/5 px-4 text-[13.5px] text-ink outline-none placeholder:text-dim"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: sending || !attachment && !composer.trim(),
							className: "grid size-10 place-items-center rounded-xl bg-gradient-to-br from-indigo to-violet text-white shadow-[0_4px_14px_rgba(99,102,241,0.4)] disabled:opacity-50",
							children: sending ? "…" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSend, {})
						})
					]
				})]
			})
		]
	});
}
function fmtBytes(n) {
	if (n < 1024) return `${n} B`;
	if (n < 1048576) return `${(n / 1024).toFixed(0)} KB`;
	return `${(n / 1024 / 1024).toFixed(1)} MB`;
}
function MessageBubble({ chatId, m }) {
	const mine = m.from === "me";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex max-w-[68%] flex-col", mine ? "self-end" : "self-start"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("overflow-hidden rounded-2xl text-[13.5px] leading-relaxed", mine ? "rounded-br-sm bg-gradient-to-br from-wa to-wa-deep text-white" : "rounded-bl-sm bg-bubble-in", m.pending && "opacity-70"),
			children: [
				m.sender ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3.5 pt-2 text-[11px] font-semibold text-indigo-200",
					children: m.sender
				}) : null,
				m.media ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaView, {
					chatId,
					messageId: m.id,
					media: m.media,
					mine
				}) : null,
				m.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3.5 py-2.5 whitespace-pre-wrap break-words",
					children: m.text
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mt-0.5 px-1 text-[10.5px] text-dim", mine && "text-right"),
			children: [m.time, mine ? m.pending ? " ◌" : " ✓✓" : ""]
		})]
	});
}
/** Render an attachment inline, or offer to fetch it from WhatsApp when it is not on the server yet. */
function MediaView({ chatId, messageId, media, mine }) {
	const loadMedia = useGateway((s) => s.loadMedia);
	const name = media.filename || `${media.type}-${messageId}`;
	const download = media.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: media.url,
		download: name,
		target: "_blank",
		rel: "noreferrer",
		className: cn("text-[11px] underline underline-offset-2", mine ? "text-white/90" : "text-indigo"),
		children: "Download"
	}) : null;
	if (!media.url) {
		const label = {
			image: "Photo",
			video: "Video",
			audio: "Audio",
			ptt: "Voice message",
			document: media.filename || "Document",
			sticker: "Sticker"
		}[media.type];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 px-3.5 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-lg",
				children: {
					image: "🖼️",
					video: "🎬",
					audio: "🎵",
					ptt: "🎤",
					document: "📄",
					sticker: "🏷️"
				}[media.type]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-[12.5px]",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: media.loading,
					onClick: () => void loadMedia(chatId, messageId),
					className: cn("text-[11px] underline underline-offset-2 disabled:opacity-60", mine ? "text-white/90" : "text-indigo"),
					children: media.loading ? "Fetching from WhatsApp…" : "Load"
				})]
			})]
		});
	}
	if (media.type === "image" || media.type === "sticker") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: media.url,
		target: "_blank",
		rel: "noreferrer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: media.url,
			alt: media.filename ?? "",
			className: cn("block max-h-72 w-auto max-w-full object-contain", media.type === "sticker" ? "max-h-32 p-2" : "")
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-3.5 pt-1.5 pb-1",
		children: download
	})] });
	if (media.type === "video") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		src: media.url,
		controls: true,
		preload: "metadata",
		className: "block max-h-72 w-full"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-3.5 pt-1.5 pb-1",
		children: download
	})] });
	if (media.type === "audio" || media.type === "ptt") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-3.5 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			src: media.url,
			controls: true,
			preload: "metadata",
			className: "w-64 max-w-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-1",
			children: download
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: media.url,
		download: name,
		target: "_blank",
		rel: "noreferrer",
		className: cn("flex items-center gap-3 px-3.5 py-2.5 hover:bg-white/5", mine ? "text-white" : ""),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg",
			children: "📄"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[12.5px] font-medium",
				children: media.filename || "Document"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("block text-[11px]", mine ? "text-white/80" : "text-muted"),
				children: [media.mimetype || "file", " · click to download"]
			})]
		})]
	});
}
function PromoCard({ time }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-[320px] self-start overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-slate-900 to-indigo-950 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-[15px] font-bold leading-snug",
				children: [
					"Grow",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Your Business",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-wa",
						children: "WhatsApp"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-[11.5px] text-muted",
				children: "Faster. Smarter. Together."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-wa to-wa-deep text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWA, {})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-right text-[10.5px] text-dim",
			children: time
		})]
	});
}
function ContactPanel() {
	const chats = useGateway((s) => s.chats);
	const id = useGateway((s) => s.activeChatId);
	const thread = useGateway((s) => s.threads[s.activeChatId]);
	const tab = useGateway((s) => s.contactTab);
	const setTab = useGateway((s) => s.setContactTab);
	const openOverlay = useGateway((s) => s.openOverlay);
	const chat = chats.find((c) => c.id === id);
	const attachments = (0, import_react.useMemo)(() => (thread ?? []).filter((b) => b.kind === "text" && Boolean(b.media)).reverse(), [thread]);
	if (!chat) return null;
	const visual = attachments.filter((b) => b.media && [
		"image",
		"video",
		"sticker"
	].includes(b.media.type));
	const files = attachments.filter((b) => b.media && [
		"document",
		"audio",
		"ptt"
	].includes(b.media.type));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "glass scroll-thin flex h-full flex-col overflow-auto rounded-2xl p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto size-[72px] overflow-hidden rounded-full border-[3px] border-indigo/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAvatar, {
							chat,
							size: 72
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-[16px] font-semibold",
						children: chat.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[12.5px] text-muted",
						children: chat.phone || "Group conversation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11.5px] text-dim",
						children: chat.lastSeen || (chat.kind === "group" ? "8 participants" : "")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex justify-center gap-3",
				children: [
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPhone, {}),
						label: "Call"
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconVideo, {}),
						label: "Video"
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSearch, {}),
						label: "Search",
						action: () => openOverlay("search")
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconDots, {}),
						label: "More"
					}
				].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "flex flex-col items-center gap-1",
					onClick: a.action,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 place-items-center rounded-full border border-line bg-white/5",
						children: a.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-muted",
						children: a.label
					})]
				}, a.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex border-b border-line text-[12.5px]",
				children: [
					"info",
					"media",
					"files",
					"links"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: cn("flex-1 py-2 capitalize", tab === t ? "border-b-2 border-indigo font-medium text-indigo" : "text-dim"),
					children: t
				}, t))
			}),
			tab === "info" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center gap-3 rounded-xl border border-wa/20 bg-wa/10 px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-lg bg-wa text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWA, {
							width: 16,
							height: 16
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[12.5px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium text-wa",
							children: "Connected & online"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted",
							children: "Using WhatsApp"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 text-[12px] font-semibold tracking-wide text-muted uppercase",
					children: "Quick Actions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSend, {}),
					color: "bg-indigo/20 text-indigo",
					title: "Send Message",
					sub: "Send to this contact",
					onClick: () => {}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconUsers, {}),
					color: "bg-wa/15 text-wa",
					title: "Bulk Message",
					sub: "Send to multiple chats",
					onClick: () => openOverlay("bulk")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: "📄"
					}),
					color: "bg-violet/20 text-violet",
					title: "Message Templates",
					sub: "Use saved templates",
					onClick: () => openOverlay("templates")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-danger/20 bg-danger/10 py-2.5 text-[13px] font-medium text-danger",
					children: "Block Contact"
				})
			] }) : tab === "media" || tab === "files" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttachmentList, {
				chatId: id,
				items: tab === "media" ? visual : files,
				empty: `No ${tab} in the loaded history`
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-center text-sm text-muted",
				children: [
					"No ",
					tab,
					" yet"
				]
			})
		]
	});
}
/** Attachments of the open conversation (what is loaded so far), newest first, each downloadable. */
function AttachmentList({ chatId, items, empty }) {
	const loadMedia = useGateway((s) => s.loadMedia);
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-8 text-center text-sm text-muted",
		children: empty
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 space-y-1.5",
		children: items.map((b) => {
			const media = b.media;
			const name = media.filename || `${media.type}-${b.id}`;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5 rounded-xl border border-line bg-white/4 px-2.5 py-2",
				children: [
					media.url && (media.type === "image" || media.type === "sticker") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: media.url,
						alt: "",
						className: "size-10 shrink-0 rounded-lg object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 shrink-0 place-items-center rounded-lg bg-white/8 text-base",
						children: {
							image: "🖼️",
							video: "🎬",
							audio: "🎵",
							ptt: "🎤",
							document: "📄",
							sticker: "🏷️"
						}[media.type]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-[12px] font-medium",
							children: media.filename || b.text || media.type
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[10.5px] text-muted",
							children: [
								b.time,
								" · ",
								b.from === "me" ? "sent" : "received"
							]
						})]
					}),
					media.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: media.url,
						download: name,
						target: "_blank",
						rel: "noreferrer",
						className: "shrink-0 text-[11px] text-indigo underline underline-offset-2",
						children: "Download"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: media.loading,
						onClick: () => void loadMedia(chatId, b.id),
						className: "shrink-0 text-[11px] text-indigo underline underline-offset-2 disabled:opacity-60",
						children: media.loading ? "…" : "Load"
					})
				]
			}, b.id);
		})
	});
}
function ActionRow({ icon, color, title, sub, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "mt-2 flex w-full items-center gap-3 rounded-xl border border-line bg-white/4 px-3 py-2.5 text-left hover:bg-white/8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid size-9 place-items-center rounded-[10px]", color),
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[13px] font-medium",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[11px] text-muted",
					children: sub
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-dim",
				children: "›"
			})
		]
	});
}
//#endregion
export { GatewayApp as t };
