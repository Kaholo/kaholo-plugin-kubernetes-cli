# kaholo-plugin-kubernetes-cli
kubectl plugin for Kaholo.

## Method Expose Deployment
Executes kubectl expose deployment command.

### Parameters:
1. deployment
2. type
3. name
4. sudo: (boolean) - if selected the command will be executed as super user.

## Method: Get Pods
Run kubectl get pods

### Parameter
1. sudo: (boolean) - if selected the command will be executed as super user.


## Method Get Services

### Parameters
1. sudo: (boolean) - if selected the command will be executed as super user.
2. Namespace

## Method Apply

### Parameters
1. File path
2. Force: (boolean)
3. Overwrite: (boolean)
4. dry-run: (boolean)
5. sudo: (boolean) - if selected the command will be executed as super user.
