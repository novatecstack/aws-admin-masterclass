# Interview Guide for AWS Solutions Architect

<details>
<summary> <b>Question-01</b>: A leading carmaker company, Novatec Autocorp wants to build a new car-as-a-sensor service by leveraging fully serverless components that are provisioned and managed automatically by AWS. The development team at the carmaker does not want an option that requires the capacity to be manually provisioned, as it does not want to respond manually to changing volumes of sensor data.</br>
Given these constraints, which of the following solutions is the BEST fit to develop this car-as-a-sensor service? </summary>

  1. Ingest the sensor data in Kinesis Data Streams, which is polled by an application running on an EC2 instance and the data is written into an auto-scaled DynamoDB table for downstream processing
  
  2. Ingest the sensor data in an Amazon SQS standard queue, which is polled by a Lambda function in batches and the data is written into an auto-scaled DynamoDB table for downstream processing
  
  3. Ingest the sensor data in an Amazon SQS standard queue, which is polled by an application running on an EC2 instance and the data is written into an auto-scaled DynamoDB table for downstream processing
  4. Ingest the sensor data in Kinesis Data Firehose, which directly writes the data into an auto-scaled DynamoDB table for downstream processing
</details>

<details>
<summary> <b>Question-02</b>: A news network uses Amazon S3 to aggregate the raw video footage from its reporting teams across the US. The news network has recently expanded into new geographies in Europe and Asia. The technical teams at the overseas branch offices have reported huge delays in uploading large video files to the destination S3 bucket.
Which of the following are the MOST cost-effective options to improve the file upload speed into S3? (Select two)
</summary>

   1.  Create multiple AWS direct connect connections between the AWS Cloud and branch offices in Europe and Asia. Use the direct connect connections for faster file uploads into S3
   2. Use AWS Global Accelerator for faster file uploads into the destination S3 bucket

   3. Use multipart uploads for faster file uploads into the destination S3 bucket
   
   4. Use Amazon S3 Transfer Acceleration to enable faster file uploads into the destination S3 bucket
   5. Create multiple site-to-site VPN connections between the AWS Cloud and branch offices in Europe and Asia. Use these VPN connections for faster file uploads into S3
</details>

<details>
<summary> <b>Question-03</b>: An Electronic Design Automation (EDA) application produces massive volumes of data that can be divided into two categories. The 'hot data' needs to be both processed and stored quickly in a parallel and distributed fashion. The 'cold data' needs to be kept for reference with quick access for reads and updates at a low cost.
Which of the following AWS services is BEST suited to accelerate the aforementioned chip design process?
</summary>
  
   1. Amazon FSx for Windows File Server
  
   2. AWS Glue
   3. Amazon FSx for Lustre
   4. Amazon EMR
</details>

<details>
<summary> <b>Question-04</b>: The DevOps team at an e-commerce company wants to perform some maintenance work on a specific EC2 instance that is part of an Auto Scaling group using a step scaling policy. The team is facing a maintenance challenge - every time the team deploys a maintenance patch, the instance health check status shows as out of service for a few minutes. This causes the Auto Scaling group to provision another replacement instance immediately.</br>
As a solutions architect, which are the MOST time/resource efficient steps that you would recommend so that the maintenance work can be completed at the earliest? (Select two)
</summary>

  1. Suspend the ScheduledActions process type for the Auto Scaling group and apply the maintenance patch to the instance. Once the instance is ready, you can you can manually set the instance's health status back to healthy and activate the ScheduledActions process type again.
  
  2. Delete the Auto Scaling group and apply the maintenance fix to the given instance. Create a new Auto Scaling group and add all the instances again using the manual scaling policy
  3. Put the instance into the Standby state and then update the instance by applying the maintenance patch. Once the instance is ready, you can exit the Standby state and then return the instance to service
  4. Suspend the ReplaceUnhealthy process type for the Auto Scaling group and apply the maintenance patch to the instance. Once the instance is ready, you can manually set the instance's health status back to healthy and activate the ReplaceUnhealthy process type again
  5. Take a snapshot of the instance, create a new AMI and then launch a new instance using this AMI. Apply the maintenance patch to this new instance and then add it back to the Auto Scaling Group by using the manual scaling policy. Terminate the earlier instance that had the maintenance issue
</details>

<details>
<summary> <b>Question-05</b>: A junior scientist working with the Deep Space Research Laboratory at NASA is trying to upload a high-resolution image of a nebula into Amazon S3. The image size is approximately 3GB. The junior scientist is using S3 Transfer Acceleration (S3TA) for faster image upload. It turns out that S3TA did not result in an accelerated transfer. </br>
Given this scenario, which of the following is correct regarding the charges for this image transfer?
</summary>
  
  1. The junior scientist does not need to pay any transfer charges for the image upload

  2. The junior scientist needs to pay both S3 transfer charges and S3TA transfer charges for the image upload
  3. The junior scientist only needs to pay S3 transfer charges for the image upload
  4. The junior scientist only needs to pay S3TA transfer charges for the image upload
</details>

<details>
<summary> <b>Question-06</b>: A major bank is using SQS to migrate several core banking applications to the cloud to ensure high availability and cost efficiency while simplifying administrative complexity and overhead. The development team at the bank expects a peak rate of about 1000 messages per second to be processed via SQS. It is important that the messages are processed in order.</br>
Which of the following options can be used to implement this system?
</summary>

  1. Use Amazon SQS standard queue to process the messages
  
  2. Use Amazon SQS FIFO queue in batch mode of 4 messages per operation to process the messages at the peak rate
  3. Use Amazon SQS FIFO queue in batch mode of 2 messages per operation to process the messages at the peak rate
  4. Use Amazon SQS FIFO queue to process the messages
</details>

<details>
<summary> <b>Question-07</b>: An e-commerce company is looking for a solution with high availability, as it plans to migrate its flagship application to a fleet of Amazon EC2 instances. The solution should allow for content-based routing as part of the architecture. </br>
As a Solutions Architect, which of the following will you suggest for the company?
</summary>

  1. Use an Auto Scaling group for distributing traffic to the EC2 instances spread across different Availability Zones. Configure an Elastic IP address to mask any failure of an instance
  
  2. Use an Application Load Balancer for distributing traffic to the EC2 instances spread across different Availability Zones. Configure Auto Scaling group to mask any failure of an instance
  3. Use an Auto Scaling group for distributing traffic to the EC2 instances spread across different Availability Zones. Configure a Public IP address to mask any failure of an instance
  4. Use a Network Load Balancer for distributing traffic to the EC2 instances spread across different Availability Zones. Configure a Private IP address to mask any failure of an instance
</details>

<details>
<summary> <b>Question-08</b>: The engineering team at an in-home fitness company is evaluating multiple in-memory data stores with the ability to power its on-demand, live leaderboard. The company's leaderboard requires high availability, low latency, and real-time processing to deliver customizable user data for the community of users working out together virtually from the comfort of their home.</br>
As a solutions architect, which of the following solutions would you recommend? (Select two)
</summary>

  1. Power the on-demand, live leaderboard using ElastiCache Redis as it meets the in-memory, high availability, low latency requirements
  
  2. Power the on-demand, live leaderboard using AWS Neptune as it meets the in-memory, high availability, low latency requirements
  3. Power the on-demand, live leaderboard using RDS Aurora as it meets the in-memory, high availability, low latency requirements
  4. Power the on-demand, live leaderboard using DynamoDB with DynamoDB Accelerator (DAX) as it meets the in-memory, high availability, low latency requirements
  5. Power the on-demand, live leaderboard using DynamoDB as it meets the in-memory, high availability, low latency requirements
</details>

<details>
<summary> <b>Question-09</b>: A company manages a multi-tier social media application that runs on EC2 instances behind an Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones and use an Amazon Aurora database. As a solutions architect, you have been tasked to make the application more resilient to periodic spikes in request rates.</br>
Which of the following solutions would you recommend for the given use-case? (Select two)
</summary>

  1. Use Aurora Replica
  
  2. Use AWS Shield
  3. Use AWS Global Accelerator
  4. Use AWS Direct Connect
  5. Use CloudFront distribution in front of the Application Load Balancer
</details>

<details>
<summary> <b>Question-10</b>: An audit department generates and accesses the audit reports only twice in a financial year. The department uses AWS Step Functions to orchestrate the report creating process that has failover and retry scenarios built into the solution. The underlying data to create these audit reports is stored on S3, runs into hundreds of Terabytes and should be available with millisecond latency. </br>
As a solutions architect, which is the MOST cost-effective storage class that you would recommend to be used for this use-case?
</summary>

  1. Amazon S3 Glacier Deep Archive
  
  2. Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
  3. Amazon S3 Standard
  4. Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)
</details>

<details>
<summary> <b>Question-11</b>: An organization wants to delegate access to a set of users from the development environment so that they can access some resources in the production environment which is managed under another AWS account.</br>
As a solutions architect, which of the following steps would you recommend?
</summary>
  
  1. Both IAM roles and IAM users can be used interchangeably for cross-account access
  
  2. Create new IAM user credentials for the production environment and share these credentials with the set of users from the development environment
  3. It is not possible to access cross-account resources
  4. Create a new IAM role with the required permissions to access the resources in the production environment. The users can then assume this IAM role while accessing the resources from the production environment 
</details>

<details>
<summary> <b>Question-12</b>: A telecom company operates thousands of hardware devices like switches, routers, cables, etc. The real-time status data for these devices must be fed into a communications application for notifications. Simultaneously, another analytics application needs to read the same real-time status data and analyze all the connecting lines that may go down because of any device failures.</br>
As a Solutions Architect, which of the following solutions would you suggest, so that both the applications can consume the real-time status data concurrently?
</summary>

  1. Amazon Simple Queue Service (SQS) with Amazon Simple Email Service (Amazon SES)
  
  2. Amazon Simple Notification Service (SNS)
  3. Amazon Kinesis Data Streams
  4. Amazon Simple Queue Service (SQS) with Amazon Simple Notification Service (SNS)
</details>

<details>
<summary> <b>Question-13</b>: A gaming company is looking at improving the availability and performance of its global flagship application which utilizes UDP protocol and needs to support fast regional failover in case an AWS Region goes down. The company wants to continue using its own custom DNS service. </br>
Which of the following AWS services represents the best solution for this use-case?
</summary>

  1. Amazon Route 53
  
  2. AWS Global Accelerator
  3. Amazon CloudFront
  4. AWS Elastic Load Balancing (ELB)
</details>

<details>
<summary> <b>Question-14</b>: The IT department at a consulting firm is conducting a training workshop for new developers. As part of an evaluation exercise on Amazon S3, the new developers were asked to identify the invalid storage class lifecycle transitions for objects stored on S3. </br>
Can you spot the INVALID lifecycle transitions from the options below? (Select two)
</summary>

  1. S3 Intelligent-Tiering => S3 Standard
  
  2. S3 Standard => S3 Intelligent-Tiering
  3. S3 One Zone-IA => S3 Standard-IA
  4. S3 Standard-IA => S3 One Zone-IA
  5. S3 Standard-IA => S3 Intelligent-Tiering
</details>

<details>
<summary> <b>Question-15</b>: A Big Data analytics company wants to set up an AWS cloud architecture that throttles requests in case of sudden traffic spikes. The company is looking for AWS services that can be used for buffering or throttling to handle such traffic variations. </br>
Which of the following services can be used to support this requirement?
</summary>

  1. Amazon API Gateway, Amazon SQS and Amazon Kinesis
  
  2. Elastic Load Balancer, Amazon SQS, AWS Lambda
  3. Amazon Gateway Endpoints, Amazon SQS and Amazon Kinesis
  4. Amazon SQS, Amazon SNS and AWS Lambda
</details>

<details>
<summary> <b>Question-16</b>: A gaming company uses Amazon Aurora as its primary database service. The company has now deployed 5 multi-AZ read replicas to increase the read throughput and for use as failover target. The replicas have been assigned the following failover priority tiers and corresponding instance sizes are given in parentheses: tier-1 (16TB), tier-1 (32TB), tier-10 (16TB), tier-15 (16TB), tier-15 (32TB). </br>
In the event of a failover, Amazon Aurora will promote which of the following read replicas?
</summary>

  1. Tier-10 (16TB)
  
  2. Tier-15 (32TB)
  3. Tier-1 (16TB)
  4. Tier-1 (32TB)
</details>

<details>
<summary> <b>Question-17</b>: A healthcare company uses its on-premises infrastructure to run legacy applications that require specialized customizations to the underlying Oracle database as well as its host operating system (OS). The company also wants to improve the availability of the Oracle database layer. The company has hired you as an AWS Certified Solutions Architect Associate to build a solution on AWS that meets these requirements while minimizing the underlying infrastructure maintenance effort. </br>
Which of the following options represents the best solution for this use case?
</summary>

  1. Leverage multi-AZ configuration of RDS Custom for Oracle that allows the database administrators to access and customize the database environment and the underlying operating system
  
  2. Leverage multi-AZ configuration of RDS for Oracle that allows the database administrators to access and customize the database environment and the underlying operating system
  3. Leverage cross AZ read-replica configuration of RDS for Oracle that allows the database administrators to access and customize the database environment and the underlying operating system
  4. Deploy the Oracle database layer on multiple EC2 instances spread across two Availability Zones (AZ). This deployment configuration guarantees high availability and also allows the database administrators to access and customize the database environment and the underlying operating system
</details>

<details>
<summary> <b>Question-18</b>: One of the biggest football leagues in Europe has granted the distribution rights for live streaming its matches in the US to a silicon valley based streaming services company. As per the terms of distribution, the company must make sure that only users from the US are able to live stream the matches on their platform. Users from other countries in the world must be denied access to these live-streamed matches. </br>
Which of the following options would allow the company to enforce these streaming restrictions? (Select two)
</summary>

  1. Use georestriction to prevent users in specific geographic locations from accessing content that you're distributing through a CloudFront web distribution
  
  2. Use Route 53 based geolocation routing policy to restrict distribution of content to only the locations in which you have distribution rights
  3. Use Route 53 based failover routing policy to restrict distribution of content to only the locations in which you have distribution rights
  4. Use Route 53 based latency routing policy to restrict distribution of content to only the locations in which you have distribution rights
  5. Use Route 53 based weighted routing policy to restrict distribution of content to only the locations in which you have distribution rights
</details>

<details>
<summary> <b>Question-19</b>: A financial services company uses Amazon GuardDuty for analyzing its AWS account metadata to meet the compliance guidelines. However, the company has now decided to stop using GuardDuty service. All the existing findings have to be deleted and cannot persist anywhere on AWS Cloud.</br>
Which of the following techniques will help the company meet this requirement?
</summary>

  1. De-register the service under services tab
  
  2. Suspend the service in the general settings
  3. Raise a service request with Amazon to completely delete the data from all their backups
  4. Disable the service in the general settings
</details>

<details>
<summary> <b>Question-20</b>: A social photo-sharing company uses Amazon S3 to store the images uploaded by the users. These images are kept encrypted in S3 by using AWS-KMS and the company manages its own Customer Master Key (CMK) for encryption. A member of the DevOps team accidentally deleted the CMK a day ago, thereby rendering the user's photo data unrecoverable. You have been contacted by the company to consult them on possible solutions to this crisis. </br>
As a solutions architect, which of the following steps would you recommend to solve this issue?
</summary>

  1. As the CMK was deleted a day ago, it must be in the 'pending deletion' status and hence you can just cancel the CMK deletion and recover the key
  
  2. The company should issue a notification on its web application informing the users about the loss of their data
  3. The CMK can be recovered by the AWS root account user
  4. Contact AWS support to retrieve the CMK from their backup
</details>

<details>
<summary> <b>Question-21</b>: A data analytics company measures what the consumers watch and what advertising they’re exposed to. This real-time data is ingested into its on-premises data center and subsequently, the daily data feed is compressed into a single file and uploaded on Amazon S3 for backup. The typical compressed file size is around 2 GB.</br>
Which of the following is the fastest way to upload the daily compressed file into S3?
</summary>

  1. Upload the compressed file using multipart upload with S3 transfer acceleration
  
  2. Upload the compressed file using multipart upload
  3. FTP the compressed file into an EC2 instance that runs in the same region as the S3 bucket. Then transfer the file from the EC2 instance into the S3 bucket
  4. Upload the compressed file in a single operation
</details>

<details>
<summary> <b>Question-22</b>: A healthcare startup needs to enforce compliance and regulatory guidelines for objects stored in Amazon S3. One of the key requirements is to provide adequate protection against accidental deletion of objects.</summary>br
As a solutions architect, what are your recommendations to address these guidelines? (Select two)
</summary>

  1. Establish a process to get managerial approval for deleting S3 objects
  
  2. Change the configuration on AWS S3 console so that the user needs to provide additional confirmation while deleting any S3 object
  3. Enable MFA delete on the bucket
  4. Enable versioning on the bucket
  5. Create an event trigger on deleting any S3 object. The event invokes an SNS notification via email to the IT manager
</details>

<details>
<summary> <b>Question-23</b>: A media agency stores its re-creatable assets on Amazon S3 buckets. The assets are accessed by a large number of users for the first few days and the frequency of access falls down drastically after a week. Although the assets would be accessed occasionally after the first week, but they must continue to be immediately accessible when required. The cost of maintaining all the assets on S3 storage is turning out to be very expensive and the agency is looking at reducing costs as much as possible.</br>
As a Solutions Architect, can you suggest a way to lower the storage costs while fulfilling the business requirements?
</summary>

  1. Configure a lifecycle policy to transition the objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days
  
  2. Configure a lifecycle policy to transition the objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days
  3. Configure a lifecycle policy to transition the objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 7 days
  4. Configure a lifecycle policy to transition the objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 7 days
</details>

<details>
<summary> <b>Question-24</b>: A new DevOps engineer has joined a large financial services company recently. As part of his onboarding, the IT department is conducting a review of the checklist for tasks related to AWS Identity and Access Management.</br>
As a solutions architect, which best practices would you recommend (Select two)?
</summary>

  1. Configure AWS CloudTrail to log all IAM actions
  
  2. Use user credentials to provide access specific permissions for Amazon EC2 instances
  3. Enable MFA for privileged users
  4. Create a minimum number of accounts and share these account credentials among employees
  5. Grant maximum privileges to avoid assigning privileges again
</details>

<details>
<summary> <b>Question-25</b>: The engineering team at a data analytics company has observed that its flagship application functions at its peak performance when the underlying EC2 instances have a CPU utilization of about 50%. The application is built on a fleet of EC2 instances managed under an Auto Scaling group. The workflow requests are handled by an internal Application Load Balancer that routes the requests to the instances.</br>
As a solutions architect, what would you recommend so that the application runs near its peak performance state?
</summary>

  1. Configure the Auto Scaling group to use a Cloudwatch alarm triggered on a CPU utilization threshold of 50%
  2. Configure the Auto Scaling group to use simple scaling policy and set the CPU utilization as the target metric with a target value of 50%
  3. Configure the Auto Scaling group to use target tracking policy and set the CPU utilization as the target metric with a target value of 50%
  4. Configure the Auto Scaling group to use step scaling policy and set the CPU utilization as the target metric with a target value of 50%
</details>

<details>
<summary> <b>Question-26</b>: A software engineering intern at an e-commerce company is documenting the process flow to provision EC2 instances via the Amazon EC2 API. These instances are to be used for an internal application that processes HR payroll data. He wants to highlight those volume types that cannot be used as a boot volume.</br>
Can you help the intern by identifying those storage volume types that CANNOT be used as boot volumes while creating the instances? (Select two)
</summary>

  1. Cold HDD (sc1)
  2. Provisioned IOPS SSD (io1)
  3. Throughput Optimized HDD (st1)
  4. General Purpose SSD (gp2)
  5. Instance Store
</details>

<details>
<summary> <b>Question-27</b>: The product team at a startup has figured out a market need to support both stateful and stateless client-server communications via the APIs developed using its platform. You have been hired by the startup as a solutions architect to build a solution to fulfill this market need using AWS API Gateway.</br>
Which of the following would you identify as correct?
</summary>

  1. API Gateway creates RESTful APIs that enable stateful client-server communication and API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateless, full-duplex communication between client and server
  2. API Gateway creates RESTful APIs that enable stateless client-server communication and API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateless, full-duplex communication between client and server
  3. API Gateway creates RESTful APIs that enable stateless client-server communication and API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateful, full-duplex communication between client and server
  4. API Gateway creates RESTful APIs that enable stateful client-server communication and API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateful, full-duplex communication between client and server
</details>

<details>
<summary> <b>Question-28</b>: A company is in the process of migrating its on-premises SMB file shares to AWS so the company can get out of the business of managing multiple file servers across dozens of offices. The company has 200TB of data in its file servers. The existing on-premises applications and native Windows workloads should continue to have low latency access to this data without any disruptions after the migration. The company also wants any new applications deployed on AWS to have access to this migrated data.</br>
Which of the following is the best solution to meet this requirement?
</summary>

  1. Use Amazon Storage Gateway’s File Gateway to provide low-latency, on-premises access to fully managed file shares in Amazon FSx for Windows File Server. The applications deployed on AWS can access this data directly from Amazon FSx in AWS
  2. Use Amazon FSx File Gateway to provide low-latency, on-premises access to fully managed file shares in Amazon FSx for Windows File Server. The applications deployed on AWS can access this data directly from Amazon FSx in AWS
  3. Use Amazon FSx File Gateway to provide low-latency, on-premises access to fully managed file shares in Amazon EFS. The applications deployed on AWS can access this data directly from Amazon EFS
  4. Use Amazon Storage Gateway’s File Gateway to provide low-latency, on-premises access to fully managed file shares in Amazon S3. The applications deployed on AWS can access this data directly from Amazon S3
</details>

<details>
<summary> <b>Question-29</b>: A gaming company is developing a mobile game that streams score updates to a backend processor and then publishes results on a leaderboard. The company has hired you as an AWS Certified Solutions Architect Associate to design a solution that can handle major traffic spikes, process the mobile game updates in the order of receipt, and store the processed updates in a highly available database. The company wants to minimize the management overhead required to maintain the solution.</br>
Which of the following will you recommend to meet these requirements?
</summary>

  1. Push score updates to an SNS topic, subscribe a Lambda function to this SNS topic to process the updates and then store these processed updates in a SQL database running on Amazon EC2
  2. Push score updates to Kinesis Data Streams which uses a Lambda function to process these updates and then store these processed updates in DynamoDB
  3. Push score updates to Kinesis Data Streams which uses a fleet of EC2 instances (with Auto Scaling) to process the updates in Kinesis Data Streams and then store these processed updates in DynamoDB
  4. Push score updates to an SQS queue which uses a fleet of EC2 instances (with Auto Scaling) to process these updates in the SQS queue and then store these processed updates in an RDS MySQL database
</details>

<details>
<summary> <b>Question-30</b>: An IT company wants to review its security best-practices after an incident was reported where a new developer on the team was assigned full access to DynamoDB. The developer accidentally deleted a couple of tables from the production environment while building out a new feature.</br>
Which is the MOST effective way to address this issue so that such incidents do not reoccur?
</summary>

  1. The CTO should review the permissions for each new developer's IAM user so that such incidents don't recur
  
  2. Use permissions boundary to control the maximum permissions employees can grant to the IAM principals
  3. Remove full database access for all IAM users in the organization
  4. Only root user should have full database access in the organization
</details>

<details>
<summary> <b>Question-31</b>: A company runs a data processing workflow that takes about 60 minutes to complete. The workflow can withstand disruptions and it can be started and stopped multiple times.</br>
Which is the most cost-effective solution to build a solution for the workflow?
</summary>

  1. Use EC2 on-demand instances to run the workflow processes
  
  2. Use EC2 reserved instances to run the workflow processes 
  3. Use EC2 spot instances to run the workflow processes 
  4. Use AWS Lambda function to run the workflow processes
</details>

<details>
<summary> <b>Question-32</b>: A leading social media analytics company is contemplating moving its dockerized application stack into AWS Cloud. The company is not sure about the pricing for using Elastic Container Service (ECS) with the EC2 launch type compared to the Elastic Container Service (ECS) with the Fargate launch type.</br>
Which of the following is correct regarding the pricing for these two services?
</summary>

  1. ECS with EC2 launch type is charged based on EC2 instances and EBS volumes used. ECS with Fargate launch type is charged based on vCPU and memory resources that the containerized application requests
  
  2. Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on EC2 instances and EBS volumes used
  3. Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on vCPU and memory resources that the containerized application requests
  4. Both ECS with EC2 launch type and ECS with Fargate launch type are just charged based on Elastic Container Service used per hour
</details>

<details>
<summary> <b>Question-33</b>: A US-based healthcare startup is building an interactive diagnostic tool for COVID-19 related assessments. The users would be required to capture their personal health records via this tool. As this is sensitive health information, the backup of the user data must be kept encrypted in S3. The startup does not want to provide its own encryption keys but still wants to maintain an audit trail of when an encryption key was used and by whom.</br>
Which of the following is the BEST solution for this use-case?
</summary>

  1. Use SSE-S3 to encrypt the user data on S3
  
  2. Use SSE-KMS to encrypt the user data on S3
  3. Use SSE-C to encrypt the user data on S3
  4. Use client-side encryption with client provided keys and then upload the encrypted user data to S3
</details>

<details>
<summary> <b>Question-34</b>: The payroll department at a company initiates several computationally intensive workloads on EC2 instances at a designated hour on the last day of every month. The payroll department has noticed a trend of severe performance lag during this hour. The engineering team has figured out a solution by using Auto Scaling Group for these EC2 instances and making sure that 10 EC2 instances are available during this peak usage hour. For normal operations only 2 EC2 instances are enough to cater to the workload.</br>
As a solutions architect, which of the following steps would you recommend to implement the solution?
</summary>

  1. Configure your Auto Scaling group by creating a simple tracking policy and setting the instance count to 10 at the designated hour. This causes the scale-out to happen before peak traffic kicks in at the designated hour
  
  2. Configure your Auto Scaling group by creating a scheduled action that kicks-off at the designated hour on the last day of the month. Set the min count as well as the max count of instances to 10. This causes the scale-out to happen before peak traffic kicks in at the designated hour
  3. Configure your Auto Scaling group by creating a scheduled action that kicks-off at the designated hour on the last day of the month. Set the desired capacity of instances to 10. This causes the scale-out to happen before peak traffic kicks in at the designated hour
  4. Configure your Auto Scaling group by creating a target tracking policy and setting the instance count to 10 at the designated hour. This causes the scale-out to happen before peak traffic kicks in at the designated hour
</details>

<details>
<summary> <b>Question-35</b>: A new DevOps engineer has just joined a development team and wants to understand the replication capabilities for RDS Multi-AZ as well as RDS Read-replicas.</br>
Which of the following correctly summarizes these capabilities for the given database?
</summary>

  1. Multi-AZ follows asynchronous replication and spans one Availability Zone within a single region. Read replicas follow synchronous replication and can be within an Availability Zone, Cross-AZ, or Cross-Region
  
  2. Multi-AZ follows asynchronous replication and spans at least two Availability Zones within a single region. Read replicas follow synchronous replication and can be within an Availability Zone, Cross-AZ, or Cross-Region
  3. Multi-AZ follows asynchronous replication and spans at least two Availability Zones within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone, Cross-AZ, or Cross-Region
  4. Multi-AZ follows synchronous replication and spans at least two Availability Zones within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone, Cross-AZ, or Cross-Region
</details>

<details>
<summary> <b>Question-36</b>: CloudFront offers a multi-tier cache in the form of regional edge caches that improve latency. However, there are certain content types that bypass the regional edge cache, and go directly to the origin.</br>
Which of the following content types skip the regional edge cache? (Select two)
</summary>

  1. Dynamic content, as determined at request time (cache-behavior configured to forward all headers)
  
  2. Proxy methods PUT/POST/PATCH/OPTIONS/DELETE go directly to the origin
  3. E-commerce assets such as product photos
  4. User-generated videos
  5. Static content such as style sheets, JavaScript files
</details>

<details>
<summary> <b>Question-37</b>: An IT consultant is helping the owner of a medium-sized business set up an AWS account. What are the security recommendations he must follow while creating the AWS account root user? (Select two)
</summary>

  1. Create AWS account root user access keys and share those keys only with the business owner
  
  2. Send an email to the business owner with details of the login username and password for the AWS root user. This will help the business owner to troubleshoot any login issues in future
  3. Encrypt the access keys and save them on Amazon S3
  4. Enable Multi Factor Authentication (MFA) for the AWS account root user account
  5. Create a strong password for the AWS account root user
</details>

<details>
<summary> <b>Question-38</b>: A retail company uses Amazon EC2 instances, API Gateway, Amazon RDS, Elastic Load Balancer and CloudFront services. To improve the security of these services, the Risk Advisory group has suggested a feasibility check for using the Amazon GuardDuty service.</br>
Which of the following would you identify as data sources supported by GuardDuty?
</summary>

  1. VPC Flow Logs, DNS logs, CloudTrail events
  
  2. CloudFront logs, API Gateway logs, CloudTrail events
  3. VPC Flow Logs, API Gateway logs, S3 access logs
  4. ELB logs, DNS logs, CloudTrail events
</details>

<details>
<summary> <b>Question-39</b>: The engineering team at a Spanish professional football club has built a notification system for its website using Amazon SNS notifications which are then handled by a Lambda function for end-user delivery. During the off-season, the notification systems need to handle about 100 requests per second. During the peak football season, the rate touches about 5000 requests per second and it is noticed that a significant number of the notifications are not being delivered to the end-users on the website.</br>
As a solutions architect, which of the following would you suggest as the BEST possible solution to this issue?
</summary>

  1. The engineering team needs to provision more servers running the SNS service.
  
  2. Amazon SNS has hit a scalability limit, so the team needs to contact AWS support to raise the account limit.
  3. Amazon SNS message deliveries to AWS Lambda have crossed the account concurrency quota for Lambda, so the team needs to contact AWS support to raise the account limit.
  4. The engineering team needs to provision more servers running the Lambda service.
</details>

<details>
<summary> <b>Question-40</b>: A geological research agency maintains the seismological data for the last 100 years. The data has a velocity of 1GB per minute. You would like to store the data with only the most relevant attributes to build a predictive model for earthquakes.</br>
What AWS services would you use to build the most cost-effective solution with the LEAST amount of infrastructure maintenance?
</summary>

  1. Ingest the data in Kinesis Data Firehose and use an intermediary Lambda function to filter and transform the incoming stream before the output is dumped on S3
  
  2. Ingest the data in a Spark Streaming Cluster on EMR use Spark Streaming transformations before writing to S3
  3. Ingest the data in Kinesis Data Analytics and use SQL queries to filter and transform the data before writing to S3
  4. Ingest the data in Kinesis Data Streams and use an intermediary Lambda function to filter and transform the incoming stream before the output is dumped on S3
</details>

<details>
<summary> <b>Question-41</b>: The sourcing team at the US headquarters of a global e-commerce company is preparing a spreadsheet of the new product catalog. The spreadsheet is saved on an EFS file system created in us-east-1 region. The sourcing team counterparts from other AWS regions such as Asia Pacific and Europe also want to collaborate on this spreadsheet.</br>
As a solutions architect, what is your recommendation to enable this collaboration with the LEAST amount of operational overhead?
</summary>

  1. The spreadsheet will have to be copied into EFS file systems of other AWS regions as EFS is a regional service and it does not allow access from other AWS regions
  
  2. The spreadsheet will have to be copied in Amazon S3 which can then be accessed from any AWS region
  3. The spreadsheet data will have to be moved into an RDS MySQL database which can then be accessed from any AWS region
  4. The spreadsheet on the EFS file system can be accessed in other AWS regions by using an inter-region VPC peering connection
</details>

<details>
<summary> <b>Question-42</b>: An IT security consultancy is working on a solution to protect data stored in S3 from any malicious activity as well as check for any vulnerabilities on EC2 instances.</br>
As a solutions architect, which of the following solutions would you suggest to help address the given requirement?
</summary>

  1. Use Amazon GuardDuty to monitor any malicious activity on data stored in S3. Use security assessments provided by Amazon GuardDuty to check for vulnerabilities on EC2 instances
  
  2. Use Amazon GuardDuty to monitor any malicious activity on data stored in S3. Use security assessments provided by Amazon Inspector to check for vulnerabilities on EC2 instances
  3. Use Amazon Inspector to monitor any malicious activity on data stored in S3. Use security assessments provided by Amazon Inspector to check for vulnerabilities on EC2 instances
  4. Use Amazon Inspector to monitor any malicious activity on data stored in S3. Use security assessments provided by Amazon GuardDuty to check for vulnerabilities on EC2 instances
</details>

<details>
<summary> <b>Question-43</b>: A company uses Amazon S3 buckets for storing sensitive customer data. The company has defined different retention periods for different objects present in the Amazon S3 buckets, based on the compliance requirements. But, the retention rules do not seem to work as expected.</br>
Which of the following options represent a valid configuration for setting up retention periods for objects in Amazon S3 buckets? (Select two)
</summary>

  1. You cannot place a retention period on an object version through a bucket default setting
  
  2. Different versions of a single object can have different retention modes and periods
  3. The bucket default settings will override any explicit retention mode or period you request on an object version
  4. When you use bucket default settings, you specify a Retain Until Date for the object version
  5. When you apply a retention period to an object version explicitly, you specify a Retain Until Date for the object version
</details>

<details>
<summary> <b>Question-44</b>: A company has a web application that runs 24*7 in the production environment. The development team at the company runs a clone of the same application in the dev environment for up to 8 hours every day. The company wants to build the MOST cost-optimal solution by deploying these applications using the best-fit pricing options for EC2 instances.</br>What would you recommend?
</summary>

  1. Use on-demand EC2 instances for the production application and spot instances for the dev application
  
  2. Use reserved EC2 instances for the production application and spot instances for the dev application
  3. Use reserved EC2 instances for the production application and on-demand instances for the dev application
  4. Use reserved EC2 instances for the production application and spot block instances for the dev application
</details>

<details>
<summary> <b>Question-45</b>: A technology blogger wants to write a review on the comparative pricing for various storage types available on AWS Cloud. The blogger has created a test file of size 1GB with some random data. Next he copies this test file into AWS S3 Standard storage class, provisions an EBS volume (General Purpose SSD (gp2)) with 100GB of provisioned storage and copies the test file into the EBS volume, and lastly copies the test file into an EFS Standard Storage filesystem. At the end of the month, he analyses the bill for costs incurred on the respective storage types for the test file.</br>
What is the correct order of the storage charges incurred for the test file on these three storage types?
</summary>

  1. Cost of test file storage on EFS < Cost of test file storage on S3 Standard < Cost of test file storage on EBS
  
  2. Cost of test file storage on EBS < Cost of test file storage on S3 Standard < Cost of test file storage on EFS
  3. Cost of test file storage on S3 Standard < Cost of test file storage on EBS < Cost of test file storage on EFS
  4. Cost of test file storage on S3 Standard < Cost of test file storage on EFS < Cost of test file storage on EBS
</details>

<details>
<summary> <b>Question-46</b>: The flagship application for a gaming company connects to an Amazon Aurora database and the entire technology stack is currently deployed in the United States. Now, the company has plans to expand to Europe and Asia for its operations. It needs the games table to be accessible globally but needs the users and games_played tables to be regional only.</br>
How would you implement this with minimal application refactoring?
</summary>

  1. Use a DynamoDB global table for the games table and use Amazon Aurora for the users and games_played tables
  
  2. Use an Amazon Aurora Global Database for the games table and use Amazon Aurora for the users and games_played tables
  3. Use a DynamoDB global table for the games table and use DynamoDB tables for the users and games_played tables
  4. Use an Amazon Aurora Global Database for the games table and use DynamoDB tables for the users and games_played tables
</details>

<details>
<summary> <b>Question-47</b>: An ivy-league university is assisting NASA to find potential landing sites for exploration vehicles of unmanned missions to our neighboring planets. The university uses High Performance Computing (HPC) driven application architecture to identify these landing sites.</br>
Which of the following EC2 instance topologies should this application be deployed on?
</summary>

  1. The EC2 instances should be deployed in a partition placement group so that distributed workloads can be handled effectively
  
  2. The EC2 instances should be deployed in a spread placement group so that there are no correlated failures
  3. The EC2 instances should be deployed in an Auto Scaling group so that application meets high availability requirements
  4. The EC2 instances should be deployed in a cluster placement group so that the underlying workload can benefit from low network latency and high network throughput
</details>

<details>
<summary> <b>Question-48</b>: A retail company has set up a Network Load Balancer (NLB) having a target group that is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances (across 3 Availability Zones) that run the web service. The company is getting poor feedback from its customers regarding the application's availability as the NLB is unable to detect HTTP errors for the application. These HTTP errors require a manual restart of the EC2 instances that run the web service.</br>
The company has hired you as an AWS Certified Solutions Architect Associate to build the best-fit solution that does not require custom development/scripting effort. Which of the following will you suggest?
</summary>

  1. Set up a cron job on the EC2 instances to inspect the web application's logs at a regular frequency. When HTTP errors are detected, force an application restart
  
  2. Set up a CloudWatch alarm to monitor the UnhealthyHostCount metric for the NLB. Leverage the Auto Scaling group to replace unhealthy instances when the alarm is in the ALARM state
  3. Configure HTTP health checks on the Network Load Balancer (NLB) by pointing to the URL of the application. Leverage the Auto Scaling group to replace unhealthy instances
  4. Replace the Network Load Balancer (NLB) with an Application Load Balancer (ALB) and configure HTTP health checks on the ALB by pointing to the URL of the application. Leverage the Auto Scaling group to replace unhealthy instances
</details>

<details>
<summary> <b>Question-49</b>: The engineering team at an e-commerce company wants to establish a dedicated, encrypted, low latency, and high throughput connection between its data center and AWS Cloud. The engineering team has set aside sufficient time to account for the operational overhead of establishing this connection.</br>
As a solutions architect, which of the following solutions would you recommend to the company?
</summary>

  1. Use site-to-site VPN to establish a connection between the data center and AWS Cloud
  
  2. Use AWS Direct Connect plus VPN to establish a connection between the data center and AWS Cloud
  3. Use VPC transit gateway to establish a connection between the data center and AWS Cloud
  4. Use AWS Direct Connect to establish a connection between the data center and AWS Cloud
</details>

<details>
<summary> <b>Question-50</b>: The engineering team at an e-commerce company wants to establish a dedicated, encrypted, low latency, and high throughput connection between its data center and AWS Cloud. The engineering team has set aside sufficient time to account for the operational overhead of establishing this connection.</br>
As a solutions architect, which of the following solutions would you recommend to the company?
</summary>

  1. Use site-to-site VPN to establish a connection between the data center and AWS Cloud
  
  2. Use AWS Direct Connect plus VPN to establish a connection between the data center and AWS Cloud
  3. Use VPC transit gateway to establish a connection between the data center and AWS Cloud
  4. Use AWS Direct Connect to establish a connection between the data center and AWS Cloud
</details>

<details>
<summary> <b>Answers</b></summary>

  *  Question 01 - (2)
     - Ingest the sensor data in an Amazon SQS standard queue, which is polled by a Lambda function in batches and the data is written into an auto-scaled DynamoDB table for downstream processing)
  *  Question 02 - (3) & (4)
     - Use multipart uploads for faster file uploads into the destination S3 bucket
     - Use Amazon S3 Transfer Acceleration to enable faster file uploads into the destination S3 bucket
  *  Question 03 - (3)
     - Amazon FSx for Lustre
  *  Question 04 -
  *  Question 05 -
  *  Question 06 -
  *  Question 07 -
  *  Question 08 -
  *  Question 09 -
  *  Question 10 -
  *  Question 11 -
  *  Question 12 -
  *  Question 13 -
  *  Question 14 -
  *  Question 15 -
  *  Question 16 -
  *  Question 17 -
  *  Question 18 -
  *  Question 19 -
  *  Question 20 -
  *  Question 21 -
  *  Question 22 -
  *  Question 23 -
  *  Question 24 -
  *  Question 25 -
</details>
