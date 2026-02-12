export const neal_4 = {
  count: 25,
  next: null,
  previous: null,
  results: [
    {
      _class: "assessment",
      id: 112083267,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer is attempts to encrypt a secure string parameter value in AWS Systems Manager Parameter Store with an AWS KMS key and receives an <em>InvalidKeyId</em> error message.</p><p>Why was this error message generated?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>To perform any operation on a secure string parameter, Parameter Store must be able to use the Amazon KMS key that you specify for your intended operation. Most of the Parameter Store failures related to KMS keys are caused by the following problems:</p><ul><li><p>The credentials that an application is using do not have permission to perform the specified action on the KMS key.</p></li><li><p>The KMS key is not found. This typically happens when you use an incorrect identifier for the KMS key.</p></li><li><p>The KMS key is not enabled. When this occurs, Parameter Store returns an <strong>InvalidKeyId</strong> exception with a detailed error message from Amazon KMS.</p></li></ul><p>The specific error message received indicates that the issue is due to the KMS key being disabled.</p><p><strong>CORRECT: </strong>"The KMS key specified is not enabled" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "The KMS key specified is not compliant" is incorrect.</p><p>There is no compliance requirement for a key to work with Parameter Store.</p><p><strong>INCORRECT:</strong> "The KMS key specified does not exist" is incorrect.</p><p>The specific error generated indicates that the key is not enabled.</p><p><strong>INCORRECT:</strong> "The KMS key specified is currently in use" is incorrect.</p><p>KMS keys do not get locked to a single process and can be used by multiple processes at the same time.</p><p><strong>References:</strong></p><p><a href="https://docs.amazonaws.cn/en_us/kms/latest/developerguide/services-parameter-store.html">https://docs.amazonaws.cn/en_us/kms/latest/developerguide/services-parameter-store.html</a></p>',
        answers: [
          "<p>The KMS key specified is not compliant.</p>",
          "<p>The KMS key specified is not enabled.</p>",
          "<p>The KMS key specified does not exist.</p>",
          "<p>The KMS key specified is currently in use.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A security engineer is attempts to encrypt a secure string parameter value in AWS Systems Manager Parameter Store with an AWS KMS key and receives an InvalidKeyId error message.Why was this error message generated?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083269,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has created an organization within AWS Organizations that has all features enabled. Several resource accounts have been added to the organization. The security team requires that the privileges of root user accounts within the member accounts are restricted.</p><p>How can the security administrator restrict usage of member root user accounts across the organization?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>An SCP restricts permissions for IAM users and roles in member accounts, including the member account\'s root user. The SCP that is attached to the OU will ensure that permissions are not available for the root user account which limits the API actions the root user can perform, improving overall security.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_02-55-25-d5347171bc7df0d2676e57410b071343.jpg"><p><strong>CORRECT: </strong>"Create an OU in AWS Organizations and add all the member accounts. Attach an SCP that controls the permissions available for the root user" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Disable the root user account for member accounts through the organization at the root account level" is incorrect.</p><p>It is not possible to disable the root user account through AWS Organizations (or any other method).</p><p><strong>INCORRECT:</strong> "Within each member account attach an IAM user policy to a group that restricts available permissions. Add the root user account to the group" is incorrect.</p><p>You cannot add the root user account to an IAM group as it is not an IAM user account.</p><p><strong>INCORRECT:</strong> "Within each member account attach an inline IAM policy to the root user account that restricts available permissions" is incorrect.</p><p>You cannot attach inline IAM policies to the root user account as it is not an IAM user account.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html</a></p>',
        answers: [
          "<p>Disable the root user account for member accounts through the organization at the root account level.</p>",
          "<p>Within each member account attach an IAM user policy to a group that restricts available permissions. Add the root user account to the group.</p>",
          "<p>Within each member account attach an inline IAM policy to the root user account that restricts available permissions.</p>",
          "<p>Create an OU in AWS Organizations and add all the member accounts. Attach an SCP that controls the permissions available for the root user.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company has created an organization within AWS Organizations that has all features enabled. Several resource accounts have been added to the organization. The security team requires that the privileges of root user accounts within the member accounts are restricted.How can the security administrator restrict usage of member root user accounts across the organization?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083271,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer is tasked with securing the network access for an application that uses an AWS Lambda function and an Amazon RDS database. The Lambda function and database both run in the same AWS account.</p><p>Which network configuration is the MOST secure?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Note that with AWS exam questions you must choose the BEST answer, though the solution often may not be perfect!</p><p>In this case the best answer is to configure the Lambda function to connect to a VPC and update the security group attached to the function configuration to allow outbound access to the VPC CIDR block. An improvement would be to allow outbound traffic to the DB security group only. The Lambda security group should be configured to allow inbound access on the DB port/protocol from the Lambda security group.</p><p><strong>CORRECT: </strong>"Connect the Lambda function to a private subnet within the VPC. Attach a security group to the function that allows outbound access to the VPC CIDR block only. Update the DB instance security group to allow traffic from the Lambda security group" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Connect the Lambda function to a public subnet within the VPC. Attach a security group to the function that allows outbound access to the DB security group only. Update the DB instance security group to allow traffic from the Lambda public address space" is incorrect.</p><p>The Lambda function is attached to a VPC so the inbound rule on the DB security group should allow access from the Lambda security group, not the Lambda public address space.</p><p><strong>INCORRECT:</strong> "Attach an Elastic IP to the Lambda function. Attach a security group to the function that allows outbound access to the DB security group. Update the DB instance security group to allow traffic from the Lambda security group" is incorrect.</p><p>You cannot attach Elastic IP addresses to Lambda functions. When you connect a Lambda function to a VPC, Lambda assigns your function to a Hyperplane ENI (elastic network interface) for each subnet in your function\'s VPC configuration.</p><p><strong>INCORRECT:</strong> "Create an interface VPC endpoint for Lambda and update a private subnet route table to point to the endpoint. Update the DB to connect to the private subnet and access the Lambda function. Use endpoint policies to secure network access between the function and DB instance" is incorrect.</p><p>This is backwards as the VPC endpoint is allowing access from the VPC into Lambda. The database does not connect TO Lambda, the Lambda function connects TO the database.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html</a></p>',
        answers: [
          "<p>Connect the Lambda function to a private subnet within the VPC. Attach a security group to the function that allows outbound access to the VPC CIDR block only. Update the DB instance security group to allow traffic from the Lambda security group.</p>",
          "<p>Attach an Elastic IP to the Lambda function. Attach a security group to the function that allows outbound access to the DB security group. Update the DB instance security group to allow traffic from the Lambda security group.</p>",
          "<p>Connect the Lambda function to a public subnet within the VPC. Attach a security group to the function that allows outbound access to the DB security group only. Update the DB instance security group to allow traffic from the Lambda public address space.</p>",
          "<p>Create an interface VPC endpoint for Lambda and update a private subnet route table to point to the endpoint. Update the DB to connect to the private subnet and access the Lambda function. Use endpoint policies to secure network access between the function and DB instance.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A security engineer is tasked with securing the network access for an application that uses an AWS Lambda function and an Amazon RDS database. The Lambda function and database both run in the same AWS account.Which network configuration is the MOST secure?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083273,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer is building an application that is running on Amazon EC2. The application communicates with an Amazon RDS MySQL instance and authenticates with a user name and password. The credentials should be encrypted and rotated every 60 days.</p><p>Which steps should the engineer take to protect the credentials and ensure they can be automatically rotated?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS Secrets Manager can automatically rotate credentials for Oracle, Microsoft SQL Server, or MariaDB databases hosted on Amazon Relational Database Service (Amazon RDS). Secrets Manager also automatically encrypts credentials using a default key or an AWS KMS key that you specify. Applications must be configured to retrieve the secrets from Secrets Manager using the API.</p><p><strong>CORRECT: </strong>"Store the credentials in AWS Secrets Manager and choose an AWS KMS key. Enable automatic rotation every 60 days and configure the application to retrieve the secret programmatically" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Store the credentials as an encrypted string parameter in AWS Systems Manager Parameter Store. Enable automatic rotation every 60 days and grant permission to the EC2 instance role to retrieve the parameter programmatically" is incorrect.</p><p>Parameter Store does not automatically rotate credentials.</p><p><strong>INCORRECT:</strong> "Store the credentials in an Amazon S3 bucket configured with SSE-KMS encryption. Grant permission to the EC2 instance role to retrieve the credentials from S3 programmatically. Update the credential files every 60 days" is incorrect.</p><p>This is not an example of automatic rotation; Secrets Manager is a better solution.</p><p><strong>INCORRECT:</strong> "Store the credentials on an encrypted Amazon EFS volume. Configure the application instances to mount the volume. Use an AWS Lambda function to update the credentials on the EFS volume every 60 days" is incorrect.</p><p>This is an expensive and unnecessary solution. Secrets Manager is built for this purpose and will be lower cost and more efficient.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-manager-rotate-credentials-amazon-rds-database-types-oracle/">https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-manager-rotate-credentials-amazon-rds-database-types-oracle/</a></p>',
        answers: [
          "<p>Store the credentials as an encrypted string parameter in AWS Systems Manager Parameter Store. Enable automatic rotation every 60 days and grant permission to the EC2 instance role to retrieve the parameter programmatically.</p>",
          "<p>Store the credentials in AWS Secrets Manager and choose an AWS KMS key. Enable automatic rotation every 60 days and configure the application to retrieve the secret programmatically.</p>",
          "<p>Store the credentials in an Amazon S3 bucket configured with SSE-KMS encryption. Grant permission to the EC2 instance role to retrieve the credentials from S3 programmatically. Update the credential files every 60 days.</p>",
          "<p>Store the credentials on an encrypted Amazon EFS volume. Configure the application instances to mount the volume. Use an AWS Lambda function to update the credentials on the EFS volume every 60 days.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A security engineer is building an application that is running on Amazon EC2. The application communicates with an Amazon RDS MySQL instance and authenticates with a user name and password. The credentials should be encrypted and rotated every 60 days.Which steps should the engineer take to protect the credentials and ensure they can be automatically rotated?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083275,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          '<p>A security engineer was reviewing AWS KMS key policies and found this statement in several key policies within the AWS account.</p><p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question/2023-01-05_03-03-35-a7a32145359cd1d49f285e8bbfad3dc3.jpg"></p><p>What is the purpose of this statement?</p>',
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Key policies are the primary way to control access to AWS KMS keys. Every KMS key must have exactly one key policy. The statements in the key policy document determine who has permission to use the KMS key and how they can use it. You can also use IAM policies and grants to control access to the KMS key, but every KMS key must have a key policy.</p><p>By default, a policy statement like this one in this question is present in the key policy document when you create a new KMS key with the AWS Management Console. It is also present when you create a new KMS key programmatically but do not provide a key policy.</p><p>A key policy document with a statement that allows access to the AWS account (root user) enables IAM policies in the account to allow access to the KMS key. This means that IAM users and roles in the account might have access to the KMS key even if they are not explicitly listed as principals in the key policy document. It is therefore important to check IAM policies for grants.</p><p><strong>CORRECT: </strong>"Enables IAM policies in the 554422336677 account to allow access to the key" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Restricts key usage to the root user in account 554422336677" is incorrect.</p><p>The root user will be granted access to the key and IAM users <em>may</em> have access if an IAM policy grants it to them.</p><p><strong>INCORRECT:</strong> "Allows all principals from account 554422336677 to use the key with Amazon S3" is incorrect.</p><p>Amazon S3 is not mentioned at all and as explained previously all principals will not be granted access based on the key policy.</p><p><strong>INCORRECT:</strong> "Enables the root user to grant key usage permissions to principals in account 554422336677" is incorrect.</p><p>This is not the purpose of this key policy.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/determining-access-key-policy.html">https://docs.aws.amazon.com/kms/latest/developerguide/determining-access-key-policy.html</a></p>',
        answers: [
          "<p>Enables IAM policies in the 554422336677 account to allow access to the key.</p>",
          "<p>Restricts key usage to the root user in account 554422336677.</p>",
          "<p>Allows all principals from account 554422336677 to use the key with Amazon S3.</p>",
          "<p>Enables the root user to grant key usage permissions to principals in account 554422336677.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A security engineer was reviewing AWS KMS key policies and found this statement in several key policies within the AWS account.What is the purpose of this statement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083277,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company needs a solution for running analytics on the log files generated by hundreds of applications running on Amazon EC2. The solution must offer real-time analytics, support the replay of messages, and store the logs persistently.</p><p>Which AWS services can be used to meet these requirements? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>Amazon Kinesis is a service that can be used for collecting, processing, and analyzing real-time streaming data. Kinesis can be used to ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications. This service is suitable for collecting and processing the log files.</p><p>OpenSearch is the successor to Amazon Elasticsearch and is a distributed, open-source search and analytics suite used for a broad set of use cases like real-time application monitoring, log analytics, and website search. This service can receive data from Kinesis and can then analyze and store the data.</p><p><strong>CORRECT: </strong>"Amazon Kinesis" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Amazon OpenSearch" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Amazon Athena" is incorrect.</p><p>Athena is used for running SQL queries on datasets in data stores such as Amazon S3.</p><p><strong>INCORRECT:</strong> "Amazon SQS" is incorrect.</p><p>Amazon SQS is used for storing and retrieving messages. It is a message queue service and does not process or analyze the data.</p><p><strong>INCORRECT:</strong> "Amazon ElastiCache" is incorrect.</p><p>Amazon ElastiCache is an in-memory database and is not used for streaming data or performing computational processes such as analytics.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/kinesis/">https://aws.amazon.com/kinesis/</a></p><p><a href="https://aws.amazon.com/opensearch-service/the-elk-stack/what-is-opensearch/">https://aws.amazon.com/opensearch-service/the-elk-stack/what-is-opensearch/</a></p>',
        answers: [
          "<p>Amazon Kinesis</p>",
          "<p>Amazon Athena</p>",
          "<p>Amazon ElastiCache</p>",
          "<p>Amazon SQS</p>",
          "<p>Amazon OpenSearch</p>",
        ],
      },
      correct_response: ["a", "e"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A company needs a solution for running analytics on the log files generated by hundreds of applications running on Amazon EC2. The solution must offer real-time analytics, support the replay of messages, and store the logs persistently.Which AWS services can be used to meet these requirements? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083279,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A security engineer was asked to configure an automated alert that notifies the security team when configuration changes occur on security groups. The engineer has created an AWS CloudTrail trail, specified a log group, and assigned appropriate IAM permissions to CloudTrail. The solution must be simple and cost-effective.</p><p>Which additional actions should the security engineer take? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>You can create a solution that sends automatic notifications when security group changes occur. The solution in this scenario uses AWS CloudTrail to send information about the API actions that occur in the account to an Amazon CloudWatch Logs log group.</p><p>CloudTrail must be granted sufficient IAM permissions to be able to create a CloudWatch Logs log stream in the log group that you specify and to deliver CloudTrail events to that log stream.</p><p>When the logs are being correctly sent to the specified log group a metric filter should be created that filters out the log events which the security engineer is looking for. An alarm can then be created that is based on the filter. The alarm should send a notification to the security team using an Amazon SNS topic.</p><p><strong>CORRECT: </strong>"Create a metric filter and define a metric pattern that matches security group changes" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Create an alarm that sends an Amazon SNS notification if security group changes are identified" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Stream the CloudWatch Logs to Amazon Kinesis Data Streams and use Kinesis Data Analytics to identify security group changes in near real-time" is incorrect.</p><p>This solution is more expensive, and complex compared to using metric filters with CloudWatch Logs. It also does not specify a method of sending a notification.</p><p><strong>INCORRECT:</strong> "Create a query in Amazon CloudWatch Logs Insights and write an AWS Lambda function that runs the query on a schedule" is incorrect.</p><p>CloudWatch Logs Insights can be used to interactively search and analyze data in CloudWatch Logs. However, metric filters are automatic and free which is a simpler and cheaper solution.</p><p><strong>INCORRECT:</strong> "Create a subscription to an AWS Lambda function that analyses the logs and a subscription filter to filter the log events that are forwarded" is incorrect.</p><p>This is a workable solution but is more complex and costly compared to using metric filters. It also does not specify a method of sending a notification.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html</a></p>',
        answers: [
          "<p>Create an alarm that sends an Amazon SNS notification if security group changes are identified.</p>",
          "<p>Stream the CloudWatch Logs to Amazon Kinesis Data Streams and use Kinesis Data Analytics to identify security group changes in near real-time.</p>",
          "<p>Create a query in Amazon CloudWatch Logs Insights and write an AWS Lambda function that runs the query on a schedule.</p>",
          "<p>Create a subscription to an AWS Lambda function that analyses the logs and a subscription filter to filter the log events that are forwarded.</p>",
          "<p>Create a metric filter and define a metric pattern that matches security group changes.</p>",
        ],
      },
      correct_response: ["a", "e"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A security engineer was asked to configure an automated alert that notifies the security team when configuration changes occur on security groups. The engineer has created an AWS CloudTrail trail, specified a log group, and assigned appropriate IAM permissions to CloudTrail. The solution must be simple and cost-effective.Which additional actions should the security engineer take? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083281,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has two AWS accounts: A production account and a development account. Developers with user accounts in the production account need to be able to access artifacts stored in an Amazon S3 bucket in the development account when deploying resources.</p><p>A cross-account role has been created in the development account with access to the S3 bucket. The security team requires that the users can assume the role only if they are authenticated with multi-factor authentication (MFA).</p><p>Which step should the security engineer take to meet these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A cross-account role has been created and must be assumed by the developers to access the S3 bucket. To enforce a restriction that sessions must be authenticated using MFA, there are two options. Either you can configure the bucket policy, or you can configure the trust policy of the role (or both).</p><p>In this case the requirement is to ensure that users can assume the role only if they are authenticated with MFA. Therefore, the best place to add the condition is in the trust policy of the role. If the user is not authenticated with MFA, they will not be able to assume the role.</p><p>An example role trust policy is provided below:</p><p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_03-09-28-e174abd7c53e95bf1feceb9013ca6cd9.jpg"></p><p><strong>CORRECT: </strong>"Add an aws:MultiFactorAuthPresent : true condition to the role\'s trust policy" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Add an aws:MultiFactorAuthPresent : true condition to the role’s permissions policy" is incorrect.</p><p>The trust policy defines who is allowed to assume the role. The permissions policy defines the permissions they are granted.</p><p><strong>INCORRECT:</strong> "Add an aws:MultiFactorAuthPresent : true condition to the session policy" is incorrect.</p><p>Session policies limit the permissions that the role or user\'s identity-based policies grant to the session. The role’s trust policy defines who is allowed to assume the role</p><p><strong>INCORRECT:</strong> "Add an aws:MultiFactorAuthPresent : true condition to the S3 bucket policy" is incorrect.</p><p>This will restrict access to the bucket if the user is not authenticated with MFA. However, the requirement is to prevent the user from assuming the role if they are not authenticated with MFA.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/security/how-do-i-protect-cross-account-access-using-mfa-2/">https://aws.amazon.com/blogs/security/how-do-i-protect-cross-account-access-using-mfa-2/</a></p>',
        answers: [
          "<p>Add a aws:MultiFactorAuthPresent : true condition to the role’s permissions policy.</p>",
          "<p>Add a aws:MultiFactorAuthPresent : true condition to the session policy.</p>",
          "<p>Add a aws:MultiFactorAuthPresent : true condition to the S3 bucket policy.</p>",
          "<p>Add a aws:MultiFactorAuthPresent : true condition to the role's trust policy.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company has two AWS accounts: A production account and a development account. Developers with user accounts in the production account need to be able to access artifacts stored in an Amazon S3 bucket in the development account when deploying resources.A cross-account role has been created in the development account with access to the S3 bucket. The security team requires that the users can assume the role only if they are authenticated with multi-factor authentication (MFA).Which step should the security engineer take to meet these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083283,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer is working with the development team to design an application that encrypts data using an AWS KMS key. Various users with accounts in AWS IAM will need to be provided with temporary access to decrypt data using the KMS key.</p><p>What is the MOST efficient way to manage access control for the KMS key?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A <em>grant</em> is a policy instrument that allows AWS principals to use KMS keys in cryptographic operations. When authorizing access to a KMS key, grants are considered along with key policies and IAM policies. Grants are often used for temporary permissions because you can create one, use its permissions, and delete it without changing your key policies or IAM policies.</p><p><strong>CORRECT: </strong>"Use KMS grants. Programmatically create and revoke grants to manage access" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use KMS key policies. Programmatically update the KMS key policies to manage access" is incorrect.</p><p>Grants are better suited for temporary permissions compared to key policies.</p><p><strong>INCORRECT:</strong> Use an IAM role. Programmatically update the IAM role policies to manage access" is incorrect.</p><p>Permissions to use a specific KMS key can be assigned through key policies, IAM policies, grants or VPC endpoint policies. However, grants are the best option for temporary access.</p><p><strong>INCORRECT:</strong> "Use an IAM group. Programmatically add and remove users from the group and attach a policy that grants key access" is incorrect.</p><p>As above, for temporary access and KMS grant is a better option.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html">https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html</a></p>',
        answers: [
          "<p>Use an IAM role. Programmatically update the IAM role policies to manage access.</p>",
          "<p>Use KMS key policies. Programmatically update the KMS key policies to manage access.</p>",
          "<p>Use an IAM group. Programmatically add and remove users from the group and attach a policy that grants key access.</p>",
          "<p>Use KMS grants. Programmatically create and revoke grants to manage access.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A security engineer is working with the development team to design an application that encrypts data using an AWS KMS key. Various users with accounts in AWS IAM will need to be provided with temporary access to decrypt data using the KMS key.What is the MOST efficient way to manage access control for the KMS key?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083285,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer needs to access log files generated by AWS CloudTrail. The trail stores log files in an Amazon S3 bucket that is encrypted with AWS KMS managed keys (SSE-KMS). The logs should be accessed by assuming an IAM role. When attempting to access the log files the security engineer experienced an access denied error.</p><p>What is the MOST likely cause of this issue?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>To use SSE-KMS with CloudTrail, you create and manage a KMS key. You attach a policy to the key that determines which users can use the key for encrypting and decrypting CloudTrail log files. The decryption is seamless through S3. When authorized users of the key read CloudTrail log files, S3 manages the decryption, and the authorized users can read log files in unencrypted form.</p><p>Permissions to use a key can be granted in IAM permissions policies attached to users, groups, or roles, or they can be granted on the S3 bucket policy. In this case the engineer assumes a role and the role may not have the permissions needed to decrypt the data.</p><p><strong>CORRECT: </strong>"The KMS key policy does not grant the IAM role permissions to use the key for decryption" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "The KMS key policy does not grant AWS CloudTrail the permissions to write encrypted log files" is incorrect.</p><p>The log files exist so they must have been written already.</p><p><strong>INCORRECT:</strong> "The S3 bucket policy does not grant AWS CloudTrail permissions to use the key for decryption" is incorrect.</p><p>CloudTrail should be granted decrypt permissions but in this case the log files exist, so CloudTrail has been able to write and encrypt the files. Also, when the user is trying to access the files decryption happens through S3, not CloudTrail.</p><p><strong>INCORRECT:</strong> "The log files in the S3 bucket can only be decrypted and viewed using the AWS CloudTrail console" is incorrect.</p><p>This is not true. You can access the files directly through S3 if you have read permissions to S3 and decrypt permissions to use the KMS key.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/encrypting-cloudtrail-log-files-with-aws-kms.html">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/encrypting-cloudtrail-log-files-with-aws-kms.html</a></p>',
        answers: [
          "<p>The KMS key policy does not grant the IAM role permissions to use the key for decryption.</p>",
          "<p>The KMS key policy does not grant AWS CloudTrail the permissions to write encrypted log files.</p>",
          "<p>The S3 bucket policy does not grant AWS CloudTrail permissions to use the key for decryption.</p>",
          "<p>The log files in the S3 bucket can only be decrypted and viewed using the AWS CloudTrail console.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A security engineer needs to access log files generated by AWS CloudTrail. The trail stores log files in an Amazon S3 bucket that is encrypted with AWS KMS managed keys (SSE-KMS). The logs should be accessed by assuming an IAM role. When attempting to access the log files the security engineer experienced an access denied error.What is the MOST likely cause of this issue?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083287,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>Temporary security credentials that were issued by the AWS Security Token Service (STS) may have been compromised. A security engineer needs to immediately revoke the credentials so they cannot be used with any AWS service.</p><p>Which action should the security engineer take?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>We can determine that the credentials were issued to a role rather than a user as users will use access keys rather than obtaining the credentials from AWS STS. When a role needs permissions to access an AWS service it must call the AWS STS service to obtain temporary security credentials.</p><p>The best way to immediately revoke the credentials is to use the AWS management console to revoke all active sessions for the IAM role. IAM immediately attaches a policy named AWSRevokeOlderSessions to the role. The policy denies all access to users who assumed the role before the moment you chose Revoke active sessions.</p><p><strong>CORRECT: </strong>"Use the AWS management console to revoke active sessions for the IAM role" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use the AWS management console to revoke active sessions for the IAM user" is incorrect.</p><p>As explained above, an IAM role was used in this scenario, not an IAM user.</p><p><strong>INCORRECT:</strong> "Use the AWS management console to delete the IAM role" is incorrect.</p><p>The best way to prevent the credentials from being used is to revoke all active sessions. Any user who assumes the role <em>after </em>you chose to revoke active sessions is not affected by this action.</p><p><strong>INCORRECT:</strong> "Use the AWS management console to delete the IAM user" is incorrect.</p><p>As explained above, an IAM role rather than a user was used in this scenario.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html</a></p>',
        answers: [
          "<p>Use the AWS management console to revoke active sessions for the IAM role.</p>",
          "<p>Use the AWS management console to delete the IAM role.</p>",
          "<p>Use the AWS management console to revoke active sessions for the IAM user.</p>",
          "<p>Use the AWS management console to delete the IAM user.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "Temporary security credentials that were issued by the AWS Security Token Service (STS) may have been compromised. A security engineer needs to immediately revoke the credentials so they cannot be used with any AWS service.Which action should the security engineer take?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083289,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          '<p>A company has as an AWS Organization for developers. The organization includes several accounts and SCPs are used to control access to AWS services. A single SCP exists at the root of the organization and has the following policy statements:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question/2023-01-05_03-20-17-63fdc92057a0a8cb88e757cd2193068f.jpg"><p>A group of developers are working on a project that requires an Amazon RDS database. These developers use an account that is in a child OU with an SCP attached that allows all Amazon RDS API actions. The developers have full IAM permissions for RDS but are unable to launch RDS database instances.</p><p>Which change must a security engineer implement so that the developers can access Amazon RDS?</p>',
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Inheritance for service control policies behaves like a filter through which permissions flow to all parts of the tree below. If an action is blocked by a Deny statement, then all OUs and accounts affected by that SCP are denied access to that action. An SCP at a lower level can\'t add a permission after it is blocked by an SCP at a higher level. SCPs can <strong><em>only</em></strong> filter; they never add permissions.</p><p>In this case the root SCP denies all actions for Amazon RDS. This deny statement will flow down to all OUs and accounts in the hierarchy. Therefore it is not possible to allow access to RDS anywhere in the organization if this policy statement exists.</p><p>The simplest solution to this issue is to simply remove the deny statement for RDS at the root level.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_03-20-17-59111c1ef9f0c147d83cdfe31c3f7dfb.jpg"><p><strong>CORRECT: </strong>"Remove the deny statement for Amazon RDS from the root SCP" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Remove the root SCP from the root of the organization" is incorrect.</p><p>You must always have a policy attached at the root and any OU level. You can remove the root SCP but only after you have attached another SCP.</p><p><strong>INCORRECT:</strong> "Add a statement to the SCP of the child OU that allows all actions on all resources" is incorrect.</p><p>The deny statement at the root SCP level overrides any allows anywhere else in the organization.</p><p><strong>INCORRECT:</strong> "Attach a resource-based policy to Amazon RDS granting launch permissions" is incorrect.</p><p>You cannot attach resource-based policies to Amazon RDS.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritance_auth.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritance_auth.html</a></p>',
        answers: [
          "<p>Add a statement to the SCP of the child OU that allows all actions on all resources.</p>",
          "<p>Remove the deny statement for Amazon RDS from the root SCP.</p>",
          "<p>Attach a resource-based policy to Amazon RDS granting launch permissions.</p>",
          "<p>Remove the root SCP from the root of the organization.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company has as an AWS Organization for developers. The organization includes several accounts and SCPs are used to control access to AWS services. A single SCP exists at the root of the organization and has the following policy statements:A group of developers are working on a project that requires an Amazon RDS database. These developers use an account that is in a child OU with an SCP attached that allows all Amazon RDS API actions. The developers have full IAM permissions for RDS but are unable to launch RDS database instances.Which change must a security engineer implement so that the developers can access Amazon RDS?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083291,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          '<p>A company has configured federation between an on-premises identity provider (IdP) and AWS. Developers authenticate into an identity account and assume an IAM role named IdPUsersRole. The developers then access a production account by assuming a role named ProdDevRole in the production account.</p><p>Developers are unable to assume the IAM role in the production account. The policy attached to the role in the identity account is:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question/2023-01-05_03-21-58-1df8c3f4bcc13f6e7590603358e86056.jpg"><p>What needs to be done to enable the developers to assume the appropriate role in the production account?</p>',
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The developer users have been granted the permissions they need in the identity account to be able to assume a role in the production account. Additionally, the developers will need permissions in the production account to be able to assume the role there.</p><p>The “sts: AssumeRole” API action is performed when assuming a role and the IAM role’s trust policy determines who is allowed to perform this API action. In this case the trust policy for the IAM role in the production account must be configured to allow this API action for the principal name of the IAM role in the identity account.</p><p>The trust policy should be configured as per the example below. The production account number in this case is “123412341234”.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_03-21-58-d12a35f71e93197a579e4467adb10ac8.jpg"><p><strong>CORRECT: </strong>"Update the trust policy on the role in the production account to allow the “sts: AssumeRole” API action for the IdPUsersRole principal in the identity account" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Update the IAM policy attached to the role in the identity account to allow the “sts: AssumeRole” API action for the ProdDevRole principal in the production account" is incorrect.</p><p><strong>INCORRECT:</strong> "Update the trust policy on the role in the identity account to allow the “sts: AssumeRole” API action for the IdPUsersRole principal in the identity account" is incorrect.</p><p><strong>INCORRECT:</strong> "Update the IAM policy attached to the role in the target account to allow the “sts: AssumeRole” API action for the ProdDevRole principal in the production account" is incorrect.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html</a></p>',
        answers: [
          "<p>Update the trust policy on the role in the production account to allow the “sts: AssumeRole” API action for the IdPUsersRole principal in the identity account.</p>",
          "<p>Update the IAM policy attached to the role in the identity account to allow the “sts: AssumeRole” API action for the ProdDevRole principal in the production account.</p>",
          "<p>Update the trust policy on the role in the identity account to allow the “sts: AssumeRole” API action for the IdPUsersRole principal in the identity account.</p>",
          "<p>Update the IAM policy attached to the role in the target account to allow the “sts: AssumeRole” API action for the ProdDevRole principal in the production account.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company has configured federation between an on-premises identity provider (IdP) and AWS. Developers authenticate into an identity account and assume an IAM role named IdPUsersRole. The developers then access a production account by assuming a role named ProdDevRole in the production account.Developers are unable to assume the IAM role in the production account. The policy attached to the role in the identity account is:What needs to be done to enable the developers to assume the appropriate role in the production account?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083293,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>An operations engineer plans to launch a collection of Amazon EC2 instances. The instances will run a custom application which will be managed by operations users who are members of a group. The operations users should be granted access only to the custom application instances.</p><p>Which actions should a security engineer take to control access? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>The condition element of an IAM policy can be used to identify the EC2 instances to which access should be granted. The IAM policy can be attached to the users or groups that require access. The best practice is to add the users to a group and attach the policy to the group. In this case the Condition element can be used to identify the instances by tag.</p><p><strong>CORRECT: </strong>"Add specific tags to the Amazon EC2 instances" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Attach an IAM policy to the operations users that grants access to the instances with the specific tag using the Condition element" is a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Attach an IAM role to the Amazon EC2 instances" is incorrect.</p><p>An IAM role would give the instance permissions to other AWS services. In this case the question asks how the operations users can be granted access to the instances.</p><p><strong>INCORRECT:</strong> "Attach an instance profile to the Amazon EC2 instances" is incorrect.</p><p>When you attach an IAM role to an instance you do so using an instance profile. As per the previous explanation this is assigning permissions to EC2 rather than the users.</p><p><strong>INCORRECT:</strong> "Create an IAM policy that grants access to the instances based on the Principal element" is incorrect.</p><p>The condition element should be used to identify the tags. The principal element is not relevant when attaching a policy to a user, role, or group.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html#amazonec2-policy-keys">https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html#amazonec2-policy-keys</a></p>',
        answers: [
          "<p>Attach an IAM role to the Amazon EC2 instances.</p>",
          "<p>Attach an instance profile to the Amazon EC2 instances.</p>",
          "<p>Create an IAM policy that grants access to the instances based on the Principal element.</p>",
          "<p>Attach an IAM policy to the operations users that grants access to the instances with the specific tag using the Condition element.</p>",
          "<p>Add specific tags to the Amazon EC2 instances.</p>",
        ],
      },
      correct_response: ["d", "e"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "An operations engineer plans to launch a collection of Amazon EC2 instances. The instances will run a custom application which will be managed by operations users who are members of a group. The operations users should be granted access only to the custom application instances.Which actions should a security engineer take to control access? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083295,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has several AWS Lambda functions. While reviewing the Lambda functions a security engineer discovers that sensitive information is being stored in environment variables and is viewable as plaintext in the Lambda console. The values of the sensitive information are 8 KB in size and there are over 10,000 values stored across the functions.</p><p>What is the MOST cost-effective way to address this security issue?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS Secrets Manager is well suited to this use case. Secrets can be stored with values up to 10KB in size and the maximum number of secrets within a Region is 500,000.</p><p>Both Systems Manager Parameter Store and Secrets Manager support controlling access to the information stored using IAM policies.</p><p>Pricing for secrets manager includes the cost of storing the secret value as well as API calls, refer to the pricing page linked below for more information.</p><p><strong>CORRECT: </strong>"Store the environment variables in AWS Secrets Manager and access them at runtime. Use IAM permissions to restrict access to the secrets to only the Lambda functions that require access" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Store the environment variables in AWS Systems Manager Parameter Store as standard parameters and access them at runtime. Use IAM permissions to restrict access to the parameters to only the Lambda functions that require access" is incorrect.</p><p>Standard parameters support up to 4KB for the parameter value and so cannot be used for this use case. Also, the limit of 10,000 parameters would be reached leaving no room for future growth.</p><p><strong>INCORRECT:</strong> "Store the environment variables in an encrypted Amazon EFS file system and access them at runtime. Use POSIX permissions to restrict access to only the Lambda functions that require access" is incorrect.</p><p>EFS would be an expensive solution and Lambda cannot mount an EFS file system.</p><p><strong>INCORRECT:</strong> "Use AWS Config to store the environment variables. Access the environment variables at runtime. Use IAM permissions to restrict access to the environment variables to only the Lambda functions that require access" is incorrect.</p><p>Config cannot be used to store information such as environment variables.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html</a></p><p><a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html</a></p><p><a href="https://aws.amazon.com/secrets-manager/pricing/">https://aws.amazon.com/secrets-manager/pricing/</a></p>',
        answers: [
          "<p>Store the environment variables in an encrypted Amazon EFS file system and access them at runtime. Use POSIX permissions to restrict access to only the Lambda functions that require access.</p>",
          "<p>Use AWS Config to store the environment variables. Access the environment variables at runtime. Use IAM permissions to restrict access to the environment variables to only the Lambda functions that require access.</p>",
          "<p>Store the environment variables in AWS Secrets Manager and access them at runtime. Use IAM permissions to restrict access to the secrets to only the Lambda functions that require access.</p>",
          "<p>Store the environment variables in AWS Systems Manager Parameter Store as standard parameters and access them at runtime. Use IAM permissions to restrict access to the parameters to only the Lambda functions that require access.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company has several AWS Lambda functions. While reviewing the Lambda functions a security engineer discovers that sensitive information is being stored in environment variables and is viewable as plaintext in the Lambda console. The values of the sensitive information are 8 KB in size and there are over 10,000 values stored across the functions.What is the MOST cost-effective way to address this security issue?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083297,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An online fitness platform based in Germany uses Amazon Cognito with the Cognito Hosted UI to manage user registrations and sign-ins. Recently, the platform's security team has noticed an unusual number of fraudulent sign-ups originating from outside Germany.</p><p>The security team wants to implement a mechanism that can add a layer of custom validation during the registration process that checks the location of the customer. The mechanism should be able to accept or reject user registration requests based on the outcome of the validation process.</p><p>Which solution should the security team implement to fulfill these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS Lambda triggers for Amazon Cognito can add custom validation to user pool workflows. A Pre sign-up Lambda trigger can perform custom validation during sign-up, such as checking the geographical origin of the registration request.</p><p><strong>CORRECT: </strong>"Configure a Pre Sign-Up AWS Lambda trigger and associate it with the Amazon Cognito user pool to execute custom validation during sign-up" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Implement AWS WAF with a geographic match statement and connect it to the Amazon Cognito user pool\'s domain to filter requests based on geographical origin" is incorrect.</p><p>AWS WAF can protect the Cognito User Pool\'s Hosted UI from web exploits, but it does not control or influence user registration or authentication directly in the user pool.</p><p><strong>INCORRECT:</strong> "Enable a multi-factor authentication (MFA) method in the Cognito user pool to add an extra layer of security during the user authentication process" is incorrect.</p><p>While multi-factor authentication (MFA) adds an additional layer of security during user authentication, it does not provide control over the registration process or validation based on geographical location.</p><p><strong>INCORRECT:</strong> "Configure a social identity provider (IdP) in Amazon Cognito to validate requests through the hosted UI" is incorrect.</p><p>A social identity provider (IdP) can simplify the authentication process but does not provide a mechanism to prevent fraudulent sign-ups from specific geographic locations.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html</a></p>',
        answers: [
          "<p>Implement AWS WAF with a geographic match statement and connect it to the Amazon Cognito user pool's domain to filter requests based on geographical origin.</p>",
          "<p>Configure a Pre Sign-Up AWS Lambda trigger and associate it with the Amazon Cognito user pool to execute custom validation during sign-up.</p>",
          "<p>Enable a multi-factor authentication (MFA) method in the Cognito user pool to add an extra layer of security during the user authentication process.</p>",
          "<p>Configure a social identity provider (IdP) in Amazon Cognito to validate requests through the hosted UI.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "An online fitness platform based in Germany uses Amazon Cognito with the Cognito Hosted UI to manage user registrations and sign-ins. Recently, the platform's security team has noticed an unusual number of fraudulent sign-ups originating from outside Germany.The security team wants to implement a mechanism that can add a layer of custom validation during the registration process that checks the location of the customer. The mechanism should be able to accept or reject user registration requests based on the outcome of the validation process.Which solution should the security team implement to fulfill these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083299,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A multinational corporation uses Amazon S3 for storing various types of files across a multitude of S3 buckets, each of which contains an extensive number of objects. The company's security team is keen on analyzing object access patterns, such as pinpointing the top 50 most accessed objects, the 20 largest downloaded files, and the objects with the lengthiest download time.</p><p>The team intends to display this information in an intuitive, interactive dashboard, utilizing SQL queries for efficient analysis.</p><p>Which combination of AWS services should a security engineer use to fulfill these requirements? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>Amazon S3 server access logging is an essential feature for recording detailed logs of the requests made to S3 buckets. The logs will contain the data needed for analysis, such as the objects accessed, the size of the data transferred, and the time taken.</p><p>Amazon Athena is an interactive query service that enables you to analyze data directly in Amazon S3 using standard SQL.</p><p>Amazon QuickSight is a scalable, serverless, embeddable, machine learning-powered business intelligence (BI) service for building visualizations, performing ad-hoc analysis, and quickly getting business insights from your data.</p><p>Combining Athena with QuickSight, you can execute SQL queries on the server access logs and visualize the results in an interactive dashboard.</p><p><strong>CORRECT: </strong>"Enable Amazon S3 server access logging to monitor and record detailed logs of the requests made to the S3 buckets" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Use Amazon Athena to perform SQL queries on the server access logs in S3 and employ Amazon QuickSight for visualizing the analyzed data in an interactive dashboard" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Deploy Amazon GuardDuty to assess potential security threats and unauthorized access to the stored data" is incorrect.</p><p>Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior, but it doesn’t allow for detailed analysis or visualization of S3 access patterns, as required in this scenario.</p><p><strong>INCORRECT:</strong> "Utilize Amazon CloudWatch Logs Insights to perform SQL queries and analyze the logs from AWS services" is incorrect.</p><p>Amazon CloudWatch Logs Insights is primarily used for analyzing and visualizing logs from AWS services. While it can be used for querying logs, in this scenario, the combination of Athena for querying and QuickSight for visualization is more appropriate for analyzing S3 access logs.</p><p><strong>INCORRECT:</strong> "Leverage AWS Lambda to automatically process and filter the server access logs and store the results in an Amazon DynamoDB table" is incorrect.</p><p>While AWS Lambda can be used to process logs, it is not ideal for performing complex SQL queries on large datasets or for visualizing the data. In this scenario, Amazon Athena and Amazon QuickSight are better suited for analyzing and visualizing the S3 server access logs.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/quicksight/latest/user/create-a-data-set-athena.html">https://docs.aws.amazon.com/quicksight/latest/user/create-a-data-set-athena.html</a></p>',
        answers: [
          "<p>Enable Amazon S3 server access logging to monitor and record detailed logs of the requests made to the S3 buckets.</p>",
          "<p>Use Amazon Athena to perform SQL queries on the server access logs in S3 and employ Amazon QuickSight for visualizing the analyzed data in an interactive dashboard.</p>",
          "<p>Deploy Amazon GuardDuty to assess potential security threats and unauthorized access to the stored data.</p>",
          "<p>Utilize Amazon CloudWatch Logs Insights to perform SQL queries and analyze the logs from AWS services.</p>",
          "<p>Leverage AWS Lambda to automatically process and filter the server access logs and store the results in an Amazon DynamoDB table.</p>",
        ],
      },
      correct_response: ["a", "b"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A multinational corporation uses Amazon S3 for storing various types of files across a multitude of S3 buckets, each of which contains an extensive number of objects. The company's security team is keen on analyzing object access patterns, such as pinpointing the top 50 most accessed objects, the 20 largest downloaded files, and the objects with the lengthiest download time.The team intends to display this information in an intuitive, interactive dashboard, utilizing SQL queries for efficient analysis.Which combination of AWS services should a security engineer use to fulfill these requirements? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083301,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A business is developing a cloud-native application on AWS and has selected AWS CodeBuild for automating the process of building, testing, and packaging their software code. To meet their security requirements, the company needs to ensure that all CodeBuild API operations executed within the VPC do not traverse the public internet.</p><p>What should a security engineer do to meet this requirement?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>An interface VPC endpoint (powered by AWS PrivateLink) enables you to connect your VPC to supported AWS services, including CodeBuild, and services hosted by other AWS accounts. This setup enables you to keep the network traffic within the AWS network without traversing the public internet.</p><p><strong>CORRECT: </strong>"Deploy an interface VPC endpoint for CodeBuild API operations" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Launch a NAT gateway in a public subnet in the VPC" is incorrect.</p><p>NAT gateways enable instances in a private subnet to connect to the internet or other AWS services but prevent the internet from initiating a connection with those instances. It does not provide the private link needed for AWS CodeBuild API operations to occur within the VPC.</p><p><strong>INCORRECT:</strong> "Implement a gateway VPC endpoint for CodeBuild API operations" is incorrect.</p><p>Gateway VPC endpoints are used to connect VPCs to Amazon S3 and DynamoDB. They cannot be used to provide access to CodeBuild, which requires an interface VPC endpoint.</p><p><strong>INCORRECT:</strong> "Establish a connection to the VPC using AWS Direct Connect" is incorrect.</p><p>AWS Direct Connect is a service that establishes a dedicated network connection from your premises to AWS. However, it is not required or directly related to enabling private API communication within a VPC.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/codebuild/latest/userguide/use-vpc-endpoints-with-codebuild.html">https://docs.aws.amazon.com/codebuild/latest/userguide/use-vpc-endpoints-with-codebuild.html</a></p>',
        answers: [
          "<p>Launch a NAT gateway in a public subnet in the VPC.</p>",
          "<p>Deploy an interface VPC endpoint for CodeBuild API operations.</p>",
          "<p>Implement a gateway VPC endpoint for CodeBuild API operations.</p>",
          "<p>Establish a connection to the VPC using AWS Direct Connect.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A business is developing a cloud-native application on AWS and has selected AWS CodeBuild for automating the process of building, testing, and packaging their software code. To meet their security requirements, the company needs to ensure that all CodeBuild API operations executed within the VPC do not traverse the public internet.What should a security engineer do to meet this requirement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083303,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A fintech company offers a web application that stores files on Amazon S3 and processes transactions on Amazon EC2. Users are complaining about slow response times, and recent cybersecurity audits have raised concerns about web content security.</p><p>The company needs to accelerate content delivery while enhancing security and privacy, without altering the application code.</p><p>What combination of actions should the company undertake to meet these requirements? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>Amazon CloudFront can speed up the distribution of static and dynamic web content, such as .html, .css, .js, and image files, to users. CloudFront delivers content through a worldwide network of data centers called edge locations. When a user requests content that you\'re serving with CloudFront, the user is routed to the edge location that provides the lowest latency.</p><p>Lambda@Edge allows you to run AWS Lambda functions in response to CloudFront events, which enables dynamic, personalized content generation close to your users. You can write Lambda@Edge functions to modify headers, which would increase security without changing application code.</p><p><strong>CORRECT: </strong>"Configure Amazon CloudFront and set up a distribution for the S3 and EC2 origins to accelerate content delivery" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Use an AWS Lambda function configured with CloudFront (Lambda@Edge) to add HTTP security headers on origin responses" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use an AWS WAF web ACL with predefined AWS managed rules to add HTTP security headers to origin responses" is incorrect.</p><p>AWS WAF is a web application firewall that helps protect web applications from common web exploits. However, it does not add HTTP security headers to responses.</p><p><strong>INCORRECT:</strong> "Deploy Amazon ElastiCache to cache the responses of the application endpoints" is incorrect.</p><p>Amazon ElastiCache is a web service that makes it easy to deploy and run Memcached or Redis protocol-compliant server nodes in the cloud. While it can help with caching, it wouldn\'t directly address the issue of adding HTTP security headers.</p><p><strong>INCORRECT:</strong> "Utilize an Application Load Balancer (ALB) with enabled Sticky Sessions to preserve the connection header from incoming client requests after forwarding the response back to the client" is incorrect.</p><p>While an ALB can improve load balancing of incoming application traffic, it does not directly address the need for improved content delivery speed or enhanced HTTP security.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/networking-and-content-delivery/adding-http-security-headers-using-lambdaedge-and-amazon-cloudfront/">https://aws.amazon.com/blogs/networking-and-content-delivery/adding-http-security-headers-using-lambdaedge-and-amazon-cloudfront/</a></p>',
        answers: [
          "<p>Configure Amazon CloudFront and set up a distribution for the S3 and EC2 origins to accelerate content delivery.</p>",
          "<p>Use an AWS WAF web ACL with predefined AWS managed rules to add HTTP security headers to origin responses.</p>",
          "<p>Use an AWS Lambda function configured with CloudFront (Lambda@Edge) to add HTTP security headers on origin responses.</p>",
          "<p>Deploy Amazon ElastiCache to cache the responses of the application endpoints.</p>",
          "<p>Utilize an Application Load Balancer (ALB) with enabled Sticky Sessions to preserve the connection header from incoming client requests after forwarding the response back to the client.</p>",
        ],
      },
      correct_response: ["a", "c"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A fintech company offers a web application that stores files on Amazon S3 and processes transactions on Amazon EC2. Users are complaining about slow response times, and recent cybersecurity audits have raised concerns about web content security.The company needs to accelerate content delivery while enhancing security and privacy, without altering the application code.What combination of actions should the company undertake to meet these requirements? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083305,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A streaming media company is using an Application Load Balancer (ALB) to manage the traffic of its on-demand video service. Recently, they deployed Amazon CloudFront to accelerate content delivery. Despite this, the company noticed that some requests are still bypassing CloudFront and reaching the ALB directly.</p><p>The company needs to ensure that its Amazon EC2 instances, which are behind the ALB, only process traffic coming from CloudFront.</p><p>Which combination of steps should the company undertake to fulfill these requirements? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>By setting up CloudFront to include a custom HTTP header in requests, you can create a unique identifier that the ALB can check to validate traffic coming from CloudFront.</p><p>After setting up CloudFront to include a custom HTTP header in requests, you would then configure the ALB to deny any requests that do not include that custom header. This ensures that only traffic from CloudFront is processed by the EC2 instances.</p><p><strong>CORRECT: </strong>"Configure CloudFront to add a custom HTTP header to requests that CloudFront sends to the ALB" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Configure the ALB to deny requests that do not contain the custom HTTP header" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Set up CloudFront to implement a unique User-Agent header to be validated by the ALB" is incorrect.</p><p>While using a unique User-Agent header could theoretically be used as a method of identifying traffic, this header is easily spoofed and would not provide a reliable means of security.</p><p><strong>INCORRECT:</strong> "Configure the ALB and CloudFront to utilize the X-Forwarded-For header to validate client IP addresses" is incorrect.</p><p>The X-Forwarded-For header is used to identify the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer. This would not be applicable in this situation, as the goal is to prevent direct traffic to the ALB, not validate client IP addresses.</p><p><strong>INCORRECT:</strong> "Implement the same SSL/TLS certificate, issued by AWS Certificate Manager (ACM), on both the ALB and CloudFront" is incorrect.</p><p>While using the same SSL/TLS certificate for both ALB and CloudFront would be beneficial from a security standpoint, it would not contribute to preventing direct traffic to the ALB.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html</a></p>',
        answers: [
          "<p>Configure CloudFront to add a custom HTTP header to requests that CloudFront sends to the ALB.</p>",
          "<p>Configure the ALB to deny requests that do not contain the custom HTTP header.</p>",
          "<p>Set up CloudFront to implement a unique User-Agent header to be validated by the ALB.</p>",
          "<p>Configure the ALB and CloudFront to utilize the X-Forwarded-For header to validate client IP addresses.</p>",
          "<p>Implement the same SSL/TLS certificate, issued by AWS Certificate Manager (ACM), on both the ALB and CloudFront.</p>",
        ],
      },
      correct_response: ["a", "b"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A streaming media company is using an Application Load Balancer (ALB) to manage the traffic of its on-demand video service. Recently, they deployed Amazon CloudFront to accelerate content delivery. Despite this, the company noticed that some requests are still bypassing CloudFront and reaching the ALB directly.The company needs to ensure that its Amazon EC2 instances, which are behind the ALB, only process traffic coming from CloudFront.Which combination of steps should the company undertake to fulfill these requirements? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083307,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company uses Microsoft Active Directory (AD) for access management for on-premises resources. They wish to use the same Microsoft AD for authenticating to AWS including accessing the AWS Management Console. All identity data must remain on-premises</p><p>Which solution meets these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>This solution uses federated single sign-on (SSO), which lets users sign into the AWS Management Console or make programmatic calls to AWS APIs by using assertions from a SAML-compliant identity provider (IdP) like ADFS. With this solution all identity data is stored in the on-premises directory and only authentication tokens are used within AWS. This meets the security requirements for the authentication solution.</p><p>The following image depicts the steps involved in identity federation:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-07_17-07-49-c070d107993b24f47075b941c6b93b35.jpg"><p><strong>CORRECT: </strong>"Set up federated sign-in to AWS through ADFS and SAML" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Deploy domain controllers on Amazon EC2" is incorrect.</p><p>This would involve replicating the AD to the EC2 DCs which would mean identities are replicated to AWS.</p><p><strong>INCORRECT:</strong> "Create an AWS Managed Microsoft AD" is incorrect.</p><p>This would involve creating an Active Directory within AWS so the identity data would be stored there. You would then need to setup trust relationships.</p><p><strong>INCORRECT:</strong> "Create an Amazon Cognito Identity Pool" is incorrect.</p><p>Amazon Cognito is used for authenticating to web and mobile applications and is not related to Microsoft AD.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/security/enabling-federation-to-aws-using-windows-active-directory-adfs-and-saml-2-0/">https://aws.amazon.com/blogs/security/enabling-federation-to-aws-using-windows-active-directory-adfs-and-saml-2-0/</a></p>',
        answers: [
          "<p>Deploy domain controllers on Amazon EC2.</p>",
          "<p>Create an AWS Managed Microsoft AD.</p>",
          "<p>Create an Amazon Cognito Identity Pool.</p>",
          "<p>Set up federated sign-in to AWS through ADFS and SAML.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company uses Microsoft Active Directory (AD) for access management for on-premises resources. They wish to use the same Microsoft AD for authenticating to AWS including accessing the AWS Management Console. All identity data must remain on-premisesWhich solution meets these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083309,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security vulnerability has been discovered that could lead to sensitive data being leaked on TCP port 5601. The development team is working on updating the code, but it could take several days. A security engineer must identify any hosts attempting to send data over port 5601 and prevent the traffic leaving the network.</p><p>How can the security engineer accomplish this goal?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Flow logs can publish flow log data directly to Amazon CloudWatch. When publishing to CloudWatch Logs, flow log data is published to a log group, and each network interface has a unique log stream in the log group.</p><p>A metric filter can be created that searches for specific event patterns such as connection attempts to TCP port 5601. The metric filter can trigger an alarm that sends an Amazon SNS notification to the security team.</p><p>The security team should then update the Network ACL of any affected subnets to block outbound access on the specific port.</p><p><strong>CORRECT: </strong>"Capture IP traffic using VPC Flow Logs and create a metric filter with an alarm that notifies the security team if connection attempts are made. Then, update NACLs to block the traffic" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Install the unified CloudWatch agent on Amazon EC2 instances and collect log files in CloudWatch Logs. Create a metric filter with an alarm that notifies the security team if connection attempts are made. Then, update NACLs to block the traffic" is incorrect.</p><p>The unified CloudWatch agent does not send metrics reporting which ports the instance connects to.</p><p><strong>INCORRECT:</strong> "Use AWS CloudTrail to log API actions in an Amazon S3 bucket. Use Amazon Athena to query the log files and identify attempts to connect. Then, update security groups to block the traffic" is incorrect.</p><p>CloudTrail API actions are not initiated for sending network packets so the required information will not be recorded in the log files. Also, you cannot create deny rules with security groups so NACLs should be updated instead.</p><p><strong>INCORRECT:</strong> "Run an Amazon Inspector custom network assessment to identify Amazon EC2 instances that have TCP port 5601 open. Then, update security groups to block the traffic" is incorrect.</p><p>Amazon Inspector checks for network reachability by checking which ports your instance is listening on. It does not analyze which ports your instance connects to outbound.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-cwl.html">https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-cwl.html</a></p>',
        answers: [
          "<p>Use AWS CloudTrail to log API actions in an Amazon S3 bucket. Use Amazon Athena to query the log files and identify attempts to connect. Then, update security groups to block the traffic.</p>",
          "<p>Capture IP traffic using VPC Flow Logs and create a metric filter with an alarm that notifies the security team if connection attempts are made. Then, update NACLs to block the traffic.</p>",
          "<p>Install the unified CloudWatch agent on Amazon EC2 instances and collect log files in CloudWatch Logs. Create a metric filter with an alarm that notifies the security team if connection attempts are made. Then, update NACLs to block the traffic.</p>",
          "<p>Run an Amazon Inspector custom network assessment to identify Amazon EC2 instances that have TCP port 5601 open. Then, update security groups to block the traffic.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "A security vulnerability has been discovered that could lead to sensitive data being leaked on TCP port 5601. The development team is working on updating the code, but it could take several days. A security engineer must identify any hosts attempting to send data over port 5601 and prevent the traffic leaving the network.How can the security engineer accomplish this goal?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083311,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A security engineer must implement a solution to allow the company's SysOps team to have interactive command line access to Amazon EC2 Linux instances using the AWS Management Console. The solution should minimize the attack surface of the EC2 instances.</p><p>Which steps should the security engineer take to satisfy this requirement while maintaining least privilege? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>AWS Systems Manager Session Manager is a fully managed AWS Systems Manager capability that allows you to manage your Amazon Elastic Compute Cloud (Amazon EC2) instances, on-premises instances, and virtual machines (VMs) through an interactive one-click browser-based shell or through the AWS Command Line Interface (AWS CLI).</p><p>Session Manager provides secure and auditable instance management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys.</p><p>To use Session Manager you must use a supported operating system and have the SSM agent installed. Session Manager also requires specific permissions which can be granted by attaching an IAM policy to an instance profile.</p><p>Role based access control for users can be implemented by using IAM user policies. In this case the SysOps team can be granted access to use Session Manager to connect to the EC2 instances.</p><p><strong>CORRECT: </strong>"Install the Systems Manager SSM Agent on the EC2 Linux instances and attach an IAM role that grants permissions" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Create an IAM user policy for Session Manager access granting the SysOps team access to the EC2 Linux instances" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an IAM user policy granting the SysOps team access to the EC2 management console" is incorrect.</p><p>This is not a step that is required for connecting using Session Manager. Instead the user policy should grant access to connect using Session Manager to the instances.</p><p><strong>INCORRECT:</strong> "Configure the security group for the EC2 Linux instances to allow inbound traffic on SSH port 22 from AWS IP addresses" is incorrect.</p><p>With Session Manager you do not need to open ports to connect.</p><p><strong>INCORRECT:</strong> "Enable EC2 instance connect and generate new private and public keys using the AWS CLI" is incorrect.</p><p>EC2 instance connect relies on opening ports and security groups to connect. Instead the solution should use Session Manager to minimize the attack surface.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html">https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html</a></p>',
        answers: [
          "<p>Install the Systems Manager SSM Agent on the EC2 Linux instances and attach an IAM role that grants permissions.</p>",
          "<p>Create an IAM user policy granting the SysOps team access to the EC2 management console.</p>",
          "<p>Configure the security group for the EC2 Linux instances to allow inbound traffic on SSH port 22 from AWS IP addresses.</p>",
          "<p>Enable EC2 instance connect and generate new private and public keys using the AWS CLI.</p>",
          "<p>Create an IAM user policy for Session Manager access granting the SysOps team access to the EC2 Linux instances.</p>",
        ],
      },
      correct_response: ["a", "e"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A security engineer must implement a solution to allow the company's SysOps team to have interactive command line access to Amazon EC2 Linux instances using the AWS Management Console. The solution should minimize the attack surface of the EC2 instances.Which steps should the security engineer take to satisfy this requirement while maintaining least privilege? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083313,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          '<p>A company has created an organization in AWS Organizations. The company has several accounts and OUs and uses the default FullAWSAccess SCP. A security engineer needs to ensure that no one in member accounts can disable specific AWS services. The security engineer must ensure that permissions granted by IAM policies defined in member accounts are not overridden.</p><p>What will be the effect of adding the following SCP to the root of the organization?</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question/2023-07-07_17-12-00-44ee2150989bfe7292d14ec11741d508.jpg">',
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A deny list strategy makes use of the FullAWSAccess SCP that is attached by default to every OU and account. This SCP overrides the default implicit deny, and explicitly allows all permissions to flow down from the root to every account, unless you explicitly deny a permission with an additional SCP that you create and attach to the appropriate OU or account.</p><p>This strategy works because an explicit deny in a policy always overrides any kind of allow. No account below the level of the OU with the deny policy can use the denied API, and there is no way to add the permission back lower in the hierarchy.</p><p>In this scenario the SCP will deny modification of the specified services for all member accounts. This will affect users and administrators in member accounts. The SCP does not affect IAM policies defined in member accounts for specifying privileges to other AWS services.</p><p>Note that SCPs don\'t affect users or roles in the management account. They affect only the member accounts in your organization.</p><p><strong>CORRECT: </strong>"All users in member accounts will not be able to disable AWS SecurityHub or delete or modify the Amazon GuardDuty configuration. IAM policies defined in member accounts will not be overridden" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "All users in the root account will not be able to disable AWS SecurityHub or delete or modify the Amazon GuardDuty configuration. IAM policies defined in member accounts will be overridden" is incorrect.</p><p>In fact the administrators in the root account are not restricted by SCPs. The SCP will affect all users in member accounts. IAM policies that specify privileges to other AWS services will not be affected.</p><p><strong>INCORRECT:</strong> "All users in member accounts will be able to disable AWS SecurityHub and delete or modify the Amazon GuardDuty configuration. IAM policies defined in member accounts will be overridden" is incorrect.</p><p>IAM policies that specify privileges to other AWS services will not be affected. The goal of restricting the specific services specified in the SCP is achieved without affecting permissions or available permissions for other AWS services.</p><p><strong>INCORRECT:</strong> "Users (but not administrators) in member accounts will not be able to disable AWS SecurityHub or delete or modify the Amazon GuardDuty configuration. IAM policies defined in member accounts will not be overridden" is incorrect.</p><p>The SCPs will affect all users including administrators.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritance_auth.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritance_auth.html</a></p>',
        answers: [
          "<p>All users in member accounts will not be able to disable AWS SecurityHub or delete or modify the Amazon GuardDuty configuration. IAM policies defined in member accounts will not be overridden.</p>",
          "<p>All users in the root account will not be able to disable AWS SecurityHub or delete or modify the Amazon GuardDuty configuration. IAM policies defined in member accounts will be overridden.</p>",
          "<p>All users in member accounts will be able to disable AWS SecurityHub and delete or modify the Amazon GuardDuty configuration. IAM policies defined in member accounts will be overridden.</p>",
          "<p>Users (but not administrators) in member accounts will not be able to disable AWS SecurityHub or delete or modify the Amazon GuardDuty configuration. IAM policies defined in member accounts will not be overridden.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company has created an organization in AWS Organizations. The company has several accounts and OUs and uses the default FullAWSAccess SCP. A security engineer needs to ensure that no one in member accounts can disable specific AWS services. The security engineer must ensure that permissions granted by IAM policies defined in member accounts are not overridden.What will be the effect of adding the following SCP to the root of the organization?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 112083315,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An application runs on Amazon EC2 instances. Two instances were launched and each instance runs in a separate Availability Zone within an Amazon VPC. Each instance must communicate with the Elastic IP address of the other instance. The instances can connect using private IP addresses and can access external internet addresses. However, they are unable to communicate with each other using public IP addresses.</p><p>How can this issue be resolved?</p>",
        relatedLectureIds: [],
        links: [],
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The most likely explanation for this issue is that the security groups have not been setup to allow inbound communication from the source Elastic IP addresses. The instances are communicating across AZs and using the public (Elastic) IP address for connectivity.</p><p>For this to work the security group should have an inbound rule allowing the relevant protocol with the source specified as the Elastic IP address of the instance that is attempting to connect.</p><p>This is because outbound connections to public IP addresses will be routed to the internet gateway and the source address will show as the public IP address of the instance making the connection.</p><p><strong>CORRECT: </strong>"Add the Elastic IP addresses to the ingress rules of the instance security groups" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Add the instance IDs to the ingress rules of the instance security groups" is incorrect.</p><p>If the instance ID is specified this will allow communication from the private IP of the instances but not if the source address is a public address.</p><p><strong>INCORRECT:</strong> "Attach an internet gateway and add a route to the subnet route tables" is incorrect.</p><p>An internet gateway must already be attached as the instances are able to communicate with internet addresses.</p><p><strong>INCORRECT:</strong> "Add a public IP address and detach the Elastic IP address from each instance" is incorrect.</p><p>An Elastic IP address is a static public IP address. There is no benefit in changing from Elastic to public.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html">https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html</a></p>',
        answers: [
          "<p>Add a public IP address and detach the Elastic IP address from each instance.</p>",
          "<p>Add the Elastic IP addresses to the ingress rules of the instance security groups.</p>",
          "<p>Attach an internet gateway and add a route to the subnet route tables.</p>",
          "<p>Add the instance IDs to the ingress rules of the instance security groups.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "An application runs on Amazon EC2 instances. Two instances were launched and each instance runs in a separate Availability Zone within an Amazon VPC. Each instance must communicate with the Elastic IP address of the other instance. The instances can connect using private IP addresses and can access external internet addresses. However, they are unable to communicate with each other using public IP addresses.How can this issue be resolved?",
      related_lectures: [],
    },
  ],
};
