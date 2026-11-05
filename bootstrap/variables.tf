
variable "subscription_id" {
  description = "Azure subscription ID"
  type        = string
  default     = "144f3813-1346-45a5-ba59-f8dc12a29b90"
}

variable "tenant_id" {
  description = "Microsoft Entra tenant ID"
  type        = string
  default     = "b57b6424-4f9c-444e-9110-b840e381d80a"
}

variable "github_repository" {
  description = "GitHub repository in OWNER/REPOSITORY format"
  type        = string

  validation {
    condition     = can(regex("^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$", var.github_repository))
    error_message = "Enter your repository as OWNER/REPOSITORY."
  }
}
