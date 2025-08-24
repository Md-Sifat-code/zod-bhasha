import type { LocalePack } from "../i18n";
// Bengali
export const bn: LocalePack = {
  name: "বাংলা",
  templates: {
    invalid_type: "প্রত্যাশিত {expected}, পাওয়া গেছে {received}।",
    invalid_format: "ভুল {format} ফরম্যাট{validation}।",
    invalid_union: "ভুল ইনপুট: কোনো ইউনিয়ন টাইপের সাথে মিল নেই।",
    invalid_value: "ভুল enum মান। প্রত্যাশিত {options} এর একটি, পাওয়া গেছে {received}।",
    unrecognized_keys: "অজানা কী(সমূহ) অবজেক্টে: {keys}।",
    invalid_key: "ভুল কী।",
    invalid_element: "ভুল উপাদান।",
    too_small: "{origin} অন্তত {minimum}{inclusive} হতে হবে।",
    too_big: "{origin} সর্বোচ্চ {maximum}{inclusive} হতে হবে।",
    not_multiple_of: "সংখ্যাটি {divisor} এর গুণিতক হতে হবে।",
    custom: "ভুল ইনপুট।"
  }
};
