module.exports = {
    db: process.env.MONGODB || 'mongodb://localhost:27017/SD-CRUD',
    SECRET: 'miclavesecretadetokens',
    TOKEN_EXP_TIME: 7*24*60 // 7 días expresados en minutos
}; 