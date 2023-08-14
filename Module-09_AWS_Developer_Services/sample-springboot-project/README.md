# Deploy Springboot application using AWS CodeDeploy service

This sample project demonstrate how you can automatically build and deploy java springboot application using AWS Developer services.

## Create Appspec.yml file for EC2 Deployment (Springboot)

```
version: 0.0

os: linux

files:
  - source: /artifact_name.jar
    destination: /tmp

hooks:
  ApplicationStop:
    - location: scripts/stop-process.sh
      timeout: 180
      runas: root
  ApplicationStart:
    - location: scripts/start-process.sh
      timeout: 180
      runas: root
```
   - **stop-process.sh**
```
#!/bin/bash

ps -ef | grep artifact_name.jar | grep -v grep | awk '{print $2}' | xargs kill
```   
   
   - **start-process.sh**
```
#!/bin/bash

java -jar /tmp/artifact_name.jar > /dev/null 2> /dev/null < /dev/null &
```

## Include both script artifacts in `buildspec.yml`
```
version: 0.2

phases:
  build:
    commands:
      - mvn clean install

artifacts:
  files:
    - target/artifact_name.jar
    - appspec.yml
    - scripts/start-process.sh
    - scripts/stop-process.sh
  discard-paths: yes

```

