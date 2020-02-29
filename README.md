# README.md
This is an example website that is made exploitable through a dodgy NPM package. 

```
express -c stylus -v hjs express_rce
```


```
npm install 
```

To run the webserver
```
DEBUG=vulnerability:* npm start
```

## The container.
```
docker build -t express_rce .
docker run --rm -p 8080:3000 express_rce 
```

## Cloudbuild
Ensure the repo is connected in the CloudBuild Github app

Create a cloudbuild trigger 
```
gcloud beta builds triggers create github --repo-name=express_rce  --repo-owner=chrisguest75 --branch-pattern=".*" --build-config=cloudbuild.yaml --project open-source-01
```

```
gcloud builds submit --project open-source-01 --substitutions=COMMIT_SHA=test,REPO_NAME=express_rce,_IMAGE_NAME=express_rce,BRANCH_NAME=master
```


```
gcloud beta run domain-mappings --project open-source-01 --region europe-west1 --platform managed list 
```