const nodemailer = require("nodemailer");

const transporter  = nodemailer.createTransport({
   service: "gmail",
   auth:{
    user:"amanikanta354@gmail.com",
    pass:"rsqx hvmn pkqa fpeh"
   } 
})

let mailoptions = {
    from:"amanikanta354@gmail.com",
    to:"saimanikantaavvaru@gmail.com",
    subject:"blah bah..",
    text:"hi from the batch 4"
}

transporter.sendMail(mailoptions,(err,info)=>{
if(err){
    console.log(err)
}else{
    console.log("mail sent")
}
})