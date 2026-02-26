export const neal_5 = {
  count: 25,
  next: null,
  previous: null,
  results: [
    {
      _class: "assessment",
      id: 73686804,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company has a group of Amazon EC2 instances in a private subnet that does not have a NAT gateway attached. A security engineer needs to capture logs from an application and collect the log files in Amazon CloudWatch Logs.</p><p>Which steps should the security engineer take to securely meet the requirements? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>You can establish a private connection between your VPC and CloudWatch Logs by creating an interface VPC endpoint. You can use this connection to send logs to CloudWatch Logs without sending them through the internet.</p><p>The log files can be collected from the instances and automatically sent to CloudWatch Logs by using the unified CloudWatch Agent. The agent must be installed and configured on each EC2 instance. The instances will also need an instance profile that supplies the permissions needed to write to CloudWatch Logs.</p><p><strong>CORRECT: </strong>"Create an interface VPC endpoint for CloudWatch Logs. Configure the endpoint policy to allow the EC2 instances to use the endpoint" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Install and configure the unified CloudWatch agent on the EC2 instances and attach an instance profile with permissions to write to CloudWatch Logs" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Attach an internet gateway to the subnet and update the subnet route table to point to the internet gateway" is incorrect.</p><p>This would be a less secure solution compared to using a VPC endpoint as the traffic would go via an internet gateway. Also, the instances are in a private subnet so cannot even use an internet gateway without a NAT gateway which is not mentioned.</p><p><strong>INCORRECT:</strong> "Schedule a local cron job on each EC2 instance that copies the log files to an Amazon S3 bucket. Point CloudWatch Logs to the S3 bucket" is incorrect.</p><p>This is unnecessary as the CloudWatch agent will collect the log files and stream them to CloudWatch Logs which is a much better solution. Also CloudWatch Logs cannot be “pointed” to an S3 bucket.</p><p><strong>INCORRECT:</strong> "Create a gateway VPC endpoint for Amazon S3. Configure the bucket policy to allow access only for connections from the VPC endpoint" is incorrect.</p><p>This is unnecessary as the S3 solution does not work.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/cloudwatch-logs-and-interface-VPC.html">https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/cloudwatch-logs-and-interface-VPC.html</a></p><p><a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html</a></p>',
        answers: [
          "<p>Create an interface VPC endpoint for CloudWatch Logs. Configure the endpoint policy to allow the EC2 instances to use the endpoint.</p>",
          "<p>Install and configure the unified CloudWatch agent on the EC2 instances and attach an instance profile with permissions to write to CloudWatch Logs.</p>",
          "<p>Attach an internet gateway to the subnet and update the subnet route table to point to the internet gateway.</p>",
          "<p>Schedule a local cron job on each EC2 instance that copies the log files to an Amazon S3 bucket. Point CloudWatch Logs to the S3 bucket.</p>",
          "<p>Create a gateway VPC endpoint for Amazon S3. Configure the bucket policy to allow access only for connections from the VPC endpoint.</p>",
        ],
      },
      correct_response: ["a", "b"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A company has a group of Amazon EC2 instances in a private subnet that does not have a NAT gateway attached. A security engineer needs to capture logs from an application and collect the log files in Amazon CloudWatch Logs.Which steps should the security engineer take to securely meet the requirements? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686806,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A new application runs on Amazon EC2 instances behind an Application Load Balancer. Some of the company’s other applications have recently seen attacks with high rates of requests from single IP addresses. A security engineer wants to ensure the new application is protected from such attacks.</p><p>How can the security engineer add protection to the application without permanently blocking the IP address?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A rate-based rule tracks the rate of requests for each originating IP address and triggers the rule action on IPs with rates that go over a limit. You set the limit as the number of requests per 5-minute time span. You can use this type of rule to put a temporary block on requests from an IP address that\'s sending excessive requests.</p><p><strong>CORRECT: </strong>"Use AWS WAF to create a rate-based rule" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Generate a custom error page in Amazon CloudFront" is incorrect.</p><p>Custom error pages cannot be generated based on the rate of requests from a specific IP address.</p><p><strong>INCORRECT:</strong> "Add AWS Shield protection to the Application Load Balancer" is incorrect.</p><p>AWS Shield Advanced can be used to protect ALBs but it will still leverage AWS WAF for rate-based rules.</p><p><strong>INCORRECT:</strong> "Enable geo restriction in Amazon CloudFront" is incorrect.</p><p>Geo restriction does not restrict based on the rate of requests from a specific IP address, it restricts based on the geographic location of the originating user.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html">https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html</a></p>',
        answers: [
          "<p>Generate a custom error page in Amazon CloudFront.</p>",
          "<p>Use AWS WAF to create a rate-based rule.</p>",
          "<p>Add AWS Shield protection to the Application Load Balancer.</p>",
          "<p>Enable geo restriction in Amazon CloudFront.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A new application runs on Amazon EC2 instances behind an Application Load Balancer. Some of the company’s other applications have recently seen attacks with high rates of requests from single IP addresses. A security engineer wants to ensure the new application is protected from such attacks.How can the security engineer add protection to the application without permanently blocking the IP address?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686808,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company plans to migrate some confidential data to Amazon S3. A security engineer must ensure that the data is encrypted at rest. The encryption solution must enable the company to generate its own keys without needing to manage key storage or the encryption process.</p><p>What should the security engineer use to accomplish this?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>When you use server-side encryption with AWS KMS (SSE-KMS), you can use the default AWS managed key, or you can specify a customer managed key that you have already created. The data keys used to encrypt your data are also encrypted and stored alongside the data that they protect.</p><p>If you don\'t specify a customer managed key, Amazon S3 automatically creates an AWS KMS key in your AWS account the first time that you add an object encrypted with SSE-KMS to a bucket. By default, Amazon S3 uses this KMS key for SSE-KMS.</p><p>If you want to use a customer managed key for SSE-KMS, create the customer managed key before you configure SSE-KMS. Then, when you configure SSE-KMS for your bucket, specify the existing customer managed key.</p><p><strong>CORRECT: </strong>"Server-side encryption with AWS KMS-managed keys (SSE-KMS)" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Server-side encryption with customer-provided keys (SSE-C)" is incorrect.</p><p>With SSE-C you must manage your encryption keys and provide them in encrypt and decrypt operations. The question states that the company does not want to manage storage of keys or the encryption process so KMS should be used.</p><p><strong>INCORRECT:</strong> "Server-side encryption with Amazon S3-managed keys (SSE-S3)" is incorrect.</p><p>This does not provide you an option to supply your own keys and uses AWS managed keys only.</p><p><strong>INCORRECT:</strong> "Client-side encryption with an AWS KMS-managed KMS key" is incorrect.</p><p>With this option AWS does not perform any cryptographic operations; you must encrypt and decrypt data on the client side. This does not meet the requirement to not manage key storage or encryption processes.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html</a></p>',
        answers: [
          "<p>Server-side encryption with Amazon S3-managed keys (SSE-S3).</p>",
          "<p>Server-side encryption with customer-provided keys (SSE-C).</p>",
          "<p>Server-side encryption with AWS KMS-managed keys (SSE-KMS).</p>",
          "<p>Client-side encryption with an AWS KMS-managed KMS key.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A company plans to migrate some confidential data to Amazon S3. A security engineer must ensure that the data is encrypted at rest. The encryption solution must enable the company to generate its own keys without needing to manage key storage or the encryption process.What should the security engineer use to accomplish this?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686810,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A security engineer is deploying an application that will read and write data to an Amazon S3 bucket. The application data must be encrypted both in transit and at rest.</p><p>Which of the following actions should the security engineer take to enforce the encryption requirements? (Select TWO.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", ""],
        explanation:
          '<p>Amazon S3 allows both HTTP and HTTPS requests. By default, requests are made through the AWS Management Console, AWS Command Line Interface (AWS CLI), or HTTPS. To only allow HTTPS connections, use a condition that checks for the key "aws:SecureTransport". When this key is true, the request is allowed. This enforces encryption in transit.</p><p>To encrypt an object at the time of upload, you need to add a header called x<strong>-amz-server-side-encryption</strong> to the request to tell S3 to encrypt the object using SSE-C, SSE-S3, or SSE-KMS. To enforce object encryption, create an S3 bucket policy that denies any S3 Put request that does not include the x-amz-server-side-encryption header. This enforces encryption at rest.</p><p><strong>CORRECT: </strong>"Add a condition to the S3 bucket policy that allows actions if the request meets the condition "aws:SecureTransport": "true"" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Configure default encryption for the S3 bucket. Add a condition to the S3 bucket policy that denies PUT requests that don’t include the “x-amz-server-side-encryption” header" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a security group for the S3 bucket that allows HTTPS but not HTTP from the application instance security group" is incorrect.</p><p>You cannot attach security groups to Amazon S3 buckets.</p><p><strong>INCORRECT:</strong> "Configure default encryption for the S3 bucket. Add a condition to the IAM policy attached to the EC2 instance profile to deny PUT requests that don’t include the “x-amz-server-side-encryption” header" is incorrect.</p><p>The condition should be in the S3 bucket policy, not in an IAM policy attached to an EC2 instance profile.</p><p><strong>INCORRECT:</strong> "Use Amazon Certificate Manager (ACM) to create a public SSL/TLS certificate. Specify the SSL/TLS certificate in the configuration of the S3 bucket" is incorrect.</p><p>You cannot select the certificate that is used for Amazon S3, AWS provide the certificate.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-policy-for-config-rule/">https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-policy-for-config-rule/</a></p><p><a href="https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/">https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/</a></p>',
        answers: [
          '<p>Add a condition to the S3 bucket policy that allows actions if the request meets the condition "aws:SecureTransport": "true".</p>',
          "<p>Create a security group for the S3 bucket that allows HTTPS but not HTTP from the application instance security group.</p>",
          "<p>Configure default encryption for the S3 bucket. Add a condition to the S3 bucket policy that denies PUT requests that don’t include the “x-amz-server-side-encryption” header.</p>",
          "<p>Configure default encryption for the S3 bucket. Add a condition to the IAM policy attached to the EC2 instance profile to deny PUT requests that don’t include the “x-amz-server-side-encryption” header.</p>",
          "<p>Use Amazon Certificate Manager (ACM) to create a public SSL/TLS certificate. Specify the SSL/TLS certificate in the configuration of the S3 bucket.</p>",
        ],
      },
      correct_response: ["a", "c"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A security engineer is deploying an application that will read and write data to an Amazon S3 bucket. The application data must be encrypted both in transit and at rest.Which of the following actions should the security engineer take to enforce the encryption requirements? (Select TWO.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686812,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company is deploying a solution that will allow users to encrypt Amazon S3 objects seamlessly. The solution must be cost effective, highly scalable, and use a managed service. The company must also be able to immediately delete the encryption keys if necessary.</p><p>Which solution is suitable and will allow immediate deletion of encryption keys?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS KMS is a fully managed and highly scalable service for key management. It is also more cost-effective compared to AWS CloudHSM, so it is the better option for storing the keys. With AWS KMS you cannot schedule key deletion in 0 days, you must enter a time period between 7 and 30 days. Therefore, it is not possible to immediately delete encryption keys as per the requirements.</p><p>The solution to enable to ability to immediately delete encryption keys is to use AWS KMS with imported key materials. When you use imported key material it is possible to use the DeletelmportedKeyMaterial API to delete key material that you previously imported. This operation makes the specified KMS key unusable.</p><p><strong>CORRECT: </strong>"Use AWS KMS with AWS imported key material and then use the DeletelmportedKeyMaterial API to remove the key material" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS CloudHSM to store the keys and then use the CloudHSM API for key deletion" is incorrect.</p><p>CloudHSM would be less cost-effective compared to using AWS KMS.</p><p><strong>INCORRECT:</strong> "Use AWS KMS with AWS managed keys and then use the ScheduleKeyDeletion API with a waiting period of 0 days for key deletion" is incorrect.</p><p>You cannot specify a waiting period of 0 days. The waiting period must be between 7 and 30 days.</p><p><strong>INCORRECT:</strong> "Use AWS CloudHSM with the importPrivateKey API and then use the deleteKey API for key deletion" is incorrect.</p><p>CloudHSM would be less cost-effective compared to using AWS KMS.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-delete-key-material.html">https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-delete-key-material.html</a></p>',
        answers: [
          "<p>Use AWS KMS with AWS managed keys and then use the ScheduleKeyDeletion API with a waiting period of 0 days for key deletion.</p>",
          "<p>Use AWS KMS with AWS imported key material and then use the DeletelmportedKeyMaterial API to remove the key material.</p>",
          "<p>Use AWS CloudHSM to store the keys and then use the CloudHSM API for key deletion.</p>",
          "<p>Use AWS CloudHSM with the importPrivateKey API and then use the deleteKey API for key deletion.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A company is deploying a solution that will allow users to encrypt Amazon S3 objects seamlessly. The solution must be cost effective, highly scalable, and use a managed service. The company must also be able to immediately delete the encryption keys if necessary.Which solution is suitable and will allow immediate deletion of encryption keys?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686814,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company is deploying a web application that runs in an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB will be configured to terminate a TLS connection from clients. Security requirements mandate that all TLS traffic to the ALB must remain secure even if the certificate private key is compromised.</p><p>How can a security engineer meet this requirement?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Elastic Load Balancing uses a Secure Socket Layer (SSL) negotiation configuration, known as a security policy, to negotiate SSL connections between a client and the load balancer. A security policy is a combination of protocols and ciphers.</p><p>The protocol establishes a secure connection between a client and a server and ensures that all data passed between the client and your load balancer is private. A cipher is an encryption algorithm that uses encryption keys to create a coded message. Protocols use several ciphers to encrypt data over the internet.</p><p>During the connection negotiation process, the client and the load balancer present a list of ciphers and protocols that they each support, in order of preference. By default, the first cipher on the server\'s list that matches any one of the client\'s ciphers is selected for the secure connection.</p><p>Forward Secrecy (FS) uses a derived session key to provide additional safeguards against the eavesdropping of encrypted data. This prevents the decoding of captured data, even if the secret long-term key is compromised.</p><p>In this case the security engineer must select a predefined security policy that supports FS to meet the requirements of the scenario.</p><p><strong>CORRECT: </strong>"Create an HTTPS listener that uses a predefined security policy that supports forward secrecy (FS)" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create a HTTPS listener that uses a custom security policy supports forward secrecy (FS)" is incorrect.</p><p>The ALB does not support custom security policies.</p><p><strong>INCORRECT:</strong> "Create an HTTPS listener that uses a certificate that was imported into AWS Certificate Manager (ACM)" is incorrect.</p><p>It doesn’t make any difference whether the certificate was added manually, through ACM, or whether it was imported or generated by ACM.</p><p><strong>INCORRECT:</strong> "Create an HTTPS listener that uses the Server Order Preference security feature" is incorrect.</p><p>This is not relevant to the ALB. You must select a security policy and the ALB will perform the negotiation for protocols and ciphers.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html</a></p>',
        answers: [
          "<p>Create an HTTPS listener that uses a certificate that was imported into AWS Certificate Manager (ACM).</p>",
          "<p>Create an HTTPS listener that uses a predefined security policy that supports forward secrecy (FS).</p>",
          "<p>Create an HTTPS listener that uses the Server Order Preference security feature.</p>",
          "<p>Create a HTTPS listener that uses a custom security policy supports forward secrecy (FS).</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company is deploying a web application that runs in an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB will be configured to terminate a TLS connection from clients. Security requirements mandate that all TLS traffic to the ALB must remain secure even if the certificate private key is compromised.How can a security engineer meet this requirement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686816,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company is building an application that uses Amazon EC2 instances and an Amazon RDS database. The solution must be highly secure, and encryption will be implemented within the application and database using an AWS KMS customer managed KMS key. The security team wants to prevent any other services from using the KMS key.</p><p>Which solution will meet these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The kms:ViaService condition key limits use of an AWS KMS key to requests from specified AWS services. You can specify one or more services in each kms:ViaService condition key.</p><p>For example, the following key policy statement uses the kms:ViaService condition key to allow a customer managed KMS key to be used for the specified actions only when the request comes from Amazon EC2 or Amazon RDS in the US West (Oregon) region on behalf of ExampleUser.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_03-52-34-2f7d96a165ddff57343266d3d2cc7078.jpg"><p><strong>CORRECT: </strong>"Create a custom key policy for the KMS key. Use the kms:ViaService condition key to allow the KMS key to be used only when the request comes from Amazon EC2 or Amazon RDS" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an instance profile and attach it to the Amazon EC2 instances and Amazon RDS database. Attach an IAM policy to the instance profile that allows use of the KMS key" is incorrect.</p><p>You cannot attach instance profiles to RDS databases, and this solution does not explicitly deny access to the KMS key from other services.</p><p><strong>INCORRECT:</strong> "Create a custom key policy for the KMS key. Use the kms:GrantOperations condition key to grant access to the KMS key only when the request comes from Amazon EC2 or Amazon RDS" is incorrect.</p><p>The GrantOperations condition key is used to control access to the CreateGrant operation and does not restrict or grant access to a KMS key by service.</p><p><strong>INCORRECT:</strong> "Create an SCP the explicitly allows permission to the KMS key for Amazon EC2 and Amazon RDS and explicitly denies permission to the KMS key for all other services. Attach the SCP to the AWS account" is incorrect.</p><p>You cannot use conditions with allow statements in an SCP.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service">https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service</a></p>',
        answers: [
          "<p>Create a custom key policy for the KMS key. Use the kms:ViaService condition key to allow the KMS key to be used only when the request comes from Amazon EC2 or Amazon RDS.</p>",
          "<p>Create an instance profile and attach it to the Amazon EC2 instances and Amazon RDS database. Attach an IAM policy to the instance profile that allows use of the KMS key.</p>",
          "<p>Create a custom key policy for the KMS key. Use the kms:GrantOperations condition key to grant access to the KMS key only when the request comes from Amazon EC2 or Amazon RDS.</p>",
          "<p>Create an SCP the explicitly allows permission to the KMS key for Amazon EC2 and Amazon RDS and explicitly denies permission to the KMS key for all other services. Attach the SCP to the AWS account.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company is building an application that uses Amazon EC2 instances and an Amazon RDS database. The solution must be highly secure, and encryption will be implemented within the application and database using an AWS KMS customer managed KMS key. The security team wants to prevent any other services from using the KMS key.Which solution will meet these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686818,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company is implementing a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The company requires that all traffic must be over HTTPS and any connections made to the HTTP port should be redirected to HTTPS.</p><p>Which solution meets these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A HTTPS listener uses an X.509 certificate to create a secure channel for communication. You can create an HTTPS listener on an ALB with a certificate that is created/imported in AWS Certificate Manager or that is imported into IAM.</p><p>To redirect connection attempts from HTTP to HTTPS another listener is required. This listener listens for requests to the HTTP port and is configured with a rule that redirects connections to the HTTPS port.</p><p><strong>CORRECT: </strong>"Add an HTTP listener with a rule that redirects HTTP requests to HTTPS. Add an HTTPS listener and choose an AWS Certificate Manager (ACM) certificate" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Add an HTTPS listener with a rule that redirects HTTP requests to HTTPS. Choose an AWS Certificate Manager (ACM) certificate for the listener" is incorrect.</p><p>The rule to redirect requests from HTTP to HTTPS should be added to an HTTP listener.</p><p><strong>INCORRECT:</strong> "Add a TLS listener with a rule that redirects port 80 to port 443. Import an X.509 certificate directly into the listener configuration" is incorrect.</p><p>You cannot create TLS listeners on an ALB, and you cannot import certificates directly into an ALB.</p><p><strong>INCORRECT:</strong> "Add an HTTP listener and an HTTPS listener. Import an X.509 certificate directly into the listener configuration for both listeners" is incorrect.</p><p>You cannot add a certificate to an HTTP listener. A rule is needed to redirect from HTTP to HTTPS.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/premiumsupport/knowledge-center/elb-redirect-http-to-https-using-alb/">https://aws.amazon.com/premiumsupport/knowledge-center/elb-redirect-http-to-https-using-alb/</a></p>',
        answers: [
          "<p>Add an HTTP listener with a rule that redirects HTTP requests to HTTPS. Add an HTTPS listener and choose an AWS Certificate Manager (ACM) certificate.</p>",
          "<p>Add a TLS listener with a rule that redirects port 80 to port 443. Import an X.509 certificate directly into the listener configuration.</p>",
          "<p>Add an HTTPS listener with a rule that redirects HTTP requests to HTTPS. Choose an AWS Certificate Manager (ACM) certificate for the listener.</p>",
          "<p>Add an HTTP listener and an HTTPS listener. Import an X.509 certificate directly into the listener configuration for both listeners.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company is implementing a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The company requires that all traffic must be over HTTPS and any connections made to the HTTP port should be redirected to HTTPS.Which solution meets these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686820,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          '<p>A security engineer has created an AWS Lambda function that checks AWS CloudTrail logs in an Amazon S3 bucket for security related issues. The Lambda function should record results in Amazon CloudWatch Logs. The security engineer has sufficient permissions to execute the function. Upon testing the function the execution fails.</p><p>The Lambda function execution role has the following permissions:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question/2023-01-05_04-00-28-e4e0767ef7f1c4ce3267f194998497f2.jpg"><p>What is the most likely cause of the issue?</p>',
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A Lambda function\'s execution role is an AWS Identity and Access Management (IAM) role that grants the function permission to access AWS services and resources. You provide this role when you create a function, and Lambda assumes the role when your function is invoked.</p><p>The most likely issue in this scenario is that the policy assigned to the AWS Lambda function execution role does not specify any permissions for Amazon S3. Permissions for CloudTrail do not help here as the logs are stored in S3 and the Lambda function must read the logs from the S3 bucket.</p><p><strong>CORRECT: </strong>"The Lambda function does not have permissions to access the S3 bucket" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "The Lambda function does not have permissions to CloudWatch Logs" is incorrect.</p><p>Full permissions to CloudWatch are provided in the policy.</p><p><strong>INCORRECT:</strong> "The “Resource” element in the policy does not include the S3 bucket objects" is incorrect.</p><p>The wildcard for the resource “*” is all inclusive and would include bucket objects. However, S3 permissions are not provided.</p><p><strong>INCORRECT:</strong> "The CloudTrail trail does not allow access in a resource-based policy" is incorrect.</p><p>Lambda does not need to be provided with any permissions to CloudTrail in this scenario as it reads the logs from the S3 bucket.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html">https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html</a></p>',
        answers: [
          "<p>The Lambda function does not have permissions to CloudWatch Logs.</p>",
          "<p>The “Resource” element in the policy does not include the S3 bucket objects.</p>",
          "<p>The Lambda function does not have permissions to access the S3 bucket.</p>",
          "<p>The CloudTrail trail does not allow access in a resource-based policy.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "A security engineer has created an AWS Lambda function that checks AWS CloudTrail logs in an Amazon S3 bucket for security related issues. The Lambda function should record results in Amazon CloudWatch Logs. The security engineer has sufficient permissions to execute the function. Upon testing the function the execution fails.The Lambda function execution role has the following permissions:What is the most likely cause of the issue?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686822,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company has on on-premises corporate identity provider (IdP) with thousands of corporate users. The company needs to allow the users to access a set of AWS services from the corporate network. The security engineer has been instructed that the company would prefer to avoid having multiple sets of identities and credentials to manage for each user.</p><p>Which actions will meet the requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The best solution for this scenario is to enable federated access between the corporate IdP and the AWS account using IAM. In this configuration the users can assume roles in the AWS account and can access resources they are granted access to. This solution ensures that there is no duplication of identities or credentials as per the requirements.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_04-01-42-b979b7b6853a7bfe0bb8533e40c93a3c.jpg"><p><strong>CORRECT: </strong>"Enable federated access between the corporate IdP and the AWS account using IAM. Use IAM roles to provide access to AWS resources" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an Amazon Cognito identity pool and attach the corporate IdP. Use IAM user accounts to provide access to AWS resources" is incorrect.</p><p>With Cognito identity pools users can access AWS resources by assuming IAM roles and gaining temporary security credentials. They do not get an IAM user account.</p><p><strong>INCORRECT:</strong> "Create an AWS Managed Microsoft AD and create a two-way trust relationship. Run ADSync and assign IAM permissions to the synchronized user accounts in AWS" is incorrect.</p><p>This would create a duplicate copy of the user accounts in the Microsoft AD (though ADSync is used for Azure, not an on-premises IdP).</p><p><strong>INCORRECT:</strong> "Establish an AWS Managed VPN connection to AWS. Assign permissions to AWS resources in the corporate IdP through resource-based policies" is incorrect.</p><p>You cannot assign resource-based policies to users in an external IdP.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/identity/federation/">https://aws.amazon.com/identity/federation/</a></p>',
        answers: [
          "<p>Create an Amazon Cognito identity pool and attach the corporate IdP. Use IAM user accounts to provide access to AWS resources.</p>",
          "<p>Create an AWS Managed Microsoft AD and create a two-way trust relationship. Run ADSync and assign IAM permissions to the synchronized user accounts in AWS.</p>",
          "<p>Establish an AWS Managed VPN connection to AWS. Assign permissions to AWS resources in the corporate IdP through resource-based policies.</p>",
          "<p>Enable federated access between the corporate IdP and the AWS account using IAM. Use IAM roles to provide access to AWS resources.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "A company has on on-premises corporate identity provider (IdP) with thousands of corporate users. The company needs to allow the users to access a set of AWS services from the corporate network. The security engineer has been instructed that the company would prefer to avoid having multiple sets of identities and credentials to manage for each user.Which actions will meet the requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686824,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company's security team wants to use Amazon Detective to generate visualizations that help with security investigations. The company has enabled AWS CloudTrail and VPC Flow Logs. The security team cannot enable Detective.</p><p>Which steps should be taken to enable Amazon Detective?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Amazon Detective makes it easy to analyze, investigate, and quickly identify the root cause of security findings or suspicious activities. Detective automatically collects log data from your AWS resources. It then uses machine learning, statistical analysis, and graph theory to generate visualizations that help you to conduct faster and more efficient security investigations.</p><p>When you try to enable Detective, Detective checks whether GuardDuty has been enabled for your account for at least 48 hours. If you are not a GuardDuty customer or have been a GuardDuty customer for less than 48 hours, you cannot enable Detective. You must either enable GuardDuty or wait for 48 hours. This allows GuardDuty to assess the data volume that your account produces.</p><p><strong>CORRECT: </strong>"Enable Amazon GuardDuty. After 48 hours, enable Amazon Detective" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Enable Amazon Inspector. After 48 hours, enable Amazon Detective" is incorrect.</p><p>GuardDuty rather than Inspector must first be enabled.</p><p><strong>INCORRECT:</strong> "Attach a role to Amazon Detective with permissions to CloudTrail and VPC Flow Logs" is incorrect.</p><p>Detective does not need a role with these permissions.</p><p><strong>INCORRECT:</strong> "Login with the account root user credentials and enable Amazon Detective" is incorrect.</p><p>You do not need to login with the account root user credentials to enabled Detective.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/detective/latest/adminguide/detective-prerequisites.html">https://docs.aws.amazon.com/detective/latest/adminguide/detective-prerequisites.html</a></p>',
        answers: [
          "<p>Enable Amazon Inspector. After 48 hours, enable Amazon Detective.</p>",
          "<p>Attach a role to Amazon Detective with permissions to CloudTrail and VPC Flow Logs.</p>",
          "<p>Enable Amazon GuardDuty. After 48 hours, enable Amazon Detective.</p>",
          "<p>Login with the account root user credentials and enable Amazon Detective.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A company's security team wants to use Amazon Detective to generate visualizations that help with security investigations. The company has enabled AWS CloudTrail and VPC Flow Logs. The security team cannot enable Detective.Which steps should be taken to enable Amazon Detective?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686826,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An organization has a SAML 2.0-compliant corporate identity provider (IdP) that is federated with AWS IAM. Users from the corporate IdP can use the AWS management console. A security engineer has been asked to identify which federated user terminated an Amazon EC2 instance a few days ago.</p><p>What is the FASTEST method of identifying the federated user who terminated the instance?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS CloudTrail can be used to track the activity of your federated users (web identity federation and Security Assertion Markup Language [SAML]). For example, you can use CloudTrail to identify a SAML federated user who terminated an Amazon EC2 instance.</p><p>To capture the activity of these federated users, CloudTrail records the AssumeRoleWithWebIdentity and AssumeRoleWithSAML AWS STS API calls. CloudTrail logging must be enabled to capture these AWS STS API calls.</p><p>The security engineer can search CloudTrail for the TerminateInstances event and identify the IAM role (not user) ARN. Then, the engineer should search the logs for the AssumeRoleWithSAML event and identify the role ARN. The engineer can then identify the federated user by looking at the username attribute in the event.</p><p><strong>CORRECT: </strong>"Search CloudTrail event logs for the TerminateInstances event and identify the assumed IAM role ARN. Then, search CloudTrail event logs for the AssumeRoleWithSAML event that includes the role ARN and note the federated username" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Search CloudTrail event logs for the TerminateInstances event and identify the IAM user ARN. Then, search CloudTrail event logs for the AssumeRoleWithWebIdentity event that includes the user ARN and note the federated username" is incorrect.</p><p>There are two issues with this answer. Firstly, through federation the user from the IdP will assume an IAM role, not a user account. Secondly, with a SAML federation the AssumeRoleWithSAML API call will be made.</p><p><strong>INCORRECT:</strong> "Run an SQL query on the CloudTrail logs with Amazon Athena and search for the TerminateInstances event. Identify the IAM role ARN and run another query to find the AssumeRoleWithWebIdentity event that includes the role ARN and note the federated username" is incorrect.</p><p>AWS CloudTrail should be used to find the information in the CloudTrail logs as it will be much quicker. Also, the incorrect API action is specified for assuming the role.</p><p><strong>INCORRECT:</strong> "Run an SQL query on the CloudTrail logs with Amazon Athena and search for the TerminateInstances event. Identify the IAM user ARN and run another query to find the AssumeRoleWithSAML event that includes the user ARN and note the federated username" is incorrect.</p><p>As above, CloudTrail should be used. Also, a role will be assumed, not a user account.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/blogs/security/how-to-easily-identify-your-federated-users-by-using-aws-cloudtrail/">https://aws.amazon.com/blogs/security/how-to-easily-identify-your-federated-users-by-using-aws-cloudtrail/</a></p>',
        answers: [
          "<p>Search CloudTrail event logs for the TerminateInstances event and identify the assumed IAM role ARN. Then, search CloudTrail event logs for the AssumeRoleWithSAML event that includes the role ARN and note the federated username.</p>",
          "<p>Search CloudTrail event logs for the TerminateInstances event and identify the IAM user ARN. Then, search CloudTrail event logs for the AssumeRoleWithWebIdentity event that includes the user ARN and note the federated username.</p>",
          "<p>Run an SQL query on the CloudTrail logs with Amazon Athena and search for the TerminateInstances event. Identify the IAM role ARN and run another query to find the AssumeRoleWithWebIdentity event that includes the role ARN and note the federated username.</p>",
          "<p>Run an SQL query on the CloudTrail logs with Amazon Athena and search for the TerminateInstances event. Identify the IAM user ARN and run another query to find the AssumeRoleWithSAML event that includes the user ARN and note the federated username.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "An organization has a SAML 2.0-compliant corporate identity provider (IdP) that is federated with AWS IAM. Users from the corporate IdP can use the AWS management console. A security engineer has been asked to identify which federated user terminated an Amazon EC2 instance a few days ago.What is the FASTEST method of identifying the federated user who terminated the instance?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686828,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An application runs on a fleet of Amazon EC2 instances in a private subnet. The EC2 instances read and write data to an Amazon S3 bucket. The data is highly confidential and a private and secure connection is required between the EC2 instances and the S3 bucket.</p><p>Which solution meets these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A VPC gateway endpoint can be used to access an Amazon S3 bucket using private IP addresses. To further secure the solution an S3 bucket policy can be created that restricts access to the VPC endpoint so connections cannot be made to the bucket from other sources.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-01-05_04-06-32-015823a2883db0e154d0f381098561cb.jpg"><p><strong>CORRECT: </strong>"Set up S3 bucket policies to allow access from a VPC endpoint" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Configure encryption for the S3 bucket using an AWS KMS key" is incorrect.</p><p>This will encrypt data at rest but does not secure the connection to the bucket or ensure private connections must be made.</p><p><strong>INCORRECT:</strong> "Configure a custom SSL/TLS certificate on the S3 bucket" is incorrect.</p><p>You cannot add a custom SSL/TLS certificate to Amazon S3.</p><p><strong>INCORRECT:</strong> "Set up an IAM policy to grant read-write access to the S3 bucket" is incorrect.</p><p>This does not enable private access from EC2. A gateway VPC endpoint is required.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html">https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html</a></p>',
        answers: [
          "<p>Configure encryption for the S3 bucket using an AWS KMS key.</p>",
          "<p>Configure a custom SSL/TLS certificate on the S3 bucket.</p>",
          "<p>Set up S3 bucket policies to allow access from a VPC endpoint.</p>",
          "<p>Set up an IAM policy to grant read-write access to the S3 bucket.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "An application runs on a fleet of Amazon EC2 instances in a private subnet. The EC2 instances read and write data to an Amazon S3 bucket. The data is highly confidential and a private and secure connection is required between the EC2 instances and the S3 bucket.Which solution meets these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686830,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>Several AWS accounts belonging to different business units are used for development purposes. An additional account is used by the security team. To ensure security best practices are being followed, the security team requires access to review the configuration of the Amazon EC2 instances in the development accounts.</p><p>Which solution will meet these requirements in the MOST secure manner?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>This question is checking that you know how to configure cross-account access and how to do so securely using the principle of least privilege. This can be achieved through the creation of a policy providing permissions to the resources in each development account, associating the policies to roles, and then assuming those roles from the security admins account.</p><p>To ensure this solution is secure, read-only permissions should be assigned to the permissions policy as per the requirements of the security team.</p><p><strong>CORRECT: </strong>"Create an IAM policy in each development account that has read-only access to Amazon EC2 resources. Assign the policy to a cross-account IAM role. Ask the security team members to assume the role from their account" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an IAM policy in each development account that has administrator access to Amazon EC2 resources. Assign the policy to a cross-account IAM role. Ask the security team members to assume the role from their account" is incorrect.</p><p>Administrator access provides more permissions than are required by the security team.</p><p><strong>INCORRECT:</strong> "Create an IAM policy in each development account that has read-only access to Amazon EC2 resources. Assign the policy to an IAM user. Share the user credentials with the security team" is incorrect.</p><p>Sharing credentials is much less secure than using roles.</p><p><strong>INCORRECT:</strong> "Create an IAM policy in each development account that has administrator access to all Amazon EC2 actions. Assign the policy to an IAM user. Share the user credentials with the security team" is incorrect.</p><p>This answer provides too many permissions and an insecure method of authentication.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html</a></p>',
        answers: [
          "<p>Create an IAM policy in each development account that has read-only access to Amazon EC2 resources. Assign the policy to an IAM user. Share the user credentials with the security team.</p>",
          "<p>Create an IAM policy in each development account that has administrator access to all Amazon EC2 actions. Assign the policy to an IAM user. Share the user credentials with the security team.</p>",
          "<p>Create an IAM policy in each development account that has read-only access to Amazon EC2 resources. Assign the policy to a cross-account IAM role. Ask the security team members to assume the role from their account.</p>",
          "<p>Create an IAM policy in each development account that has administrator access to Amazon EC2 resources. Assign the policy to a cross-account IAM role. Ask the security team members to assume the role from their account.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 4 - Identity and Access Management",
      question_plain:
        "Several AWS accounts belonging to different business units are used for development purposes. An additional account is used by the security team. To ensure security best practices are being followed, the security team requires access to review the configuration of the Amazon EC2 instances in the development accounts.Which solution will meet these requirements in the MOST secure manner?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686832,
      assessment_type: "multi-select",
      prompt: {
        question:
          "<p>A company's security engineer receives an abuse notification from AWS. The notification indicates that malware is being hosted in the AWS account. The security engineer investigated the issue and found an unauthorized Amazon S3 bucket.</p><p>Which combination of steps should the security engineer take to MINIMIZE the consequences of this compromise? (Select THREE.)</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", "", "", ""],
        explanation:
          '<p>The AWS Trust &amp; Safety Team sends abuse reports to the security contact on your account. If there is no security contact listed, the AWS Trust &amp; Safety Team contacts you using the email address listed on your account.</p><p>If you observe unauthorized activity within your AWS account, or you believe that an unauthorized party accessed your account, then do the following:</p><ul><li><p>Rotate and delete all root and AWS Identity and Access Management (IAM) access keys.</p></li><li><p>Delete any potentially unauthorized IAM users, and then change the password for all other IAM users.</p></li><li><p>Check your bill. Your bill can help you identify resources that you didn\'t create.</p></li><li><p>Delete any resources on your account that you didn\'t create.</p></li><li><p>Enable MFS on the root user and any IAM users with console access.</p></li><li><p>Verify that your account information is correct.</p></li><li><p>Respond to the notifications that you received from AWS Support through the AWS Support Center.</p></li></ul><p><strong>CORRECT: </strong>"Rotate and delete all root and IAM access keys" is a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Delete any unauthorized IAM users" is also a correct answer (as explained above.)</p><p><strong>CORRECT: </strong>"Delete any unauthorized resources" is also a correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Login as root and delete all IAM users" is incorrect.</p><p>This would be highly disruptive and is not recommended as a response measure.</p><p><strong>INCORRECT:</strong> "Enable the AWS Shield Advanced service" is incorrect.</p><p>This service protects against DDoS attacks. This account has already been compromised with malware so Shield will not assist in this case.</p><p><strong>INCORRECT:</strong> "Take a snapshot of all Amazon EBS volumes" is incorrect.</p><p>This is not one of the recommended response measures for this circumstance.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/">https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/</a></p>',
        answers: [
          "<p>Login as root and delete all IAM users.</p>",
          "<p>Rotate and delete all root and IAM access keys.</p>",
          "<p>Delete any unauthorized IAM users.</p>",
          "<p>Delete any unauthorized resources.</p>",
          "<p>Enable the AWS Shield Advanced service.</p>",
          "<p>Take a snapshot of all Amazon EBS volumes.</p>",
        ],
      },
      correct_response: ["b", "c", "d"],
      section: "Domain 1 - Incident Response",
      question_plain:
        "A company's security engineer receives an abuse notification from AWS. The notification indicates that malware is being hosted in the AWS account. The security engineer investigated the issue and found an unauthorized Amazon S3 bucket.Which combination of steps should the security engineer take to MINIMIZE the consequences of this compromise? (Select THREE.)",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686834,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A retail company is using Amazon S3 to store its sales data that is encrypted with an AWS Key Management Service (AWS KMS) customer-managed key. The company uses several AWS Lambda functions, each needing to access the sales data in the S3 bucket independently.</p><p>A security engineer needs to ensure that each Lambda function has individual and restricted access permissions to the KMS key.</p><p>Which solution should the security engineer implement to fulfill this requirement?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A Lambda function should be assigned an execution role that provides the necessary permissions for its tasks. If each function needs access to a KMS key, assigning each function an execution role that provides these permissions is the correct approach.</p><p><strong>CORRECT: </strong>"Assign a distinct Lambda execution role with specific KMS key access permissions to each Lambda function" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Assign an individual IAM user to each Lambda function. Attach an IAM policy that grants precise access permissions to the KMS key" is incorrect.</p><p>AWS IAM users should not be attached directly to AWS Lambda functions. Instead, Lambda functions should assume a role that provides the necessary permissions.</p><p><strong>INCORRECT:</strong> "Create a KMS key policy that restricts permissions to the specific Lambda service principals" is incorrect.</p><p>KMS key policy is not typically used to provide permissions to specific Lambda service principals. It\'s more suited to control overall access to the KMS key itself.</p><p><strong>INCORRECT:</strong> "Configure each Lambda function to assume an IAM role with exact access permissions to the AWS managed KMS key for Amazon S3" is incorrect.</p><p>It is not possible to configure each Lambda function to assume an IAM role that provides permissions to the AWS managed KMS key for Amazon S3. The key in question is a customer-managed key, not an AWS-managed key.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">https://docs.aws.amazon.com/lambda/latest/dg/welcome.html</a></p>',
        answers: [
          "<p>Assign an individual IAM user to each Lambda function. Attach an IAM policy that grants precise access permissions to the KMS key.</p>",
          "<p>Create a KMS key policy that restricts permissions to the specific Lambda service principals.</p>",
          "<p>Assign a distinct Lambda execution role with specific KMS key access permissions to each Lambda function.</p>",
          "<p>Configure each Lambda function to assume an IAM role with exact access permissions to the AWS managed KMS key for Amazon S3.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A retail company is using Amazon S3 to store its sales data that is encrypted with an AWS Key Management Service (AWS KMS) customer-managed key. The company uses several AWS Lambda functions, each needing to access the sales data in the S3 bucket independently.A security engineer needs to ensure that each Lambda function has individual and restricted access permissions to the KMS key.Which solution should the security engineer implement to fulfill this requirement?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686836,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A software development firm operates a multi-account AWS environment managed by AWS Organizations and AWS IAM Identity Center. The firm needs to ensure that each development team can operate only within assigned AWS Regions and specific AWS services. The solution should aim to minimize management overhead.</p><p>Which solution will best meet these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Service Control Policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization, providing central control over the maximum available permissions for all accounts in your organization.</p><p>SCPs can restrict access to specific services and actions across all accounts in an AWS Organization, and they are the best way to enforce region and service restrictions at scale.</p><p><strong>CORRECT: </strong>"Utilize Service Control Policies (SCPs) in AWS Organizations to limit each team\'s access to only their assigned Regions and services" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS Config to set up service control policies that restrict access to only the necessary Regions and services" is incorrect.</p><p>AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources, but it cannot restrict access to specific regions or services.</p><p><strong>INCORRECT:</strong> "Implement AWS WAF rules to restrict requests from IPs outside of the designated Regions" is incorrect.</p><p>AWS WAF is a web application firewall service that helps to protect your web applications from common web exploits, it\'s not meant for restricting access to regions or services.</p><p><strong>INCORRECT:</strong> "Establish IAM roles for each team with specific policies that restrict access to only their assigned Regions and services" is incorrect.</p><p>While IAM roles can help manage access to AWS services, managing individual IAM roles for each team could lead to high operational overhead, especially if the number of teams and services is significant.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html</a></p>',
        answers: [
          "<p>Use AWS Config to set up service control policies that restrict access to only the necessary Regions and services.</p>",
          "<p>Implement AWS WAF rules to restrict requests from IPs outside of the designated Regions.</p>",
          "<p>Establish IAM roles for each team with specific policies that restrict access to only their assigned Regions and services.</p>",
          "<p>Utilize Service Control Policies (SCPs) in AWS Organizations to limit each team's access to only their assigned Regions and services.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A software development firm operates a multi-account AWS environment managed by AWS Organizations and AWS IAM Identity Center. The firm needs to ensure that each development team can operate only within assigned AWS Regions and specific AWS services. The solution should aim to minimize management overhead.Which solution will best meet these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686838,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A fintech company operates a suite of applications on Amazon EC2. The applications have intricate security needs, governed by a set of security groups. After an unintended modification in a security group disrupted the connectivity of some applications, the company wants to be alerted via a designated email whenever changes are made to these security groups.</p><p>Which solution can fulfill this requirement most efficiently?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>AWS CloudTrail can capture all API calls, including those that modify security groups. The logs can be forwarded to Amazon CloudWatch, which can filter and raise an alarm on detecting specific patterns. This alarm can then be linked to an SNS topic for email notifications, making this the most operationally efficient option.</p><p><strong>CORRECT: </strong>"Use AWS CloudTrail. Enable forwarding to Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter to match patterns indicating security group changes. Configure a CloudWatch alarm to send alerts to an Amazon SNS topic" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use AWS Config. Set up a custom AWS Config rule to track changes to security groups. Configure AWS Lambda for automated remediation and to send notifications to an Amazon SNS topic" is incorrect.</p><p>While AWS Config can be set up to track changes in security groups, AWS Lambda doesn\'t inherently support direct remediation or sending notifications upon detection of changes in security groups. This solution would require more work and is therefore less efficient.</p><p><strong>INCORRECT:</strong> "Use AWS CloudTrail. Forward logs to Amazon S3. Set up an Amazon Athena query to scan for event patterns indicating security group changes. Use AWS Lambda to send query results to Amazon SES for email notifications" is incorrect.</p><p>Although AWS CloudTrail, Amazon S3, Amazon Athena, and Amazon SES could provide the required functionality, this process would be overly complicated and operationally inefficient compared to the other options.</p><p><strong>INCORRECT:</strong> "Use Amazon Macie. Enable monitoring for changes in security groups. Configure Amazon Macie to send alerts to an Amazon SNS topic" is incorrect.</p><p>Amazon Macie is primarily used for data protection and data privacy and doesn\'t directly support monitoring changes in security groups.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html</a></p>',
        answers: [
          "<p>Use AWS Config. Set up a custom AWS Config rule to track changes to security groups. Configure AWS Lambda for automated remediation and to send notifications to an Amazon SNS topic.</p>",
          "<p>Use AWS CloudTrail. Enable forwarding to Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter to match patterns indicating security group changes. Configure a CloudWatch alarm to send alerts to an Amazon SNS topic.</p>",
          "<p>Use AWS CloudTrail. Forward logs to Amazon S3. Set up an Amazon Athena query to scan for event patterns indicating security group changes. Use AWS Lambda to send query results to Amazon SES for email notifications.</p>",
          "<p>Use Amazon Macie. Enable monitoring for changes in security groups. Configure Amazon Macie to send alerts to an Amazon SNS topic.</p>",
        ],
      },
      correct_response: ["b"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "A fintech company operates a suite of applications on Amazon EC2. The applications have intricate security needs, governed by a set of security groups. After an unintended modification in a security group disrupted the connectivity of some applications, the company wants to be alerted via a designated email whenever changes are made to these security groups.Which solution can fulfill this requirement most efficiently?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686840,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An international media company has recently migrated their operations to AWS, operating across multiple accounts within AWS Organizations. They have a critical need to log all user actions across these accounts for audit purposes. For certain key actions, they want to be immediately notified through an email list.</p><p>Which solution best fits their needs?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>An organizational trail with CloudTrail logs all user actions across accounts. Forwarding these logs to CloudWatch Logs and setting a metric filter for specific actions allows an alarm to be set, which sends notifications in real-time through an SNS topic when these actions occur.</p><p><strong>CORRECT: </strong>"Configure an organizational trail with AWS CloudTrail, forwarding logs to CloudWatch Logs. Set a metric filter within CloudWatch Logs to catch specific actions and create a CloudWatch alarm to send messages to an SNS topic upon these actions" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Implement CloudTrail and set it to direct logs to CloudWatch Logs. Create a metric filter in CloudWatch Logs to catch specific actions and create a CloudWatch alarm to send messages to an SQS queue" is incorrect.</p><p>This answer isn\'t correct as it doesn\'t consider multiple accounts and the SQS queue does not meet the requirement of notifying an email list.</p><p><strong>INCORRECT:</strong> "Establish an organizational trail with CloudTrail, storing logs in an S3 bucket. Set up an EC2 instance to scan the logs for specific actions and set it to publish messages to an SNS topic" is incorrect.</p><p>This answer isn\'t correct as it isn\'t as efficient or real-time as using CloudWatch Logs and metric filters, although it does use an organizational trail.</p><p><strong>INCORRECT:</strong> "Deploy CloudTrail and set it to store logs in an S3 bucket. Every hour, use Glue to create a Data Catalog that references the S3 bucket. Configure Athena to initiate queries against the Data Catalog to identify specific actions" is incorrect.</p><p>This answer isn\'t correct as it does not use organizational trails and therefore does not accommodate the multiple accounts within the organization.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html</a></p>',
        answers: [
          "<p>Configure an organizational trail with AWS CloudTrail, forwarding logs to CloudWatch Logs. Set a metric filter within CloudWatch Logs to catch specific actions and create a CloudWatch alarm to send messages to an SNS topic upon these actions.</p>",
          "<p>Implement CloudTrail and set it to direct logs to CloudWatch Logs. Create a metric filter in CloudWatch Logs to catch specific actions and create a CloudWatch alarm to send messages to an SQS queue.</p>",
          "<p>Establish an organizational trail with CloudTrail, storing logs in an S3 bucket. Set up an EC2 instance to scan the logs for specific actions and set it to publish messages to an SNS topic.</p>",
          "<p>Deploy CloudTrail and set it to store logs in an S3 bucket. Every hour, use Glue to create a Data Catalog that references the S3 bucket. Configure Athena to initiate queries against the Data Catalog to identify specific actions.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "An international media company has recently migrated their operations to AWS, operating across multiple accounts within AWS Organizations. They have a critical need to log all user actions across these accounts for audit purposes. For certain key actions, they want to be immediately notified through an email list.Which solution best fits their needs?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686842,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An online gaming company has a network of Amazon EC2 instances that are frequently targeted by rogue bots. The security team needs to implement an automated system to block traffic from identified malicious sources. The system needs to respond in near real-time and the security team decided to use AWS Step Functions to orchestrate this solution.</p><p>Which solution should the security engineer implement to meet these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity. It can identify potentially harmful behavior, such as traffic from a botnet.</p><p>The suspicious IP addresses can be stored in a DynamoDB table.</p><p>Lambda can be used to update the DynamoDB table and to automatically update an AWS Network Firewall rule group to block traffic from these IP addresses.</p><p><strong>CORRECT: </strong>"Use Amazon GuardDuty to identify malicious traffic. Store the identified IP addresses in a DynamoDB table. Use Lambda to update the DynamoDB table and modify an AWS Network Firewall rule group to block the traffic" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Use Amazon GuardDuty to identify malicious traffic. Store the identified IP addresses in a DynamoDB table. Use Lambda to update the DynamoDB table and modify a Security Group rule to block the traffic from these IP addresses" is incorrect.</p><p>Although this approach uses Amazon GuardDuty to identify malicious traffic and Lambda to update the DynamoDB table, it uses Security Group rules to block the traffic. Security Groups only support allow rules, so it is more challenging to implement this solution.</p><p><strong>INCORRECT:</strong> "Use AWS WAF to detect malicious traffic. Use DynamoDB to store the identified IP addresses. Utilize Lambda to update the DynamoDB table and modify an AWS Network Firewall rule group to block the traffic" is incorrect.</p><p>AWS WAF primarily protects against common web exploits that could affect application availability, compromise security, or consume excessive resources. However, it is not specifically designed to detect malicious traffic targeting EC2 instances.</p><p><strong>INCORRECT:</strong> "Use AWS CloudTrail to monitor for malicious traffic. Store the identified IP addresses in a DynamoDB table. Utilize Lambda to update the DynamoDB table and modify a WAF web ACL rule to block the traffic" is incorrect.</p><p>AWS CloudTrail is used for logging and tracking API calls, not for identifying and blocking malicious traffic. Therefore, it is not suitable for this use case.</p><p><strong>References:</strong></p><p><a href="https://aws.amazon.com/network-firewall/">https://aws.amazon.com/network-firewall/</a></p><p><a href="https://aws.amazon.com/guardduty/">https://aws.amazon.com/guardduty/</a></p>',
        answers: [
          "<p>Use Amazon GuardDuty to identify malicious traffic. Store the identified IP addresses in a DynamoDB table. Use Lambda to update the DynamoDB table and modify a Security Group rule to block the traffic from these IP addresses.</p>",
          "<p>Use AWS WAF to detect malicious traffic. Use DynamoDB to store the identified IP addresses. Utilize Lambda to update the DynamoDB table and modify an AWS Network Firewall rule group to block the traffic.</p>",
          "<p>Use Amazon GuardDuty to identify malicious traffic. Store the identified IP addresses in a DynamoDB table. Use Lambda to update the DynamoDB table and modify an AWS Network Firewall rule group to block the traffic.</p>",
          "<p>Use AWS CloudTrail to monitor for malicious traffic. Store the identified IP addresses in a DynamoDB table. Utilize Lambda to update the DynamoDB table and modify a WAF web ACL rule to block the traffic.</p>",
        ],
      },
      correct_response: ["c"],
      section: "Domain 6: Management and Security Governance",
      question_plain:
        "An online gaming company has a network of Amazon EC2 instances that are frequently targeted by rogue bots. The security team needs to implement an automated system to block traffic from identified malicious sources. The system needs to respond in near real-time and the security team decided to use AWS Step Functions to orchestrate this solution.Which solution should the security engineer implement to meet these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686844,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>An AWS Lambda function has started to cause errors in an application and a security engineer must check the output of the function. The engineer checked Amazon CloudWatch Logs but could not find any log files for the Lambda function.</p><p>What is the best explanation for why the logs are not available?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>A Lambda function\'s execution role is an AWS Identity and Access Management (IAM) role that grants the function permission to access AWS services and resources. You provide this role when you create a function, and Lambda assumes the role when your function is invoked.</p><p>Lambda will record execution output to CloudWatch Logs if it has the permission to do so. You can add CloudWatch Logs permissions using the AWSLambdaBasicExecutionRole AWS managed policy provided by Lambda. The policy statement is shown below:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-07_17-15-29-b33d558437ba5a56cd12fe0bdf95c8b3.jpg"><p><strong>CORRECT: </strong>"The Lambda function execution role does not have permissions to write to CloudWatch Logs" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "The Lambda function execution role does not have permissions to write to Amazon S3" is incorrect.</p><p>Amazon S3 is unrelated to CloudWatch Logs. The execution role needs permissions for CloudWatch Logs only in this case.</p><p><strong>INCORRECT:</strong> "The Lambda function does not have monitoring enabled to execution output is not being logged" is incorrect.</p><p>Logging to CloudWatch Logs happens automatically if the execution role grants the necessary permissions.</p><p><strong>INCORRECT:</strong> "The log output is stored in AWS X-Ray so the security engineer must check there instead" is incorrect.</p><p>AWS X-Ray is used for tracing and is unrelated to CloudWatch Logs.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html">https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html</a></p><p><a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html">https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html</a></p>',
        answers: [
          "<p>The Lambda function execution role does not have permissions to write to CloudWatch Logs.</p>",
          "<p>The Lambda function does not have monitoring enabled to execution output is not being logged.</p>",
          "<p>The Lambda function execution role does not have permissions to write to Amazon S3.</p>",
          "<p>The log output is stored in AWS X-Ray so the security engineer must check there instead.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "An AWS Lambda function has started to cause errors in an application and a security engineer must check the output of the function. The engineer checked Amazon CloudWatch Logs but could not find any log files for the Lambda function.What is the best explanation for why the logs are not available?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686846,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A security engineer needs to secure an Amazon S3 bucket that will be used by many internal users who have AWS accounts. The security engineer enabled default encryption on the S3 bucket and needs to limit access to user-specific folders. Each user should only be able to access their own folder.</p><p>What should the security engineer configure?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p><em>Policy variables</em> let you specify placeholders in a policy. When the policy is evaluated, the policy variables are replaced with values that come from the context of the request itself.</p><p>The following example shows a policy for an Amazon S3 bucket that uses a policy variable.</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-07_17-21-26-51db91de2dec0ae0424e3d257346e9e8.jpg"><p>When this policy is evaluated, IAM replaces the variable ${aws:username}with the friendly name of the actual current user. This means that a single policy applied to a group of users can control access to a bucket. It does this by using the user name as part of the resource\'s name.</p><p><strong>CORRECT: </strong>"Update the relevant IAM policy to grant access to the resource "arn:aws:s3:::examplebucket/${aws:username}/*" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Update the relevant IAM policy to grant access to the resource "arn:aws:s3:::bucket/${aws:PrincipalTag/username}/*"" is incorrect.</p><p>In this example part of the ARN would be replaced with a tag value rather than the requesting users’ username.</p><p><strong>INCORRECT:</strong> "Update the object ACL for the folder to grant access to the “Authenticated users group" is incorrect.</p><p>There isn’t an ACL for folders, only buckets and objects have ACLs. Also, the authenticated users group means any authenticated user rather than a specific user account.</p><p><strong>INCORRECT:</strong> "Instruct each user to assume object ownership for their own S3 folder using the object writer option" is incorrect.</p><p>You cannot assume ownership of individual folders within an S3 bucket.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html</a></p>',
        answers: [
          '<p>Update the relevant IAM policy to grant access to the resource "arn:aws:s3:::examplebucket/${aws:username}/*”.</p>',
          "<p>Update the object ACL for the folder to grant access to the “Authenticated users group”.</p>",
          "<p>Instruct each user to assume object ownership for their own S3 folder using the object writer option.</p>",
          '<p>Update the relevant IAM policy to grant access to the resource "arn:aws:s3:::bucket/${aws:PrincipalTag/username}/*".</p>',
        ],
      },
      correct_response: ["a"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A security engineer needs to secure an Amazon S3 bucket that will be used by many internal users who have AWS accounts. The security engineer enabled default encryption on the S3 bucket and needs to limit access to user-specific folders. Each user should only be able to access their own folder.What should the security engineer configure?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686848,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company runs a hybrid cloud with on-premises network that is connected to AWS using an AWS Direct Connect connection. The company also has an internet connection with significant bandwidth available. An application that runs on-premises needs to stream data to Amazon Kinesis Data Streams. The company's security policy requires that data be encrypted in transit using a private network.</p><p>How should the company meet these requirements?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The first thing to note is that Kinesis Data Streams uses TLS for all connections, so the data is encrypted in transit by default. Therefore, we don’t need to think about using encrypted tunnels to connect (Direct Connect is not encrypted). The solution must ensure data is sent over a private connection, which in this case is the Direct Connect connection.</p><p>You can use an interface VPC endpoint to keep traffic between your Amazon VPC and Kinesis Data Firehose from leaving the Amazon network. This will ensure that traffic received over the DX connection that is destined for KDS does not traverse the public internet.</p><p><strong>CORRECT: </strong>"Create an interface VPC endpoint for Kinesis Data Streams. Configure the application to connect to the VPC endpoint" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an IPSec VPN connection to the Amazon VPC. Configure the application to connect via the virtual private gateway" is incorrect.</p><p>There is no need for an encrypted tunnel over a VPN as the data is already encrypted. A VPN would use the internet by default and therefore does not use a private network.</p><p><strong>INCORRECT:</strong> "Configure Kinesis Data Streams as a target for a public facing Network Load Balancer (NLB) with a TLS listener" is incorrect.</p><p>You cannot configure KDS as a target for an NLB. This also does not use a private network.</p><p><strong>INCORRECT:</strong> "Enable server-side encryption for Kinesis Data Streams using an AWS KMS key. Configure the application to connect via the Direct Connect connection" is incorrect.</p><p>Server-side encryption is used for encryption at rest rather than encryption in transit. There is also no way to use the DX connection unless an interface VPC endpoint is provisioned.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/streams/latest/dev/vpc.html">https://docs.aws.amazon.com/streams/latest/dev/vpc.html</a></p>',
        answers: [
          "<p>Create an interface VPC endpoint for Kinesis Data Streams. Configure the application to connect to the VPC endpoint.</p>",
          "<p>Create an IPSec VPN connection to the Amazon VPC. Configure the application to connect via the virtual private gateway.</p>",
          "<p>Configure Kinesis Data Streams as a target for a public facing Network Load Balancer (NLB) with a TLS listener.</p>",
          "<p>Enable server-side encryption for Kinesis Data Streams using an AWS KMS key. Configure the application to connect via the Direct Connect connection.</p>",
        ],
      },
      correct_response: ["a"],
      section: "Domain 5 - Data Protection",
      question_plain:
        "A company runs a hybrid cloud with on-premises network that is connected to AWS using an AWS Direct Connect connection. The company also has an internet connection with significant bandwidth available. An application that runs on-premises needs to stream data to Amazon Kinesis Data Streams. The company's security policy requires that data be encrypted in transit using a private network.How should the company meet these requirements?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686850,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company must ensure that AWS CloudTrail is recording API activity across all AWS Regions within their account. An automated solution is required to check that CloudTrail is enabled and to turn it back on if it has been turned off.</p><p>What is the MOST efficient way to implement this solution?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>To ensure that CloudTrail remains enabled in your account, AWS Config provides the cloudtrail-enabled managed rule<em>. </em>If CloudTrail is turned off, the cloudtrail-enabled rule automatically re-enables it by using automatic remediation.</p><p>This solution uses AWS Config to identify if CloudTrail logging is turned off and then an AWS Systems Manager Automation runbook to remediate the issue. The following diagram depicts this solution:</p><img src="https://img-c.udemycdn.com/redactor/raw/practice_test_question_explanation/2023-07-07_17-24-48-c310f042a748ae5dd5d29448711bc062.jpg"><p><strong>CORRECT: </strong>"Use AWS Config with the managed rule cloudtrail-enabled to check that CloudTrail is enabled. If the rule is NON_COMPLIANT use Systems Manager Automation to automatically remediate the issue" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Create an Amazon EventBridge event with the event type “AWS API Call via CloudTrail” and configure AWS Lambda as a target. Configure the Lambda function to turn CloudTrail back on" is incorrect.</p><p>This event will trigger when certain API calls are made via AWS CloudTrail. It does not check if CloudTrail itself is being modified unless specifically targeting those API calls. This would require more work to implement properly compared to the correct answer.</p><p><strong>INCORRECT:</strong> "Use Amazon Athena to monitor the Amazon S3 buckets where CloudTrail logging occurs. If logging ceases trigger an automated action that executes Systems Manager Automation to remediate the issue" is incorrect.</p><p>Athena is used for running SQL queries on S3 data. This is not a good way to check for changes to AWS CloudTrail.</p><p><strong>INCORRECT:</strong> "Create an Amazon CloudWatch alarm for the AWS CloudTrail StopLogging API action. Configure remediation using an AWS Step Functions State Machine with an AWS Lambda function that turns CloudTrail back on" is incorrect.</p><p>You can alert based on metric filters that check for CloudTrail API actions. However, this would be more complex, and Step Functions would not be used as the target, Lambda would be.</p><p><strong>References:</strong></p><p><a href="https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automatically-re-enable-aws-cloudtrail-by-using-a-custom-remediation-rule-in-aws-config.html">https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automatically-re-enable-aws-cloudtrail-by-using-a-custom-remediation-rule-in-aws-config.html</a></p>',
        answers: [
          "<p>Create an Amazon CloudWatch alarm for the AWS CloudTrail StopLogging API action. Configure remediation using an AWS Step Functions State Machine with an AWS Lambda function that turns CloudTrail back on.</p>",
          "<p>Use Amazon Athena to monitor the Amazon S3 buckets where CloudTrail logging occurs. If logging ceases trigger an automated action that executes Systems Manager Automation to remediate the issue.</p>",
          "<p>Create an Amazon EventBridge event with the event type “AWS API Call via CloudTrail” and configure AWS Lambda as a target. Configure the Lambda function to turn CloudTrail back on.</p>",
          "<p>Use AWS Config with the managed rule cloudtrail-enabled to check that CloudTrail is enabled. If the rule is NON_COMPLIANT use Systems Manager Automation to automatically remediate the issue.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 2 - Logging and Monitoring",
      question_plain:
        "A company must ensure that AWS CloudTrail is recording API activity across all AWS Regions within their account. An automated solution is required to check that CloudTrail is enabled and to turn it back on if it has been turned off.What is the MOST efficient way to implement this solution?",
      related_lectures: [],
    },
    {
      _class: "assessment",
      id: 73686852,
      assessment_type: "multiple-choice",
      prompt: {
        question:
          "<p>A company runs many Amazon EC2 Linux instances. Communications between the instances are complex and rules governing ingress, egress, and inter-instance communications are beyond the limits of security groups and network ACLs.</p><p>What mechanism will allow the company to implement all required network rules without incurring additional cost?</p>",
        relatedLectureIds: "",
        feedbacks: ["", "", "", ""],
        explanation:
          '<p>The only option available that works and does not incur additional cost is to use the host-based firewall within the operating system of the EC2 instances. With Linux and Windows instances you can configure a host-based firewall to control communications.</p><p><strong>CORRECT: </strong>"Configure the host-based firewall within the operating system" is the correct answer (as explained above.)</p><p><strong>INCORRECT:</strong> "Configure AWS WAF web ACLs to implement the required rules" is incorrect.</p><p>WAF is not free so would incur additional cost.</p><p><strong>INCORRECT:</strong> "Use a third-party firewall appliance from the AWS Marketplace" is incorrect.</p><p>Appliances with third-party firewall software built-in will typically cost extra as you must run the instances hosting the firewall and typically pay additional costs for the licensing within the EC2 pricing.</p><p><strong>INCORRECT:</strong> "Use an AWS transit gateway to control inter-instance communications" is incorrect.</p><p>Transit gateway is not a firewall and is not free.</p><p><strong>References:</strong></p><p><a href="https://en.wikipedia.org/wiki/Iptables">https://en.wikipedia.org/wiki/Iptables</a></p>',
        answers: [
          "<p>Configure AWS WAF web ACLs to implement the required rules.</p>",
          "<p>Use an AWS transit gateway to control inter-instance communications.</p>",
          "<p>Use a third-party firewall appliance from the AWS Marketplace.</p>",
          "<p>Configure the host-based firewall within the operating system.</p>",
        ],
      },
      correct_response: ["d"],
      section: "Domain 3 - Infrastructure Security",
      question_plain:
        "A company runs many Amazon EC2 Linux instances. Communications between the instances are complex and rules governing ingress, egress, and inter-instance communications are beyond the limits of security groups and network ACLs.What mechanism will allow the company to implement all required network rules without incurring additional cost?",
      related_lectures: [],
    },
  ],
};
