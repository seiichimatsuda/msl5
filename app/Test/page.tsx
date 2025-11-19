import React from "react";

export const metadata = {
  title: "Test Page",
};

export default function TestPage(): JSX.Element {
  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Page</h1>
      <p className="text-lg text-gray-700">
        これはテスト用の新しいページです。
      </p>
      <p className="mt-4 text-gray-600">
        ナビゲーションから簡単にアクセスできます。
      </p>
    </main>
  );
}
