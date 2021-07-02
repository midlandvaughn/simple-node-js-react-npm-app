pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 8051:8051' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
                input message: 'Finished using the test web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/killtest.sh'
            }
        }
    }
}
