import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";

const appLabels = { app: "ubuntu" };
const appAnnotations = { description: "Ubuntu" };
const app = new k8s.apps.v1.Deployment("ubuntu", {
    metadata: {
        labels: appLabels,
        annotations: appAnnotations,
        namespace: "default",
    },
    spec: {
        selector: { matchLabels: appLabels },
        template: {
            metadata: { labels: appLabels },
            spec: {
                containers: [{
                    name: "ubuntu",
                    image: "ubuntu",
                    args: ["sleep", "infinity"],
                }],
                },
            },
        }
    }
);

export const name = app.metadata.name;

