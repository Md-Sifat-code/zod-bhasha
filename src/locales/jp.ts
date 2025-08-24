import type { LocalePack } from "../i18n";
// Japanese
export const ja: LocalePack = {
  name: "日本語",
  templates: {
    invalid_type: "{expected} が必要ですが、{received} が渡されました。",
    invalid_format: "無効な {format} フォーマット{validation}。",
    invalid_union: "無効な入力: いずれのユニオン型にも一致しません。",
    invalid_value: "無効な列挙値です。{options} のいずれかが必要ですが、{received} が渡されました。",
    unrecognized_keys: "オブジェクト内の未認識キー: {keys}。",
    invalid_key: "無効なキー。",
    invalid_element: "無効な要素。",
    too_small: "{origin} は少なくとも {minimum}{inclusive} でなければなりません。",
    too_big: "{origin} は最大 {maximum}{inclusive} でなければなりません。",
    not_multiple_of: "数値は {divisor} の倍数でなければなりません。",
    custom: "無効な入力です。"
  }
};