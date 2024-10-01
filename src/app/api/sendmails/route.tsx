import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "chitkarauniversitycupunjab@gmail.com",
      pass: "stlx hmdb ggbz eksj"
    },
    secure: true,
});

export async function POST(req:Request,res:Response){
    const p:any=res;
    console.log(p);
    
    const data=await req.json();
    let type=data.type;
    let time=data.time;
    let pass=data.pass;
    let date=data.date;
    let token=generateUniqueSixDigitNumber();
    if(pass!="Naman@1234"){
        return Response.json({"success":false,"message":"Not a Valid PassWord"})
    }
    let html=``;
    if (type=="gatepass") {
        html=`
       
        <div style="background-color:#e5e9ec">
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
    <tbody><tr>
    <td>
    <table width="100%" cellspacing="0" cellpadding="0" align="center">
     <tbody><tr><td colspan="4" height="30"></td></tr>
    </tbody></table>
    <table style="padding:20px;border-radius:7px;background-color:#fff" width="90%" cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody><tr>
    <td>
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
    <tbody><tr>
    <td colspan="1" style="border-bottom:1px solid #ccc;padding-bottom:15px" width="55" align="left">
    <img src="https://ci3.googleusercontent.com/meips/ADKq_Na0oePAtKOd_umuGgjqwHQZih65d92g__IkwaPOJXnHnTNxh_zxrKQyeCjng-Ue4Kwut1lex7qAbKC4x-jcqA9wVkSgtoXZAcIdiyThciQ=s0-d-e1-ft#https://punjab.chitkara.edu.in/Storage/Images/cu-icon.png" style="display:block" width="52" height="52" class="CToWUd" data-bit="iit"></td>
    <td colspan="3" style="font:19px arial;color:#333;border-bottom:1px solid #ccc;color:#4774a0;padding-bottom:8px">
    <p style="padding:0;margin-left:10px">
    <u></u>
    </p></td>
    </tr>
    </tbody></table>
    <table width="100%" cellspacing="5px" cellpadding="5px" border="0">
    <tbody>
        <tr>
        <td height="15"></td>
        </tr>
      <tr>
      <td style="font-size:15px;font-family:Verdana,Arial,Helvetica,sans-serif;width:50%;background-color:#c6e0f9;padding:8px"><b>Personal Information</b></td>
      <td style="font-size:15px;font-family:Verdana,Arial,Helvetica,sans-serif;width:50%;background-color:#c6e0f9;padding:8px"><b>Parents Information</b></td>
     </tr>
    <tr>
        <td style="color:#333;line-height:20px;background-color:#87ceeb0f;vertical-align:top">
            <table cellpadding="2px" cellspacing="2px" width="100%" style="font-size:12px;font-family:Verdana,Arial,Helvetica,sans-serif">
                <tbody><tr>
                    <td nowrap="" width="10%" style="padding:5px"><b>Name&nbsp;</b></td>
                    <td width="70%">&nbsp;NAMAN BANSAL</td>
                    <td width="20%" rowspan="5"><img src="https://ci3.googleusercontent.com/meips/ADKq_NYSrockajYrXs1gP7oq9vHBrUS5upcoUhHpSaJURgQO8e1z6MuytqUfUrLfkKpCA9vgJaSflE0wYjydxc2YoCHNMMUcCkPlYNrDt53Eho3OpBRfkyz3mLysI0bI-0ys4hX6=s0-d-e1-ft#https://s3.amazonaws.com/cbrig-assets/cuiet/resources/Student/1$wUZ0YYJ1.jpg" style="padding:5px;border:1px solid #ccc;width:120px;height:120px" class="CToWUd" data-bit="iit"></td>
                </tr>
                <tr><td nowrap="" width="10%" style="padding:5px"><b>Roll No.&nbsp;</b></td><td colspan="2">&nbsp;2310990580</td></tr>
                <tr><td nowrap="" width="10%" style="padding:5px"><b>Class&nbsp;</b></td><td colspan="2">&nbsp;2023-CUP-BE-CSE</td></tr>
                <tr><td nowrap="" width="10%" style="padding:5px"><b>Email&nbsp;</b></td><td colspan="2">&nbsp;<a href="mailto:naman0580.be23@chitkara.edu.in" target="_blank">naman0580.be23@chitkara.edu.<wbr>in</a></td></tr>
            </tbody></table>
        </td>
        <td style="color:#333;line-height:20px;background-color:#87ceeb0f;vertical-align:top">
            <table cellpadding="2px" cellspacing="2px" width="100%" style="font-size:12px;font-family:Verdana,Arial,Helvetica,sans-serif">
                    <tbody><tr><td nowrap="" width="10%" style="padding:5px"><b>Father's Name&nbsp;</b></td><td>&nbsp;RAVI SHANKAR</td></tr>
                    <tr><td nowrap="" width="10%" style="padding:5px"><b>Contact No.&nbsp;</b></td><td>&nbsp;9068808000</td></tr>
                    <tr><td nowrap="" width="10%" style="padding:5px"><b>Mother's Name&nbsp;</b></td><td>&nbsp;ANANTA DEVI</td></tr>
                    <tr><td nowrap="" width="10%" style="padding:5px"><b>Contact No.&nbsp;</b></td><td>&nbsp;8814940004</td></tr>
            </tbody>
            <tbody><tr><td nowrap="" width="10%" style="padding:5px"><b>Token No.&nbsp;</b></td><td>&nbsp;GT-${token}</td></tr>
                <tr><td nowrap="" width="10%" style="padding:5px"><b>Apply For&nbsp;</b></td><td>&nbsp;Out</td></tr>
                <tr><td nowrap="" width="10%" style="padding:5px"><b>Reason&nbsp;</b></td><td>&nbsp;Going OutSide From University - Shopping</td></tr>
                <tr><td nowrap="" width="10%" style="padding:5px"><b>Leave Type</b></td><td>&nbsp;<div style="padding:5px;text-align:center;margin-top:2px;background:lightgray;color:#000"><b>Out</b></div></td></tr></tbody></table>
        </td>
    </tr>
    </tbody>
    </table><table width="100%" cellspacing="5px" cellpadding="5px" border="0">
    <tbody>
      <tr>
      <td style="font-size:15px;font-family:Verdana,Arial,Helvetica,sans-serif;width:50%;background-color:#c6e0f9;padding:8px"><b>Gatepass Request</b></td>
     </tr>
    <tr>
        <td style="color:#333;line-height:20px;background-color:#87ceeb0f;vertical-align:top">
            <table cellpadding="2px" cellspacing="2px" width="100%" style="font-size:12px;font-family:Verdana,Arial,Helvetica,sans-serif">
                <tbody><tr><td nowrap="" width="10%" style="padding:5px"><b>Apply Date&nbsp;</b></td><td>&nbsp;
                ${date}<br>${time}</td></tr>
                <tr><td nowrap="" width="10%" style="padding:5px"><b>Hostel&nbsp;</b></td><td>&nbsp;ARCHIMEDES - A (Boys) 601-</td></tr>
                <tr><td nowrap="" width="10%" style="padding:5px"><b>Warden&nbsp;</b></td></tr>
                    <tr><td colspan="2">Balwinder Singh (9501117578),Sukhchain singh (9501117578),Prakash Chand (9501117578)</td></tr>
            </tbody></table>
           
        </td>
    </tr>
    </tbody>
    </table><br><br><table width="100%" cellspacing="0" cellpadding="0" border="0">
    <tbody><tr>
    <td colspan="4" height="15"></td>
    </tr>
    <tr>
    <td style="font:10px arial;color:#9a9a9a">
    <p style="margin:0">
    This email is a copy of the communication shared through the ChalkERP App and is for information purpose only. Please do not reply to this.
    </p></td>
    </tr>
    <tr>
    <td colspan="4" height="15"></td>
    </tr>
    
    <tr>
    <td style="font:10px arial;color:#9a9a9a">
    <p style="margin:0">
    Powered by Chitkara
    </p><a href="https://chitkara.edu.in" style="color:#7093be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://chitkara.edu.in&amp;source=gmail&amp;ust=1726726442310000&amp;usg=AOvVaw0giMoIVkpgkY3xUnnG_lnt">
    <p style="margin:0">
    www.chitkara.edu.in
    </p></a></td>
    </tr>
    </tbody></table>
    </td></tr></tbody></table>
    </td>
    </tr>
    </tbody></table>
    <table width="100%" cellspacing="0" cellpadding="0" align="center">
     <tbody><tr><td colspan="4" height="30"></td></tr>
    </tbody></table>
    </div>`
    }
    else if(type=="return" || type=="going"){
        html=`
        
        <div style="background-color:#e5e9ec">
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
    <tbody><tr>
    <td>
    <table width="100%" cellspacing="0" cellpadding="0" align="center">
     <tbody><tr><td colspan="4" height="30"></td></tr>
    </tbody></table>
    <table style="padding:20px;border-radius:7px;background-color:#fff" width="90%" cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody><tr>
    <td>
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
    <tbody><tr>
    <td colspan="1" style="border-bottom:1px solid #ccc;padding-bottom:15px" width="55" align="left">
    <img src="https://ci3.googleusercontent.com/meips/ADKq_Na0oePAtKOd_umuGgjqwHQZih65d92g__IkwaPOJXnHnTNxh_zxrKQyeCjng-Ue4Kwut1lex7qAbKC4x-jcqA9wVkSgtoXZAcIdiyThciQ=s0-d-e1-ft#https://punjab.chitkara.edu.in/Storage/Images/cu-icon.png" style="display:block" width="52" height="52" class="CToWUd" data-bit="iit"></td>
    <td colspan="3" style="font:19px arial;color:#333;border-bottom:1px solid #ccc;color:#4774a0;padding-bottom:8px">
    <p style="padding:0;margin-left:10px">
    <u></u>
    </p></td>
    </tr>
    </tbody></table>
    <table width="100%" cellspacing="5px" cellpadding="5px" border="0">
    <tbody>
        <tr>
        <td height="15"></td>
        </tr>
      <tr>
      <td style="font-size:15px;font-family:Verdana,Arial,Helvetica,sans-serif;width:50%;background-color:#c6e0f9;padding:8px"><b>Student Information</b></td>
     </tr>
    <tr>
        <td style="color:#333;line-height:20px;background-color:#87ceeb0f;vertical-align:top">
            <table border="0" cellpadding="2px" cellspacing="0" width="60%">
                    <tbody><tr>
                        <td nowrap="">
                            Your ward <b>NAMAN BANSAL</b>  has ${type} from the University at <b>${date} ${time}</b> through Gate Token GT- : <b>${token}</b>
                        </td>
                    </tr>
                     <tr><td></td></tr>
                      <tr>
                        <td nowrap="">
                            For any Query - <b>9501118137,9501118137,<wbr>9501118137</b>.
                        </td>
                    </tr>  
                   
                </tbody></table>
        </td>
        
    </tr>
    </tbody>
    </table><table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                <td colspan="4" height="15"></td>
                </tr>
                <tr>
                <td style="font:10px arial;color:#9a9a9a">
                <p style="margin:0">
                This email is a copy of the communication shared through the ChalkERP App and is for information purpose only. Please do not reply to this.
                </p></td>
                </tr>
                <tr>
                <td colspan="4" height="15"></td>
                </tr>
                
                <tr>
                <td style="font:10px arial;color:#9a9a9a">
                <p style="margin:0">
                Powered by Chitkara
                </p><a href="https://chitkara.edu.in" style="color:#7093be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://chitkara.edu.in&amp;source=gmail&amp;ust=1726726442295000&amp;usg=AOvVaw1V0TlWEuoac5Up4cvouABH">
                <p style="margin:0">
                www.chitkara.edu.in
                </p></a></td>
                </tr>
                </tbody></table>
                </td></tr></tbody></table>
                </td>
                </tr>
                </tbody></table>
                <table width="100%" cellspacing="0" cellpadding="0" align="center">
                 <tbody><tr><td colspan="4" height="30"></td></tr>
                </tbody></table>
                </div>`
    }
    else{
        return Response.json({'success':"false","message":"wrong Type"})
    }
const func =async () => {
const mailData = {
    from: {
        name: `Chitkara University`,
        address: "chitkarauniversitycupunjab@gmail.com"
    },
    to: [
        'namanbansal102@gmail.com',
    ].join(', '),
    subject: `UHostel Naman Bansal(2310990580) ${type} ${date} ${time}`,
    html: html,
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
    return Response.json({"success":true,"message":"Sent Succesfully"})
}   
function generateUniqueSixDigitNumber() {
    let digits = new Set();

    while (digits.size < 6) {
        let randomDigit = Math.floor(Math.random() * 10); // Generates a digit from 0 to 9
        digits.add(randomDigit);
    }

    // Convert the set to a string and join the digits
    return Array.from(digits).join('');
}

console.log(generateUniqueSixDigitNumber());
