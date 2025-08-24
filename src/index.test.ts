import { describe, it, expect } from "vitest";
import { z } from "zod";
import { getErrorMap, setLocale } from "./index";

describe("zod-bhasha", () => {
  it("per-parse locale works", () => {
    // Set the error map temporarily for this test
    const originalConfig = z.config();
    z.config({ customError: getErrorMap("en") });
    
    const s = z.string().email();
    const res = s.safeParse("x");
    expect(!res.success && res.error.issues[0].message.toLowerCase()).toContain("invalid");
    
    // Restore original config
    z.config(originalConfig);
  });

  it("global locale works", () => {
    setLocale("bn");
    const s = z.string().min(3);
    const res = s.safeParse("x");
    expect(!res.success && res.error.issues[0].message).toContain("অন্তত");
  });
});
