#!/usr/bin/env node

const { generatorHandler } = require("@prisma/generator-helper");

const prettyName = "Noun & Verb - NOOP generator";
generatorHandler({
  onManifest() {
    return {
      prettyName,
      defaultOutput: `${process.cwd()}/src`,
    };
  },
  async onGenerate(_options) {
    console.log(prettyName);
  },
});
