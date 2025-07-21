import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Protocol } from 'pmtiles';

// PMTiles プロトコルをMapLibre GL JSに登録
let protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

// 環境に応じたstyle.jsonパスを決定
const getStylePath = () => {
    // 開発環境の場合は絶対パス、本番環境の場合は相対パス
    return import.meta.env.DEV ? '/docs/style.json' : './docs/style.json';
};

// MapLibre GL JSマップの初期化
const map = new maplibregl.Map({
    container: 'map',
    style: getStylePath(),
    center: [139.6917, 35.6895], // 東京駅を中心に設定
    zoom: 4, // 日本全体が見える適切なズーム
    pitch: 0, // 正面から見る角度
    bearing: 0,
    antialias: true,
    maxZoom: 18,
    minZoom: 0.5,
    hash: true // URL同期
});

// ナビゲーションコントロールを追加
map.addControl(new maplibregl.NavigationControl());
map.addControl(new maplibregl.GlobeControl());

// マップ読み込み完了時の処理
map.on('load', () => {
    console.log('Map loaded successfully');
});

// スケールコントロールを追加
map.addControl(new maplibregl.ScaleControl({maxWidth: 100, unit: 'metric'}));

// マップクリック時に属性を吹き出し表示（すべてのフィーチャを表示）
map.on('click', (e) => {
    const features = map.queryRenderedFeatures(e.point);
    if (features.length > 0) {
        const popupContent = features.map(feature => {
            return `<strong>${feature.layer.id}</strong><br>${JSON.stringify(feature.properties, null, 2)}`;
        }).join('<hr>');

        const popup = new maplibregl.Popup({ closeOnClick: true })
            .setLngLat(e.lngLat)
            .setHTML(popupContent)
            .addTo(map);
    }
});
