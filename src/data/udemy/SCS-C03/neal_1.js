export const neal_1 = {
  count: 25,
  next: null,
  previous: null,
  results: [
    {
      _class: "assessment",
      id: 99528287,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          '<p>A security engineer created an Amazon S3 bucket and attached the following bucket policy.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question/2023-01-04_02-13-58-26157aa0edcfdbf06a08442548015df5.jpg"><p>What is the effect of this bucket policy?</p>',
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The first statement in the bucket policy denies all S3 API actions for the AWS account specified with the Effect, Action, and Principal elements. This blocks all access to the account’s IAM principals, regardless of the IAM policy attached to those users or roles.</p><p>This policy prevents unintended access to the secure S3 bucket that could be introduced by IAM policies or ACLs. The policy then uses a Condition element to make exceptions for the allowed principals.</p><p>The Deny statement only applies when the principal whose access is being evaluated is <em>not</em> one of the specified users.</p><p><br></p><p><strong>CORRECT: </strong>"The specified users are not denied S3 permissions but must be granted permissions through IAM user policies or ACLs" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "The specified users are granted all S3 permissions to the bucket and objects within the bucket regardless of IAM user policies and ACLs" is incorrect.</p><p>The policy does not grant any permissions, it simply does not deny any permissions for the specified users. The users will need to have permissions granted elsewhere.</p><p><strong>INCORRECT:</strong> "The specified users are denied all S3 permissions to the bucket and objects within the bucket regardless of IAM user policies and ACLs" is incorrect.</p><p>The specified users are not denied permissions based on the Condition element in the policy.</p><p><strong>INCORRECT:</strong> "The specified account will be denied all S3 permissions but specified users from other accounts are excepted" is incorrect.</p><p>The policy denies permissions for all users except those specified within the account specified. It does not grant or deny permissions for other AWS accounts.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/security/how-to-create-a-policy-that-whitelists-access-to-sensitive-amazon-s3-buckets/">https://aws.amazon.com/blogs/security/how-to-create-a-policy-that-whitelists-access-to-sensitive-amazon-s3-buckets/</a></p>',
        answers: [
          "<p>The specified users are granted all S3 permissions to the bucket and objects within the bucket regardless of IAM user policies and ACLs.</p>",
          "<p>The specified users are denied all S3 permissions to the bucket and objects within the bucket regardless of IAM user policies and ACLs.</p>",
          "<p>The specified users are not denied S3 permissions but must be granted permissions through IAM user policies or ACLs.</p>",
          "<p>The specified account will be denied all S3 permissions but specified users from other accounts are excepted.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A security engineer created an Amazon S3 bucket and attached the following bucket policy.What is the effect of this bucket policy?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528289,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company is deploying Amazon EC2 instances into a new VPC. The instances must be scanned to detect any known software vulnerabilities. The instances should also be checked for compliance with CIS benchmarks.</p><p>Which solution addresses these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Note: the CIS scans are not available in the new Amazon Inspector but are still mentioned in the exam in relation to Amazon Inspector Classic.</p><p>Amazon Inspector Classic can be used to scan the instances and detect known software vulnerabilities and compliance with CIS benchmarks.</p><p>The “Common vulnerabilities and exposures” assessment verifies whether the EC2 instances in your assessment targets are exposed to common vulnerabilities and exposures (CVEs).</p><p>Attacks can exploit unpatched vulnerabilities to compromise the confidentiality, integrity, or availability of your service or data. The CVE system provides a reference method for publicly known information security vulnerabilities and exposures.</p><p>The “Center for Internet Security (CIS) Benchmarks” helps to establish secure configuration postures for several operating system versions.</p><p><strong>CORRECT: </strong>Use Amazon Inspector and run the “Common vulnerabilities and exposures” assessment and the “Center for Internet Security (CIS) Benchmarks” assessment" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use Amazon Inspector and run the “Network Reachability” assessment and the “Center for Internet Security (CIS) Benchmarks” assessment" is incorrect.</p><p>The “Common vulnerabilities and exposures” assessment should be used to identify unpatched software vulnerabilities. The “Network Reachability” assessment checks which ports are open and how your network interfaces are configured.</p><p><strong>INCORRECT:</strong> "Use AWS Config and configure the “restricted-common-ports” and ‘wafv2-logging-enabled” managed rules" is incorrect.</p><p>AWS Config cannot be used to scan for software vulnerabilities or CIS benchmarks.</p><p><strong>INCORRECT:</strong> "Use AWS CloudTrail and monitor the “PutEventSelectors” and “PutInsightSelectors” API actions" is incorrect.</p><p>These CloudTrail API actions are totally unrelated to Amazon EC2.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_rule-packages.html">https://docs.aws.amazon.com/inspector/latest/userguide/inspector_rule-packages.html</a></p>',
        answers: [
          "<p>Use Amazon Inspector and run the “Common vulnerabilities and exposures” assessment and the “Center for Internet Security (CIS) Benchmarks” assessment.</p>",
          "<p>Use AWS Config and configure the “restricted-common-ports” and ‘wafv2-logging-enabled” managed rules.</p>",
          "<p>Use Amazon Inspector and run the “Network Reachability” assessment and the “Center for Internet Security (CIS) Benchmarks” assessment.</p>",
          "<p>Use AWS CloudTrail and monitor the “PutEventSelectors” and “PutInsightSelectors” API actions.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company is deploying Amazon EC2 instances into a new VPC. The instances must be scanned to detect any known software vulnerabilities. The instances should also be checked for compliance with CIS benchmarks.Which solution addresses these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528291,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An attack left several Amazon EC2 Windows instances unresponsive. A security engineer has been asked to collect any memory dumps that may exist on the EC2 instances attached Amazon EBS volumes.</p><p>How should the security collect memory dumps for forensic analysis?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The EC2Rescue for Windows Server command line interface (CLI) allows you to run an EC2Rescue for Windows Server plugin (referred as an "action") programmatically.</p><p>The EC2Rescue for Windows Server tool has two execution modes:</p><ul><li><p><strong>/online</strong>—This allows you to take action on the instance that EC2Rescue for Windows Server is installed on, such as collect log files.</p></li><li><p><strong>/offline:&lt;device_id&gt;</strong>—This allows you to take action on the offline root volume that is attached to a separate Amazon EC2 Windows instance, on which you have installed EC2Rescue for Windows Server.</p></li></ul><p>In this case the instances are unresponsive so the /offline mode must be used and the device ID of the EBS volumes must be specified when running the CLI command.</p><p><strong>CORRECT: </strong>"Run the EC2Rescue CLI using the /offline mode and specify the device ID" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Run the EC2Rescue CLI using the /online mode and specify the instance ID" is incorrect.</p><p>Online mode cannot be used on an unresponsive instance as the commands are run on the instance itself. You also do not specify the instance ID as the commands are run locally.</p><p><strong>INCORRECT:</strong> "Install the SSM agent and stream log data to Amazon CloudWatch Logs" is incorrect.</p><p>You cannot install the SSM agent on an unresponsive instance and it does not collect memory dumps.</p><p><strong>INCORRECT:</strong> "Reboot the EC2 Windows Server, enter safe mode, and select memory dump" is incorrect.</p><p>This is not a valid method of exporting memory dumps from a Windows server.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2rw-cli.html">https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2rw-cli.html</a></p>',
        answers: [
          "<p>Install the SSM agent and stream log data to Amazon CloudWatch Logs.</p>",
          "<p>Run the EC2Rescue CLI using the /online mode and specify the instance ID.</p>",
          "<p>Reboot the EC2 Windows Server, enter safe mode, and select memory dump.</p>",
          "<p>Run the EC2Rescue CLI using the /offline mode and specify the device ID.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "An attack left several Amazon EC2 Windows instances unresponsive. A security engineer has been asked to collect any memory dumps that may exist on the EC2 instances attached Amazon EBS volumes.How should the security collect memory dumps for forensic analysis?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528349,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An application is being deployed on Amazon EC2 instances behind a Network Load Balancer (NLB) with an attached security group. The EC2 instances are failing health checks and are not entering the <strong>InService</strong> state.</p><p>What could be the cause of this issue?</p>",
        relatedLectureIds: [],
        links: [],
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>When security groups are used with an NLB, the EC2 instance security group must allow inbound traffic from the security group attached to the NLB for both application traffic and health checks.</p><p>NLBs send health check traffic from specific IP addresses. If the EC2 instance security group does not explicitly allow this traffic, the health checks will fail, causing the instances to remain in a failed state.</p><p><strong>CORRECT: </strong>"The EC2 instance security group does not allow inbound traffic from the security group associated with the NLB" is a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "The security group associated with the NLB does not allow outbound traffic to the EC2 instance security group" is incorrect.</p><p>Network Load Balancers do not initiate outbound traffic to EC2 instances. Instead, they forward traffic to targets. The traffic to EC2 instances comes from the <strong>NLB\'s security group</strong> or health check IP addresses, so this does not apply.</p><p><strong>INCORRECT:</strong> "The network ACL associated with the instance subnets does not allow ICMP traffic from the NLB" is incorrect.</p><p>The ICMP protocol is not used for health checks so it is not necessary to allow this traffic from the NLB.</p><p><strong>INCORRECT:</strong> "The security group associated with the NLB does not allow inbound traffic from the internet" is incorrect.</p><p>While the NLB\'s security group must allow inbound internet traffic to forward requests to EC2 instances, this does not directly impact <strong>health checks</strong>, which are internal communications between the NLB and the targets.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-health-checks.html">https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-health-checks.html</a></p>',
        answers: [
          "<p>The security group associated with the NLB does not allow outbound traffic to the EC2 instance security group.</p>",
          "<p>The EC2 instance security group does not allow inbound traffic from the security group associated with the NLB.</p>",
          "<p>The network ACL associated with the instance subnets does not allow ICMP traffic from the NLB.</p>",
          "<p>The security group associated with the NLB does not allow inbound traffic from the internet.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "An application is being deployed on Amazon EC2 instances behind a Network Load Balancer (NLB) with an attached security group. The EC2 instances are failing health checks and are not entering the InService state.What could be the cause of this issue?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528295,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>Due to compliance requirements, a company must rotate encryption keys every year. An AWS KMS key was created using imported key material. A security engineer needs a process to rotate the KMS key.</p><p>Which key rotation process is MOST efficient?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS KMS keys with imported key material are not eligible for automatic rotation. Therefore, a new KMS key must be created with new key material. An Alias is a friendly name for an AWS KMS key and can be updated to point to a different KMS key. This is the most efficient method as it means any applications configured to use the Alias do not need to be updated.</p><p><strong>CORRECT: </strong>"Create a new KMS key and update the existing Key Alias to point to the new KMS key" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Select the option to enable automatic rotation for the existing KMS key" is incorrect.</p><p>AWS KMS keys with imported key material are not eligible for automatic rotation.</p><p><strong>INCORRECT:</strong> "Upload new key material into the existing KMS key" is incorrect.</p><p>You cannot upload new key material to an AWS KMS key that was created with imported key material.</p><p><strong>INCORRECT:</strong> "Create a new KMS key and change the application to point to the new KMS key" is incorrect.</p><p>This is less efficient compared to using an Alias, so applications do not need to be updated to point to the new KMS key.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html</a></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html</a></p>',
        answers: [
          "<p>Select the option to enable automatic rotation for the existing KMS key.</p>",
          "<p>Upload new key material into the existing KMS key.</p>",
          "<p>Create a new KMS key and change the application to point to the new KMS key.</p>",
          "<p>Create a new KMS key and update the existing Key Alias to point to the new KMS key.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "Due to compliance requirements, a company must rotate encryption keys every year. An AWS KMS key was created using imported key material. A security engineer needs a process to rotate the KMS key.Which key rotation process is MOST efficient?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528297,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company has launched a web application running on port 80 on Amazon EC2 instances. The instances have been launched in a private subnet. An Application Load Balancer (ALB) is configured in front of the instances with an HTTP listener.</p><p>The instances are assigned to a security group named WebAppSG and the ALB is assigned to a security group named ALB-SG. The security team requires that the security group rules are locked down according to best practice.</p><p>What rules should be configured in the security groups? (Select THREE.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", "", ""],
        explanation:
          '<p>The most secure configuration that will allow the required traffic is as follows:</p><p>ALB-SG:</p><ul><li><p>Inbound rule to allow port 80 from 0.0.0.0/0.</p></li><li><p>Outbound rule to allow port 80 to WebAppSG (and the health check port if different).</p></li></ul><p>WebAppSG:</p><ul><li><p>Inbound rule to allow port 80 from the security group ID for ALB-SG.</p></li><li><p>Outbound rules are not necessary as the response traffic to the ALB is allowed by default (may require rules for security updates etc.)</p></li></ul><p><strong>CORRECT: </strong>"An inbound rule in WebAppSG allowing port 80 from source ALB-SG" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"An inbound rule in ALB-SG allowing port 80 from source 0.0.0.0/0" is also a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"An outbound rule in ALB-SG allowing port 80 to WebAppSG" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "An inbound rule in ALB-SG allowing port 80 from WebAppSG" is incorrect.</p><p>The ALB receives traffic from the internet so it should allow incoming traffic from 0.0.0.0/0. The ALB sends traffic to the web application outbound on port 80</p><p><strong>INCORRECT:</strong> "An outbound rule in WebAppSG allowing ports 1024-65535 to destination ALB-SG" is incorrect.</p><p>The web application security group does not need an outbound rule as response traffic is allowed. Ephemeral ports as specified above do not need to be opened.</p><p><strong>INCORRECT:</strong> "An outbound rule in ALB-SG allowing ports 1024-65535 to destination 0.0.0.0/" is incorrect.</p><p>There’s no need for an outbound rule to ephemeral ports as security groups are stateful and will allow response traffic.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html</a></p>',
        answers: [
          "<p>An inbound rule in WebAppSG allowing port 80 from source ALB-SG.</p>",
          "<p>An inbound rule in ALB-SG allowing port 80 from WebAppSG.</p>",
          "<p>An outbound rule in WebAppSG allowing ports 1024-65535 to destination ALB-SG.</p>",
          "<p>An inbound rule in ALB-SG allowing port 80 from source 0.0.0.0/0.</p>",
          "<p>An outbound rule in ALB-SG allowing ports 1024-65535 to destination 0.0.0.0/0.</p>",
          "<p>An outbound rule in ALB-SG allowing port 80 to WebAppSG.</p>",
        ],
      },
      correct_response: ["a", "d", "f"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company has launched a web application running on port 80 on Amazon EC2 instances. The instances have been launched in a private subnet. An Application Load Balancer (ALB) is configured in front of the instances with an HTTP listener.The instances are assigned to a security group named WebAppSG and the ALB is assigned to a security group named ALB-SG. The security team requires that the security group rules are locked down according to best practice.What rules should be configured in the security groups? (Select THREE.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528299,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A developer recently left a company, and the company wants to ensure that any code the developer wrote cannot be deployed to AWS Lambda functions. The company uses AWS Signer for all Lambda functions.</p><p>Which solution will meet this requirement?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Code signing for Lambda provides four signature checks. First, the <em>integrity</em> check confirms that the deployment artifact hasn’t been modified after it was signed using AWS Signer. Lambda performs this check by matching the hash of the artifact with the hash from the signature.</p><p>The second check is the <em>source mismatch</em> check, which detects if a signature isn’t present or if the artifact is signed by a signing profile that isn’t specified in the CSC. The third, <em>expiry</em> check, will fail if a signature is past its point of expiration.</p><p>The fourth is the <em>revocation</em> check, which is used to see if anyone has explicitly marked the signing profile used for signing or the signing job as invalid by revoking it.</p><p>The integrity check must succeed, or Lambda will not run the artifact. The other three checks can be configured to either block invocation or generate a warning. These checks are performed in order until one check fails, or all checks succeed.</p><p>In this case if the signing profile is revoked and the revocation check is configured to block on failure, the code cannot be deployed to Lambda functions.</p><p><strong>CORRECT: </strong>"Revoke all versions of the signing profile assigned to the developer" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Remove all IAM permissions that grant access to AWS Signer" is incorrect.</p><p>This would prevent the developer from using Signer but would not stop the existing code from being deployed.</p><p><strong>INCORRECT:</strong> "Change the AWS KMS key that is used to encrypt the source code" is incorrect.</p><p>This would not prevent the code from being deployed, it would change the keys used to encrypt the code.</p><p><strong>INCORRECT:</strong> "Use Amazon CodeGuru to review the code before it is deployed" is incorrect.</p><p>CodeGuru is used for reviewing source code and provides recommendations for improvements but will not prevent the code from being deployed.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/security/best-practices-and-advanced-patterns-for-lambda-code-signing/">https://aws.amazon.com/blogs/security/best-practices-and-advanced-patterns-for-lambda-code-signing/</a></p>',
        answers: [
          "<p>Change the AWS KMS key that is used to encrypt the source code.</p>",
          "<p>Remove all IAM permissions that grant access to AWS Signer.</p>",
          "<p>Revoke all versions of the signing profile assigned to the developer.</p>",
          "<p>Use Amazon CodeGuru to review the code before it is deployed.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A developer recently left a company, and the company wants to ensure that any code the developer wrote cannot be deployed to AWS Lambda functions. The company uses AWS Signer for all Lambda functions.Which solution will meet this requirement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528301,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company is implementing an application that will use AWS KMS encryption keys. The company plans to create customer managed KMS keys within KMS and will not import any key material. The encryption keys should be rotated every 12 months.</p><p>Which solution will meet these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>When you enable <em>automatic key rotation</em> for a customer managed key, AWS KMS generates new cryptographic material for the KMS key every year. You can enable or disable automatic key rotation for customer managed KMS keys at any time. You cannot modify the rotation configuration for AWS managed KMS keys which are automatically rotated every year.</p><p>Key rotation changes only the KMS key\'s <em>key material</em>, which is the cryptographic material that is used in encryption operations. The KMS key is the same logical resource, regardless of whether or how many times its key material changes. The properties of the KMS key do not change, as shown in the following image.</p><p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-04_00-34-09-a05cd64102acfb99c6f3e498dfdafdf3.jpg"></p><p><strong>CORRECT: </strong>"Enable the option to automatically rotate each KMS key every year" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS managed KMS keys instead so that AWS will rotate the keys automatically" is incorrect.</p><p>You cannot modify the rotation configuration for AWS managed KMS keys which are automatically rotated every year.</p><p><strong>INCORRECT:</strong> "Schedule an AWS Lambda function to rotate the backing key of each KMS key" is incorrect.</p><p>Customer managed KMS keys are being used so there is no need to create a custom solution as you can simply enable automatic key rotation.</p><p><strong>INCORRECT:</strong> "Change the customer managed KMS key policy to enable automatic key rotation" is incorrect.</p><p>You do not enable key rotation through a key policy. Key policies are used to grant permissions to use a KMS key.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html</a></p>',
        answers: [
          "<p>Change the customer managed KMS key policy to enable automatic key rotation.</p>",
          "<p>Use AWS managed KMS keys instead so that AWS will rotate the keys automatically.</p>",
          "<p>Enable the option to automatically rotate each KMS key every year.</p>",
          "<p>Schedule an AWS Lambda function to rotate the backing key of each KMS keys.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A company is implementing an application that will use AWS KMS encryption keys. The company plans to create customer managed KMS keys within KMS and will not import any key material. The encryption keys should be rotated every 12 months.Which solution will meet these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528303,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>An administrative user accidentally exposed an access key ID and secret access key to a public support forum. The user notified the security team about the incident after removing the exposed credentials from the forum.</p><p>Which initial steps should a security engineer take to mitigate the exposure without interrupting operations? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>There are several steps you can take if credentials are inadvertently exposed (see article below). The initial steps the engineer should take include invalidating any temporary security credentials that may have been issued and deleting or disabling the access key ID and secret access key.</p><p>These actions will ensure that any malicious actor who obtains the access key will not be able to use it and if temporary security credentials have been obtained they will no longer be valid for use.</p><p>One method of invalidating temporary security credentials is to attach a policy that denies all access to temporary security credentials that were issued before the specified date and time. Here is an example of such a policy:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-04_00-38-39-c2422bcd01ee5286f611b96458006f6c.jpg"><p><strong>CORRECT: </strong>"Invalidate any temporary security credentials" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Delete the access key ID and secret access key" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Reset the password for the root user on the account" is incorrect.</p><p>This is unnecessary as the root user account has not been compromised.</p><p><strong>INCORRECT:</strong> "Implement a deny policy blocking access to resources" is incorrect.</p><p>This would cause interruption as resources would be inaccessible.</p><p><strong>INCORRECT:</strong> "Terminate or disable any resources the user has access to" is incorrect.</p><p>This would be very disruptive and may result in lost data and downtime.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/security/what-to-do-if-you-inadvertently-expose-an-aws-access-key/">https://aws.amazon.com/blogs/security/what-to-do-if-you-inadvertently-expose-an-aws-access-key/</a></p>',
        answers: [
          "<p>Reset the password for the root user on the account.</p>",
          "<p>Implement a deny policy blocking access to resources.</p>",
          "<p>Terminate or disable any resources the user has access to.</p>",
          "<p>Invalidate any temporary security credentials.</p>",
          "<p>Delete the access key ID and secret access key.</p>",
        ],
      },
      correct_response: ["d", "e"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "An administrative user accidentally exposed an access key ID and secret access key to a public support forum. The user notified the security team about the incident after removing the exposed credentials from the forum.Which initial steps should a security engineer take to mitigate the exposure without interrupting operations? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528305,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An application running in a private subnet needs outbound connectivity to an internet service using the IPv6 protocol. A security engineer has created a separate route table for the private subnet.</p><p>The security engineer needs to enable outbound connectivity to the internet service. The solution should ensure inbound connections from the internet cannot be initiated.</p><p>Which actions should the network engineer take to meet this requirement?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>An egress-only internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows outbound communication over IPv6 from instances in your VPC to the internet and prevents the internet from initiating an IPv6 connection with your instances.</p><p><strong>CORRECT: </strong>"Create an egress-only internet gateway and update the route table in the private subnet" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a NAT gateway in a public subnet and update the route table in the private subnet" is incorrect.</p><p>NAT gateways are used for IPv4 not IPv6.</p><p><strong>INCORRECT:</strong> "Create an internet gateway in a private subnet and update the route table in the private subnet" is incorrect.</p><p>Internet gateways are used for routing traffic out of the VPC and are attached at the VPC level. To enable outbound IPv6 an egress-only internet gateway is also needed.</p><p><strong>INCORRECT:</strong> "Create an internet gateway in a public subnet and update the route table in the private subnet" is incorrect.</p><p>Internet gateways are used for routing traffic out of the VPC and are attached at the VPC level. To enable outbound IPv6 an egress-only internet gateway is also needed.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html">https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html</a></p>',
        answers: [
          "<p>Create a NAT gateway in a public subnet and update the route table in the private subnet.</p>",
          "<p>Create an internet gateway in a private subnet and update the route table in the private subnet.</p>",
          "<p>Create an egress-only internet gateway and update the route table in the private subnet.</p>",
          "<p>Create an internet gateway in a public subnet and update the route table in the private subnet.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "An application running in a private subnet needs outbound connectivity to an internet service using the IPv6 protocol. A security engineer has created a separate route table for the private subnet.The security engineer needs to enable outbound connectivity to the internet service. The solution should ensure inbound connections from the internet cannot be initiated.Which actions should the network engineer take to meet this requirement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528307,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer has deployed a virtual security appliance inline. The virtual security appliance will be used to inspect traffic that is forwarded between subnets.</p><p>What configuration is necessary to allow the virtual security appliance to route the traffic?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>An inline security appliance running on an Amazon EC2 instance can be configured with multiple network interfaces. These interfaces may reside in different subnets within the VPC.</p><p>Each EC2 instance performs source/destination checks by default. This means that the instance must be the source or destination of any traffic it sends or receives. However, an inline security appliance must be able to send and receive traffic when the source or destination is not itself. Therefore, you must disable source/destination checks on these instances.</p><p><strong>CORRECT: </strong>"Disable the Network Source/Destination check on the security appliance\'s elastic network interface" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Configure the security appliance\'s elastic network interfaces for promiscuous mode and attach elastic IP addresses" is incorrect.</p><p>Promiscuous mode (not supported) is a networking configuration where you are able to capture all the traffic from a network interface for inspection.</p><p><strong>INCORRECT:</strong> "Attach an elastic network adapter (ENA), install the ENA module, and enable ENA support" is incorrect.</p><p>This is a high-performance adapter and does not need to be used in this configuration.</p><p><strong>INCORRECT:</strong> "Place the security appliance in the public subnet with the internet gateway and route traffic to the appliance" is incorrect.</p><p>The security appliance can be attached to private or public subnets and does not need an internet gateway.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/scenarios-enis.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/scenarios-enis.html</a></p>',
        answers: [
          "<p>Attach an elastic network adapter (ENA), install the ENA module, and enable ENA support.</p>",
          "<p>Disable the Network Source/Destination check on the security appliance's elastic network interface.</p>",
          "<p>Configure the security appliance's elastic network interfaces for promiscuous mode and attach elastic IP addresses.</p>",
          "<p>Place the security appliance in the public subnet with the internet gateway and route traffic to the appliance.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A security engineer has deployed a virtual security appliance inline. The virtual security appliance will be used to inspect traffic that is forwarded between subnets.What configuration is necessary to allow the virtual security appliance to route the traffic?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528309,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A solutions architect is designing a secure, distributed application that will run on Amazon EC2 instances across multiple Availability Zones and AWS Regions and on-premises servers. The has asked a security engineer how encryption will be applied between the EC2 instances and on-premises servers.</p><p>Which statements are correct about encryption in transit? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>All data flowing across AWS Regions over the AWS global network is automatically encrypted at the physical layer before it leaves AWS secured facilities. All traffic between AZs is also encrypted.</p><p>Traffic between instances may be encrypted in some circumstances. The instances must use a supported instance type and be within the same Region and VPC (or in a peered VPC.)</p><p><strong>CORRECT: </strong>"All inter-region traffic over the AWS global network is automatically encrypted" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"All traffic between Availability Zones is encrypted by default" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "All intra-region traffic is encrypted between instances for all instance types" is incorrect.</p><p>This is not true. Traffic may be encrypted between instances with certain constraints as mentioned above and in the reference link below.</p><p><strong>INCORRECT:</strong> "All traffic between Availability Zones is unencrypted by default" is incorrect.</p><p>This is not true as AWS does encrypt all traffic between AZs.</p><p><strong>INCORRECT:</strong> "All traffic across an AWS Direct Connect connection is automatically encrypted" is incorrect.</p><p>This is not true as AWS Direct Connect does not provide encryption. You must create an encrypted VPN tunnel over your DX connection to provide encryption.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-protection.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-protection.html</a></p>',
        answers: [
          "<p>All inter-region traffic over the AWS global network is automatically encrypted.</p>",
          "<p>All intra-region traffic is encrypted between instances for all instance types.</p>",
          "<p>All traffic between Availability Zones is unencrypted by default.</p>",
          "<p>All traffic across an AWS Direct Connect connection is automatically encrypted.</p>",
          "<p>All traffic between Availability Zones is encrypted by default.</p>",
        ],
      },
      correct_response: ["a", "e"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A solutions architect is designing a secure, distributed application that will run on Amazon EC2 instances across multiple Availability Zones and AWS Regions and on-premises servers. The has asked a security engineer how encryption will be applied between the EC2 instances and on-premises servers.Which statements are correct about encryption in transit? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528311,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company uses AWS Organizations and federation between and on-premises identity provider (IdP). Users authenticate to AWS using credentials in the IdP. A security engineer needs to audit requests to AWS Organizations for creating new AWS accounts.</p><p>What should the engineer review to determine who made the request?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS Organizations enables you to create new accounts through the console or programmatically using the organizations API. When you create accounts through organizations the API calls are logged in AWS CloudTrail.</p><p>In this case AWS CloudTrail can be used to track the activity of the federated users. CloudTrail records the following AWS Security Token Service (AWS STS) API calls: AssumeRoleWithWebIdentity and AssumeRoleWithSAML.</p><p>Records of these API calls will be stored in CloudTrail and the user name of the federated user who made the call can be identified.</p><p><strong>CORRECT: </strong>"AWS CloudTrail for the federated identity user name" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "AWS IAM Access Analyzer for the federated user name" is incorrect.</p><p>This service helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity.</p><p><strong>INCORRECT:</strong> "AWS X-Ray traces for the federated identity user name" is incorrect.</p><p>This service is used for analyzing and debugging production, distributed applications. It is not used for auditing account activity.</p><p><strong>INCORRECT:</strong> "Federated identity provider logs for the user name" is incorrect.</p><p>The request to AWS Organizations will be recorded by CloudTrail and the federated identity user name will be recorded in the log entry.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-ct.html">https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-ct.html</a></p><p><a href="https://aws.amazon.com/blogs/security/how-to-easily-identify-your-federated-users-by-using-aws-cloudtrail/">https://aws.amazon.com/blogs/security/how-to-easily-identify-your-federated-users-by-using-aws-cloudtrail/</a></p>',
        answers: [
          "<p>AWS CloudTrail for the federated identity user name.</p>",
          "<p>AWS IAM Access Analyzer for the federated user name.</p>",
          "<p>AWS X-Ray traces for the federated identity user name.</p>",
          "<p>Federated identity provider logs for the user name.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company uses AWS Organizations and federation between and on-premises identity provider (IdP). Users authenticate to AWS using credentials in the IdP. A security engineer needs to audit requests to AWS Organizations for creating new AWS accounts.What should the engineer review to determine who made the request?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528313,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company is deploying a solution that includes an Application Load Balancer in front of many Amazon EC2 instances. A caching and distribution solution is required for the content. Customers will connect to the application using a custom domain name and subdomains and must be secured with TLS encryption.</p><p>Which combination of actions will achieve the requirements? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>The CloudFront distribution will cache and distribute content. When creating the distribution you can add alternate domain names (CNAMEs). However, note that a CNAME cannot be used for an apex (or root) domain name in Amazon Route 53. Therefore, Alias records should be created in Route 53 instead.</p><p>For TLS encryption AWS Certificate Manager can be used to create SSL/TLS certificates which you can select in the CloudFront distribution. You can add multiple domain names to the certificate.</p><p><strong>CORRECT: </strong>"Create an Amazon CloudFront distribution, configure the alternate domain name and subdomains, and select a certificate from AWS Certificate Manager (ACM)" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Create a certificate in AWS Certificate Manager (ACM) and add the domain name and subdomains. Create Alias records for the distribution in Amazon Route 53" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an Amazon CloudFront distribution, configure the alternate domain name and subdomains, and select a key from AWS KMS" is incorrect.</p><p>AWS KMS is used for creating and managing encryption keys for encryption at rest, not encryption in transit which uses certificates.</p><p><strong>INCORRECT:</strong> "Create an encryption key in AWS Key Management Service (KMS) and add CloudFront to the key policy. Create CNAME. records in Amazon Route 53" is incorrect.</p><p>AWS KMS is used for creating and managing encryption keys for encryption at rest, not encryption in transit which uses certificates.</p><p><strong>INCORRECT:</strong> "Create a certificate in AWS Certificate Manager (ACM) and add the domain name and subdomains. Create CNAME. records in Amazon Route 53" is incorrect.</p><p>A CNAME cannot be used for an apex domain name in Route 53.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html</a></p><p><a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html">https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html</a></p><p><a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html</a></p>',
        answers: [
          "<p>Create an Amazon CloudFront distribution, configure the alternate domain name and subdomains, and select a key from AWS KMS.</p>",
          "<p>Create an Amazon CloudFront distribution, configure the alternate domain name and subdomains, and select a certificate from AWS Certificate Manager (ACM).</p>",
          "<p>Create a certificate in AWS Certificate Manager (ACM) and add the domain name and subdomains. Create Alias records for the distribution in Amazon Route 53.</p>",
          "<p>Create an encryption key in AWS Key Management Service (KMS) and add CloudFront to the key policy. Create CNAME. records in Amazon Route 53.</p>",
          "<p>Create a certificate in AWS Certificate Manager (ACM) and add the domain name and subdomains. Create CNAME. records in Amazon Route 53.</p>",
        ],
      },
      correct_response: ["b", "c"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "A company is deploying a solution that includes an Application Load Balancer in front of many Amazon EC2 instances. A caching and distribution solution is required for the content. Customers will connect to the application using a custom domain name and subdomains and must be secured with TLS encryption.Which combination of actions will achieve the requirements? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528315,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company uses AWS across multiple Regions. A security audit highlighted some issues that must be addressed. The company must track all configuration changes affecting AWS resources and have detailed records of who has accessed the AWS environment. The data should include information such as which user has logged in and which API calls they made</p><p>What actions should be taken to meet these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS Config is a service used to track and remediation any unauthorized configuration changes made with your AWS Account. AWS Config could be used in this example with AWS AWS CloudTrail which keeps detailed logs of all API calls made within the account such as who logged in, which AWS Identity and Access Management (IAM) role is being used and also how they interact with the AWS Cloud.</p><p><strong>CORRECT: </strong>"Use AWS Config to track configuration changes and AWS CloudTrail to record API calls and track access patterns in the AWS Cloud" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use Amazon CloudWatch to track configuration changes and AWS Config to record API calls and track access patterns in the AWS Cloud" is incorrect. Amazon CloudWatch does not make track configuration changes, it tracks performance metrics and AWS Config does not track API calls, it tracks configuration changes.</p><p><strong>INCORRECT:</strong> "Use AWS Config to track configuration changes and Amazon EventBridge to record API calls and track access patterns in the AWS Cloud" is incorrect. Although AWS Config would work in this scenario, <em>Amazon EventBridge</em> is a serverless event bus used to build event-driven- architectures so it cannot be used for tracking API calls.</p><p><strong>INCORRECT:</strong> "Use Amazon Macie to track configuration changes and Amazon CloudTrail to record API calls and track access patterns in the AWS Cloud" is incorrect. Amazon Macie is used with Amazon S3 to detect sensitive PII data, which has nothing to do with tracking configuration changes.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/config">https://aws.amazon.com/config</a></p><p><strong>Save time with our AWS cheat sheets:</strong></p><p><a href="https://digitalcloud.training/aws-config/">https://digitalcloud.training/aws-config/</a></p>',
        answers: [
          "<p>Use Amazon CloudWatch to track configuration changes and AWS Config to record API calls and track access patterns in the AWS Cloud.</p>",
          "<p>Use AWS Config to track configuration changes and AWS CloudTrail to record API calls and track access patterns in the AWS Cloud.</p>",
          "<p>Use AWS Config to track configuration changes and Amazon EventBridge to record API calls and track access patterns in the AWS Cloud.</p>",
          "<p>Use Amazon Macie to track configuration changes and Amazon CloudTrail to record API calls and track access patterns in the AWS Cloud.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company uses AWS across multiple Regions. A security audit highlighted some issues that must be addressed. The company must track all configuration changes affecting AWS resources and have detailed records of who has accessed the AWS environment. The data should include information such as which user has logged in and which API calls they madeWhat actions should be taken to meet these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528317,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has a multi-account setup in AWS Organizations with 50 member accounts. The company uses AWS Security Hub to aggregate security findings across all accounts, with one account acting as a Security Hub administrator. The company's security operations team wants to receive real-time email alerts whenever there's a high-priority AWS Inspector finding across any of the accounts.</p><p>Which solution will fulfill these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>With an EventBridge rule in the Security Hub administrator account, the team can detect high-severity AWS Inspector findings across the organization. They can then use SNS to send real-time email alerts to the security operations team.</p><p><strong>CORRECT: </strong>"In the Security Hub administrator account, create an Amazon EventBridge rule to react to AWS Inspector findings with a high priority level. Configure the rule to target an Amazon SNS topic and subscribe the security operations team\'s email addresses to the SNS topic" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Enable AWS Config across the organization and create a rule to detect AWS Inspector findings. Then, configure an EventBridge rule in the management account to react when AWS Config registers a compliance change. Have the EventBridge rule target an Amazon SNS topic and subscribe the security operations team\'s email addresses to it" is incorrect.</p><p>AWS Config is used for resource configuration tracking and compliance auditing, not for responding to AWS Inspector findings. This approach would not meet the requirements.</p><p><strong>INCORRECT:</strong> "In each member account, set up a rule in Amazon EventBridge that reacts to AWS Inspector findings with high severity. Configure the rule to target an Amazon SNS topic and subscribe the security operations team\'s email addresses to the SNS topic" is incorrect.</p><p>This solution could technically work but would be operationally intensive to implement and maintain across 50 member accounts. It\'s more efficient to manage this centrally from the Security Hub administrator account.</p><p><strong>INCORRECT:</strong> "Enable AWS CloudTrail for the organization in the management account. Set up an Amazon EventBridge rule to react to ListFindings API calls from AWS Inspector. Configure the rule to target an Amazon SNS topic and subscribe the security operations team\'s email addresses to it" is incorrect.</p><p>AWS CloudTrail tracks API calls but does not directly interact with AWS Inspector findings. Using CloudTrail for this purpose would not meet the requirement.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html</a></p>',
        answers: [
          "<p>In the Security Hub administrator account, create an Amazon EventBridge rule to react to AWS Inspector findings with a high priority level. Configure the rule to target an Amazon SNS topic and subscribe the security operations team's email addresses to the SNS topic.</p>",
          "<p>Enable AWS Config across the organization and create a rule to detect AWS Inspector findings. Then, configure an EventBridge rule in the management account to react when AWS Config registers a compliance change. Have the EventBridge rule target an Amazon SNS topic and subscribe the security operations team's email addresses to it.</p>",
          "<p>In each member account, set up a rule in Amazon EventBridge that reacts to AWS Inspector findings with high severity. Configure the rule to target an Amazon SNS topic and subscribe the security operations team's email addresses to the SNS topic.</p>",
          "<p>Enable AWS CloudTrail for the organization in the management account. Set up an Amazon EventBridge rule to react to ListFindings API calls from AWS Inspector. Configure the rule to target an Amazon SNS topic and subscribe the security operations team's email addresses to it.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A company has a multi-account setup in AWS Organizations with 50 member accounts. The company uses AWS Security Hub to aggregate security findings across all accounts, with one account acting as a Security Hub administrator. The company's security operations team wants to receive real-time email alerts whenever there's a high-priority AWS Inspector finding across any of the accounts.Which solution will fulfill these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528319,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company has a range of highly sensitive data stored in an Amazon S3 bucket in the eu-west-1 Region. Certain objects in this S3 bucket are protected with server-side encryption using AWS KMS keys (SSE-KMS). To enable disaster recovery, a security architect sets up an additional S3 bucket in the eu-central-1 Region within the same AWS account.</p><p>A customer-managed key is established in the eu-central-1 region to ensure the encryption at rest of objects in the backup S3 bucket. The replication configuration is configured to utilize this key for encryption in the destination bucket. An IAM role has been granted to the S3 replication configuration to execute replication actions.</p><p>However, after some time, the security architect notices that the encrypted objects from the source S3 bucket are not being replicated to the destination S3 bucket, while the unencrypted objects are replicated without issue.</p><p>What sequence of steps should the security architect take to resolve this issue? (Select THREE.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", "", ""],
        explanation:
          '<p>The IAM role needs the kms:Encrypt permission for the key in the eu-west-1 region that is used to encrypt the source objects. This permission is necessary so the role can encrypt objects before they are transferred.</p><p>The s3:GetObjectVersionForReplication permission is required for the IAM role to retrieve the version of an object for replication from the source S3 bucket. Without this permission, the role may not be able to access object versions for replication.</p><p>The kms:Decrypt permission for the key in eu-west-1 that is used to encrypt the source objects is necessary for the IAM role. This is because the role needs to decrypt the source objects before they can be transferred and encrypted again for the destination bucket.</p><p><strong>INCORRECT: </strong>"Provide the IAM role with the kms:Encrypt permission for the key in the eu-west-1 region that encrypts the source objects" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Grant the IAM role the s3:GetObjectVersionForReplication permission for the objects in the source S3 bucket" is also a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Give the IAM role the kms:Decrypt permission for the eu-west-1 key encrypting the source objects" is also a correct answer (as explained above.)</p><p><strong>CORRECT:</strong> "Assign the IAM role the kms:Encrypt permission for the key in the eu-central-1 region that encrypts objects in the destination S3 bucket" is incorrect.</p><p><strong>INCORRECT:</strong> "Update the replication configuration to use the eu-west-1 key for the encryption of objects within the destination S3 bucket" is incorrect.</p><p>It\'s not a best practice to use the key from the source region to encrypt objects in the destination region. The destination region should have its own key for encrypting objects at rest. Moreover, using the source key wouldn\'t resolve the issue, as the problem is not about the key used for encryption at the destination but rather the IAM role\'s permissions to decrypt (source) and encrypt (destination) using the respective keys.</p><p><strong>INCORRECT:</strong> "Alter the key policy for the eu-west-1 key to grant the security architect\'s IAM account the kms:Decrypt permission" is incorrect.</p><p>Granting the security architect\'s IAM account the kms:Decrypt permission won\'t solve the issue. The issue lies with the permissions of the IAM role used by the S3 replication, not the permissions of the security architect\'s IAM account. The IAM role is the entity performing the replication and hence needs to have the correct permissions.</p><p>The IAM role used for S3 replication doesn\'t need to explicitly encrypt the objects in the destination bucket, as Amazon S3 handles the encryption process on its side once the objects arrive. It’s more important for the IAM role to have kms:Decrypt permission for the key in the source bucket so it can read and replicate the objects. The objects get encrypted at the destination bucket automatically using the key specified in the destination bucket\'s configuration.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-config-for-kms-objects.html">https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-config-for-kms-objects.html</a></p>',
        answers: [
          "<p>Update the replication configuration to use the eu-west-1 key for the encryption of objects within the destination S3 bucket.</p>",
          "<p>Provide the IAM role with the kms:Encrypt permission for the key in the eu-west-1 region that encrypts the source objects.</p>",
          "<p>Grant the IAM role the s3:GetObjectVersionForReplication permission for the objects in the source S3 bucket.</p>",
          "<p>Give the IAM role the kms:Decrypt permission for the eu-west-1 key encrypting the source objects.</p>",
          "<p>Alter the key policy for the eu-west-1 key to grant the security architect's IAM account the kms:Decrypt permission.</p>",
          "<p>Assign the IAM role the kms:Encrypt permission for the key in the eu-central-1 region that encrypts objects in the destination S3 bucket.</p>",
        ],
      },
      correct_response: ["c", "d", "f"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A company has a range of highly sensitive data stored in an Amazon S3 bucket in the eu-west-1 Region. Certain objects in this S3 bucket are protected with server-side encryption using AWS KMS keys (SSE-KMS). To enable disaster recovery, a security architect sets up an additional S3 bucket in the eu-central-1 Region within the same AWS account.A customer-managed key is established in the eu-central-1 region to ensure the encryption at rest of objects in the backup S3 bucket. The replication configuration is configured to utilize this key for encryption in the destination bucket. An IAM role has been granted to the S3 replication configuration to execute replication actions.However, after some time, the security architect notices that the encrypted objects from the source S3 bucket are not being replicated to the destination S3 bucket, while the unencrypted objects are replicated without issue.What sequence of steps should the security architect take to resolve this issue? (Select THREE.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528321,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has several microservices running on Amazon EC2 instances in multiple AWS accounts. Each microservice generates logs containing performance and utilization data. The company wants to centralize the logs in one account for further analysis and detection of unusual patterns. A solutions architect is assigned to ensure that logs from all the company's AWS accounts are aggregated and ingested in real-time into a data processing system for anomaly detection.</p><p>Which solution will meet this requirement?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>CloudWatch Logs subscription filters can be used to stream logs in real-time. By sending logs to an Amazon Kinesis Data Firehose stream in the central account, you can efficiently aggregate logs from multiple accounts. Kinesis Data Firehose can then forward these logs directly to the data processing system for real-time analysis.</p><p><strong>CORRECT: </strong>"Set up CloudWatch Logs subscription filters in each account. Use the subscription filters to stream the logs to an Amazon Kinesis Data Firehose stream in the central account, which then forwards the logs to the data processing system" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Configure Amazon CloudWatch Logs agent on EC2 instances in each account to send logs to an Amazon S3 bucket in the central account. Set up a Lambda function to process the logs from the S3 bucket and send them to the data processing system" is incorrect.</p><p>This option is not efficient for real-time log ingestion as it involves storing logs in an S3 bucket first and then processing them through a Lambda function. This additional step can cause delays and isn’t optimized for real-time data processing.</p><p><strong>INCORRECT:</strong> "Set up AWS Config in each account to monitor changes in EC2 instances and aggregate the data in the central account. Use AWS Lambda to process the aggregated data and send it to the data processing system" is incorrect.</p><p>AWS Config is primarily for configuration management and compliance. While it can monitor changes in EC2 instances, it isn\'t designed for log aggregation or real-time analysis of performance and utilization data from application logs.</p><p><strong>INCORRECT:</strong> "Write a custom script on each EC2 instance to push logs to Amazon S3 in the respective accounts. Set up cross-account access for S3 buckets and use AWS Glue to aggregate and process logs in the central account" is incorrect.</p><p>This option involves writing logs to S3 and then processing them. This is not optimized for real-time ingestion and processing, and writing custom scripts can add additional complexity and maintenance overhead.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#FirehoseExample">https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#FirehoseExample</a></p>',
        answers: [
          "<p>Configure Amazon CloudWatch Logs agent on EC2 instances in each account to send logs to an Amazon S3 bucket in the central account. Set up a Lambda function to process the logs from the S3 bucket and send them to the data processing system.</p>",
          "<p>Set up CloudWatch Logs subscription filters in each account. Use the subscription filters to stream the logs to an Amazon Kinesis Data Firehose stream in the central account, which then forwards the logs to the data processing system.</p>",
          "<p>Set up AWS Config in each account to monitor changes in EC2 instances and aggregate the data in the central account. Use AWS Lambda to process the aggregated data and send it to the data processing system.</p>",
          "<p>Write a custom script on each EC2 instance to push logs to Amazon S3 in the respective accounts. Set up cross-account access for S3 buckets and use AWS Glue to aggregate and process logs in the central account.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A company has several microservices running on Amazon EC2 instances in multiple AWS accounts. Each microservice generates logs containing performance and utilization data. The company wants to centralize the logs in one account for further analysis and detection of unusual patterns. A solutions architect is assigned to ensure that logs from all the company's AWS accounts are aggregated and ingested in real-time into a data processing system for anomaly detection.Which solution will meet this requirement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528323,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A multinational enterprise uses AWS Organizations to manage several AWS accounts spread across different regions. The company's IT department centrally manages the creation of IAM roles. Recently, the company decided to delegate the IAM role creation to various regional teams to speed up the process and reduce the IT department's workload. However, it is critical to prevent privilege escalation and ensure the scope of IAM roles remains within the defined limits.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>In AWS Organizations, Service Control Policies (SCPs) are one type of policy that you can use to manage permissions. SCPs offer central control over the maximum available permissions for all accounts in your organization. SCPs help to ensure your accounts stay within your organization’s access control guidelines.</p><p>When you attach an SCP to the root, it affects all the OUs, accounts, and users under the root. Any permissions that are not explicitly granted by the SCP are implicitly denied.</p><p>A permissions boundary is an advanced feature in which you set the maximum permissions that an entity (user or role) can have. By setting a permissions boundary for IAM roles, the security team can delegate the role creation to application teams but still control the maximum permissions any IAM role can have.</p><p>Using a combination of SCPs and permissions boundaries provides a mechanism to delegate IAM role creation to the application teams while limiting the permissions those roles can have, thus preventing privilege escalation and controlling the scope of IAM roles.</p><p>By attaching the SCP to the root OU, you ensure that these restrictions apply to all accounts in your organization, not just the ones you specifically identify. And by using a permissions boundary, you can provide a \'safety net\' that limits the permissions of any roles that are created, regardless of who creates them or what permissions they attempt to assign to the role. This mechanism significantly reduces the operational overhead and ensures security compliance across all teams and roles.</p><p><strong>CORRECT: </strong>"Establish an SCP and a permissions boundary for IAM roles. Apply the SCP to the root OU so that only roles with the attached permissions boundary can create any new IAM roles" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Assign an IAM group for each regional team, attach relevant policies to these groups, and then create IAM users for each regional team member. Add the respective IAM users to their relevant IAM group using Role-Based Access Control (RBAC)" is incorrect.</p><p>Although IAM groups and RBAC can help in managing permissions, this solution does not inherently prevent privilege escalation or limit the scope of IAM roles.</p><p><strong>INCORRECT:</strong> "Empower regional team leaders to create IAM roles for their teams and conduct bi-annual audits of the IAM roles they have created. Provide necessary training to these leaders about the rules and best practices of IAM role creation" is incorrect.</p><p>This approach places a lot of responsibility and potential risk with the team leaders, and bi-annual audits could allow for extended periods of misconfigured access. It also adds operational overhead due to training needs.</p><p><strong>INCORRECT:</strong> "Organize each AWS account into an Organizational Unit (OU) based on the regions. Attach Service Control Policies (SCP) to each OU, granting access only to the AWS services required by the regional teams" is incorrect.</p><p>While this can limit access to certain services, it does not necessarily limit the scope of IAM roles or prevent privilege escalation within the allowed services.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html</a></p>',
        answers: [
          "<p>Assign an IAM group for each regional team, attach relevant policies to these groups, and then create IAM users for each regional team member. Add the respective IAM users to their relevant IAM group using Role-Based Access Control (RBAC).</p>",
          "<p>Empower regional team leaders to create IAM roles for their teams and conduct bi-annual audits of the IAM roles they have created. Provide necessary training to these leaders about the rules and best practices of IAM role creation.</p>",
          "<p>Organize each AWS account into an Organizational Unit (OU) based on the regions. Attach Service Control Policies (SCP) to each OU, granting access only to the AWS services required by the regional teams.</p>",
          "<p>Establish an SCP and a permissions boundary for IAM roles. Apply the SCP to the root OU so that only roles with the attached permissions boundary can create any new IAM roles.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A multinational enterprise uses AWS Organizations to manage several AWS accounts spread across different regions. The company's IT department centrally manages the creation of IAM roles. Recently, the company decided to delegate the IAM role creation to various regional teams to speed up the process and reduce the IT department's workload. However, it is critical to prevent privilege escalation and ensure the scope of IAM roles remains within the defined limits.Which solution will meet these requirements with the LEAST operational overhead?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528325,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A university is using AWS Organizations to manage several AWS accounts for different departments. Recently, there was an incident of misuse with one of the departmental accounts. To prevent any misuse or accidental changes, the university wants to limit the access level of the AWS root account across all member accounts.</p><p>Which solution will help meet this requirement?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Service Control Policies (SCPs) can limit the maximum permission level for all AWS accounts in an organization, including the root user. By implementing SCPs, the university can prevent the root user in any account from exceeding the permissions defined in the SCP.</p><p>The following example policy restricts all access to the specified actions for the root user in a member account:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-06_22-06-36-0ebfba80d678d4db0d0e8f8b26ba8db4.jpg"><p><strong>CORRECT: </strong>"Use Service Control Policies (SCPs) to limit root account permissions" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS IAM policies to restrict root account access" is incorrect.</p><p>IAM policies are used to grant permissions to IAM users, groups, or roles. They cannot be used to directly restrict the permissions of the root user account.</p><p><strong>INCORRECT:</strong> "Implement multi-factor authentication (MFA) on the root account" is incorrect.</p><p>Although MFA adds an extra layer of security to the root account, it does not limit the access level or permissions of the root account. The root user always has full access to all resources in the AWS account.</p><p><strong>INCORRECT:</strong> "Activate AWS CloudTrail for monitoring root account activities" is incorrect.</p><p>While AWS CloudTrail allows you to log and monitor activities in your AWS environment, it does not restrict or limit the permissions of the root account.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html</a></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-root-user">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-root-user</a></p>',
        answers: [
          "<p>Use AWS IAM policies to restrict root account access.</p>",
          "<p>Implement multi-factor authentication (MFA) on the root account.</p>",
          "<p>Use Service Control Policies (SCPs) to limit root account permissions.</p>",
          "<p>Activate AWS CloudTrail for monitoring root account activities.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A university is using AWS Organizations to manage several AWS accounts for different departments. Recently, there was an incident of misuse with one of the departmental accounts. To prevent any misuse or accidental changes, the university wants to limit the access level of the AWS root account across all member accounts.Which solution will help meet this requirement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528327,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer must identify any Amazon EC2 instances that are running a vulnerable version of a common web framework. The security team need to quickly identify all compute resources running the specific version so they can install patches.</p><p>Which approach should the team take to accomplish this task?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS Systems Manager Patch Manager can be used to scan systems and identify vulnerable versions of software and then install the patches on the systems. Patch Manager provides options to scan your instances and report compliance on a schedule, install available patches on a schedule, and patch or scan instances on demand whenever you need to.</p><p>Patch Manager integrates with AWS Identity and Access Management (IAM), AWS CloudTrail, and Amazon EventBridge to provide a secure patching experience that includes event notifications and the ability to audit usage.</p><p><strong>CORRECT: </strong>"Scan all the EC2 instances with AWS Systems Manager to identify the vulnerable version of the web framework" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Scan all the EC2 instances with the Amazon Inspector Network Reachability rules package" is incorrect.</p><p>This service is used more for determining if ports are open and accessible leading to vulnerabilities. The question is specifically asking to identify the vulnerable software.</p><p><strong>INCORRECT:</strong> "Scan all the EC2 instances for noncompliance with AWS Config and an AWS Lambda function" is incorrect.</p><p>AWS Config can be used for compliance management but is not ideal for identifying vulnerable versions of software.</p><p><strong>INCORRECT:</strong> "Scan all the EC2 instances with Amazon GuardDuty to identify the vulnerable version of the web framework" is incorrect.</p><p>GuardDuty provides continuous threat detection but does not scan software to identify vulnerable software versions.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html">https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html</a></p>',
        answers: [
          "<p>Scan all the EC2 instances for noncompliance with AWS Config and an AWS Lambda function.</p>",
          "<p>Scan all the EC2 instances with the Amazon Inspector Network Reachability rules package.</p>",
          "<p>Scan all the EC2 instances with Amazon GuardDuty to identify the vulnerable version of the web framework.</p>",
          "<p>Scan all the EC2 instances with AWS Systems Manager to identify the vulnerable version of the web framework.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A security engineer must identify any Amazon EC2 instances that are running a vulnerable version of a common web framework. The security team need to quickly identify all compute resources running the specific version so they can install patches.Which approach should the team take to accomplish this task?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528329,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>Amazon S3 is used for storing sensitive data that is generated by a serverless application. The data must be encrypted, and the company plans to use the AWS Key Management Service (KMS) to create and manage the encryption keys. The company’s security policies require that the company’s own key material is imported, and custom expiration dates are configured.</p><p>How should the company configure AWS KMS?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>You can import your own key material into customer managed KMS key. With customer managed KMS keys you can also manage the keys, configure your own key policies, and enable automatic rotation every 365 days.</p><p>Note that with AWS managed KMS keys you do not have the ability to import your own key material, manage the keys, or set automatic yearly rotation. The table below shows the key differences:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-07_15-03-53-2779214bba90f85b8b4070c4a5055a96.jpg"><p>Custom key stores cannot be used for this solution as a custom key store is backed by AWS CloudHSM and imposes certain limitations. For example you cannot import your own key material into KMS keys or enable automatic rotation. Automatic key rotation is also not possible for KMS keys with imported key material.</p><p><strong>CORRECT: </strong>"Use the default key store and import the company’s keys into a customer managed KMS key" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a custom key store and import the company’s keys into a customer managed KMS key" is incorrect (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a custom key store and import the company’s keys into an AWS managed KMS key" is incorrect (as explained above.)</p><p><strong>INCORRECT:</strong> "Use the default key store and import the company’s keys into an AWS managed KMS key" is incorrect (as explained above.)</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html</a></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html</a></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html</a></p>',
        answers: [
          "<p>Create a custom key store and import the company’s keys into a customer managed KMS key.</p>",
          "<p>Use the default key store and import the company’s keys into a customer managed KMS key.</p>",
          "<p>Create a custom key store and import the company’s keys into an AWS managed KMS key.</p>",
          "<p>Use the default key store and import the company’s keys into an AWS managed KMS key.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "Amazon S3 is used for storing sensitive data that is generated by a serverless application. The data must be encrypted, and the company plans to use the AWS Key Management Service (KMS) to create and manage the encryption keys. The company’s security policies require that the company’s own key material is imported, and custom expiration dates are configured.How should the company configure AWS KMS?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528331,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). Amazon CloudFront is used as the front-end of the application an AWS WAF is used to protect the front-end with the AWS Managed Rules rule group.</p><p>A security architect is concerned that the infrastructure is vulnerable to layer 7 DDoS attacks. What improvements can be made to the solution to protect against this type of attack?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A rate-based rule tracks the rate of requests for each originating IP address and triggers the rule action on IPs with rates that go over a limit. You set the limit as the number of requests per 5-minute time span. You can use this type of rule to put a temporary block on requests from an IP address that\'s sending excessive requests. By default, AWS WAF aggregates requests based on the IP address from the web request origin, but you can configure the rule to use an IP address from an HTTP header, like X-Forwarded-For, instead.</p><p>This rule can help prevent layer 7 DDoS attacks as the IP addresses of bots would be automatically blocked once they exceed the rate defined.</p><p><strong>CORRECT: </strong>"Configure a rate-based rule on AWS WAF that puts a temporary block on requests from IP addresses that send excessive requests" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Configure a Lambda@Edge function that imposes a rate limit on CloudFront viewer requests and blocks traffic that exceeds the limits" is incorrect.</p><p>AWS WAF can do this using rate-based rules and is much better suited to the job than writing your own custom code and running it using Lambda.</p><p><strong>INCORRECT:</strong> "Configure an IP set match rule on AWS WAF that blocks web requests based on the IP address of the web request origin" is incorrect.</p><p>An IP set match rule uses a list of known IP addresses. With a DDoS attack you don’t know the IP addresses of the bots ahead of time so this would not be effective.</p><p><strong>INCORRECT:</strong> "Configure field-level encryption for the distribution and upload an SSL/TLS certificate from Amazon Certificate Manager (ACM)" is incorrect.</p><p>Field level encryption adds protection for certain data in transit and is not useful for protecting against DDoS attacks.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html">https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html</a></p>',
        answers: [
          "<p>Configure a Lambda@Edge function that imposes a rate limit on CloudFront viewer requests and blocks traffic that exceeds the limits.</p>",
          "<p>Configure a rate-based rule on AWS WAF that puts a temporary block on requests from IP addresses that send excessive requests.</p>",
          "<p>Configure an IP set match rule on AWS WAF that blocks web requests based on the IP address of the web request origin.</p>",
          "<p>Configure field-level encryption for the distribution and upload an SSL/TLS certificate from Amazon Certificate Manager (ACM).</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "An application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). Amazon CloudFront is used as the front-end of the application an AWS WAF is used to protect the front-end with the AWS Managed Rules rule group.A security architect is concerned that the infrastructure is vulnerable to layer 7 DDoS attacks. What improvements can be made to the solution to protect against this type of attack?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528333,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company is deploying an application on Amazon EC2 instances with an Amazon RDS MySQL database. The application will store sensitive data and a security engineer has been tasked with recommending measures to protect the sensitive data against security breaches. The solution must minimize operational overhead and credentials must be regularly and automatically rotated.</p><p>Which measures should the security engineer suggest?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The key requirements are to ensure data protection for the application running on EC2 and RDS and to ensure credentials are automatically rotated. For data protection we must ensure data is protected both in transit and at rest.</p><p>At rest encryption can be implemented for Amazon EBS volumes and RDS databases. Whether we use the default AWS managed keys or keys managed in AWS KMS is not important in this scenario if encryption is enabled.</p><p>Encryption in transit is not relevant to Amazon EBS as the volumes are attached at the block level and all data is encrypted in transit by default. For RDS we can use a TLS certificate to protect the data in transit.</p><p>Lastly, rotation of credentials can be implemented by using Secrets Manager which allows RDS database credentials to be rotated automatically without any custom development.</p><p><strong>CORRECT: </strong>"Implement encryption at rest for the Amazon EBS volumes attached to EC2 instances. Encrypt the RDS database and use a TLS secured connection. Store the database credentials in AWS Secrets Manager and configure automatic rotation" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Implement encryption at rest for the Amazon EBS volumes attached to EC2 instances. Encrypt the RDS database and use a TLS secured connection. Store the database credentials in instance metadata and automatically rotate with AWS Lambda" is incorrect.</p><p>Credentials should not be stored in instance metadata as this is insecure.</p><p><strong>INCORRECT:</strong> "Enable Amazon RDS encryption using AWS CloudHSM keys for the database and snapshots. Implement TLS connections to the Amazon EBS volumes and RDS instance. Import the credentials in AWS KMS and enable rotation every 365 days" is incorrect.</p><p>KMS cannot be used for storing and rotating database credentials, it works only for encryption keys.</p><p><strong>INCORRECT:</strong> "Enable Amazon RDS encryption using AWS KMS keys for the database and snapshots. Implement encryption at rest for Amazon EBS volumes. Use an ACM certificate for TLS connectivity to the database instance and use Systems Manager Parameter store to automatically rotate credentials" is incorrect.</p><p>Systems Manager Parameter Store does not automatically rotate credentials, you must write your own Lambda function which increases operational overhead.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html</a></p>',
        answers: [
          "<p>Enable Amazon RDS encryption using AWS CloudHSM keys for the database and snapshots. Implement TLS connections to the Amazon EBS volumes and RDS instance. Import the credentials in AWS KMS and enable rotation every 365 days.</p>",
          "<p>Implement encryption at rest for the Amazon EBS volumes attached to EC2 instances. Encrypt the RDS database and use a TLS secured connection. Store the database credentials in AWS Secrets Manager and configure automatic rotation.</p>",
          "<p>Enable Amazon RDS encryption using AWS KMS keys for the database and snapshots. Implement encryption at rest for Amazon EBS volumes. Use an ACM certificate for TLS connectivity to the database instance and use Systems Manager Parameter store to automatically rotate credentials.</p>",
          "<p>Implement encryption at rest for the Amazon EBS volumes attached to EC2 instances. Encrypt the RDS database and use a TLS secured connection. Store the database credentials in instance metadata and automatically rotate with AWS Lambda.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A company is deploying an application on Amazon EC2 instances with an Amazon RDS MySQL database. The application will store sensitive data and a security engineer has been tasked with recommending measures to protect the sensitive data against security breaches. The solution must minimize operational overhead and credentials must be regularly and automatically rotated.Which measures should the security engineer suggest?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 99528335,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A security team is concerned about a possible vulnerability affecting the instance metadata service. The team requires that all existing and new Amazon EC2 instances must use version 2 of the instance metadata service (IMDSV2).</p><p>Which combination of steps should the security team take to complete the migration to IMDSV2 in the AWS environment? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>You can access instance metadata from a running instance using one of the following methods:</p><ul><li><p>Instance Metadata Service Version 1 (IMDSv1) – a request/response method</p></li><li><p>Instance Metadata Service Version 2 (IMDSv2) – a session-oriented method</p></li></ul><p>By default, you can use either IMDSv1 or IMDSv2, or both. The instance metadata service distinguishes between IMDSv1 and IMDSv2 requests based on whether, for any given request, either the PUT or GET headers, which are unique to IMDSv2, are present in that request.</p><p>You can configure the instance metadata service on each instance such that local code or users must use IMDSv2. When you specify that IMDSv2 must be used, IMDSv1 no longer works.</p><p>IMDSv2 uses session-oriented requests. With session-oriented requests, you create a session token that defines the session duration, which can be a minimum of one second and a maximum of six hours.</p><p>You can require the use of IMDSv2 by setting the HttpTokens parameter to “required” for the ec2 run instances action and by modifying existing instances using the CLI. Please check the reference link below for more detailed information on transitioning to IMDSv2.</p><p><strong>CORRECT: </strong>"When using the ec2:runinstances API action set the “--metadata-options HttpTokens” option to “required”" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Update existing instances using the “ec2 modify-instance-metadata-options” commands from the AWS CLI with the “HttpTokens required” option" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Update existing instances using the “ec2 modify-instance-metadata-options” commands from the AWS CLI with the “HttpEndpoint disabled” option" is incorrect.</p><p>Setting the endpoint to disabled will prevent the instance metadata service from working completely.</p><p><strong>INCORRECT:</strong> "Update Network ACLs to deny all inbound traffic to the 169.254.169.254 IP address for the HTTP protocol" is incorrect.</p><p>This is the IP address on which the instance metadata service runs and is a local address used from within the instance itself. Therefore, updating security groups and network ACLs will not achieve anything.</p><p><strong>INCORRECT:</strong> "When using the ec2:runinstances API action set the “--metadata-options HttpTokens” option to “disabled" is incorrect.</p><p>This is not a valid option and does not achieve the stated objectives.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html</a></p>',
        answers: [
          "<p>When using the ec2:runinstances API action set the “--metadata-options HttpTokens” option to “required”.</p>",
          "<p>Update existing instances using the “ec2 modify-instance-metadata-options” commands from the AWS CLI with the “HttpEndpoint disabled” option.</p>",
          "<p>Update existing instances using the “ec2 modify-instance-metadata-options” commands from the AWS CLI with the “HttpTokens required” option.</p>",
          "<p>Update Network ACLs to deny all inbound traffic to the 169.254.169.254 IP address for the HTTP protocol.</p>",
          "<p>When using the ec2:runinstances API action set the “--metadata-options HttpTokens” option to “disabled”.</p>",
        ],
      },
      correct_response: ["a", "c"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A security team is concerned about a possible vulnerability affecting the instance metadata service. The team requires that all existing and new Amazon EC2 instances must use version 2 of the instance metadata service (IMDSV2).Which combination of steps should the security team take to complete the migration to IMDSV2 in the AWS environment? (Select TWO.)",
      related_lectures: [],
    },
  ],
};
