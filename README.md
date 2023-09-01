# Project Title

A project to present  AWS resources and their security finidngs

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node.js
- Docker (optional)

### Installing & Running

#### Without Docker:

1. Clone the repository:
 ```bash
git clone https://github.com/phoenix979/zest
```

2. Navigate into the root directory:

```bash
cd zest
```

3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
node app.js
```

5. Access the application via:

http://localhost:3000/


#### With Docker:

1. Clone the repository:

```bash
git clone https://github.com/phoenix979/zest
```

2. Navigate into the root directory:

```bash
cd zest
```

3. Build the Docker image:

```bash
docker build -t [YOUR_IMAGE_NAME] .
```

4. Run the Docker container:

```bash
docker run -p 3000:3000 [YOUR_IMAGE_NAME]
```

5. Access the application via:

http://localhost:3000/

## Usage

Follow the presented pages in the process.