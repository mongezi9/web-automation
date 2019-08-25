node {
   stage('Pull Repo'){
     checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/mongezi9/web-automation.git']]])
   }
   stage('Start Web driver') { // for display purposes
     try{
        sh 'npm run webdriver-update'
     }catch(e){
         throw e;
     }
   }
   stage('Run Tests') {
        try{
        sh 'npm run test'
     }catch(e){
         throw e;
     }
   }
}
