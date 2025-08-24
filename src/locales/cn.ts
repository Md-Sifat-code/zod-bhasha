import type { LocalePack } from "../i18n";

// Chinese (Simplified)
export const zh: LocalePack = {
  name: "简体中文",
  templates: {
    invalid_type: "预期 {expected}，收到 {received}。",
    invalid_literal: "预期字面值 {expected}，收到 {received}。",
    invalid_union: "无效输入：未匹配到任何联合类型。",
    invalid_union_discriminator: "无效的判别值。预期为以下之一：{options}。",
    invalid_enum_value: "无效的枚举值。预期为 {options} 之一，收到 {received}。",
    invalid_arguments: "函数参数无效。",
    invalid_return_type: "函数返回类型无效。",
    invalid_date: "无效的日期。",
    invalid_string: "无效的字符串{validation}。",
    too_small: "{type} 必须至少为 {minimum}{inclusive}。",
    too_big: "{type} 必须最多为 {maximum}{inclusive}。",
    invalid_intersection_types: "交集结果无法合并。",
    not_multiple_of: "数字必须是 {multipleOf} 的倍数。",
    not_finite: "数字必须是有限值。",
    custom: "无效输入。"
  }
};