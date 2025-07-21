# 🗺️ OpenMapTiles Plain

OpenStreetMap Foundation Japan のベクトルタイル（OpenMapTiles）を忠実にシンプルなグレー単色で可視化するテンプレートサイト。[optgeo/toner-globe](https://github.com/optgeo/toner-globe) の設計・技術スタックを踏襲しつつ、PMTiles対応とモノクロスタイルに特化。

![MapLibre GL JS](https://img.shields.io/badge/MapLibre-GL%20JS-blue) ![PMTiles](https://img.shields.io/badge/PMTiles-Support-orange) ![Pkl](https://img.shields.io/badge/Apple-Pkl-orange) ![Vite](https://img.shields.io/badge/Vite-Build-purple) ![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-green)

## ✨ 機能

- **シンプルなグレー表示**: OpenMapTiles の全ての fill, line, symbol データをグレー（#cccccc）で統一表示
- **PMTiles 対応**: `https://tile.openstreetmap.jp/static/planet.pmtiles` を利用した高効率なタイル配信
- **日本語対応**: `name:ja` フィールドを優先し、フォールバックで `name` を利用
- **レスポンシブデザイン**: モバイルからデスクトップまで最適表示
- **型安全設定**: Apple Pkl による設定管理で開発効率向上

## 🚀 クイックスタート

### 前提条件

- Node.js 18+ および npm
- Apple Pkl CLI（[インストールガイド](https://pkl-lang.org/main/current/pkl-cli/index.html)）

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/optgeo/openmaptiles-plain.git
cd openmaptiles-plain

# 依存関係をインストール
npm install
```

### 開発

```bash
# Pkl設定からstyle.jsonを生成
make style
# または
npm run style:generate

# 開発サーバーを開始
make dev
# または  
npm run dev
```

アプリケーションは `http://localhost:3000` で利用可能になります

### プロダクションビルド

```bash
# プロダクション用アプリケーションをビルド
make build
# または
npm run build
```

ビルドファイルはGitHub Pagesデプロイ用に `docs/` ディレクトリに出力されます。

## 🏗️ アーキテクチャ

### コアファイル

- **`index.html`** - MapLibreコンテナを持つメインHTMLエントリーポイント
- **`main.js`** - MapLibre初期化とPMTilesプロトコル登録を含むJavaScriptロジック
- **`style.json`** - 生成されたMapLibre GLスタイル（Pklから自動生成）
- **`vite.config.js`** - 開発およびプロダクション用Viteビルド設定

### 設定システム

- **`style.pkl`** - メインスタイル設定（OpenMapTiles全要素対応・グレー単色）
- **`Makefile`** - Pklコンパイルとデプロイの自動化ビルド

### 技術的特徴

- **PMTiles統合**: `@protomaps/pmtiles`でMapLibre GL JSにPMTilesプロトコルを追加
- **グレー単色**: 全レイヤーを`#cccccc`で統一し、視覚的階層は透明度で調整
- **OpenMapTilesスキーマ対応**: water, waterway, landuse, landcover, building, transportation, boundary, place, poi等の全レイヤーサポート

## 📝 スタイル設定

### メイン設定ファイル

- **`style.pkl`**: OpenMapTiles全要素対応のメインスタイル設定

### スタイル生成

```bash
# style.pklからstyle.jsonを生成
make style

# 生成されたスタイルを検証
npm run lint:style
```

### グレー表示仕様

- **背景**: `#f8f8f8`（明るいグレー）
- **全要素**: `#cccccc`（中間グレー）で統一
- **透明度調整**: レイヤーの重要度に応じて opacity で階層表現
- **ラベル**: グレー文字 + 白いハローで視認性確保

## 📦 利用可能なコマンド

| コマンド | 説明 |
|---------|-----|
| `make style` | Pkl設定からstyle.jsonを生成 |
| `make dev` | 開発サーバーを開始 |
| `make build` | プロダクション用ビルド |
| `make deploy` | GitHub Pagesにデプロイ |
| `make clean` | 生成ファイルをクリーン |
| `make help` | 利用可能なコマンドを表示 |

## 🛠️ 技術

- **[MapLibre GL JS](https://maplibre.org/)**: オープンソースマップレンダリングエンジン
- **[PMTiles](https://protomaps.com/docs/pmtiles/)**: 高効率なタイル配信フォーマット
- **[Apple Pkl](https://pkl-lang.org/)**: 型安全設定言語
- **[Vite](https://vitejs.dev/)**: 次世代ビルドツール
- **[OpenStreetMap Japan](https://tile.openstreetmap.jp/)**: ベクタータイルデータソース
- **GitHub Pages**: 静的サイトホスティング

## 🎨 設計理念

このプロジェクトは以下の原則に基づいています：

- **シンプリシティ**: 余計な装飾を排除したミニマルな地図表現
- **可視化重視**: OpenMapTilesの全データを漏れなく表示
- **パフォーマンス**: PMTilesによる高速タイル配信
- **保守性**: Apple Pklによる型安全な設定管理
- **アクセシビリティ**: グレー単色による見やすさの確保

## 🤝 コントリビューティング

1. リポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. Pkl設定ファイルに変更を加える
4. 変更をテスト (`make style && make dev`)
5. 変更をコミット (`git commit -m 'Add amazing feature'`)
6. ブランチにプッシュ (`git push origin feature/amazing-feature`)
7. プルリクエストを開く

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。

## 🙏 謝辞

このプロジェクトは [optgeo/toner-globe](https://github.com/optgeo/toner-globe) のアーキテクチャと設計思想を参考にしています。