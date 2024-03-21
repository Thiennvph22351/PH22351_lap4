const express=require('express');
const mailer=require('nodemailer');
const app=express();

let transporter = mailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'thiennvph22351@fpt.edu.vn',
        pass: 'pykj pawk qflf qzxy'
    }
});

//thong tin
let mailOption={
    from: 'thiennvph22351@fpt.edu.vn',
    to: 'nguyenthienvb99@gmail.com',
    subject: 'test email',
    text: 'Hello dang test day'
};
//gui mail
transporter.sendMail(mailOption,(error, info)=>{
    if(error){
        console.error(error);
    }else{
        console.log('Thanh cong: '+info.messageId);
    }
});
//khoi dong server
app.listen(3002,()=>{
    console.log('server dang chay cong 3002');
});