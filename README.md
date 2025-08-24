# 🌐 zod-bhasha

> Multilingual error messages for [Zod](https://zod.dev) — starting with **English 🇬🇧** and **Bangla 🇧🇩**. Keep your validation errors human-friendly, localized, and developer-friendly ✨

---

## 📦 Installation

Using **npm**:

```bash
npm install zod-bhasha
```

Using **yarn**:

```bash
yarn add zod-bhasha
```

Using **pnpm**:

```bash
pnpm add zod-bhasha
```

---

## 🚀 Usage

### 1. Import and set locale globally

```ts
import { z } from "zod";
import { withBhasha, setLocale } from "zod-bhasha";

// Enable zod-bhasha
withBhasha(z);

// Set Bangla as default locale
setLocale("bn");

const schema = z.string().min(5);

console.log(schema.safeParse("hi").error?.format());
// Output (Bangla): "কমপক্ষে ৫ অক্ষর হতে হবে"
```

---

### 2. Override locale per validation

```ts
import { z } from "zod";
import { withBhasha } from "zod-bhasha";

withBhasha(z);

const schema = z.string().email();

console.log(schema.safeParse("invalid", { locale: "en" }).error?.format());
// Output: "Invalid email address"

console.log(schema.safeParse("invalid", { locale: "bn" }).error?.format());
// Output: "ইমেইল ঠিকানা সঠিক নয়"
```

---

## 🌍 Supported Locales

- 🇬🇧 English (`en`)
- 🇧🇩 Bangla (`bn`)

🔜 More languages coming soon! Contributions welcome 🎉

---

## 🛠️ Contributing

1. Fork the repo 🍴
2. Create a feature branch 🌱
3. Add your locale / improvements
4. Submit a PR 🚀

---

## 📜 License

MIT © 2025 — Made with ❤️ by \[Md Sifat Bin Jibon]
Github repo:- https://github.com/Md-Sifat-code/zod-bhasha
