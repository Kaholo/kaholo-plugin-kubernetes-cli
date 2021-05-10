# kaholo-plugin-kubernetes-cli
kubectl plugin for Kaholo.

## Method Expose Deployment
Executes kubectl expose deployment command. Exposes the depolyment for external access.

### Parameters:
1. Deployment (String) **Reqired** - The name of the deployment to expose.
2. Type (String) **Required** - The type of the service that will expose the deployment.
3. Name (String) **Required** - The name of the new deployment expose service that will be created.
4. Sudo (Boolean) **Optional** - If selected the command will be executed as super user. default value is false.

## Method: Get Pods
Run kubectl get pods command. Returns all the pods in the cluster.

### Parameter
1. Sudo (Boolean) **Optional** - If selected the command will be executed as super user. default value is false.

## Method: Get Services
Run kubectl get services. Returns all the the services in the cluster.

### Parameters
1. Sudo (Boolean) **Optional** - If selected the command will be executed as super user. default value is false.
2. Namespace (String) **Optional** - If provided, will print only the services in the specified namespace.

## Method: Apply
Run Kubectl apply, which creates or updates resources in Kubernetes.

### Parameters
1. File Path (String) **Required** - The path to the yml file to apply.
2. Force (Boolean) **Optional** - If true, immediately remove resources from API and bypass graceful deletion. Default value is false.
3. No Overwrite (Boolean) **Optional** - If specified, **Don't** automatically resolve conflicts between the modified and live configuration by using values from the modified configuration.
4. Dry-run (Options) **Optional** - 	Possible values are "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource. Default Value is 'none'.
5. Sudo (Boolean) **Optional** - if selected the command will be executed as super user. default value is false.
