## Shopify Theme Development Process

* 1 repo on GitHub for both staging and production stores
* the Shopify theme gem syncs local theme files to remote store(s), meaning the repo is NOT involved in the deployment process
* in other words, the Shopify theme gem starts syncing once the "theme watch" command has been issued, whether changes have been committed to the repo or not
* config.yml contains API keys, passwords, store URLs and theme IDs for both staging and production stores, but only ONE set of these credentials can be "active" (not commented out) at any given time
* the Shopify theme gem will sync to either the staging or production store depending on what credentials are active in config.yml
* config.yml is an untracked file (has been added to .gitignore)

### General Development / Deployment Workflow

* ensure config.yml syncs to staging store
* create feat/branch-name branch off master and switch to it

  ```git checkout -b feat/branch-name```
* start "theme watch"
* get feature client approval from staging store
* stop "theme watch"
* push changes

  ```git push -u origin feat/branch-name```
* checkout to master

  ```git checkout master```
* switch config.yml to sync to production store
* start "theme watch"
* merge feature branch into master

  ```git merge --no-ff feat/branch-name```
* wait until "theme watch" syncs all changes to production
* stop "theme watch"
* be sure to switch config.yml back to staging store after every deployment to production
* push changes

  ```git push origin master```
