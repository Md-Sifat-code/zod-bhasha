import type { LocalePack } from "../i18n";
// Arabic
export const ar: LocalePack = {
  name: "العربية",
  templates: {
    invalid_type: "المتوقع {expected}، المستلم {received}.",
    invalid_literal: "القيمة الحرفية المتوقعة {expected}، المستلمة {received}.",
    invalid_union: "إدخال غير صالح: لم يتطابق مع أي نوع من الاتحاد.",
    invalid_union_discriminator: "قيمة المميز غير صالحة. المتوقع أحد {options}.",
    invalid_enum_value: "قيمة التعداد غير صالحة. المتوقع أحد {options}، المستلم {received}.",
    invalid_arguments: "وسائط الدالة غير صالحة.",
    invalid_return_type: "نوع الإرجاع غير صالح.",
    invalid_date: "تاريخ غير صالح.",
    invalid_string: "سلسلة غير صالحة{validation}.",
    too_small: "{type} يجب أن يكون على الأقل {minimum}{inclusive}.",
    too_big: "{type} يجب ألا يتجاوز {maximum}{inclusive}.",
    invalid_intersection_types: "تعذر دمج نتائج التقاطع.",
    not_multiple_of: "يجب أن يكون الرقم من مضاعفات {multipleOf}.",
    not_finite: "يجب أن يكون الرقم محدودًا.",
    custom: "إدخال غير صالح."
  }
};