package security

# Default deny
default allow = false

# Allow if all security checks pass
allow {
    # Check for no high severity vulnerabilities
    not has_high_severity_vulnerabilities
    
    # Check for no exposed secrets
    not has_exposed_secrets
    
    # Check for compliance with security standards
    meets_security_standards
}

# Check for high severity vulnerabilities
has_high_severity_vulnerabilities {
    input.vulnerabilities[_].severity == "HIGH"
}

# Check for exposed secrets
has_exposed_secrets {
    input.secrets[_]
}

# Security standards compliance
meets_security_standards {
    # Ensure HTTPS is used
    input.https_enabled
    
    # Ensure proper authentication
    input.authentication_enabled
    
    # Ensure proper authorization
    input.authorization_enabled
    
    # Ensure proper encryption
    input.encryption_enabled
} 