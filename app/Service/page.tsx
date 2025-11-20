import React from "react";

export const metadata = {
  title: "サービス",
  description: "システム開発、クラウド、データ分析、運用自動化などのITソリューションを提供します。",
};

export default function ServicePage(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">


<div className="py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-md px-4 md:px-8 mx-auto">
    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">サービス</h2>

    <p className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">松田システム技研は、業務課題をテクノロジーで解決するためのフルスタック IT ソリューションを提供します。企画から設計、開発、運用までワンストップで対応します。</p>


  <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">提供サービス</h2>

  <ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
    <li><strong>カスタムソフトウェア開発:</strong> 要件定義、UI/UX 設計からバックエンド・フロントエンド開発、マイクロサービスや API 設計まで対応します。</li>
    <li className="mt-3"><strong>クラウド & インフラ設計:</strong> AWS / Azure / GCP を用いた設計・移行・コスト最適化。IaC（Terraform）や CI/CD の導入で信頼性と効率を向上します。</li>
    <li className="mt-3"><strong>データ分析・AI:</strong> データパイプライン構築、BI ダッシュボード、機械学習モデルの導入による意思決定支援を行います。</li>
    <li className="mt-3"><strong>RPA / 運用自動化:</strong> 定型業務の自動化や運用監視の自動化でコスト削減と品質向上を実現します。</li>
  </ul>


  <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">アプローチ</h2>

  <ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
    <li><strong>ヒアリング:</strong> ビジネス課題を整理し、成功指標を定義します。</li>
    <li className="mt-3"><strong>PoC / 設計:</strong> 早期に価値を検証するためのプロトタイプを作成します。</li>
    <li className="mt-3"><strong>実装:</strong> アジャイルで継続的にリリースし、フィードバックを反映します。</li>
    <li className="mt-3"><strong>運用・改善:</strong> SRE の観点で監視・改善を行い、長期的な価値を提供します。</li>
  </ul>


  <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">採用技術（例）</h2>
  <p className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">TypeScript / React / Next.js / Node.js / AWS / GCP / Docker / Kubernetes / Terraform / PostgreSQL / BigQuery / PyTorch</p>


  <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">導入事例（抜粋）</h2>

  <ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
    <li><strong>製造業向け業務管理システム:</strong> 既存システムのモダナイズとデータ連携を実施し、処理時間を 70% 削減。運用コストも大幅に低減しました。</li>
    <li className="mt-3"><strong>小売向け分析基盤の構築:</strong> 販売データを統合した BI を導入し、在庫最適化とプロモーション効果の可視化を実現しました。</li>
  </ul>


  <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-lg">
    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">次のステップ</h2>
    <p className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">まずは無料相談で現状の課題をお聞かせください。適切なスコープとロードマップをご提案します。</p>
    <div className="mt-4">
      <a href="/Contact" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700">お問い合わせ</a>
    </div>
  </div>

  </div>
</div>


</main>
  );
}
