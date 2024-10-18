import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "techtitans164@gmail.com",
      pass: "iqks xdog xtai gxrf"
    },
    secure: true,
});

export async function POST(req:Request,res:Response){
    const p:any=res;
    console.log(p);  
    const data=await req.json();
    let type=data.person;
    let mail=data.mail;
    let mentorName=data.mentorName;
    let timeSlot=data.timeSlot;
    let specailization=data.special;
    let userName="user";
    userName=data.userName;
    let html=``;
    if(type=="user"){
        html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MentorShip Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 20px;">
    <div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 30px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 8px;">
        <div style="text-align: center; color: #ff6600; font-size: 28px; margin-bottom: 20px;">Congratulations, Your Session Has Been Confirmed!</div>
        <div style="text-align: center; font-size: 20px; margin-bottom: 30px; color: #333;">Mentorship Session Details</div>
        <div style="font-size: 16px; color: #555; line-height: 1.6;">
            Dear <span style="font-weight: bold; color: #333;">${userName}</span>,
            <br><br>
            We are pleased to inform you that your booking for a mentorship session has been successfully confirmed. Here are the details of your upcoming session:
            <br><br>
            <strong>Mentor:</strong> <span style="font-weight: bold; color: #333;">${mentorName}</span><br>
            <strong>Specialization:</strong> <span style="font-weight: bold; color: #333;">${specailization}</span><br>
            <strong>Course Title:</strong> <span style="font-weight: bold; color: #333;">
            ${specailization}</span><br>
            <strong>Session Validity:</strong> <span style="font-weight: bold; color: #333;">${timeSlot}</span><br>
            <br>
            The session will cover the following topics:
            <ul>
                <li>Overview of <span style="font-weight: bold; color: #333;">${specailization}</span> and its applications.</li>
                <li>In-depth discussions on core concepts related to the course.</li>
                <li>Personalized guidance based on your current skill level and career goals.</li>
                <li>Hands-on exercises and practical advice to help you master the subject.</li>
            </ul>
            <br>
            We recommend reviewing the pre-session materials and preparing any questions you may have to make the most out of your mentorship experience.
            <br><br>
            If you have any questions regarding your booking or need assistance, please do not hesitate to contact us at <a href="mailto:support@yourwebsite.com" style="color: #ff6600; text-decoration: none;">support@yourwebsite.com</a>.
        </div>
        <div style="text-align: center; margin-top: 20px;">
            <a href="[Link to Dashboard]" style="background-color: #ff6600; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">Go to Your Dashboard</a>
        </div>
        <div style="margin-top: 30px; font-size: 14px; color: #777; text-align: center;">
            Thank you for choosing our mentorship program. We look forward to helping you achieve your learning goals!
            <br><br>
            Best Regards,<br>
    SLIET }
        </div>
    </div>
</body>
</html>`
    }
    else if (type=="mentor") {
        html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Mentorship Session Booked</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 20px;">
    <div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 30px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 8px;">
        <div style="text-align: center; color: #ff6600; font-size: 28px; margin-bottom: 20px;">New Mentorship Session Booked</div>
        <div style="text-align: center; font-size: 20px; margin-bottom: 30px; color: #333;">Session Details</div>
        <div style="font-size: 16px; color: #555; line-height: 1.6;">
            Dear <span style="font-weight: bold; color: #333;">${mentorName}</span>,
            <br><br>
            We are excited to inform you that a new mentorship session has been booked. Below are the details of the scheduled session:
            <br><br>
            <strong>User:</strong> <span style="font-weight: bold; color: #333;">SLIET</span><br>
            <strong>Email:</strong> <span style="font-weight: bold; color: #333;">${mail}</span><br>
            <strong>Course Title:</strong> <span style="font-weight: bold; color: #333;">${specailization}</span><br>
            <strong>Specialization:</strong> <span style="font-weight: bold; color: #333;">${specailization}</span><br>
            <strong>Session Validity:</strong> <span style="font-weight: bold; color: #333;">${timeSlot}</span><br>
            <br>
            <strong>Topics to be Covered:</strong>
            <ul>
                <li>Introduction to <span style="font-weight: bold; color: #333;">${specailization}</span> and key concepts.</li>
                <li>Guidance on specific areas of interest based on the user's background.</li>
                <li>Hands-on activities to reinforce understanding.</li>
                <li>Q&A session to address the user's queries and challenges.</li>
            </ul>
            <br>
            Please review the user's background and any additional information provided to tailor the session to their needs. If any preparatory materials are necessary, you may wish to share them with the user in advance.
            <br><br>
            Should you need further details or have any questions, feel free to contact us at <a href="mailto:support@yourwebsite.com" style="color: #ff6600; text-decoration: none;">support@yourwebsite.com</a>.
        </div>
        <div style="text-align: center; margin-top: 20px;">
            <a href="[Link to Mentor Dashboard]" style="background-color: #ff6600; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">View Session Details</a>
        </div>
        <div style="margin-top: 30px; font-size: 14px; color: #777; text-align: center;">
            Thank you for being a part of our mentorship program. We look forward to a successful session!
            <br><br>
            Best Regards,<br>
            SLIET
        </div>
    </div>
</body>
</html>`
    }
    else{
        return Response.json({'success':"false","message":"wrong Type"})
    }
const func =async () => {
const mailData = {
    from: {
        name: `MentorShip Programme`,
        address: "techtitans164@gmail.com"
    },
    to: [
        'namanbansal102@gmail.com',
        mail
    ].join(', '),
    subject: `Your MentorShip Programme`,
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
