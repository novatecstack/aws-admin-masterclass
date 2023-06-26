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
   
   4. <b>*IAM Policies*</b>
       
