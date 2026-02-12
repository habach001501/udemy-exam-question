export const neal_2 = {
    "count": 25,
    "next": null,
    "previous": null,
    "results": [
        {
            "_class": "assessment",
            "id": 76398902,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>In response to an incident a security engineer locked down an Amazon S3 bucket with a policy that denies access to all users. Subsequently, the engineer attempted to grant access to a forensic analyst. After updating the bucket policy the forensic analyst still cannot access the bucket and is receiving access denied messages.</p><p>What is the most likely explanation for the denial?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>There is an explicit deny in the bucket policy that denies all users. Explicit denies will always override any explicit allow statements so the new update to the policy does not grant access to the forensic analyst</p><p><strong>CORRECT: </strong>\"An explicit deny will always override an explicit allow\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"The Amazon S3 Block Public Access feature is enabled\" is incorrect.</p><p>The forensic analyst is not attempting to access the bucket anonymously but is using an AWS account, so this is not relevant.</p><p><strong>INCORRECT:</strong> \"An IAM user policy may be denying access to the bucket\" is incorrect.</p><p>That could be the case but the bucket policy is incorrect so the most likely issue is the bucket policy, and this would be the first thing to check.</p><p><strong>INCORRECT:</strong> \"S3 is eventually consistent, and the changes are not yet updated\" is incorrect.</p><p>This is not true, S3 is strongly consistent for all operations.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html\">https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html</a></p>",
                "answers": [
                    "<p>The Amazon S3 Block Public Access feature is enabled.</p>",
                    "<p>An IAM user policy may be denying access to the bucket.</p>",
                    "<p>S3 is eventually consistent, and the changes are not yet updated.</p>",
                    "<p>An explicit deny will always override an explicit allow.</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "Domain 4 - Identity and Access Management",
            "question_plain": "In response to an incident a security engineer locked down an Amazon S3 bucket with a policy that denies access to all users. Subsequently, the engineer attempted to grant access to a forensic analyst. After updating the bucket policy the forensic analyst still cannot access the bucket and is receiving access denied messages.What is the most likely explanation for the denial?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398904,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company has thousands of employees that use a single Microsoft Active Directory on-premises identity provider. The company is deploying several dozen AWS accounts and needs to provide its employees with access to the AWS accounts. The solution should maximize scalability and operational efficiency.</p><p>Which solution meets these requirements?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>There are several ways you can federate with existing identity providers and establish trust relationships with existing identity providers. The key to answering this question correctly is to determine which options are workable AND represent the simplest solutions.</p><p>The best option is to use a combination of AWS Control Tower for centralized management of many AWS accounts and AWS SSO for single sign-on leveraging the existing identity provider. This would be by far the simplest solution in terms of scalability and operational efficiency.</p><p><strong>CORRECT: </strong>\"Create a landing zone using AWS Control Tower. Integrate AWS Single Sign-On (SSO) with the company’s existing identity provider. Grant Active Directory users access to accounts and applications\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Implement an AD connector in each AWS account that redirects requests to the on-premises Active Directory. Grant permissions to AWS resources using IAM role-based access control\" is incorrect.</p><p>This would require many AD connectors and complex permissions policies and would not be efficient.</p><p><strong>INCORRECT:</strong> \"Create a centralized account with IAM roles that employees can assume through federation with their existing identity provider. Establish trust relationships between the central account and the resource accounts\" is incorrect.</p><p>Trust relationships are not something you establish between AWS accounts; this is a term used in relation to Active Directory. Roles can be assumed across accounts instead.</p><p><strong>INCORRECT:</strong> \"Within each AWS account, create dedicated IAM users that employees can assume through federation based upon group membership in the existing Active Directory identity provider\" is incorrect.</p><p>This would be highly complex for both administration and usability.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html\">https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html</a></p><p><a href=\"https://aws.amazon.com/controltower/features/\">https://aws.amazon.com/controltower/features/</a></p>",
                "answers": [
                    "<p>Create a centralized account with IAM roles that employees can assume through federation with their existing identity provider. Establish trust relationships between the central account and the resource accounts.</p>",
                    "<p>Within each AWS account, create dedicated IAM users that employees can assume through federation based upon group membership in the existing Active Directory identity provider.</p>",
                    "<p>Create a landing zone using AWS Control Tower. Integrate AWS Single Sign-On (SSO) with the company’s existing identity provider. Grant Active Directory users access to accounts and applications.</p>",
                    "<p>Implement an AD connector in each AWS account that redirects requests to the on-premises Active Directory. Grant permissions to AWS resources using IAM role-based access control.</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "Domain 4 - Identity and Access Management",
            "question_plain": "A company has thousands of employees that use a single Microsoft Active Directory on-premises identity provider. The company is deploying several dozen AWS accounts and needs to provide its employees with access to the AWS accounts. The solution should maximize scalability and operational efficiency.Which solution meets these requirements?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398906,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company requires that all traffic to a specific application is captured and inspected for network and security anomalies. The application runs on several Amazon EC2 instances. The detection software has been installed on an intrusion detection instance running on EC2.</p><p>What should a security engineer do next to route traffic to the intrusion detection instance?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>Traffic Mirroring is an Amazon VPC feature that you can use to copy network traffic from an elastic network interface of Amazon EC2 instances. You can then send the traffic to out-of-band security and monitoring appliances for:</p><ul><li><p>Content inspection</p></li><li><p>Threat monitoring</p></li><li><p>Troubleshooting</p></li></ul><p>The security and monitoring appliances can be deployed as individual instances, or as a fleet of instances behind a Network Load Balancer with a UDP listener. Traffic Mirroring supports filters and packet truncation, so that you only extract the traffic of interest to monitor by using monitoring tools of your choice.</p><img src=\"https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-04_01-45-41-29d5cf5b4c0baf12b0baf99559c4beb6.jpg\"><p><strong>CORRECT: </strong>\"Configure VPC traffic mirroring to send traffic to the intrusion detection EC2 instance using a Network Load Balancer\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Disable source/destination checks on the Amazon EC2 instances and enable VPC Flow Logs on the ENIs\" is incorrect.</p><p>Disabling source/destination checks is required for NAT instances but is not a step required to setup traffic mirroring. VPC Flow Logs can capture log information relating to traffic flows but not the entire packet.</p><p><strong>INCORRECT:</strong> \"Use Amazon Inspector to capture and inspect traffic and trigger an AWS Lambda function to send route anomalous traffic to the EC2 instance\" is incorrect.</p><p>Amazon Inspector does not perform traffic capturing.</p><p><strong>INCORRECT:</strong> \"Configure VPC Flow Logs at the VPC level and write logs to Amazon S3. Use event notifications to trigger an AWS Lambda function to inspect the logs\" is incorrect.</p><p>VPC Flow Logs can capture log information relating to traffic flows but not the entire packet so will not be sufficient for intrusion detection. There is also not solution for sending the traffic to the intrusion detection instance.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html\">https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html</a></p>",
                "answers": [
                    "<p>Disable source/destination checks on the Amazon EC2 instances and enable VPC Flow Logs on the ENIs.</p>",
                    "<p>Configure VPC traffic mirroring to send traffic to the intrusion detection EC2 instance using a Network Load Balancer.</p>",
                    "<p>Use Amazon Inspector to capture and inspect traffic and trigger an AWS Lambda function to send route anomalous traffic to the EC2 instance.</p>",
                    "<p>Configure VPC Flow Logs at the VPC level and write logs to Amazon S3. Use event notifications to trigger an AWS Lambda function to inspect the logs.</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "Domain 3 - Infrastructure Security",
            "question_plain": "A company requires that all traffic to a specific application is captured and inspected for network and security anomalies. The application runs on several Amazon EC2 instances. The detection software has been installed on an intrusion detection instance running on EC2.What should a security engineer do next to route traffic to the intrusion detection instance?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398908,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company has deployed an organization in AWS Organizations with several member accounts. The security team requires that there is at least on AWS CloudTrail trail configured for all existing accounts and any accounts that are created in the future. The logs should be sent to a single centralized Amazon S3 bucket and administrators in member accounts should not be able to modify the configuration.</p><p>Which actions should be taken to accomplish this?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>If you have created an organization in AWS Organizations, you can create a trail that will log all events for all AWS accounts in that organization. This is sometimes referred to as an <em>organization trail</em>.</p><p>You can also choose to edit an existing trail in the management account and apply it to an organization, making it an organization trail. Organization trails log events for the management account and all member accounts in the organization.</p><p>When you create an organization trail, a trail with the name that you give it will be created in every AWS account that belongs to your organization. Users with CloudTrail permissions in member accounts will be able to see this trail when they log into the AWS CloudTrail console from their AWS accounts, or when they run AWS CLI commands such as describe-trail.</p><p>However, users in member accounts will not have sufficient permissions to delete the organization trail, turn logging on or off, change what types of events are logged, or otherwise alter the organization trail in any way.</p><p><strong>CORRECT: </strong>\"Create an organization trail in the management account and specify a central S3 bucket\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Create a new trail in each account and use a cross-account role to log to a central S3 bucket\" is incorrect.</p><p>An organization trail is easier to implement and cannot be edited in member accounts which is more secure.</p><p><strong>INCORRECT:</strong> \"Enable CloudTrail Insights in the management account and run the “aws cloudtrail lookup-events” CLI command\" is incorrect.</p><p>CloudTrail Insights detects unusual API or error rate activity. This is not used for capturing and logging API events.</p><p><strong>INCORRECT:</strong> \"Create a new trail in each account and use an SCP to deny the “cloudtrail:Delete” API action\" is incorrect.</p><p>An organization trail is easier to implement and cannot be edited in member accounts which is more secure.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html\">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html</a></p>",
                "answers": [
                    "<p>Create a new trail in each account and use a cross-account role to log to a central S3 bucket.</p>",
                    "<p>Enable CloudTrail Insights in the management account and run the “aws cloudtrail lookup-events” CLI command.</p>",
                    "<p>Create a new trail in each account and use an SCP to deny the “cloudtrail:Delete” API action.</p>",
                    "<p>Create an organization trail in the management account and specify a central S3 bucket.</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "Domain 2 - Logging and Monitoring",
            "question_plain": "A company has deployed an organization in AWS Organizations with several member accounts. The security team requires that there is at least on AWS CloudTrail trail configured for all existing accounts and any accounts that are created in the future. The logs should be sent to a single centralized Amazon S3 bucket and administrators in member accounts should not be able to modify the configuration.Which actions should be taken to accomplish this?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398910,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A developer who was recently fired by a company has a personal laptop that contains the SSH keys used to access multiple Amazon EC2 instances. The security team need to ensure the developer is unable to access the EC2 instances.</p><p>How can a security engineer protect the running EC2 instances?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>You can change the key pair that is used to access the default system account of your instance by adding a new public key on the instance, or by replacing the public key (deleting the existing public key and adding a new one) on the instance. You might do this for the following reasons:</p><ul><li><p>If a user in your organization requires access to the system user account using a separate key pair, you can add the public key to your instance.</p></li><li><p>If someone has a copy of the private key (.pem file) and you want to prevent them from connecting to your instance (for example, if they've left your organization), you can delete the public key on the instance and replace it with a new one.</p></li></ul><p>The public keys are in the .ssh/authorized_keys file on the instance. To replace the key pair, generate a new key pair using the EC2 console and then paste the public key information into the authorized_keys file. The original key information should also be deleted.</p><p><strong>CORRECT: </strong>\" Connect to each EC2 instance and replace the public key information in the authorized_keys file\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Delete the key pair, create a new key pair, and use the EC2 console to modify the EC2 instances to use the new key pair\" is incorrect.</p><p>You cannot use the EC2 console to change the key pair used by an EC2 instance.</p><p><strong>INCORRECT:</strong> \"Use the modify-instance-attribute API to change the key on any EC2 instance that is using the key\" is incorrect.</p><p>You cannot use this API to modify the key pair used by EC2 instances.</p><p><strong>INCORRECT:</strong> \"Modify the key pair in the AMIs used to launch the EC2 instances and then restart the EC2 instances\" is incorrect.</p><p>Changing an AMI does not modify existing instances that were launched from the AMI.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#replacing-key-pair\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#replacing-key-pair</a></p>",
                "answers": [
                    "<p>Delete the key pair, create a new key pair, and use the EC2 console to modify the EC2 instances to use the new key pair.</p>",
                    "<p>Connect to each EC2 instance and replace the public key information in the authorized_keys file.</p>",
                    "<p>Use the modify-instance-attribute API to change the key on any EC2 instance that is using the key.</p>",
                    "<p>Modify the key pair in the AMIs used to launch the EC2 instances and then restart the EC2 instances.</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "Domain 1 - Incident Response",
            "question_plain": "A developer who was recently fired by a company has a personal laptop that contains the SSH keys used to access multiple Amazon EC2 instances. The security team need to ensure the developer is unable to access the EC2 instances.How can a security engineer protect the running EC2 instances?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398912,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>A bespoke application consisting of three tiers is being deployed in a VPC. You need to create three security groups. You have configured the WebSG (web server) security group and now need to configure the AppSG (application tier) and DBSG (database tier). The application runs on port 1030 and the database runs on 3306.</p><p>Which rules should be created according to security best practice? (Select TWO.)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>With security groups rules are always allow rules. The best practice is to configure the source as another security group which is attached to the EC2 instances that traffic will come from. In this case you need to configure a rule that allows TCP 1030 and configure the source as the web server security group (WebSG).</p><p>This allows traffic from the web servers to reach the application servers. You then need to allow communications on port 3306 (MYSQL/Aurora) from the AppSG security group to enable access to the database from the application servers.</p><p><strong>CORRECT: </strong>\"On the DBSG security group, create a custom TCP rule for TCP 3306 and configure the AppSG security group as the source\" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"On the AppSG security group, create a custom TCP rule for TCP 1030 and configure the WebSG security group as the source\" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"On the AppSG security group, create a custom TCP rule for TCP 1030 and configure the DBSG security group as the source\" is incorrect.</p><p>The app tier will receive traffic from the web tier.</p><p><strong>INCORRECT:</strong> \"On the DBSG security group, create a custom TCP rule for TCP 3306 and configure the WebSG security group as the source\" is incorrect.</p><p>The databases will be receiving traffic from the app servers.</p><p><strong>INCORRECT:</strong> \"On the WebSG security group, create a custom TCP rule for TCP 1030 and configure the AppSG security group as the source\" is incorrect.</p><p>The web service will be receiving traffic from internet, presumably on standard HTTP/HTTPS ports. This web server security group has already been configured.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html\">https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html</a></p>",
                "answers": [
                    "<p>On the AppSG security group, create a custom TCP rule for TCP 1030 and configure the DBSG security group as the source.</p>",
                    "<p>On the AppSG security group, create a custom TCP rule for TCP 1030 and configure the WebSG security group as the source.</p>",
                    "<p>On the DBSG security group, create a custom TCP rule for TCP 3306 and configure the AppSG security group as the source.</p>",
                    "<p>On the DBSG security group, create a custom TCP rule for TCP 3306 and configure the WebSG security group as the source.</p>",
                    "<p>On the WebSG security group, create a custom TCP rule for TCP 1030 and configure the AppSG security group as the source.</p>"
                ]
            },
            "correct_response": [
                "b",
                "c"
            ],
            "section": "Domain 3 - Infrastructure Security",
            "question_plain": "A bespoke application consisting of three tiers is being deployed in a VPC. You need to create three security groups. You have configured the WebSG (web server) security group and now need to configure the AppSG (application tier) and DBSG (database tier). The application runs on port 1030 and the database runs on 3306.Which rules should be created according to security best practice? (Select TWO.)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398914,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>A company has several AWS accounts that use a combination of the following identity provider:</p><p>· Users in AWS Identity and Access Management (IAM)</p><p>· Federated sign-in with Active Directory and IAM</p><p>· Users in Amazon Cognito user pools</p><p>The company security team requires that password policies are configured for all identity providers to require a minimum password length and password complexity.</p><p>Which configuration settings should the company update? (Select THREE.)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>This question simply requires an understanding of where the relevant password policies should be configured:</p><p>· When using federation with Active Directory and AWS IAM the user account is created and managed in Active Directory so the password policy should be configured there.</p><p>· When using AWS IAM to create user accounts you can specify a password policy in IAM.</p><p>· When using Amazon Cognito user pools to create user accounts you can specify a password policy within the user pool.</p><p><strong>CORRECT: </strong>\"Configure a password policy in Active Directory for the federation scenario\" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"Configure an IAM password policy for the IAM user scenario\" is also a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"Configure a password policy in the Amazon Cognito user pool\" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Configure an IAM password policy for the federation scenario\" is incorrect.</p><p>In a federation scenario the user account is not in IAM so the password policy in IAM would not affect the users.</p><p><strong>INCORRECT:</strong> \"Configure a password policy in an Amazon Cognito identity pool\" is incorrect.</p><p>An identity pool is different to a user pool and is used to gain temporary security credentials through IAM roles. A user pool can be configured as an identity provider with user accounts that are created within the pool.</p><p><strong>INCORRECT:</strong> \"Configure a password policy in AWS Organizations for the IAM user scenario\" is incorrect.</p><p>AWS Organizations cannot be used for creating password policies for AWS IAM.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html\">https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html</a></p><p><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html</a></p><p><a href=\"https://aws.amazon.com/blogs/security/aws-federated-authentication-with-active-directory-federation-services-ad-fs/\">https://aws.amazon.com/blogs/security/aws-federated-authentication-with-active-directory-federation-services-ad-fs/</a></p>",
                "answers": [
                    "<p>Configure a password policy in Active Directory for the federation scenario.</p>",
                    "<p>Configure an IAM password policy for the federation scenario.</p>",
                    "<p>Configure an IAM password policy for the IAM user scenario.</p>",
                    "<p>Configure a password policy in the Amazon Cognito user pool.</p>",
                    "<p>Configure a password policy in an Amazon Cognito identity pool.</p>",
                    "<p>Configure a password policy in AWS Organizations for the IAM user scenario.</p>"
                ]
            },
            "correct_response": [
                "a",
                "c",
                "d"
            ],
            "section": "Domain 4 - Identity and Access Management",
            "question_plain": "A company has several AWS accounts that use a combination of the following identity provider:· Users in AWS Identity and Access Management (IAM)· Federated sign-in with Active Directory and IAM· Users in Amazon Cognito user poolsThe company security team requires that password policies are configured for all identity providers to require a minimum password length and password complexity.Which configuration settings should the company update? (Select THREE.)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398916,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A financial services company has an organization in AWS organizations with several member accounts. Amazon S3 buckets are used to store sensitive data backups from common applications within each AWS account. The company needs to restrict users from deleting any S3 buckets or objects across the organization.</p><p>What is the MOST scalable solution that meets these requirements?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>The most scalable solution is to use a service control policy as this will automatically apply to any additional accounts that are added to the organization. The following example SCP prevents users or roles in any affected account from deleting any S3 bucket or objects.</p><img src=\"https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-04_01-53-54-bc2c1b333ee26fbd313e29260e1334b2.jpg\"><p><strong>CORRECT: </strong>\"Service Control Policies (SCPs)\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Permissions boundaries in AWS IAM\" is incorrect.</p><p>Permissions boundaries are implemented within IAM and therefore must be configured in each AWS account within the organization. This is a much less scalable solution.</p><p><strong>INCORRECT:</strong> \"S3 bucket policies\" is incorrect.</p><p>Bucket policies must be configured on every bucket in every account within the organization. This is also a much less scalable solution.</p><p><strong>INCORRECT:</strong> \"S3 bucket ACLs\" is incorrect.</p><p>Bucket ACLs offer only limited permission options and would also not represent a scalable solution.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html</a></p>",
                "answers": [
                    "<p>Permissions boundaries in AWS IAM</p>",
                    "<p>S3 bucket policies</p>",
                    "<p>S3 bucket ACLs</p>",
                    "<p>Service Control Policies (SCPs)</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "Domain 4 - Identity and Access Management",
            "question_plain": "A financial services company has an organization in AWS organizations with several member accounts. Amazon S3 buckets are used to store sensitive data backups from common applications within each AWS account. The company needs to restrict users from deleting any S3 buckets or objects across the organization.What is the MOST scalable solution that meets these requirements?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398918,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A new application requires an AWS KMS key for encrypting sensitive data. The security policy requires that separate keys are used for different AWS services.</p><p>How can the AWS KMS key be constrained to work with only Amazon S3?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>The kms:ViaService condition key can be used in a key policy of an AWS KMS key. This condition limits use of an AWS KMS key to requests from specified AWS services. You can specify one or more services in each kms:ViaService condition key. The operation must be a <em>KMS key resource operation</em>, that is, an operation that is authorized for a particular KMS key.</p><p><strong>CORRECT: </strong>\"Configure the key policy with a kms:ViaService condition key that limits use of the KMS key to the Amazon S3 service name\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Configure the key policy with a <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grantee-principal\">kms:GranteePrincipal</a> condition key that limits use of the KMS key to the Amazon S3 principal ID\" is incorrect.</p><p>This condition controls access to the CreateGrant operation based on the value of the GranteePrincipal parameter in the request.</p><p><strong>INCORRECT:</strong> \"Configure the key policy with a <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias\">kms:RequestAlias</a> condition key that limits use of the KMS key to requests that use a specific alias\" is incorrect.</p><p>You can use this condition key to allow an operation only when the request uses a particular alias to identify the KMS key.</p><p><strong>INCORRECT:</strong> \"Configure the key policy with a <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account\">kms:CallerAccount</a> condition key that limits use of the KMS key to identities in the specific AWS account\" is incorrect.</p><p>You can use this condition key to allow or deny access to all identities (IAM users and roles) in an AWS account. This does not assist with limiting use of the KMS key to specific AWS services.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html\">https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html</a></p>",
                "answers": [
                    "<p>Configure the key policy with a kms:ViaService condition key that limits use of the KMS key to the Amazon S3 service name.</p>",
                    "<p>Configure the key policy with a kms:GranteePrincipal condition key that limits use of the KMS key to the Amazon S3 principal ID.</p>",
                    "<p>Configure the key policy with a kms:RequestAlias condition key that limits use of the KMS key to requests that use a specific alias.</p>",
                    "<p>Configure the key policy with a kms:CallerAccount condition key that limits use of the KMS key to identities in the specific AWS account.</p>"
                ]
            },
            "correct_response": [
                "a"
            ],
            "section": "Domain 5 - Data Protection",
            "question_plain": "A new application requires an AWS KMS key for encrypting sensitive data. The security policy requires that separate keys are used for different AWS services.How can the AWS KMS key be constrained to work with only Amazon S3?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398920,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company runs an application behind an Application Load Balancer (ALB). A security engineer has noticed many suspicious HTTP requests hitting the ALB. There is an Amazon CloudFront distribution in front of the ALB. Users are reporting performance problems.</p><p>A security engineer discovers that the website is receiving a high rate of unwanted requests to the CloudFront distribution originating from a series of source IP addresses.</p><p>How should the security engineer address this problem with the LEAST effort?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>AWS WAF is a web application firewall that helps protect web applications from attacks by allowing you to configure rules that allow, block, or monitor (count) web requests based on conditions that you define. These conditions include IP addresses, HTTP headers, HTTP body, URI strings, SQL injection and cross-site scripting.</p><p>Rate-based Rules are a new type of Rule that can be configured in AWS WAF. This feature allows you to specify the number of web requests that are allowed by a client IP in a trailing, continuously updated, 5-minute period. If an IP address breaches the configured limit, new requests will be blocked until the request rate falls below the configured threshold.</p><p><strong>CORRECT: </strong>\"Create an AWS WAF rate-based rule to block this traffic when it exceeds a defined threshold\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Create an Amazon CloudFront distribution to cache content and automatically block access to the suspicious source IP addresses\" is incorrect.</p><p>CloudFront cannot automatically detect malicious traffic and block access to the source IP addresses.</p><p><strong>INCORRECT:</strong> \"Use Amazon GuardDuty to analyze network activity, detect anomalies, and trigger a Lambda function to prevent access\" is incorrect.</p><p>GuardDuty can analyze logs and network flows and trigger a function to perform remediation. However, this does not represent the option that requires the least effort as you would need to write the Lambda function.</p><p><strong>INCORRECT:</strong> \"Use AWS Lambda to analyze a VPC Flow Log, detect the suspicious traffic, and block the IP address in the security groups\" is incorrect.</p><p>This is not the option that requires the least effort (must write a Lambda function), and you cannot block IP addresses in security groups (they do not support deny rules).<strong>References:</strong></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/waf/faq/\">https://aws.amazon.com/waf/faq/</a></p>",
                "answers": [
                    "<p>Create an Amazon CloudFront distribution to cache content and automatically block access to the suspicious source IP addresses.</p>",
                    "<p>Use Amazon GuardDuty to analyze network activity, detect anomalies, and trigger a Lambda function to prevent access.</p>",
                    "<p>Use AWS Lambda to analyze a VPC Flow Log, detect the suspicious traffic, and block the IP address in the security groups.</p>",
                    "<p>Create an AWS WAF rate-based rule to block this traffic when it exceeds a defined threshold.</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "",
            "question_plain": "A company runs an application behind an Application Load Balancer (ALB). A security engineer has noticed many suspicious HTTP requests hitting the ALB. There is an Amazon CloudFront distribution in front of the ALB. Users are reporting performance problems.A security engineer discovers that the website is receiving a high rate of unwanted requests to the CloudFront distribution originating from a series of source IP addresses.How should the security engineer address this problem with the LEAST effort?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398922,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>A developer is deploying a website hosted in an Amazon S3 bucket. An Amazon CloudFront distribution will be deployed in front of the S3 bucket to cache the content. The developer requires that users may only access the website using the CloudFront distribution and should not be able to access the website directly by using the S3 URL.</p><p>Which configurations should a security engineer make to support these requirements? (Select TWO.)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>To restrict access to content that you serve from Amazon S3 buckets you can create a special CloudFront user called an origin access identity (OAI) and associate it with your distribution.</p><p>You must then configure your S3 bucket permissions so that CloudFront can use the OAI to access the files in your bucket and serve them to your users. This also ensures that users can’t use a direct URL to the S3 bucket to access its contents.</p><p>The diagram below depicts this scenario.</p><img src=\"https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-04_01-58-12-6e9e8198a3998a91bd83de6a835f942f.jpg\"><p><strong>CORRECT: </strong>\"Create an origin access identity (OAI) and associate it with the CloudFront distribution\" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"Configure the S3 bucket permissions so that only the origin access identity can access the bucket contents\" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Implement a condition in the S3 bucket policy that limits access to \"Principal\": \"cloudfront.amazonaws.com\" is incorrect.</p><p>An OAI should be used and referenced in the policy condition rather than the principal for the AWS service.</p><p><strong>INCORRECT:</strong> \"Configure a gateway endpoint for the S3 bucket and attach the CloudFront distribution to the VPC\" is incorrect.</p><p>You cannot attach a CloudFront distribution to a VPC, so this does not work.</p><p><strong>INCORRECT:</strong> \"Configure CloudFront to add a custom HTTP header to requests for the S3 bucket and configure the bucket to only accept requests with the custom header\" is incorrect.</p><p>This technique should be used with elastic load balancers and does not work with S3.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/restrict-access-to-load-balancer.html\">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/restrict-access-to-load-balancer.html</a></p>",
                "answers": [
                    "<p>Implement a condition in the S3 bucket policy that limits access to \"Principal\": \"cloudfront.amazonaws.com\".</p>",
                    "<p>Create an origin access identity (OAI) and associate it with the CloudFront distribution.</p>",
                    "<p>Configure a gateway endpoint for the S3 bucket and attach the CloudFront distribution to the VPC.</p>",
                    "<p>Configure the S3 bucket permissions so that only the origin access identity can access the bucket contents.</p>",
                    "<p>Configure CloudFront to add a custom HTTP header to requests for the S3 bucket and configure the bucket to only accept requests with the custom header.</p>"
                ]
            },
            "correct_response": [
                "b",
                "d"
            ],
            "section": "Domain 3 - Infrastructure Security",
            "question_plain": "A developer is deploying a website hosted in an Amazon S3 bucket. An Amazon CloudFront distribution will be deployed in front of the S3 bucket to cache the content. The developer requires that users may only access the website using the CloudFront distribution and should not be able to access the website directly by using the S3 URL.Which configurations should a security engineer make to support these requirements? (Select TWO.)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398924,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company manages all access to Amazon S3 buckets using identity-based policies. A security engineer needs to receive an alert if any user adds a bucket policy to any Amazon S3 bucket.</p><p>Which approach meets the requirements MOST efficiently?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>Amazon EventBridge is a serverless event bus for building event-driven applications. In this scenario the EventBridge rule can be configured to monitor API calls being recorded in AWS CloudTrail that relate to policies being applied to an Amazon S3 bucket. EventBridge can then generate a notification using Amazon SNS.</p><p>A diagram depicting this solution is provided below and includes an example of the event pattern that would be used in the EventBridge rule:</p><img src=\"https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-04_02-01-28-74393a32d90c744c87cea57686675d94.jpg\"><p><strong>CORRECT: </strong>\"Create an Amazon EventBridge rule uses the “AWS API Call via CloudTrail” event source and the “s3:PutBucketPolicy” event pattern. Generate an alert using Amazon SNS\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Create an Amazon EventBridge rule uses the “AWS CloudWatch Alarm State Change” event source and the “s3:PutBucketPolicy” event pattern. Generate an alert using Amazon SNS\" is incorrect.</p><p>The incorrect event source is used in this answer. The event source should be “AWS API Call via CloudTrail”.</p><p><strong>INCORRECT:</strong> \"Set up a rule in AWS Config to trigger based on Amazon S3 bucket change events. Trigger an AWS Lambda function to process the events. Generate an alert using Amazon SNS\" is incorrect.</p><p>This is not the most efficient solution as an AWS Lambda function is not required to process the events.</p><p><strong>INCORRECT:</strong> \"Use Amazon Inspector to monitor for changes to Amazon S3 bucket policies. Generate an alert using Amazon SNS\" is incorrect.</p><p>Inspector does not monitor for changes to S3 bucket policy configurations.</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/blogs/compute/using-dynamic-amazon-s3-event-handling-with-amazon-eventbridge/\">https://aws.amazon.com/blogs/compute/using-dynamic-amazon-s3-event-handling-with-amazon-eventbridge/</a></p>",
                "answers": [
                    "<p>Set up a rule in AWS Config to trigger based on Amazon S3 bucket change events. Trigger an AWS Lambda function to process the events. Generate an alert using Amazon SNS.</p>",
                    "<p>Create an Amazon EventBridge rule uses the “AWS API Call via CloudTrail” event source and the “s3:PutBucketPolicy” event pattern. Generate an alert using Amazon SNS.</p>",
                    "<p>Use Amazon Inspector to monitor for changes to Amazon S3 bucket policies. Generate an alert using Amazon SNS.</p>",
                    "<p>Create an Amazon EventBridge rule uses the “AWS CloudWatch Alarm State Change” event source and the “s3:PutBucketPolicy” event pattern. Generate an alert using Amazon SNS.</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "Domain 2 - Logging and Monitoring",
            "question_plain": "A company manages all access to Amazon S3 buckets using identity-based policies. A security engineer needs to receive an alert if any user adds a bucket policy to any Amazon S3 bucket.Which approach meets the requirements MOST efficiently?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398926,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company is extending a secure development environment from an on-premises data center into AWS. They have secured the VPC by removing the Internet Gateway and configuring security groups and network ACLs. An AWS Direct Connect connection has been established between the data center and the Amazon VPC.</p><p>What else needs to be done to add encryption in transit?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>AWS Direct Connect (DX) does not offer encryption in transit. To encrypt data that is sent over a DX connection you can configure an AWS Virtual Private Network (VPN). To configure a VPN you must first create a virtual private gateway (VGW) which is the AWS side of the VPN connection.</p><p>You can run the VPN across the Direct Connect connection to encrypt all data that traverses the Direct Connect link. This combination provides an IPsec-encrypted private connection that also reduces network costs, increases bandwidth throughput, and provides a more consistent network experience than internet-based VPN connections.</p><p><strong>CORRECT: </strong>\"Setup a Virtual Private Gateway (VGW)\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Add an AWS KMS key to the Direct Connect configuration\" is incorrect.</p><p>You cannot enable encryption through AWS Direct Connect.</p><p><strong>INCORRECT:</strong> \"Enable IPSec encryption on the Direct Connect connection\" is incorrect.</p><p>There is no option to enable IPSec encryption on the Direct Connect connection.</p><p><strong>INCORRECT:</strong> \"Configure an AWS Direct Connect Gateway\" is incorrect.</p><p>An AWS Direct Connect Gateway is used to connect to VPCs across multiple AWS regions. It is not involved with encryption.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-plus-vpn-network-to-amazon.html\">https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-plus-vpn-network-to-amazon.html</a></p>",
                "answers": [
                    "<p>Add an AWS KMS key to the Direct Connect configuration.</p>",
                    "<p>Enable IPSec encryption on the Direct Connect connection.</p>",
                    "<p>Configure an AWS Direct Connect Gateway.</p>",
                    "<p>Setup a Virtual Private Gateway (VGW).</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "Domain 3 - Infrastructure Security",
            "question_plain": "A company is extending a secure development environment from an on-premises data center into AWS. They have secured the VPC by removing the Internet Gateway and configuring security groups and network ACLs. An AWS Direct Connect connection has been established between the data center and the Amazon VPC.What else needs to be done to add encryption in transit?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398928,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>A security engineer is attempting to setup automatic notifications that alert administrators about any changes that are made to an Amazon S3 bucket. The engineer has configured AWS Config and created an SNS topic. Changes have been made to the S3 bucket, but the SNS notifications have not been sent.</p><p>Which combination of steps should the security engineer take to resolve the issue? (Select THREE.)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>This could be a permissions issue so the security engineer must ensure the correct permissions are configured to allow AWS Config to assume the role assigned to the Config service, write to the S3 bucket, and publish an SNS notification.</p><p>The trust policy on the IAM role assigned to Config must allow “config.amazonaws.com” to assume the role. The role must also have PutObject and PutObjectAcl permissions to the S3 bucket.</p><p>For Amazon SNS the access policy must allow “config.amazonaws.com” to publish notifications.</p><p><strong>CORRECT: </strong>\"Configure the trust policy on the IAM role AWS Config uses to allow “config.amazonaws.com” to assume the role\" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"Configure the role policy on the IAM role AWS Config uses to allow write access to the Amazon S3 bucket\" is also a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"Configure the access policy for the Amazon SNS topic to allow “sns:publish” access to “config.amazonaws.com\" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Configure the Amazon S3 bucket ACLs to allow AWS Config to record any changes made to the S3 bucket\" is incorrect.</p><p>Bucket ACLs are not used for granting access to AWS Config.</p><p><strong>INCORRECT:</strong> \"Configure the access policy for the Amazon SNS topic to allow “sns:write” access to “config.amazonaws.com\" is incorrect.</p><p>The SNS:Publish API action should be specified as this will allow Config to publish notifications using SNS.</p><p><strong>INCORRECT:</strong> \"Configure the trust policy on the IAM role AWS Config uses to allow “s3.amazonaws.com” to assume the role\" is incorrect.</p><p>S3 does not assume the role, Config does. Therefore, the principal specified in this answer is incorrect.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html\">https://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html</a></p><p><a href=\"https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html#required-permissions-snstopic-in-another-account\">https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html#required-permissions-snstopic-in-another-account</a></p>",
                "answers": [
                    "<p>Configure the Amazon S3 bucket ACLs to allow AWS Config to record any changes made to the S3 bucket.</p>",
                    "<p>Configure the trust policy on the IAM role AWS Config uses to allow “config.amazonaws.com” to assume the role.</p>",
                    "<p>Configure the role policy on the IAM role AWS Config uses to allow write access to the Amazon S3 bucket.</p>",
                    "<p>Configure the access policy for the Amazon SNS topic to allow “sns:publish” access to “config.amazonaws.com”.</p>",
                    "<p>Configure the access policy for the Amazon SNS topic to allow “sns:write” access to “config.amazonaws.com”.</p>",
                    "<p>Configure the trust policy on the IAM role AWS Config uses to allow “s3.amazonaws.com” to assume the role.</p>"
                ]
            },
            "correct_response": [
                "b",
                "c",
                "d"
            ],
            "section": "Domain 4 - Identity and Access Management",
            "question_plain": "A security engineer is attempting to setup automatic notifications that alert administrators about any changes that are made to an Amazon S3 bucket. The engineer has configured AWS Config and created an SNS topic. Changes have been made to the S3 bucket, but the SNS notifications have not been sent.Which combination of steps should the security engineer take to resolve the issue? (Select THREE.)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398930,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company has four private subnets within a VPC. Two of the subnets are used for running database instances and the other two are used for application instances. Separate route tables are used for the database and application subnets. A NAT gateway is defined in the route tables to provide internet connectivity for the subnets.</p><p>The security team requires that the database subnets should not have internet access. A security engineer must remove internet connectivity for the database subnets without affecting the application subnets.</p><p>Which approach should the security engineer take?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>As seen in the diagram below, the NAT gateway is deployed in a public subnet and the route tables of private subnets are updated with a route pointing to the NAT gateway for all traffic for which another more specific route is not defined.</p><p>Therefore, the only change that needs to be made is to remove the route table entry for the NAT gateway from the route table of the private subnets in which the database instances are running.</p><img src=\"https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-04_02-09-04-025c259cad29b0f883baadd67aac5394.jpg\"><p><strong>CORRECT: </strong>\"Modify the route table of the database subnets to remove the default route to the NAT gateway\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Remove the existing NAT gateway. Create a new NAT gateway that only the application subnets can use\" is incorrect.</p><p>There is no need to do this as only the route table needs to be updated.</p><p><strong>INCORRECT:</strong> \"Configure the database subnets’ inbound network ACL to deny traffic from the security group ID of the NAT gateway\" is incorrect.</p><p>You cannot deny access based on a security group ID within a network ACL.</p><p><strong>INCORRECT:</strong> \"Configure the route table of the NAT gateway to deny connections to the database subnets\" is incorrect.</p><p>You cannot configure deny rules in a route table.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\">https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html</a></p>",
                "answers": [
                    "<p>Remove the existing NAT gateway. Create a new NAT gateway that only the application subnets can use.</p>",
                    "<p>Configure the database subnets’ inbound network ACL to deny traffic from the security group ID of the NAT gateway.</p>",
                    "<p>Configure the route table of the NAT gateway to deny connections to the database subnets.</p>",
                    "<p>Modify the route table of the database subnets to remove the default route to the NAT gateway.</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "Domain 3 - Infrastructure Security",
            "question_plain": "A company has four private subnets within a VPC. Two of the subnets are used for running database instances and the other two are used for application instances. Separate route tables are used for the database and application subnets. A NAT gateway is defined in the route tables to provide internet connectivity for the subnets.The security team requires that the database subnets should not have internet access. A security engineer must remove internet connectivity for the database subnets without affecting the application subnets.Which approach should the security engineer take?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398932,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A DevOps engineer has deployed several custom-built images provided by the development team using Amazon Elastic Container Service (ECS) with the Fargate launch type. The engineer now needs to aggregate the logs from all the containers into a pre-existing CloudWatch log group.</p><p>Which solution will satisfy these requirements?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>The Fargate launch type supports the awslogs log driver. You need to specify the awslogs-group (CloudWatch log group name) and awslogs-region (AWS Region of the log group) parameters in the LogConfiguration property in the task definition for Amazon ECS.</p><p><strong>CORRECT: </strong>\"Enable the awslogs log driver by including awslogs-group and awslogs-region parameters in the LogConfiguration property\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Install and configure the CloudWatch agent on the running container instances\" is incorrect.</p><p>The CloudWatch agent cannot be installed directly on the containers running on AWS Fargate. Instead, the awslogs log driver needs to be used.</p><p><strong>INCORRECT:</strong> \"Implement Fluent Bit and FluentD in a DaemonSet configuration to direct logs to Amazon CloudWatch Logs\" is incorrect.</p><p>While Fluent Bit and FluentD are often used for log aggregation in Kubernetes environments, Amazon ECS with Fargate doesn't natively support this type of configuration. Instead, you would use the awslogs driver in your task definition.</p><p><strong>INCORRECT:</strong> \"Define an IAM policy that encompasses the logs:CreateLogGroup action and assign this policy to the running container instances\" is incorrect.</p><p>Just providing an IAM policy with the logs:CreateLogGroup action to the running container instances would not be enough. The task definition needs to be configured to use the awslogs log driver to send logs to CloudWatch Logs.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html\">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html</a></p>",
                "answers": [
                    "<p>Enable the awslogs log driver by including awslogs-group and awslogs-region parameters in the LogConfiguration property.</p>",
                    "<p>Install and configure the CloudWatch agent on the running container instances.</p>",
                    "<p>Implement Fluent Bit and FluentD in a DaemonSet configuration to direct logs to Amazon CloudWatch Logs.</p>",
                    "<p>Define an IAM policy that encompasses the logs:CreateLogGroup action and assign this policy to the running container instances.</p>"
                ]
            },
            "correct_response": [
                "a"
            ],
            "section": "Domain 6: Management and Security Governance",
            "question_plain": "A DevOps engineer has deployed several custom-built images provided by the development team using Amazon Elastic Container Service (ECS) with the Fargate launch type. The engineer now needs to aggregate the logs from all the containers into a pre-existing CloudWatch log group.Which solution will satisfy these requirements?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398934,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>A financial institution uses Amazon API Gateway to provide REST APIs for their mobile application. A data analyst wants to study the usage patterns of the APIs without having to sift through log files.</p><p>Which pair of actions will fulfill these requirements with minimal effort? (Select TWO.)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>Enabling access logging for the API stage in question allows for the collection of detailed API Gateway logs, which would aid in the analysis of API usage patterns.</p><p>Amazon CloudWatch Logs Insights enables you to explore, analyze, and visualize your logs instantly. This is a good solution for analyzing API usage data as it doesn't require parsing log files manually.</p><p><strong>CORRECT: </strong>\"Enable access logging for the appropriate API stage\" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"Use Amazon CloudWatch Logs Insights for analyzing API usage data\" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Set up an AWS CloudTrail trail destination for API Gateway events. Filter based on the userIdentity, userAgent, and sourceIPAddress fields\" is incorrect.</p><p>AWS CloudTrail primarily focuses on auditing and tracking API calls across AWS services for governance, compliance, operational auditing, and risk auditing. For this specific use case, it's not the most efficient option.</p><p><strong>INCORRECT:</strong> \"Specify an Amazon S3 destination for API Gateway logs. Utilize Amazon Athena to execute queries and analyze the API usage data\" is incorrect.</p><p>This involves extra steps - configuring an S3 bucket for log storage and then running Athena queries on those logs - which does not meet the criterion of least effort.</p><p><strong>INCORRECT:</strong> \"Activate the Enable Detailed CloudWatch Metrics option on the required API stage\" is incorrect.</p><p>While enabling detailed CloudWatch Metrics for the API stage would provide additional data, it wouldn't provide the usage pattern insights required without additional analysis or tools.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html\">https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html</a></p>",
                "answers": [
                    "<p>Enable access logging for the appropriate API stage.</p>",
                    "<p>Set up an AWS CloudTrail trail destination for API Gateway events. Filter based on the userIdentity, userAgent, and sourceIPAddress fields.</p>",
                    "<p>Specify an Amazon S3 destination for API Gateway logs. Utilize Amazon Athena to execute queries and analyze the API usage data.</p>",
                    "<p>Use Amazon CloudWatch Logs Insights for analyzing API usage data.</p>",
                    "<p>Activate the Enable Detailed CloudWatch Metrics option on the required API stage.</p>"
                ]
            },
            "correct_response": [
                "a",
                "d"
            ],
            "section": "Domain 6: Management and Security Governance",
            "question_plain": "A financial institution uses Amazon API Gateway to provide REST APIs for their mobile application. A data analyst wants to study the usage patterns of the APIs without having to sift through log files.Which pair of actions will fulfill these requirements with minimal effort? (Select TWO.)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398936,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A financial firm receives a warning from the AWS Trust and Safety team about a potential security threat. An IAM access key linked to an IT administrator seems to have been compromised. This key is employed in an automated process that uses AWS Lambda functions to launch AWS Elastic Beanstalk environments.</p><p>The firm's security engineer is tasked with addressing this security issue, preventing further use of the exposed access key, and bolstering security practices.</p><p>Which of the following steps would be the most appropriate in this scenario?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>This solution aligns with AWS's recommended security practices. Instead of static access keys, it employs IAM roles, which provide a secure way to grant permissions to AWS services. Responding directly to the AWS Trust and Safety team with the remediation steps taken demonstrates proactive action towards resolving the issue.</p><p><strong>CORRECT: </strong>\"Disable or delete the compromised IAM access key. Stop using static IAM access keys and instead, create a new IAM role for the Lambda automation process. Assign this role to the AWS Lambda functions. Respond to the AWS Trust and Safety team detailing the remediation actions\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Track down the exposed IAM access key and deactivate or remove it. Establish new access keys for the Lambda automation process and integrate them into the system. In the AWS account associated with the exposed key, create a new support case in AWS Support detailing the remediation measures\" is incorrect.</p><p>Although it addresses the immediate issue of the exposed key, it doesn't adhere to best practices as it generates new static access keys, which could also potentially be compromised.</p><p><strong>INCORRECT:</strong> \"Find the exposed IAM access key and remove the associated IAM user. Generate a new access key, store it in AWS Systems Manager Parameter Store, and encrypt it using an AWS KMS customer-managed key. Modify the AWS Lambda functions to fetch the access key from Parameter Store during execution. Log a new support case with AWS Support providing the details of the remediation steps\" is incorrect.</p><p>While this option uses AWS Systems Manager Parameter Store for secret management, it unnecessarily deletes the IAM user. Also, it involves creating a new static access key, which does not align with AWS's best security practices.</p><p><strong>INCORRECT:</strong> \"Deactivate or delete the compromised IAM access key. Generate a new access key and save it as an environment variable within the configuration settings of the automation system's Lambda functions. Respond to the AWS Trust and Safety team detailing the remediation actions taken\" is incorrect.</p><p>Even though this option addresses the immediate issue of the exposed key, storing access keys as environment variables in Lambda functions is not a secure practice.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html\">https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html</a></p>",
                "answers": [
                    "<p>Track down the exposed IAM access key and deactivate or remove it. Establish new access keys for the Lambda automation process and integrate them into the system. In the AWS account associated with the exposed key, create a new support case in AWS Support detailing the remediation measures.</p>",
                    "<p>Disable or delete the compromised IAM access key. Stop using static IAM access keys and instead, create a new IAM role for the Lambda automation process. Assign this role to the AWS Lambda functions. Respond to the AWS Trust and Safety team detailing the remediation actions.</p>",
                    "<p>Find the exposed IAM access key and remove the associated IAM user. Generate a new access key, store it in AWS Systems Manager Parameter Store, and encrypt it using an AWS KMS customer-managed key. Modify the AWS Lambda functions to fetch the access key from Parameter Store during execution. Log a new support case with AWS Support providing the details of the remediation steps.</p>",
                    "<p>Deactivate or delete the compromised IAM access key. Generate a new access key and save it as an environment variable within the configuration settings of the automation system's Lambda functions. Respond to the AWS Trust and Safety team detailing the remediation actions taken.</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "Domain 6: Management and Security Governance",
            "question_plain": "A financial firm receives a warning from the AWS Trust and Safety team about a potential security threat. An IAM access key linked to an IT administrator seems to have been compromised. This key is employed in an automated process that uses AWS Lambda functions to launch AWS Elastic Beanstalk environments.The firm's security engineer is tasked with addressing this security issue, preventing further use of the exposed access key, and bolstering security practices.Which of the following steps would be the most appropriate in this scenario?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398938,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A healthcare organization is using Amazon EC2 instances to host an application that stores sensitive patient records. In compliance with healthcare regulations, the organization must restrict access to these records. A system engineer needs to establish a secure connection to the EC2 instances without opening any inbound ports, managing SSH keys, or maintaining bastion hosts.</p><p>The organization also requires that all session activity logs are monitored, stored, and accessible in an encrypted format.</p><p>Which solution would satisfy these requirements?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>AWS Systems Manager Session Manager provides secure and auditable instance management without the need for bastion hosts, SSH, or open inbound ports. The organization can configure Amazon CloudWatch logging for the session manager sessions and select the option to enforce encryption.</p><img src=\"https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2024-02-06_21-43-52-3868acd6e6da32e2bd8e717298b6b9d5.png\"><p><strong>CORRECT: </strong>\"Use AWS Systems Manager Session Manager to access the EC2 instances. Set up Amazon CloudWatch Logs for session logging. Choose the option to upload session logs and ensure that only encrypted CloudWatch Logs log groups are allowed\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Use Amazon Inspector to access the EC2 instances. Set up Amazon CloudWatch Logs for session logging. Choose the option to upload session logs and ensure that only encrypted CloudWatch Logs log groups are allowed\" is incorrect.</p><p>Amazon Inspector is a security assessment service. It can't be used for connecting to EC2 instances.</p><p><strong>INCORRECT:</strong> \"Use Amazon GuardDuty to access the EC2 instances. Set up Amazon CloudWatch Logs for session logging. Choose the option to upload session logs and ensure that only encrypted CloudWatch Logs log groups are allowed\" is incorrect.</p><p>Amazon GuardDuty is a threat detection service. It can't be used for connecting to EC2 instances.</p><p><strong>INCORRECT:</strong> \"Create an EC2 Instance Connect Endpoint for private connectivity and then use Amazon EC2 Instance Connect to access the EC2 instances. Configure logging for the instances using Amazon CloudWatch Logs with permanent retention\" is incorrect.</p><p>EC2 instance connect uses SSH/RDP protocols for instance management so this option does not meet the requirements. The use of an interface endpoint simply allows managing the instances without the need for public IP addresses but does not affect the protocols used.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html\">https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html</a></p>",
                "answers": [
                    "<p>Use Amazon Inspector to access the EC2 instances. Set up Amazon CloudWatch Logs for session logging. Choose the option to upload session logs and ensure that only encrypted CloudWatch Logs log groups are allowed.</p>",
                    "<p>Use Amazon GuardDuty to access the EC2 instances. Set up Amazon CloudWatch Logs for session logging. Choose the option to upload session logs and ensure that only encrypted CloudWatch Logs log groups are allowed.</p>",
                    "<p>Create an EC2 Instance Connect Endpoint for private connectivity and then use Amazon EC2 Instance Connect to access the EC2 instances. Configure logging for the instances using Amazon CloudWatch Logs with permanent retention.</p>",
                    "<p>Use AWS Systems Manager Session Manager to access the EC2 instances. Set up Amazon CloudWatch Logs for session logging. Choose the option to upload session logs and select the option to enforce encryption.</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "Domain 6: Management and Security Governance",
            "question_plain": "A healthcare organization is using Amazon EC2 instances to host an application that stores sensitive patient records. In compliance with healthcare regulations, the organization must restrict access to these records. A system engineer needs to establish a secure connection to the EC2 instances without opening any inbound ports, managing SSH keys, or maintaining bastion hosts.The organization also requires that all session activity logs are monitored, stored, and accessible in an encrypted format.Which solution would satisfy these requirements?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398940,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>A fintech company has an application that relies on AWS Systems Manager Parameter Store for managing secure string parameters. This is done using the standard tier and an AWS Key Management Service (AWS KMS) custom-managed key for encryption and decryption.</p><p>Upon attempting to modify a parameter, the team has been encountering a series of error messages.</p><p>What might be the causes of these error messages? (Select TWO.)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>The application must have the kms:Encrypt permission for the custom-managed key. Without this permission, error messages will arise when trying to use the key. If the state of the customer-managed key specified in the application is 'Disabled', the application won't be able to use it, leading to error messages.</p><p><strong>CORRECT: </strong>\"The application lacks the kms:Encrypt permission for the custom-managed key\" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"The state of the customer-managed key specified within the application is set to 'Disabled'\" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"The custom-managed key is already encrypting another secure string parameter\" is incorrect.</p><p>A customer-managed key can be used to encrypt more than one secure string parameter. This would not lead to the errors.</p><p><strong>INCORRECT:</strong> \"A customer-managed key cannot be used for encryption with a standard tier secure string parameter\" is incorrect.</p><p>A customer-managed key can be used for encryption with standard tier secure string parameters. Therefore, this wouldn't cause the error messages.</p><p><strong>INCORRECT:</strong> \"In the application, the specified customer-managed key uses a key alias as opposed to a key ID\" is incorrect.</p><p>A key alias can be used interchangeably with a key ID. This wouldn't result in the mentioned error messages.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html\">https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html</a></p>",
                "answers": [
                    "<p>The application lacks the kms:Encrypt permission for the custom-managed key.</p>",
                    "<p>The custom-managed key is already encrypting another secure string parameter.</p>",
                    "<p>A customer-managed key cannot be used for encryption with a standard tier secure string parameter.</p>",
                    "<p>The state of the customer-managed key specified within the application is set to 'Disabled'.</p>",
                    "<p>In the application, the specified customer-managed key uses a key alias as opposed to a key ID.</p>"
                ]
            },
            "correct_response": [
                "a",
                "d"
            ],
            "section": "Domain 6: Management and Security Governance",
            "question_plain": "A fintech company has an application that relies on AWS Systems Manager Parameter Store for managing secure string parameters. This is done using the standard tier and an AWS Key Management Service (AWS KMS) custom-managed key for encryption and decryption.Upon attempting to modify a parameter, the team has been encountering a series of error messages.What might be the causes of these error messages? (Select TWO.)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398942,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company is archiving sensitive data to Amazon S3 Glacier. A security engineer has created a new vault lock policy for 1 TB of data and called the initiate-vault-lock operation 8 hours ago. When reviewing the policy the security engineer noticed and error that should be corrected.</p><p>What is the MOST cost-effective method of correcting the error?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>The initiate-vault-lock operation initiates the vault locking process by doing the following:</p><ul><li><p>Installing a vault lock policy on the specified vault.</p></li><li><p>Setting the lock state of vault lock to InProgress .</p></li><li><p>Returning a lock ID, which is used to complete the vault locking process.</p></li></ul><p>You must complete the vault locking process within 24 hours after the vault lock enters the InProgress state. After the 24-hour window ends, the lock ID expires, the vault automatically exits the InProgress state, and the vault lock policy is removed from the vault.</p><p>You call CompleteVaultLock to complete the vault locking process by setting the state of the vault lock to Locked. You can abort the vault locking process by calling AbortVaultLock. When the vault lock is in the InProgress state you must call AbortVaultLock before you can initiate a new vault lock policy.</p><p>Therefore, the security engineer will need to call the AbortVaultLock operation before updating the policy and can then call the operation to lock the vault again.</p><p><br></p><p><strong>CORRECT: </strong>\"Call the AbortVaultLock operation. Update the policy. Call the initiate-vault-lock operation again\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"The policy cannot be updated after the initiate-vault-lock operation has entered the InProgress state\" is incorrect.</p><p>This is not true as explained above.</p><p><strong>INCORRECT:</strong> \"Modify the policy and then call the initiate-vault-lock operation to apply the updated policy\" is incorrect.</p><p>You cannot modify the policy without first calling the AbortVaultLock operation.</p><p><strong>INCORRECT:</strong> \"Copy the data to a new vault and call the initiate-vault-lock operation. Delete the old vault\" is incorrect.</p><p>There is no need to copy data to a new vault and this will be more costly.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/cli/latest/reference/glacier/initiate-vault-lock.html\">https://docs.aws.amazon.com/cli/latest/reference/glacier/initiate-vault-lock.html</a></p>",
                "answers": [
                    "<p>The policy cannot be updated after the initiate-vault-lock operation has entered the InProgress state.</p>",
                    "<p>Modify the policy and then call the initiate-vault-lock operation to apply the updated policy.1. Copy the data to a new vault and call the initiate-vault-lock operation. Delete the old vault.</p>",
                    "<p>Copy the data to a new vault and call the initiate-vault-lock operation. Delete the old vault.</p>",
                    "<p>Call the AbortVaultLock operation. Update the policy. Call the initiate-vault-lock operation again.</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "Domain 5 - Data Protection",
            "question_plain": "A company is archiving sensitive data to Amazon S3 Glacier. A security engineer has created a new vault lock policy for 1 TB of data and called the initiate-vault-lock operation 8 hours ago. When reviewing the policy the security engineer noticed and error that should be corrected.What is the MOST cost-effective method of correcting the error?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398944,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>A security team has requested that all existing and new Amazon RDS databases are encrypted at rest using AWS Key Management Service (KMS) encryption keys. A security engineer must identify which RDS databases are currently unencrypted and devise a plan for enabling encryption.</p><p>Which combination of steps should the security engineer take to accomplish this? (Select TWO.)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>With AWS Config, you can continuously monitor and record configuration changes of your AWS resources. There are several predefined managed rules you can use. The rds-storage-encrypted managed rule checks whether storage encryption is enabled for your RDS DB instances. You can then configure a notification based on the result using Amazon SNS.</p><p>Once the unencrypted databases have been discovered the next task is to enable encryption. The key fact to remember here is that you cannot alter the encryption state of an RDS database after you have deployed it. You also cannot create encrypted replicas from unencrypted instances.</p><p>The only solution is to create a snapshot (which will be unencrypted) and subsequently create an encrypted copy of the snapshot. You can then create a new database instance from the encrypted snapshot. The new database will be encrypted and will have a new endpoint address.</p><p><strong>CORRECT: </strong>\"Create a snapshot of unencrypted databases. Copy the unencrypted snapshots to created encrypted snapshots. Restore the databases from the encrypted snapshots\" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"Use AWS Config to detect any existing and new unencrypted databases. Configure an Amazon SNS notification to alert the security team\" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Enable encryption for the Amazon RDS database instances by adding an AWS KMS key to the storage settings\" is incorrect.</p><p>You cannot enable encryption after creation of the database, and this includes for any instances created from the database such as replicas and multi-AZ standby instances.</p><p><strong>INCORRECT:</strong> \"Create an encrypted read replica of unencrypted RDS database instances. Promote the replicas to become primary and terminate the unencrypted database instances\" is incorrect.</p><p>You cannot enable encryption after creation of the database, and this includes for any instances created from the database such as replicas and multi-AZ standby instances.</p><p><strong>INCORRECT:</strong> \"Use AWS System Manager State Manager to detect the RDS database encryption status. Create an Amazon SNS notification to alert the security team\" is incorrect.</p><p>AWS Systems Manager State Manager is used to manage the configuration on EC2 instances and on-premises servers. It does not detect the status of RDS encryption.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html</a></p><p><a href=\"https://docs.aws.amazon.com/config/latest/developerguide/notifications-for-AWS-Config.html\">https://docs.aws.amazon.com/config/latest/developerguide/notifications-for-AWS-Config.html</a></p><p><a href=\"https://docs.aws.amazon.com/config/latest/developerguide/rds-storage-encrypted.html\">https://docs.aws.amazon.com/config/latest/developerguide/rds-storage-encrypted.html</a></p>",
                "answers": [
                    "<p>Enable encryption for the Amazon RDS database instances by adding an AWS KMS key to the storage settings.</p>",
                    "<p>Create a snapshot of unencrypted databases. Copy the unencrypted snapshots to created encrypted snapshots. Restore the databases from the encrypted snapshots.</p>",
                    "<p>Use AWS Config to detect any existing and new unencrypted databases. Configure an Amazon SNS notification to alert the security team.</p>",
                    "<p>Create an encrypted read replica of unencrypted RDS database instances. Promote the replicas to become primary and terminate the unencrypted database instances.</p>",
                    "<p>Use AWS System Manager State Manager to detect the RDS database encryption status. Create an Amazon SNS notification to alert the security team.</p>"
                ]
            },
            "correct_response": [
                "b",
                "c"
            ],
            "section": "Domain 5 - Data Protection",
            "question_plain": "A security team has requested that all existing and new Amazon RDS databases are encrypted at rest using AWS Key Management Service (KMS) encryption keys. A security engineer must identify which RDS databases are currently unencrypted and devise a plan for enabling encryption.Which combination of steps should the security engineer take to accomplish this? (Select TWO.)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398946,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>A static website runs on an Amazon EC2 instance. The security engineer has been asked to suggest improvements to mitigate the risk of DDoS attacks.</p><p>Which of the following may assist with this goal? (Select TWO.)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>There are several ways to mitigate DDoS attacks including using AWS WAF, AWS Shield, and Amazon Route 53. For this scenario the static website can easily be migrated to an Amazon S3 bucket and placed behind a CloudFront distribution. With CloudFront you can attach an AWS WAF Web ACL and also get the advantages of AWS Shield Standard.</p><p><strong>CORRECT: </strong>\"Migrate the static content to an Amazon S3 bucket and create an Amazon CloudFront distribution\" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>\"Use the AWS Web Application Firewall (WAF) service to inspect and manage web requests\" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Place a Network Load Balancer (NLB) in front of the Amazon EC2 instance and create a TCP listener\" is incorrect.</p><p>With the Network Load Balancer any TCP SYN or UDP traffic that reaches the load balancer on a valid listener will be routed to your targets, not absorbed. Therefore, this is not the best choice of load balancer, an Application Load Balancer would be better as it blocks many common DDOS attacks, such as SYN floods or UDP reflection attacks.</p><p><strong>INCORRECT:</strong> \"Use AWS X-Ray to inspect and analyze traffic going to the Amazon EC2 instances to identify latency\" is incorrect.</p><p>X-Ray is used for tracing and debugging applications and does not assist with mitigating DDoS attacks.</p><p><strong>INCORRECT:</strong> \"Update the security group attached to the Amazon EC2 instance to block inbound traffic\" is incorrect.</p><p>Security groups do not support deny rules so are not useful for blocking addresses that are involved with a DDoS attack. A network ACL would be more useful here.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/cloudfront-features.html\">https://docs.aws.amazon.com/waf/latest/developerguide/cloudfront-features.html</a></p><p><a href=\"https://aws.amazon.com/blogs/security/how-to-protect-dynamic-web-applications-against-ddos-attacks-by-using-amazon-cloudfront-and-amazon-route-53/\">https://aws.amazon.com/blogs/security/how-to-protect-dynamic-web-applications-against-ddos-attacks-by-using-amazon-cloudfront-and-amazon-route-53/</a></p>",
                "answers": [
                    "<p>Place a Network Load Balancer (NLB) in front of the Amazon EC2 instance and create a TCP listener.</p>",
                    "<p>Migrate the static content to an Amazon S3 bucket and create an Amazon CloudFront distribution.</p>",
                    "<p>Use AWS X-Ray to inspect and analyze traffic going to the Amazon EC2 instances to identify latency.</p>",
                    "<p>Use the AWS Web Application Firewall (WAF) service to inspect and manage web requests.</p>",
                    "<p>Update the security group attached to the Amazon EC2 instance to block inbound traffic.</p>"
                ]
            },
            "correct_response": [
                "b",
                "d"
            ],
            "section": "Domain 3 - Infrastructure Security",
            "question_plain": "A static website runs on an Amazon EC2 instance. The security engineer has been asked to suggest improvements to mitigate the risk of DDoS attacks.Which of the following may assist with this goal? (Select TWO.)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398948,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company requires data encryption for sensitive data. The security has requested that the solution must allow cryptographic erasure of all resources protected by the encryption key within 15 minutes.</p><p>Which AWS Key Management Service (AWS KMS) key solution will allow the security engineer to meet these requirements?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>Note that the term CMK which may appear in the exam has been replaced with the term KMS key though the concepts are identical.</p><p>Cryptographic erasure is when the encryption material used to encrypt the data is deleted. This results in the data being unrecoverable as it cannot be decrypted. A security team may use this technique if the encryption keys used to encrypt data have been compromised. Of course, you would want to ensure that the key materials are backed up offline so you can perform a restore of the data.</p><p>In this case the only option available that will meet the requirements is to import key material into an AWS KMS key. You cannot immediately delete a KMS key; you must schedule it for deletion with a waiting period of a minimum of 7 days. With imported key material you can speed up the process by deleting the key material which renders the KMS key unusable. This effect is immediate.</p><p><strong>CORRECT: </strong>\"Use imported key material with an AWS KMS key\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Use an AWS KMS customer managed KMS key\" is incorrect.</p><p>The default is to use AWS generated key material and in this case you must schedule the deletion of the key with a minimum waiting period of 7 days.</p><p><strong>INCORRECT:</strong> \"Use an AWS managed KMS key\" is incorrect.</p><p>You cannot manage or delete these keys.</p><p><strong>INCORRECT:</strong> \"Use an AWS owned KMS key\" is incorrect.</p><p>You have no ability to manage or even use AWS owned KMS keys.</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-delete-key-material.html\">https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-delete-key-material.html</a></p>",
                "answers": [
                    "<p>Use imported key material with an AWS KMS key.</p>",
                    "<p>Use an AWS owned KMS key.</p>",
                    "<p>Use an AWS managed KMS key.</p>",
                    "<p>Use an AWS KMS customer managed KMS key.</p>"
                ]
            },
            "correct_response": [
                "a"
            ],
            "section": "Domain 5 - Data Protection",
            "question_plain": "A company requires data encryption for sensitive data. The security has requested that the solution must allow cryptographic erasure of all resources protected by the encryption key within 15 minutes.Which AWS Key Management Service (AWS KMS) key solution will allow the security engineer to meet these requirements?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 76398950,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company has multiple accounts that are managed using AWS Organizations. A security engineer must setup a shared S3 bucket in a central account and grant read-only access for all users in any account within the AWS Organization. There should be no public access to the S3 bucket data.</p><p>Which parameters should the security engineer use to accomplish this goal MOST efficiently?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>You can use a condition key, aws:PrincipalOrgID, in policies to require all principals accessing the resource to be from an account (including the master account) in the organization. To set this up for this scenario you must specify '*' as the principal, to allow any user access, and then restrict only to users within the AWS Organization using the condition key. The aws:PrincipalOrgId condition key should be used with the organization ID value specified.</p><p>The example policy below could be used for this scenario (allows s3:GetObject only):</p><img src=\"https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-07_16-24-26-62807ca108ffe0c329c2c6687828ecac.jpg\"><p><strong>CORRECT: </strong>\"Specify '*' as the principal and aws:PrincipalOrgld as a condition\" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> \"Specify aws:PrincipalOrgld as the principal with the organization ID value\" is incorrect.</p><p>The value mentioned is used in a condition, not in the principal.</p><p><strong>INCORRECT:</strong> \"Specify all account numbers within an array as the principal\" is incorrect.</p><p>This is less efficient as you must specify all account numbers and you must come back and add account numbers if new accounts are added to the organization.</p><p><strong>INCORRECT:</strong> \"Specify the organization's master account as the principal\" is incorrect.</p><p>This is the not the correct method and will not grant access for users from other accounts within the organization.</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/blogs/security/control-access-to-aws-resources-by-using-the-aws-organization-of-iam-principals/\">https://aws.amazon.com/blogs/security/control-access-to-aws-resources-by-using-the-aws-organization-of-iam-principals/</a></p>",
                "answers": [
                    "<p>1. Specify all account numbers within an array as the principal.</p>",
                    "<p>1. Specify '*' as the principal and aws:PrincipalOrgld as a condition.</p>",
                    "<p>1. Specify the organization's master account as the principal.</p>",
                    "<p>Specify aws:PrincipalOrgld as the principal with the organization ID value.</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "Domain 4 - Identity and Access Management",
            "question_plain": "A company has multiple accounts that are managed using AWS Organizations. A security engineer must setup a shared S3 bucket in a central account and grant read-only access for all users in any account within the AWS Organization. There should be no public access to the S3 bucket data.Which parameters should the security engineer use to accomplish this goal MOST efficiently?",
            "related_lectures": []
        }
    ]
};
