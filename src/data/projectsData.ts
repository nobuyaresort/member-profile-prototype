import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "ECサイトリニューアル",
    description: "某大手アパレルブランドのECサイトをフルリニューアル。売上30%増加を達成。",
    technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
    period: "2023年4月 - 2023年9月",
    colorClass: "bg-gradient-to-r from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "社内管理システム構築",
    description: "クラウドベースの社内管理システムを設計・開発。業務効率が50%改善。",
    technologies: ["Vue.js", "Firebase", "Node.js", "Express"],
    period: "2022年10月 - 2023年2月",
    colorClass: "bg-gradient-to-r from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "モバイルアプリ開発",
    description: "ヘルスケア系スタートアップのiOS/Androidアプリを開発。10万ダウンロード達成。",
    technologies: ["React Native", "Redux", "Firebase", "Jest"],
    period: "2022年4月 - 2022年9月",
    colorClass: "bg-gradient-to-r from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "決済システム統合",
    description: "複数の決済サービスを統合するマイクロサービスの設計・開発。",
    technologies: ["Go", "Docker", "Kubernetes", "gRPC"],
    period: "2021年7月 - 2021年12月",
    colorClass: "bg-gradient-to-r from-cyan-500 to-cyan-600"
  },
  {
    id: 5,
    title: "AIチャットボット開発",
    description: "自然言語処理を活用したカスタマーサポート用チャットボットの開発。",
    technologies: ["Python", "TensorFlow", "FastAPI", "AWS"],
    period: "2021年1月 - 2021年5月",
    colorClass: "bg-gradient-to-r from-red-500 to-red-600"
  },
  {
    id: 6,
    title: "データ分析基盤構築",
    description: "大規模データ分析基盤の設計・構築。リアルタイムダッシュボードの実装。",
    technologies: ["BigQuery", "Spark", "Tableau", "Airflow"],
    period: "2020年8月 - 2020年12月",
    colorClass: "bg-gradient-to-r from-yellow-500 to-yellow-600"
  }
];