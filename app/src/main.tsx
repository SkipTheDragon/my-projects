import './index.css'
import {createRoot} from "react-dom/client";
import {StrictMode, useEffect} from "react";
import * as Sentry from "@sentry/react";
import {createRoutesFromChildren, matchRoutes, RouterProvider, useLocation, useNavigationType} from "react-router-dom";
import router from "./router";
import 'react-loading-skeleton/dist/skeleton.css'

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
        // See docs for support of different versions of variation of react router
        // https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect: useEffect,
            useLocation,
            useNavigationType,
            createRoutesFromChildren,
            matchRoutes
        }),
        Sentry.replayIntegration()
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    tracesSampleRate: 1.0,

    // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", "app.lndo.site", /^(?:https?:\/\/)?(?:[\w-]+\.)*wyverr\.com(?:\/.*)?$/],

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
