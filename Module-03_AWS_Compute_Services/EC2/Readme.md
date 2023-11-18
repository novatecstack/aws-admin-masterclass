# Amazon Elastic Compute Cloud (EC2)

## [EC2 Overview](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

### Lab-01: Launch an EC2 Instance (Windows) and connect to it using:
   - AWS Management console
   - SSH Client
   - AWS CloudShell

### Lab-02: Launch an EC2 Instance (Linux) and connect to it using:
   - AWS Management console
   - SSH Client
   - AWS CloudShell

### Lab-03: Changing the EC2 Instance Type (vertical scaling from t2.micro -> t3.medium) 

## [EC2 Instance Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html)
   - Pending
   - Running
   - Shutting Down
   - Stopping
   - Stopped
   - Terminated

### EC2 Instance Shutdown Behaviour
   - The instance behavior when an OS-level shutdown is performed.   
   - There are two shutdown behaviours:
     - **Stop**
     - **Terminate**
   - Instances can be either terminated or stopped.
   - If no value is specified the value of the source template will still be used.
   - If the template value is not specified then the default API value will be used.

### EC2 Termination Protection
   - This feature prevents EC2 instance from accidental termination through AWS console or CLI

## Amazon Machine Images (AMI)

## EC2 Placement Groups for HA
   - Placement groups helps you in order to get a control over the EC2 instance placement in AWS data centers
   - Placement group types:
     - *Cluster* - All your instances will be on the same rack and AZ
     - *Spread* - Your instances will be spreaded across AZs and are on a different hardware (limited to 7 instance per AZ per PG)
     - *Partition* - EC2 instances can span across AZs | Upto 7 partition per AZ

### Lab-04: Provision an EC2 Instance inside a Placement group
   - Placement group Type: Cluster

## EC2 Security Groups
   - A Security group acts as a virtual firewall for your EC2 instances to control incoming and outgoing traffic.
   - Inbound rules control the incoming traffic to your instance, and outbound rules control the outgoing traffic from your instance.
   - Security Groups can be attached to multiple instances
   - Locked down to a **Region <-> VPC** combination.
   - All inbound traffic is blocked by default.
   - All outbound traffic is authorized by default.

### Lab-05: Create a security group to allow SSH traffic (ingress) and associate it with the EC2 Instance

## EC2 User Data

## EC2 Elastic IP

## EC2 Instance Storage: `EBS Volume`

## EC2 Instance: `Purchasing Options`
   - On-demand Instances
   - Reserved Instances
   - Spot Instances
   - Dedicated Instances

## What is Load Balancing?

## AWS Load Balancing Services
   - Network Load balancer
   - Application Load Balancer
   - Gateway Load Balancer
   - Classic Load Balancer

## What is Auto-scaling?

## Vertical vs Horizontal scaling

## AWS EC2 Instance Auto-scaling: `Auto Scaling Groups`

## References
   - [Amazon EC2 Instance Overview](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
   - [Amazon EC2 CLI Reference](https://docs.aws.amazon.com/cli/latest/reference/ec2/)