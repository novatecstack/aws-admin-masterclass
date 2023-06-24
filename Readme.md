# Amazon Web Services Administration Masterclass Course 
</br><img style="border-width:0" src="https://github.com/novatecstack/aws-admin-masterclass/assets/121426292/6648a268-4de9-4d46-aef8-728cfb5c4878"  width="100" height="60"/>

This repository contains instructions and assets for hands-on exercises to help you pass AWS Certified SysOps Administrator – Associate and AWS Certified Solutions Architect Exam. The exercises are designed to give you real world use-cases experience and a subset of these exercises comprises the hands-on labs.

In this course, you will learn how to deploy, manage and operate workloads on AWS. This course also help you in grooming your ability to perform the following tasks:

- Implement security controls to meet compliance requirements
- Apply networking concepts (for example, DNS, TCP/IP, firewalls)
- Implement architectural requirements (for example, high availability, performance, capacity)
- Perform business continuity and disaster recovery procedures
- Monitor, log, and troubleshoot systems
- Identify, classify, and remediate incidents
- Support and maintain AWS workloads according to the AWS Well-Architected Framework
- Perform operations by using the AWS Management Console and the AWS CLI

## Target Audience
- IT Admins working in other disciplines
- Azure/GCP/OCI/On-Premise Admins/SRE/DevOps Engg
- Anyone, who wants to start career in Cloud

## Certification Exam Reference
1. [AWS Certified SysOps Administrator – Associate Exam](https://aws.amazon.com/certification/certified-sysops-admin-associate/)
2. [AWS Certified Solutions Architect - Associate Exam](https://aws.amazon.com/certification/certified-solutions-architect-associate/)

## Course Syllabus

<details>
 <summary> <b> Module-01: Cloud and Amazon Web Services (AWS) Fundamentals 🗒️ </b>  </summary>
  
 *  What is Cloud Computing?
   
 *  Amazon Web Services Overview
 *  AWS Service Models - IaaS | PaaS | SaaS
 *  AWS Deployment Models - Public Cloud | Private Cloud | Hybrid Cloud |
 *  AWS Global Infrastructure
 *  AWS Cloud real-world applications and case-studies
 *  Introduction to <b>*AWS Cost Management*</b> - AWS Cost and Usage Report | AWS Cost Explorer | Savings Plans
     
</details>
<details>
 <summary> <b> Module-02: AWS Identity and Access Management Services - IAM, KMS, Organization 🌟 </b>  </summary>
  
 *  Introduction to <b>*IAM service*</b>
  
 *  IAM Users - Root | IAM User | Federated Users | Applications | Cross-Account
 *  IAM Groups
 *  IAM Roles and Policies - Built-in | Custom
 *  IAM Policy Structure & Inheritance
 *  IAM Password policy
 *  IAM Multi-factor Authentication (MFA)
 *  IAM User Access keys
 *  <b>*Key Management Service (KMS)*</b> - Overview | Encryption Process Primer | Applications
 *  <b>*AWS Organization*</b> - Overview | Planning & Design | SCP Policies
 *  Exploring other IAM services:
    - <b>*AWS License Manager*</b>
    - <b>*AWS Secrets Manager*</b>
    - <b>*Amazon GaurdDuty*</b>
    - <b>*AWS Shield*</b>    
    - <b>*AWS Certificate Manager*</b> 
   
</details>
<details>
 <summary> <b> Module-03: AWS Compute Services - EC2, EC2 Image Builder, Lambda 🌟 </b>  </summary>
  
 *  Introduction to <b>*Amazon EC2 service*</b>
 
 *  EC2 configuration and sizing options (instance types)
 *  EC2 Instance Purchasing options - On-demand, Spot, Dedicated and Reserved
 *  EC2 Security Groups - Inbound and Outbound rules
 *  EC2 Placement Groups
 *  EC2 User Data scripts
 *  EC2 Amazon Machine Image (AMI)
 *  EC2 Instance Scalability and High Availability (HA) services
 *  EC2 Load Balancing services
 *  EC2 Auto scaling - <b>*Auto Scaling Groups*</b>
 *  Introduction to <b>*Amazon Elastic Block Store (EBS)*</b>
 *  EBS Volume types with Use-cases
 *  EBS Encryption
 *  EBS Snapshots
 *  Introduction to <b>*Amazon EC2 Image Builder*</b>
 *  Introduction to Serverless services and <b>*AWS Lambda*</b> - Plan, Implement and Deploy Application
 *  AWS Lambda - Real-world use cases | Pricing | Performance | Versions | Aliases | Layers
</details>
<details>
 <summary> <b> Module-04: AWS Storage Services - S3, EBS, EFS, FSx, Glacier, Storage Gateway 🗄️ </b>  </summary>
  
 *  Introduction to <b>*Amazon Simple Storage Service (S3)*</b>
 
 *  S3 Objects and Buckets
 *  Exploring S3 features - Object Versioning | Encryption | Security | S3 Lifecycle Rules
 *  S3 Static Site Hosting
 *  S3 Logging and Audit - Access logs
 *  S3 CORS (Cross Object Resource Sharing)
 *  S3 Storage classes - Standard, Standard IA, Intelligent Tier, Glacier
 *  S3 Pre-signed URLs
 *  Introduction to <b>*Amazon Elastic File System (EFS)*</b> service
 *  Mounting EFS volumes on EC2 Instances
 *  Exploring other storage services - <b>*FSx, EBS, Glacier, Storage Gateway*</b> 

</details> 
<details>
 <summary> <b> Module-05: AWS Management, Monitoring and Integration Services 💎 </b>  </summary>
  
 *  Introduction to <b>*AWS CloudWatch*</b> service

 *  Exploring AWS CloudWatch features - Metrics | Dashboard | Logs | Alarms | Events (EventBridge)
 *  Introduction to <b>*AWS CloudTrail*</b> service
 *  Exploring AWS CloudTrail features - Events | Insights
 *  Introduction to <b>*AWS Config*</b>
 *  Exploring other management services:
    - AWS Personal Health Dashboard
    - AWS Systems Manager
    - AWS Trusted Advisor
    - AWS Command Line Interface (CLI)
 *  Exploring <b>*Amazon Simple Notification Services*</b> (SNS) - Topics | Subscriptions
 *  Exploring <b>*Amazon Simple Queue Service*</b> (SQS)

</details>
<details>
 <summary> <b> Module-06: AWS Networking and Content Delivery Services - VPC, Transit Gateway, Route 53, ELB 💎 </b>  </summary>
  
 *  Networking Primer – IP Addressing, CIDR, OSI Layers
   
 *  Introduction to <b>*Virtual Private Gateway*</b> service
 *  Exploring other networking services:
    - <b>*Network Interface*</b>
    - <b>*Route Tables*</b>
    - <b>*Internet Gateways*</b>
    - <b>*NAT Gateways*</b>
    - <b>*Virtual Private Gateways*</b>
    - <b>*Transit Gateways*</b>
 *  VPC Security – Network Access Control List (NACL), Security Groups
 *  VPC Connectivity sevices - VPC Peering | Site-to-Site VPN | Direct Connect
 *  VPC Endpoints
 *  VPC Pricing
 *  VPC Monitoring and Logging  
 *  Introduction to <b>*AWS Route 53*</b> service - Hosted Zones | Health Checks | Routing Policies | Resolver
 *  Introduction to CDN & <b>*Amazon CloudFront*</b> service
</details>
<details>
 <summary> <b> Module-07: AWS Database Services - RDS, Aurora, ElastiCache 💎 </b>  </summary>
  
 *  Introduction to <b>*Amazon Relational Database Services*</b> - (RDS) service
 
 *  Explore Amazon RDS features - Read Replicas, Auto-scaling, Encryption, Backup
 *  Introduction to <b>*Amazon Aurora*</b> service
 *  Explore Amazon Aurora features - Performance, HA, Auto-scaling, Backup
 *  Introduction to <b>*Amazon ElasticCache*</b> service
 *  Explore Amazon ElasticCache features - Cache hit, Cache miss, Use-cases
 *  Amazon ElaticCache: Redis vs Memcached

</details>
<details>
 <summary> <b> Module-08: AWS Migration, Data Transfer & Backup services - DataSync, Transfer Family, Backup 💎 </b>  </summary>
  
 *  Introduction to <b>*AWS DataSync*</b> service
  
 *  Introduction to <b>*AWS Transfer Family*</b> service
 *  Introduction to <b>*AWS Backup*</b> and <b>*AWS DMS*</b> service
 *  Planning and Enabling Backup solutions - EC2 Instance, EBS Volumes, RDS

</details>

<details>
 <summary> <b> Module-09: AWS DevOps Services - CodeCommit, CodeBuild, CodeDeploy, CodePipeline, CloudFormation 💎</b></summary>
  
 *  DevOps Primer + CI/CD, Agile

 *  Exploring AWS Developer services
 *  Git Primer – VCS, Branches, Merge, Pull, Fork, Commit, Push actions
 *  Building CI CD pipeline with AWS developer services:
    - <b>*AWS CodeCommit*</b>
    - <b>*AWS CodeBuild*</b>
    - <b>*AWS CodeDeploy*</b>
    - <b>*AWS CodePipeline*</b>
 *  Monitoring and Auditing AWS CI CD pipelines
 *  Introduction to <b>*AWS CloudFormation*</b>
 *  AWS CloudFormation Template Anatomy - Resources, Parameters, Mappings, Conditions, Outputs 
 *  Exploring AWS CloudFormation service features - Stacks | Drift Detection | Changeset
 
</details>
<details>
 <summary> <b> Module-10: AWS Container Services - Docker, ECS, ECR, EKS  💎 </b>  </summary>
  
 *  Introduction to Containerization | Docker Primer

 *  Docker Architecture
 *  Docker Installation – Linux/Windows/MacOS
 *  Docker Images - Registry (DockerHub), Dockerfile
 *  <b>*Amazon Elastic Container Services*</b> (ECS) and AWS Fargate
 *  Introduction to <b>*Amazon Elastic Container Registry*</b> (ECR)
 *  Introduction to <b>*Amazon Elastic Kubernetes Service*</b> (EKS)
 *  Exploring Amazon EKS Control & Data plain components
    - Pods
    - Deployments
    - ReplicaSets
    - Services 

</details>

## Project Ideas

- <b>Project-01</b>: Automate 3-tier application infrastructure provisioning using AWS CloudFormation templates and deploy it from AWS Console and AWS CLI

- <b>Project-02</b>: Create a Continuous integration and Continuous delivery (CI/CD) pipelines and underlying infrastructure for building and deploying microservices on Amazon Elastic Container Service (Amazon ECS)
- <b>Project-03</b>: Implement cross-Region disaster recovery with AWS DMS and Amazon Aurora

## </br>
<footer>
<p style="float:left; width: 20%;">
Copyright © Novatec IT Services, 2021
</p>
<p style="float:left; width: 60%; text-align:center;">
<a rel="license" href="https://novatec.co.in/"><img alt="Novatec IT Services License" style="border-width:0" src="https://github.com/novatecstack/aws-admin-masterclass/assets/121426292/240f8082-4f1b-4155-96ef-a9e588798dd9"  width="200" height="130"/></a><br />This work is licensed under a <a rel="license" href="https://novatec.co.in/">Novatec IT Services Data License</a> | Email: novatectrainings@gmail.com |
</p>
</footer>
