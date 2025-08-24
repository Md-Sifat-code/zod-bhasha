# 🌐 zod-bhasha

> Multilingual validation error messages for [Zod](https://zod.dev) ✨  
> Built-in support for **English 🇬🇧** and **Bangla 🇧🇩** — with easy extension to more 🌍

![npm](https://img.shields.io/npm/v/zod-bhasha?color=blue&label=npm%20version)  
![license](https://img.shields.io/badge/license-MIT-green)  
![tests](https://img.shields.io/badge/tests-passing-brightgreen)

---

## 📖 What is zod-bhasha?

`zod-bhasha` supercharges your Zod schemas with **localized error messages**.  
Switch error messages globally or per-parse, making your apps more accessible and user-friendly across languages.

- ✅ Plug & play with Zod
- 🌐 Localized error messages (EN + BN included)
- 🎯 Works globally (`setLocale`) or per-validation (`getErrorMap`)
- 💡 Easy to add custom languages
- ⚡ Tiny, tree-shakeable, TypeScript-first

---

## 📦 Installation

```bash
npm install zod-bhasha
# or
yarn add zod-bhasha
# or
pnpm add zod-bhasha
```

````

> Requires **Zod v3+** (peer dependency).

---

## 🚀 Usage

### Global locale

```ts
import { z } from "zod";
import { setLocale } from "zod-bhasha";

setLocale("bn"); // 🌐 Bangla for all validations

const schema = z.string().email();
const result = schema.safeParse("not-an-email");

console.log(result.error?.issues[0].message);
// => "অবৈধ স্ট্রিং (email)।"
```

### Per-parse locale

```ts
import { z } from "zod";
import { getErrorMap } from "zod-bhasha";

const schema = z.number().min(18);

schema.safeParse(12, { errorMap: getErrorMap("en") });
// => "number must be at least 18."

schema.safeParse(12, { errorMap: getErrorMap("bn") });
// => "number কমপক্ষে 18 হতে হবে।"
```

---

## 🌍 Adding Custom Locales

You can register your own locale with `registerLocale`:

```ts
import { registerLocale, getErrorMap } from "zod-bhasha";

registerLocale("es", {
  name: "Español",
  templates: {
    invalid_type: "Se esperaba {expected}, se recibió {received}.",
    // ... fill out the rest
  },
});

const schema = z.string().min(5);
schema.safeParse("hi", { errorMap: getErrorMap("es") });
```

---

## 🛠 Roadmap

- [ ] Add more built-in locales (ES, FR, DE, HI…)
- [ ] Fine-grained messages for string validations (email, url, uuid, regex)
- [ ] React hook (`useZodLocale`) for client-side apps
- [ ] Playground & docs site

---

## 🤝 Contributing

PRs are welcome! 🎉

1. Fork & clone
2. Create a feature branch
3. Run `npm run dev` for build watch mode
4. Add tests with `vitest`
5. Open a PR 🚀

---

## 📜 License

MIT © 2025 [Md Sifat Bin Jibon](https://github.com/Md-Sifat-code)

---

## ✨ Acknowledgements

- [Zod](https://zod.dev) — for being the backbone of schema validation
- Community translators who help expand language support 🌍

---
````
