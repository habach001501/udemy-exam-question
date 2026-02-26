export const neal_3 = {
  count: 25,
  next: null,
  previous: null,
  results: [
    {
      _class: "assessment",
      id: 99531665,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A new employee is joining a security team. The employee initially requires access to manage Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. All security team members are added to the security team IAM group that provides additional permissions to manage all other AWS services.</p><p>The team lead wants to limit the permissions the new employee has access to until the employee takes on additional responsibilities, and then be able to easily add permissions as required, eventually providing the same access as all other security team employees.</p><p>How can the team lead limit the permissions assigned to the new user account whilst minimizing complexity?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS supports <em>permissions boundaries</em> for IAM entities (users or roles). A permissions boundary is an advanced feature for using a managed policy to set the maximum permissions that an identity-based policy can grant to an IAM entity. An entity\'s permissions boundary allows it to perform only the actions that are allowed by both its identity-based policies and its permissions boundaries.</p><p>In this case the permissions boundary means the user can remain in the security team IAM group. This will minimize complexity and set the configuration up for the future state where the user will have access to all privileges assigned to that group. In the meantime whilst the employee has limited responsibilities the permissions boundary can be used to limit the maximum available permissions.</p><p>This scenario is easy to implement and manage as a single policy statement can be updated with additional service permissions when required.</p><p>The diagram below depicts a similar scenario:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_05-14-13-7140cadf2ce30aecdeded141f8e92381.jpg"><p><strong>CORRECT: </strong>"Create an IAM account for the new employee and add the account to the security team IAM group. Set a permissions boundary that grants access to manage Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. When the employee takes on new management responsibilities, add the additional services to the permissions boundary IAM policy" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an IAM account for the new employee. Create a new IAM group for the employee and add a permissions policy that grants access to manage Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. When the employee takes on new management responsibilities, add the additional services to the IAM policy" is incorrect.</p><p>This will have the desired effect but will increase complexity as the employee must be moved to a separate IAM group to other team members until all permissions are assigned to the user and then moved back over.</p><p><strong>INCORRECT:</strong> "Create an IAM account for the new employee and add the account to the security team IAM group. Use a Service Control Policy (SCP) to limit the maximum available permissions to Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. When the employee takes on new management responsibilities, remove the SCP" is incorrect.</p><p>SCPs control the maximum available permissions in an AWS account, not to individual user accounts.</p><p><strong>INCORRECT:</strong> "Create an IAM account for the new employee in a dedicated account. Use cross-account access to manage resources. Limit the permissions on the cross-account access role to only allow management of Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. When the employee takes on new management responsibilities, add permissions to the cross-account access IAM role" is incorrect.</p><p>This adds lots of complexity as the user is created in a separate account to other security team users.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html</a></p>',
        answers: [
          "<p>Create an IAM account for the new employee and add the account to the security team IAM group. Set a permissions boundary that grants access to manage Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. When the employee takes on new management responsibilities, add the additional services to the permissions boundary IAM policy.</p>",
          "<p>Create an IAM account for the new employee. Create a new IAM group for the employee and add a permissions policy that grants access to manage Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. When the employee takes on new management responsibilities, add the additional services to the IAM policy.</p>",
          "<p>Create an IAM account for the new employee and add the account to the security team IAM group. Use a Service Control Policy (SCP) to limit the maximum available permissions to Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. When the employee takes on new management responsibilities, remove the SCP.</p>",
          "<p>Create an IAM account for the new employee in a dedicated account. Use cross-account access to manage resources. Limit the permissions on the cross-account access role to only allow management of Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. When the employee takes on new management responsibilities, add permissions to the cross-account access IAM role.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A new employee is joining a security team. The employee initially requires access to manage Amazon DynamoDB, Amazon RDS, and Amazon CloudWatch. All security team members are added to the security team IAM group that provides additional permissions to manage all other AWS services.The team lead wants to limit the permissions the new employee has access to until the employee takes on additional responsibilities, and then be able to easily add permissions as required, eventually providing the same access as all other security team employees.How can the team lead limit the permissions assigned to the new user account whilst minimizing complexity?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531667,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>An application running on Amazon EC2 instances reads secrets stored in AWS Systems Manager Parameter Store. The application issued GetParameter API calls for secure string parameters and the calls failed.</p><p>Which factors could be the cause of this failure? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>To perform a GetParameter API call to a secure string parameter there are two permissions required. Firstly, the IAM role assigned to the EC2 instance must have the permission to execute the ssm:GetParameter API action which is an AWS Systems Manager Parameter Store permission.</p><p>The parameters are stored as secure strings which means they will be encrypted with an AWS KMS key. To read the values they must be decrypted so the EC2 instance will also need the Decrypt API permission which is associated with AWS KMS.</p><p><strong>CORRECT: </strong>"The IAM role assigned to the EC2 instance profile does not have decrypt permissions on the AWS KMS key used to encrypt the parameter" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"The IAM role assigned to the EC2 instance profile does not have permissions to retrieve parameters in Systems Manager Parameter Store" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "The IAM role assigned to the EC2 instance profile does not have encrypt permissions on the AWS KMS key used to encrypt the parameter" is incorrect.</p><p>In this case the instance is attempting to retrieve and therefore decrypt the secure string, not encrypt it.</p><p><strong>INCORRECT:</strong> "Systems Manager Parameter Store does not have decrypt permissions on the AWS KMS key used to encrypt the parameter" is incorrect.</p><p>Parameter store is not executing the API action to decrypt the secure string, the EC2 instance is executing the API action.</p><p><strong>INCORRECT:</strong> "Systems Manager Parameter Store does not have encrypt permissions on the AWS KMS key used to encrypt the parameter" is incorrect.</p><p>Parameter store is not executing the API action to encrypt or decrypt the secure string, the EC2 instance is executing the API action.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-access.html">https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-access.html</a></p><p><a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html">https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html</a></p>',
        answers: [
          "<p>The IAM role assigned to the EC2 instance profile does not have decrypt permissions on the AWS KMS key used to encrypt the parameter.</p>",
          "<p>The IAM role assigned to the EC2 instance profile does not have encrypt permissions on the AWS KMS key used to encrypt the parameter.</p>",
          "<p>Systems Manager Parameter Store does not have decrypt permissions on the AWS KMS key used to encrypt the parameter.</p>",
          "<p>Systems Manager Parameter Store does not have encrypt permissions on the AWS KMS key used to encrypt the parameter.</p>",
          "<p>The IAM role assigned to the EC2 instance profile does not have permissions to retrieve parameters in Systems Manager Parameter Store.</p>",
        ],
      },
      correct_response: ["a", "e"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "An application running on Amazon EC2 instances reads secrets stored in AWS Systems Manager Parameter Store. The application issued GetParameter API calls for secure string parameters and the calls failed.Which factors could be the cause of this failure? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531669,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company is using AWS CloudTrail is being used to monitor API calls. An audit revealed that CloudTrail is failing to deliver events to Amazon S3 as expected. A security engineer is attempting to resolve the issue. What initial actions should be taken to allow delivery of CloudTrail events to S3? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>AWS CloudTrail captures API activity and can be configured to store records of activity in an Amazon S3 bucket. If you specify an existing bucket you must make sure that the bucket policy grants AWS CloudTrail the privileges to write objects into the bucket. The specific API action that must be granted is s3:PutObject.</p><p>Additionally, the correct bucket and prefix must be specified in the CloudTrail configuration for this to work correctly. If you modify a prefix then CloudTrail and the bucket policy will need to be updated.</p><p><strong>CORRECT: </strong>"Verify that the S3 bucket policy grants CloudTrail the s3:PutObject permission" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Verify that the S3 bucket and prefix defined in CloudTrail exists" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Verify that the IAM role used by CloudTrail has access to write to S3" is incorrect.</p><p>CloudTrail does not use an IAM Role it uses the service principal “cloudtrail.amazonaws.com”.</p><p><strong>INCORRECT:</strong> "Verify that the S3 bucket ACL grants CloudTrail access to write objects" is incorrect.</p><p>The bucket ACL cannot grant write access to the CloudTrail service principal; you must use a bucket policy.</p><p><strong>INCORRECT:</strong> "Verify that versioning is enabled for the s3 bucket" is incorrect.</p><p>Versioning is not required to be enabled or disabled as it has not relevance here.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-s3-bucket-policy-for-cloudtrail.html">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-s3-bucket-policy-for-cloudtrail.html</a></p>',
        answers: [
          "<p>Verify that the S3 bucket policy grants CloudTrail the s3:PutObject permission.</p>",
          "<p>Verify that the IAM role used by CloudTrail has access to write to S3.</p>",
          "<p>Verify that the S3 bucket ACL grants CloudTrail access to write objects.</p>",
          "<p>Verify that versioning is enabled for the s3 bucket.</p>",
          "<p>Verify that the S3 bucket and prefix defined in CloudTrail exists.</p>",
        ],
      },
      correct_response: ["a", "e"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A company is using AWS CloudTrail is being used to monitor API calls. An audit revealed that CloudTrail is failing to deliver events to Amazon S3 as expected. A security engineer is attempting to resolve the issue. What initial actions should be taken to allow delivery of CloudTrail events to S3? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531671,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          '<p>A company has created an organization within AWS Organizations. A security engineer created an organizational unit (OU) and moved several AWS accounts into the OU. The Amazon EC2 service is restricted with the following SCP:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question/2023-01-05_05-24-35-5df426c2532f3c2f6463479f6546a8b1.jpg"><p>One of the AWS accounts in the OU is used for data analytics and the data analysts require access to Amazon EC2 instances for running analytics software.</p><p>How can the security engineer provide the data analysts with Amazon EC2 access without affecting the other accounts in the OU?</p>',
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>An explicit deny will always override an explicit allow and SCPs apply to all users including root in member accounts. Therefore, the only way to get around the restrictions is to ensure that the SCP does not apply to the data analytics account.</p><p>An easy way to achieve this outcome is to create a new OU that does not have the policy applied to it. The OU must not be beneath the OU with the restrictive policy applied or it will inherit the deny statement.</p><p><strong>CORRECT: </strong>"Create a new OU without the SCP restricting EC2 access. Move the data analytics account to the new OU" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Move the SCP that denies the EC2 service to the root OU of Organizations to limit the accounts it applies to" is incorrect.</p><p>This would ensure that the SCP denies EC2 for all accounts within the organization and in all OUs.</p><p><strong>INCORRECT:</strong> "Instruct the data analysts to login to the data analytics account using root credentials to avoid the restrictions" is incorrect.</p><p>The root user in member accounts will also be restricted by the SCP.</p><p><strong>INCORRECT:</strong> "Add an allow statement for the EC2 service to the SCP with a condition that limits it to the data analytics account" is incorrect.</p><p>An explicit deny will always override an explicit allow. You also cannot use a condition element within an allow statement of an SCP.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_strategies.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_strategies.html</a></p>',
        answers: [
          "<p>Move the SCP that denies the EC2 service to the root OU of Organizations to limit the accounts it applies to.</p>",
          "<p>Instruct the data analysts to login to the data analytics account using root credentials to avoid the restrictions.</p>",
          "<p>Add an allow statement for the EC2 service to the SCP with a condition that limits it to the data analytics account.</p>",
          "<p>Create a new OU without the SCP restricting EC2 access. Move the data analytics account to the new OU.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company has created an organization within AWS Organizations. A security engineer created an organizational unit (OU) and moved several AWS accounts into the OU. The Amazon EC2 service is restricted with the following SCP:One of the AWS accounts in the OU is used for data analytics and the data analysts require access to Amazon EC2 instances for running analytics software.How can the security engineer provide the data analysts with Amazon EC2 access without affecting the other accounts in the OU?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531673,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company requires that only trusted code can be deployed to AWS Lambda functions. A method of validating the integrity of the code should be implemented and developers should not be able to bypass the solution.</p><p>Which combination of steps should a security engineer take to meet these requirements? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>To verify code integrity, use AWS Signer to create digitally signed code packages for functions and layers. When a user attempts to deploy a code package, Lambda performs validation checks on the code package before accepting the deployment</p><p>You can use IAM to control who can create code signing configurations. Typically, you allow only specific administrative users to have this ability. Additionally, you can set up IAM policies to enforce that developers only create functions that have code signing enabled.</p><p><strong>CORRECT: </strong>"Use AWS Signer to verify code integrity when code packages are deployed to Lambda" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Use IAM policies to enforce that developers can only create functions that have code signing enabled" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use the AWS Key Management Service (AWS KMS) to encrypt the code and enable automatic key rotation" is incorrect.</p><p><strong>INCORRECT:</strong> "Use Amazon S3 to store the code packages and configure default encryption for the S3 bucket" is incorrect.</p><p><strong>INCORRECT:</strong> "Use IAM policies to enforce that developers can only deploy code packages with encrypted source code" is incorrect.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html</a></p>',
        answers: [
          "<p>Use AWS Signer to verify code integrity when code packages are deployed to Lambda.</p>",
          "<p>Use IAM policies to enforce that developers can only create functions that have code signing enabled.</p>",
          "<p>Use the AWS Key Management Service (AWS KMS) to encrypt the code and enable automatic key rotation.</p>",
          "<p>Use Amazon S3 to store the code packages and configure default encryption for the S3 bucket.</p>",
          "<p>Use IAM policies to enforce that developers can only deploy code packages with encrypted source code.</p>",
        ],
      },
      correct_response: ["a", "b"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A company requires that only trusted code can be deployed to AWS Lambda functions. A method of validating the integrity of the code should be implemented and developers should not be able to bypass the solution.Which combination of steps should a security engineer take to meet these requirements? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531675,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has a critical web application running on a fleet of auto scaling Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB is associated with an AWS WAF web ACL. The security team has identified suspicious port scans coming from a specific range of internet IP addresses. A security engineer needs to block access from the identified addresses.</p><p>Which solution meets these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A web access control list (web ACL) gives you fine-grained control over all the HTTP(S) web requests that your protected resource responds to. You can protect Amazon CloudFront, Amazon API Gateway, Application Load Balancer, and AWS AppSync resources.</p><p>The IP set match statement inspects the IP address of a web request against a set of IP addresses and address ranges. Use this to allow or block web requests based on the IP addresses that the requests originate from.</p><p>By default, AWS WAF uses the IP address from the web request origin, but you can configure the rule to use an HTTP header like X-Forwarded-For instead. The Block action will deny any requests that originate from the offending IP address range.</p><p><strong>CORRECT: </strong>"Modify the web ACL with an IP set match rule statement and a block action to deny incoming requests from the IP address range" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Modify the web ACL with a rate-based rule statement and a block action to deny incoming requests from the IP address range" is incorrect.</p><p>A rate-based rule is used when you want to apply a rule action if the rate of requests exceeds a specified limit.</p><p><strong>INCORRECT:</strong> "Create an Amazon CloudFront distribution in front of the ALB and use geo restrictions to block access from the IP address range" is incorrect.</p><p>CloudFront geo restriction can be used to restrict access based on geography but not by a specified list of IP addresses.</p><p><strong>INCORRECT:</strong> "Add a rule to the ALB security group to deny incoming requests from the IP address range" is incorrect.</p><p>You cannot add deny rules to security groups, use network ACLs instead.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-ipset-match.html">https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-ipset-match.html</a></p>',
        answers: [
          "<p>Modify the web ACL with an IP set match rule statement and a block action to deny incoming requests from the IP address range.</p>",
          "<p>Modify the web ACL with a rate-based rule statement and a block action to deny incoming requests from the IP address range.</p>",
          "<p>Create an Amazon CloudFront distribution in front of the ALB and use geo restrictions to block access from the IP address range.</p>",
          "<p>Add a rule to the ALB security group to deny incoming requests from the IP address range.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company has a critical web application running on a fleet of auto scaling Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB is associated with an AWS WAF web ACL. The security team has identified suspicious port scans coming from a specific range of internet IP addresses. A security engineer needs to block access from the identified addresses.Which solution meets these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531677,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer requires a solution for allowing employees to connect to a command line interface on Amazon EC2 Linux instances without using SSH keys or ports.</p><p>Which solutions meets these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Session Manager is a fully managed AWS Systems Manager capability. With Session Manager, you can manage your Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and virtual machines (VMs).</p><p>You can use either an interactive one-click browser-based shell or the AWS Command Line Interface (AWS CLI). Session Manager provides secure and auditable node management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys.</p><p>Session Manager helps you improve your security posture by letting you close SSH ports, freeing you from managing SSH keys and certificates, bastion hosts, and jump boxes.</p><p><strong>CORRECT: </strong>"Use AWS Systems Manager Session Manager. Grant the IAM user accounts permissions to use Systems Manager Session Manager" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS Systems Manager Run Command to open an SSH connection to the EC2 Linux instances. Grant the IAM user accounts permissions to use Run Command" is incorrect.</p><p>Run Command is used to automate common administrative tasks and perform one-time configuration changes at scale.</p><p><strong>INCORRECT:</strong> "Use a bastion host EC2 instance in a public subnet. Use the bastion instance to connect to the EC2 Linux instances using an X.509 certificate" is incorrect.</p><p>X.509 certificates are SSL/TLS certificates and cannot be used for gaining command line access to an EC2 instance.</p><p><strong>INCORRECT:</strong> "Use AWS Secrets Manager to store SSH keys. Instruct the employees to use the AWS CLI to retrieve the SSH key and connect to the EC2 Linux instances" is incorrect.</p><p>Secrets Manager can be used for storing secrets but storing SSH keys does not provide a solution as once retrieved the users would still need to connect via the SSH protocol. The public keys must also be stored on the server.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html">https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html</a></p>',
        answers: [
          "<p>Use a bastion host EC2 instance in a public subnet. Use the bastion instance to connect to the EC2 Linux instances using an X.509 certificate.</p>",
          "<p>Use AWS Systems Manager Session Manager. Grant the IAM user accounts permissions to use Systems Manager Session Manager.</p>",
          "<p>Use AWS Secrets Manager to store SSH keys. Instruct the employees to use the AWS CLI to retrieve the SSH key and connect to the EC2 Linux instances.</p>",
          "<p>Use AWS Systems Manager Run Command to open an SSH connection to the EC2 Linux instances. Grant the IAM user accounts permissions to use Run Command.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A security engineer requires a solution for allowing employees to connect to a command line interface on Amazon EC2 Linux instances without using SSH keys or ports.Which solutions meets these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531679,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer needs to automate SSH key pair management for many Amazon EC2 instances. The security engineer must create a solution that automatically stores and rotates SSH key pairs that are more than 90 days old. There must also be an audit trail of the rotation recorded in an Amazon S3 bucket.</p><p>Which solution that meets these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS Secrets Manager can be used to store secrets, and this includes SSH key pairs. The Secrets Manager API can be used programmatically to rotate secrets using an AWS Lambda function. The Lambda function can be configured to rotate the secrets every 90 days and then deliver them to the EC2 instances.</p><p>Secrets Manager API calls can also be logged for auditing purposes by creating an AWS CloudTrail trail. The trail can be configured to store the log files in an Amazon S3 bucket where they can be viewed at any point in time.</p><p><strong>CORRECT: </strong>"Use AWS Secrets Manager to store the SSH key pairs. Create an AWS Lambda function that rotates the SSH keys every 90 days. Create an AWS CloudTrail trail that logs to an S3 bucket" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS Secrets Manager to store the SSH key pairs. Enable automatic rotation for the SSH keys every 90 days. Enable audit logging in Secrets Manager and select an S3 bucket" is incorrect.</p><p>Automatic rotation using Secrets Manager only works for select databases and does not work for SSH keys. Auditing is not enabled through Secrets Manager; the activity must be captured using CloudTrail.</p><p><strong>INCORRECT:</strong> "Use the EC2 dashboard in the AWS Management Console to enable automatic rotation for the SSH keys every 90 days. Create an AWS CloudTrail trail that logs to an S3 bucket" is incorrect.</p><p>You cannot automatically rotate SSH keys using the EC2 management console.</p><p><strong>INCORRECT:</strong> "Configure an Amazon CloudWatch alarm for SSH keys that are more than 90 days old. Invoke an AWS Lambda function that will delete the old SSH key pairs. Enable audit logging for each EC2 instance to an S3 bucket" is incorrect.</p><p>You cannot create a CloudWatch alarm that checks the age of SSH keys. You also cannot enable audit logging at the EC2 instance level.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-manager-securely-store-rotate-ssh-key-pairs/">https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-manager-securely-store-rotate-ssh-key-pairs/</a></p><p><a href="https://aws.amazon.com/secrets-manager/features/">https://aws.amazon.com/secrets-manager/features/</a></p>',
        answers: [
          "<p>Use AWS Secrets Manager to store the SSH key pairs. Enable automatic rotation for the SSH keys every 90 days. Enable audit logging in Secrets Manager and select an S3 bucket.</p>",
          "<p>Use the EC2 dashboard in the AWS Management Console to enable automatic rotation for the SSH keys every 90 days. Create an AWS CloudTrail trail that logs to an S3 bucket.</p>",
          "<p>Use AWS Secrets Manager to store the SSH key pairs. Create an AWS Lambda function that rotates the SSH keys every 90 days. Create an AWS CloudTrail trail that logs to an S3 bucket.</p>",
          "<p>Configure an Amazon CloudWatch alarm for SSH keys that are more than 90 days old. Invoke an AWS Lambda function that will delete the old SSH key pairs. Enable audit logging for each EC2 instance to an S3 bucket.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A security engineer needs to automate SSH key pair management for many Amazon EC2 instances. The security engineer must create a solution that automatically stores and rotates SSH key pairs that are more than 90 days old. There must also be an audit trail of the rotation recorded in an Amazon S3 bucket.Which solution that meets these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531681,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A developer who recently left a company was found to have published many access keys IDs to a public source code repository. A list of the exposed access key IDs has been created. A security engineer needs to quickly identify which users the access key IDs belong to so the credentials can be immediately rotated. The company uses multiple accounts in an AWS Organization.</p><p>Which approach should the security engineer take?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>You can generate and download a <em>credential report</em> that lists all users in your account and the status of their various credentials, including passwords, access keys, and MFA devices.</p><p>You can use credential reports to assist in your auditing and compliance efforts. You can use the report to audit the effects of credential lifecycle requirements, such as password and access key rotation.</p><p>In this case the credential report must be created in each account within the AWS Organization. Then, the reports can be consolidated, and the compromised access key IDs can be identified. Finally, the access key IDs can be rotated.</p><p><strong>CORRECT: </strong>"Generate a credential report in each account in the Organization. Consolidate the reports and identify the users the access key IDs belong to. Rotate the access key IDs" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Generate a credential report in the root account in the Organization. Identify the users the access key IDs belong to. Rotate the access key IDs" is incorrect.</p><p>You cannot create a single credential report for an organization.</p><p><strong>INCORRECT:</strong> "Generate an IAM Access Analyzer report in the root account in the Organization. Identify the users the access key IDs belong to. Rotate the access key IDs" is incorrect.</p><p>IAM access analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, shared with an external entity. It does not identify access key IDs that may have been compromised.</p><p><strong>INCORRECT:</strong> "Generate an IAM Access Analyzer report in each account in the Organization. Consolidate the reports and identify the users the access key IDs belong to. Rotate the access key IDs" is incorrect.</p><p>As above, the IAM access analyzer is the wrong tool for this purpose.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html</a></p>',
        answers: [
          "<p>Generate a credential report in the root account in the Organization. Identify the users the access key IDs belong to. Rotate the access key IDs.</p>",
          "<p>Generate an IAM Access Analyzer report in the root account in the Organization. Identify the users the access key IDs belong to. Rotate the access key IDs.</p>",
          "<p>Generate an IAM Access Analyzer report in each account in the Organization. Consolidate the reports and identify the users the access key IDs belong to. Rotate the access key IDs.</p>",
          "<p>Generate a credential report in each account in the Organization. Consolidate the reports and identify the users the access key IDs belong to. Rotate the access key IDs.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "A developer who recently left a company was found to have published many access keys IDs to a public source code repository. A list of the exposed access key IDs has been created. A security engineer needs to quickly identify which users the access key IDs belong to so the credentials can be immediately rotated. The company uses multiple accounts in an AWS Organization.Which approach should the security engineer take?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531683,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An Amazon EC2 instance requires permissions to read and write data in an Amazon S3 bucket. A security engineer is creating an IAM role that will be assumed by the EC2 instance.</p><p>When creating the role using the AWS CLI create-role command, which policy must be added to allow the instance to assume the role?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The IAM role must have a policy attached that provides the permissions necessary to read and write data in the S3 bucket. Additionally, a trust policy must be attached. This policy defines which principals can assume the role, and under which conditions. This is sometimes referred to as a <em>resource-based policy</em> for the IAM role.</p><p>The example trust policy below allows Amazon EC2 instances to assume the role:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_05-57-31-36a944457eb8dc4c3767ab82cd43ad2a.jpg"><p><strong>CORRECT: </strong>"Trust policy" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Bucket policy" is incorrect. A bucket policy is applied to a bucket, it does not allow the EC2 instance to assume the IAM role.</p><p><strong>INCORRECT:</strong> "Inline policy" is incorrect. Inline policies are permissions policies, not trust policies, that are applied directly to principals.</p><p><strong>INCORRECT:</strong> "Managed policy" is incorrect. A managed policy is a permissions policy managed by AWS.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/security/how-to-use-trust-policies-with-iam-roles/">https://aws.amazon.com/blogs/security/how-to-use-trust-policies-with-iam-roles/</a></p>',
        answers: [
          "<p>Bucket policy</p>",
          "<p>Inline policy</p>",
          "<p>Trust policy</p>",
          "<p>Managed policy</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "An Amazon EC2 instance requires permissions to read and write data in an Amazon S3 bucket. A security engineer is creating an IAM role that will be assumed by the EC2 instance.When creating the role using the AWS CLI create-role command, which policy must be added to allow the instance to assume the role?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531685,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer received a notification that an administrative user account may have been compromised. The engineer wants to immediately rotate the access key for the user whilst ensuring that applications that use the access key are not affected.</p><p>What is the BEST approach in this situation?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The correct procedure for rotating access keys is to first create a second key which you can then use for your applications. Once your applications have been updated to use the new access key you can disable the old access key and test. If the applications continue to work successfully then you can delete the old access key.</p><p><strong>CORRECT: </strong>"Create a second access key and modify applications to use the new key. Disable the old access key and check applications are working correctly before deleting the old access key" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a second access key and modify applications to use the new key. Modify resource security policies to disable permissions for the temporary security credentials associated with the access key" is incorrect.</p><p>This answer does not include disabling or deleting the old key so it can still be used.</p><p><strong>INCORRECT:</strong> "Disable and then delete the old access key. Create a new access key and modify the applications to use the new access key" is incorrect.</p><p>This is not the best approach as the old access key will have been deleted before testing occurs to ensure the applications continue to function.</p><p><strong>INCORRECT:</strong> "Create a second access key and modify applications to use the new key. Delete the old access key and revoke all active sessions" is incorrect.</p><p>The old access key should be disabled first so testing can occur. This provides a rollback path if issues occur.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/">https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/</a></p>',
        answers: [
          "<p>Disable and then delete the old access key. Create a new access key and modify the applications to use the new access key.</p>",
          "<p>Create a second access key and modify applications to use the new key. Modify resource security policies to disable permissions for the temporary security credentials associated with the access key.</p>",
          "<p>Create a second access key and modify applications to use the new key. Delete the old access key and revoke all active sessions.</p>",
          "<p>Create a second access key and modify applications to use the new key. Disable the old access key and check applications are working correctly before deleting the old access key.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "A security engineer received a notification that an administrative user account may have been compromised. The engineer wants to immediately rotate the access key for the user whilst ensuring that applications that use the access key are not affected.What is the BEST approach in this situation?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531687,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>An application runs on Amazon EC2 instances that use an Amazon SQS queue and an Amazon DynamoDB table. The application processes highly confidential information and the connectivity between these AWS services should be private.</p><p>Which combination of steps should the security engineer take to meet this requirement? (Select THREE.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", "", ""],
        explanation:
          '<p>A VPC endpoint enables connections between a virtual private cloud (VPC) and supported services, without requiring that you use an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Therefore, your VPC is not exposed to the public internet.</p><p>For Amazon S3 and DynamoDB you must use a gateway VPC endpoint and for other AWS services you create an interface VPC endpoint. In both cases you can apply policies to control access to the service(s) to which you are connecting.</p><p><strong>CORRECT: </strong>"Create an interface VPC endpoint for Amazon SQS" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Create a gateway VPC endpoint for Amazon DynamoDB" is also a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Modify the endpoint policies on all VPC endpoints. Specify the SQS and DynamoDB resources that the application uses" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Configure a connection to Amazon S3 through AWS Direct Connect" is incorrect.</p><p>You cannot connect from a VPC to S3 using Direct Connect (DX). You create DX connections between on-premises data centers and a VPC.</p><p><strong>INCORRECT:</strong> "Configure a connection to Amazon S3 through an AWS Managed VPN" is incorrect.</p><p>You cannot create a VPN between S3 and a VPC. You must use VPC endpoints instead.</p><p><strong>INCORRECT:</strong> "Modify the IAM role applied to the EC2 instance profile to allow outbound traffic to the interface endpoints" is incorrect.</p><p>The IAM role attached to an instance profile specifies the permissions the instance has for other AWS services. For controlling traffic across a VPC endpoint you should instead use endpoint policies.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html">https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html</a></p><p><a href="https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html">https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html</a></p>',
        answers: [
          "<p>Create an interface VPC endpoint for Amazon SQS.</p>",
          "<p>Create a gateway VPC endpoint for Amazon DynamoDB.</p>",
          "<p>Configure a connection to Amazon S3 through AWS Direct Connect.</p>",
          "<p>Configure a connection to Amazon S3 through an AWS Managed VPN.</p>",
          "<p>Modify the IAM role applied to the EC2 instance profile to allow outbound traffic to the interface endpoints.</p>",
          "<p>Modify the endpoint policies on all VPC endpoints. Specify the SQS and DynamoDB resources that the application uses.</p>",
        ],
      },
      correct_response: ["a", "b", "f"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "An application runs on Amazon EC2 instances that use an Amazon SQS queue and an Amazon DynamoDB table. The application processes highly confidential information and the connectivity between these AWS services should be private.Which combination of steps should the security engineer take to meet this requirement? (Select THREE.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531663,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A security engineer is troubleshooting a connectivity issue with an Amazon EC2 Linux instance. The engineer is trying to connect from the internet, but the connection attempt times out. Other instances in the VPC are contactable over the internet.</p><p>Which of the following could be causes of this issue? (Select THREE.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", "", ""],
        explanation:
          '<p>There are several potential issues here. Firstly, the VPC must have an internet gateway attached and the subnet must have a route to the internet gateway. We know an internet gateway is attached as other instances in the VPC are contactable over the internet. Therefore, it only remains to ensure there is a route in the route table pointing to the internet gateway.</p><p>Security groups must be configured to allow the inbound connection and will automatically allow any response traffic. Therefore, outbound ephemeral ports need not be opened in security groups. For network ACLs however the connections in both directions must be allowed as they are not stateful.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-04_02-44-35-2b8256311cdfbbf0c71a0691f30f732c.jpg"><p>Lastly, a host-based firewall may be configured that blocks access. This should be checked to ensure this is not the cause.</p><p><strong>CORRECT: </strong>"The route table of the subnet is missing a route to the internet gateway" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"The network ACL denies outbound traffic on ephemeral ports" is also a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"The host-based firewall of the instance operating system is denying traffic" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "The security group of the internet gateway is misconfigured" is incorrect (as explained above.)</p><p><strong>INCORRECT:</strong> "The internet gateway is no longer attached to the VPC" is incorrect (as explained above.)</p><p><strong>INCORRECT:</strong> "The instance security group denies outbound traffic on ephemeral ports" is incorrect (as explained above.)</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/premiumsupport/knowledge-center/ec2-connect-internet-gateway/">https://aws.amazon.com/premiumsupport/knowledge-center/ec2-connect-internet-gateway/</a></p>',
        answers: [
          "<p>The route table of the subnet is missing a route to the internet gateway.</p>",
          "<p>The security group of the internet gateway is misconfigured.</p>",
          "<p>The internet gateway is no longer attached to the VPC.</p>",
          "<p>The instance security group denies outbound traffic on ephemeral ports.</p>",
          "<p>The network ACL denies outbound traffic on ephemeral ports.</p>",
          "<p>The host-based firewall of the instance operating system is denying traffic.</p>",
        ],
      },
      correct_response: ["a", "e", "f"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A security engineer is troubleshooting a connectivity issue with an Amazon EC2 Linux instance. The engineer is trying to connect from the internet, but the connection attempt times out. Other instances in the VPC are contactable over the internet.Which of the following could be causes of this issue? (Select THREE.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531689,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company enforces encryption for all Amazon EBS volumes. Following security incidents, EBS snapshots sometimes need to be shared with a forensics account for analysis. The security team must ensure the volumes remain encrypted as much as possible throughout the process.</p><p>Which steps are required to share the encrypted snapshots with least privilege?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Note that the term CMK which may appear in the exam has been replaced with the term KMS key though the concepts are identical.</p><p>The correct process for sharing an encrypted snapshot across AWS accounts is to first ensure the snapshot is encrypted with a customer managed KMS key. You cannot use an AWS managed or default KMS key. The key policy should allow the Decrypt and CreateGrant actions for the target account at a minimum. The snapshot will be decrypted by the target account users and then reencrypted. IAM users in the target account will require additional privileges on the key they create to reencrypt the snapshot.</p><p>Please refer to the reference link below for further instructions.</p><p><strong>CORRECT: </strong>"Share an encrypted snapshot, use a customer managed KMS key, and allow the Decrypt and CreateGrant actions for the target account in the key policy" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Copy an encrypted EBS volume to the target account, use a customer managed KMS key, and allow the Encrypt, Decrypt, and CreateGrant actions in the key policy" is incorrect.</p><p>You cannot copy encrypted EBS volumes across accounts, snapshots must be used.</p><p><strong>INCORRECT:</strong> "Create an unencrypted copy of the encrypted snapshot, share the snapshot with the target account, encrypt the copied snapshot with a customer managed KMS key" is incorrect.</p><p>This does not maintain encryption throughout the process. The snapshot will spend more time in an unencrypted state than the correct method.</p><p><strong>INCORRECT:</strong> "Share an encrypted snapshot, use an AWS managed KMS key, and allow the kms:* actions for the target account in the key policy" is incorrect.</p><p>This does not maintain least privilege as more permissions that necessary are granted.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/premiumsupport/knowledge-center/share-ebs-volume/">https://aws.amazon.com/premiumsupport/knowledge-center/share-ebs-volume/</a></p>',
        answers: [
          "<p>Share an encrypted snapshot, use a customer managed KMS key, and allow the Decrypt and CreateGrant actions for the target account in the key policy.</p>",
          "<p>Copy an encrypted EBS volume to the target account, use a customer managed KMS key, and allow the Encrypt, Decrypt, and CreateGrant actions in the key policy.</p>",
          "<p>Create an unencrypted copy of the encrypted snapshot, share the snapshot with the target account, encrypt the copied snapshot with a customer managed KMS key.</p>",
          "<p>Share an encrypted snapshot, use an AWS managed KMS key, and allow the kms:* actions for the target account in the key policy.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "A company enforces encryption for all Amazon EBS volumes. Following security incidents, EBS snapshots sometimes need to be shared with a forensics account for analysis. The security team must ensure the volumes remain encrypted as much as possible throughout the process.Which steps are required to share the encrypted snapshots with least privilege?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531691,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A website runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB) which serves as an origin for an Amazon CloudFront distribution. An AWS WAF is being used to protect against SQL injection attacks. A review of security logs revealed an external malicious IP that needs to be blocked from accessing the website.</p><p>What&nbsp;steps should be taken to protect the application?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The IP match condition / IP set match statement inspects the IP address of a web request\'s origin against a set of IP addresses and address ranges. Use this to allow or block web requests based on the IP addresses that the requests originate from.</p><p>AWS WAF supports all IPv4 and IPv6 address ranges. An IP set can hold up to 10,000 IP addresses or IP address ranges to check.</p><p><strong>CORRECT: </strong>"Modify the configuration of AWS WAF to add an IP match condition to block the malicious IP address" is the correct answer.</p><p><strong>INCORRECT:</strong> "Modify the network ACL on the CloudFront distribution to add a deny rule for the malicious IP address" is incorrect as CloudFront does not sit within a subnet so network ACLs do not apply to it.</p><p><strong>INCORRECT:</strong> "Modify the network ACL for the EC2 instances in the target groups behind the ALB to deny the malicious IP address" is incorrect as the source IP addresses of the data in the EC2 instances’ subnets will be the ELB IP addresses.</p><p><strong>INCORRECT:</strong> "Modify the security groups for the EC2 instances in the target groups behind the ALB to deny the malicious IP address." is incorrect as you cannot create deny rules with security groups.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-ipset-match.html">https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-ipset-match.html</a></p><p><strong>Save time with our AWS cheat sheets:</strong></p><p><a href="https://digitalcloud.training/aws-waf-shield/">https://digitalcloud.training/aws-waf-shield/</a></p>',
        answers: [
          "<p>Modify the network ACL on the CloudFront distribution to add a deny rule for the malicious IP address.</p>",
          "<p>Modify the configuration of AWS WAF to add an IP match condition to block the malicious IP address.</p>",
          "<p>Modify the network ACL for the EC2 instances in the target groups behind the ALB to deny the malicious IP address.</p>",
          "<p>Modify the security groups for the EC2 instances in the target groups behind the ALB to deny the malicious IP address.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "A website runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB) which serves as an origin for an Amazon CloudFront distribution. An AWS WAF is being used to protect against SQL injection attacks. A review of security logs revealed an external malicious IP that needs to be blocked from accessing the website.What&nbsp;steps should be taken to protect the application?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531693,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An e-commerce company receives an AWS Abuse notification stating that an IAM user's access key, used by an inventory management system, may have been compromised. The security manager needs to address the potential security breach while ensuring minimal service interruption to the inventory system.</p><p>What would be the optimal strategy to address this situation?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>By creating a new access key and updating the application to use it before deleting the old key, you ensure minimal downtime. The application won\'t fail when the old key is deleted because it has already been configured to use the new one.</p><p><strong>CORRECT: </strong>"Generate a new access key for the IAM user. Update the inventory management system to utilize the new access key. Subsequently, deactivate the compromised access key" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Immediately delete the IAM user\'s access key. Then, produce a new access key and implement it within the inventory management system" is incorrect.</p><p>Immediately deleting the access key will disrupt the system until the new key is generated and configured. This could result in unnecessary downtime for the system.</p><p><strong>INCORRECT:</strong> "Implement an IAM policy that terminates all sessions before the moment specified in the AWS Abuse notification" is incorrect. Terminating sessions doesn\'t resolve the issue of the potentially compromised key. The key could still be used to initiate new sessions until it\'s deactivated.</p><p><strong>INCORRECT:</strong> "Modify the inventory management system to utilize an IAM role with identical permissions as the IAM user" is incorrect.</p><p>Updating the system to use an IAM role might demand considerable alterations in the system code which could potentially result in longer downtime.</p><p><strong>References</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_RotateAccessKey">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_RotateAccessKey</a></p>',
        answers: [
          "<p>Immediately delete the IAM user's access key. Then, produce a new access key and implement it within the inventory management system.</p>",
          "<p>Generate a new access key for the IAM user. Update the inventory management system to utilize the new access key. Subsequently, deactivate the compromised access key.</p>",
          "<p>Implement an IAM policy that terminates all sessions before the moment specified in the AWS Abuse notification.</p>",
          "<p>Modify the inventory management system to utilize an IAM role with identical permissions as the IAM user.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "An e-commerce company receives an AWS Abuse notification stating that an IAM user's access key, used by an inventory management system, may have been compromised. The security manager needs to address the potential security breach while ensuring minimal service interruption to the inventory system.What would be the optimal strategy to address this situation?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531695,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A multinational corporation has a diversified range of services deployed on Amazon EC2 instances. The company has AWS Systems Manager Agent (SSM Agent) installed on their EC2 instances and utilizes AWS Security Hub for consolidating their security alerts and findings.</p><p>The company uses AWS Organizations with numerous managed AWS accounts. They wish to regularly monitor their workloads for potential software vulnerabilities and unexpected network exposure.</p><p>The company seeks a solution that will seamlessly deploy across all member accounts, including any future accounts, and will automatically scan new workloads as they become operational.</p><p>What solution would fulfill these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Amazon Inspector performs automated security assessments to help improve the security and compliance of applications deployed on AWS. By configuring a delegated admin for Amazon Inspector across the organization, the company can ensure automatic scanning across all accounts including new ones.</p><p><strong>CORRECT: </strong>"Designate a delegated administrator for Amazon Inspector for the entire organization. Set up automatic scanning for all existing and new member accounts" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Implement Service Control Policies (SCPs) to facilitate the scanning of EC2 instances across all organizational accounts" is incorrect.</p><p>SCPs are used to set fine-grained permissions and manage AWS service actions across an AWS organization. They can\'t directly trigger workload scanning on EC2.</p><p><strong>INCORRECT:</strong> "Appoint a delegated administrator for Amazon GuardDuty across the organization and set up an Amazon EventBridge rule to trigger the analysis of Amazon EC2 instances" is incorrect.</p><p>Amazon GuardDuty provides threat detection for your AWS environment, but it doesn\'t perform vulnerability assessment tasks like software vulnerabilities detection on EC2 instances.</p><p><strong>INCORRECT:</strong> "Establish a delegated administrator for Amazon Inspector throughout the organization and create an AWS Config rule to initiate the analysis of Amazon EC2 instances" is incorrect.</p><p>AWS Config provides configuration, compliance, and auditing features. It can\'t directly initiate workload scanning on Amazon EC2 instances.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/inspector/latest/user/adding-member-accounts.html">https://docs.aws.amazon.com/inspector/latest/user/adding-member-accounts.html</a></p>',
        answers: [
          "<p>Implement Service Control Policies (SCPs) to facilitate the scanning of EC2 instances across all organizational accounts.</p>",
          "<p>Appoint a delegated administrator for Amazon GuardDuty across the organization and set up an Amazon EventBridge rule to trigger the analysis of Amazon EC2 instances.</p>",
          "<p>Designate a delegated administrator for Amazon Inspector for the entire organization. Set up automatic scanning for all existing and new member accounts.</p>",
          "<p>Establish a delegated administrator for Amazon Inspector throughout the organization and create an AWS Config rule to initiate the analysis of Amazon EC2 instances.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A multinational corporation has a diversified range of services deployed on Amazon EC2 instances. The company has AWS Systems Manager Agent (SSM Agent) installed on their EC2 instances and utilizes AWS Security Hub for consolidating their security alerts and findings.The company uses AWS Organizations with numerous managed AWS accounts. They wish to regularly monitor their workloads for potential software vulnerabilities and unexpected network exposure.The company seeks a solution that will seamlessly deploy across all member accounts, including any future accounts, and will automatically scan new workloads as they become operational.What solution would fulfill these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531697,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A financial institution employs an on-premises hardware security module (HSM) to generate and administer its encryption keys, according to its stringent security policies. Their transaction processing application uses Amazon RDS to store data, and all data must be encrypted at rest.</p><p>A security specialist has generated an encryption key using the on-premises HSM.</p><p>What should the security specialist do next to adhere to these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS KMS allows the import of key material from an external source into a new customer-managed key. Amazon RDS can then use this key for encryption at rest if it has the necessary permissions. You can create a new RDS instance with this customer-managed key as the encryption key and then import your data.</p><p><strong>CORRECT: </strong>"Create a new customer-managed key in AWS KMS and import the new key material. Provide Amazon RDS permissions to use the key. Create a new RDS instance and choose the new key as the encryption key. Migrate the data into RDS" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a new customer-managed key in AWS KMS, importing the new key material. Create a new RDS instance, choosing the new key as the encryption key. Deactivate the KMS key following the RDS instance creation. Migrate the data into RDS" is incorrect.</p><p>Disabling the KMS key after creating the RDS instance is not advisable, as it would prevent future cryptographic operations with that key, making the encrypted data inaccessible.</p><p><strong>INCORRECT:</strong> "Create a new AWS-managed key in AWS KMS and import the new key material. Give Amazon RDS permission to use the key. Create a new RDS instance and choose the new key as the encryption key. Migrate the data into RDS" is incorrect.</p><p>AWS KMS does not allow importing key material into AWS-managed keys. The key material import feature is only available for customer-managed keys.</p><p><strong>INCORRECT:</strong> "Create a new AWS-managed key in AWS KMS, importing the new key material. Use the AWS SDK to integrate with AWS KMS for local data encryption using the new KMS key. Create a new RDS instance and choose the new key as the encryption key. Deactivate the KMS key following RDS instance creation. Migrate the data into RDS" is incorrect.</p><p>AWS KMS does not allow importing key material into AWS-managed keys. Also, disabling the KMS key after creating the RDS instance would prevent access to the encrypted data.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html</a></p>',
        answers: [
          "<p>Create a new customer-managed key in AWS KMS and import the new key material. Provide Amazon RDS permissions to use the key. Create a new RDS instance and choose the new key as the encryption key. Migrate the data into RDS.</p>",
          "<p>Create a new customer-managed key in AWS KMS, importing the new key material. Create a new RDS instance, choosing the new key as the encryption key. Deactivate the KMS key following the RDS instance creation. Migrate the data into RDS.</p>",
          "<p>Create a new AWS-managed key in AWS KMS and import the new key material. Give Amazon RDS permission to use the key. Create a new RDS instance and choose the new key as the encryption key. Migrate the data into RDS.</p>",
          "<p>Create a new AWS-managed key in AWS KMS, importing the new key material. Use the AWS SDK to integrate with AWS KMS for local data encryption using the new KMS key. Create a new RDS instance and choose the new key as the encryption key. Deactivate the KMS key following RDS instance creation. Migrate the data into RDS.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A financial institution employs an on-premises hardware security module (HSM) to generate and administer its encryption keys, according to its stringent security policies. Their transaction processing application uses Amazon RDS to store data, and all data must be encrypted at rest.A security specialist has generated an encryption key using the on-premises HSM.What should the security specialist do next to adhere to these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531699,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A healthcare institution has developed a cloud-based application that collects and stores confidential patient records in an Amazon DynamoDB table. They need to adopt a solution that ensures end-to-end data protection and the ability to identify any unauthorized changes to the data.</p><p>What solution would cater to these needs?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The use of a client-side encryption library, like the DynamoDB Encryption Client, ensures that data is encrypted before it leaves the client and decrypted only after it returns. By signing the table items, the application can detect any unauthorized changes made to the data.</p><p><strong>CORRECT: </strong>"Use the DynamoDB Encryption Client for client-side encryption and to digitally sign the table items" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use an AWS Key Management Service (AWS KMS) customer managed key to encrypt the data at rest" is incorrect.</p><p>Using an AWS KMS customer managed key can provide encryption for data at rest, but it does not provide a method for detecting unauthorized data changes.</p><p><strong>INCORRECT:</strong> "Use an AWS Certificate Manager SSL/TLS certificate to ensure data is encrypted during transit" is incorrect.</p><p>While AWS Certificate Manager can be used to secure data in transit by providing managed SSL/TLS certificates, it doesn\'t provide end-to-end protection and doesn\'t detect unauthorized data changes.</p><p><strong>INCORRECT:</strong> "Use the AWS Encryption SDK to execute client-side encryption and to digitally sign the table items" is incorrect.</p><p>The AWS Encryption SDK can be used for client-side encryption, but it\'s not directly associated with DynamoDB, and it requires more manual work.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/database-encryption-sdk/latest/devguide/what-is-database-encryption-sdk.html">https://docs.aws.amazon.com/database-encryption-sdk/latest/devguide/what-is-database-encryption-sdk.html</a></p>',
        answers: [
          "<p>Use an AWS Key Management Service (AWS KMS) customer managed key to encrypt the data at rest.</p>",
          "<p>Use an AWS Certificate Manager SSL/TLS certificate to ensure data is encrypted during transit.</p>",
          "<p>Use the DynamoDB Encryption Client for client-side encryption and to digitally sign the table items.</p>",
          "<p>Use the AWS Encryption SDK to execute client-side encryption and to digitally sign the table items.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A healthcare institution has developed a cloud-based application that collects and stores confidential patient records in an Amazon DynamoDB table. They need to adopt a solution that ensures end-to-end data protection and the ability to identify any unauthorized changes to the data.What solution would cater to these needs?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531701,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A FinTech company wants to shield its online banking portal from man-in-the-middle attacks, and it's using Amazon CloudFront for content delivery.</p><p>What would be the most effective method to accomplish this goal with minimal administrative intervention?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Utilizing the SecurityHeadersPolicy managed response headers policy can provide protection against several types of security vulnerabilities, including man-in-the-middle attacks, with very little administrative effort.</p><p><strong>CORRECT: </strong>"Use the SecurityHeadersPolicy managed response headers policy" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use the BasicCORS predefined response headers policy" is incorrect.</p><p>The BasicCORS predefined response headers policy is mainly aimed at enabling Cross-Origin Resource Sharing (CORS) requests. It\'s not tailored to thwart man-in-the-middle attacks.</p><p><strong>INCORRECT:</strong> "Create a Lambda@Edge function to include the HTTP Strict Transport Security (HSTS) response header" is incorrect.</p><p>Even though using a Lambda@Edge function to include the HSTS header is feasible, this approach involves managing additional components like the Lambda function, leading to higher operational overhead.</p><p><strong>INCORRECT:</strong> "Use the Content-Security-Policy header within a custom-made response headers policy" is incorrect.</p><p>The Content-Security-Policy header can help safeguard against cross-site scripting (XSS) and other code-injection attacks, but it doesn\'t directly mitigate man-in-the-middle attacks.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-response-headers-policies.html">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-response-headers-policies.html</a></p>',
        answers: [
          "<p>Use the BasicCORS predefined response headers policy.</p>",
          "<p>Create a Lambda@Edge function to include the HTTP Strict Transport Security (HSTS) response header.</p>",
          "<p>Use the SecurityHeadersPolicy managed response headers policy.</p>",
          "<p>Use the Content-Security-Policy header within a custom-made response headers policy.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A FinTech company wants to shield its online banking portal from man-in-the-middle attacks, and it's using Amazon CloudFront for content delivery.What would be the most effective method to accomplish this goal with minimal administrative intervention?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531703,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security architect is designing a highly secure application and must determine the best solution for storage of encryption keys. The encryption keys must be accessible only from within a VPC on single-tenant hardware security modules (HSMs). The solution must also include access logging and high availability.</p><p>Which of the following services meets these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud. CloudHSM runs on single-tenant hardware security modules (HSMs) in your Amazon VPC. In addition to the logging features built into the Client SDK, you can also use AWS CloudTrail, Amazon CloudWatch Logs, and Amazon CloudWatch to monitor AWS CloudHSM.</p><p>AWS CloudHSM automatically load balances requests and securely duplicates keys stored in any HSM to all the other HSMs in the cluster. This provides additional cryptographic capacity and improves the durability of the keys. By storing multiple copies of your keys across HSMs located in different Availability Zones (AZs), your keys will be available and protected in the event that a single HSM becomes unavailable. Using at least two HSMs across multiple AZs is Amazon’s recommended configuration for availability and durability.</p><p><strong>CORRECT: </strong>"AWS CloudHSM" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "AWS Key Management Service (KMS)" is incorrect.</p><p>AWS KMS is a service you can use for creating and managing encryption keys, but it is not single-tenant and does not run within your VPC.</p><p><strong>INCORRECT:</strong> "Amazon Certificate Manager (ACM)" is incorrect.</p><p>ACM is used for creating and managing SSL/TLS certificates only and does not run on single-tenant HSMs within your VPC.</p><p><strong>INCORRECT:</strong> "AWS Secrets Manager " is incorrect.</p><p>AWS Secrets Manager is not used for creating and managing encryption keys, it is used for storing secrets such as passwords and database connection strings.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/cloudhsm/features/">https://aws.amazon.com/cloudhsm/features/</a></p><p><a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/get-logs.html">https://docs.aws.amazon.com/cloudhsm/latest/userguide/get-logs.html</a></p>',
        answers: [
          "<p>Amazon Certificate Manager (ACM).</p>",
          "<p>AWS CloudHSM.</p>",
          "<p>AWS Key Management Service (KMS).</p>",
          "<p>AWS Secrets Manager.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A security architect is designing a highly secure application and must determine the best solution for storage of encryption keys. The encryption keys must be accessible only from within a VPC on single-tenant hardware security modules (HSMs). The solution must also include access logging and high availability.Which of the following services meets these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531705,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          '<p>A security engineer has been asked to review an Amazon S3 bucket policy to determine if the data is properly secured against public access. The policy statement is as follows:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question/2023-07-07_16-29-18-a24a7eeaa428ac9fecbdc1bfb1dddcc6.jpg"><p>What should the response be from the security engineer?</p><p>Is this bucket policy sufficient to ensure that the data is not publicly accessible?</p>',
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The bucket policy has been written with the goal of granting access only to users who come from the 10.0.0.0/24 IP address space. This address space is internal so should not allow public access from any public IP addresses.</p><p>However, if the bucket ACL or object ACL settings allow access then access will be granted. This is because whenever an AWS principal issues a request to S3, the authorization decision depends on the union of all the IAM policies, S3 bucket policies, and S3 ACLs that apply.</p><p>One fix that could be made to the policy to ensure that ACLs do not allow access is to change the Effect to Deny and the condition from IpAddress to NotIPAddress as in the code below:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-07_16-29-18-2dfb0c316a72682a74c053e648b71c0e.jpg"><p>This will ensure that access is denied to all requests except those originating from the 10.0.0.0/24 address space as an explicit deny will override any allows.</p><p><strong>CORRECT: </strong>"The S3 bucket ACL and object ACLs will need to be checked to determine if public access is possible" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "The bucket policy will block all access from public IP addresses and will only allow connections from the specified private CIDR" is incorrect.</p><p>This is not true as it will depend on the bucket ACL and object ACL settings.</p><p><strong>INCORRECT:</strong> "IAM user policies will need to be checked to determine if public access is granted through these policies" is incorrect.</p><p>IAM user policies do not apply to public access as this would be from unauthenticated sources.</p><p><strong>INCORRECT:</strong> "The bucket policy does not block access from public IP addresses regardless of the bucket ACL and object ACL settings" is incorrect.</p><p>This is not true as it will depend on the bucket ACL and object ACL settings.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html</a></p>',
        answers: [
          "<p>The bucket policy will block all access from public IP addresses and will only allow connections from the specified private CIDR.</p>",
          "<p>The S3 bucket ACL and object ACLs will need to be checked to determine if public access is possible.</p>",
          "<p>IAM user policies will need to be checked to determine if public access is granted through these policies.</p>",
          "<p>The bucket policy does not block access from public IP addresses regardless of the bucket ACL and object ACL settings.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A security engineer has been asked to review an Amazon S3 bucket policy to determine if the data is properly secured against public access. The policy statement is as follows:What should the response be from the security engineer?Is this bucket policy sufficient to ensure that the data is not publicly accessible?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531707,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company has a serverless application that is accessed by internal users. The application consists of an AWS Lambda function that accesses an Amazon DynamoDB table. The security team are concerned that the Lambda function has internet access and the endpoints for Lambda and DynamoDB are both public.</p><p>How can a security engineer improve the security of the application? (Select TWO.)</p>",
        relatedLectureIds: [],
        links: [],
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>You can configure a Lambda function to connect to private subnets in a virtual private cloud (VPC) in your AWS account. When you do this you can invoke your function internally within the VPC without accessing the public address space. The function will also not have internet access unless you add a NAT gateway.</p><p>To secure access to DynamoDB a Gateway VPC Endpoint can be created within the VPC. This will enable the Lambda function to access the DynamoDB table using private addresses which meets the requirements of the question.</p><p><strong>CORRECT: </strong>"Configure the Lambda function to connect to private subnets in an Amazon VPC" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Configure a VPC endpoint for accessing the DynamoDB table using private addresses" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a resource-based policy for Lambda to restrict internet access" is incorrect.</p><p>You cannot create resource based IAM policies on Lambda and so this is not a method of restricting permissions or internet access.</p><p><strong>INCORRECT:</strong> "Configure the DynamoDB table to connect to private subnets in an Amazon VPC" is incorrect.</p><p>You cannot configure DynamoDB tables to connect to private subnets. You can connect <em>from </em>a private subnet to DynamoDB using a VPC endpoint.</p><p><strong>INCORRECT:</strong> "Create a resource-based policy for DynamoDB to restrict access to the Amazon VPC" is incorrect.</p><p>There is no need to use a resource-based policy on DynamoDB to restrict access to the VPC. A Gateway VPC Endpoint can be created and policies can be associated with the endpoint.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html</a></p><p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-overview.html#access-control-manage-access-resource-based">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-overview.html#access-control-manage-access-resource-based</a></p>',
        answers: [
          "<p>Create a resource-based policy for Lambda to restrict internet access.</p>",
          "<p>Configure the DynamoDB table to connect to private subnets in an Amazon VPC.</p>",
          "<p>Configure the Lambda function to connect to private subnets in an Amazon VPC.</p>",
          "<p>Create a resource-based policy for DynamoDB to restrict access to the Amazon VPC.</p>",
          "<p>Configure a VPC endpoint for accessing the DynamoDB table using private addresses.</p>",
        ],
      },
      correct_response: ["c", "e"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company has a serverless application that is accessed by internal users. The application consists of an AWS Lambda function that accesses an Amazon DynamoDB table. The security team are concerned that the Lambda function has internet access and the endpoints for Lambda and DynamoDB are both public.How can a security engineer improve the security of the application? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531709,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A security team are designing a plan to respond to incidents of compromised Amazon EC2 instances. The incident response plan should include the automated provisioning of a secure forensic environment and orchestration of incident response processes.</p><p>Which AWS services should be included in the plan? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>AWS CloudFormation can be used to automatically provision a secure forensic environment based on a template. CloudFormation will provision the infrastructure required based on the definitions in the JSON or YAML template file.</p><p>AWS Step Functions coordinates processes such as AWS Lambda functions. This can be used to orchestrate the processes required to execute forensic analysis within the secure forensic environment. CloudFormation can also be used to provision an AWS Step Functions state machine.</p><p><strong>CORRECT: </strong>"AWS CloudFormation" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"AWS Step Functions" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "AWS Fargate" is incorrect.</p><p>Fargate is a serverless service for running Docker containers and does not automate infrastructure deployment or orchestrate processes.</p><p><strong>INCORRECT:</strong> "Amazon GuardDuty" is incorrect.</p><p>GuardDuty is an intelligent threat detection service. It can mitigate threats through automated responses but is not used for creating forensic environments or orchestrating processes.</p><p><strong>INCORRECT:</strong> "AWS Shield" is incorrect.</p><p>AWS Shield is used for mitigating DDoS attacks.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html">https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html</a></p>',
        answers: [
          "<p>AWS CloudFormation</p>",
          "<p>AWS Fargate</p>",
          "<p>Amazon GuardDuty</p>",
          "<p>AWS Shield</p>",
          "<p>AWS Step Functions</p>",
        ],
      },
      correct_response: ["a", "e"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "A security team are designing a plan to respond to incidents of compromised Amazon EC2 instances. The incident response plan should include the automated provisioning of a secure forensic environment and orchestration of incident response processes.Which AWS services should be included in the plan? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99531711,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company is experiencing a layer 3 and layer 4 DDoS attack on its web servers running on AWS.</p><p>Which combination of AWS services and features will provide protection in this scenario? (Select THREE).</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", "", ""],
        explanation:
          '<p>There are several services that can assist with protecting against the impacts of a DDoS attack. AWS Shield is designed exactly for this purpose. Shield provides always-on detection and automatic inline mitigations that minimize application downtime and latency.</p><p>Amazon Route 53 can scale seamlessly to support large numbers of queries without any interruption to your legitimate users. Route 53 also uses <em>shuffle sharding</em> and <em>anycast striping</em> to increase availability.</p><p>Large DDoS attacks can overwhelm the capacity of a single Amazon EC2 instance. With Elastic Load Balancing (ELB), you can reduce the risk of overloading your application by distributing traffic across many backend instances. Elastic Load Balancing can scale automatically, allowing you to manage larger volumes when you have unanticipated extra traffic, for example, due to flash crowds or DDoS attacks.</p><p><strong>CORRECT: </strong>"Amazon Route 53" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"AWS Shield" is also a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Elastic Load Balancer" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "AWS KMS" is incorrect.</p><p>KMS is used for generating and managing encryption keys and does not offer protection to L3/L4 DDoS attacks.</p><p><strong>INCORRECT:</strong> "Amazon EBS" is incorrect.</p><p>Amazon EBS is the Elastic Block Store and is the block-based storage system used with Amazon EC2. It does not offer protection against DDoS attacks.</p><p><strong>INCORRECT:</strong> "Amazon GuardDuty" is incorrect.</p><p>Amazon GuardDuty can detect attacks such as application-level attacks. However, to offer protection you would need to integrate with other services such as CloudWatch Events and Lambda to respond to incidents. The question specifically asks for the services that WILL offer protection and as further configuration would be needed, GuardDuty is not a good answer.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/whitepapers/latest/aws-best-practices-ddos-resiliency/elastic-load-balancing-bp6.html">https://docs.aws.amazon.com/whitepapers/latest/aws-best-practices-ddos-resiliency/elastic-load-balancing-bp6.html</a></p><p><a href="https://aws.amazon.com/blogs/aws/reduce-ddos-risks-using-amazon-route-53-and-aws-shield/">https://aws.amazon.com/blogs/aws/reduce-ddos-risks-using-amazon-route-53-and-aws-shield/</a></p>',
        answers: [
          "<p>Amazon Route 53</p>",
          "<p>AWS KMS</p>",
          "<p>AWS Shield</p>",
          "<p>Amazon EBS</p>",
          "<p>Elastic Load Balancer</p>",
          "<p>Amazon GuardDuty</p>",
        ],
      },
      correct_response: ["a", "c", "e"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company is experiencing a layer 3 and layer 4 DDoS attack on its web servers running on AWS.Which combination of AWS services and features will provide protection in this scenario? (Select THREE).",
      related_lectures: [],
    },
  ],
};
