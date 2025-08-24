import type { LocalePack } from "../i18n";

// Chinese (Simplified)
export const zh: LocalePack = {
  name: "简体中文",
  templates: {
    invalid_type: "预期 {expected}，收到 {received}。",
    invalid_format: "无效的 {format} 格式{validation}。",
    invalid_union: "无效输入：未匹配到任何联合类型。",
    invalid_value: "无效的枚举值。预期为 {options} 之一，收到 {received}。",
    unrecognized_keys: "对象中存在未识别的键：{keys}。",
    invalid_key: "无效的键。",
    invalid_element: "无效的元素。",
    too_small: "{origin} 必须至少为 {minimum}{inclusive}。",
    too_big: "{origin} 必须最多为 {maximum}{inclusive}。",
    not_multiple_of: "数字必须是 {divisor} 的倍数。",
    custom: "无效输入。"
  }
};