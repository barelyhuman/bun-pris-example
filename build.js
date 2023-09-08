import preactIslandPlugin from "@barelyhuman/preact-island-plugins/esbuild";

await Bun.build({
  target: "bun",
  entrypoints: ["./index.tsx"],
  outdir: "./out",
  format: "esm",
  plugins: [
    preactIslandPlugin({
      atomic: true,
      client: {
        output: "./out/client",
      },
    }),
  ],
});
