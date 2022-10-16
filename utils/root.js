const GlobalThis =
  typeof globalThis === "object" &&
  globalThis !== null &&
  globalThis.Object == Object &&
  globalThis;

const Global =
  typeof global === "object" &&
  global !== null &&
  global.Object === Object &&
  global;

const Self =
  typeof self === "object" && self !== null && self.Object === Object && self;

const root = GlobalThis || Global || Self;

export default root;
