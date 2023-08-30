# Hands-on Lab - Create an Amazon ECS cluster of type Fargate

## Step-01: Gather cluster information (size, application, docker images)

## Step-02: Pre-requisites 
   - **VPC**: Create a custom VPC in the region where you want to create an ECS cluster
     - VPC Name: nova-vpc
     - VPC CIDR Range: 10.30.0.0/16
   - **Subnets**: Create two subnets within the VPC created in previous step
     - ecs-public-1a: 10.30.1.0/24
     - ecs-public-1b: 10.30.2.0/24
   - **Internet Gateway**
   - **Route Table**: Update the main route table with route to IGW
## Step-03: Create an Amazon ECS Cluster
   - ECS Cluster Name: nova-ecs-fargate-cluster
   - CloudWatch Container Insights: Enables

## Step-04: Create an ECS Task Definition

## Step-05: Create an ECS Service

