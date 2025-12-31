import React, { useState, useEffect } from 'react';

// スケルトンローダーコンポーネント
const SkeletonLoader = () => {
  return (
    <div className="border border-slate-200 rounded-xl p-4 w-full max-w-sm mx-auto">
      <div className="animate-pulse space-y-4">
        {/* ヘッダー部分 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-slate-200 rounded w-1/3"></div>
            <div className="h-3 bg-slate-200 rounded w-1/4"></div>
          </div>
        </div>
        {/* コンテンツ部分 */}
        <div className="h-32 bg-slate-200 rounded-lg w-full"></div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

// 実際のコンテンツコンポーネント
const ContentCard = () => {
  return (
    <div className="border border-slate-200 rounded-xl p-4 w-full max-w-sm mx-auto">
      <div className="space-y-4">
        {/* ヘッダー部分 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            JS
          </div>
          <div className="space-y-1 flex-1">
            <div className="font-semibold text-slate-900">John Smith</div>
            <div className="text-sm text-slate-500">2時間前</div>
          </div>
        </div>
        {/* コンテンツ部分 */}
        <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg w-full flex items-center justify-center text-white font-bold text-xl">
          画像コンテンツ
        </div>
        <div className="space-y-2 text-slate-700">
          <p>スケルトンスクリーンを使うことで、ユーザーは読み込み中も画面構造を把握できます。</p>
          <p>Layout Shiftを防ぎ、体感速度が向上します。</p>
        </div>
      </div>
    </div>
  );
};

// デモアプリ
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2秒後にコンテンツを表示
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleReload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            スケルトンスクリーン デモ
          </h1>
          <p className="text-slate-600 mb-4">
            Layout Shiftを防ぎ、体感的な待ち時間を短縮
          </p>
          <button
            onClick={handleReload}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            再読み込み
          </button>
        </div>

        {isLoading ? <SkeletonLoader /> : <ContentCard />}
      </div>
    </div>
  );
}
