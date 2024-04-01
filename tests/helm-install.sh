

#helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
#helm repo update
#helm upgrade prom-stack prometheus-community/kube-prometheus-stack --debug --atomic --install -f prom-stack.yaml
helm upgrade prometeus-alerting-middleware ../.helm --debug --atomic --install -f helm-values.yaml