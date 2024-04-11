# QR Code Generator

This Node.js application generates a QR code from a given URL. The user provides the URL through the command line, and the QR code is saved as a PNG image. Additionally, the URL is saved in a text file for reference.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running this project, you need to have Node.js and npm installed on your system. If you don't have them installed, download them from the [Node.js website](https://nodejs.org/).

### Installing

Follow these steps to get a development environment running:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/YourUsername/qr_code_project.git
```

2. Navigate to the project directory:

```bash
cd qr_code_project
```
3. Install the necessary dependencies:

```bash
npm install
```

### Usage
To run the application, execute the following command in the terminal:

```bash
node index.js
```
When prompted, enter the URL you wish to generate a QR code for. The QR code will be saved as qr_img.png in your project directory, and the URL will be recorded in URL.txt.

### Built With

- Node.js - JavaScript runtime environment
- inquirer - Command line user interfaces
- qr-image - QR code image generation

### License

This project is licensed under the MIT License.


