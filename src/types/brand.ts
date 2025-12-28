/**
 * Brand interface
 * Represents a brand/website being audited
 */

export interface Brand {
  id: string;
  name: string;
  domain: string;
  url: string;
  description?: string;
  favicon?: string;
  createdAt?: string;
}
