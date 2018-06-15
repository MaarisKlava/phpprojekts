function isEmpty(fieldName) {
    errorResult = fieldName.match(/^([0-9])*$/);
    if(errorResult == null){
        console.log("nav ok");
    }
    else{
        console.log("ok");
    }

}