let redirections = {
    // "/SOURCE (BROKEN) URL without trailing slash":"/DESTINATION (CORRECT) URL with slash"

    // Learn pages not available

    "/1.0/learn/keeping-ballerina-up-to-date":"/page-not-available.html",
    "/1.1/learn/calling-java-code-from-ballerina":"/page-not-available.html",
    "/1.0/learn/calling-java-code-from-ballerina":"/page-not-available.html",
    "/1.1/learn/deployment/aws-lambda/":"/page-not-available.html",
    "/1.0/learn/deployment/aws-lambda/":"/page-not-available.html",
    "/1.1/learn/deployment/azure-functions/":"/page-not-available.html",
    "/1.0/learn/deployment/azure-functions/":"/page-not-available.html",
    "/learn/by-example/jdbc-streaming-big-dataset.html":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/testing-quick-start":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/writing-tests":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/mocking":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/executing-tests":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/testing-quick-start":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/writing-tests":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/mocking":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/executing-tests":"/page-not-available.html",
    "/1.2/learn/structuring-ballerina-code/working-with-ballerina-modules/":"/page-not-available",
    "/1.1/learn/structuring-ballerina-code/working-with-ballerina-modules/":"/page-not-available",
    "/1.0/learn/structuring-ballerina-code/working-with-ballerina-modules/":"/page-not-available",
    "/learn/extending-with-compiler-extensions/":"/page-not-available.html",
    "/1.0/learn/how-to-keep-ballerina-up-to-date/":"/page-not-available.html",
    "/1.2/learn/deployment/code-to-cloud/":"/page-not-available.html",
    "/1.1/learn/deployment/code-to-cloud/":"/page-not-available.html",
    "/1.0/learn/deployment/code-to-cloud/":"/page-not-available.html",
    "/learn/user-guide/network-communication/http/http-clients/":"/learn/by-example/",
    "/learn/user-guide/network-communication/http/http-services/":"/learn/by-example/",
    "/learn/user-guide/network-communication/grpc/defining-the-service-interface/":"/learn/by-example/",
    "/learn/user-guide/network-communication/grpc/implementing-grpc-services-and-clients/implementing-grpc-services/":"/learn/by-example/",
    "/learn/user-guide/network-communication/grpc/implementing-grpc-services-and-clients/implementing-grpc-clients/":"/learn/by-example/",
    "/learn/user-guide/network-communication/grpc/performing-grpc-streaming/":"/learn/by-example/",
    "/learn/user-guide/network-communication/websocket/":"/learn/by-example/",
    "/learn/user-guide/network-communication/graphql/":"/learn/by-example/",
    "/learn/user-guide/data-and-events-processing/using-language-integrated-queries/":"/learn/by-example/",
    "/learn/user-guide/security/http-listener-authentication-and-authorization/":"/learn/by-example/",
    "/learn/user-guide/security/http-client-authentication/":"/learn/by-example/",
    "/learn/extending-with-compiler-extensions/":"/learn/by-example/",
    "/learn/tooling-guide/ballerina-shell/":"/learn/by-example/",
    "/learn/cli-documentation/update-tool/":"/learn/by-example/",
    "/learn/cli-documentation/openapi/":"/learn/by-example/",
    "/learn/running-ballerina-programs-in-the-cloud/code-to-cloud-samples/":"/page-not-available.html",
    "/1.2/learn/ballerina-shell/":"/page-not-available.html",
    "/1.2/learn/language-walkthrough/":"/page-not-available.html",
    "/1.2/learn/visual-studio-code-extension/vs-code-commands/":"/page-not-available.html",
    "/1.2/learn/visual-studio-code-extension/configurations/":"/page-not-available.html",
    "/1.2/learn/testing-ballerina-code/testing-services-and-clients/":"/page-not-available.html",
    "/1.2/learn/making-ballerina-programs-configurable/defining-configurable-variables/":"/page-not-available.html",
    "/1.2/learn/making-ballerina-programs-configurable/providing-values-to-configurable-variables/":"/page-not-available.html",
    "/1.2/learn/making-ballerina-programs-configurable/trying-out-configurability":"/page-not-available.html",
    "/1.2/learn/observing-ballerina-programs/observing-your-application-with-choreo/":"/page-not-available.html",
    "/1.2/learn/running-ballerina-programs-in-the-cloud/code-to-cloud-deployment/":"/page-not-available.html",
    "/1.2/learn/running-ballerina-programs-in-the-cloud/code-to-cloud-samples/":"/page-not-available.html",
    "/1.2/learn/managing-dependencies/":"/page-not-available.html",
    "/1.2/learn/publishing-packages-to-ballerina-central/":"/page-not-available.html",
    "/1.2/learn/language-introduction/":"/page-not-available.html",
    "/learn/visual-studio-code-extension/vs-code-quick-start/":"https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina",
    "/learn/visual-studio-code-extension/diagram-editor/":"https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina",
    "/learn/visual-studio-code-extension/vs-code-commands/":"https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina",
    "/learn/visual-studio-code-extension/language-support/":"https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina",
    "/learn/visual-studio-code-extension/configurations/":"https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina",
    "/learn/observing-ballerina-programs/observing-your-application-with-choreo/":"/page-not-available.html",
    "/learn/configure-ballerina-programs/quick-start-on-configurable-variables/#configure-a-sample-ballerina-service":"/learn/configure-ballerina-programs/configure-a-sample-ballerina-service/",
    "/learn/configure-ballerina-programs/provide-values-to-configurable-variables/#provide-configuration-values-through-command-line-arguments":"/learn/configure-ballerina-programs/provide-values-to-configurable-variables/#provide-via-command-line-arguments/",
    "/learn/configure-ballerina-programs/provide-values-to-configurable-variables/#provide-configuration-values-through-toml-syntax":"/learn/configure-ballerina-programs/provide-values-to-configurable-variables/#provide-via-toml-syntax/",
    "/learn/configure-ballerina-programs/provide-values-to-configurable-variables/#providing-module-information-of-the-configurable-variable":"/learn/configure-ballerina-programs/configure-values/#configure-in-multiple-modules/",
    "/learn/configure-ballerina-programs/configure-values-in-kubernetes-environment/":"/learn/configure-ballerina-programs/configure-values/#configure-in-a-kubernetes-environment/",
    "/learn/configure-ballerina-programs/configure-values-in-kubernetes-environment/#secure-sensitive-data-using-configurable-variables":"/learn/configure-ballerina-programs/configure-values/#configure-sensitive-values",
    "/learn/ballerina-openapi-support/#generate-a-ballerina-service-from-an-openapi-definition-design-first-approach":"/learn/ballerina-openapi-support/#generate-a-ballerina-service-from-an-openapi-definition",
    "/learn/ballerina-openapi-support/#export-an-openapi-contract-from-a-ballerina-service-code-first-approach":"/learn/ballerina-openapi-support/#export-an-openapi-contract-from-a-ballerina-service",

    // BBEs not available.
    "/1.1/learn/by-example/jdbc-streaming-big-dataset.html":"/page-not-available.html",
    "/1.0/learn/by-example/jdbc-streaming-big-dataset.html":"/page-not-available.html",
    "/1.1/learn/by-example/knative-deployment.html": "/page-not-available.html",
    "/1.0/learn/by-example/knative-deployment.html": "/page-not-available.html",
    "/1.1/learn/by-example/azure-functions-deployment.html": "/page-not-available.html",
    "/1.0/learn/by-example/azure-functions-deployment": "/page-not-available.html",
    "/1.1/learn/api-docs/ballerina/azure.functions/index.html": "/page-not-available.html",
    "/1.0/learn/api-docs/ballerina/azure.functions/index.html": "/page-not-available.html",
    "/1.1/learn/api-docs/ballerina/knative/index.html": "/page-not-available.html",
    "/1.0/learn/api-docs/ballerina/knative/index.html": "/page-not-available.html",
    "/learn/by-example/documentation.html":"/1.2/learn/by-example/basic-documentation.html",
    "/1.2/learn/by-example/documentation.html":"/1.2/learn/by-example/basic-documentation.html",
    "/1.2/learn/ballerina-streaming-reference/":"/1.2/learn/by-example/streams",
    "/learn/ballerina-streaming-reference/":"/learn/by-example/streams",
    "/1.1/learn/by-example/aws-lambda-deployment.html": "/1.1/learn/by-example/awslambda-deployment.html",
    "/1.0/learn/by-example/aws-lambda-deployment.html": "/1.0/learn/by-example/awslambda-deployment.html",
    "/1.2/learn/by-example/object-final-fields.html":"/page-not-available.html",
    "/1.1/learn/by-example/object-final-fields.html":"/page-not-available.html",
    "/1.0/learn/by-example/object-final-fields.html":"/page-not-available.html",
    "/1.2/learn/by-example/isolated-functions.html":"/page-not-available.html",
    "/1.1/learn/by-example/isolated-functions.html":"/page-not-available.html",
    "/1.0/learn/by-example/isolated-functions.html":"/page-not-available.html",
    "/1.2/learn/by-example/error-handling-in-single-place.html":"/page-not-available.html",
    "/1.1/learn/by-example/error-handling-in-single-place.html":"/page-not-available.html",
    "/1.0/learn/by-example/error-handling-in-single-place.html":"/page-not-available.html",
    "/1.2/learn/by-example/fail.html":"/page-not-available.html",
    "/1.1/learn/by-example/fail.html":"/page-not-available.html",
    "/1.0/learn/by-example/fail.html":"/page-not-available.html",
    "/learn/by-example/xa-transactions.html":"/page-not-available.html",
    "/learn/by-example/local-transactions-with-participants.html":"/page-not-available.html",
    "/learn/by-example/transactions-distributed.html":"/page-not-available.html",
    "/1.2/learn/by-example/readonly-objects.html":"/page-not-available.html",
    "/1.1/learn/by-example/readonly-objects.html":"/page-not-available.html",
    "/1.0/learn/by-example/readonly-objects.html":"/page-not-available.html",
    "/1.2/learn/by-example/websocket-cookie.html":"/page-not-available.html",
    "/1.1/learn/by-example/websocket-cookie.html":"/page-not-available.html",
    "/1.0/learn/by-example/websocket-cookie.html":"/page-not-available.html",
    "/learn/by-example/tracing.html":"/page-not-available.html",
    "/learn/by-example/counter-metrics.html":"/page-not-available.html",
    "/learn/by-example/gauge-metrics.html":"/page-not-available.html",
    "learn/by-example/http-client-data-binding.html":"/page-not-available.html",
    "/1.1/learn/by-example/http-client-data-binding.html":"/page-not-available.html",
    "/1.0/learn/by-example/http-client-data-binding.html":"/page-not-available.html",
    "/learn/by-example/http-filters.html":"/page-not-available",

    // BBE Updates

    "/learn/by-example/objects.html":"/learn/by-example/class-definition.html",
    "/learn/by-example/abstract-objects.html":"/learn/by-example/object-type.html",
    "/learn/by-example/anonymous-objects.html":"/learn/by-example/object-constructor-expression.html",
    "/learn/by-example/readonly-objects-and-fields.html":"/learn/by-example/readonly-objects.html",
    "/1.2/learn/by-example/introduction/":"/1.2/learn/by-example/",

    // API Docs not available

    "/learn/api-docs/ballerina/*/objects/*":"/learn/api-docs/ballerina/*/classes/*",
    "/1.2/learn/api-docs/ballerina/ftp/index.html":"/page-not-available.html",
    "/1.1/learn/api-docs/ballerina/ftp/index.html":"/page-not-available.html",
    "/1.0/learn/api-docs/ballerina/ftp/index.html":"/page-not-available.html",
    "/learn/getting-started/installing-ballerina/building-from-source.md":"/page-not-available.html",

    // Other

    "/downloads/1.2.x-release-notes-old/":"/downloads/1.2.x-release-notes/",
    "/community/slack/":"/community/#ballerina-slack-community",
    "/community/slack":"/community/#ballerina-slack-community"

}