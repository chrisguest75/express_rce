# README.md
This is an example website that is made exploitable through a dodgy NPM package. 

```sh
express -c stylus -v hjs express_rce
```


```sh
npm install 
```

To run the webserver
```sh
DEBUG=vulnerability:* npm start
```

## The container.
```sh
docker build -f Dockerfile -t express_rce .
docker build -f root.Dockerfile -t express_rce_root .
docker run -d --rm -p 8080:3000 express_rce 
docker run -d --rm -p 8080:3000 express_rce_root 
open http://localhost:8080
```

## Cloudbuild
Ensure the repo is connected in the CloudBuild Github app

Create a cloudbuild trigger 
```sh
gcloud beta builds triggers create github --repo-name=express_rce  --repo-owner=chrisguest75 --branch-pattern=".*" --build-config=cloudbuild.yaml --project open-source-01
```

```sh
gcloud builds submit --project open-source-01 --substitutions=COMMIT_SHA=test,REPO_NAME=express_rce,_IMAGE_NAME=express_rce,BRANCH_NAME=master
```


```sh
gcloud beta run domain-mappings --project open-source-01 --region europe-west1 --platform managed list 
```


## Distroless
This image is only 96.6MB
```sh
docker build -f distroless.Dockerfile -t express_rce_distroless .
docker run -d --rm -p 8080:3000 express_rce_distroless
open http://localhost:8080
```

