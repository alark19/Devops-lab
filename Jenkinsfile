
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Retrieving source code from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application'
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application'

                bat 'if not exist dist mkdir dist'

                bat 'copy server.js dist\\server.js'

                bat 'copy package.json dist\\package.json'

                bat 'copy package-lock.json dist\\package-lock.json'
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving generated artifacts'

                archiveArtifacts artifacts: 'dist/**',
                                 fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }

        failure {
            echo 'Pipeline execution failed!'
        }
    }
}
