import { helper } from "./helper-service"


  const execute = ()=>{
    const bool = helper()
    if(bool){
        return 'even'
    }else{
        return 'odd'
    }
}

export default execute
