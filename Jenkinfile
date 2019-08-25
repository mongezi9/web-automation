node {
   def mvnHome
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
