import type { LocalePack } from "../i18n";
// Hindi
export const hi: LocalePack = {
  name: "हिन्दी",
  templates: {
    invalid_type: "{expected} अपेक्षित था, {received} प्राप्त हुआ।",
    invalid_literal: "अपेक्षित लिटरल {expected}, प्राप्त {received}।",
    invalid_union: "अमान्य इनपुट: किसी भी यूनियन प्रकार से मेल नहीं खाता।",
    invalid_union_discriminator: "अमान्य डिस्क्रिमिनेटर मान। अपेक्षित: {options}।",
    invalid_enum_value: "अमान्य एनेम मान। अपेक्षित {options}, प्राप्त {received}।",
    invalid_arguments: "अमान्य फ़ंक्शन आर्ग्युमेंट्स।",
    invalid_return_type: "अमान्य फ़ंक्शन रिटर्न प्रकार।",
    invalid_date: "अमान्य तारीख़।",
    invalid_string: "अमान्य स्ट्रिंग{validation}।",
    too_small: "{type} कम से कम {minimum}{inclusive} होना चाहिए।",
    too_big: "{type} अधिकतम {maximum}{inclusive} होना चाहिए।",
    invalid_intersection_types: "इंटरसेक्शन परिणाम मर्ज नहीं हो सके।",
    not_multiple_of: "संख्या {multipleOf} का गुणज होना चाहिए।",
    not_finite: "संख्या सीमित होनी चाहिए।",
    custom: "अमान्य इनपुट।"
  }
};