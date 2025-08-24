export type Dict = Record<string, unknown>;

export function format(template: string, params: Dict): string {
  return template.replace(/\{(\w+)\}/g, (_, k) =>
    params[k] === undefined || params[k] === null ? "" : String(params[k])
  );
}

export function pick<T extends Dict, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  keys.forEach(k => (out[k] = obj[k]));
  return out;
}
