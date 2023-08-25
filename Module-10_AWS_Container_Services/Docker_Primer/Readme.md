# Docker Primer
  In this module we'll learn about fundamental aspects of Docker and Contanerization.

## What is a `Container`?
   - A **container** is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.
   - A **Docker container Image** is a lightweight, standalone, executable package of software.
   - It includes everything needed to run an application: 
     - Code
     - Runtime
     - System tools
     - System libraries and settings

## What is a Container Runtime?
   - A *container runtime*, also known as container engine, is a software component that enables containers to run on a host operating system.
   - Container runtimes are responsible for below things:
     - Loading container images from a repository
     - Monitoring local system resources
     - Isolating system resources for use of a container
     - Managing container lifecycle
   - Common container runtimes commonly work together with container orchestrators (e.g. K8s)
   - Some of the examples of container runtimes are runC, CRI, containerd, Docker, and Windows Containers.

## What is Docker?
   - **Docker** is an open platform for developing, shipping, and running applications.
   - Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.
   - With Docker's methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.
   - Containers runs on top of container runtime (e.g DockerHub).

## Docker Architecture
<img src="https://docs.docker.com/assets/images/architecture.svg"/>
   
## Docker Installation
   - You can install docker on various platforms like: EC2 Instance, Azure VM, GCE, Physical machines etc.
   - You may refer to the [official documentation](https://docs.docker.com/engine/install/) for more installation options on various platforms
   - In this module, we'll install docker on **Amazon Linux 2 (5.10) EC2 Instance**. Steps are as follows:

### Step-01: Provision an EC2 Instance (Amazon Linux 2 - 5.10)

### Step-02: Connect to the EC2 Instance

### Step-03: Install and Configure Docker
    ```
    # Install docker (below command will work only on Amazon Linux 2 AMI)
    amazon-linux-extras install docker -y

    # Start docker service
    systemctl start docker

    # Create a symlink for docker service
    systemctl enable docker

    # Check the current installed version of Docker
    sudo docker version
    ```

## Working with Docker Containers

### Pull the Docker Image 
    ```
    # Syntax
    docker pull [image_name]

    # Example
    docker pull nginx:latest

    ```
### List all the Docker images (present on DockerHost)
    ```
    docker images

    ```
### Create a Container
    ```
    # Syntax
    docker run [OPTIONS] [IMAGE_NAME] [Command]

    # Example-01
    docker run hello-world

    # Example-02
    docker run -d --name webcontainer -p 80:80 nginx:latest

    ```
### List all the containers
    ```
    # List all the running containers
    docker ps

    # List all the containers irrespective of their states
    docker ps -a
    
    ```
### Stop a Container
    ```
    docker stop [CONTAINER_NAME OR CONTAINER_ID]

    ```
### Delete a Container
    ```
    docker rm [CONTAINER_NAME OR CONTAINER_ID]

    docker kill [CONTAINER_NAME OR CONTAINER_ID]

    ```
## What is a `Container registry`? | DockerHub
   - A *container registry* essentially acts as a place for developers to store container images and share them out with other users and application.
   - You can pull the images from container registry and deploy an application on various compute platforms (e.g. ECS, EKS etc.) in the form of containers.
   
## Docker Images
   - **Docker Images** are read-only templates containing instructions for creating a container.
   - A Docker image creates containers to run on the Docker platform.
   - An image is composed of multiple stacked layers, each changing something in the environment. 
   - Images contain the application code or binary, runtimes, dependencies, and other filesystem objects to run an application. 
   - The docker image relies on the host operating system (OS) kernel.
   - For **example**, to build a web server image, start with an image that includes Ubuntu Linux (a base OS). Then, add packages like Apache and PHP on top. And then finally add your application code to it.

### What is `Dockerfile`? | Structure of Dockerfile
    - You can manually build custom images using a **Dockerfile**, a text document containing all the instructions to create a Docker image.
    -  It includes all the required dependencies and components to run an application.
    - You can also pull images from a central repository called a **registry**, or from repositories like *Docker Hub*.
    - [Structure of Dockerfile](https://docs.docker.com/engine/reference/builder/)
    ```
    FROM
    MAINTAINER
    WORKDIR
    LABEL
    ADD
    RUN
    CMD
    EXPOSE
    ENV
    USER
    ENTRYPOINT

    ```

### Create a custom docker image
    ```
    # Syntax
    docker build -t [IMAGE_NAME] . # Here the dot specifies the current dir location
    
    # Example
    docker build -t binwebapp .

    ```
### Push the custom image to Registry (DockerHub)
   - In order to push the image to registry, you must have a valid Docker Hub account.
   - You may create a [new DockerHub account by signing-up here >> ](https://hub.docker.com/)

    ```
    # Connect to docker registry (DockerHub) by entering you dockerHub credentials
    docker login
    
    # Tag your image as per DockerHub format
    sudo docker tag <IMG_PREVIOUS_NAME> [DOCKERHUB_USERNAME]/[IMG_NAME]:[TAG_VALUE]

    # Example
    docker tag binwebapp kbindesh/binwebapp:v1

    # Push the image to Docker Hub
    docker push kbindesh/binwebapp:v1

    ```
## [References](https://docs.docker.com)
   