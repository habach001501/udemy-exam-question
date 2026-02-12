export const neal_6 = {
  count: 25,
  next: null,
  previous: null,
  results: [
    {
      _class: "assessment",
      id: 73686854,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has deployed an application on Amazon EC2 instances with an Amazon RDS database. A security architect needs a secure solution for storing the database credentials and enabling automatic rotation on a regular basis. The credentials must be encrypted both in transit and at rest.</p><p>Which solution meets these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p><em>Rotation</em> is the process of periodically updating a secret. When you rotate a secret, you update the credentials in both the secret and the database or service. In Secrets Manager, you can set up automatic rotation for your secrets. Applications that retrieve the secret from Secrets Manager automatically get the new credentials after rotation.</p><p>Secrets Manager provides complete rotation templates for Amazon RDS, Amazon DocumentDB, and Amazon Redshift secrets. You can also enable encryption in transit and at rest for keys stored in AWS Secrets Manager.</p><p>The slide below provides more information on AWS Secrets Manager:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_04-35-26-a125b1dcc185a051d727086679ca6c06.jpg"><p><strong>CORRECT: </strong>"Use AWS Secrets Manager and configure automatic rotation of the credentials" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS Systems Manager Parameter Store and configure automatic rotation of the credentials" is incorrect.</p><p>Systems Manager Parameter Store can be used for storing encrypted secrets, but it does not have a feature for automatic secret rotation.</p><p><strong>INCORRECT:</strong> "Use AWS Key Management Server (KMS) and rotate the keys using an AWS Lambda function" is incorrect.</p><p>AWS KMS cannot be used for storing secrets, it is used for storing encryption keys.</p><p><strong>INCORRECT:</strong> "Use IAM access keys in and rotate the access keys using an AWS Lambda function" is incorrect.</p><p>IAM access keys cannot be used for authenticating to an Amazon RDS database.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_turn-on-for-db.html">https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_turn-on-for-db.html</a></p>',
        answers: [
          "<p>Use AWS Key Management Server (KMS) and rotate the keys using an AWS Lambda function.</p>",
          "<p>Use AWS Systems Manager Parameter Store and configure automatic rotation of the credentials.</p>",
          "<p>Use IAM access keys in and rotate the access keys using an AWS Lambda function.</p>",
          "<p>Use AWS Secrets Manager and configure automatic rotation of the credentials.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company has deployed an application on Amazon EC2 instances with an Amazon RDS database. A security architect needs a secure solution for storing the database credentials and enabling automatic rotation on a regular basis. The credentials must be encrypted both in transit and at rest.Which solution meets these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686856,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>The security department in a company requires automatic discovery of any security groups that allow unrestricted inbound traffic on port 22 (SSH). The security administrators should be notified of any violations</p><p>Which solution meets these requirements with the MOST operational efficiency?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The AWS Config managed rule “restricted-ssh” checks if the incoming SSH traffic for the security groups is accessible. The rule is COMPLIANT when IP addresses of the incoming SSH traffic in the security groups are restricted (CIDR other than 0.0.0.0/0).</p><p>With AWS Config you can configure automatic remediations such as publishing a notification to an Amazon SNS topic. In this case if the rule is NON_COMPLIANT it means Config has detected a security group with unrestricted access on port 22. In this case it will trigger a notification.</p><p><strong>CORRECT: </strong>"Configure the restricted-ssh managed rule in AWS Config. When the rule is NON_COMPLIANT, use the AWS Config remediation feature to publish a notification to an Amazon SNS topic" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use Amazon GuardDuty to automatically detect threats. Integrate GuardDuty with Lambda for automated actions. Configure the Lambda function to identify security group assessment findings and send a notification to an Amazon SNS topic" is incorrect.</p><p>GuardDuty detects threats and account compromise. It does not check security group configuration for unrestricted access.</p><p><strong>INCORRECT:</strong> "Configure VPC Flow Logs for the VPC and specify a CloudWatch Logs group. Subscribe a Lambda function to the log group that parses the log entries, detects successful connections on port 22, and then sends notification to an Amazon SNS topic" is incorrect.</p><p>This is a complex solution that is not necessary as the Config managed rule restricted-ssh can perform the same function with less operational overhead.</p><p><strong>INCORRECT:</strong> "Install the SSM agent on all EC2 instances and run an Amazon Inspector network reachability assessment on a daily schedule. Create an AWS Lambda function that runs on a schedule, parses the assessment report, and sends a notification to an Amazon SNS topic" is incorrect.</p><p>Configuring a function to parse an Inspector report would be complicated and, as with the previous answer, unnecessary as there is a much better solution available.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/config/latest/developerguide/restricted-ssh.html">https://docs.aws.amazon.com/config/latest/developerguide/restricted-ssh.html</a></p>',
        answers: [
          "<p>Use Amazon GuardDuty to automatically detect threats. Integrate GuardDuty with Lambda for automated actions. Configure the Lambda function to identify security group assessment findings and send a notification to an Amazon SNS topic.</p>",
          "<p>Configure the restricted-ssh managed rule in AWS Config. When the rule is NON_COMPLIANT, use the AWS Config remediation feature to publish a notification to an Amazon SNS topic.</p>",
          "<p>Configure VPC Flow Logs for the VPC and specify a CloudWatch Logs group. Subscribe a Lambda function to the log group that parses the log entries, detects successful connections on port 22, and then sends notification to an Amazon SNS topic.</p>",
          "<p>Install the SSM agent on all EC2 instances and run an Amazon Inspector network reachability assessment on a daily schedule. Create an AWS Lambda function that runs on a schedule, parses the assessment report, and sends a notification to an Amazon SNS topic.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "The security department in a company requires automatic discovery of any security groups that allow unrestricted inbound traffic on port 22 (SSH). The security administrators should be notified of any violationsWhich solution meets these requirements with the MOST operational efficiency?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686858,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer is deploying a proxy server solution in an Amazon VPC. The engineer has deployed proxy software on multiple EC2 instances across Availability Zones. Route tables have been configured to forward traffic to the proxy instances. The proxy instance security groups have been configured to allow ports 80 and 443 inbound and outbound.</p><p>Upon testing the solution the engineer has discovered that the proxy instances are not forwarding traffic to the internet.</p><p>What else needs to be done for this solution to work?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Each EC2 instance performs source/destination checks by default. This means that the instance must be the source or destination of any traffic it sends or receives.</p><p>However, a NAT instance must be able to send and receive traffic when the source or destination is not itself. Therefore, you must disable source/destination checks on the NAT instance.</p><p>You can disable the SrcDestCheck attribute for a NAT instance that\'s either running or stopped using the console or the command line.</p><p><strong>CORRECT: </strong>"Disable source/destination checks on the EC2 proxy instances" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a new DHCP options set pointing to the proxy server" is incorrect.</p><p>Proxy settings are not distributed using DHCP. Within a VPC you point your instances to proxy servers by updating the route table which has already been done.</p><p><strong>INCORRECT:</strong> "Allow outbound traffic on all ports to any internet address" is incorrect.</p><p>Only ports 80 and 443 are needed outbound for proxying traffic to internet web addresses.</p><p><strong>INCORRECT:</strong> "Create an Amazon Route 53 Resolver endpoint for proxy traffic" is incorrect.</p><p>Route 53 Resolver is a DNS service and is not used for configuring a web proxy.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html">https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html</a></p>',
        answers: [
          "<p>Disable source/destination checks on the EC2 proxy instances.</p>",
          "<p>Create a new DHCP options set pointing to the proxy server.</p>",
          "<p>Allow outbound traffic on all ports to any internet address.</p>",
          "<p>Create an Amazon Route 53 Resolver endpoint for proxy traffic.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A security engineer is deploying a proxy server solution in an Amazon VPC. The engineer has deployed proxy software on multiple EC2 instances across Availability Zones. Route tables have been configured to forward traffic to the proxy instances. The proxy instance security groups have been configured to allow ports 80 and 443 inbound and outbound.Upon testing the solution the engineer has discovered that the proxy instances are not forwarding traffic to the internet.What else needs to be done for this solution to work?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686860,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security team has mandated that only approved Amazon Machine Images (AMIs) can be used for launching Amazon EC2 instances. The security team requires a method of automatically validating compliance with the new mandate.</p><p>Which solution can the security team use to find unapproved AMIs for new and existing Amazon EC2 instances?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS Config rule can check that running EC2 instances are using approved Amazon Machine Images, or AMIs. You can specify a list of approved AMIs by ID or provide a tag to specify the list of AMI IDs.</p><p>The AWS Config rule “approved_ami_by_id” checks if running instances are using specified AMIs. You must specify a list of approved AMI IDs. Running instances with AMIs that are not on this list are NON_COMPLIANT.</p><p><strong>CORRECT: </strong>"Deploy the AWS Config rule “approved_ami_by_id” and specify the approved AMI IDs" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a user data script that checks the AMI ID in instance metadata for compliance" is incorrect.</p><p>This would only work for new instances that are launched and would not help identify existing instances that are not compliant.</p><p><strong>INCORRECT:</strong> "Create an Amazon CloudWatch custom metric that reports the AMI ID of EC2 instances" is incorrect.</p><p>You cannot create a metric that reports the AMI ID of an EC2 instance.</p><p><strong>INCORRECT:</strong> "Deploy the AWS Config rule “ebs-optimized-instance” and specify the approved AMI ARNs" is incorrect.</p><p>This rule checks if running instances are using specified AMIs.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/devops/aws-config-checking-for-compliance-with-new-managed-rule-options/">https://aws.amazon.com/blogs/devops/aws-config-checking-for-compliance-with-new-managed-rule-options/</a></p><p><a href="https://docs.aws.amazon.com/config/latest/developerguide/approved-amis-by-id.html">https://docs.aws.amazon.com/config/latest/developerguide/approved-amis-by-id.html</a></p>',
        answers: [
          "<p>Deploy the AWS Config rule “approved_ami_by_id” and specify the approved AMI IDs.</p>",
          "<p>Create a user data script that checks the AMI ID in instance metadata for compliance.</p>",
          "<p>Create an Amazon CloudWatch custom metric that reports the AMI ID of EC2 instances.</p>",
          "<p>Deploy the AWS Config rule “ebs-optimized-instance” and specify the approved AMI ARNs.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A security team has mandated that only approved Amazon Machine Images (AMIs) can be used for launching Amazon EC2 instances. The security team requires a method of automatically validating compliance with the new mandate.Which solution can the security team use to find unapproved AMIs for new and existing Amazon EC2 instances?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686862,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer must configure AWS WAF to store logs in a central location for later analysis.</p><p>What is the MOST operationally efficient solution that meets this requirement?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>With AWS WAF you can enable logging to get detailed information about traffic that is analyzed by your web ACL. Logged information includes the time that AWS WAF received a web request from your AWS resource, detailed information about the request, and details about the rules that the request matched.</p><p>You can send your logs to an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. In this case the most operationally efficient solution is to send the logs directly to Amazon S3.</p><p><strong>CORRECT: </strong>"Configure AWS WAF to send its log files directly to an Amazon S3 bucket for later analysis" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Configure AWS WAF to send its log files directly to Amazon Kinesis Data Analytics for analysis" is incorrect.</p><p>You cannot send log files from AWS WAF to Kinesis Data Analytics.</p><p><strong>INCORRECT:</strong> "Configure AWS WAF to send its log files to an Amazon CloudWatch Logs log group and then export to an Amazon S3 bucket" is incorrect.</p><p>This is less operationally efficient and more expensive as CloudWatch Logs is being used in addition to S3 rather than sending directly to Amazon S3.</p><p><strong>INCORRECT:</strong> "Configure AWS WAF to send its log files to Amazon Kinesis Data Firehose and then to stream the logs to an Amazon S3 bucket" is incorrect.</p><p>This is less operationally efficient and more expensive as Kinesis Data Firehose is being used in addition to S3 rather than sending directly to Amazon S3.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">https://docs.aws.amazon.com/waf/latest/developerguide/logging.html</a></p>',
        answers: [
          "<p>Configure AWS WAF to send its log files to an Amazon CloudWatch Logs log group and then export to an Amazon S3 bucket.</p>",
          "<p>Configure AWS WAF to send its log files directly to Amazon Kinesis Data Analytics for analysis.</p>",
          "<p>Configure AWS WAF to send its log files directly to an Amazon S3 bucket for later analysis.</p>",
          "<p>Configure AWS WAF to send its log files to Amazon Kinesis Data Firehose and then to stream the logs to an Amazon S3 bucket.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A security engineer must configure AWS WAF to store logs in a central location for later analysis.What is the MOST operationally efficient solution that meets this requirement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686864,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company runs an ecommerce website and is concerned about the risk of DDoS attacks. The company needs to identify methods to minimize the downtime associated with any attacks that might happen in the future.</p><p>Which steps would help achieve this? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>AWS Shield Advanced offers protection against attacks targeting your applications running on Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Amazon Route 53 resources.</p><p>For customers on Business or Enterprise support plans, AWS Shield Advanced gives you 24/7 access to the SRT, which can be engaged before, during, or after a DDoS attack. The SRT will help triage the incidents, identify root causes, and apply mitigations on your behalf. The SRT has deep expertise in rapidly responding to and mitigating DDoS attacks across AWS customers.</p><p>With AWS WAF you can create rule statements in your web ACL with criteria that matches the unusual behavior. It is recommended to first use the rule action Count instead of Block. After you\'re comfortable that the new rule is identifying the correct requests, you can modify your rule to block the requests.</p><p><strong>CORRECT: </strong>"Subscribe to AWS Shield Advanced and reach out to AWS Support in the event of an attack" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Create rule statements in AWS WAF web ACLs to block matching requests relating to the attack traffic" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Enable Amazon GuardDuty to automatically monitor for malicious activity and block unauthorized access" is incorrect.</p><p>GuardDuty monitors your AWS accounts and workloads for malicious activity and delivers detailed security findings for visibility and remediation. However, this is not the best service for protecting against DDoS attack. AWS Shield and AWS WAF should be used for this purpose.</p><p><strong>INCORRECT:</strong> "Use VPC Flow Logs to monitor network traffic and an AWS Config auto-remediation to block the attack traffic" is incorrect.</p><p>You can capture network activity within your VPC using Flow Logs. However, AWS Config is a configuration compliance service and though it does offer auto-remediation, this is not suitable for blocking DDoS attack traffic.</p><p><strong>INCORRECT:</strong> "Use Amazon CloudWatch Logs to capture network traffic and AWS Lambda to block unauthorized access by updating Network ACLs" is incorrect.</p><p>CloudWatch Logs does not capture network traffic.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-responding.html">https://docs.aws.amazon.com/waf/latest/developerguide/ddos-responding.html</a></p><p><a href="https://aws.amazon.com/shield/features/">https://aws.amazon.com/shield/features/</a></p>',
        answers: [
          "<p>Enable Amazon GuardDuty to automatically monitor for malicious activity and block unauthorized access.</p>",
          "<p>Subscribe to AWS Shield Advanced and reach out to AWS Support in the event of an attack.</p>",
          "<p>Create rule statements in AWS WAF web ACLs to block matching requests relating to the attack traffic.</p>",
          "<p>Use VPC Flow Logs to monitor network traffic and an AWS Config auto-remediation to block the attack traffic.</p>",
          "<p>Use Amazon CloudWatch Logs to capture network traffic and AWS Lambda to block unauthorized access by updating Network ACLs.</p>",
        ],
      },
      correct_response: ["b", "c"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company runs an ecommerce website and is concerned about the risk of DDoS attacks. The company needs to identify methods to minimize the downtime associated with any attacks that might happen in the future.Which steps would help achieve this? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686866,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A developer is attempting to access an Amazon S3 bucket in a member account in AWS Organizations. The developer is logged in to the account with user credentials and has received an access denied error with no bucket listed. The developer should have read-only access to all buckets in the account.</p><p>A security engineer has reviewed the permissions and found that the developer's IAM user has been granted read-only access to all S3 buckets in the account.</p><p>Which additional steps should the security engineer take to troubleshoot the issue? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>A service control policy (SCP) may have been implemented that limits the API actions that are available for Amazon S3. This will apply to all users in the account regardless of the permissions they have assigned to their user account.</p><p>Another potential cause of the issue is that the permissions boundary for the user limits the S3 API actions available to the user. A permissions boundary is an advanced feature for using a managed policy to set the maximum permissions that an identity-based policy can grant to an IAM entity. An entity\'s permissions boundary allows it to perform only the actions that are allowed by both its identity-based policies and its permissions boundaries.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_04-52-50-aa8d1a16e85159c7aec866ab7b5ffbaf.JPG"><p><strong>CORRECT: </strong>"Check the SCPs set at the organizational units (OUs)" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Check for the permissions boundaries set for the IAM user" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Check if an appropriate IAM role is attached to the IAM user" is incorrect.</p><p>The question states that the user is logged in with a user account so is not assuming a role.</p><p><strong>INCORRECT:</strong> "Check the bucket policies for all S3 buckets" is incorrect.</p><p>The user has not been granted access to any buckets, and the error does not list access denied to any specific bucket. Therefore, it is more likely that the user is not granted the API action to list the buckets.</p><p><strong>INCORRECT:</strong> "Check the ACLs for all S3 buckets" is incorrect.</p><p>With a bucket ACL the grantee is an AWS account or one of the predefined groups. With an ACL you can grant read/write at the bucket level, but list is restricted to the object level so would not apply to the bucket itself. The user has been unable to list any buckets in this case, so an ACL is unlikely to be the cause.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html</a></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html</a></p>',
        answers: [
          "<p>Check the bucket policies for all S3 buckets.</p>",
          "<p>Check the ACLs for all S3 buckets.</p>",
          "<p>Check the SCPs set at the organizational units (OUs).</p>",
          "<p>Check for the permissions boundaries set for the IAM user.</p>",
          "<p>Check if an appropriate IAM role is attached to the IAM user.</p>",
        ],
      },
      correct_response: ["c", "d"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A developer is attempting to access an Amazon S3 bucket in a member account in AWS Organizations. The developer is logged in to the account with user credentials and has received an access denied error with no bucket listed. The developer should have read-only access to all buckets in the account.A security engineer has reviewed the permissions and found that the developer's IAM user has been granted read-only access to all S3 buckets in the account.Which additional steps should the security engineer take to troubleshoot the issue? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686868,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company hosts video files for a website in an Amazon S3 bucket that is configured as an origin for an Amazon CloudFront distribution. The company was recently notified that the videos were being accessed from unauthorized countries.</p><p>Which actions should a security engineer take the limit the distribution of the video files? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>You can use <em>geo restriction</em>, also known as <em>geo blocking</em>, to prevent users in specific geographic locations from accessing content that you\'re distributing through a CloudFront distribution. The CloudFront geo restriction feature can be used to restrict access to all the files that are associated with a distribution and to restrict access at the country level.</p><p>To ensure users in the restricted countries cannot bypass CloudFront and go straight to the Amazon S3 bucket, an origin access identity can be configured in the CloudFront distribution. This identity is then granted access in the S3 bucket policy, and all other connections are denied.</p><p><strong>CORRECT: </strong>"Create an origin access identity (OAI) for the CloudFront distribution and update the S3 bucket policy to restrict access to the OAI" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Update the distribution settings in CloudFront and configure restrictions based on the geography of the request" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Configure the Restrict Viewer Access option in CloudFront and specify a deny list of unauthorized countries" is incorrect.</p><p>This feature is used to configure signed URLs and signed cookies.</p><p><strong>INCORRECT:</strong> "Update the S3 bucket policy with condition statements that deny access based on the source IP addresses of users" is incorrect.</p><p>This would be hard to manage as the addresses may change and be hard to identify. The users should always go through the CloudFront distribution as well.</p><p><strong>INCORRECT:</strong> "Configure a query string whitelist in CloudFront and specify a list of countries that should be denied access using query string parameters" is incorrect.</p><p>This is not the correct usage for the query string whitelist feature which is used for determining the query string parameters that you want CloudFront to use as a basis for caching.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html</a></p>',
        answers: [
          "<p>Configure the Restrict Viewer Access option in CloudFront and specify a deny list of unauthorized countries.</p>",
          "<p>Update the S3 bucket policy with condition statements that deny access based on the source IP addresses of users.</p>",
          "<p>Create an origin access identity (OAI) for the CloudFront distribution and update the S3 bucket policy to restrict access to the OAI.</p>",
          "<p>Update the distribution settings in CloudFront and configure restrictions based on the geography of the request.</p>",
          "<p>Configure a query string whitelist in CloudFront and specify a list of countries that should be denied access using query string parameters.</p>",
        ],
      },
      correct_response: ["c", "d"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company hosts video files for a website in an Amazon S3 bucket that is configured as an origin for an Amazon CloudFront distribution. The company was recently notified that the videos were being accessed from unauthorized countries.Which actions should a security engineer take the limit the distribution of the video files? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686870,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has started to deploy resources to the AWS cloud. Initial resources have been deployed in the US West (Oregon) Region and an AWS CloudTrail trail has been created to record API activity in a bucket in the same Region.</p><p>The security team requires that API activity is captured from all Regions and stored in a central Region.</p><p>What is the SIMPLEST way to meet these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>You can configure CloudTrail to deliver log files from multiple regions to a single S3 bucket for a single account. For example, you have a trail in the US West (Oregon) Region that is configured to deliver log files to an S3 bucket.</p><p>When you change an existing single-region trail to log all regions, CloudTrail logs events from all regions in your account. CloudTrail delivers log files to the same S3 bucket.</p><p>If CloudTrail has permissions to write to an S3 bucket, the bucket for a multi-region trail does not have to be in the trail\'s home region.</p><p><strong>CORRECT: </strong>"Change the existing single-region trail to log all regions and capture API activity in a single central Amazon S3 bucket" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create individual trails for each region and capture API activity in a single central Amazon S3 bucket" is incorrect.</p><p>The simplest solution is to use a single trail configured for all regions.</p><p><strong>INCORRECT:</strong> "Create a new trail that applies to all regions and capture API activity in separate central S3 buckets for each region" is incorrect.</p><p>When you create a trail that applies to all regions you specify a single S3 bucket.</p><p><strong>INCORRECT:</strong> "Create individual trails for each region and capture API activity in separate central S3 buckets for each region" is incorrect.</p><p>This is the most complex solution, so it does not meet the requirements.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/receive-cloudtrail-log-files-from-multiple-regions.html">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/receive-cloudtrail-log-files-from-multiple-regions.html</a></p>',
        answers: [
          "<p>Create individual trails for each region and capture API activity in a single central Amazon S3 bucket.</p>",
          "<p>Create a new trail that applies to all regions and capture API activity in separate central S3 buckets for each region.</p>",
          "<p>Create individual trails for each region and capture API activity in separate central S3 buckets for each region.</p>",
          "<p>Change the existing single-region trail to log all regions and capture API activity in a single central Amazon S3 bucket.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A company has started to deploy resources to the AWS cloud. Initial resources have been deployed in the US West (Oregon) Region and an AWS CloudTrail trail has been created to record API activity in a bucket in the same Region.The security team requires that API activity is captured from all Regions and stored in a central Region.What is the SIMPLEST way to meet these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686872,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An application runs across multiple Amazon EC2 instances in multiple Availability Zones behind an Application Load Balancer (ALB). The application is experiencing a DDoS attack from malicious software that is distributed across hosts around the world. The software can be identified in the User-Agent field of the request header.</p><p>A security engineer needs to mitigate the attack. Which actions should be taken?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>When you create string match conditions, you specify filters that identify the string that you want to search for and the part of web requests that you want AWS WAF to inspect for that string, such as the URI or the query string.</p><p>The string match condition can be configured to match the value in the User-Agent HTTP request header. In this scenario the rule can match the value in the request header of the malicious software and block that traffic only.</p><p><strong>CORRECT: </strong>"Create a Web ACL with a string match condition that matches the value in the User-Agent header. Configure WAF to block requests that match the condition" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an Amazon CloudFront distribution in front of the ALB. Configure conditional requests and block requests that match the value in the User-Agent header" is incorrect.</p><p>Conditional requests in Amazon CloudFront relate to the behavior of caching and cannot be used for this purpose.</p><p><strong>INCORRECT:</strong> "Create a Web ACL with a size constraint that matches the byte size of the value in the User-Agent header. Configure WAF to block requests that match the condition" is incorrect.</p><p>A size constraint should not be used in this situation. A string match condition should be used to match the value in the request header.</p><p><strong>INCORRECT:</strong> "Enable AWS Shield and configure layer 7 protection to identify and block attacks based on the value in the User-Agent header" is incorrect.</p><p>Shield provides layer 3 and 4 protection. AWS WAF is required for Layer 7 protection.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-web-acl-string-conditions.html">https://docs.aws.amazon.com/waf/latest/developerguide/classic-web-acl-string-conditions.html</a></p>',
        answers: [
          "<p>Create an Amazon CloudFront distribution in front of the ALB. Configure conditional requests and block requests that match the value in the User-Agent header.</p>",
          "<p>Create a Web ACL with a string match condition that matches the value in the User-Agent header. Configure WAF to block requests that match the condition.</p>",
          "<p>Create a Web ACL with a size constraint that matches the byte size of the value in the User-Agent header. Configure WAF to block requests that match the condition.</p>",
          "<p>Enable AWS Shield and configure layer 7 protection to identify and block attacks based on the value in the User-Agent header.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "An application runs across multiple Amazon EC2 instances in multiple Availability Zones behind an Application Load Balancer (ALB). The application is experiencing a DDoS attack from malicious software that is distributed across hosts around the world. The software can be identified in the User-Agent field of the request header.A security engineer needs to mitigate the attack. Which actions should be taken?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686874,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>An Amazon EC2 web server has been deployed into Subnet B within a VPC. An EC2 instance in Subnet A within the same VPC must be able to connect to the web service. A network administrator has created a security group and added both instances to it. Subnet A uses a default Network ACL. A custom Network ACL has been created and attached to Subnet B.</p><p>Which rules must be created to successfully connect to the web server? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>A <em>security group</em> acts as a virtual firewall for your instance to control inbound and outbound traffic. When you launch an instance in a VPC, you can assign up to five security groups to the instance. Security groups act at the instance level, not the subnet level. Therefore, each instance in a subnet in your VPC can be assigned to a different set of security groups.</p><p>For each security group, you add <em>rules</em> that control the inbound traffic to instances, and a separate set of rules that control the outbound traffic.</p><p>A <em>network access control list (ACL)</em> is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. Network ACLs act at the subnet level, not the instance level.</p><p>A key difference between a security group and a network ACL is that security groups are stateful whereas network ACLs are stateless. With a network ACL you must therefore create a rule that allows the return traffic for a connection using the ephemeral port range (1024-65535).</p><p>Even though both instances are in the same security group you still must create the inbound rule for the web server and an outbound rule for the connection to it. With the network ACL you must create an inbound rule allowing TCP port 80 and an outbound rule allowing the return traffic on the ephemeral ports.</p><p>The table below describes some important differences between security groups and network ACLs:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_05-00-49-dba9ec22c6ac2aecaaab236e338abf88.jpg"><p><strong>CORRECT: </strong>"Security group TCP port 80 inbound and TCP port 80 outbound" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Network ACL: TCP port 80 inbound and TCP ports 1024-65535 outbound" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Security group: TCP port 80 inbound and nothing outbound" is incorrect.</p><p>You must have an outbound rule otherwise the connection to the web server will not be possible.</p><p><strong>INCORRECT:</strong> "Security group: TCP port 80 inbound and TCP ports 1024-65535 outbound" is incorrect.</p><p>There is no need to allow the ephemeral ports outbound as these will typically only be used in response traffic which is allowed due to the stateful nature of a security group. Only port 80 is required outbound.</p><p><strong>INCORRECT:</strong> "Network ACL: TCP port 80 inbound and TCP port 80 outbound" is incorrect.</p><p>Port 80 outbound is not required in this security group as it is attached to the subnet the web server runs in and the web server will be receiving traffic on port 80 and returning responses using ephemeral ports.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html</a></p>',
        answers: [
          "<p>Security group: TCP port 80 inbound and nothing outbound.</p>",
          "<p>Network ACL: TCP port 80 inbound and TCP ports 1024-65535 outbound.</p>",
          "<p>Security group TCP port 80 inbound and TCP port 80 outbound.</p>",
          "<p>Network ACL: TCP port 80 inbound and TCP port 80 outbound.</p>",
          "<p>Security group: TCP port 80 inbound and TCP ports 1024-65535 outbound.</p>",
        ],
      },
      correct_response: ["b", "c"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "An Amazon EC2 web server has been deployed into Subnet B within a VPC. An EC2 instance in Subnet A within the same VPC must be able to connect to the web service. A network administrator has created a security group and added both instances to it. Subnet A uses a default Network ACL. A custom Network ACL has been created and attached to Subnet B.Which rules must be created to successfully connect to the web server? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686876,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>An application uses Amazon EC2 instances to retrieve messages from an Amazon SQS queue. The EC2 instances have an instance profile assigned that uses an IAM role to provide permissions to the queue. A security engineer has been asked to investigate why the instances are not able to retrieve messages. The solution should follow the principle of least privilege.</p><p>What actions should be taken to identify the cause of the? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>There are two ways to give your users permissions to your Amazon SQS resources: using the Amazon SQS policy system and using the IAM policy system. You can use one or the other, or both.</p><p>The security engineer should check that the IAM role has the minimum permissions requires to receive messages from the queue. The SQS policy system should also be checked to ensure that more restrictive permissions are not assigned there.</p><p><strong>CORRECT: </strong>"Check the configuration of the IAM role attached to the instance profile to ensure it has sufficient permissions" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Check if an Amazon SQS policy explicitly denies access to the IAM role used by the instances" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Check that the AmazonSQSFullAccess managed policy is attached to the IAM role used by the instances" is incorrect.</p><p>This managed policy provides more permissions than are required by the instances and does not follow the principle of least privilege.</p><p><strong>INCORRECT:</strong> "Check that a policy is attached to the IAM role used by the instances that grants the “sqs:AddPermission” permission" is incorrect.</p><p>This permission is not required to receive messages from an Amazon SQS queue, it allows sharing access to the queue.</p><p><strong>INCORRECT:</strong> "Check if server-side encryption is enabled using an AWS KMS managed key" is incorrect.</p><p>Server-side encryption is not a requirement for receiving messages from the queue.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-using-identity-based-policies.html">https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-using-identity-based-policies.html</a></p>',
        answers: [
          "<p>Check the configuration of the IAM role attached to the instance profile to ensure it has sufficient permissions.</p>",
          "<p>Check if an Amazon SQS policy explicitly denies access to the IAM role used by the instances.</p>",
          "<p>Check that the AmazonSQSFullAccess managed policy is attached to the IAM role used by the instances.</p>",
          "<p>Check that a policy is attached to the IAM role used by the instances that grants the “sqs:AddPermission” permission.</p>",
          "<p>Check if server-side encryption is enabled using an AWS KMS managed key.</p>",
        ],
      },
      correct_response: ["a", "b"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "An application uses Amazon EC2 instances to retrieve messages from an Amazon SQS queue. The EC2 instances have an instance profile assigned that uses an IAM role to provide permissions to the queue. A security engineer has been asked to investigate why the instances are not able to retrieve messages. The solution should follow the principle of least privilege.What actions should be taken to identify the cause of the? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686878,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          '<p>An IAM user is unable to assume an IAM role using the AWS CLI. The IAM policy assigned to the user includes the following statement:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question/2023-01-05_05-04-17-807f267ae8ebe3a6e04e065effa0209b.jpg"><p>Which additional element MUST be included to allow the role to be assumed?</p>',
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The user needs to verify that the IAM policy grants permission to call sts:AssumeRole for the role that they want to assume. The Action element of an IAM policy must allow you to call the AssumeRole action. In addition, the Resource element of your IAM policy must specify the role that you want to assume.</p><p>For this situation the IAM policy would need to include a statement such as this:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_05-04-17-58db370662b4c3e0cb0b87b178a0d31e.jpg"><p><strong>CORRECT: </strong>"Action": "sts:AssumeRole" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Action": "ec2:AssumeRole" is incorrect.</p><p>The security token service (STS) is used for assuming roles so “ec2” should be replaced with “sts”.</p><p><strong>INCORRECT:</strong> "Action": "sts:GetSessionToken" is incorrect.</p><p>This API action returns a set of temporary credentials for an AWS account or IAM user.</p><p><strong>INCORRECT:</strong> "Action": "sts:GetAccessKeyInfo" is incorrect.</p><p>This API Action returns the account identifier for the specified access key ID.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_roles.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_roles.html</a></p><p><a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html</a></p>',
        answers: [
          '<p>"Action": "ec2:AssumeRole"</p>',
          '<p>"Action": "sts:AssumeRole"</p>',
          '<p>"Action": "sts:GetSessionToken"</p>',
          '<p>"Action": "sts:GetAccessKeyInfo"</p>',
        ],
      },
      correct_response: ["b"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "An IAM user is unable to assume an IAM role using the AWS CLI. The IAM policy assigned to the user includes the following statement:Which additional element MUST be included to allow the role to be assumed?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686880,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company currently manages Amazon EC2 instances running Windows and Linux in public and private subnets. The operations team currently connects over the Internet to manage the instances as there is no private connection to the corporate network.</p><p>Security groups have been updated to allow the RDP and SSH protocols from any source IPv4 address. There have been reports of malicious attempts to access the resources and the company wishes to implement the most secure solution for managing the instances.</p><p>Which strategy should a security engineer recommend?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The most secure option presented is to use AWS Systems Manager Session Manager. Session Manager is a fully managed AWS Systems Manager capability that lets you manage EC2 instances, on-premises instances, and virtual machines (VMs) through an interactive one-click browser-based shell or through the AWS Command Line Interface (AWS CLI).</p><p>Session Manager provides secure and auditable instance management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys. Session Manager also makes it easy to comply with corporate policies that require controlled access to instances, strict security practices, and fully auditable logs with instance access details, while still providing end users with simple one-click cross-platform access to your managed instances.</p><p><strong>CORRECT: </strong>"Deploy the AWS Systems Manager Agent on the EC2 instances. Access the EC2 instances using Session Manager restricting access to users with permission to manage the instances" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Deploy a server on the corporate network that can be used for managing EC2 instances. Update the security groups to allow connections over SSH and RDP from the on-premises management server only" is incorrect.</p><p>This is less secure compared to using session manager as the SSH and RDP ports must still be open on instances and it does not offer the robust controls offered by session manager.</p><p><strong>INCORRECT:</strong> "Deploy a Linux bastion host with an Elastic IP address in the public subnet. Allow access to the bastion host from 0.0.0.0/" is incorrect.</p><p>This is less secure compared to using session manager as the SSH and RDP ports must still be open on instances and it does not offer the robust controls offered by session manager. This solution could be better secured by restricting access to the corporate IP ranges.</p><p><strong>INCORRECT:</strong> "Configure an IPSec Virtual Private Network (VPN) connecting the corporate network to the Amazon VPC. Update security groups to allow connections over SSH and RDP from the corporate network only" is incorrect.</p><p>This is less secure compared to using session manager as the SSH and RDP ports must still be open on instances and it does not offer the robust controls offered by session manager.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html">https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html</a></p>',
        answers: [
          "<p>Deploy a server on the corporate network that can be used for managing EC2 instances. Update the security groups to allow connections over SSH and RDP from the on-premises management server only.</p>",
          "<p>Deploy the AWS Systems Manager Agent on the EC2 instances. Access the EC2 instances using Session Manager restricting access to users with permission to manage the instances.</p>",
          "<p>Deploy a Linux bastion host with an Elastic IP address in the public subnet. Allow access to the bastion host from 0.0.0.0/0.</p>",
          "<p>Configure an IPSec Virtual Private Network (VPN) connecting the corporate network to the Amazon VPC. Update security groups to allow connections over SSH and RDP from the corporate network only.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company currently manages Amazon EC2 instances running Windows and Linux in public and private subnets. The operations team currently connects over the Internet to manage the instances as there is no private connection to the corporate network.Security groups have been updated to allow the RDP and SSH protocols from any source IPv4 address. There have been reports of malicious attempts to access the resources and the company wishes to implement the most secure solution for managing the instances.Which strategy should a security engineer recommend?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686882,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company uses an Amazon RDS MySQL database instance to store customer order data. The security team have requested that SSL/TLS encryption in transit must be used for encrypting connections to the database from application servers. The data in the database is currently encrypted at rest using an AWS KMS key.</p><p>How can a security engineer enable encryption in transit?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Amazon RDS creates an SSL certificate and installs the certificate on the DB instance when Amazon RDS provisions the instance. These certificates are signed by a certificate authority. The SSL certificate includes the DB instance endpoint as the Common Name (CN) for the SSL certificate to guard against spoofing attacks.</p><p>You can download a root certificate from AWS that works for all Regions, or you can download Region-specific intermediate certificates.</p><p><strong>CORRECT: </strong>"Download the AWS-provided root certificates. Use the certificates when connecting to the RDS DB instance" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Take a snapshot of the RDS instance. Restore the snapshot to a new instance with encryption in transit enabled" is incorrect.</p><p>There is no need to do this as a certificate is created when the DB instance is launched.</p><p><strong>INCORRECT:</strong> "Enable encryption in transit using the RDS Management console and obtain a key using AWS KMS" is incorrect.</p><p>You can\'t enable/disable encryption in transit using the RDS management console or use a KMS key.</p><p><strong>INCORRECT:</strong> "Add a self-signed certificate to the RDS DB instance. Use the certificates in all connections to the RDS DB instance" is incorrect.</p><p>You can\'t use self-signed certificates with RDS.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html</a></p>',
        answers: [
          "<p>Enable encryption in transit using the RDS Management console and obtain a key using AWS KMS.</p>",
          "<p>Add a self-signed certificate to the RDS DB instance. Use the certificates in all connections to the RDS DB instance.</p>",
          "<p>Take a snapshot of the RDS instance. Restore the snapshot to a new instance with encryption in transit enabled.</p>",
          "<p>Download the AWS-provided root certificates. Use the certificates when connecting to the RDS DB instance.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A company uses an Amazon RDS MySQL database instance to store customer order data. The security team have requested that SSL/TLS encryption in transit must be used for encrypting connections to the database from application servers. The data in the database is currently encrypted at rest using an AWS KMS key.How can a security engineer enable encryption in transit?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686884,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A media company is streaming their content globally via AWS, but due to legal constraints, it needs to restrict data storage to a specific AWS region using AWS Organizations. A security engineer is tasked with preventing users from storing data in any other region.</p><p>Which approach will allow the security engineer to implement these requirements with the MINIMUM operational overhead?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The SCP policy with the "aws:RequestedRegion" condition denying actions outside the approved region, when attached to the AWS account under AWS Organizations, will effectively prevent any user in the organization from storing data outside the approved region.</p><p>It reduces the operational overhead as it doesn\'t need to be individually attached to every user but can be applied at the organizational level.</p><p><strong>CORRECT: </strong>"Implement an SCP that uses the "aws:RequestedRegion" condition to deny actions outside the approved region. Attach the SCP to the AWS account under AWS Organizations" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an IAM policy with the "aws:RequestedRegion" condition to permit actions only in the approved region. Attach the policy to all IAM users" is incorrect.</p><p>This approach could work, but it adds unnecessary operational overhead as it requires attaching the policy to every IAM user individually. Additionally, new users or those missed could still potentially store data outside the approved region.</p><p><strong>INCORRECT:</strong> "Design an IAM policy that uses the "aws:RequestedRegion" condition to deny operations outside the preferred region. Attach this policy to every IAM user" is incorrect.</p><p>This solution also entails higher operational overhead as it requires the policy to be manually attached to each user.</p><p><strong>INCORRECT:</strong> "Develop an SCP with the "aws:RequestedRegion" condition to allow operations solely in the specified region. Attach the SCP to each IAM user in the organization" is incorrect.</p><p>SCPs can\'t be attached to individual IAM users. They are designed to set fine-grained permissions for the whole organization or organizational units, not individual IAM users.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requestedregion">https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requestedregion</a></p>',
        answers: [
          '<p>Implement an SCP that uses the "aws:RequestedRegion" condition to deny actions outside the approved region. Attach the SCP to the AWS account under AWS Organizations.</p>',
          '<p>Create an IAM policy with the "aws:RequestedRegion" condition to permit actions only in the approved region. Attach the policy to all IAM users.</p>',
          '<p>Design an IAM policy that uses the "aws:RequestedRegion" condition to deny operations outside the preferred region. Attach this policy to every IAM user.</p>',
          '<p>Develop an SCP with the "aws:RequestedRegion" condition to allow operations solely in the specified region. Attach the SCP to each IAM user in the organization.</p>',
        ],
      },
      correct_response: ["a"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A media company is streaming their content globally via AWS, but due to legal constraints, it needs to restrict data storage to a specific AWS region using AWS Organizations. A security engineer is tasked with preventing users from storing data in any other region.Which approach will allow the security engineer to implement these requirements with the MINIMUM operational overhead?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686886,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An enterprise has two VPCs in the ap-south-1 Region: vpc-alpha and vpc-beta. The enterprise has recently created an Amazon API Gateway REST API with the endpoint type set to PRIVATE. It also created a VPC endpoint for the REST API in vpc-alpha, providing the resources in vpc-alpha successful access to the REST API.</p><p>The enterprise wants to allow resources in vpc-beta to access the REST API. A VPC endpoint for the REST API was created in vpc-beta, but the resources in vpc-beta still can't access the REST API.</p><p>A security engineer must enable access to the REST API for resources in vpc-beta while adhering to the principle of least privilege.</p><p>What solution will achieve these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Amazon API Gateway allows you to create, deploy, and manage a REST API as a collection of resources and methods. When an API Gateway REST API is set to PRIVATE, it\'s only accessible from a specified VPC endpoint.</p><p>In this scenario, the API is initially configured with a VPC endpoint in vpc-alpha, enabling resources in vpc-alpha to access it. Now, the goal is to allow resources in vpc-beta to access the API. Although a VPC endpoint for the REST API is created in vpc-beta, the resources in vpc-beta are still unable to access the API.</p><p>This issue is typically due to missing permissions. When a VPC endpoint is created, you can control the access to your endpoint through endpoint policies. However, for the access to a PRIVATE API, an API Gateway resource policy is also needed in addition to the endpoint policy.</p><p>In the correct answer, the API endpoint type is maintained as PRIVATE, and a resource policy is attached to the REST API to allow access from vpc-beta. This resource policy specifically allows the necessary access for the resources in vpc-beta to use the REST API, aligning with the principle of least privilege.</p><p>The resource policy needs to specify the VPC endpoint in vpc-beta as an allowed source for making API calls. This combination of endpoint and resource policy provides fine-grained access control over your API.</p><p><strong>CORRECT: </strong>"Maintain the API endpoint type as PRIVATE. Attach a resource policy to the REST API permitting access from vpc-beta" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Implement a VPC peering connection between vpc-alpha and vpc-beta. Attach an IAM policy to the resources in vpc-beta to authorize access to the REST API" is incorrect.</p><p>VPC peering alone does not grant the required access to the REST API from vpc-beta. Therefore, this option is incorrect.</p><p><strong>INCORRECT:</strong> "Add a VPC endpoint for vpc-beta in vpc-alpha. Attach an IAM policy to the resources in vpc-beta granting access to the REST API" is incorrect.</p><p>It\'s not possible to add a VPC endpoint for one VPC inside another VPC. Therefore, this option is incorrect.</p><p><strong>INCORRECT:</strong> "Switch the API endpoint type to REGIONAL. Add a resource policy to the REST API permitting access from vpc-beta" is incorrect.</p><p>Switching the endpoint type to REGIONAL would make the REST API publicly accessible, which contradicts the company\'s requirement of keeping the API PRIVATE. Hence, this option is incorrect.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html">https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html</a></p><p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html">https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html</a></p>',
        answers: [
          "<p>Implement a VPC peering connection between vpc-alpha and vpc-beta. Attach an IAM policy to the resources in vpc-beta to authorize access to the REST API.</p>",
          "<p>Add a VPC endpoint for vpc-beta in vpc-alpha. Attach an IAM policy to the resources in vpc-beta granting access to the REST API.</p>",
          "<p>Switch the API endpoint type to REGIONAL. Add a resource policy to the REST API permitting access from vpc-beta.</p>",
          "<p>Maintain the API endpoint type as PRIVATE. Attach a resource policy to the REST API permitting access from vpc-beta.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "An enterprise has two VPCs in the ap-south-1 Region: vpc-alpha and vpc-beta. The enterprise has recently created an Amazon API Gateway REST API with the endpoint type set to PRIVATE. It also created a VPC endpoint for the REST API in vpc-alpha, providing the resources in vpc-alpha successful access to the REST API.The enterprise wants to allow resources in vpc-beta to access the REST API. A VPC endpoint for the REST API was created in vpc-beta, but the resources in vpc-beta still can't access the REST API.A security engineer must enable access to the REST API for resources in vpc-beta while adhering to the principle of least privilege.What solution will achieve these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686888,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A multinational company is operating a global web application on AWS behind a CloudFront distribution. As part of their security enhancement, the company has enabled AWS WAF on the CloudFront distribution with a Web ACL.</p><p>For compliance purposes, the company requires comprehensive logging of all requests hitting the web ACL. They have already prepared an Amazon S3 bucket for storing these logs.</p><p>Which combination of steps should the company take to meet this requirement? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>To meet the requirement, you need to enable logging in AWS WAF settings. You would also need to associate the web ACL with a Kinesis Data Firehose delivery stream which can deliver logs to an S3 bucket.</p><p>The creation of a Kinesis Data Firehose delivery stream in the same region as the web ACL would ensure the logs can be successfully delivered. The stream would then be directed to the designated S3 bucket for storing logs.</p><p><strong>CORRECT: </strong>"Enable logging in AWS WAF settings, associate the web ACL with an Amazon Kinesis Data Firehose delivery stream" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Create an Amazon Kinesis Data Firehose delivery stream in the same AWS Region as the web ACL. Specify the S3 bucket as the destination for the delivery stream" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Enable AWS CloudTrail for the web ACL and specify the S3 bucket to store the logs" is incorrect.</p><p>AWS CloudTrail is used to log and monitor account activity related to actions across AWS infrastructure, not the specific logging of requests hitting an AWS WAF web ACL.</p><p><strong>INCORRECT:</strong> "Update the web ACL with an AWS Lambda function that logs all request details and stores them in the S3 bucket" is incorrect.</p><p>While AWS Lambda can be used for a multitude of tasks in AWS, it is not the standard or scalable approach to log all request details coming to an AWS WAF web ACL.</p><p><strong>INCORRECT:</strong> "Set up VPC Flow Logs for the CloudFront distribution and specify the S3 bucket to store the logs" is incorrect.</p><p>VPC Flow Logs capture information about IP traffic going to and from network interfaces in your VPC, but it\'s not meant for logging requests hitting an AWS WAF web ACL.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">https://docs.aws.amazon.com/waf/latest/developerguide/logging.html</a></p>',
        answers: [
          "<p>Enable AWS CloudTrail for the web ACL and specify the S3 bucket to store the logs.</p>",
          "<p>Enable logging in AWS WAF settings, associate the web ACL with an Amazon Kinesis Data Firehose delivery stream.</p>",
          "<p>Update the web ACL with an AWS Lambda function that logs all request details and stores them in the S3 bucket.</p>",
          "<p>Create an Amazon Kinesis Data Firehose delivery stream in the same AWS Region as the web ACL. Specify the S3 bucket as the destination for the delivery stream.</p>",
          "<p>Set up VPC Flow Logs for the CloudFront distribution and specify the S3 bucket to store the logs.</p>",
        ],
      },
      correct_response: ["b", "d"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A multinational company is operating a global web application on AWS behind a CloudFront distribution. As part of their security enhancement, the company has enabled AWS WAF on the CloudFront distribution with a Web ACL.For compliance purposes, the company requires comprehensive logging of all requests hitting the web ACL. They have already prepared an Amazon S3 bucket for storing these logs.Which combination of steps should the company take to meet this requirement? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686890,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A large enterprise has an AWS setup which contains multiple accounts managed through AWS Organizations. The accounts are categorized into several OUs based on the company's departmental structure. The security team now wants to enforce a policy to prevent any accidental deletion of S3 buckets across all accounts.</p><p>Which solution should the security team implement to meet this requirement?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>SCPs (Service Control Policies) in AWS Organizations allow you to whitelist or blacklist actions that can be performed in the AWS accounts that the policies apply to.</p><p>Creating an SCP that denies the s3:DeleteBucket action and applying it to the OUs will effectively prevent any deletion of S3 buckets.</p><p><strong>CORRECT: </strong>"Create an SCP that includes a Deny rule for the s3:DeleteBucket action. Apply this SCP to all the OUs in the organization" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS Systems Manager to apply a policy that restricts deletion of S3 buckets across all AWS accounts" is incorrect.</p><p>AWS Systems Manager is a management service that helps you to automatically apply policies, patches, updates, and configurations across your AWS resources. However, it doesn\'t provide capabilities to directly restrict S3 bucket deletions.</p><p><strong>INCORRECT:</strong> "Use IAM policy that includes a Deny rule for the s3:DeleteBucket action. Attach this IAM policy to all the users across all accounts" is incorrect.</p><p>While IAM policies can restrict actions performed by IAM users, they are applied on a per-user or per-role basis, and managing these for many users across multiple accounts can be operationally complex.</p><p><strong>INCORRECT:</strong> "Use AWS Config to continuously monitor and prevent the deletion of S3 buckets across all accounts" is incorrect,</p><p>AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. It can provide details of changes to AWS resources but can\'t directly prevent actions like deleting an S3 bucket.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html</a></p>',
        answers: [
          "<p>Use AWS Systems Manager to apply a policy that restricts deletion of S3 buckets across all AWS accounts.</p>",
          "<p>Create an SCP that includes a Deny rule for the s3:DeleteBucket action. Apply this SCP to all the OUs in the organization.</p>",
          "<p>Use IAM policy that includes a Deny rule for the s3:DeleteBucket action. Attach this IAM policy to all the users across all accounts.</p>",
          "<p>Use AWS Config to continuously monitor and prevent the deletion of S3 buckets across all accounts.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A large enterprise has an AWS setup which contains multiple accounts managed through AWS Organizations. The accounts are categorized into several OUs based on the company's departmental structure. The security team now wants to enforce a policy to prevent any accidental deletion of S3 buckets across all accounts.Which solution should the security team implement to meet this requirement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686892,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company is running a batch data processing application in an Amazon EC2 instance, which requires frequent access to an Amazon DynamoDB table. The company's security policies mandate that all connections to DynamoDB should be private and secure.</p><p>The company has set up a Gateway VPC Endpoint for DynamoDB in the VPC where the EC2 instance resides. Even though the EC2 instance is configured to be within a private subnet with a NAT gateway for internet access, the traffic from the EC2 to DynamoDB goes through the NAT gateway instead of the Gateway VPC endpoint.</p><p>What action can a security engineer take to ensure the EC2 instance uses the Gateway VPC Endpoint for DynamoDB?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The correct answer is to associate the Gateway VPC Endpoint for DynamoDB with the route table of the private subnet. A VPC endpoint enables instances in the VPC to use AWS services (in this case, DynamoDB) via a private network path. This private connection between your VPC and DynamoDB does not require access over the internet, VPN, AWS Direct Connect, or a NAT device, and does not require the traffic to traverse multiple VPCs or accounts.</p><p>The reason the EC2 instance is not using the endpoint could be that the route tables associated with the subnet do not have a route pointing traffic to the endpoint. By default, if no specific route is matched, traffic follows the main route which is generally directed to the NAT Gateway or Internet Gateway.</p><p>When you associate the Gateway VPC Endpoint with the route table of the private subnet, you are essentially adding a route for the IP range that DynamoDB uses and pointing it to the VPC Endpoint. This means that when an EC2 instance in the subnet tries to reach DynamoDB, it matches this specific route and is directed through the VPC Endpoint. This setup ensures that all traffic to DynamoDB from your EC2 instance will stay within the Amazon network, providing secure and efficient connectivity to DynamoDB.</p><p><strong>CORRECT: </strong>"Associate the Gateway VPC Endpoint with the route table of the private subnet, where the EC2 instance resides" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Update the route table of the private subnet, where the EC2 instance resides, to remove the route to the NAT gateway" is incorrect.</p><p>Removing the route to the NAT gateway would isolate the EC2 instance from the internet which may cause other connectivity issues, not a best practice.</p><p><strong>INCORRECT:</strong> "Modify the policy of the Gateway VPC Endpoint to permit access from the EC2 instance\'s private IP" is incorrect.</p><p>The Gateway VPC Endpoint policy does not require specific mention of the EC2 instance\'s private IP. If the DynamoDB actions are allowed, traffic should flow through the endpoint.</p><p><strong>INCORRECT:</strong> "Alter the security group of the EC2 instance to permit connections to the DynamoDB network address space" is incorrect.</p><p>Changing the security group rules of the EC2 instance doesn\'t influence the route taken by the traffic to DynamoDB. DynamoDB\'s access is controlled by IAM, not security group rules.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html">https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html</a></p>',
        answers: [
          "<p>Update the route table of the private subnet, where the EC2 instance resides, to remove the route to the NAT gateway.</p>",
          "<p>Associate the Gateway VPC Endpoint with the route table of the private subnet, where the EC2 instance resides.</p>",
          "<p>Modify the policy of the Gateway VPC Endpoint to permit access from the EC2 instance's private IP.</p>",
          "<p>Alter the security group of the EC2 instance to permit connections to the DynamoDB network address space.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A company is running a batch data processing application in an Amazon EC2 instance, which requires frequent access to an Amazon DynamoDB table. The company's security policies mandate that all connections to DynamoDB should be private and secure.The company has set up a Gateway VPC Endpoint for DynamoDB in the VPC where the EC2 instance resides. Even though the EC2 instance is configured to be within a private subnet with a NAT gateway for internet access, the traffic from the EC2 to DynamoDB goes through the NAT gateway instead of the Gateway VPC endpoint.What action can a security engineer take to ensure the EC2 instance uses the Gateway VPC Endpoint for DynamoDB?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686894,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company manages an application that runs on Amazon EC2 instances behind a Network Load Balancer (NLB). The NLB has access logs enabled which are being stored in an Amazon S3 bucket. A security engineer requires a solution to run ad hoc queries against the access logs to identify application access patterns.</p><p>How should the security engineer accomplish this task with the least amount of administrative overhead?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Amazon Athena is a serverless service you can use to run SQL queries against data in Amazon S3. You just need to point Athena to your data in Amazon S3, define the schema, and start querying using the built-in query editor. This is ideal for running ad-hoc queries on access logs stored in an S3 bucket.</p><p><strong>CORRECT: </strong>"Create an Amazon Athena table that uses the S3 bucket containing the access logs. Run SQL queries using Athena" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use the S3 copy command to copy logs to a separate bucket. Enable S3 analytics to analyze access patterns" is incorrect.</p><p>There’s no need to copy the data and S3 analytics is used to identify object access patterns for requests to S3 objects. It is used for storage class analytics. It does not help with identifying access patterns for your application by reading the file and looking at source IP addresses (for example).</p><p><strong>INCORRECT:</strong> "Write an AWS Lambda function to query the access logs. Use event notifications to trigger the Lambda functions when log entries are added" is incorrect.</p><p>This will be more complex and is less useful for running ad hoc queries as it is something that will run every time a file is added.</p><p><strong>INCORRECT:</strong> "Import the access logs into Amazon CloudWatch Logs. Use CloudWatch Logs Insights to analyze the log data" is incorrect.</p><p>You cannot natively import logs into CloudWatch Logs from Amazon S3. You may be able to achieve this with a custom Lambda function, but it will be more work.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html">https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html</a></p><p><a href="https://aws.amazon.com/athena/features/">https://aws.amazon.com/athena/features/</a></p>',
        answers: [
          "<p>Create an Amazon Athena table that uses the S3 bucket containing the access logs. Run SQL queries using Athena.</p>",
          "<p>Write an AWS Lambda function to query the access logs. Use event notifications to trigger the Lambda functions when log entries are added.</p>",
          "<p>Import the access logs into Amazon CloudWatch Logs. Use CloudWatch Logs Insights to analyze the log data.</p>",
          "<p>Use the S3 copy command to copy logs to a separate bucket. Enable S3 analytics to analyze access patterns.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A company manages an application that runs on Amazon EC2 instances behind a Network Load Balancer (NLB). The NLB has access logs enabled which are being stored in an Amazon S3 bucket. A security engineer requires a solution to run ad hoc queries against the access logs to identify application access patterns.How should the security engineer accomplish this task with the least amount of administrative overhead?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686896,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company created an AWS KMS key in the AWS Key Management Service (KMS) with imported key materials. The company policy requires that all encryption keys must be rotated every 365 days.</p><p>What must be done to implement policy requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>When you enable automatic key rotation for a customer managed key, AWS KMS generates new cryptographic material for the KMS key every year. However, in some cases it is necessary to create a new KMS key and use it in place of the original KMS key. This has the same effect as rotating the key material in an existing KMS key, so it\'s often thought of as manually rotating the key.</p><p>Manual rotation is a good choice when you want to control the key rotation schedule. It also provides a way to rotate KMS keys that are not eligible for automatic key rotation, including asymmetric KMS keys, KMS keys in custom key stores, and KMS keys with imported key material.</p><p>In this case manual rotation is required as the key material has been imported so automatic rotation is not possible. Because the new KMS key is a different resource from the current KMS key, it has a different key ID and ARN. When you change KMS keys, you need to update references to the KMS key ID or ARN in your applications. Aliases, which associate a friendly name with a KMS key, make this process easier.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-07_17-32-18-7ca3c820d28a7ceed87726316e80728f.jpg"><p><strong>CORRECT: </strong>"Create a new KMS key, import new key material, and point the key alias to the new KMS key " is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Enable automatic key rotation for the KMS key every 365 days" is incorrect.</p><p>This would not be possible as key material was imported so automatic rotation is not allowed.</p><p><strong>INCORRECT:</strong> "Write an AWS Lambda function that rotates the key material yearly" is incorrect.</p><p>Though you can use Lambda to automate this kind of activity a new key is needed.</p><p><strong>INCORRECT:</strong> "Import new key material to the existing KMS key and manually rotate the KMS key" is incorrect.</p><p>The process requires that a new key is created with new key material as described above.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html</a></p>',
        answers: [
          "<p>Write an AWS Lambda function that rotates the key material yearly.</p>",
          "<p>Import new key material to the existing KMS key and manually rotate the KMS key.</p>",
          "<p>Create a new KMS key, import new key material, and point the key alias to the new KMS key.</p>",
          "<p>Enable automatic key rotation for the KMS key every 365 days.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A company created an AWS KMS key in the AWS Key Management Service (KMS) with imported key materials. The company policy requires that all encryption keys must be rotated every 365 days.What must be done to implement policy requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686898,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has created an AWS account structure with a centralized management account and several child accounts. An AWS Organization has been created to manage this configuration. The security team require API auditing using AWS CloudTrail for all accounts. Administrators in child accounts should not have privileges to modify the CloudTrail trail configuration.</p><p>How should AWS CloudTrail be configured with the LEAST operational overhead?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>If you have created an organization in AWS Organizations, you can create a trail that will log all events for all AWS accounts in that organization. This is sometimes referred to as an <em>organization trail</em>.</p><p>When you create an organization trail, a trail with the name that you give it will be created in every AWS account that belongs to your organization. Users with CloudTrail permissions in member accounts will be able to see this trail when they log into the AWS CloudTrail console from their AWS accounts, or when they run AWS CLI commands such as describe-trail.</p><p>However, users in member accounts will not have sufficient permissions to delete the organization trail, turn logging on or off, change what types of events are logged, or otherwise alter the organization trail in any way.</p><p>The diagram below depicts an AWS organization with multiple accounts and an organization trail:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-07_17-34-25-aca2e0db4c9f9141e563c12dfa4cb7dc.jpg"><p><strong>CORRECT: </strong>"Create an Amazon S3 bucket in the management account and create an Organization trail in the management account that logs to the S3 bucket" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an Amazon S3 bucket in each AWS account and create an Organization trail in the management account that logs to the S3 bucket" is incorrect.</p><p>The organization trail should log to a central S3 bucket, not a bucket in each AWS account. This is a more secure configuration and is required.</p><p><strong>INCORRECT:</strong> "Create a CloudTrail trail in each AWS account that logs to separate folders within a central S3 bucket in the management account. Create an SCP to limit permissions" is incorrect.</p><p>When using AWS organizations it will be much easier to create an organization trail which will achieve the same result with lower overhead and permissions are automatically configured.</p><p><strong>INCORRECT:</strong> "Create a separate logging account and create a CloudTrail trail within each AWS account that logs to the logging account. Create an SCP to limit permissions" is incorrect.</p><p>This would be more complex than using an organization trail so it not the best answer.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html</a></p>',
        answers: [
          "<p>Create a separate logging account and create a CloudTrail trail within each AWS account that logs to the logging account. Create an SCP to limit permissions.</p>",
          "<p>Create an Amazon S3 bucket in each AWS account and create an Organization trail in the management account that logs to the S3 bucket.</p>",
          "<p>Create an Amazon S3 bucket in the management account and create an Organization trail in the management account that logs to the S3 bucket.</p>",
          "<p>Create a CloudTrail trail in each AWS account that logs to separate folders within a central S3 bucket in the management account. Create an SCP to limit permissions.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A company has created an AWS account structure with a centralized management account and several child accounts. An AWS Organization has been created to manage this configuration. The security team require API auditing using AWS CloudTrail for all accounts. Administrators in child accounts should not have privileges to modify the CloudTrail trail configuration.How should AWS CloudTrail be configured with the LEAST operational overhead?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686900,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An application running on Amazon EC2 instances generates log files in a folder on the Linux file system. The security team requires that the logs are collected and centrally stored using an AWS managed service. Automatic monitoring should be possible, and an interface must be available for analyzing the log files.</p><p>Which approach meets the stated requirements with the minimum effort?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The unified CloudWatch agent enables you to do the following:</p><p>· Collect internal system-level metrics from Amazon EC2 instances across operating systems.</p><p>· Collect system-level metrics from on-premises server.</p><p>· Retrieve custom metrics from your applications or services using the StatsD and collectd protocols.</p><p>· Collect logs from Amazon EC2 instances and on-premises servers, running either Linux or Windows Server.</p><p>You can store and view the metrics that you collect with the CloudWatch agent in CloudWatch just as you can with any other CloudWatch metrics. Application log files can be collected.</p><p>The logs collected by the unified CloudWatch agent are processed and stored in Amazon CloudWatch Logs, just like logs collected by the older CloudWatch Logs agent.</p><p><strong>CORRECT: </strong>"Install the unified Amazon CloudWatch agent on the EC2 instances. Configure the agent to collect the application log files and send them to Amazon CloudWatch Logs" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a script that sends a custom metric to Amazon CloudWatch that includes the data recorded in the application log files" is incorrect.</p><p>You cannot create metrics from log files. Metrics are time series data recording information about your system. For example a metric shows the percentage of CPU used. Log files can include all sorts of data in text, json or other formats which cannot be represented on a graph like a metric.</p><p><strong>INCORRECT:</strong> "Install the AWS Systems Manager Agent on the instances. Run a PowerShell script using Run Command that copies the log files to Amazon CloudWatch Logs" is incorrect.</p><p>Run Command is used for automating individual tasks, automation documents should be used for automation. Creating PowerShell scripts to do this work is incorrect as the operating system is Linux, not Windows, and this would be more work than using the unified CloudWatch agent.</p><p><strong>INCORRECT:</strong> "Create a cron job that runs on a regular schedule. Configure the cron job to copy the application log files to an Amazon S3 bucket and use Amazon Athena for analysis" is incorrect.</p><p>Writing scripts is more work than using the unified CloudWatch Agent and Amazon Athena does not provide the automation required.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html</a></p>',
        answers: [
          "<p>Create a script that sends a custom metric to Amazon CloudWatch that includes the data recorded in the application log files.</p>",
          "<p>Install the unified Amazon CloudWatch agent on the EC2 instances. Configure the agent to collect the application log files and send them to Amazon CloudWatch Logs.</p>",
          "<p>Install the AWS Systems Manager Agent on the instances. Run a PowerShell script using Run Command that copies the log files to Amazon CloudWatch Logs.</p>",
          "<p>Create a cron job that runs on a regular schedule. Configure the cron job to copy the application log files to an Amazon S3 bucket and use Amazon Athena for analysis.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "An application running on Amazon EC2 instances generates log files in a folder on the Linux file system. The security team requires that the logs are collected and centrally stored using an AWS managed service. Automatic monitoring should be possible, and an interface must be available for analyzing the log files.Which approach meets the stated requirements with the minimum effort?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686902,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company stores highly confidential information in an Amazon S3 bucket. The security team requires that any changes to the bucket policy are automatically remediated, and alerts of these changes are sent to their team members.</p><p>Which actions should a security engineer take to meet these requirements with the LEAST effort?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The AWS Config Auto Remediation feature automatically remediates non-compliant resources evaluated by AWS Config rules. You can associate remediation actions with AWS Config rules and choose to execute them automatically to address non-compliant resources without manual intervention.</p><p>An AWS Config rule can be applied to identify and remediate any unauthorized changes to the policy associated with the S3 bucket. Amazon SNS can be integrated as a destination for alerts.</p><p><strong>CORRECT: </strong>"Use AWS Config with Auto Remediation to remediate any changes to S3 bucket policies. Configure alerting with AWS Config and Amazon SNS" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS Lambda with Macie to automatically remediate S3 bucket policy changes. Use Macie automatic alerting capabilities for alerts" is incorrect.</p><p>Macie is not used for identifying changes to S3 bucket policies or for alerting. Macie is used for identifying personally identifiable information in data sets.</p><p><strong>INCORRECT:</strong> "Use Amazon EventBridge rules with AWS Lambda to automatically remediate S3 bucket policy changes. Configure alerting with Amazon SNS" is incorrect.</p><p>EventBridge can alert on API events relating to bucket changes. However, this would require creating a custom function and is therefore more effort compared to the correct answer.</p><p><strong>INCORRECT:</strong> "Use an Amazon CloudWatch alarm with AWS Lambda to automatically remediate S3 bucket policy changes. Configure alerting with Amazon SNS" is incorrect.</p><p>CloudWatch alarms cannot be configured to trigger based on changes to S3 buckets</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/">https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/</a></p>',
        answers: [
          "<p>Use an Amazon CloudWatch alarm with AWS Lambda to automatically remediate S3 bucket policy changes. Configure alerting with Amazon SNS.</p>",
          "<p>Use AWS Lambda with Macie to automatically remediate S3 bucket policy changes. Use Macie automatic alerting capabilities for alerts.</p>",
          "<p>Use Amazon EventBridge rules with AWS Lambda to automatically remediate S3 bucket policy changes. Configure alerting with Amazon SNS.</p>",
          "<p>Use AWS Config with Auto Remediation to remediate any changes to S3 bucket policies. Configure alerting with AWS Config and Amazon SNS.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A company stores highly confidential information in an Amazon S3 bucket. The security team requires that any changes to the bucket policy are automatically remediated, and alerts of these changes are sent to their team members.Which actions should a security engineer take to meet these requirements with the LEAST effort?",
      related_lectures: [],
    },
  ],
};
