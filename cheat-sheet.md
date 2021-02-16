# K8s Cheat Sheet

## Check status

```bash
kubectl version                     # check client and server version
kubectl get componentstatuses       # get status of k8s cluster
```

## Creating objects

```bash
kubectl apply -f ./my-manifest.yml              # create resource(s)
kubectl apply -f ./my1.yml -f ./my2.yml         # create from multiple files
kubectl apply -f ./dir                          # create resource(s) in all manifest files in dir
kubectl apply -f https://git.io/vPieo           # create resource(s) from url
kubectl create deployment nginx --image=nginx   # start a single instance of nginx

kubectl explain <object>                        # get the documentation for object manifests (pods, deployments, services, ...)
```
