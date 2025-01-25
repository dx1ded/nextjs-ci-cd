# Next.js CI/CD Pipeline Template

This repository serves as a CI/CD pipeline template for Next.js projects, designed to streamline your development process and ensure robust workflows. It includes a pre-configured setup for testing, building, previewing, and deploying applications with GitHub Actions.

## Features 🚀

- Pre-commit checks: ESLint + Prettier + Husky
- Unit Testing: Vitest
- End-to-End Testing: Cypress
- Code Coverage: Integrated using nyc
- Docker Integration: Automatically builds and pushes Docker images
- Environment Previews: Preview deployments for pull requests
- Production Deployment: Automated after PR approval
- Dependabot Support: Automated updates for dependencies

## Getting Started 🛠️

This repository includes everything you need to get started with a production-grade CI/CD pipeline for Next.js. You can clone it and start building your app immediately!

#### 1. Clone the Repository
```bash
git clone https://github.com/dx1ded/nextjs-ci-cd my-project

cd ./my-project
```

#### 2. Install Dependencies
```bash
pnpm install
```

#### 3. Configure Secrets and Variables

Add the following secrets and variables to your repository’s GitHub Actions Settings under **Settings > Secrets and Variables**.

**Secrets:**

- DOCKERHUB_USERNAME: Docker Hub username
- DOCKERHUB_TOKEN: Docker Hub token
- VPS_HOST: VPS host address
- VPS_USERNAME: VPS username
- VPS_SSH_KEY: SSH private key for VPS
- VPS_SSH_PASSPHRASE: (Optional) Passphrase for SSH key
- SLACK_BOT_TOKEN: Slack bot token for notifications

**Variables:**

- IMAGE_NAME: Name of the Docker image (e.g., user/myapp)
- SLACK_RELEASES_CHANNEL_ID: Slack channel ID for release notifications


#### 4. Configure Your VPS

Before deploying, ensure your VPS is set up correctly by following these steps:

##### 1. Install Docker

Make sure Docker is installed and running on your VPS. If not, refer to the official Docker installation guide: [Install Docker](https://docs.docker.com/engine/install/).

##### 2. Copy Files

Copy the contents of the .vps folder to your VPS.

##### 3. Configure the .env file

Edit the .env file with the appropriate variables:

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
CERT_EMAIL=admin@gmail.com  

# Docker Hub registry (for example: user/myapp)  
REGISTRY_NAME=  

PREVIEW_IMAGE=latest  
PRODUCTION_IMAGE=latest 
```

##### 4. Update docker-compose.yml

Edit the `docker-compose.yml` file where indicated:

- Replace the domain **krustberry.xyz** with your own domain.
- Update the DNS provider (**namedotcom**) with the provider you’re using, as per the Traefik documentation.

## Contributing 🤝

Contributions are welcome! Feel free to submit issues or pull requests to improve the template.

## License 📄

This project is licensed under the MIT License. See the LICENSE file for details.
