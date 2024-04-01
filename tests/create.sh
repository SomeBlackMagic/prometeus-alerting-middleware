#kind create cluster --config=kind.yaml
kubectl create serviceaccount adminer
kubectl create clusterrolebinding adminer \
  --clusterrole=cluster-admin \
  --serviceaccount=default:adminer

kubectl create token adminer


# kind create cluster --config tests/kind.yaml