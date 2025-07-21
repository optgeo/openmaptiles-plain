# .github/copilot-instruction.md

## プロジェクト概要

このリポジトリは OpenStreetMap Foundation Japan のベクトルタイル（OpenMapTiles）を忠実に可視化するシンプルなテンプレートサイト（optgeo/openmaptiles-plain）を構築するためのものです。  
サイトの基本的な構成やツールの使い方は [optgeo/toner-globe](https://github.com/optgeo/toner-globe) を踏襲します。

---

## 実装要件

### 1. ベース構成
- [optgeo/toner-globe](https://github.com/optgeo/toner-globe) のディレクトリ構成、ビルドフロー、開発用ツールを再利用すること
  - Vite, Apple Pkl（style生成）, Makefile, GitHub Pages デプロイ、`docs/` 配置など
  - ビルドコマンドや開発用サーバ起動方法も同様とする

### 2. 変更点
#### (1) 表示スタイル
- OpenMapTiles で供給される全ての `fill`, `line`, `symbol` データをグレー（例: `#cccccc`）で描画する `style.json` を用意すること
  - ラベルやシンボルもグレー表示
  - 詳細な色分けや強調は一切不要
- スタイル定義は Apple Pkl で管理し、`make style` で `docs/style.json` が生成されること

#### (2) タイルソース
- ソースは `https://tile.openstreetmap.jp/static/planet.pmtiles` の PMTiles を指定すること
- PMTiles 対応のため [pmtiles.js](https://protomaps.com/docs/pmtilesjs/) を正しく組み込むこと
  - MapLibre GL JS で PMTiles ソースが利用できるようにする
  - 必要に応じて `@protomaps/pmtiles` パッケージを依存に追加する

---

## 開発・運用

- 開発・ビルド・デプロイ・設定などは [optgeo/toner-globe](https://github.com/optgeo/toner-globe) の README や Makefile を参照し、同様に実装する
- デプロイ先は `docs/` ディレクトリ（GitHub Pages 用）
- コードや設定はシンプルかつ明快に保つこと

---

## Copilot への指示

- **optgeo/toner-globe** の設計・技術スタックを忠実に踏襲してください
- ただし、**スタイル（グレー単色・OpenMapTiles全要素対応）**と**ソース（PMTiles指定・pmtiles.js組込）**のみ本仕様に従ってください
- Apple Pkl でのスタイル定義、Vite ビルド、Makefile、GitHub Pages デプロイなどはそのまま流用可能です

---

## 参考

- [optgeo/toner-globe](https://github.com/optgeo/toner-globe)
- [pmtiles.js ドキュメント](https://protomaps.com/docs/pmtilesjs/)
- [OpenMapTiles schema](https://openmaptiles.org/schema/)

---

**上記をもとに、初期実装および保守運用に役立つよう設計・実装してください。**