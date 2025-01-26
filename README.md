# Next.js CI/CD Pipeline Template

This repository serves as a CI/CD pipeline template for Next.js projects, designed to streamline your development process and ensure robust workflows. It includes a pre-configured setup for **testing**, **building**, **previewing**, and **deploying** applications with GitHub Actions.

## Features 🚀

- Pre-commit checks: ESLint + Prettier + Husky
- Testing: Vitest (Unit) / Cypress (E2E)
- Code Coverage: Integrated using nyc
- Preview Deployment: Preview deployments for pull requests
- Production Deployment: Automated after PR approval
- Docker: Automatically builds and pushes Docker images
- Notifications: Slack / Github

## Resources 🎥 🗺️

#### Overview & Setup Videos

1. CI/CD Pipeline Overview: [Watch the video](https://www.youtube.com/watch?v=Ehukyu2_mMw)
2. CI/CD Pipeline Setup Guide: [Watch the video](https://youtu.be/HRJTVEv03oE)

#### CI/CD Schema

View the detailed CI/CD pipeline schema on Miro: [View the schema](https://miro.com/welcomeonboard/UlJxYnlBV0hLRSt2VzMvM0UzekVtdngyYmlRaVlCUmtMUmRWR29oNm9FSWdhU09tT0ZTUnA5N3ZNSVZlWmJBL3MxRzEyRGN3QXFrbExYMEwzQ0VIUDA5bUgydnlPdFNRL1NGcGJrNUQ3RXRHMW5aTTQwVzRRVnVYNTE5NWxydFUhZQ==?share_link_id=588963981639)

## Getting Started 🛠️

This repository includes everything you need to get started with a production-grade CI/CD pipeline for Next.js. You can clone it and start building your app immediately!

### 1. Clone the Repository
```bash
git clone https://github.com/dx1ded/nextjs-ci-cd my-project

cd ./my-project
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Configure Secrets and Variables

Add the following secrets and variables to your repository’s GitHub Actions Settings under **Settings > Secrets and Variables**.

##### Secrets:

- **DOCKERHUB_USERNAME**: Docker Hub username
- **DOCKERHUB_TOKEN**: Docker Hub token
- **VPS_HOST**: VPS host address
- **VPS_USERNAME**: VPS username
- **VPS_SSH_KEY**: SSH private key for VPS
- **VPS_SSH_PASSPHRASE**: Passphrase for SSH key
- **SLACK_BOT_TOKEN**: Slack bot token for notifications

##### Variables:

- **IMAGE_NAME**: Name of the Docker image (e.g., `user/myapp`)
- **SLACK_RELEASES_CHANNEL_ID**: Slack channel ID for release notifications

### 4. Configure Your VPS

Before deploying, ensure your VPS is set up correctly by following these steps:

#### 1. Install Docker

Make sure Docker is installed and running on your VPS. If not, refer to the official Docker installation guide: [Install Docker](https://docs.docker.com/engine/install/).

#### 2. Copy Files

Copy the contents of the `.vps` folder to your VPS inside the `www` folder.

#### 3. Configure the .env file

Edit the `.env` file with the appropriate variables:

```env
# Generate using `htpasswd -nB user`  
# When generated, duplicate `$` signs
PREVIEW_AUTH_CREDENTIALS=  

# Use the required environment variables based on your DNS provider.  
# The example below is for Name.com. Refer to the Traefik documentation for the appropriate variables for your provider:  
# https://doc.traefik.io/traefik/https/acme/#providers  
NAMECOM_USERNAME=  
NAMECOM_API_TOKEN=  

# Certificate email (use your own)  
CERT_EMAIL=

# Docker Hub registry (for example: user/myapp)  
REGISTRY_NAME=  

PREVIEW_IMAGE=latest  
PRODUCTION_IMAGE=latest 
```

#### 4. Update docker-compose.yml

Edit the `docker-compose.yml` file where indicated:

- Replace the domain **krustberry.xyz** with your own domain.
- Update the DNS provider (**namedotcom**) with the provider you’re using, as per the Traefik documentation.

#### 5. Create a Docker Network

Execute the following command to create a Docker network:

```bash
docker network create web
```

### 5. Configure Branch Protection Rules

To ensure a safe and structured workflow for your repository, you need to configure branch protection rules and GitHub Actions settings. Here’s how:

#### A. Configure Branch Protection Rules

##### 1. Go to Repository Settings:

- Navigate to **Settings > Rules > Rulesets > New branch ruleset**.

##### 2. Create a New Ruleset:

- **Enforcement Status**: Set to Enabled.
- **Add Target**: Include the default branch (e.g., main).

##### 3. Set the Following Rules:

- **Require a Pull Request Before Merging**:
  - Enable **Dismiss stale pull request approvals when new commits are pushed**.
- **Require Status Checks to Pass Before Merging**:
  - Enable **Require branches to be up to date before merging**.
  Under **Add checks**, include the following:
    - `deploy-preview` (from your GitHub Actions workflow).
   
---

#### B. Configure GitHub Actions Settings

##### 1. Go to Actions Settings:

- Navigate to **Settings > Actions > General**.

##### 2. Set Workflow Permissions:

- Choose **Read and write permissions**.

##### 3. Allow Pull Request Creating by Github Actions:

- Enable **Allow GitHub Actions to create and approve pull requests**.

### 6. Add Labels

Navigate to **Settings > Labels > New Label**, and define these two labels:

- `in-preview`: “PR is in a final stage, deploying the preview version”
- `approved`: "“Approved pull request"

## Contributing 🤝

Contributions are welcome! Feel free to submit issues or pull requests to improve the template.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](https://github.com/dx1ded/nextjs-ci-cd/blob/main/LICENSE) file for details.
