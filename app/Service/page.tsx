import React from "react";

export const metadata = {
  title: "サービス",
  description: "システム開発、クラウド、データ分析、運用自動化などのITソリューションを提供します。",
};

export default function ServicePage(): JSX.Element {
  return (
    <main className="min-h-screen p-8 bg-white">
      <header className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">サービス</h1>
        <p className="text-lg text-gray-700">
          松田システム技研は、業務課題をテクノロジーで解決するための
          フルスタック IT ソリューションを提供します。企画から設計、開発、運用までワンストップで対応します。
        </p>
      </header>

      <section className="max-w-4xl mx-auto mt-10 grid gap-8">
        <div>
          <h2 className="text-2xl font-semibold">提供サービス</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-medium">カスタムソフトウェア開発</h3>
              <p className="mt-2 text-gray-600">要件定義、UI/UX 設計、バックエンド・フロントエンド開発まで。マイクロサービスや API 設計にも対応します。</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-medium">クラウド & インフラ設計</h3>
              <p className="mt-2 text-gray-600">AWS / Azure / GCP を用いた設計・移行・コスト最適化。IaC や CI/CD の導入で信頼性と効率を向上します。</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-medium">データ分析・AI</h3>
              <p className="mt-2 text-gray-600">データパイプライン構築、BI ダッシュボード、機械学習モデルの導入による意思決定支援を行います。</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-medium">RPA / 運用自動化</h3>
              <p className="mt-2 text-gray-600">定型業務の自動化や運用監視の自動化でコスト削減と品質向上を実現します。</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">アプローチ</h2>
          <ol className="list-decimal list-inside mt-4 text-gray-700 space-y-3">
            <li><strong>ヒアリング:</strong> ビジネス課題を整理し、成功指標を定義します。</li>
            <li><strong>PoC / 設計:</strong> 早期に価値を検証するためのプロトタイプを作成します。</li>
            <li><strong>実装:</strong> アジャイルで継続的にリリースし、フィードバックを反映します。</li>
            <li><strong>運用・改善:</strong> SRE の観点で監視・改善を行い、長期的な価値を提供します。</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">採用技術（例）</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="px-3 py-1 border rounded">TypeScript</span>
            <span className="px-3 py-1 border rounded">React / Next.js</span>
            <span className="px-3 py-1 border rounded">Node.js</span>
            <span className="px-3 py-1 border rounded">AWS / GCP</span>
            <span className="px-3 py-1 border rounded">Docker / Kubernetes</span>
            <span className="px-3 py-1 border rounded">Terraform</span>
            <span className="px-3 py-1 border rounded">PostgreSQL / BigQuery</span>
            <span className="px-3 py-1 border rounded">PyTorch / scikit-learn</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">導入事例（抜粋）</h2>
          <div className="mt-4 space-y-4 text-gray-700">
            <article className="p-4 border rounded-lg">
              <h3 className="font-medium">製造業向け業務管理システム</h3>
              <p className="mt-1">既存システムのモダナイズとデータ連携を実施し、処理時間を 70% 削減。運用コストも大幅に低減しました。</p>
            </article>
            <article className="p-4 border rounded-lg">
              <h3 className="font-medium">小売向け分析基盤の構築</h3>
              <p className="mt-1">販売データを統合した BI を導入し、在庫最適化とプロモーション効果の可視化を実現しました。</p>
            </article>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">次のステップ</h2>
          <p className="mt-2 text-gray-700">まずは無料相談で現状の課題をお聞かせください。適切なスコープとロードマップをご提案します。</p>
          <div className="mt-4">
            <a href="/Contact" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700">お問い合わせ</a>
          </div>
        </div>
      </section>
    </main>
  );
}
