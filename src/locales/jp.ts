import type { LocalePack } from "../i18n";
// Japanese
export const ja: LocalePack = {
  name: "日本語",
  templates: {
    invalid_type: "{expected} が必要ですが、{received} が渡されました。",
    invalid_literal: "リテラル値 {expected} が必要ですが、{received} が渡されました。",
    invalid_union: "無効な入力: いずれのユニオン型にも一致しません。",
    invalid_union_discriminator: "無効な判別値です。次のいずれかが必要です: {options}。",
    invalid_enum_value: "無効な列挙値です。{options} のいずれかが必要ですが、{received} が渡されました。",
    invalid_arguments: "無効な関数引数です。",
    invalid_return_type: "無効な関数戻り値の型です。",
    invalid_date: "無効な日付です。",
    invalid_string: "無効な文字列{validation}。",
    too_small: "{type} は少なくとも {minimum}{inclusive} でなければなりません。",
    too_big: "{type} は最大 {maximum}{inclusive} でなければなりません。",
    invalid_intersection_types: "交差結果をマージできませんでした。",
    not_multiple_of: "数値は {multipleOf} の倍数でなければなりません。",
    not_finite: "数値は有限でなければなりません。",
    custom: "無効な入力です。"
  }
};