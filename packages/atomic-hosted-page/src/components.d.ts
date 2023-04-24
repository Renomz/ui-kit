/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PlatformEnvironment } from "@coveo/headless";
export namespace Components {
    interface AtomicHostedPage {
        /**
          * Returns the unique, organization-specific endpoint(s)
          * @param organizationId
          * @param env
         */
        "getOrganizationEndpoints": (organizationId: string, env?: PlatformEnvironment) => Promise<{ platform: string; analytics: string; search: string; admin: string; }>;
        "initialize": (options: AtomicHostedPageInitializationOptions) => Promise<void>;
    }
    interface AtomicSimpleBuilder {
        /**
          * Returns the unique, organization-specific endpoint(s)
          * @param organizationId
          * @param env
         */
        "getOrganizationEndpoints": (organizationId: string, env?: PlatformEnvironment) => Promise<{ platform: string; analytics: string; search: string; admin: string; }>;
        "initialize": (options: AtomicSimpleBuilderInitializationOptions) => Promise<void>;
    }
}
declare global {
    interface HTMLAtomicHostedPageElement extends Components.AtomicHostedPage, HTMLStencilElement {
    }
    var HTMLAtomicHostedPageElement: {
        prototype: HTMLAtomicHostedPageElement;
        new (): HTMLAtomicHostedPageElement;
    };
    interface HTMLAtomicSimpleBuilderElement extends Components.AtomicSimpleBuilder, HTMLStencilElement {
    }
    var HTMLAtomicSimpleBuilderElement: {
        prototype: HTMLAtomicSimpleBuilderElement;
        new (): HTMLAtomicSimpleBuilderElement;
    };
    interface HTMLElementTagNameMap {
        "atomic-hosted-page": HTMLAtomicHostedPageElement;
        "atomic-simple-builder": HTMLAtomicSimpleBuilderElement;
    }
}
declare namespace LocalJSX {
    interface AtomicHostedPage {
    }
    interface AtomicSimpleBuilder {
    }
    interface IntrinsicElements {
        "atomic-hosted-page": AtomicHostedPage;
        "atomic-simple-builder": AtomicSimpleBuilder;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "atomic-hosted-page": LocalJSX.AtomicHostedPage & JSXBase.HTMLAttributes<HTMLAtomicHostedPageElement>;
            "atomic-simple-builder": LocalJSX.AtomicSimpleBuilder & JSXBase.HTMLAttributes<HTMLAtomicSimpleBuilderElement>;
        }
    }
}
