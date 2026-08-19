export type NavigatorLang = 'ja' | 'en';

interface NavigatorCopy {
  noNodesMatch: string;
  statusOptions: {
    active: string;
    maintenance: string;
    completed: string;
    archived: string;
  };
}

const copy: Record<NavigatorLang, NavigatorCopy> = {
  en: {
    noNodesMatch: 'No nodes match the current filters. Try resetting filters or broadening the search.',
    statusOptions: {
      active: 'active',
      maintenance: 'maintenance',
      completed: 'completed',
      archived: 'archived',
    },
  },
  ja: {
    noNodesMatch: '現在のフィルターに一致するノードがありません。フィルターをリセットしてください。',
    statusOptions: {
      active: '稼働中',
      maintenance: '保守',
      completed: '完了',
      archived: 'アーカイブ',
    },
  },
};

export function getProjectsNavigatorCopy(lang: NavigatorLang): NavigatorCopy {
  return copy[lang];
}
