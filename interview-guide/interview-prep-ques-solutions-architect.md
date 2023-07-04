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
<summary> <b>Question-06</b>:A major bank is using SQS to migrate several core banking applications to the cloud to ensure high availability and cost efficiency while simplifying administrative complexity and overhead. The development team at the bank expects a peak rate of about 1000 messages per second to be processed via SQS. It is important that the messages are processed in order.</br>
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
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

<details>
<summary> <b>Question-02</b>:
</summary>
</details>

