import { create } from 'zustand';
import { AuditModule } from '@/types/audit';
import { AUDIT_MODULES } from '@/lib/constants';

interface AuditStore {
  selectedModule: (typeof AUDIT_MODULES)[keyof typeof AUDIT_MODULES] | null;
  auditModules: AuditModule[];
  setSelectedModule: (moduleId: (typeof AUDIT_MODULES)[keyof typeof AUDIT_MODULES] | null) => void;
  setAuditModules: (modules: AuditModule[]) => void;
  getModuleById: (
    moduleId: (typeof AUDIT_MODULES)[keyof typeof AUDIT_MODULES]
  ) => AuditModule | undefined;
}

export const useAuditStore = create<AuditStore>((set, get) => ({
  selectedModule: null,
  auditModules: [],

  setSelectedModule: (moduleId) => {
    set({ selectedModule: moduleId });
  },

  setAuditModules: (modules: AuditModule[]) => {
    set({ auditModules: modules });
  },

  getModuleById: (moduleId) => {
    const state = get();
    return state.auditModules.find((m) => m.moduleId === moduleId);
  },
}));
