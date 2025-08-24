import type { LocalePack } from "../i18n";
// Arabic
export const ar: LocalePack = {
  name: "العربية",
  templates: {
    invalid_type: "المتوقع {expected}، المستلم {received}.",
    invalid_format: "تنسيق {format} غير صالح{validation}.",
    invalid_union: "إدخال غير صالح: لم يتطابق مع أي نوع من الاتحاد.",
    invalid_value: "قيمة التعداد غير صالحة. المتوقع أحد {options}، المستلم {received}.",
    unrecognized_keys: "مفاتيح غير معروفة في الكائن: {keys}.",
    invalid_key: "مفتاح غير صالح.",
    invalid_element: "عنصر غير صالح.",
    too_small: "{origin} يجب أن يكون على الأقل {minimum}{inclusive}.",
    too_big: "{origin} يجب ألا يتجاوز {maximum}{inclusive}.",
    not_multiple_of: "يجب أن يكون الرقم من مضاعفات {divisor}.",
    custom: "إدخال غير صالح."
  }
};