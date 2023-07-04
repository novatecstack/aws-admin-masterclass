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
<summary> <b>Question-18</b>:
</summary>
</details>

<details>
<summary> <b>Question-19</b>:
</summary>
</details>

<details>
<summary> <b>Question-20</b>:
</summary>
</details>

<details>
<summary> <b>Question-21</b>:
</summary>
</details>

<details>
<summary> <b>Question-22</b>:
</summary>
</details>

