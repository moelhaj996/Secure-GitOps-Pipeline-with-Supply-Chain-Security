# Secure GitOps Pipeline with Supply Chain Security

This repository implements a comprehensive secure CI/CD pipeline with integrated security scanning and compliance checks.

## Security Features

### Static Application Security Testing (SAST)
- **SonarQube**: Code quality and security analysis
- **Snyk**: Vulnerability scanning for dependencies

### Dynamic Application Security Testing (DAST)
- **OWASP ZAP**: Automated security testing

### Secret Scanning
- **GitGuardian**: Real-time secret detection
- **TruffleHog**: Additional secret scanning capabilities

### Policy as Code
- **Open Policy Agent (OPA)**: Security policy enforcement using Rego

## Pipeline Stages

1. **Security Scanning**
   - SAST analysis with SonarQube and Snyk
   - Secret scanning with GitGuardian and TruffleHog
   - Policy compliance checks with OPA

2. **DAST Scanning**
   - OWASP ZAP automated security testing
   - Dynamic vulnerability assessment

3. **Policy Compliance**
   - Security policy enforcement
   - Compliance validation

## Setup Instructions

1. Configure GitHub Secrets:
   ```
   SONAR_TOKEN
   SONAR_HOST_URL
   SNYK_TOKEN
   GITGUARDIAN_API_KEY
   ```

2. Update the OWASP ZAP target URL in `.github/workflows/secure-pipeline.yml`

3. Customize OPA policies in `policies/security.rego` as needed

## Security Policies

The security policies are defined using Rego language in the `policies/security.rego` file. These policies enforce:
- No high severity vulnerabilities
- No exposed secrets
- HTTPS usage
- Proper authentication
- Proper authorization
- Encryption requirements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License 