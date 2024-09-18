import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "redmi812345redmi@gmail.com",
      pass: "eorv nkin ivnr pbqp"
    },
    secure: true,
});

export async function POST(req:Request,res:Response){
    const p:any=res;
    console.log(p);
    
    const data=await req.json();

const func =async () => {
const mailData = {
    from: {
        name: `Chitkara University`,
        address: "redmi812345redmi@gmail.com"
    },
    to: "namanbansal102@gmail.com",
    subject: `UHostel Naman Bansal(2310990580) GatePass Application`,
    html: `any Problem`,
};

await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err:any, info:any) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});

};
await func();
    return Response.json({"success":true,"data":data.email})
}