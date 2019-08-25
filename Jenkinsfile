node {
    try{
         stage('Pull Repo'){
           checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/mongezi9/web-automation.git']]])
         }
         stage('Start Web driver') { // for display purposes   
           sh 'npm run webdriver-update'
         }
         stage('Run Tests') {
           sh 'npm run test'
         }
     }catch(e){
      throw e;
  }
}
