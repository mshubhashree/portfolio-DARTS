export interface VisitorMessage {
  id: string;
  senderName: string;
  senderRole?: string;
  content: string;
  timestamp: string;
  isPublic?: boolean;
}

const STORAGE_KEY = 'portfolio_visitor_messages';
const ADMIN_PASS_KEY = 'portfolio_admin_auth';

export const ADMIN_PIN = 'admin123';

export const DEFAULT_MESSAGES: VisitorMessage[] = [
  {
    id: 'msg-seed-1',
    senderName: 'Sarah Jenkins',
    senderRole: 'Senior Product Manager @ Fintech Labs',
    content: 'Loved the architectural breakdown on NovaCloud Analytics! Super inspiring performance metrics.',
    timestamp: '2025-05-12 14:32',
    isPublic: true
  },
  {
    id: 'msg-seed-2',
    senderName: 'Liam Chen',
    senderRole: 'AI Research Engineer',
    content: 'Left a note regarding your CognitiveFlow agent playground. Would love to connect regarding autonomous tooling!',
    timestamp: '2025-05-14 09:15',
    isPublic: true
  },
  {
    id: 'msg-seed-3',
    senderName: 'Maya Patel',
    senderRole: 'Staff Frontend Architect',
    content: 'Hey Alex! Dropping by to say this portfolio design & typography is top-tier work. Cheers!',
    timestamp: '2025-05-15 18:40',
    isPublic: true
  }
];

export function getStoredMessages(): VisitorMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_MESSAGES));
      return DEFAULT_MESSAGES;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_MESSAGES;
  }
}

export function saveMessage(message: Omit<VisitorMessage, 'id' | 'timestamp'>): VisitorMessage {
  const messages = getStoredMessages();
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }) + ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const newMessage: VisitorMessage = {
    ...message,
    id: 'msg-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    timestamp: dateStr,
    isPublic: message.isPublic ?? true
  };

  const updated = [newMessage, ...messages];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newMessage;
}

export function deleteMessage(id: string): void {
  const messages = getStoredMessages();
  const updated = messages.filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function clearAllMessages(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
}

export function resetDefaultMessages(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_MESSAGES));
}

export function isAdminLoggedIn(): boolean {
  return localStorage.getItem(ADMIN_PASS_KEY) === 'true';
}

export function setAdminLoggedIn(status: boolean): void {
  if (status) {
    localStorage.setItem(ADMIN_PASS_KEY, 'true');
  } else {
    localStorage.removeItem(ADMIN_PASS_KEY);
  }
}
