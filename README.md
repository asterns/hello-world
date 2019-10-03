# Quickstart for Node.js in the App Engine standard environment

This is the sample application for the
[Quickstart for Node.js in the App Engine standard environment][tutorial]
tutorial found in the [Google App Engine Node.js standard environment][appengine]
documentation.

* [Setup](#setup)
* [Running locally](#running-locally)
* [Deploying to App Engine](#deploying-to-app-engine)
* [Running the tests](#running-the-tests)

## Setup

Before you can run or deploy the sample, you need to do the following:

1.  Refer to the [appengine/README.md][readme] file for instructions on
    running and deploying.
1.  Install dependencies:

        npm install

## Running locally

    npm start

## Deploying to App Engine

    gcloud app deploy

## Running the tests

See [Contributing][contributing].

[appengine]: https://cloud.google.com/appengine/docs/standard/nodejs
[tutorial]: https://cloud.google.com/appengine/docs/standard/nodejs/quickstart
[readme]: ../../README.md
[contributing]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/CONTRIBUTING.md
[instructions]: https://cloud.google.com/cloud-build/docs/run-builds-on-github
[cloud-build-settings]:https://console.cloud.google.com/cloud-build/settings
[secret-in-cloudbuild]:https://medium.com/google-cloud/managing-secrets-with-kms-and-google-cloudbuild-d3cc6b8a8f83
[secrets-iam]:https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-secrets-credentials

## Instructions for Deployment:
- Follow relevant [instructions][instructions] on github to connect cloudbuild to github for the repo
- Set "App Engine" permissions to "Enabeld" on [google cloud platform settings][cloud-build-settings]

- how to use cloudbuild for docker - https://github.com/Philmod/gcb-docker-compose/blob/master/cloudbuild.yaml
  - https://github.com/GoogleCloudPlatform/cloud-build-local/issues/87
- grant Cloud Build Service account access to the stage project
  - https://console.cloud.google.com/iam-admin/iam?project=[stage-project-id]
  - click "+Add" a user - select service account from https://console.cloud.google.com/cloud-build/settings?[production-project-id]
  - add "App Engine Admin" and "Cloud Build Service Account" roles
  - set up keys - https://console.cloud.google.com/security/kms
  - Follow instructions in [secret instructions][secret-in-cloudbuild] to reference secrets in cloudbuild.yml
  - grant the service account "Cloud KMS Crypto Key Decrypter" permission per [instructions][secrets-iam]