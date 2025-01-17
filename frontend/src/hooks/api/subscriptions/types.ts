export type SubscriptionPlan = {
  _id: string;
  membersUsed: number;
  memberLimit: number;
  auditLogs: boolean;
  customAlerts: boolean;
  customRateLimits: boolean;
  pitRecovery: boolean;
  rbac: boolean;
  secretVersioning: boolean;
  slug: string;
  tier: number;
  workspaceLimit: number;
  workspacesUsed: number;
  environmentLimit: number;
  status: "incomplete" | "incomplete_expired" | "trialing" | "active" | "past_due" | "canceled" | "unpaid" | null;
  trial_end: number | null;
};
