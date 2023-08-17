/** @type {import('next').NextConfig} */

const redirectBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
  : "";

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Content-Security-Policy',
    value: "frame-ancestors 'none';"
  }
]


const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: "public/images",
      exportFolderPath: "out",
      quality: 75,
    },
  },
  env: {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
    distServer: "https://dist.ballerina.io",
    gitHubPath:
      "https://github.com/ballerina-platform/ballerina-dev-website/blob/master/",
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: `/learn/build-a-data-service-in-ballerina`,
        destination: `/learn/resources/featured-scenarios/build-a-data-service-in-ballerina`,
      },
      {
        source: `/${redirectBase}learn/deploy-ballerina-on-kubernetes`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/deploy-ballerina-on-kubernetes`,
      },
      {
        source: `/${redirectBase}learn/manage-data-persistence-with-bal-persist`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/manage-data-persistence-with-bal-persist`,
      },
      {
        source: `/${redirectBase}learn/get-started`,
        destination: `/${redirectBase}learn/get-started/get-started`,
      },
      {
        source: `/${redirectBase}learn/language-basics`,
        destination: `/${redirectBase}learn/learn-the-language/language-basics`,
      },
      {
        source: `/${redirectBase}learn/language-walkthrough`,
        destination: `/${redirectBase}learn/learn-the-language/language-walkthrough`,
      },
      {
        source: `/${redirectBase}learn/work-with-data-using-queries-in-ballerina`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/work-with-data-using-queries-in-ballerina`,
      },
      {
        source: `/${redirectBase}learn/write-a-graphql-api-with-ballerina`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/write-a-graphql-api-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/write-a-grpc-service-with-ballerina`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/write-a-grpc-service-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/write-a-restful-api-with-ballerina`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/write-a-restful-api-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/installation-options`,
        destination: `/${redirectBase}learn/get-started/installation-options`,
      },
      {
        source: "/learn",
        destination: "/learn/get-started/install-ballerina/set-up-ballerina",
      },
      {
        source: `/${redirectBase}learn/openapi-tool`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-tooling/openapi-tool`,
      },
      {
        source: `/${redirectBase}learn/graphql-tool`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-tooling/graphql-tool`,
      },
      {
        source: `/${redirectBase}learn/asyncapi-tool`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-tooling/asyncapi-tool`,
      },
      {
        source: `/${redirectBase}learn/strand-dump-tool`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-tooling/strand-dump-tool`,
      },
      {
        source: `/${redirectBase}learn/ballerina-shell`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-tooling/ballerina-shell`,
      },
      {
        source: `/${redirectBase}learn/bal-persist-overview`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/bal-persist-overview`,
      },
      {
        source: `/${redirectBase}learn/persist-cli-tool`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/persist-cli-tool`,
      },
      {
        source: `/${redirectBase}learn/persist-model`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/persist-model`,
      },
      {
        source: `/${redirectBase}learn/persist-client-api`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/persist-client-api`,
      },
      {
        source: `/${redirectBase}learn/supported-data-stores`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/supported-data-stores`,
      },
      {
        source: `/${redirectBase}learn/call-java-code-from-ballerina`,
        destination: `/${redirectBase}learn/development-tutorials/java-interoperability/call-java-code-from-ballerina`,
      },
      {
        source: `/${redirectBase}learn/debug-ballerina-programs`,
        destination: `/${redirectBase}learn/development-tutorials/test-document-the-code/debug-ballerina-programs`,
      },
      {
        source: `/${redirectBase}learn/generate-code-documentation`,
        destination: `/${redirectBase}learn/development-tutorials/test-document-the-code/generate-code-documentation`,
      },
      {
        source: `/${redirectBase}learn/manage-dependencies`,
        destination: `/${redirectBase}learn/development-tutorials/source-code-dependencies/manage-dependencies`,
      },
      {
        source: `/${redirectBase}learn/observe-ballerina-programs`,
        destination: `/${redirectBase}learn/development-tutorials/configure-observe/observe-ballerina-programs`,
      },
      {
        source: `/${redirectBase}learn/organize-ballerina-code`,
        destination: `/${redirectBase}learn/development-tutorials/source-code-dependencies/organize-ballerina-code`,
      },
      {
        source: `/${redirectBase}learn/publish-packages-to-ballerina-central`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-central/publish-packages-to-ballerina-central`,
      },
      {
        source: `/${redirectBase}learn/configure-ballerina-programs/:slug`,
        destination: `/${redirectBase}learn/development-tutorials/configure-observe/configure-ballerina-programs/:slug`,
      },
      {
        source: `/${redirectBase}learn/distinctive-language-features/:slug`,
        destination: `/${redirectBase}learn/learn-the-language/distinctive-language-features/:slug`,
      },
      {
        source: `/${redirectBase}learn/run-in-the-cloud/:slug`,
        destination: `/${redirectBase}learn/development-tutorials/run-in-the-cloud/:slug`,
      },
      {
        source: `/${redirectBase}learn/test-ballerina-code/:slug`,
        destination: `/${redirectBase}learn/development-tutorials/test-document-the-code/test-ballerina-code/:slug`,
      },

      {
        source: `/${redirectBase}learn/package-references`,
        destination: `/${redirectBase}learn/development-tutorials/source-code-dependencies/package-references`,
      },
      {
        source: `/${redirectBase}learn/build-and-run/:slug`,
        destination: `/${redirectBase}learn/development-tutorials/build-and-run/bal-command/:slug`,
      },
      {
        source: `/${redirectBase}learn/java-interoperability-guide/:slug`,
        destination: `/${redirectBase}learn/development-tutorials/java-interoperability/java-interoperability-guide/:slug`,
      },
      {
        source: `/${redirectBase}learn/style-guide/:slug`,
        destination: `/${redirectBase}learn/development-tutorials/source-code-dependencies/style-guide/:slug`,
      },
      {
        source: `/${redirectBase}learn/style-guide/coding-conventions/:slug`,
        destination: `/${redirectBase}learn/references/style-guide/coding-conventions/:slug`,
      },
      {
        source: `/${redirectBase}learn/graalvm-executable-overview`,
        destination: `/${redirectBase}learn/development-tutorials/build-a-graalvm-executable/graalvm-executable-overview`,
      },
      {
        source: `/${redirectBase}learn/build-the-executable-locally`,
        destination: `/${redirectBase}learn/development-tutorials/build-a-graalvm-executable/build-the-executable-locally`,
      },
      {
        source: `/${redirectBase}learn/build-the-executable-in-a-container`,
        destination: `/${redirectBase}learn/development-tutorials/build-a-graalvm-executable/build-the-executable-in-a-container`,
      },
      {
        source: `/${redirectBase}downloads/swan-lake-release-notes`,
        destination: `/${redirectBase}downloads/swan-lake-release-notes/2201.0.2`,
      },
      {
        source: `/${redirectBase}1.2/learn/`,
        destination: `/${redirectBase}1.2/learn/index.html`,
      },
      {
        source: `/${redirectBase}1.2/learn/api-docs/ballerina/`,
        destination: `/${redirectBase}1.2/learn/api-docs/ballerina/index.html`,
      },
      {
        source: `/${redirectBase}1.1/learn/`,
        destination: `/${redirectBase}1.1/learn/index.html`,
      },
      {
        source: `/${redirectBase}1.1/learn/api-docs/ballerina/`,
        destination: `/${redirectBase}1.1/learn/api-docs/ballerina/index.html`,
      },
      {
        source: `/${redirectBase}1.0/learn/`,
        destination: `/${redirectBase}1.0/learn/index.html`,
      },
      {
        source: `/${redirectBase}1.0/learn/api-docs/ballerina/`,
        destination: `/${redirectBase}1.0/learn/api-docs/ballerina/index.html`,
      },
      {
        source: `/${redirectBase}0.990/learn/api-docs/ballerina/`,
        destination: `/${redirectBase}0.990/learn/api-docs/ballerina/index.html`,
      },
      {
        source: `/cookie-policy`,
        destination: `/${redirectBase}policies/cookie-policy`,
      },
      {
        source: `/license-of-site`,
        destination: `/${redirectBase}policies/license-of-site`,
      },
      {
        source: `/terms-of-service`,
        destination: `/${redirectBase}policies/terms-of-service`,
      },
      {
        source: `/privacy-policy`,
        destination: `/${redirectBase}policies/privacy-policy`,
      },
      {
        source: `/security-policy`,
        destination: `/${redirectBase}policies/security-policy`,
      },
      {
        source: `/trademark-usage-policy`,
        destination: `/${redirectBase}policies/trademark-usage-policy`,
      },
      {
        source: `/code-of-conduct`,
        destination: `/${redirectBase}policies/code-of-conduct`,
      },
      {
        source: `/CODEOWNERS`,
        destination: `/${redirectBase}policies/CODEOWNERS`,
      },
      {
        source: `/spec/lang/2022R2/`,
        destination: `/spec/lang/2022R2/index.html`,
      },
      {
        source: `/spec/lang/2022R1/`,
        destination: `/spec/lang/2022R1/index.html`,
      },
      {
        source: `/spec/lang/2021R1/`,
        destination: `/spec/lang/2021R1/index.html`,
      },
      {
        source: `/spec/lang/2020R1/`,
        destination: `/spec/lang/2020R1/index.html`,
      },
      {
        source: `/spec/lang/2019R3/`,
        destination: `/spec/lang/2019R3/index.html`,
      },
      {
        source: `/spec/lang/2019R2/`,
        destination: `/spec/lang/2019R2/index.html`,
      },
      {
        source: `/spec/lang/2019R1/`,
        destination: `/spec/lang/2019R1/index.html`,
      },
      {
        source: `/learn/supported-data-formats`,
        destination: `/learn/integration/supported-data-formats`,
      },
      {
        source: `/learn/supported-network-protocols`,
        destination: `/learn/integration/supported-network-protocols`,
      }
    ];
  },
  trailingSlash: true,
  resolve: [{ path: false, fs: false }],
  experimental: {
    scrollRestoration: true,
  }
};

module.exports = nextConfig;
