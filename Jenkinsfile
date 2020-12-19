pipeline {
    agent {
        docker {
            image 'node:14-buster'
        }
    }

    stages {
        // stage('Checkout') {
        //     steps {
        //         git branch: 'master', url: 'https://github.com/kemi-kun/gyo-main.git'
        //     }
        // }
        stage('Dependency installation') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}