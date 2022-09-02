## Utilities - Ubuntu

Ubuntu to do network tests. Contains Kubernetes manifests, implementation using Pulumi, and Jenkinsfile pipeline.

## How to get started

1. Install kubectl and pulumi.
2. Clone this repo.
3. Run `$ npm install`
4. Run `$ pulumi up` to create the kubernetes resources.
5. Run `$ kubectl get pods` 
6. Get a shell to the running container with `$ kubectl exec --stdin --tty <pod-name> -- /bin/bash`
7. Explore or perform the tests you require.
8. Run `$ pulumi destroy` to delete the kubernetes resources.

Alternatively, you can use kubectl directly:

```
$ kubectl apply -f path/to/kubernetes/manifests/ubuntu.yaml
$ kubectl get pods
$ kubectl exec --stdin --tty <pod-name> -- /bin/bash
Explore or perform the tests you require.
$ kubectl delete -f path/to/kubernetes/manifests/ubuntu.yaml
```

Alternatively, you can use the Jenkinsfile to run the pipeline:

| Jenkinsfile                        | Description                                |
|------------------------------------|--------------------------------------------|
| jenkins/Jenkinsfile-pulumi-up      | This will create the kubernetes resources. |
| jenkins/Jenkinsfile-pulumi-destroy | This will delete the kubernetes resources. |

Environment variables required by Jenkins:

| Name                | Description                                |
|---------------------|--------------------------------------------|
| PULUMI_ACCESS_TOKEN | It is the access token to the Pulumi account. It is recommended to create a key with the same name in the credentials manager. |


Other requirements:
1. A jenkins agent with pulum and kubectl installed and configured to connect to the kubernetes cluster.
2. The agent must have the "pulumi" label
3. Global tool configuration: add a NodeJS 16.17.0 installation with the name "node 16.17.0"
4. Configure the SCM Pipeline script with this repository, select the branch and change the Jenkins file path to the corresponding option to deploy.


## Resources and Dependencies

| Name       | Version | Required |
|------------|---------|----------|
| kubernetes | 1.23    | no       |
| pulumi     | 3.38.0  | no       |




