const log = (data) => {
    if(process.env.NODE_ENV === 'development'){
        console.log(data);
    }
};

export default log;


// this file helps us to not showing logs when we are on production mode.
// we need to imoport this file to our code and use log() instead of console.log()