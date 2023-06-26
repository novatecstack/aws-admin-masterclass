# AWS Identity and Access Management Services

## Overview of AWS IAM service

## Global vs Regional services

## AWS IAM service elements:
   1. <b>*IAM Users*</b>
      - Represents the person or application that uses it to interact with AWS.
      - In order to identity any IAM user, you can use user alias, ARN or UserID (unique identifier).
      - You may access AWS services using IAM user credntials (for physical users) or Access Keys (for programmatic calls).
      - Different types of IAM Users
        - Root User
        - IAM User (Team Members)
        - Federated Users
        - Application
        - Cross-Account User
           
   2. <b>*IAM User Groups*</b>
      - An IAM user group is a collection of IAM users.
      - User groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users.
      - A user group can contain many users, and a user can belong to multiple user groups.
      - User groups can't be nested; they can contain only users, not other user groups.
      - There is no default user group that automatically includes all users in the AWS account.
      - The number and size of IAM resources in an AWS account are limited.

   3. <b>*IAM Roles*</b>
      - 
   
   4. <b>*IAM Policies*</b>
      - IAM Policies are set of permissions that you can assign to IAM Identities (Users, Groups & Roles)
      - As a best practice, you must follow the principle of least privilege: *don’t give more permissions than a user needs*. 
      - IAM Policies are JSON documents with following attributes: <b>*Version, Id, Statement, Sid, Effect, Principal, Action, NotAction, Resource, NotResource, Condition*</b>
      - IAM has two types of IAM policies based on who has created it:
        1. *AWS Managed Polcies (Built-in Policies)*:
        2. *Customer Managed Policies (Custom Policies)*:
      - IAM Policies are of three types based on the way identities gets authorized:
        1. *Identity-based policies (User, Group, Role)*
        2. *Resource-based policies (S3, SQS)*
        3. *AWS Organization SCPs  (Service Control Policies)*

    




