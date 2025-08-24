import type { LocalePack } from "../i18n";
// Hindi
export const hi: LocalePack = {
  name: "हिन्दी",
  templates: {
    invalid_type: "{expected} अपेक्षित था, {received} प्राप्त हुआ।",
    invalid_format: "अमान्य {format} फॉरमेट{validation}।",
    invalid_union: "अमान्य इनपुट: किसी भी यूनियन प्रकार से मेल नहीं खाता।",
    invalid_value: "अमान्य एनेम मान। अपेक्षित {options}, प्राप्त {received}।",
    unrecognized_keys: "ऑब्जेक्ट में अजानी की: {keys}।",
    invalid_key: "अमान्य की।",
    invalid_element: "अमान्य एलिमेंट।",
    too_small: "{origin} कम से कम {minimum}{inclusive} होना चाहिए।",
    too_big: "{origin} अधिकतम {maximum}{inclusive} होना चाहिए।",
    not_multiple_of: "संख्या {divisor} का गुणज होना चाहिए।",
    custom: "अमान्य इनपुट।"
  }
};