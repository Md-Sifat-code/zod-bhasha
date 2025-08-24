import type { LocalePack } from "../i18n";
// Korean
export const ko: LocalePack = {
  name: "한국어",
  templates: {
    invalid_type: "{expected}이(가) 필요하지만 {received}이(가) 전달되었습니다.",
    invalid_literal: "리터럴 값 {expected}이(가) 필요하지만 {received}이(가) 전달되었습니다.",
    invalid_union: "잘못된 입력: 어떤 유니온 타입과도 일치하지 않습니다.",
    invalid_union_discriminator: "잘못된 판별 값입니다. {options} 중 하나여야 합니다.",
    invalid_enum_value: "잘못된 열거형 값입니다. {options} 중 하나여야 하지만 {received}이(가) 전달되었습니다.",
    invalid_arguments: "잘못된 함수 인수입니다.",
    invalid_return_type: "잘못된 함수 반환 유형입니다.",
    invalid_date: "잘못된 날짜입니다.",
    invalid_string: "잘못된 문자열{validation}입니다.",
    too_small: "{type}은(는) 최소 {minimum}{inclusive} 이어야 합니다.",
    too_big: "{type}은(는) 최대 {maximum}{inclusive} 이어야 합니다.",
    invalid_intersection_types: "교차 결과를 병합할 수 없습니다.",
    not_multiple_of: "숫자는 {multipleOf}의 배수여야 합니다.",
    not_finite: "숫자는 유한해야 합니다.",
    custom: "잘못된 입력입니다."
  }
};