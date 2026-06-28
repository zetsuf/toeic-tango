# TOEIC学習 (toeic-tango)

TOEIC学習用アプリ。**単語帳**と**リスニング対策(Part 2/3/4)**を1つにまとめた静的Webアプリ。HTML/CSS/JS、データは端末内 localStorage。GitHub Pages で公開 + Capacitor で Android APK 化。

## 機能
- **単語帳**: フラッシュカード、覚えた/苦手/未学習/学習済の自動振り分け、追加・編集・取り込み、進捗表示（約320語同梱）
- **リスニング対策**（ハンバーガー→サイドバーで切替）
  - Part 2 ＜応答問題＞ / Part 3 ＜会話問題＞ / Part 4 ＜説明文問題＞
  - 音声は端末の音声合成(Web Speech API)で英文を読み上げ
  - 各Partにオリジナル練習問題を同梱（実際のTOEIC問題ではありません）
- PWA対応（ホーム画面追加・オフライン）

## 開発プレビュー
```bash
node server.js   # http://localhost:5190
```

## Android APK のビルド（Capacitor）
前提: Node.js、Android SDK、JDK 17+（Android Studio 同梱の JBR で可）。

```bash
# 1) 配布用 www に静的ファイルを反映（変更時は毎回コピー）
#    index.html / styles.css / app.js / words.js / listening.js / sw.js / manifest / icon*.png を www/ へ
npx cap sync android

# 2) ビルド（JAVA_HOME に JBR、ANDROID_HOME に SDK を指定）
cd android
./gradlew assembleDebug
# 出力: android/app/build/outputs/apk/debug/app-debug.apk
```

> 署名なしの debug APK は「提供元不明アプリ」を許可した端末にインストールできます。配布用には署名付き release ビルドが必要です。
