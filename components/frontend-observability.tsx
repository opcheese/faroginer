'use client';

import { faro, getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

export default function FrontendObservability() {
  // skip if already initialized
  if (faro.api) {
    return null;
  }

  try {
   initializeFaro({
    url: 'https://faro-collector-prod-sa-east-1.grafana.net/collect/fbb5935a8c75616cefc3845cb28446d2',
    app: {
      name: 'gingerfaro',
      version: '1.0.0',
      environment: 'production'
    },

      instrumentations: [
        // Mandatory, omits default instrumentations otherwise.
        ...getWebInstrumentations(),

        // Tracing package to get end-to-end visibility for HTTP requests.
        new TracingInstrumentation(),
      ],
    });
  } catch (e) {
    console.error('Failed to initialize Faro', e);
    return null;
  }
  return null;
}