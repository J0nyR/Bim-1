function readPackage(pkg) {
      // This hook is used to modify the package.json of a dependency before it is used.
      // In this case, we don't need to modify anything. The presence of this hook
      // is enough to signal to pnpm on Vercel that it should process scripts.
      return pkg;
    }

    module.exports = {
      hooks: {
        readPackage,
      },
    };