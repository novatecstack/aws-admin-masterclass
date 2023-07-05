# Interview Guide for Cloud Engineers, SRE and SysOps Engineers

## Interview Questions for Beginners
<details>
<summary>
  Question-01: What is Cloud Computing?
</summary>
  
  *  Cloud computing provides access to IT resources such as computing power, applications, and storage to users as per their demands.
  *  Here, users do not need to maintain their physical resources on their premises.
  *  In cloud computing, you can pay only for the resources you have used, so there are no investment costs.
  *  This service provides greater flexibility and scaling on resources according to your changing workloads.
</details>
<details>
<summary>
  Question-02: What is Serverless Computing? 
</summary>
  
  *  AWS offers a serverless computing facility to run codes and manage data and applications without managing servers.
  *  Serverless computing eliminates infrastructure management tasks like capacity provisioning, patching, etc.
  *  It reduces the operating costs significantly. As this technology scales in response to the demands for resources automatically, it ensures quick service to users.
</details>

<details>
<summary>
  Question-03: Can you briefly describe what AWS IAM does and how you’ve used it?
</summary>
  
  *  At its core, IAM controls whether a principal may act on a resource.
  *  The Identity and Access Management system serves two purposes in AWS:
     1. IAM models identities that can authenticate and use the AWS cloud.
     2. IAM enables you to write policies that authorize identities to access AWS services and resources in the AWS cloud
</details>

<details>
<summary>
  Question-04: What are the core elements of an AWS IAM policy statement and what is each element’s purpose? 
</summary>

  *  <b>*Principal*</b>: Identifies the principals that the statement applies to, most importantly and commonly an AWS IAM principal.
  *  <b>*Effect*</b>: whether to Allow or Deny access if the statement applies; Deny always wins when multiple statements apply.
  *  <b>*Action*</b>: one or more AWS API actions the statement will Allow or Deny the Principal to invoke as a string or list of strings. Supports wildcards, ? and *.
  *  <b>*Resource*</b>: one or more AWS resources the statement applies to, specified as ARNs. Supports wildcards, ? and *.
</details>

<details>
<summary>
  Question-05: What identities can you specify in the Principal element? 
</summary>

  *  The most important kind of identities are AWS IAM identities from within your AWS accounts: IAM roles & roles.
  *  You can also specify an entire AWS account, role sessions, and federated users.
  *  The second most important kind of principal is an AWS service such as ec2, cloudtrail, or dynamodb.
</details>

<details>
<summary>
  Question-06: What happens if you have one IAM statement that allows a principal to perform an operation on a resource and another statement that denies that same operation on the same resource?
</summary>

  *  The Deny effect always wins when multiple statements apply.
</details>

<details>
<summary>
  Question-07: What are the basic differences between IAM Roles and Users?  When should you use each? 
</summary>

  *  The biggest difference between IAM roles and users is how they authenticate.
  *  You authenticate as an IAM user principal using a password or API Access Key credential.
  *  But safely handling credentials is difficult so you should avoid that wherever possible.
  *  AWS provides IAM role principals and you cannot authenticate as a role directly.
  *  Instead people and applications assume that Role via another trusted identity such as an SSO/Identity Provider or an AWS compute service like ec2.
  *  When you assume the role, you get short term credentials in the assume role response or from the compute service’s instance metadata endpoint.
  *  You must prefer using IAM roles so that you’re always using short term credentials.
  *  Using short term credentials minimizes risk of abuse if those credentials are leaked or stolen.
</details>

<details>
<summary>
  Question-08: What are the different types of AWS IAM policies?  Which are most important and why?
</summary>

  * There are 5 types of AWS IAM policies:
    1. *Service Control*
       - A policy attached to an AWS account or organizational unit that establishes guardrails for what services and operations can be used within an account.
       - A service control policy can only deny or limit allowed access; it cannot allow a principal to perform an operation on its own.
    2. *Identity*
       - A policy attached to an IAM principal used by people and applications that allows, or sometimes denies, them to use AWS services and resources.
       - It is the most commonly used policy.
    3. *Permission Boundary*
    4. *Session*
    5. *Resource*
       - A policy attached to a data resource that allows or denies access to a specific data resource such as an S3 bucket.
       - Often used to enable cross-account access to a data resource.
</details>

<details>
<summary>
  Question-09: When an IAM principal makes an AWS API request, how does IAM evaluate policies in order to decide whether or not to allow access? </br>For example, when an application running as a lambda function executes a request to get an object from S3, what IAM policies are evaluated?
</summary>

  *  When a service receives the request, IAM:
     - Authenticates the request came from the principal and is signed by a valid credential
     - Checks Service Control Policies to see if the operation is denied or not-allowed; if not-allowed, evaluation stops and a deny is returned otherwise it proceeds to resource policies
     - If the service supports resource policies and the resource has a resource policy attached, then the service evaluates the policy.
       - If access is denied, evaluation stops and a deny is returned.
       - If access is explicitly allowed, then evaluation stops and the action proceeds.
       - If no statements in the resource policy apply to the principal, then policy evaluation proceeds to the Permission Boundary policy, if attached, or the Identity policies
     - If a Permission Boundary is attached to the principal, that policy is evaluated and:
       - If access is denied or not-allowed, evaluation stops and a deny is returned
       - If access is not-denied, evaluation proceeds to Session policy, if attached, or the Identity policies
     - If a Session Policy is attached (to the role), the policy is evaluated and:
       - If access is denied, evaluation stops and a deny is returned.
       - If access is explicitly allowed, then evaluation stops and the action proceeds.
     - Finally, IAM evaluates the Identity policies attached to the principal.
       - If access is denied, evaluation stops and a deny is returned.
       - If access is explicitly allowed, then evaluation stops and the action proceeds
       - If no statements apply, then evaluation stops and an (implicit) deny is returned
</details>

<details>
<summary>
  Question-10: How do you connect or associate people’s identities in a corporate directory such as Active Directory to IAM roles?
</summary>

  *  Federate corporate identities to AWS IAM with an Identity Provider.
  *  You can either manage your own AWS Identity Provider and Roles or you can connect the corporate directory to AWS SSO and provision permission sets which manage IAM roles from there.
</details>

<details>
<summary>
  Question-11: What are IAM policy conditions and when are some good times to use them?
</summary>

  *  IAM policy conditions are elements that allow policy authors to focus the conditions upon when the statement applies to data provided in the request context.
  *  Some use-cases to use policy conditions are as follows:
     1. The principal was authenticated in a certain way, i.e. with Multi-Factor Authentication or between certain times
     2. The principal belongs to a certain AWS organization or OU, or matches a certain naming convention using wildcards
     3. The target resource belongs to a certain AWS organization or OU
</details>

<details>
<summary>
  Question-12: How do you implement least privilege with AWS IAM?
</summary>

  *  Organizations implement least privilege by provisioning IAM policies that only allow the access that person or application needs to perform its business function.
  *  Conversely, data and other resources should only be accessible by principals who have a need to use the resource, and only for the specific operations that support their job function.
  *  For example, an application that needs to read data from a single S3 bucket supporting the application, should not:
     - be able to read data from other S3 buckets
     - write or delete in that, or any other buckets
</details>

<details>
<summary>
  Question-13: What are the best practices you will follow while creating IAM users? 
</summary>

  *  We should always create individual IAM users for each person needing access to AWS services.
  *  Even if there are many users who require the same level of access, we should create individual IAM users for all of them.
  *  This increases the security posture by providing every user of IAM a unique set of credentials. 
</details>

<details>
<summary>
  Question-14: What are the best practices you must follow while creating any IAM Policy? 
</summary>

  *  When granting permissions, we should follow the least privileged principle.
  *  We should avoid giving users or roles more permissions than they need to accomplish their tasks by following this principle.
  *  For example, if an employee needs only access to a specific EC2 instance, specify the instance in the IAM policy rather than granting an employee access to every instance in your AWS account. 
</details>

<details>
<summary>
  Question-01: 
</summary>
</details>

<details>
<summary>
  Question-01: 
</summary>
</details>

<details>
<summary>
  Question-01: 
</summary>
</details>

<details>
<summary>
  Question-01: 
</summary>
</details>

<details>
<summary>
  Question-01: 
</summary>
</details>

<details>
<summary>
  Question-01: 
</summary>
</details>

<details>
<summary>
  Question-01: 
</summary>
</details>

<details>
<summary>
  Question-01: 
</summary>
</details>

<details>
<summary>
  Question-01: 
</summary>
</details>


## Interview Questions for Intermediate & Experienced
<details>
<summary>
  Question-01: 
</summary>
</details>
