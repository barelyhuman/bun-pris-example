import preactIslandPlugin from "@barelyhuman/preact-island-plugins/esbuild";

await Bun.build({
  "target":"bun",
  "entrypoints":["./index.tsx"],
  outdir: "./out",
  format:"esm",
  plugins: [
    preactIslandPlugin({
      atomic: true,
      "baseURL":"/client",
      client: {
        output: "./out/client",
      },
    }),
  ],
});
